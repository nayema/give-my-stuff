# Give My Stuff

This application allows the user to find nearby clothing drop box locations.

Source: 
[Open Data Toronto](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/)

**Front-End**
- Material-UI
- React
- Redux
- Sagas
- React Google Maps

**Back-End**
- Express
- PostgreSQL
- Csv Parser
- Knex
- Objection

### Manual database update

The command takes two arguments. This will run the script which takes the data from the csv file, gets the geo location using the google api and upload to heroku-database. This is fed to the google maps api upon loading the app.

`node <node-script> <csv-file>`

`node scripts/import-donation-drop-boxes-csv.js data/donation_drop_boxes.csv`

### For Developers

Re-import geocoded donation drop boxes in production database by running the following command:

`DATABASE_URL=$(heroku config:get DATABASE_URL -a give-my-stuff) PGSSLMODE=require node scripts/import-donation-drop-boxes-csv.js [PATH_TO_CSV]`

![Preview](https://media.giphy.com/media/dgsR0eCBEkuiwgZgDc/giphy.gif)

### License

[MIT License](http://opensource.org/licenses/MIT)
