package com.employeemanagement.employe_management.security;


import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JWTService {

    private String secretKey ="pratyushsinha";

    private long jwtExpiration = 100_000;

    private final Logger logger = LoggerFactory.getLogger(JWTService.class);

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
//        return extractClaim(token, (e) -> e.getExpiration())
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimResolver) {
        final Claims claims =  extractAllClaims(token);
        return claimResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails);
    }

    public String createToken(Map<String, Object> claims, UserDetails subject) {
        String str = "";
        try {
            str = Jwts
                    .builder()
                    .setClaims(claims)
                    .setSubject(subject.getUsername())
                    .setIssuedAt(new Date(System.currentTimeMillis()))
                    .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                    .signWith(Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8)))
                    .compact();

        } catch (Exception e) {
            logger.info("Error is in the function createToken: {}", e.getMessage());
        }

        return str;
    }

    public boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }


    private Claims extractAllClaims(String token) throws JwtException {
        JwtParser parser = Jwts.parser()
                .setSigningKey(Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8)))
                .build();

        return parser.parseClaimsJws(token).getBody();
    }

}
