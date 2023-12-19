package main

import "fmt"
      
func twoSum(nums []int, target int) []int {
    numMap := make(map[int]int)

    for i, num := range nums {
        complement := target - num

        if index, ok := numMap[num]; ok {
            return []int{index, i}
        }

        numMap[complement] = i
    }

    return []int{0, 0}
}

func main() {
    nums := []int{2, 7, 11, 15}
    target := 9

    result := twoSum(nums, target)
    fmt.Println(result)
}