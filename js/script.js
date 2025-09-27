document.addEventListener('DOMContentLoaded', () => {
    const statusText = document.getElementById('statusText');
    const resetButton = document.getElementById('resetButton');
    const resetScoreButton = document.getElementById('resetScoreButton');
    const cells = document.querySelectorAll('.cell');
    const playerXScoreDisplay = document.getElementById('playerXScore');
    const playerOScoreDisplay = document.getElementById('playerOScore');
    const playerOLabelName = document.querySelector('#playerOLabel .player-name');
    const modeSelection = document.getElementById('modeSelection');
    const winningLine = document.getElementById('winningLine');
    const pvaButton = document.querySelector('[data-mode="pva"]');
    const pvpButton = document.querySelector('[data-mode="pvp"]');

    let gameActive = false;
    let currentPlayer = "X";
    let gameState = ["", "", "", "", "", "", "", "", ""];
    let gameMode = "pvp";
    let scores = {
        pvp: { x: 0, o: 0 },
        pva: { x: 0, o: 0 }
    };
    
    const winningConditions = [
        { combo: [0, 1, 2], class: "h1" }, { combo: [3, 4, 5], class: "h2" }, { combo: [6, 7, 8], class: "h3" },
        { combo: [0, 3, 6], class: "v1" }, { combo: [1, 4, 7], class: "v2" }, { combo: [2, 5, 8], class: "v3" },
        { combo: [0, 4, 8], class: "d1" }, { combo: [2, 4, 6], class: "d2" }
    ];

    function saveData() {
        localStorage.setItem('ticTacToeScores', JSON.stringify(scores));
        localStorage.setItem('ticTacToeGameMode', gameMode);
    }

    function loadData() {
        const savedScores = JSON.parse(localStorage.getItem('ticTacToeScores'));
        const savedMode = localStorage.getItem('ticTacToeGameMode');

        if (savedScores && savedScores.pvp && savedScores.pva) {
            scores = savedScores;
        }
        if (savedMode) {
            gameMode = savedMode;
        }
        
        updatePlayerLabels();
        updateScoreDisplay();
    }

    function updatePlayerLabels() {
        if (gameMode === 'pva') {
            playerOLabelName.textContent = 'AI (O)';
        } else {
            playerOLabelName.textContent = 'Pemain 2 (O)';
        }
    }

    function updateScoreDisplay() {
        playerXScoreDisplay.textContent = scores[gameMode].x;
        playerOScoreDisplay.textContent = scores[gameMode].o;
    }

    function startGame(mode) {
        gameActive = true;
        gameMode = mode;
        modeSelection.style.display = 'none';
        
        updatePlayerLabels();
        updateScoreDisplay();
        
        statusText.textContent = `Giliran Pemain ${currentPlayer}`;
    }

    function handleCellClick(event) {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
        if (gameState[clickedCellIndex] !== "" || !gameActive) return;

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();

        if (gameMode === 'pva' && currentPlayer === 'O' && gameActive) {
            setTimeout(aiMove, 500);
        }
    }

    function handleCellPlayed(cell, index) {
        gameState[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase());
    }

    function handleResultValidation() {
        let roundWon = false;
        let winningClass = "";
        for (let i = 0; i < winningConditions.length; i++) {
            const { combo, class: lineClass } = winningConditions[i];
            let a = gameState[combo[0]];
            let b = gameState[combo[1]];
            let c = gameState[combo[2]];
            if (a === '' || b === '' || c === '') continue;
            if (a === b && b === c) {
                roundWon = true;
                winningClass = lineClass;
                break;
            }
        }

        if (roundWon) {
            statusText.textContent = `Pemain ${currentPlayer} Menang!`;
            gameActive = false;
            updateScores();
            drawWinningLine(winningClass);
            return;
        }

        if (!gameState.includes("")) {
            statusText.textContent = `Permainan Seri!`;
            gameActive = false;
            return;
        }
        handlePlayerChange();
    }

    function handlePlayerChange() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Giliran Pemain ${currentPlayer}`;
    }

    function handleResetGame() {
        gameActive = false;
        currentPlayer = "X";
        gameState = ["", "", "", "", "", "", "", "", ""];
        statusText.textContent = "Pilih Mode Permainan";
        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove('x', 'o');
        });
        modeSelection.style.display = 'flex';
        winningLine.className = "winning-line";
        
        pvaButton.classList.remove('active');
        pvpButton.classList.remove('active');
    }

    function handleResetScores() {
        scores = { pvp: { x: 0, o: 0 }, pva: { x: 0, o: 0 } };
        saveData();
        updateScoreDisplay();
        alert("Skor telah direset!");
    }

    function updateScores() {
        if (currentPlayer === 'X') scores[gameMode].x++;
        if (currentPlayer === 'O') scores[gameMode].o++;
        updateScoreDisplay();
        saveData();
    }

    function drawWinningLine(lineClass) {
        winningLine.classList.add(lineClass, "show");
    }
    
    function aiMove() {
        let bestMove = -1;

        for (let i = 0; i < 9; i++) {
            if (gameState[i] === '') {
                gameState[i] = 'O';
                if (checkWinnerFor('O')) bestMove = i;
                gameState[i] = '';
                if(bestMove !== -1) break;
            }
        }

        if(bestMove === -1) {
            for (let i = 0; i < 9; i++) {
                if (gameState[i] === '') {
                    gameState[i] = 'X';
                    if (checkWinnerFor('X')) bestMove = i;
                    gameState[i] = '';
                    if(bestMove !== -1) break;
                }
            }
        }
        
        if(bestMove === -1){
             let emptyCells = [];
             gameState.forEach((cell, index) => {
                 if (cell === "") emptyCells.push(index);
             });
             bestMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        }

        const cellToPlay = document.querySelector(`.cell[data-index='${bestMove}']`);
        handleCellPlayed(cellToPlay, bestMove);
        handleResultValidation();
    }
    
    function checkWinnerFor(player) {
         for (const condition of winningConditions) {
            if (condition.combo.every(index => gameState[index] === player)) {
                return true;
            }
        }
        return false;
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', handleResetGame);
    resetScoreButton.addEventListener('click', handleResetScores);
    
    pvaButton.addEventListener('click', () => {
        pvpButton.classList.remove('active');
        pvaButton.classList.add('active');
        startGame('pva');
    });
    pvpButton.addEventListener('click', () => {
        pvaButton.classList.remove('active');
        pvpButton.classList.add('active');
        startGame('pvp');
    });

    loadData();
});