class SortedList {
  constructor(items = [],length = 0) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=>a-b)
    this.length = this.items.length
  }

  get(pos) {
    if(this.items[pos])return this.items[pos]
    throw new Error("OutOfBounds")
  }

  max() {
    if(this.items.length>0)return Math.max(...this.items)
    throw new Error('EmptySortedList');
  }

  min() {
    if(this.items.length>0)return Math.min(...this.items)
    throw new Error('EmptySortedList');
  }

  sum() {
    return this.items.reduce((acc,val)=>acc+val,0)
  }

  avg() {
    if(this.items.length>0)return this.items.reduce((acc,val)=>acc+val,0) / this.items.length
    throw new Error('EmptySortedList');
  }
}

module.exports = SortedList;
