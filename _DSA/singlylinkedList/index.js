class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    prepend(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

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
newLinkedList.append(2);
newLinkedList.append(3);
newLinkedList.append(4);
newLinkedList.append(5);
newLinkedList.prepend(6);

console.log("newLinkedList:", newLinkedList);
newLinkedList.printList();
