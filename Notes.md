# Extra notes for this project

If you have an empty folder, it will not keep track of that folder as **Git** only tracks files not folders. In order to avoid that you can create a `.gitkeep` file in that folder.

Setting up a project requires creating some initial folders and files which are:

```

        src ->
    constants.js, index.js, app.js,
    db
    routes
    middlewares
    utils
    constrollers
    models
```

Install dev dependencies like nodemon, prettier for better uniformity across code.

After installing _prettier_ some files are required to created for it to start fuctioning as desired. 
 - create a `.prettierrc` file where all prettier configurations like setting tabSpaces are maintained. 
 - create a .prettierignore file which contains filenames which are not to be formatted using _prettier_ like .env

## Database Connection

In order to avoid to cluttering the `index.js`(main server file), we create a module inside `db` folder which connects the database with the project.

The important credentials are stored in the `.env` file which is not to be uploaded to the *GIT*.

Always use `try catch` and `async await` while connecting the database.

We use `express().use` when you want change some configurations or add middleswares in the program 


`app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));` - Here we use **cors** module for resolving the 'Cross-Origin Resource Sharing (CORS)' error 

`app.use(express.json({ limit: "16kb" }));` - This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

`app.use(express.urlencoded({ extended: true, limit: "16kb" }));` - Built in Middleware which parses incoming requests with urlencoded payloads and is based on body-parser.

`app.use(express.static("public"));` - location of the static files

`app.use(cookieParser());` - To make use of cookies in our application, 'cookie-parser' middleware is used.
 - A Cookie is a piece of data sent to the client side with a request and is stored on the client-side itself by the Web Browser the user is currently using. 


As the purpose of UTILS is to write functions which are used multiple times and reduce repetitiveness.

Some basic UTILS are 
 - `ApiError` -> we create custom **Error** class as to generalize the error statements for uniformity and clarity.
 
 - `ApiResponse` -> custom class for generalized response.

 - `asyncHandler` -> A wrapper function for Express files so as to not repeat "async-await" and "try-catch" multiple times.

