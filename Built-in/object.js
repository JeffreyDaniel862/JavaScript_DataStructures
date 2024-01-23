const obj = {
    name: "Jeffrey",
    age: 21,
    sayMyName: function () {
        console.log(this.name);
    }
}

obj.hobby = "nothing";
delete obj.hobby

console.log(obj);
console.log(obj.name);
console.log(obj['age']);
obj.sayMyName();

/* 
    removing and inserting has time complexity of O(1)
    access value has time complexity of O(1)
    search has time complexity of O(n)
    Object.keys() Object.values() Object.entries() has time complexity of O(n)
*/