const Memory = require('./Memory');
const storage = new Memory();

class Array {
  constructor(){
    
    this.length = 0;
    this.pointer = this.storage.allocate(this.length);
  }

  _resize(size) {
    const oldPointer = this.pointer;
    this.pointer = storage.allocate(size);
    if (this.pointer === null) {
      throw new Error('Out of memory');
    }
    this.storage.copy(this.pointer, oldPointer, this.length);
    this.storage.free(oldPointer);
  }

  push(value){
    this._resize(this.length + 1);
    storage.set(this.pointer + this.length, value);
    this.length++;
  }

  pop() {
     
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = storage.get(this.pointer + this.length - 1);
    this.length--;
    return value;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return storage.get(this.pointer + index);
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    storage.copy(this.pointer + index + 1, this.pointer + index, this.length - index);
    storage.set(this.pointer + index, value);
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    storage.copy(this.pointer + index, this.pointer + index + 1, this.length - index - 1);
    this.length--;
  }

}


function main(){

  Array.SIZE_RATIO = 3;
  let arr = new Array();
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  
  console.log(arr.get(0));
  
  arr.remove(2);
  arr.remove(1);
  arr.remove(0);
  
  arr.push('tauhida');
  
  console.log(arr.get(0));
  
  console.log(arr);
}

main();