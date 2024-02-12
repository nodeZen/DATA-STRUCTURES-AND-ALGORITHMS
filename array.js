class MyArray {
  constructor() {
    this.length = 0;

    this.data = {};
  }

  // Adding Item to the last of array

  push(item) {
    this.data[this.length] = item;

    this.length++;
  }

  // Deleting last item of the array

  pop() {
    const poppedItem = this.data[this.length - 1];

    delete this.data[this.length - 1];

    this.length--;

    return poppedItem;
  }

  // Deleting an item based on the index

  delete(index) {
    const deletedItem = this.data[index];

    this.shift(index);

    return deletedItem;
  }

  shift(deletdIndex) {
    this.length--;

    for (let i = deletdIndex; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const customArray = new MyArray();

customArray.push("Hi");

customArray.push("Hello");

customArray.push("Hey");

customArray.push("Morning");

customArray.push("Afternoon");

customArray.push("Evening");

customArray.push("Night");

console.log(customArray);

console.log(customArray.delete(2));

console.log(customArray);
