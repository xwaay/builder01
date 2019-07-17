var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('test01', {
    "connector": "memory",
    "fields": {
        "testfield01": {
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