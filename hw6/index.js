'use strict'
const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
];

const studentAverageMark = calculateStudentAverageMark(students[0]);
console.log('studentAverageMark', studentAverageMark);

const groupAverageMark = calculateGroupAverageMark(students);
console.log('groupAverageMark', groupAverageMark);



function calculateStudentAverageMark(student){
    const studentMarks = student.marks;
    return calculateAverage(studentMarks);
};

function calculateGroupAverageMark(students){
    let allStudentsMarks = [];

    // вариант 1, странный, но работающий
    // let allStudentsMarks = students.map((item) => item.marks).join(',').split(',').map(Number);

    // вариант с циклом, который можно заменить на forEach
    // let allStudentsMarks = [];
    // for (let i = 0; i < students.length; i++) {
    //     allStudentsMarks = allStudentsMarks.concat(students[i].marks);
    // }

    students.forEach(function (item){
    return allStudentsMarks = allStudentsMarks.concat(item.marks);
    });

    return calculateAverage(allStudentsMarks);
};


function getMarksSum (arr){
    return arr.reduce((acc,item) => acc + item);
};

function getAverage (val, arr){
    return val/arr.length;
};

function calculateAverage (arr){
    const sum = getMarksSum(arr);
    return getAverage(sum, arr);
}

