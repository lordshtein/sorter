class Sorter {
  constructor() {
    this.arr = []
    this.comparator = function(a,b) {
      return a-b;
    }
  }
  add(element) {
    this.arr.push(element)
  }
  at(index) {
   // if (index <= this.arr.length - 1) {
      return this.arr[index]
  //} else {
     // return null
  // }
}
  toArray () {
    return this.arr
  }
  get length() {
    return this.arr.length
  }
  sort(indices){
    let a = [];
        indices.forEach( ind => {
            a.push(this.arr[ind]) 
        });
        console.log(this.arr+' this arr');
        console.log(indices+' indeces');
        console.log(a+' a');
        /* if (this.comparator === true) {
          a = a.sort(this.comparator);
        } else {
          a = a.sort();
        } */
        a = a.sort(this.comparator)
        console.log(a+' sort a');
        let b = indices.sort();
        for (let i=0; i <= b.length - 1;i++) {
          this.arr[b[i]] = a[i];
        }
        console.log(this.arr);
        // на места индексов indeces вставить элементы массива a в this.arr
        return this.arr
  }

  setComparator(compareFunction){
    this.comparator = compareFunction
   
  }
}
module.exports = Sorter;

