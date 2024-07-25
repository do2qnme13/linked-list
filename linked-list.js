class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.size = 0;
  }
  //Append()
  append(value) {
    let currentNode = this.head;
    let newNode = new Node(value);
    if (!currentNode) {
      this.head = newNode;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size++;
  }
  //Prepend()
  prepend(value) {
    let currentNode = this.head;
    let newNode = new Node(value);
    if (currentNode) {
      this.head = newNode;
      newNode.next = currentNode;
    } else {
      this.head = newNode;
    }
    this.size++;
  }
  //Append at Index
  appendAt(value, index) {
    let previousNode = this.head;
    let newNode = new Node(value);
    let count = 1;

    if (index === 0 || !previousNode) {
      this.prepend(value);
    } else {
      while (count < index) {
        previousNode = previousNode.next;
        count++;
      }
      newNode.next = previousNode.next;
      previousNode.next = newNode;
    }
    this.size++;
  }
  deleteAt(index) {
    let previousNode = this.head;
    let currentNode = this.head;
    let count = 0;

    if (index === 0) {
      this.head = previousNode.next;
    } else {
      while (count < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      previousNode.next = currentNode.next;
    }

    this.size--;
  }
  // print All Linked List
  printAllValue() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  // print Head of Linked List
  printHead() {
    let currentNode = this.head;
    console.log(currentNode.value);
  }
  // print Tail of Linked List
  printTail() {
    let currentNode = this.head;
    let count = 0;
    while (count < this.size) {
      currentNode = currentNode.next;
      count++;
    }
    console.log(currentNode.value);
  }
}

let ll = new LinkedList(100);
ll.append(200);
ll.append(300);
ll.prepend(50);
ll.appendAt(60, 1);
ll.printAllValue();
