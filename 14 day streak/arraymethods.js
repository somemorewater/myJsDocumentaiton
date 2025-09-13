//foreach

[1, 2, 3].forEach(function (item, index) {
    console.log(item, index)
});

//filter
const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
    return item % 2 === 0;
})
console.log(evens)

//some 
const hasNegativeNumber = [1 ,2, 3, -1, 4].some(function (item) {
    return item < 0;
})
console.log(hasNegativeNumber);

//every
const allPositiveNumber = [1, 2, 3].every(function (item) {
  return item > 0;
});
console.log(allPositiveNumber);

//find
const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const found = objects.find(function (item) {
    return item.id === 'b';
})
console.log(found);