// 用js来写mongo命令

// 声明一个登陆名
var userName = 'caoyp'; 

// 声明登陆时间
var timestamp = Date.parse(new Date()); 

// 组成一个json串
var json = {"loginUser": userName, "loginTime": timestamp}; 

// 如果没有该库  会自动添加上connect中的库
var db = connect('log'); // 链接数据库

// 插入login表中
db.login.insert(json);

print('log print success');