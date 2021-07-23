## Acebook (renamed SpringBook)

Facebook clone developed in Java (Springboot & JUnit) and JavaScript (React) with PostgreSQL.

It uses:
  - `maven` to build the project
  - `webpack` to bundle the javascript
  - `thymeleaf` to serve `index.html`
  - `react` to make requests to the api and render the component views
  - `flyway` to manage `postgres` db migrations

### Project Board

[Kanban board](https://github.com/Juel07/acebook-zoomies/projects/1)

### Set up

- Fork and clone this repository to your machine
- Use an IDE, like `intellij` or `eclipse`, and select the project directory to load into the editor 
- From the command line create a dev database `createdb acebook_springboot_development`
- Install Maven `brew install maven`
- Build the app and start the server, using the Maven command `mvn spring-boot:run`
- Visit `localhost:8080`

### User Stories

- [ ] 1
```
As a User
So that the system can “remember” me and my data
I want to register by creating a  username & password
```

- [ ] 2
```
As a registered User
So that the system can authenticate me
I want to login with my username and password
```

- [x] 3 (MVP)
```
As a User 
So I can see what people are doing 
I want to see all the posts in the browser
```

- [x] 4 (MVP)
```
As a User 
So that I can let people know what I am doing
I want to post a message (post) and see it on the feed
```

- [x] 5
```
As a User
So that I can see when people are doing things
I want to see the date the message (post) was posted
```

- [ ] 6
```
As a User
So that people know me
I want to post a message with my name
```

- [x] 7 (MVP)
```
As a User 
So that I can easily see the latest posts
I want to see a list of posts in reverse chronological order
```

- [x] 8
```
As a User
To avoid embarrassment 
I want to delete my posts
```

- [x] 9
```
As a User
So I can appreciate other users’ thoughts
I want to be able to ‘Like’ posts (and like it only once)
```

- [ ] 10
```
As a User
So I can give my input
I want to give comments on posts
```

- [ ] 11
```
As a User
So I can avoid conflict
I want to delete my own comments
```

- [ ] 12
```
As a User
So I can be visible
I want to create a profile page
```

- [ ] 13
```
As a User
So I can search others
I want to see other people’s profile pages
```

### Domain Model

<img src="images/" width="65%">

### Wireframe

<img src="images/" width="65%">

### Team ✨

- Goncalo
- Hannah
- Irina
- Juel

Original project template by [Makers Academy](https://github.com/makersacademy/acebook-java-template).

