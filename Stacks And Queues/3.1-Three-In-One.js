/**
 * Three in One: Describe how you could use a single array to
 * implement three stacks.
 */
Array.prototype.pop = function () {
    return this.slice(0, this.length - 1)
};

Array.prototype.push = function(){
    console.log(arguments[0])
    return this.push(arguments[0])
}

let array = new Array(15).fill(0);
array = [12, 23, 1, 2, 3, 5, 6, 7, 9, 9, 0, 0, 87, 6, 2];

function stack(stackSize, parts) {
    let factor = stackSize.length / parts;

    let createdArray = {
        arrayOne: new Array(stackSize.length / factor),
        arrayTwo: new Array(stackSize.length / factor),
        arrayThree: new Array(stackSize.length / factor)
    };
}

createdArray.arrayOne.pop();
createdArray.arrayTwo.pop();
createdArray.arrayThree.pop();

array.push(199)

console.log(x)

let splitStack = stack(array, 3);
