# Give My Stuff

### For Developers

Re-import geocoded donation drop boxes in production database by running the following command:

`DATABASE_URL=$(heroku config:get DATABASE_URL -a give-my-stuff) PGSSLMODE=require node scripts/import-donation-drop-boxes-csv.js [PATH_TO_CSV]`
