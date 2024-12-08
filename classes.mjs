class Node {
  constructor(value) {
    this.value = value
    this.nextNode = null 
  }
}

class LinkedList {
  constructor() {
    this.firstNode = null
  }

  append(value) {
    // adds a new node containing value to the end of the list
    const newNode = new Node(value)
    if (this.firstNode) {
      let currentNode = this.firstNode
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode
      }
      currentNode.nextNode = newNode
    } else { 
      this.firstNode = newNode
    }
  }

  prepend(value) {
    // adds a new node containing value to the start of the list
    const newNode = new Node(value)
    if (this.firstNode) {
      newNode.nextNode = this.firstNode
      this.firstNode = newNode

    } 
    this.firstNode = newNode
  }

  size() {
    // returns the total number of nodes in the list
    let count = 0
    let currentNode = this.firstNode
    while (currentNode) {
      count += 1
      currentNode = currentNode.nextNode
    }
    return count
  }

  head() {
    // returns the first node in the list
    return this.firstNode
  }

  tail() {
    // returns the last node in the list
    let currentNode = this.firstNode.nextNode
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  at(index) {
    // returns the node at the given index
    const errorMessage = `not found`
    
    if (this.firstNode) {
      let currentNode = this.firstNode
      for (let current = 0; current < index; current++) {
        if (currentNode.nextNode) {
          currentNode = currentNode.nextNode   
        } else {
          return errorMessage
        }
      }
      return currentNode
    } 
    return errorMessage
  }

  pop() {
    // removes the last element from the list
    if (this.firstNode) {
      let currentNode = this.firstNode
      while (currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode
      }
      currentNode.nextNode = null
    }
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false.
    if (this.firstNode) {
      let currentNode = this.firstNode
      while (currentNode) {
        if (value == currentNode.value) {
          return true
        }
        currentNode = currentNode.nextNode
      }
    }
    return false
  }

  find(value) {
    // returns the index of the node containing value, or null if not found.
    if (this.firstNode) {
      let index = 0
      let currentNode = this.firstNode
      while (currentNode) {
        if (value == currentNode.value) {
          return index
        }
        index += 1
        currentNode = currentNode.nextNode
      }
    }
    return null
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let string = ''
    if (this.firstNode) {
      let currentNode = this.firstNode
      while (currentNode) {
        string += `${currentNode.value} -> `
        currentNode = currentNode.nextNode
      }
      string += `null`
    }
    return string
  }

  //BONUS
  //Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.
  insertAt(value, index) {
    // inserts a new node with the provided value at the given index.
  }

  removeAt(index) {
    // removes the node at the given index.
  }

}

export { LinkedList }