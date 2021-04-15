// //NOTES
// A brief overview of APIs as they relate to JavaScript data structures.

// Data structures are all about choosing the right tool for the job. Do you need to store data in an ordered way, or do you just need to be able to store it and retrieve it quickly? What’s more important to your use case: how fast the data structure performs, or how much memory it takes up? Different data structures all have advantages, disadvantages, and use cases, and that’s the whole reason that there are different data structures!

// Consider the Array in JavaScript. It’s a really great data structure for storing ordered data because you can retrieve elements by index number. If you want the first element of an array, all you need to do is fetch it with index 0: arrayName[0]. It also provides all sorts of helpful methods for manipulating elements, such as .push(), .pop(), .sort(), and more. However, if you want to find out if a particular element exists in an array, you may need to iterate through the entire array.

// What if I asked you to keep track of a series of numbers as I gave them to you, and then asked at the end whether I’d given you a particular number, you could probably do that in your memory. But if I asked you to do that in a computer program, you’d have to make choices about how to store the data. Let’s look at two possibilities of how we’d build storeNumber() and doYouHaveThisNumber() functions. Given the following list of numbers:

// 1, 250, -42, 0.4, 17
// How might you store these numbers if I gave you each at a time? You might use an array:

// const listOfNumbers = [];
 
// const storeNumber = num => listOfNumbers.push(num);
 
// const doYouHaveThisNumber = num => listOfNumbers.includes(num);
// In this program, storeNumber() adds a number to the array, and doYouHaveThisNumber() returns true if that number exists in the array, and false otherwise. Looks pretty good, but what if you had 10000000 numbers? doYouHaveThisNumber() might start getting pretty slow, since Array.prototype.includes() iterates through the entire array until it finds the input value.

// Let’s try using another built-in data type in JavaScript, the Object. Since all we want to keep track of is whether we received a particular number, we can just store those numbers in an object, and set their values to true if we received them:

// const receivedNumbers = {};
 
// const storeNumber = num => receivedNumbers[num] = true;
 
// const doYouHaveThisNumber = num => receivedNumbers[num] === true;
// In this case, we’ll have the same result on the outside, but because retrieving a value from an object is much faster than iterating through an array, the overall result will be faster.

// In both cases, the public API of the code, meaning the parts of the code that we want the end-user to interact with, remained the same: we had two functions, storeNumber() and doYouHaveThisNumber(). The underlying implementation, or the way the functionality was actually achieved, is what altered.

// What is an API?
// API is an acronym for application programming interface. An API allows end-users to access properties and methods of data structures easily and without needing to do the “behind the scenes” work.

// For example, if you want to add a new element to the end of an array, you don’t need to loop through the entire array, counting how many elements there are, and then setting myArray[currentCount + 1] equal to the new value. Instead, you can just call .push() with the value you want to add. As a JavaScript programmer, you don’t actually need to know the actual strategy, or the underlying implementation, of how .push() added an element to the end of the array in order to use it.

// The API of arrays provides lots of useful functionality, from adding and removing elements to the start and end of the array, to iterator methods that call a function on each element. If you wanted to find the smallest number in an array of numbers, however, you’d have to implement that functionality yourself.

// Creating Your Own APIs
// As you build your own data structures, you will implement the functionality to create public APIs. As in the example of storeNumber() and doYouHaveThisNumber(), the same public API can be implemented in different ways, so it’s important to think about the advantages and disadvantages of different implementations.

// An API is like a message to end-users. Some languages have classes that can have methods or fields that are either public (can be called from anywhere) or private (can only be called from within the class). Public methods are the ones that end-users of that class can call, and private methods are only used by the class itself. JavaScript doesn’t really support this concept, so properties that aren’t meant to be public are often preceded by an underscore _. Let’s look at an example where we want to build a data structure with a restricted API.

// A stack is a data structure that only allows data to be added (pushed) or removed (popped) from the “top” of the stack. It just so happens that we could use an array as a stack, since it already has a .push() and .pop() method! However, arrays also allow you to add elements to the beginning or randomly access elements by index.

// We’re not going to cover all the ins and outs of the stack data structure right now, but to demonstrate public API vs implementation, let’s build a quick custom Stack class:

// class Stack {
//   constructor() {
//     this._array = [];
//   }
// }
// In Stack, the array itself is stored as _array, so it’s a signal to other developers that to use the Stack as intended, they shouldn’t need to access it directly. From there, we can implement the .push() and .pop() methods:

// class Stack {
//   constructor() {
//     this._array = [];
//   }
 
//   push(newValue) {
//     this._array.push(newValue);
//   }
 
//   pop() {
//     return this._array.pop();
//   }
// }
// Now we’ve created a Stack data structure that limits direct interaction with the underlying data to .push() and .pop(). A developer could still access our underlying array to do other manipulation:

// const stack = new Stack();
// stack._array.unshift('value');
// but they would then be breaking the intended behavior of the Stack class. The whole point of a public API is that we offer functionality to other end-users. If somebody were using our Stack class in a program, we could totally change the underlying implementation, and as long as the end-user API remained the same, their program should continue to function.

// As you build your own classes and data structures, it’s important to keep in mind this distinction between implementation (what does this need internally to do its job) and the outside API (how should users of this actually interact with it?).




// Nodes:

// Contain data, which can be a variety of data types
// Contain links to other nodes. If a node has no links, or they are all null, you have reached the end of the path you were following.
// Can be orphaned if there are no existing links to them




// Introduction: Nodes in JavaScript
// Now that you have an understanding of what nodes are, let’s see one way they can be implemented using Javascript.

// We will create a basic node that contains data and one link to another node. The node’s data will be specified when creating the node and immutable (can’t be updated). Remember that a node’s link to the next node is null when there are no nodes to traverse.

// Go ahead and take a look at the starter code in the editor. You will find the Node class defined. module.exports allows the Node class to be used outside this module. Make sure to always leave this line of code. We’ll need it when we use this class to implement more complex data structures.

// Let’s begin by setting up the constructor for our Node class. Since nodes contain data, we want the constructor to expect a data argument of any type to be passed in. The constructor can assign the given argument to the data property of the Node instance.

// Be sure to set the arguments to the appropriate properties in this class (i.e. this.data).

// Let’s check that our Node class has the correct data.

// Underneath the Node class, instantiate a Node with any value and set it to firstNode. Then use console.log() to print out the instance’s data property. We should see the value that the node was instantiated with in the terminal.

// We also know that a node is aware of the other node it links to. We will represent this with the next property on the Node class.

// Similar to how we created the data property in the constructor, let’s do the same with the next node property. When the node is first created, it is an orphan node (a node with no links). Set the next node to null.

// Let’s check that next node property was successfully set in the constructor.

// Underneath the node we previously created, use console.log() to print out the instance’s next node property. Check that null is output in the terminal.

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  console.log(firstNode.data);
  console.log(firstNode.next);
  
  module.exports = Node;

//   Node Methods: Set Next Node
// Currently when a node is created, the next node is initially set to null, and we do not have a formal way to change it. However, we want to allow the next node to be updated so it can be traversed and used in more complex data structures. For this, we will use a setter to modify this.next node property.

// Implement the .setNextNode() method in the Node class.

// It should take node as an argument and update the next node property appropriately.

// To verify that our .setNextNode() performs as intended, let’s call the method on our Node instance. Create a second Node instance and set it to secondNode. Link it to the firstNode by passing secondNode to the call to setNextNode.

// Now let’s print out firstNode so we can see it in its entirety using console.log(). We should see the second node instance set to the next node property instead of the default null value.

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      this.next = node;
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  const secondNode = new Node('I am the next Node!');
  
  firstNode.setNextNode(secondNode);
  console.log(firstNode);
  
  module.exports = Node;
  
//   Node Methods: Set Next Node Validation
// We arbitrarily set our next node to any argument that gets passed in. This can be problematic. Imagine if the next node accidentally gets set to a different data type, like a string. We run the risk of mistakenly confusing the string for a node, and we would have to build out special support to avoid traversing anything that is not a node.

// To prevent these unnecessary complications, let’s add in a check that only allows arguments that are instanceof nodes or null. We want to allow null values as an argument in the event that we want to break the link between a node and its next node.
// Inside .setNextNode(), check if the node argument is an instanceof the Node class. If the argument is a Node or null, set this.next equal to node. Otherwise, throw an error.

// We know that we can set the next node to another node, so let’s verify that .setNextNode() will not accept an argument that is not a node.

// Call the .setNextNode() method on our Node instance and pass it any argument that is not a node. We expect to see an error in the terminal because you didn’t set the next node to a Node instance.

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  firstNode.setNextNode('This is a string, not a Node.');
  
  module.exports = Node;

//   Node Methods: Get Next Node
// We could continue accessing the next node property directly, like how we have been doing so far. However, if we ever want it to be given in a special way, we would want to use a getter to handle the preprocessing.

// Let’s go ahead and create a simple .getNextNode() method that just returns the next node property.

// Implement the .getNextNode() method in the Node class.


class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
    
    getNextNode() {
      return this.next;
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  const secondNode = new Node('I am the next Node!');
  firstNode.setNextNode(secondNode);
  console.log(firstNode.getNextNode());
  
  module.exports = Node;

//   Review: Nodes in JavaScript
// Let’s see all of our Node class methods together in action!

// Imagine we are working at an ice cream shop that sells three flavors: strawberry, vanilla, and coconut. The signature sundae is made of these three flavors, but our new hires have a hard time remembering the order.

// To help them remember, our JavaScript nodes may do just the trick. Let’s get started…

// Outside of Node, instantiate three more nodes.

// The first will represent our strawberry ice cream with the name, 'Berry Tasty'. Assign it to the variable, strawberryNode
// The second will represent our vanilla ice cream with the value, 'Vanilla'. Assign it to the variable, vanillaNode
// The third will represent our coconut ice cream with the value, 'Coconuts for Coconut'. Assign it to the variable, coconutNode
// Now let’s put these ice cream nodes in order. vanilla goes first, followed by strawberry. Finally, coconut goes after strawberry.

// Below the newly created nodes, use your .setNextNode() method so that:

// strawberryNode is the next node of vanillaNode
// coconutNode the next node of strawberryNode

// Let’s walk through our ice cream nodes to make sure that they are linked in the correct order. Create a new currentNode and set it vanillaNode. We will use currentNode to iterate through the nodes, so declare it using let. Create a while loop that will only iterate when the currentNode is not null.

// Inside the while loop, log out the currentNode’s data, and update currentNode to the next node.

// We should see the ice cream flavors in order of vanilla, strawberry, and coconut in the terminal.

// When your code is passing, take a moment to consider:

// What other ways do you think nodes could be helpful for keeping track of and storing information?
// What could happen if we added another link to the Node class?
// What if we created an instance of a Node with another Node instance?

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
  
    getNextNode() {
      return this.next;
    }
  }
  
  const strawberryNode = new Node('Berry Tasty');
  const vanillaNode = new Node('Vanilla');
  const coconutNode = new Node('Coconuts for Coconut');
  
  vanillaNode.setNextNode(strawberryNode);
  strawberryNode.setNextNode(coconutNode);
  
  let currentNode = vanillaNode;
  while(currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.getNextNode();
  }
  
  module.exports = Node;