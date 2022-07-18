Current the Directus Cloud service does not have an import/export feature that includes all the data and files. So before you can try out the [Fresh Pokemon](https://github.com/jherr/fresh-pokemon) code you will need to import the data and files manually into your own database.

# Create The Database

* Log-on [Directus Cloud](https://directus.cloud/)
* Press Create to create a new database
* Name the project 'pokemon' (or whatever you like)
* Select `Community Cloud` as the database type
* Select `Empty Project` as the starting template

# Get the DB name

* You will get an email with the database URL and the login details
* From the URL given take the first part of the URL and use it as the DB name. For example, if the URL is `https://c7swx88u.directus.app` then the DB name is `c7swx88u`.
* In the browser, log-on to the new project

# Setup the Admin User

* Click on the `Users` tab in the left sidebar
* Select the Admin user
* Scroll down to `Token` field and click on the `+` button to generate a token, keep a record of this new token
* Click on the check icon to save the updated Admin user record

# Upload the images

* Click on the `Files` tab on the left sidebar
* Upload all the pokemon images in the `pokemon` folder into "Files" using drag and drop
* You will probably get a 504 error, this is expected
* Select `1000` from the number of files to show
* Select any broken images and click on the `trash` icon to remove them

# Get all the file data

* In the Files tab on the right hand sidebar select `Import/Export`
* Click on `Export Items`
* Select `JSON` as the format
* Select limit of `1000` from the Limit dropdown
* Click on the Download File button to download the JSON file
* Move the downloaded file into this directory and rename it `files.json`
* Run the following command in the terminal:

```sh
node add-images.js
```

This will take the existing `pokemon.json` file and add the image IDs to it and create a new file called `pokemon-with-images.json`

# Create the Pokemon Collection

* Click on the `Content` icon on the left sidebar
* Click on `Create Collection`
* Name the collection `pokemon`
* Click on `Finish setup` to build the collection
* Click on `Create Fields` multiple times to add these fields to the collection

| Key | Interface | Type |
|------|------|------|
| name | input field | string |
| type | tags | |
| hp | input field | integer |
| attack | input field |integer |
| defense | input field | integer |
| special_attack | input field | integer |
| special_defense | input field | integer |
| speed | input field | integer |
| image | image | |

# Import the data

* Click on the `Content` icon on the left sidebar
* Select `Import/Export` on the right sidebar
* Click on the `Import` button
* Select the `pokemon-with-images.json` file
* Click on the `Start Import` button
* Select one of the pokemon to ensure that the images are linked

# Create another user with read-only permissions

* Click on the `Users` icon on the left sidebar
* Click on the `+` button to create a new user
* Specify a name and email for the user
* Scroll down and generate a token for the user and save it

* Click the `Save` button to save the user
* Click on the user and click on the Role button with the `+` to create a new role
* Name the role `readonly`
* Click on the save button for the user

* Click on the Gear icon to bring up the settings page
* Click on `Roles & Permissions`
* Select the `readonly` role
* On the `Permissions` table click on the icon under the `eye` then select `All Access`
* Open the `System Collections` spinner to open up the system collections
* Add the `eye` permission to `Directus Files`

Your project is ready to use.
