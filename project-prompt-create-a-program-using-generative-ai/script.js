document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    const gridSize = 10;
    const ships = [
        { size: 5, orientation: "horizontal", positions: [] },
        { size: 4, orientation: "vertical", positions: [] },
        // Add more ships as needed
    ];

    function createGrid() {
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.addEventListener("click", handleCellClick);
                gridContainer.appendChild(cell);
            }
        }
    }

    function placeShips() {
        ships.forEach((ship) => {
            let validPlacement = false;
            while (!validPlacement) {
                const randomRow = Math.floor(Math.random() * gridSize);
                const randomCol = Math.floor(Math.random() * gridSize);
                validPlacement = checkShipPlacement(ship, randomRow, randomCol);
                if (validPlacement) {
                    placeShipOnGrid(ship, randomRow, randomCol);
                }
            }
        });
    }

    function checkShipPlacement(ship, startRow, startCol) {
        const endRow = ship.orientation === "horizontal" ? startRow : startRow + ship.size - 1;
        const endCol = ship.orientation === "vertical" ? startCol : startCol + ship.size - 1;

        if (endRow >= gridSize || endCol >= gridSize) {
            return false;
        }

        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
                if (cell.classList.contains("ship")) {
                    return false;
                }
            }
        }

        return true;
    }

    function placeShipOnGrid(ship, startRow, startCol) {
        for (let i = 0; i < ship.size; i++) {
            const row = ship.orientation === "horizontal" ? startRow : startRow + i;
            const col = ship.orientation === "vertical" ? startCol : startCol + i;
            const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
            cell.classList.add("ship");
            ship.positions.push({ row, col });
        }
    }

    function handleCellClick() {
        const row = this.dataset.row;
        const col = this.dataset.col;
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);

        if (cell.classList.contains("ship")) {
            cell.classList.remove("ship");
            cell.classList.add("hit");
            checkWin();
        } else {
            cell.classList.add("miss");
        }

        cell.removeEventListener("click", handleCellClick);
    }

    function checkWin() {
        const allShipsSunk = ships.every((ship) => {
            return ship.positions.every((pos) => {
                const cell = document.querySelector(`.cell[data-row="${pos.row}"][data-col="${pos.col}"]`);
                return !cell.classList.contains("ship");
            });
        });

        if (allShipsSunk) {
            alert("You win!");
        }
    }

    createGrid();
    placeShips();

    function resetGame() {
        // Clear the grid
        gridContainer.innerHTML = "";
        // Create a new grid
        createGrid();
        // Place new ships
        placeShips();
        // Reset event listeners
        document.querySelectorAll('.cell').forEach(cell => {
            cell.addEventListener("click", handleCellClick);
        });
    }

    // Add event listener to the reset button
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetGame);
});
