let students = [
  {
    name: "Vaishnavi",
    batch: 8,
    marks: {
      science: 80,
      social: 70,
      hindi: 80,
      maths: 100,
      english: 90,
    },
  },
  {
    name: "Abhishek",
    batch: 10,
    marks: {
      science: 75,
      social: 75,
      hindi: 62,
      maths: 81,
      english: 52,
    },
  },
  {
    name: "Pappu",
    batch: 10,
    marks: {
      science: 70,
      social: 72,
      hindi: 75,
      maths: 95,
      english: 82,
    },
  },
  {
    name: "Ram",
    batch: 7,
    marks: {
      science: 35,
      social: 24,
      hindi: 22,
      maths: 95,
      english: 67,
    },
  },
  {
    name: "Shyam",
    batch: 9,
    marks: {
      science: 45,
      social: 87,
      hindi: 65,
      maths: 78,
      english: 99,
    },
  },
];

let studentDetails = students.map((student) => {
  let marksArray = Object.values(student.marks);
  let totalMarks = 0;
  marksArray.forEach((marks) => {
    totalMarks = totalMarks + marks;
  });
  let averageMarks = totalMarks / marksArray.length;
  return {
    name: student.name,
    batch: student.batch,
    averageMarks: averageMarks,
  };
});

console.log(studentDetails);
