/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function arrToListNode(arr) {
    if (arr.length === 0) {
        return new ListNode();
    }

    let head = new ListNode(arr[0]);
    let j = head;
    for (let i = 1; i < arr.length; i++) {
        j.next = new ListNode(arr[i]);
        j = j.next;
    }

    return head;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let i = l1;
    let j = l2;
    const h = new ListNode();
    let r = h;

    while (i !== null || j !== null) {
        if (i === null || (j !== null && i.val > j.val)) {
            r.next = new ListNode(j.val);
            r = r.next;
            j = j.next;
        } else if (
            j === null ||
            (j !== null && i.val <= j.val)
        ) {
            r.next = new ListNode(i.val);
            r = r.next;
            i = i.next;
        }
    }

    return h.next;
};

function expectequal(a, b, r) {
    return expect(
        mergeTwoLists(arrToListNode(a), arrToListNode(b))
    ).toMatchObject(arrToListNode(r));
}

test(" to equal", () => {
    expectequal([1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]);
});