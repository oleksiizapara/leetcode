/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return nums;
    }

    let p = nums[0];
    let j = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > p) {
            j = j + 1;
            nums[j] = nums[i];
            p = nums[i];
        }
    }

    return j + 1;
};

test(" to equal", () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
});


test(" to equal", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});