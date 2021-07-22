package com.makersacademy.acebook.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.makersacademy.acebook.model.User;
 
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {
	
	User user;
	
	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	UserRepository repo;
	
	@Test
	public void testCreateUser() {
	    user = new User();
	    user.setEmail("example@gmail.com");
	    user.setPassword("pswrd");
	    user.setName("zoomies");
        user.setLocation("location");
        user.setAbout("about me");
        user.setImage_url("xyz");
	     
	    User savedUser = repo.save(user);
	     
	    User existingUser = entityManager.find(User.class, savedUser.getId());
	     
	    assertThat(user.getEmail()).isEqualTo(existingUser.getEmail());
	    
	}
}
