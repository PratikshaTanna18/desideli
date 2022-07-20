const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'vasu-db.mysql.database.azure.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'pratikshadb'),
      user: env('DATABASE_USERNAME', 'zeal'),
      password: env('DATABASE_PASSWORD', 'Asdfghjkl1996@'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
