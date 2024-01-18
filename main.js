class Node {
	constructor(value) {
		this.value = value || null;
		this.nextNode = null;
	}
}

class LinkedList {
	constructor() {
		this.nodeHead = null;
		this.nodeSize = 0;
	}

	append(value) {
		this.nodeSize++;
		this.nodeHead === null ?
			this.nodeHead = new Node(value) :
			this.tail().nextNode = new Node(value);
	}

	prepend(value) {
		this.nodeSize++;
		const newNode = new Node(value);
		if (this.nodeHead === null) {
			this.nodeHead = newNode;
		} else {
			let temp = this.nodeHead;
			this.nodeHead = newNode;
			this.nodeHead.nextNode = temp;
		}
	}

	size() {
		return this.nodeSize;
	}

	head() {
		return this.nodeHead;
	}

	tail() {
		let temp = this.nodeHead;
		while (temp.nextNode !== null) {
			temp = temp.nextNode;
		}
		return temp;
	}

	at(index) {
		let temp = this.nodeHead;
		for (let i = 0; i < index; i++) {
			temp = temp.nextNode;
		}
		return temp;
	}

	pop() {
		this.nodeSize--;
		let temp = this.nodeHead;
		for (let i = 0; i <= this.nodeSize - 2; i++) {
			temp = temp.nextNode;
		}
		temp.nextNode = null;
	}

	contains(value) {
		let temp = this.nodeHead;
		while(temp.nextNode !== null) {
			if (temp.value === value) return true;
			temp = temp.nextNode;
		}
		if (temp.value === value) return true;
		return false;
	}

	find(value) {
		let temp = this.nodeHead;
		let i = 0;
		while(temp.nextNode !== null) {
			if (temp.value === value) return i;
			temp = temp.nextNode;
			i++;
		}
		if (temp.value === value) return i;
		return null;
	}

	toString() {
		let string = '';
		let temp = this.nodeHead;
		while (temp.nextNode !== null) {
			string = string.concat(`( ${temp.value} ) --> `);
			temp = temp.nextNode;
		}
		string = string.concat(`( ${temp.value} ) --> null`);
		return string;
	}

	insertAt(index, item) {
		let temp = this.nodeHead;
		for (let i = 0; i <= index - 2; i++) temp = temp.nextNode;
		let holder = temp.nextNode;
		temp.nextNode = new Node(item);
		temp = temp.nextNode;
		temp.nextNode = holder;
		this.nodeSize++;
	}

	removeAt(index) {
		if (index > this.nodeSize || index < 0) return;
		let temp = this.nodeHead;
		if (index > 0) {
			for (let i = 0; i < index - 1; i++) temp = temp.nextNode;
			let holder = temp.nextNode.nextNode;
			temp.nextNode = holder;
		} else {
			let holder = temp.nextNode;
			this.nodeHead = holder;
		}
		this.nodeSize--;
	}

	getLists() {
		let string = '';
		let temp = this.nodeHead;
		while (temp.nextNode !== null) {
			console.log(`${temp.value} --> ${temp.nextNode.value}`);
			temp = temp.nextNode;
		}
		console.log(`${temp.value} --> ${temp.nextNode}`);
	}
}

const linkedList = new LinkedList();

linkedList.append('value 2');
linkedList.append('value 3');
linkedList.prepend('value 1');
linkedList.append('value 4');
linkedList.append('value 5');

linkedList.getLists();
console.log('size: ' + linkedList.size());
console.log('tail: ' + linkedList.tail().value);
// console.log(linkedList.head());
linkedList.pop();
console.log('size: ' + linkedList.size());
console.log('tail: ' + linkedList.tail().value);
linkedList.getLists();
// linkedList.pop();
// console.log('size: ' + linkedList.size());
// console.log('tail: ' + linkedList.tail().value);
// linkedList.getLists();
console.log(linkedList.contains('value 4'));
console.log(linkedList.find('value 4'));
console.log(linkedList.toString());
linkedList.insertAt(2, 'test')
console.log(linkedList.toString());
linkedList.removeAt(1)
console.log(linkedList.toString());
