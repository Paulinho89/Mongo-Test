// 管理：用户的创建、删除和修改

// 创建用户
db.createUser({
    user: "caoyp",
    pwd: "caoyp615",
    customData: {
        name: '远鹏',
        email: 'caoyuan_peng@163.com',
        age: 18,
    },
    roles: [
        {
            role: "readWrite",
            db: "company"
        },
        'read'
    ]
})

// 查找用户信息
db.system.users.find();

// 删除用户
db.system.users.remove({user: "caoyp"});

// 建权 正确返回1，错误返回0
db.auth("caoyp", "123456");

// 启动建权
mongod --auth

// 登录
mongom  -u caoyp -p 123456 127.0.0.1:27017/admin
