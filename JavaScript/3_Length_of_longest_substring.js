/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;

    let stringMap = {}; // ch: index
    
    for(let p1 = 0, p2 = 0; p2 < s.length; p2++) {
        let ch = s[p2];
        
        if( stringMap.hasOwnProperty(ch) ) {
            p1 = Math.max(stringMap[ch] + 1, p1);
        } 
        
        maxLength = Math.max(p2 - p1 + 1, maxLength);
        stringMap[ch] = p2;
    }
    
    return maxLength;
};