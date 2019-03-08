// update常见的错误
var workmate1 = {
    name: 'caoyp',
    age: 18,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        SkillTwo: 'JavaScript',
        SkillThree: '...'
    },
    regeditTime: new Date()
}
var workmate2 = {
    name: 'ShengLei',
    age: 30,
    sex: 1,
    job: 'JAVA后端',
    skill: {
        skillOne: 'HTML+CSS',
        SkillTwo: 'J2EE',
        SkillThree: 'PPT'
    },
    regeditTime: new Date()
}
var workmate3 = {
    name: 'MinJie',
    age: 20,
    sex: 1,
    job: 'UI设计',
    skill: {
        skillOne: 'PhotoShop',
        SkillTwo: 'UI',
        SkillThree: 'Word+Excel+PPT'
    },
    regeditTime: new Date()
}

var db = connect('company');

var workmateArr = [workmate1, workmate2, workmate3];

db.workmate.insert(workmateArr);

print('success: this data was inserted successfully.');
