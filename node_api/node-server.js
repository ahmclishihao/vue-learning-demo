const httpS = require('http');
const url = require('url');

const userList = []

for(var i = 0 ; i < 23; i++){
    userList.push({
        "id": 1+i,
        "name": `张三 ${i}`,
        "age": 11,
        "address": `安徽 ${i}`,
        "birthday": "2017-07-07 07:07:07",
        "type": "male",
        "favorites": [
            "兵乓球",
            "跳舞",
            "画画"
        ]
    });
}


httpS.createServer( function (request, response) {  
    var urlData = url.parse(request.url);
    var pathname = urlData.pathname;

    console.log("Request for " + urlData + " received.");
    response.writeHead(200, {
        'Accept':'*',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Expose-Headers':'*',
        'Content-Type': 'application/json;charset=utf-8'
    });
    response.write(JSON.stringify(userList));        
    response.end();
    
 }).listen(8181);