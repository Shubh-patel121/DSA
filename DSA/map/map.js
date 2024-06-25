/* 
In JavaScript, the Map data structure provides a way to create a collection of key-value pairs.
It allows you to store and retrieve values based on keys, similar to an object,
but with more advanced features such as:

   -> Ordered Keys: The keys are stored in the order they were added.
   -> Any Type of Key: Unlike objects, which can only use strings and symbols as keys, 
       a Map can use any data type (including objects) as keys.
   -> Size Property: The Map has a size property that indicates the number of entries.
   -> Methods: Map provides various methods for operations such as adding, removing, and checking for entries.
*/

//Note:- key value pair are represented by key => value , in map;

// 1. crete a empty map :-
const testMap = new Map();
console.log("testMap", testMap);

// with default values while creating map using array of arrays ;
/*  const entries = [['key1', 'value1'], ['key2', 'value2']];
  const map = new Map(entries); */
const newMap = new Map([
  ["key", "value"],
  [true, "testing map feature"],
]);
console.log("new Map", newMap);

// 2. to set and update a pair to map;
newMap.set(124, "this is number key in map");
console.log("new Map set", newMap);

// 3. get value in map;
const val = newMap.get(124);
console.log("new Map get", val);

// 4. Checking for Keys
//   You can check if a key exists in a Map using the has method:
console.log("is map has 124 key", newMap.has(124));

/* 5. deleting a pair in map */
// using delete method
newMap.delete(124)
console.log("update map after delete", newMap);

/* 
 6. Iterating Through a Map
You can iterate through the entries of a Map using various methods such as forEach, keys, values, and entries:
*/

newMap.forEach((key,value)=>{
        console.log("forEach", key, value);
})

// using for of loop;
for(let key of newMap.keys()){
    console.log("for of key", key);
}

for(let value of newMap.values()){
    console.log("for of value", value)
}

for(let [key, value] of newMap.entries()){
    console.log("for of entries", key , "value is:-" , value)
}

// 7. to get size of the map;
console.log("size of the map is",newMap.size);

// 8. clear the complete map using clear method;
console.log("new map value after clearing the map", newMap.clear());