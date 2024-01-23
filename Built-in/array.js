const arr = [1, 2, 3, "array"];

arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (const items of arr) {
    console.log(items);
}

/*
    other methods in arrays are map, filter, reduce, splice, slice

    removing/inserting element from start has time complexity of O(n)
    removing/inserting element from end has time complexity of O(1)
    accessing element has time complexity of O(1)
    searching element has time complexity of O(n)
    unshift, shift, map, filter, reduce, forEach, concat, splice, slice  O(n)
    pop, push O(1)
*/