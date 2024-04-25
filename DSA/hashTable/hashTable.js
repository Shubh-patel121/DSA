// Note :- Objects are also known as Hash table ;

// Objects are used to store data in form of properties . here property is a key value pair.
// so we can say objects are the keyed collection of data ;

// create a object in js, simplest way, there exists multiple ways;
let obj = {};

let testObject = {
    // "key" : "value" ,
    studentName : "student",
    age: 13,
}

// Read value from object or hash table;
// using dot notation ;
    console.log( testObject.studentName)
// using square bracket;
    console.log(testObject["age"]);    

// update value using key;

  testObject.studentName = "shubham" ;
  console.log( testObject.studentName);

// delete property using key ;
   delete testObject.studentName ;
   console.log( testObject.studentName); // output will be undefined because now this is no more in testObject
   
// add or create a new property;
  testObject.studentName = "shubham" ;
  testObject.rollNumber = 99 ;
  console.log( testObject.studentName, testObject.rollNumber);  
