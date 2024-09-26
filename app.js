function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = [];
  this.attendance = new Array(25).fill(null);

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };

  this.addGrade = function (grade) {
    if (grade >= 0 && grade <= 100) {
      this.grades.push(grade);
    } else {
      console.log("Оцінка повинна бути від 0 до 100");
    }
  };

  this.getAverageGrade = function () {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return this.grades.length ? sum / this.grades.length : 0;
  };

  this.present = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    } else {
      console.log("Всі заняття вже відмічені");
    }
  };

  this.absent = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    } else {
      console.log("Всі заняття вже відмічені");
    }
  };

  this.getAverageAttendance = function () {
    const totalClasses = this.attendance.filter(
      (value) => value !== null
    ).length;
    const presentCount = this.attendance.filter(
      (value) => value === true
    ).length;
    return totalClasses ? presentCount / totalClasses : 0;
  };

  this.summary = function () {
    const averageGrade = this.getAverageGrade();
    const averageAttendance = this.getAverageAttendance();

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}

const student1 = new Student("Олег", "Коваль", 2000);
const student2 = new Student("Аня", "Шевченко", 1999);

student1.addGrade(95);
student1.addGrade(87);

student2.addGrade(88);
student2.addGrade(92);

student1.present();
student1.present();
student1.absent();

student2.present();
student2.present();
student2.present();

console.log(
  `${student1.firstName} ${student1.lastName}: Вік - ${student1.getAge()}`
);
console.log(`Середній бал: ${student1.getAverageGrade()}`);
console.log(`Середня відвідуваність: ${student1.getAverageAttendance()}`);
console.log(student1.summary());

console.log(
  `${student2.firstName} ${student2.lastName}: Вік - ${student2.getAge()}`
);
console.log(`Середній бал: ${student2.getAverageGrade()}`);
console.log(`Середня відвідуваність: ${student2.getAverageAttendance()}`);
console.log(student2.summary());
