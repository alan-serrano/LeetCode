/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Time Complexity O(n)
 * Additional Space O(1)
 */
var removeElement = function(nums, val) {
    if( nums.length === 0 ) return;
    
    let j = 0;
    for( let i = 0; i < nums.length; i++ ) {
        if( nums[i] !== val ) {
            nums[j++] = nums[i]
        }           
    }
    
    return j;
};