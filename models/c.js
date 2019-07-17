var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('c', {
    "connector": "memory",
    "fields": {
        "n": {
            "type": "string"
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;