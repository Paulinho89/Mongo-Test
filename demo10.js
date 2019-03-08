// 向company库中新建一个randomInfo，然后构造一个20万条数据的集合（表）

// 生成随机数
function getRandomNum(min, max) {
    // 随机区间
    let range = max - min;
    // 得到随机值 
    let rand = Math.random();

    return (min + Math.round(rand * range));
}

// console.log(getRandomNum(2, 8));

// 生成随机用户名
function getRandomNumName(min, max) {
    // 生成随机的字母数组
    let tempStringArr = '12345678qwerasdzxc'.split('');
    // 输出的变量
    let outPuttext = '';
    // 循环生成随机的用户名长度
    for (let i = 1; i < getRandomNum(min, max); i++) {
        // 随机抽取字母，拼接成用户名
        outPuttext = outPuttext + tempStringArr[getRandomNum(0, tempStringArr.length)];
    }
    return outPuttext;
}

// console.log(getRandomNumName(7, 16));

/* ------------------------------------------------------------------------------------------- */
// 开始插入20万的数据
// 记录执行的开始时间
var startTime = (new Date()).getTime();
// 链接数据库
var db = connect('company');
// 插入前先清空
db.randomInfo.drop();

var tempInfo = [];
// 循环数据
for (let i = 0; i < 200000; i++) {
    tempInfo.push({
        userName: getRandomNumName(7, 16),
        regditTime: new Date(),
        random0: getRandomNum(100000, 999999),
        random1: getRandomNum(100000, 999999),
        random2: getRandomNum(100000, 999999),
        random3: getRandomNum(100000, 999999),
        random4: getRandomNum(100000, 999999),
        random5: getRandomNum(100000, 999999),
        random6: getRandomNum(100000, 999999),
        random7: getRandomNum(100000, 999999),
        random8: getRandomNum(100000, 999999),
        random9: getRandomNum(100000, 999999)
    });
}
// 批量插入
db.randomInfo.insert(tempInfo);
// 运行时间
var runTime = (new Date()).getTime() - startTime;

print('插入执行时间：' + runTime + 'ms');