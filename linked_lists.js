// Linked Lists:

// Are comprised of nodes
// The nodes contain a link to the next node (and also the previous node for bidirectional linked lists)
// Can be unidirectional or bidirectional
// Are a basic data structure, and form the basis for many other data structures
// Have a single head node, which serves as the first node in the list
// Require some maintenance in order to add or remove nodes
// The methods we used are an example and depend on the exact use case and/or programming language being used


// Constructor and Adding to Head
// Let’s implement a linked list in JavaScript. As you might recall, a linked list is a sequential chain of nodes. Remember that a node contains two elements:

// data
// a link to the next node
// We are going to use a provided Node class, which you can find in Node.js. Make sure to use the proper Node methods throughout the lesson instead of accessing properties directly (ex. use someNode.getNextNode() instead of someNode.next).

// Depending on the end-use of the linked list, there are a variety of methods that we can define. For our use, we want to be able to:

// add a new node to the beginning (head) of the list
// add a new node to the end (tail) of the list
// remove a node from the beginning (head) of the list
// print out the nodes in the list in order from head to tail
// To start, we are going to create the LinkedList‘s constructor and .addToHead() method.

// The only property we need our linked list to have is a head, which we will add in our constructor. Inside the LinkedList class, define the constructor. It should take no parameters, and should set the list’s head to null.

// Define an .addToHead() method that takes one parameter called data. Inside the method, create a Node const variable named newHead, and pass data as an argument.

// Still inside your .addToHead() method, create a const variable named currentHead, and set it equal to the list’s head. Then change the list’s head to equal newHead.

// Finally, still in your .addToHead() method, check if there is a current head to the list. If there is, set the list’s head’s next node to currentHead.

const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

}

module.exports = LinkedList;

// Adding to Tail
// Now that we can add to the head of the linked list, the next step is to be able to add to the tail. This will require a few more steps since we don’t have a tail property in our linked list data structure.

// To do this, we are going to start with a temporary tail variable that will be set equal to the list’s head. If there is no head, that means that the list is empty, and we will add the node to the head of the list. Otherwise, we will iterate through the list until we find the last node. Once we’ve found the current tail, we will add a pointer from that node to our new tail.

// Define an .addToTail() method for the LinkedList that has one parameter called data. Create a variable named tail, and set it equal to the list’s head. tail is going to change throughout the method, so make it a let variable.

// Now that tail is equal to the head of the list, we want to check if it has any value. If tail has no value, then that means the list was empty, and we will be creating the head and tail with the data passed in.

// To do this, check if tail has no value. If so, set the list’s head equal to a new Node that takes data as an argument.

// If tail does have a value, that means the list is not empty. In that case, we want to iterate through the list until we find the end, so we can add tail to the end of the list.

// To do this, create an else after your if statement. Inside it, make a while loop that runs while tail has a next node. Inside the loop, set tail equal to its next node.

// (If you accidentally create an infinite loop and your code won’t stop running, you can reload the page to stop it.)

// Finally, inside the same else block, but outside the while loop, set tail‘s next node equal to a new Node that takes data as an argument.

const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  
}

module.exports = LinkedList;

// Removing the Head
// So far we can:

// create a new LinkedList using its constructor
// add to the head of the list using .addToHead()
// add to the tail of the list using .addToTail()
// Now we’re going to learn how to remove from the head of the list. To do this, we are first going to check to see if the list has a head. If it doesn’t, there is nothing to return. If there is a head, we will remove it by setting the list’s head equal to the original head’s next node, and then return that original head.

// Define a .removeHead() method that takes no parameters. Inside the method, create a const variable named removedHead and set it equal to the list’s head. We will use this to keep track of the original head of the list.

// If removedHead has no value, return to end execution of the .removeHead() method.

// Outside the if statement, set the list’s head equal to removedHead‘s next node.

// Finally, return removedHead’s data.

const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

}

module.exports = LinkedList;

// Printing
// Nice! Now we have a bunch of helpful LinkedList methods under our belt. Our next step is to create a .printList() method so we can see our list as it changes.

// While it’s possible to just use console.log() on the list (try it!), we want to print it in a more understandable and readable way. console.log() will print the pointers of each node as well as the data, but we’re just going to print the data while maintaining the order of the list.

// To do this, we will create a String that holds the data from every node in the list. We’ll start at the list’s head and iterate through the list, adding to our String as we go.

// For example, if we had a list for the days of the week, starting with Sunday, .printList() would print it as follows:

// <head> Sunday Monday Tuesday Wednesday Thursday Friday Saturday <tail>

// Define a method named .printList(). Inside it, create:

// A let variable named currentNode, and set it equal to the list’s head
// Another let variable named output, and set it equal to '<head> '
// Then, log output to the console

// While currentNode doesn’t equal null, add its data and a ' ' to output. Then update currentNode to be its next node. Do this above your console.log() statement.

// Finally, outside of the while loop, but before your console.log(), set output equal to itself concatenated with '<tail>'.

const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }

}

module.exports = LinkedList;
// Linked List Review
// Congratulations, you have created and implemented a linked list class in JavaScript!

// We did this by:

// Using our Node class to hold the data and links between nodes
// Implementing a LinkedList class to handle external operations on the list, like adding and removing nodes
// Creating an instance of our list, and using our .printList() method to track the changes we made

const LinkedList = require('./LinkedList');

const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();

seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

seasons.removeHead();
seasons.printList();