const zigzagify = (arr, n) => {
    const m = (() => {
        const blocks = Math.floor(arr.length / (2*n - 2));
        const rem = arr.length - blocks * (2*n - 2);
        let cols = blocks * (n - 1);
        if (rem > 0) {
            cols++;
            if (rem > n) cols += rem % n;
        }
        return cols;
    })();
    const matr = Array(n).fill().map(() => Array(m).fill('x'));

    for (let i = 0; i < arr.length; i++) {
        const c = (() => {
            const blocks = Math.floor(i / (2*n - 2));
            const rem = i - blocks * (2*n - 2);
            let col = blocks * (n - 1);
            if (rem > n - 1) col += rem - n + 1;
            return col;
        })();

        const r = (() => {
            const rem = i % (2*n - 2);
            if (rem < n) return rem;
            else return (2*n - rem - 2);
        })();
        // console.log(i, r, c);
        matr[r][c] = arr[i];
    }
    return matr;
};

const revert = (zigzag, n) => {
    
}

console.log(zigzag(Array(17).fill('d'), 7));