class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // hash function that generates unique hash key
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // setting the value in a hash address
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    } else {
      this.data[address].push([key, value]);
    }
  }

  // getting the value from an address after handling hash collission
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i];
        }
      }
    }
    return null;
  }

//   Returning Keys of hash table
  keys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          if (this.data[i][j]) {
            keys.push(this.data[i][j][0]);
          }
        }
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("name", "Surya");
myHashTable.set("game", "Reddy");
const value = myHashTable.get("game");
console.log({ myHashTable, value, keys: myHashTable.keys() });
