class TicTacToeBoard:
  def __init__(self):
    self.board = [[" " for _ in range(3)] for _ in range(3)]

  def print_board(self):
    for row in self.board:
      print("|".join(row))
      print("-" * 5)

  def make_move(self, player, row, col):
    if self.board[row][col] == " ":
      self.board[row][col] = player
      return True
    else:
      print("Invalid move. Try again.")
      return False

# Example usage:
board = TicTacToeBoard()
board.make_move("X", 0, 0)
board.make_move("O", 1, 1)
board.make_move("X", 0, 1)
board.print_board()