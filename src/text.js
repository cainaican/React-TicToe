var correctPositions = {
    0: [0, 1, 2],
    1: [3, 4, 5],
    2: [6, 7, 8],
    3: [0, 3, 6],
    4: [1, 4, 7],
    5: [2, 5, 8],
    6: [0, 4, 8],
    7: [2, 4, 6]
}
export function checking(check) {
    for (var i = 0; i < 8; i++) {
        let count = 0;
        for (var j = 0; j < 3; j++) {
            if (document.getElementById(correctPositions[i][j]).innerText === check) {
                count++
            }
            if (count === 3) {
                return 11;
            }
        }
    }
    return 1
}