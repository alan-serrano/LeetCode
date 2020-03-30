/**
 * @param {string} s
 * @return {number}
 * Time Complexity O(n)
 * Additional Space Complexity O(1)
 */
var romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000   
    }
    
    const n = s.length;
    let sum = 0;
    
    for( let i = 0; i < n; i++ ) {
        let currentValue = roman[s[i]];
        let nextValue = roman[s[i+1]];
        
        if( currentValue < nextValue && nextValue !== undefined) {
            sum-=currentValue;
        } else {
            sum+=currentValue;
        }
    }
    
    return sum;
};