---
title: "Cr. COMP5521 Chap. 02: Number Theory [undone]"
abstract: "Lecture 2 in DISTRIBUTED LEDGER TECHNOLOGY, CRYPTOCURRENCY AND E-PAYMENT"
date: "2024-09-09"
address: "自習スタジオ"
author:
  name: 童夢綺 Domuki
keywords: ["Distributed Algorithms", "Protocols", "Blockchains", ]
---

# Number Theory

Number theory is a branch of pure mathematics that studies the properties and relationships of integers. It is one of the oldest and most abstract areas of mathematics, yet it has significant applications in modern fields like cryptography, computer science, and coding theory.

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-016.gif)

# Divisibility

Definition: the ability of **being completely divided without any reminder**.

Explain: there are <Latex>a</Latex> apples, which need to be given to <Latex>b</Latex> people. As result, everyone has the same number of apples and **no apple left**.

Examples: 4 % 2 = 0

- There is no remainder on division
- Notation <Latex>b | a</Latex>
- <Latex>b</Latex> is <Latex>a</Latex> divisor/factor of <Latex>a</Latex>
- <Latex>a</Latex> is divisible by <Latex>b</Latex>

# Division Algorithm

In mathematics, when division is "not exact" or "doesn't divide evenly," it means that in integer division, the division operation does not result in a whole number; instead, there is a non-zero remainder. Well, if the integer cannot be completely divided, and the result seems like this:  

<LatexBlock>\frac{a}{b} = q \text{ with remainder } r</LatexBlock>

Or in another way:  

<LatexBlock>a = b \cdot q + r</LatexBlock>.

Where:

- <Latex>a</Latex> is the **dividend**, the number that is being divided.
- <Latex>b</Latex> is the **divisor**, the number by which the dividend is divided.
- <Latex>q</Latex> is the **quotient**, which is an integer;
- <Latex>r</Latex> is the **remainder**, and it satisfies <Latex>0 \leq r < b</Latex>;

For example: if <Latex>a = 10</Latex> and <Latex>b = 3</Latex>, then:

<LatexBlock>10 = 3 \cdot 3 + 1</LatexBlock>.

If the purpose is to calculate the reminder of <Latex>a</Latex> being divided by <Latex>b</Latex>, then:

<LatexBlock>a \mod b = r</LatexBlock>.

# Euclidean Algorithm

## Greatest Common Divisor (GCD)

Definition: The **greatest common divisor** of <Latex>a</Latex> and <Latex>b</Latex>, i.e., <Latex>gcd(a, b)</Latex>, is the **largest integer** that divides both <Latex>a</Latex> and <Latex>b</Latex>.

**How to get the greatest common divisor?**

Example: divide 48 by 18 and find the remainder:

<LatexBlock>
48 = 18 \cdot 2 + 12 \newline
18 = 12 \cdot 1 + 6 \newline
12 = 6 \cdot 2 + 0 \newline
\therefore GCD(48, 18) = 6
</LatexBlock>.

And then, it can be represented in form of <Latex>a \cdot x + b \cdot y = gcd(a,b)</Latex>

Which is: <Latex>GCD(48, 18) = 48 \cdot (−1) + 18 \cdot 3 = 6</Latex>

In this case, <Latex>x = -1</Latex> and <Latex>y = 3</Latex>

In an abstract way: 

<LatexBlock>
a = b \cdot q + r \newline
b = r \cdot q_1 + r_1 \newline
r = r_1 \cdot q_2 + r_2 \newline
...\newline
</LatexBlock>.

Until meet the 0:

<LatexBlock>r_{n-2} = r_{n-1} \cdot q_n + 0 </LatexBlock>.

# Modular Arithmetic

## The modulus

Definition: If <Latex>a</Latex> is an integer and <Latex>b</Latex> is a positive integer, we define <Latex>a \mod b</Latex> to be the remainder when <Latex>a</Latex> is divided by <Latex>b</Latex>; the integer <Latex>b</Latex> is called the **modulus**.

Thus, for any integer a:

<LatexBlock>
a = b \cdot q + r \, 0 \leq r < b \; q = [a｜b] \newline
a = [a｜b] \cdot b + (a \mod b)
</LatexBlock>.

## Congruent modulo

Definition: Two integers <Latex>a</Latex> and <Latex>b</Latex> are said to be congruent modulo <Latex>n</Latex> if <Latex>(a \mod n) = (b \mod n)</Latex>, which can be written as:

<LatexBlock>a ≡ b (\mod n)</LatexBlock>

- <Latex>≡</Latex>: This symbol represents congruence. It indicates that the two values are equivalent in terms of their remainders when divided by <Latex>n</Latex>.
- <Latex>(\mod n)</Latex>: This notation means "modulo <Latex>n</Latex>." It specifies the modulus, which is the divisor <Latex>n</Latex>.

### Note that if <Latex>a ≡ 0 (mod n)</Latex>, then <Latex>n ｜ a</Latex>. But why?

Because: <Latex>a = q \cdot n</Latex>. But how does <Latex>a</Latex> equals <Latex>q \cdot n</Latex>?

Proof:

<LatexBlock>
a - b = (q_1 \cdot n + r_1) - (q_2 \cdot n + r_2) \newline
a - b = (q_1 - q_2) \cdot n + r_1 - r_2 \newline
\because a ≡ b (\mod n) 
\therefore r_1 = r_2 \; \newline
\therefore a - b = (q_1 - q_2) \cdot n = \triangle q \cdot n
</LatexBlock>

In this case: 

<LatexBlock>
a - 0 = \triangle q \cdot n \newline
\therefore a = \triangle q \cdot n \newline
\therefore n | a = \triangle q
</LatexBlock>

### If <Latex>gcd(a, n) = 1</Latex>, <Latex>a \cdot x ≡ a \cdot y \mod n</Latex>, then <Latex>x ≡ y \mod n</Latex>

But why <Latex>x ≡ y \mod n</Latex>?

*Given:* 

<LatexBlock>
gcd(a,n)=1 \newline
a \cdot x≡a \cdot y \ ( \mod n)
</LatexBlock>

*Proof:*

<LatexBlock>
\because a \cdot x≡a \cdot y \ ( \mod n) \newline
\therefore a \cdot x - a \cdot y≡ 0 \ ( \mod n) \newline
\therefore a \ (x-y) ≡ 0 \ ( \mod n) \newline
\because \text{The reminder of} \ a \ (x-y) \ \text{being divided by n is 0} \newline
\therefore a \ (x-y) \ \text{is divisible by n, which is a multiple of n} \newline
\therefore a \ (x-y) = q \cdot n \, \text{where q is some integer.} \newline
\therefore x-y = \frac{q \cdot n}{a} \newline
\because \text{x, y, a, n are all integers} \newline
\therefore x - y \ \text{must be an integer and} \ \frac{q \cdot n}{a} \ \text{must be an integer as well} \newline
\therefore k⋅n \ \text{is divisible by} \ a \newline
\because a \text{ and } n \text{ are coprime} \ gcd(a,n) = 1 \, a \text{ does not divide } n \newline
\therefore a \text{ must divide } q \, \frac{q}{a} = q_{\ new} \newline
\therefore (x - y) \mod n = q_{\ new} \cdot n \mod n = 0 \newline
\therefore x - y ≡ 0 (\mod n)\newline
\ \ \ x ≡ y \ ( \mod n)
</LatexBlock>

## Modular Inverse

In modular arithmetic, instead of working with division (which can be problematic in modular systems), we use multiplication to "undo" the effect of a number. The modular inverse of <Latex>a</Latex> modulo <Latex>n</Latex> is a number <Latex>x</Latex> such that:

<LatexBlock>
a \cdot x ≡ 1 (\mod n) \newline
a \cdot a^{-1} ≡ 1 (\mod n) \, \ a^{-1} \text{just for present and } a^{-1} \neq \frac{1}{a} \text{at here}
</LatexBlock>

**There exists <Latex>a</Latex> modular inverse for <Latex>a</Latex> mod <Latex>b</Latex> if <Latex>a</Latex> is relatively prime to <Latex>b</Latex>**

Proof: If <Latex>gcd(a,b)=1</Latex>, then <Latex>a</Latex> has a modular inverse modulo <Latex>b</Latex>

<LatexBlock>

\because gcd(a,b)=1 \newline
\therefore a \cdot x + b \cdot y = 1 \ \text{(Using Bezout's Identity)} \newline
\therefore a \cdot x + b \cdot y ≡ 1 \ (\mod b) \newline
\because b \cdot y \ \text{is a multiple of} \ b \newline
\therefore b \cdot y ≡ 0 \ (\mod b) \newline
\therefore a \cdot x ≡ 1 \ (\mod b) \newline
\therefore a \cdot a^{-1} ≡ 1 \ (\mod n)
</LatexBlock>

### Bezout's Identity

<LatexBlock>
a \cdot x + b \cdot y = GCD(a,b)
</LatexBlock>

### How to calculate modular inverse?

Example: To calculate the modular inverse of 911 mod 999

# Summary

**Divisibility**: <Latex>a = b \cdot q</Latex>, and <Latex>q = [a｜b]</Latex>.
 
**Division Algorithm**: <Latex>a \div b = q \ ...\  r</Latex>, and <Latex>a = b \cdot q + r</Latex>.
 
**The modulus**: <Latex>a \mod b = r</Latex>, and <Latex>a = [a｜b] \cdot b + (a \mod b)</Latex>

**Congruent modulo**: <Latex>a ≡ r \ (\mod b)</Latex>

**Bezout's Identity**: <Latex>a \cdot x + b \cdot y = GCD(a,b)</Latex>