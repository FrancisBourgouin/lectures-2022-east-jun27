# QUESTIONS !

- Overview!

# How Rails Work ?

- Multi page app (TinyApp, Midterm project)
- Set up routes (Express)
- Database helper functions (pg)
- Template files (EJS)
- File uploader (Multer)

- Database stuff -> Active Record
- Routing -> ActionHelper
- Templating -> ERB
- File upload -> ActiveStorage
- Live connections (sockets) -> ActionCable
- Send email -> ActionMailer

CONVENTION OVER CONFIGURATION

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL
);

ALTER TABLE users
remove name

ALTER TABLE users
add first_name
add last_name

Model <- Concept (idea)
View
Controller
