

document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');
    const squares = [];

    const createChessboard = () => {
        let isBlack = false;

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.classList.add(isBlack ? 'black' : 'white');
                chessboard.appendChild(square);
                squares.push(square);
                isBlack = !isBlack;
            }
            isBlack = !isBlack;
        }
    };

    createChessboard();
});
