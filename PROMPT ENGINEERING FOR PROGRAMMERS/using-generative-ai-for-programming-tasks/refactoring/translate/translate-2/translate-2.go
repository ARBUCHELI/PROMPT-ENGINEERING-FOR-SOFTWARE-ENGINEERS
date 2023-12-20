package main

import "fmt"

func fibonacci(limit int) {
    num1, num2 := 0, 1
    fmt.Print(num1, " ")
    for num2 <= limit {
        fmt.Print(num2, " ")
        num1, num2 = num2, num1 + num2
    }
}

func main() {
    fibonacci(100)
}