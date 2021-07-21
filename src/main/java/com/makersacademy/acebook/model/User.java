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
@Table(name = "POSTS")
public class Post {

    // Specifies the primary key of an entity
    @Id
    // Provides for the specification of generation strategies for the values of primary keys
    // IDENTITY: Indicates that the persistence provider must assign primary keys for the entity using a database identity column.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private LocalDateTime date;
    private int likes;
    private Long user_id;
    

    private Post() {}

    public Post(String content, LocalDateTime date, int likes, Long user_id) {
        this.content = content;
        this.date = date;
        this.likes = likes;
        this.user_id = user_id;
        
    }

}
package com.makersacademy.acebook.model;

public class User {
  
}
