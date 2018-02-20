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

### For Developers

Re-import geocoded donation drop boxes in production database by running the following command:

`DATABASE_URL=$(heroku config:get DATABASE_URL -a give-my-stuff) PGSSLMODE=require node scripts/import-donation-drop-boxes-csv.js [PATH_TO_CSV]`
