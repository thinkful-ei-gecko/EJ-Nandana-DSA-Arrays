const Memory = require('./Memory')

class Array {
    constructor(){
        this.storage = new Memory();
        this.length = 0;
        this.pointer = this.storage.allocate(this.length);
    }

    _resize(size) {
        const oldPointer = this.pointer;
        this.pointer = this.storage.allocate(size);
        if (this.pointer === null) {
            throw new Error('Out of memory');
        }
        this.storage.copy(this.pointer, oldPointer, this.length);
        this.storage.free(oldPointer);
      }

    push(value){
        this._resize(this.length + 1);
        this.storage.set(this.pointer + this.length, value);
        this.length++;
    }
}


function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    console.log(arr);
}

main()