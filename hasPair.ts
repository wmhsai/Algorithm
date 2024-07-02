const hasPair = (numberArray, k) => {
    let map = {};

    for (let num of numberArray) {  //num=10  num=15
        let complement = k - num; //complement = 18-10 =8   18-15=3  18-3=15

        if (map[complement]) {
            return true;
        }

        map[num] = true; //map[10 ,15] =true 
    }

    return false;
}



const numbers = [10, 15, 3, 7];
const k = 18
console.log(hasPair(numbers, k));