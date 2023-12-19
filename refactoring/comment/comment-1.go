package main

import (
    "fmt"
    "math"
)

func reverse(x int) int {
    negative := x < 0
    if negative {
        x *= -1
    }    

    var reversed int
    
    for x > 0 {
        reversed += x % 10
        if (x >= 10) {
            reversed *= 10
        }
        x /= 10
        fmt.Println(reversed, x)
    }

    if negative {
        reversed *= -1
    }

    if float64(reversed) < (-1 * (math.Pow(2,31))) || float64(reversed) > (math.Pow(2,31)-1) {
        return 0;
    } 

    return reversed
}

func main() {
    x := 12345
    result := reverse(x)
    fmt.Println("Reversed number:", result)
}