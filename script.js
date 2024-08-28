function Student(name,father_name,age,cls){
  this.name = name;
  this.fatherName = father_name;
  this.age = age;
  this.class = cls;
}
let student1 = new Student("nimra","Shahid Latif",18,"XII");
let student2 = new Student("kashaf","Zahid Latif",18,"XII")
 console.log(student1)   
console.log(student2)




function Plan(name,price,space,transfer,pages){
    this.Name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer
}
let person2 = new Plan("nimra","2000","29","1","34")
console.log(person2)



function Person(first,last,age,eye){
    this.First_Name = first;
    this.Last_name = last;
    this.age = age;
    this.eye = eye;
    this.full_name = function(){
        return this.First_Name + this.Last_name
    }
}
let person1 = new Person("John", "Doe", 50, "blue");
document.getElementById("demo").innerHTML ="My father is " +person1.age + "."; 
console.log(person1)










