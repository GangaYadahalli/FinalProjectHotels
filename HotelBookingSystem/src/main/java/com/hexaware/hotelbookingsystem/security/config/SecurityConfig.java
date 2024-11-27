package com.hexaware.hotelbookingsystem.security.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.hexaware.hotelbookingsystem.filter.JwtAuthFilter;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
	
	@Autowired
	JwtAuthFilter authFilter;
	
	   @Bean
	    //authentication
	    public UserDetailsService userDetailsService() {
			
	       return new UserInfoUserDetailsService();
	    }
	   
	   @Bean
	   public SecurityFilterChain getSecurityFilterChain(HttpSecurity http) throws Exception {
	       return http.csrf().disable()
	               .authorizeHttpRequests()
	               .requestMatchers("/api/users/insert", "/api/users/login/authenticate","/api/hotels/insert","/api/rooms/insert","/api/hotels/getbyid/**","/api/bookings/create","/api/payments/process","/api/reviews/add","/api/payments/process","/api/payments/getbyid/**","/api/payments/getbyid/**","/api/payments/cancel/**","/api/bookings/getbystatus","/api/reviews/add","/api/reviews/delete/**","/api/reviews/getbyid/**","/api/reviews/average-rating/**","/api/bookings/getbyid/**").permitAll() // Public endpoints
	               .requestMatchers(HttpMethod.GET, "/api/users/getbyid/**","/api/users/updatePassword/*/*","/api/hotels/getByCity/**","/api/hotels/getByRating/**","/api/users/updatePhoneNumber/*/*","/api/rooms/getbyid/**").hasAuthority("GUEST") // Guest permissions
	               .requestMatchers("/api/users/update", "/api/users/delete/**", "/api/users/getall","/api/users/getByName/**","/api/hotels/getall","/api/hotels/update","/api/hotels/delete/**","/api/rooms/update","/api/rooms/delete/**","/api/rooms/getall","/api/rooms/updatePricePerNight/*/*","/api/rooms/updateCapacity/*/*").hasAuthority("ADMIN")
	               .anyRequest().authenticated() // All other requests must be authenticated
	               .and()
	               .sessionManagement()
	               .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Stateless sessions for APIs
	               .and()
	               .authenticationProvider(authenticationProvider()) // Custom authentication provider
	               .addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class) // Adding custom filter
	               .build();
	   }


	    @Bean    
	    public PasswordEncoder passwordEncoder() {          
	        return new BCryptPasswordEncoder();
	    }

	    @Bean
	    public AuthenticationProvider authenticationProvider(){
	        DaoAuthenticationProvider authenticationProvider=new DaoAuthenticationProvider();
	        authenticationProvider.setUserDetailsService(userDetailsService());
	        authenticationProvider.setPasswordEncoder(passwordEncoder());
	        return authenticationProvider;
	    }

	    
	    @Bean
	    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
	    	
	    	return config.getAuthenticationManager();
	    	
	    }

}
