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
 */
var reverseList = reverseListRecursively;

/**
* Time Complexity O(n)
* Space Complexity O(1)
*/
function reverseListIteratively(head) {
    let prev = null;
    let current = head;
    let next;
    
    while ( current ) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
};

/**
* Time Complexity O(n)
* Space Complexity O(n)
*/
function reverseListRecursively(current, prev = null) {
    if( current === null ) return prev;
    
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    
    return reverseList( current, prev );
    
}

/**
* Time Complexity O(n)
* Space Complexity O(n)
*/
function reverseListRecursively2(current) {
    if( current === null || current.next === null ) return current;
    
    let newHead = reverseList(current.next);
    current.next.next = current;
    current.next = null;
    
    return newHead;
}