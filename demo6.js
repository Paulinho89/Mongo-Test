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

var workmate4 = {
    name: 'XiaoWang',
    age: 25,
    sex: 1,
    job: 'UI设计',
    skill: {
        skillOne: 'PhotoShop',
        SkillTwo: 'UI',
        SkillThree: 'PPT'
    },
    regeditTime: new Date()
}

var workmate5 = {
    name: 'LiangPeng',
    age: 26,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        SkillTwo: 'JavaScript'
    },
    regeditTime: new Date()
}

var workmate6 = {
    name: 'HouFei',
    age: 22,
    sex: 0,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        SkillTwo: 'JavaScript'
    },
    regeditTime: new Date()
}

var workmate7 = {
    name: 'LiuYan',
    age: 30,
    sex: 0,
    job: '美工',
    skill: {
        skillOne: 'PhotoShop',
        SkillTwo: 'CAD'
    },
    regeditTime: new Date()
}

var workmate8 = {
    name: 'DingLu',
    age: 20,
    sex: 0,
    job: 'UI设计',
    skill: {
        skillOne: 'PhotoShop',
        SkillTwo: 'CAD'
    },
    regeditTime: new Date()
}

var workmate9 = {
    name: 'JiaPeng',
    age: 20,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        SkillTwo: 'UIJavaScript'
    },
    regeditTime: new Date()
}

var workmate10 = {
    name: 'LiJia',
    age: 28,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        SkillTwo: 'JavaScript',
        SkillThree: 'PHP'
    },
    regeditTime: new Date()
}

var db = connect('company');

var workmateArr = [workmate1, workmate2, workmate3, workmate4, workmate5, workmate6, workmate7, workmate8, workmate9, workmate10];

db.workmate.insert(workmateArr);

print('success: this data was inserted successfully.');
