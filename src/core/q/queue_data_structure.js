//objects are removed accordingly and only the first in
// first out can be executed
// Thereby instaniating a queue

// Please see issue located at:
// https://github.com/Hawaiideveloper/Social_Network_Front_end/issues/25#issue-629524386


//This is similar to a grocery store line as the customer enters the store
// shops around
// Then exits the store through a grocery line after paying
// Use this to slow the orders down so you dont crash

class Node {  //Ading a Node class to it
    constructor(value) { // A constructor that takes the  element of value 
        this.value = value;
        this.next = null;
    }
}
 
export default class Queue { //Somehow they need to go in and come out 
    //and we reuse the metho in index.js
    constructor() {
        this.front = null;
        this.back = null;

    }
    isEmpty() {
     return !this.front;   
    }
    enqueue(value) { // it will take in value as well
        // create a new node with a value
        let node = new Node(value);


        // check if the queue is empty
              //If helper method (isEmpty)it is empty we want to point it to a front element or back element
            if(this.isEmpty())  {              
              // point front and back of new node
                this.front = this.back = node;
            }
              // else the queue is not empty
              else {
                    
             
              //push the node to the back of the queue like a grocery store line
                    //by  pointing the last node to the newly created node space see 
                    
                    this.back.next = node; //we create a new last element
                    //diagram in issue
                    //Then move back pointer to new node 
                    this.back = node;
                }
    this.print
    }

    print() {
        // If the queue is empty
        if(this.isEmpty()) {
            console.log('The queue is empty')
        }
        // Else is not empty
        else {

        }
        // temporary array
        let tmpArr 
        // temp variable to the front of the queue
        let tmp = this.front;
        //interate through the queue
         //while temp has a value 
         while(tmp)
        {
        // add value to temp array
        tmpArr.push(tmp.value);
        // move to the next element
        tmp = tmp.next;
        }
        // print the values
        console.log(tmpArr.join(','));

    }
}

