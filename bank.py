class BankAccount:
  def __init__(self, initial_balance=0):
    self.balance = initial_balance

  def deposit(self, amount):
    self.balance += amount

  def withdraw(self, amount):
    if self.balance >= amount:
      self.balance -= amount
    else:
      print("Insufficient funds")

# Example usage:
account = BankAccount(1000)
print("Initial balance:", account.balance)

account.deposit(500)
print("Balance after deposit:", account.balance)

account.withdraw(200)
print("Balance after withdrawal:", account.balance)