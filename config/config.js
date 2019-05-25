// COMME INDIQUE DANS LE PDF "05b-Node.js-Deployment.pdf" PAGE 12
// LAISSER CE FICHIER TEL QUEL SVP
require('dotenv').config();
module.exports = {

    development: {
        use_env_variable: "DB_CONNECTION",
        dialect: "mysql"
    },
    test: {
        use_env_variable: "DB_CONNECTION",
        dialect: "mysql"
    },
    production: {
        use_env_variable: "DB_CONNECTION",
        dialect: "mysql"
    }
};