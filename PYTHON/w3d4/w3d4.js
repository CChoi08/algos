/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [7, 7, 28, 28, 56, 56];
const expected3 = [7, 28, 56];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */

function dedupeSorted(sortedNums) {
    let dupe_dict = {}
    for(var i = 0; i < sortedNums.length; i ++) {
        var j = sortedNums[i].toString()
        dupe_dict[j] = 1
    }
    var ans_arr = Object.keys(dupe_dict)
    for(var i = 0; i <ans_arr.length; i++) {
        ans_arr[i] = parseInt(ans_arr[i])
    }
    return ans_arr
}



console.log(dedupeSorted(nums1)); // [1]
console.log(dedupeSorted(nums2)); // [1, 2, 3]
console.log(dedupeSorted(nums3)); // [7, 28, 56]
console.log(dedupeSorted(nums4)); // [1]





/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1B = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2B = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3B = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4B = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */

// function interleaveArrays(arr1, arr2) {
//     var empty = []
//     for (var i = 0; i < arr1.length; i++) {
//         empty.push(arr1[i])
//         if (i <= arr2.length-1) {
//             empty.push(arr2[i])
//         }
//     }
//     if ( arr2.length > arr1.length) {
//         for (var j = arr1.length-1; j < arr2.length; j++) {
//             empty.push(arr2[i])
//         }
//     }
//     return empty
// }

function interleaveArrays(arr1, arr2) {
    let length = arr1.length > arr2.length ? arr1.length : arr2.length
    let combined  = []
    for (let i = 0; i < length; i++){
        if (arr1[i] != undefined) combined.push(arr1[i])
        if (arr2[i] != undefined) combined.push(arr2[i])
    }
    return combined
}

console.log(interleaveArrays(arrA1, arrB1)); //  [1, "a", 2, "b", 3, "c"];
console.log(interleaveArrays(arrA2, arrB2)); // [1, 2, 3, 4, 6, 8];
console.log(interleaveArrays(arrA3, arrB3)); // [1, 2, 3, 4, 5, 7];
console.log(interleaveArrays(arrA4, arrB4)); // [42, 0, 6];