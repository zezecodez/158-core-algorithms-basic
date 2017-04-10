---
authors:
- "tannerwelsh"
goal_id: 158
team_size: 1
title: Core Algorithms [Classic, Numeric, and Set]
created_at: '2016-12-31T16:12:46Z'
labels:
- core
published: true
level: '1'
redirect_from: "/goals/158"
---

# Core Algorithms [Classic, Numeric, and Set]

This is a sub-goal of [Core Algorithms][core-algos].

# Completed Specs
[ ] makeChange
[ ] fizzBuzz
[ ] isPalindrome
[ ] factorial
[ ] fibonacci
[ ] collatzConjecture
[ ] setUnion
[ ] setIntersection
[ ] setCompliment
[ ] setSymmetricDifference

## Classic

#### makeChange

Given a price and an amount paid, return the number of coins in each denomination that should be given as change.

_Note: because JavaScript is [bad at decimal math](http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html), the inputs are given as integers that represent dollar + cent amounts, so `139` = $1.39._

```javascript
makeChange({ price: 100, amountGiven: 100 })
// => { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }

makeChange({ price: 159, amountGiven: 200 })
// => { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }

makeChange({ price: 432, amountGiven: 500 })
// => { quarters: 2, dimes: 1, nickels: 1, pennies: 3 }
```

#### fizzBuzz

Return an array of numbers from 1 to 100.

For multiples of three, use the string `Fizz` instead of the number and for multiples of five replace with `Buzz`.

For numbers which are multiples of both three and five replace with `FizzBuzz`.

```javascript
fizzBuzz()
// => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', ...]
```

#### isPalindrome

Determine if a string is a palindrome. Return `true` or `false`.

Ignore punctuation, spacing, and case sensitivity.

```javascript
isPalindrome('radar')
// => true

isPalindrome('bananas')
// => false

isPalindrome('A man, a plan, a canal: Panama')
// => true
```

## Numeric

#### factorial

Return the factorial of a number.

```javascript
factorial(5)
// => 120
```

#### fibonacci

Return an array of Fibonacci numbers to the _nth_ position.

```javascript
fibonacci(10)
// => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

#### collatzConjecture

Return the Collatz sequence for a given number.

The Collatz sequence for any positive integer `n` is defined as follows:

> If `n` is even, divide it by 2 to get `n / 2`. If `n` is odd, multiply it by 3 and add 1 to obtain `3n + 1`. Repeat the process until you reach 1.

```javascript
collatzConjecture(1)
// => [1]

collatzConjecture(7)
// => [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
```


## Set Operations

#### setUnion

Return the union of two sets.

```javascript
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setUnion(a, b)
// => [1, 2, 3, 4, 6, 8]
```

#### setIntersection

Return the intersection of two sets.

```javascript
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setIntersection(a, b)
// => [2, 4]
```

#### setCompliment

Return the compliment of two sets.

```javascript
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setCompliment(a, b)
// => [6, 8]
```

#### setSymmetricDifference

Return the symmetric difference of two sets.

```javascript
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setSymmetricDifference(a, b)
// => [1, 3, 6, 8]
```
