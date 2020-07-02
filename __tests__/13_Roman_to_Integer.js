var romanToInt = function (s) {
    let arr = [...s];

    let map = {
        I: 1,
        V: 5,
        L: 50,
        X: 10,
        C: 100,
        D: 500,
        M: 1000,
    };

    var r = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            r += map[arr[i]];
        } else {
            r += map[arr[i + 1]] > map[arr[i]] ? -map[arr[i]] : map[arr[i]];
        }
    }

    return r;
};

test("III to equal 3", () => {
    expect(romanToInt("III")).toBe(3);
});

test("IV to equal 4", () => {
    expect(romanToInt("IV")).toBe(4);
});

test("LVIII to equal 58", () => {
    expect(romanToInt("LVIII")).toBe(58);
});

test("DCXXI to equal 621", () => {
    expect(romanToInt("DCXXI")).toBe(621);
});