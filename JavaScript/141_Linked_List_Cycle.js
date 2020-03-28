/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * Time Complexity O(n)
 * Additional Space O(1)
 */
var hasCycle = function(head) {
    if( head === null ) return false;
    var p1 = head;
    var p2 = head;
    
    while( p2.next !== null && p2.next.next !== null ) {
        p1 = p1.next;
        p2 = p2.next.next;
        
        if( p1 === p2 ) return true;
    }
    
    return false;
};