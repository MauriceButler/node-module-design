var url = require('url'),
    routes = {};

require('./dogRoutes')(routes);
require('./catRoutes')(routes);

function routeRequests(request, response){
    var urlPath = url.parse(request.url).pathname;

    if(routes[urlPath]){
        routes[urlPath](request, response);
    } else {
        response.statusCode = 404;
        response.end();
    }
}

module.exports = routeRequests;
