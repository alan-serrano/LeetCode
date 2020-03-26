/**
 * @param {number[]} nums
 * @return {number[]}
 * Time Complexity O(nLogn)
 * Additional Space Complexity O(n)
 */

var smallerNumbersThanCurrent1 = function(nums) {
    const numsSorted = nums.slice().sort( (a,b) => a-b );
    const map = {};

    numsSorted.forEach( (val, idx) => {
        if( !map.hasOwnProperty(val) ) {
            map[val] = idx;
        }
    } )

    return nums.map( (num) => map[num] );
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Time Complexity O(n^2)
 * Additional Space Complexity O(n)
 */
var smallerNumbersThanCurrent2 = function(nums) {
    const result = new Array(nums.length).fill(0);
    
    for(let i=0; i < nums.length; i++) {
                
        for( let j = 0; j < nums.length; j++ ) {
            if( nums[j] < nums[i] ) {
                result[i]++;
            }
        }
    }
    
    return result;
};

console.log( smallerNumbersThanCurrent1([8,1,2,2,3]) );
console.log( smallerNumbersThanCurrent2([8,1,2,2,3]) );
