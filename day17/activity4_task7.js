class TreeNode {
    constructor(value = null) {
        this.value= value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);
const leftChild = new TreeNode(2);
const rightChild = new TreeNode(2);

root.left = leftChild;
root.right = rightChild;

console.log(root);
