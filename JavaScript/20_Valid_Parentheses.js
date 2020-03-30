/**
 * @param {string} s
 * @return {boolean}
 */

class Stack {
    constructor() {
        this.stack = [];
    }
    
    push(value){
        this.stack.push( value );
    }
    
    pop(){
        return this.stack.pop()
    }
    
    isEmpty() {
        return this.stack.length === 0;
    }
}

/**
 * 
 * Time Complexity O(n)
 * Space Complexity O(n)
 */
var isValid = function(s) {
    if( s.length === 0 ) return true;
    
    let openBrackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }    
    
    stack = new Stack();
    
    for(let i = 0; i < s.length; i++) {
        let bracket = s[i];
        
        if( openBrackets.hasOwnProperty( bracket ) ) {
            stack.push(bracket);
        } else {
            if( bracket !== openBrackets[stack.pop()] ) return false;
        }
    }

    return stack.isEmpty();
};