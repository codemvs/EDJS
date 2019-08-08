class NodeTree {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insertNode(node,data) {
        const newNode = new NodeTree(data);
        if (this.root === null) this.root = newNode;
        node.children(newNode);
    }

    getRootNode(){
        return this.root;
    }
}


const tree = new Tree();

tree.root = new NodeTree(5);
tree.root.children.push(new NodeTree(54));
tree.root.children.push(new NodeTree(454));

console.log(tree.getRootNode())