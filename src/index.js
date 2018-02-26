class Sorter {
  constructor() {
    // your implementation
	this.array=new Array();
  }

  add(element) {
    // your implementation
	this.array.push(element);
  }

  at(index) {
    // your implementation
	return this.array[index];
  }

  get length() {
    // your implementation
	return this.array.length;
  }

  toArray() {
    // your implementation
	return this.array;
  }

  sort(indices) {
    // your implementation
	var tempArray=new Array(); 
	for(var i=0;i<indices.length;i++){ 
		tempArray.push(this.array[indices[i]]); 
	} 
	tempArray.sort(); 
	for(var i=0;i<indices.length;i++){ 
		this.array[indices[i]]=tempArray[i];
	}

  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
