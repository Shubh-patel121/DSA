/* 
the Set data structure allows you to create a collection of unique values.
 It provides an efficient way to store and manipulate data without duplicate elements.
*/

// 1. crete a set ;
const testSet = new Set();
console.log("create:-", testSet);

// 2. add items to set;
const set = new Set([1, 2, "three", true]);
console.log("add when creating", set);

// add by method;
set.add("added");
console.log("add by method", set);

// 3. check for existence using has;
console.log("is three available:-", set.has("three"));

// 4. removing item from set using delete;
set.delete("added");
console.log("updated set after deleting added item", set);

// 5. looping or iterating through set
//using for of loop;
for (let item of set) {
  console.log("item of set:-", item);
}

// using forEach loop;
set.forEach((item) => console.log("item of set by forEach method:-", item));

// 6. check size of the set;
console.log("size of the set is :-", set.size);

// 7. clear the all items from set;
set.clear();
console.log("set after clear", set);

// 8. union of two set ;
const setA = new Set(["setA1", "setA2"]);
const setB = new Set(["setB1", "setB2"]);

const getSetUnion = (firstSet, secondSet) => {
  // below resulting set already have items of first set at initialization;
  let resultingSet = new Set(firstSet);
  secondSet.forEach((item) => resultingSet.add(item));
  return resultingSet;
};

console.log("union set:-", getSetUnion(setA, setB));

// 9. intersection of two set;
const setC = new Set(["setC1", "setC2"]);
const setD = new Set(["setC1", "setD2"]);

const getSetIntersection = (firstSet, secondSet) => {
  let resultingSet = new Set();
  secondSet.forEach((item) => {
    if (firstSet.has(item)) {
      resultingSet.add(item);
    }
  });
  return resultingSet;
};

console.log("intersection set:-", getSetIntersection(setC, setD));

// 10. Difference of two set:-  delete common items from first set;
const setE = new Set(["setE1", "setE2"]);
const setF = new Set(["setE1", "setF2"]);

const getSetDifference = (firstSet, secondSet) => {
    let resultingSet = new Set(firstSet);
    secondSet.forEach((item) => {
        resultingSet.delete(item);
    });
    return resultingSet;
  };

  console.log("get set difference:-", getSetDifference(setE, setF));