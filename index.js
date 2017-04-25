'use strict';
var jwt = require('jwt-simple');
var secret = 'ID_TOKEN_SECRET34444444444444444444444';

// encode
var token = "eyJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZV9pZCI6ImRkZGRkIiwiYmFzaWNfaW5mbyI6IiIsImxvY2FsX2lkIjoiZGRkZGQiLCJ1c2VyX25hbWUiOiIiLCJjbGllbnRfaWQiOiIyMjIyIn0.BvkRj3zr97ZxipN1-THS84-iTHkmwdlD8fEXH2qvDF4";

// decode
var decoded = jwt.decode(token, secret);
console.log(decoded);

var payload = {"basic_info":"","local_id":"ddddd","user_name":"","resource_id":"ddddd","client_id":"2222"}
token =  jwt.encode(payload, secret);
console.log(token);