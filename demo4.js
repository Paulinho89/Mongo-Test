// update修改器

var db = connect('company');

// 修改对象外层内容 $set
db.workmate.update({name: 'MinJie'}, {"$set": {sex: 2, age: 21}});

// 修改嵌套  $set
// db.workmate.update({name: 'MinJie'}, {"$set": {"skill.SkillThree": "word"}});

// 删除对象中的某个key
// db.workmate.update({"name": 'MinJie'}, {"$unset": {"age": ""}});

// 对数字进行计算 $inc
// db.workmate.update({"name": "MinJie"}, {$inc: {"age": -2}});

// $multi
// db.workmate.update({}, {$set: {interset: []}}, {multi: true});

// $upsert
// db.workmate.update({name: 'xiaoWang'}, {$set: {age:20}}, {upsert: true});

// $push
// db.workmate.update({name:'xiaoWang'}, {$push:{interset: 'draw'}});

// $ne
// db.workmate.update({name:'xiaoWang', "interset": {$ne: 'game'}}, {$push: {interest: "playGame"}});

// $addToSet
// db.workmate.update({name:'xiaoWang'}, {$addToSet: {interest: "readBook"}});

// $each
// var newInterset = ["Sing", "Dance", "Code"];
// db.workmate.update({name:'xiaoWang'}, {$addToSet: {interest: {$each: newInterset}}});

// $pop 1: 从数组末端进行删除   -1: 从数组的开端进行删除
// db.workmate.update({name:'xiaoWang'}, {$pop: {interest: 1}});

// 数组定位修改
// db.workmate.update({name: 'xiaoWang'}, {$set: {"interest.1": "Code"}})

print('success: this data was updated successfully.');