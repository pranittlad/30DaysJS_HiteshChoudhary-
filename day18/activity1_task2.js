const arr = [3, 1, 2, 6, 9, 0];

const selection = arr => {
    const len = arr.length;

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = 0; i < len; i++) {
        let idxOfmin = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[idxOfmin]) {
                idxOfmin = j;
            }
        }

        if (idxOfmin !== i) {
            swap(arr, idxOfmin, i);
        }
    }

    return arr;
};

console.log(selection(arr)); // Output: [0, 1, 2, 3, 6, 9]
