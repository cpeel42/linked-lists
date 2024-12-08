class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.firstNode = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.firstNode) {
      this.firstNode = this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.firstNode;
    this.firstNode = newNode;
    if (!this.tail) this.tail = newNode;
  }

  size() {
    let count = 0, currentNode = this.firstNode;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  head() {
    return this.firstNode;
  }

  tailNode() {
    return this.tail;
  }

  at(index) {
    if (index < 0) return null;

    let currentNode = this.firstNode;
    while (currentNode && index-- > 0) {
      currentNode = currentNode.nextNode;
    }
    return currentNode || null;
  }

  pop() {
    if (!this.firstNode) return;

    if (this.firstNode === this.tail) {
      this.firstNode = this.tail = null;
    } else {
      let currentNode = this.firstNode;
      while (currentNode.nextNode !== this.tail) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = null;
      this.tail = currentNode;
    }
  }

  contains(value) {
    let currentNode = this.firstNode;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0, currentNode = this.firstNode;
    while (currentNode) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = "", currentNode = this.firstNode;
    while (currentNode) {
      result += `${currentNode.value} -> `;
      currentNode = currentNode.nextNode;
    }
    return result + "null";
  }
}

export { LinkedList };