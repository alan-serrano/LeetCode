/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Using Binary Search
 * Time Complexity log(n)
 * 
 */
var searchInsert = function(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    let middle;
    
    while( min <= max ) {
        middle = Math.floor( ( max +  min ) / 2 );
        
        if( target === nums[middle] ) {
            return middle;
        } else if( target > nums[middle]) {
            min = middle + 1;
        } else if( target < nums[middle]) {
            max = middle - 1;
        }
    }
    
    return min;
};