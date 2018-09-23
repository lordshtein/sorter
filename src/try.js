class Sorter {
    constructor () {
        this.arr = []
        this.comparator = null
    
    }

    add(el) {
        this.arr.push(el)
    }
    toArray (){
        return this.arr
    }
    at(i) {
        if (i < this.arr.length - 1) {
            return this.arr[i]
        } else {
            return null
        }
    }
    get length() {
      return this.arr.length
    }
    sort(indices) {
        let a = [];
        indices.forEach( index => {
            a.push(this.arr[index]) 
        });
        a = a.sort(this.comparator)
        for (i=0; i < indices.length - 1;i++) {
            this.arr[indices[i]] = a[i];
        }
        // на места индексов indeces вставить элементы массива a в this.arr
        return this.arr
    }
    setComparator(comp) {
        this.comparator = comp
    }
}

const sorter = new Sorter();
  sorter.add(2);
  sorter.add(1);
  sorter.add(4)
  sorter.sort([0, 2]);
  console.log(sorter.toArray()) // [1, 2]

  sorter.add(3);

  const reverseCompareFunction = (left, right) => right - left;
  sorter.setComparator(reverseCompareFunction);

  sorter.sort([0, 1, 2]);
  console.log(sorter.toArray()); // [3, 2, 1]