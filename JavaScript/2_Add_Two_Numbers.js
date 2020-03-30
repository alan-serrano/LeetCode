/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let p = l1;
    let q = l2;
    let result = new ListNode(0);
    let r = result;
    
    while( p || q ) {
        let n1 = ( p ) ? p.val : 0;
        let n2 = ( q ) ? q.val : 0;
        let sum = n1 + n2 + carry;
        
        carry = Math.floor( sum/10 );
        r.next = new ListNode(sum % 10);
        r = r.next;
        
        if( p ) p = p.next;
        if( q ) q = q.next;
    }
    
    if( carry !== 0) {
        r.next = new ListNode( carry );
    }
        
    return result.next;
};