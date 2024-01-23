// Node Object
class Node{
    constructor(data, next=null){
        this.data=data;
        this.next=next;
    }
}
// Create linked list of nodes objects
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;//basis counting indices // kung ilan ung nasalistahan
    }
    // clear list
    clearList(){
        this.head=null;
        this.size=0;
    }
    // insert node at the start of the list
    insetStart(data){
        this.head=new Node(data,this.head);
        this.size++;
    }
    // inser node at end
    insetEnd(data){
        let node= new Node(data);
        let current;
        
        if(!this.head){
            this.head=node;
        }else{
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }
    // insert node base on specific index
    insetPosition(data, index){
        // check if position is out of range
        if(index > 0 && index > this.size){
            return console.log('slot not available!')
        }
        // check if the index is the start position
        if(index === 0){
            this.insetStart(data);
            return;
        }
        // otherwise the position is greater than 0 and within range
        const node = new Node(data);
        let current, previous;
        // set first to current
        current=this.head;
        let count=0;

        while(count < index){
            previous=current;
            count++;
            current=current.next;
        }

        node.next=current;
        previous.next=node;

    }
    // display nodes from the list
    printLinkedList(){
        let current=this.head;//lastest node

        while(current){
            console.log(current.data, current.next);
            current=current.next;
        }
    }
}
// invocation of methods
const nodeList = new LinkedList();
nodeList.insetStart(200);
nodeList.insetStart(400);
nodeList.insetEnd(100);
nodeList.insetPosition(300,1)
nodeList.insetPosition(150,3)
nodeList.printLinkedList();
nodeList.clearList();
nodeList.printLinkedList();





// const n1=new Node(100);
// console.log(n1);