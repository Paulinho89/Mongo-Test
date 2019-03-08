// update常见的错误
var db = connect('company');

// 错误示例
// db.workmate.update({"name": "MinJie"}, {"sex": 0});

// 正确示例
var workmate3 = {
    name: 'MinJie',
    age: 20,
    sex: 0,
    job: 'UI设计',
    skill: {
        skillOne: 'PhotoShop',
        SkillTwo: 'UI',
        SkillThree: 'Word+Excel+PPT'
    },
    regeditTime: new Date()
}
db.workmate.update({name:'MinJie'}, workmate3);

print('success: this data was updated successfully.');