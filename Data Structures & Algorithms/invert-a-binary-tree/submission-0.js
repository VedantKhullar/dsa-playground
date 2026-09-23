/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null;
        let arr = [root];
        while (arr.length) {
            let curr = arr.shift();

            let temp = curr.left;
            curr.left = curr.right;
            curr.right = temp;

            if (curr.right) {
                arr.push(curr.right);
            }
            
            if (curr.left) {
                arr.push(curr.left)
            }
        }
        return root;
    }
}
