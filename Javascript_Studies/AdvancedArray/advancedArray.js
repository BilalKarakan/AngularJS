const numbers = [1, 2, 3, 4];
const squareArray = [];

numbers.forEach(number => {
    squareArray.push(number * number);
})
console.log(squareArray);

//map 

const mapArray = numbers.map(number => number * 3);
console.log(mapArray);

//Filter

const filterArray = numbers.filter(number => number > 2);
console.log(filterArray);

//Reduce

const conclusion = numbers.reduce((acc, number) => {
    return acc + number;
})
console.log(conclusion);

const conclusion2 = numbers.reduce((acc, number) => {
    return acc + number;
}, 10)
console.log(conclusion2);