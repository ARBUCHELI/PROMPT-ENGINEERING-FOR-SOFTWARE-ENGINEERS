def fibonacci(limit):
    num1, num2 = 0, 1
    print(num1, end=" ")
    while num2 <= limit:
        print(num2, end=" ")
        num1, num2 = num2, num1 + num2

fibonacci(100)