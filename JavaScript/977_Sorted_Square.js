/* Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121] 

Note:
     1 <= A.length <= 10000
-10000 <= A[i]     <= 10000
A is sorted in non-decreasing order.

 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    const n = A.length;

    if(n === 0) return;
    
    const arrSquare = A.map( (val) =>  val*val);
    const result = new Array(n);

    let left = 0;
    let right = n - 1;
    let index = n - 1;

    while(left <= right) {
        if( arrSquare[left] > arrSquare[right] ) {
            result[ index-- ] = arrSquare[left++];
        } else {
            result[ index-- ] = arrSquare[right--];
        }
    }

    return result;
};