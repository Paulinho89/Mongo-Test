var db = connect('company');

// 参数：upsert -> false, 没有的话就不增加  multi -> true  全部修改
// db.workmate.update({sex: 1}, {$set: {money: 1000}}, false, true)

// getLastError 返回功能错误    db.listCommands() 查看所有的方法和属性
// var resultMessage = db.runCommand({getLastError: 1});

var myModify = {
    findAndModify: "workmate",
    query: {name: 'caoyp'},
    update: {$set: {age: 20}},
    new: true    //更新完成，需要查看结果，如果为false不进行查看结果
}
var ResultMessage = db.runCommand(myModify);

printjson(resultMessage);