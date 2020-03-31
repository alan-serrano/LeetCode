/**
 * @param {number[]} nums
 * @return {boolean}
 * Time complexity O(n)
 * Space complexity O(n)
 */
var containsDuplicate = function(nums) {
    let map = {};
    
    for( let i = 0; i < nums.length; i++ ) {
        if( map.hasOwnProperty(nums[i]) ) {
            return true;
        } else {
            map[ nums[i] ] = true;
        }
    }
    
    return false;
};