/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Run time complexity: O(n)
 * Additional Space complexity: O(n)
 */

var twoSum = function(nums, target) {
    if(nums.length === 0 ) return [];
    
    let indicesMap = {};
    
    for(let i = 0; i < nums.length ; i++) {
        let num = nums[i];
        let complement = target - num;
        
        if( indicesMap.hasOwnProperty(complement)) {
            return [
                indicesMap[complement],
                i
            ];
        }
        
        indicesMap[num] = i;
    }

    return "No two sum solution";
};

