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

