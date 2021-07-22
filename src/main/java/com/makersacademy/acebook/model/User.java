package com.makersacademy.acebook.model;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;

import lombok.Data;

// @Data is a convenient shortcut annotation that bundles the features of @ToString, 
// @EqualsAndHashCode, @Getter / @Setter and @RequiredArgsConstructor together: In other words
@Data
// Specifies that the class is an entity
@Entity
// Specifies the primary table for the annotated entity
@Table(name = "USERS")
public class User {

    // Specifies the primary key of an entity
    @Id
    // Provides for the specification of generation strategies for the values of primary keys
    // IDENTITY: Indicates that the persistence provider must assign primary keys for the entity using a database identity column.
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    @Column(name = "name", nullable = false)
    private String name;
    
    @Column(name = "location")
    private String location;
    
    @Column(name = "about")
    private String about;
    
    @Column(name = "image_url")
    private String image_url;
    
//    public User(String user_email, String user_password, String user_name, String user_about, String user_location, String image_url) {
//        this.setEmail(user_email);
//        this.setPassword(user_password);
//        this.setName(user_name);
//        this.setLocation(user_location);
//        this.setAbout(user_about);
//        this.setImage_url(image_url);
//    }
    
	public Long getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	public String getEmail() {
		return email;
	}

	
	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getImage_url() {
		return image_url;
	}

	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}

}
