class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeList(l1,l2){

    let newList = new ListNode(0);
    let cuurent = newList;

    while(l1 != null && l2 != null){
        if(l1.val <= l2.val){
            cuurent.next = l1;
            l1 = l1.next;
        } 
        else{
            cuurent.next= l2;
            l2 = l2.next
        }
        cuurent = cuurent.next;
    }

    if (l1 !== null) {
        cuurent.next = l1;
    }
    if (l2 !== null) {
        cuurent.next = l2;
    }
    return newList.next
   
}

let l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

let mergedList = mergeList(l1, l2);




