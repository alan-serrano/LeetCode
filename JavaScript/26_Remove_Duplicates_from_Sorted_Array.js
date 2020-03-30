/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity O(n)
 * Additional Space O(1)
 */
var removeDuplicates = function(nums) {
    let counter = 0;
    let prevValue;
    let n = nums.length;
    
    for( let i = 0; i < n; i++) {
        let currentValue = nums[i];
        
        if( currentValue !== prevValue ) {
            counter++;
            nums[ counter - 1 ] = currentValue;
            prevValue = currentValue;
        }
    }
    
    nums.length = counter;
    
    return counter;
};