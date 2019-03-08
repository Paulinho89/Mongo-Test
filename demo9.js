// find如何在js文本中使用
// 连接数据库
var db = connect('company'); 

// 查询的结果赋值给result
var result = db.workmate.find(); 

// 利用游标hasNext()循环结果
// if (result.hasNext()) {
//     printjson(result.next());
// }

// forEach循环
result.forEach(function(result) {
    printjson(result);
});