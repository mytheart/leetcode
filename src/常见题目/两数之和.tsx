// https://leetcode-cn.com/problems/two-sum/

/**
 * 题目:两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *  */

// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 解题思路
// 用 hashMap 存一下遍历过的元素和对应的索引。
// 每访问一个元素，查看一下 hashMap 中是否存在满足要求的目标数字。
// 所有事情在一次遍历中完成，因为用了空间换取时间。

interface NumberDictionary {
  [index: string]: number;
}

const twoSum = (nums: number[], target: number) => {
  const prevNums: NumberDictionary = {}; // 存储出现过的数字，和对应的索引

  for (let i = 0; i < nums.length; i++) {
    // 遍历元素
    const curNum = nums[i]; // 当前元素
    const targetNum = target - curNum; // 满足要求的目标元素
    const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
    if (targetNumIndex !== undefined) {
      // 如果存在，直接返回 [目标元素的索引,当前索引]
      return [targetNumIndex, i];
    } else {
      // 如果不存在，说明之前没出现过目标元素
      prevNums[curNum] = i; // 存入当前的元素和对应的索引
    }
  }
};
