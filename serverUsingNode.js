/* using http module(inbuilt given by node)*/
const http=require('http');
const PORT=3000;
/**
 *HTTP module contains a function called as createServer 
 * this createServer function takes a callback as the input 
 * Now inside the callback, we get two arguments
 *     -request ->this argument contains all the details about the incoming req
 *     -response ->this argument contains functions using which we can prepare the response 
 * this createServer function return us the server object
 */

const server=http.createServer(function exec(request,response){
    console.log(request.method);
    if(request.url=='/home'){
        response.end("Welcome to home");
    }else if(request.url=='/faq'){
        response.end("List all the FAQs");
    }else{
        response.end("BASIC SERVER");
    }
});

server.listen(PORT, function process(){
    console.log("Server started on port ",PORT);
});