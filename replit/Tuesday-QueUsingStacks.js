class Stack {
    constructor() {
        this.storage = [];
    }

    // Que Function
    stackPush(item) {
        return this.storage.push(item);
    }

    stackPop() {
        return this.storage.pop();
    }

    stackLength() {
        return this.storage.length;
    }

}

class Queue {
    constructor() {
        this.back = new Stack;
        this.forth = new Stack;
    }

    enqueue(item) {
        let element = this.forth.stackPush(item);
        return element;
    }

    dequeue() {
        let length = this.forth.stackLength();
        for (let i = 0; i < length; i++) {
            this.back.stackPush(this.forth.stackPop());
        }
        let element = this.back.stackPop();
        return element;
    }
}
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
const val1 = queue.dequeue();
const val2 = queue.dequeue();
const val3 = queue.dequeue();
console.log(val1, val2, val3);