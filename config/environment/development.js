'use Strict';


const db_host = "localhost";
const db_port = "27017";
const db_name = "node_stream";

module.exports = {
    mongo: {
        uri: `mongodb://${db_host}:${db_port}/${db_name}`
    }
};