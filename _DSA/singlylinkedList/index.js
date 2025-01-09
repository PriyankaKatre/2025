class Node {
    constructor(val) {
        this.value = val;
        this.next = null;

    }
}

class LinkedList {
     abc = "ppp";
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addAtHead(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    prepend(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    addAtPosition(val, position) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let tempNode = this.head;
            let count = 1;
            let aheadPointer = this.head.next;

            while (count < position - 1 && aheadPointer.next !== null) {
                tempNode = tempNode.next;
                aheadPointer = aheadPointer.next;
                count++;
            }
            if (this.size < position || position <= 0) {
                throw new Error("Position value is not in range");
            }
            console.log("size", this.size);

            tempNode.next = newNode;
            newNode.next = aheadPointer;
            this.size++;
        }
    }

    getNodeOfIndex(position) {
        let tempNode = this.head;
        let count = 1;
        while (count < position) {
            tempNode = tempNode.next;
            count++;
        }
        console.log("tempNode.value", tempNode.value);
    }

    deleteAtIndex(idx) {
        let tempNode = this.head;
        let count = 0;
        // if (this.head.next === null) {
        //     this.head = null;
        //     this.tail = null;
        //     this.size--;
        //     return;
        // }
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }
        while (count < idx - 1) {
            tempNode = tempNode.next;
            count++;
        }
        // if (this.size < position || position <= 0) {
        //     throw new Error("Position value is not in range");
        // }
        tempNode.next = tempNode.next.next;
        this.size--;
    }
    //1->2->3->5->6
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let newLinkedList = new LinkedList();
newLinkedList.append(1);
// newLinkedList.append(2);
// newLinkedList.append(3);
// newLinkedList.append(4);
// newLinkedList.append(5);
//newLinkedList.prepend(6);
//newLinkedList.addAtPosition(2, 2);
//newLinkedList.addAtPosition(8, 4);
//newLinkedList.getNodeOfIndex(3)

newLinkedList.deleteAtIndex(0);
// newLinkedList.addAtPosition(8, 5);

console.log("newLinkedList:", newLinkedList);
newLinkedList.printList();

