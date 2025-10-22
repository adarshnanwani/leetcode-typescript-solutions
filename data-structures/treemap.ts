class TreeNode {
  public key: number;
  public value: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeMap {
  public root: null | TreeNode;

  constructor() {
    this.root = null;
  }

  insertNode(root: null | TreeNode, key: number, value: number): TreeNode {
    if (!root) {
      return new TreeNode(key, value);
    }
    if (key < root.key) {
      root.left = this.insertNode(root.left, key, value);
    } else if (key > root.key) {
      root.right = this.insertNode(root.right, key, value);
    } else {
      root.value = value;
    }
    return root;
  }

  insert(key: number, val: number): void {
    this.root = this.insertNode(this.root, key, val);
  }

  get(key: number): number {
    if (!this.root) {
      return -1;
    }
    let current: TreeNode | null = this.root;
    while (current) {
      if (key < current.key) {
        current = current.left;
      } else if (key > current.key) {
        current = current.right;
      } else {
        return current.value;
      }
    }
    return -1;
  }

  getMin(): number {
    if (!this.root) {
      return -1;
    }
    let current = this.root;

    while (current && current.left) {
      current = current.left;
    }

    return current.value;
  }

  getMax(): number {
    if (!this.root) {
      return -1;
    }
    let current = this.root;

    while (current && current.right) {
      current = current.right;
    }

    return current.value;
  }

  getMaxNode(root: TreeNode | null) {
    if (!root) {
      return null;
    }
    let current = root;

    while (current && current.right) {
      current = current.right;
    }

    return current;
  }

  getMinNode(root: TreeNode | null) {
    if (!root) {
      return null;
    }
    let current = root;

    while (current && current.left) {
      current = current.left;
    }

    return current;
  }

  removeNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) {
      return null;
    }
    if (key < root.key) {
      root.left = this.removeNode(root.left, key);
    } else if (key > root.key) {
      root.right = this.removeNode(root.right, key);
    } else {
      if (!root.right) {
        return root.left;
      }
      if (!root.left) {
        return root.right;
      }

      const minNode = this.getMinNode(root.right);
      if (minNode) {
        root.value = minNode.value;
        root.key = minNode.key;
        root.right = this.removeNode(root.right, minNode.key);
      }
    }
    return root;
  }

  remove(key: number): void {
    this.root = this.removeNode(this.root, key);
  }

  getInorderKeys(): number[] {
    const orderedKeys: number[] = [];

    function inorder(root: TreeNode | null) {
      if (!root) {
        return null;
      }
      inorder(root.left);
      orderedKeys.push(root.key);
      inorder(root.right);
    }

    inorder(this.root);

    return orderedKeys;
  }
}
