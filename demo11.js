// 普通查询性能测试  建立索引
var startTime = new Date().getTime();

var db = connect('company');

// db.randomInfo.find().skip(100000) 选择第10万条数据的其中一个用户名

// 建立第一条索引
db.randomInfo.ensureIndex({username: 1});

var rs = db.randomInfo.find({userName: 'crrdrxrrcw3s4'});

// 建立第二条索引
db.randomInfo.ensureIndex({randNum0: 1});

// 两个索引同时查询 （复合索引）
var rs = db.randomInfo.find({userName: 'crrdrxrrcw3s4', randNum0: 565509});

rs.forEach((rs) => {
    printjson(rs);
});

var runTime = new Date().getTime() - startTime;

print('运行时间' + runTime + 'ms');
