class ListNode {
  next: ListNode | null;
  key: number;
  constructor(key: number) {
    this.next = null;
    this.key = key;
  }
}

export default class LinkedList {
  head: ListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  static createNode(key: number): ListNode {
    return new ListNode(key);
  }

  // 往头部插入数据
  insert(node: ListNode) {
    // 如果head后面有指向的节点
    if (this.head) {
      node.next = this.head;
    } else {
      node.next = null;
    }
    this.head = node;
    this.length++;
  }

  find(key: number) {
    let node = this.head;
    while (node !== null && node.key !== key) {
      node = node.next;
    }
    return node;
  }

  delete(node: ListNode) {
    if (this.length === 0) {
      throw new Error('node is undefined');
    }

    if (node === this.head) {
      this.head = node.next;
      this.length--;
      return;
    }

    let prevNode = this.head;

    while (prevNode!.next !== node) {
      prevNode = prevNode!.next;
    }

    if (node.next === null) {
      prevNode!.next = null;
    }
    if (node.next) {
      prevNode!.next = node.next;
    }
    this.length--;
  }
}
