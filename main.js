//tạo cho em một cái object

// let car = {
//   color: "red",
//   model: "Mec",
//   madeIn: "Đức",
//   "model of car": ["Mec Thuong", "Maybach", "G63"],
//   year: {
//     2013: "Mec A",
//     2020: "Mec B",
//   },
//   run() {
//     console.log("running");
//   },
// };

// //lấy ra màu sắc của cái đối tượng car
// console.log("màu sắc của car là: ", car.color);
// //square brackets []
// console.log("các mẫu xe mẹc", car["model of car"]);

//number, string, boolean, null, undefined => kiểu dữ liệu đơn giản
//kiểu dữ liệu object sẽ chứa nhiều kiểu dữ liệu khác nhau
//thông qua thằng key - value
//value của một object chứa bất kỳ kiểu dữ liệu gì ví dụ number, string, mảng, null, undefined
// chứa chính nó => object

// const student = {
//   name: "Ha Nguyen",
//   age: 18,
//   address: "Ha Noi",
//   love: true,
//   "hoc lap trinh": "ez",
// };
// //thêm mới
// student.isMarried = "Chưa kết hôn";
// student["date of bird"] = "9/9/9999";

// //gọi nó ra
// student["date of bird ssssssss"];
// student["hoc lap trinh"] = "kho qua";

// console.log("student", student);

// //sửa
// student.love = false;

// //xóa được
// delete student.love;

// console.log("tình trạng yêu đương của c Hà Nguyễn là,", student);

//object, array, function => kiểu dữ liệu tham chiếu ==> Reference Types
//number , string => kiểu dữ liệu nguyên thủy

// let name = "Bui Van Vu";
// let age = 66;
// const isMarried = false;
// const isStudent = null;

// //những thằng khai báo ở trên lưu trên thanh ram
// //|==============================
// //|         name = "Bui Van Vu"  |                   |
// //|==============================
// const student = {
//   name: "Bui Van Vu",
//   age: 18,

//   run() {},
// };

// const callData = () => {
//   const student = {
//     name: "VU",
//     age: 20,
//   };
// };

//|==============================          ===============================
//|         student = "abcxyz    |  ===> |           address: "abcxyz", value: {name, age...}                   |
//|        student = "abcxyz"  |          |==============================
//=============================

//Gắn cho object
// //kieu du lieu nguyen thuy
// const a = 5;
// let b = a;
// b = 10;

// console.log(a); //5

// //kieu du lieu object
// const car1 = {
//   name: "BMW",
// };

// const car2 = car1;

// car2.name = "Mec";

// console.log(car1); //Mẹc

//So Sánh giữa hai cái object

// const car1 = {
//   name: "BMW",
// };

// const car2 = {
//   name: "BWM",
// };

// //so sánh car1 với car2
// console.log(car1 === car2); // false

//dùng function để đưa object vào

// function changeObject(value) {
//   //thay đổi value của object
//   value.name = "g63";
//   value.year = 2019;
// }

// const car = {
//   name: "Toyota",
//   year: 2018,
// };

// changeObject(car);

// console.log("ten cua xe", car.name);
// console.log("nam san xuat cua xe", car.year);

//Trường hợp có một key mà trùng nhau

// const names = "Nguyen Van A";
// const age = 18;

// // const student = {
// //   names: names,
// //   age: age,
// // };
// //ES6
// const student = {
//   names,
//   age,
// };

// const student = {
//   names: "Nguyen van A",
//   age: 17,
// };

// let name1 = student.names;
// let age1 = student.age;
// console.log("THuong", name1);
// console.log("THuong", age1);
// //Object Destructuring
// const { names, age } = student;
// console.log("Destructuring", names);
// console.log("Destructuring", age);

//object

// const autoBOT = {
//   name: "Optimus Prime",
//   height: "9m",
//   role: "Captain",
// };

// console.log("role" in autoBOT);

// console.log("isHero" in autoBOT);

//Duyet object
//Object.keys
//c1:
// const optimus = {
//   name: "optimus prime",
//   height: 900,
//   isHuman: false,
//   isHero: true,
//   role: "captain",
// };
// const keyList = Object.keys(optimus);
// console.log("key", keyList);
// for (let i = 0; i < keyList.length; i++) {
//   console.log("key object", keyList[i]);
//   console.log("value cua object:", optimus[keyList[i]]);
// }

// //C2: For-each
// keyList.forEach((key, index) => {
//   console.log("index", index);
//   console.log(key);
//   console.log(optimus[key]);
// });

// //c3: For...in
// for (let key in optimus) {
//   console.log(key);
//   console.log("value", optimus[key]);
// }

//ham Constructor
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let personVu = new Person("bui van vu", 23);
// console.log("day la Vu", personVu);
// let personDuc = new Person("Duc", 18);
// console.log("day la Duc", personDuc);

// //class cONSTRUCTOR
// class Person1 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let personA = new Person1("Nguyen Van A", 38);
// console.log("nguoi A", personA);
function Employee(employeeId, employeeName, salary) {
  this.employeeId = employeeId;
  this.employeeName = employeeName;
  this.salary = salary;
}

//demo hai chuc nang hien thi
//tinh ke thua ==> oop
Employee.prototype.displayEmployee = function () {
  console.log("Mã nhân viên là", this.employeeId);
  console.log("Tên nhân viên là", this.employeeName);
  console.log("Mức lương của nhân viên là", this.salary);
};

// Tăng Lương
Employee.prototype.upSalary = function (treatment) {
  const upToSalary = this.salary * (treatment / 100);
  this.salary = this.salary + upToSalary;
  console.log("Mức tăng theo phần trăm", treatment + "%");
  console.log("Mức lương sau khi tăng là", this.salary);
};

const personVu = new Employee("NV2009", "Bui Van Vu", 9000);

personVu.displayEmployee();
personVu.upSalary(10);

//class

class Employee {
  constructor(employeeId, employeeName, salary) {
    this.employeeId = employeeId;
    this.employeeName = employeeName;
    this.salary = salary;
  }
  displayEmployee() {
    console.log(`Mã số nhân viên là : ${this.employeeId} 
                 Tên Nhân Viên là : ${this.employeeName}
                 Mức lương của nhân viên là: ${this.salary}`);
  }
  increaseSalary(treatment) {
    const upToSalary = this.salary * (treatment / 100);
    this.salary = this.salary + upToSalary;
    console.log("Mức lương sau khi tăng là", this.salary);
  }
}

const personB = new Employee("NV900", "Bui Van Vu", 10000);

personB.displayEmployee();

personB.increaseSalary(10);
