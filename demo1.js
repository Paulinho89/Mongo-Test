// 批量插入数据的正确姿势

// 开始时间
var startTime = (new Date()).getTime();

// 连接数据库
var  db = connect('log');  

// 声明一个数组
var timeArray = [];

// 开始循环
// for (let i = 0; i < 1000; i++) { 
//     db.test.insert({ num: i });
// }

// 批量一次插入
for (let i = 0; i < 1000; i++) {
    timeArray.push({ num: i });
}
db.test.insert(timeArray);  

// 计算时间差
var runTime = (new Date()).getTime() - startTime; 

// 打印出来
print ('运行时间：:' + runTime + 'ms'); 