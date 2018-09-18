var MongoClient = require("mongodb").MongoClient;
var DB_URL = "mongodb://localhost:27017/chm"

function insertData(client){
    var db = client.db("chm")
    var devices = db.collection('vip')
    var data = {"name":"node", "age":22, "addr":"nb", "addTime":new Date()};

    devices.insertOne(data, function(error, result){
        if(error){
            console.log('Error:'+error);
        }else{
            console.log(result.result.n)
        }
        client.close();
    })
}
MongoClient.connect(DB_URL, function(error, client){
    console.log("连接成功")
    insertData(client)
})