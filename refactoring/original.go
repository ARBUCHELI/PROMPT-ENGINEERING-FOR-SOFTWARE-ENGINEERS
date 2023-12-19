package main
import "fmt"
func twoSum(nums []int, target int) []int {
    m := make(map[int]int);
    for i, k := range nums {
        key := target - k
        v, ok := m[k]
        if ok {
            return []int {v, i}
        }
        m[key] = i
    }
    return []int {0,0}
}
func main() {
    a := []int{2, 7, 11, 15}
    b := 9
    c := twoSum(a, b)
    fmt.Println(c)
}