package com.makersacademy.acebook.model;

import javax.persistence.Entity;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private String name;
    private String location;
    private String about;
    private String image_url;

    private User() {}

    public User(String email, String password, String name, String location, String about, String image_url) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.location = location;
        this.about = about;
        this.image_url = image_url;
    }
}
