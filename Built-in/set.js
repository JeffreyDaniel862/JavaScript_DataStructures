const set = new Set([1, 2, 3, 4]);

set.add(4)
set.add(5)
set.delete(3);
for (const item of set) {
    console.log(item);
}
console.log("set size ",set.size);
console.log(set.has(4));

//clear method will clear all data in set