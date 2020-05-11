
export class BinaryNode {
  key: number
  left: BinaryNode | null
  right: BinaryNode | null
  constructor (key: number) {
    this.key = key
    this.left = null
    this.right = null
  }
}

export default class Binary {
  root: BinaryNode | null
  constructor (initArr: number[]) {
    this.root = null
    this.init(initArr)
  }

  init (list: number[]) {
    list.forEach(item => {
      this.insert(item)
    })
  }

  insert (key: number) {
    const newNode = new BinaryNode(key)
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode (node: BinaryNode, newNode: BinaryNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  inOrderTraverseNode (node: BinaryNode, callback: Function) {
    if (!!node) {
      this.inOrderTraverseNode(node.left!, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right!, callback)
    }
  }
  // 二叉树的中序遍历
  inOrderTraverse (callback: Function) {
    this.inOrderTraverseNode(this.root!, callback)
  }
}