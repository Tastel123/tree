function TreeNode(val) {
    this.val = val;
    this.right = this.left = null;
}

let a1 = new TreeNode(3)
let a2 = new TreeNode(9)
let a3 = new TreeNode(20)
let a4 = new TreeNode(15)
let a5 = new TreeNode(7)
a1.left = a2
a1.right = a3
a3.left = a4
a3.right = a5

// 层序遍历
function levelOrderTraversal(root) {
    if(!root) return []
    const items = []  // 存放所有的结点，返回的结果
    const queue = [root, null]  // 当前所在处理层的队列
    let levelNodes = []  // 每层的结点

    while(queue.length > 0) {
        const t = queue.shift()   // 出队列
        if (t) {
            // 真实的结点
            levelNodes.push(t.val)  // 把已经遍历过的结点放进去
            if (t.left) {
                queue.push(t.left)
            }
            if (t.right) {
                queue.push(t.right)
            }
        } else {
            // null, 层与层之间的分界
            items.push(levelNodes)  // [[3],]
            levelNodes = []   // 清空
            if (queue.length > 0) {  // 上一层做完，即将开始处理下一层，添加一个null
                queue.push(null)
            }
        }
    }
    return items
}

console.log(levelOrderTraversal(a1))