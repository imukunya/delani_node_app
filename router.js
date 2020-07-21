function route(handle, pathname,response){
    var response_content = "";
    console.log("About to route a request for " + pathname);
    // Check if the request url is a function. since we mapped the our expected request urls to a function in request handlers
    if (typeof handle[pathname]==='function'){
         return handle[pathname]()
    }else{
        response_content = "404 not found";
        console.log("No request handler found for " + pathname);
        response.writeHead(200, {"Content-type": "text/plain"});
       response.write(response_content);
       response.end();
    }
 }
 
 exports.route = route;