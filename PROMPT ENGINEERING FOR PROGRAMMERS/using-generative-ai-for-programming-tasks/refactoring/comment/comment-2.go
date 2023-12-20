package main

import (
    "fmt"
    "math"
)
      
func reverse(x int) int {
    negative := x < 0  // Check if x is negative
    if negative {
        x *= -1  // Convert x to positive
    }

    var reversed int  // Variable to store the reversed number

    // Reverse the digits of x
    for x > 0 {
        reversed += x % 10  // Add the last digit of x to reversed
        if x >= 10 {
            reversed *= 10  // Multiply reversed by 10 if there are more digits remaining
        }
        x /= 10  // Remove the last digit of x
        fmt.Println(reversed, x)  // Print intermediate results (optional)
    }

    if negative {
        reversed *= -1  // Convert reversed back to negative if x was negative
    }

    // Check for integer overflow
    if float64(reversed) < (-1 * (math.Pow(2,31))) || float64(reversed) > (math.Pow(2,31)-1) {
        return 0  // Return 0 if the reversed number is out of the signed 32-bit integer range
    }

    return reversed  // Return the reversed number
}

func main() {
    x := 12345  // The number to be reversed
    result := reverse(x)  // Call the reverse function with x and store the result
    fmt.Println("Reversed number:", result)
}