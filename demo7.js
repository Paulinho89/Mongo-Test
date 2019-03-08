// 一下示例基于demo6数据
// find 查询
db.workmate.find({"skill.skillOne": "HTML+CSS"});

db.workmate.find(
    {"skill.skillOne": "HTML+CSS"},
    {name: true, "skill.skillOne": true, _id: false}
);

/*
    * $lt 小于 less-than
    * $lte 小于等于 less-than-equal
    * $gt 大于 greater-than
    * $gte 大于等于 greater-than-equal
    * $ne 不等于 not-equal
*/
// 查找一下年龄小于30大于25岁的人员
db.workmate.find(
    {age: {$lte: 30, $gt: 25}},
    {name: true, age: true, "skill.skillOne": true, _id: false}
);

// 根据日期来查找
var startDate= new Date('03/06/2019');
db.workmate.find(
    {regeditTime: {$gt: startDate}},
    {name: true, age: true, "skill.skillOne": true, _id: false}
)

// $in 大于25岁小于30岁
db.workmate.find(
    {age: {$in: [25, 30]}},
    {name: 1, "skill.skillOne": 1, age: 1, _id: 0}
);

// $or 大于等于30或者技能会HTML+CSS的
db.workmate.find(
    {
        $or: [
            {age: {$gte: 30}},
            {"skill.skillThree": "HTML+CSS"}
        ]
    },
    {name: 1, "skill.skillOne": 1, age: 1, _id: 0}
);

// $not 大于30岁，小于25岁
db.workmate.find(
    {
        age: {
            $not: {
                $lt: 25,
                $gte: 30
            }
        }
    },
    {name: 1, "skill.skillOne": 1, age: 1, _id: 0}
);

/* ------------------------------------------------------------------------------------ */
// 以下示例基于demo8数据
// 先drop掉原来表里的数据
db.workmate.find(
    {
        interest: ['画画', '聚会', '看电影']
    },
    {
        name: 1, interest: 1, age: 1, _id: 0
    }
);

// 加上[]相当于完全匹配
db.workmate.find(
    {
        interest: ['看电影']
    },
    {
        name: 1, interest: 1,age: 1, _id: 0
    } 
)

// $all 数组多项查询
db.workmate.find(
    {
        interest:{$all:["看电影", "看书"]}
    },
    {
        name: 1, interest: 1, age: 1, _id: 0
    } 
)

// $in 数组或者查询
db.workmate.find(
    {
        interest: {$in:["看电影", "看书"]}
    },
    { 
        name: 1, interest: 1, age: 1, _id: 0
    } 
)

// $size 数组的个数查询
db.workmate.find(
    {
        interest: {$size: 5}
    },
    {
        name: 1, interest: 1, age: 1, _id: 0
    } 
)

// $slice 显示选项 展示兴趣的前两项  -1展示的兴趣的最后一项
db.workmate.find(
    {},
    {name: 1, interest: {$slice: 2}, age: 1, _id: 0 } 
)

// find参数查询 db.workmate.find
/*
    * query 查询的条件
    * fields 查询出来后显示的结果样式，可以用true或者false来控制
    * limit 返回的数量
    * skip 跳过多少个显示和limit结合可以实现分页
    * sort 排序方式，从小到大 1，从大到小 -1
*/
db.workmate.find({}, {
    name: true,
    age: true,
    _id: false
}).limit(2).skip(2).sort({age: 1});

// $where
db.workmate.find(
    {
        $where: 'this.age > 26'
    },
    {
        name: true, age: true, _id: false
    }
);

