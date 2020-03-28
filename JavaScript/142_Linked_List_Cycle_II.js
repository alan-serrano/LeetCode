/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * Time Complexity O(n)
 * Additional Space Complexity O(1)
 */
var detectCycle = function(head) {
    if( head === null || head.next === null) return null;
    
    var p1 = head;
    var p2 = head;
    
    while( p2.next !== null && p2.next.next !== null ) {
        p1 = p1.next;
        p2 = p2.next.next;
        
        if( p1 === p2 ) {
            
            p1 = head;
            while( p1 !== p2 ) {
                p1 = p1.next;
                p2 = p2.next;
            }
        
            return p1;
        }
    }
    
    return null;
};