const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Nithish@35",
    database: "eventdatabase",
    connector: "postgresql",
    port: 5432,
    host: "localhost"
});

module.exports = pool;