
// // Given an array of integers,
// // return a new array such that each element
// // at index i of the new array is the product of all the numbers in the
// // original array except the one at i.
// // If our input was [3, 2, 1], the expected output would be [2, 3, 6].

function productArrayExceptSelf(nums) {
    const n = nums.length;
    let result = 1
    for (let i = 0; i < n; i++) {
        result *= nums[i]
    }
    const divisonNumbers =nums.map((n)=> result / n)
    return (divisonNumbers)

}

// Example usage:
const nums = [1, 2, 3, 4, 5];
console.log(productArrayExceptSelf(nums)); // Output: [120, 60, 40, 30, 24]
