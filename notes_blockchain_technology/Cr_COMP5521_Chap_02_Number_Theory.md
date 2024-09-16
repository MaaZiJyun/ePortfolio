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

# Part 1: Divisibility and GCD

Definition: the ability of **being completely divided without any reminder**.

Explain: there are <Latex>a</Latex> apples, which need to be given to <Latex>b</Latex> people. As result, everyone has the same number of apples and **no apple left**.

Examples: 4 % 2 = 0

- There is no remainder on division
- Notation <Latex>b | a</Latex>
- <Latex>b</Latex> is <Latex>a</Latex> divisor/factor of <Latex>a</Latex>
- <Latex>a</Latex> is divisible by <Latex>b</Latex>

## Division Algorithm

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

## Euclidean Algorithm

Greatest Common Divisor (GCD): The **greatest common divisor** of <Latex>a</Latex> and <Latex>b</Latex>, i.e., <Latex>gcd(a, b)</Latex>, is the **largest integer** that divides both <Latex>a</Latex> and <Latex>b</Latex>.

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

# Part 2: Modular Arithmetic

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

**Note that if <Latex>a ≡ 0 (\mod n)</Latex>, then <Latex>n ｜ a</Latex>.**

But why?

Because: <Latex>a = q \cdot n</Latex>. But how does <Latex>a</Latex> equals <Latex>q \cdot n</Latex>?

Proof:

<LatexBlock>
a - b = (q_1 \cdot n + r_1) - (q_2 \cdot n + r_2) \newline
a - b = (q_1 - q_2) \cdot n + r_1 - r_2 \newline
\because \text{known that} \ a ≡ b (\mod n) \newline
\therefore r_1 = r_2 \; \newline
\therefore a - b = (q_1 - q_2) \cdot n = \triangle q \cdot n
</LatexBlock>

In this case: 

<LatexBlock>
a - 0 = \triangle q \cdot n \newline
\therefore a = \triangle q \cdot n \newline
\therefore n | a = \triangle q
</LatexBlock>

**If <Latex>gcd(a, n) = 1</Latex>, <Latex>a \cdot x ≡ a \cdot y \mod n</Latex>, then <Latex>x ≡ y \mod n</Latex>**

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
a \cdot a^{-1} ≡ 1 (\mod n) \, \newline
a^{-1} \text{just for present and } a^{-1} \neq \frac{1}{a} \text{at here}
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

**Arithmetic Modulo 8**

Ever unit in this table represents <Latex>(x + y) \mod 8</Latex>, such as in <Latex>(1,1)</Latex>, <Latex>(1+1) \mod 8 = 2</Latex>.

| +   | 0     | 1     | 2     | 3     | 4     | 5     | 6     | 7     |
| --- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 0   | ==0== | 1     | 2     | 3     | 4     | 5     | 6     | 7     |
| 1   | 1     | 2     | 3     | 4     | 5     | 6     | 7     | ==0== |
| 2   | 2     | 3     | 4     | 5     | 6     | 7     | ==0== | 1     |
| 3   | 3     | 4     | 5     | 6     | 7     | ==0== | 1     | 2     |
| 4   | 4     | 5     | 6     | 7     | ==0== | 1     | 2     | 3     |
| 5   | 5     | 6     | 7     | ==0== | 1     | 2     | 3     | 4     |
| 6   | 6     | 7     | ==0== | 1     | 2     | 3     | 4     | 5     |
| 7   | 7     | ==0== | 1     | 2     | 3     | 4     | 5     | 6     |

**Multiplication Modulo 8**

Ever unit in this table represents <Latex>(x \cdot y) \mod 8</Latex>, such as in <Latex>(1,1)</Latex>, <Latex>(1 \cdot 1) \mod 8 = 1</Latex>.

| ×   | 0   | 1     | 2   | 3     | 4   | 5     | 6   | 7     |
| --- | --- | ----- | --- | ----- | --- | ----- | --- | ----- |
| 0   | 0   | 0     | 0   | 0     | 0   | 0     | 0   | 0     |
| 1   | 0   | ==1== | 2   | 3     | 4   | 5     | 6   | 7     |
| 2   | 0   | 2     | 4   | 6     | 0   | 2     | 4   | 6     |
| 3   | 0   | 3     | 6   | ==1== | 4   | 7     | 2   | 5     |
| 4   | 0   | 4     | 0   | 4     | 0   | 4     | 0   | 4     |
| 5   | 0   | 5     | 2   | 7     | 4   | ==1== | 6   | 3     |
| 6   | 0   | 6     | 4   | 2     | 0   | 6     | 4   | 2     |
| 7   | 0   | 7     | 6   | 5     | 4   | 3     | 2   | ==1== |

**Additive and Multiplicative Inverse Modulo 8**

| Col.                  | 0     | 1     | 2     | 3     | 4     | 5     | 6     | 7     |
| --------------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| <Latex>w</Latex>      | 0     | 1     | 2     | 3     | 4     | 5     | 6     | 7     |
| <Latex>-w</Latex>     | ==0== | ==7== | ==6== | ==5== | ==4== | ==3== | ==2== | ==1== |
| <Latex>w^{-1}</Latex> | -     | ==1== | -     | ==3== | -     | ==5== | -     | ==7== |

Column <Latex>w</Latex>: These are the elements (integers) from 0 to 7, which are taken modulo 8.

Column <Latex>-w</Latex> : These represent the additive inverses modulo 8. For each number <Latex>w</Latex>, its additive inverse is the number that, when added to <Latex>w</Latex>, results in 0 modulo 8. For example: <Latex>1 + 7 = 8 ≡ 0 \mod 8</Latex>, so the additive inverse of 1 is 7.

Column <Latex>w^{-1}</Latex> : These represent the multiplicative inverses modulo 8. The multiplicative inverse of a number <Latex>w</Latex> is the number <Latex>x</Latex> such that <Latex>w \cdot x ≡ 1 \mod 8</Latex>. For example: The multiplicative inverse of 1 is 1, as <Latex>1 \cdot 1 = 1 \mod 8.</Latex>

## Bezout's Identity

<LatexBlock>
a \cdot x + b \cdot y = GCD(a,b)
</LatexBlock>

**How to calculate modular inverse?**

Example: To calculate the modular inverse of 911 mod 999.

<LatexBlock>
\text{let} \ a = 911 \ \text{and} \ b = 999 \; \newline
\text{According to Euclidean algorithm:} \newline
L_1: 999 = 1 \cdot 911 + 88 \newline
L_2: 911 = 10 \cdot 88 + 31 \newline
L_3: 88 = 2 \cdot 31 + 26 \newline
L_4: 31 = 1 \cdot 26 + 5 \newline
L_5: 26 = 5 \cdot 5 + 1 \newline
\therefore gcd(a, b) = 1 \newline
\text{Then, Tracing backward:} \newline
\text{Begin with } L_5: 1 = 26 – 5 \cdot 5 \newline
\text{Substitute } L_4 \text{ to replace 5:} \newline
1 = 26 – 5 \cdot (31 – 1 \cdot 26) = -5 \cdot 31 + 6 \cdot 26 \newline
\text{Substitute } L_3 \text{ to replace 26:} \newline
1= -5 \cdot 31 + 6 \cdot (88 – 2 \cdot 31) = 6 \cdot 88 – 17 \cdot 31 \newline
\text{Substitute } L_2 \text{ to replace 31:} \newline
1= 6 \cdot 88 – 17 \cdot (911 – 10 \cdot 88) = -17 \cdot 911 + 176 \cdot 88 \newline
\text{Substitute } L_1 \text{ to replace 88:} \newline
1= -17 \cdot 911 + 176 \cdot (999 – 1 \cdot 911) = 176 \cdot 999 – 193 \cdot 911 \newline
\therefore gcd(911, 999) = 1 = -193 \cdot 911 + 176 \cdot 999 \newline
\text{Modular reduction: }1 (\mod 999) = -193 \cdot 911 + 176 \cdot 999 (\mod 999) \newline
\text{Result: } 1 ≡ 806 \cdot 911 (\mod 999) \newline
\therefore 806 \text{ is the modular inverse of } 911 \text{ modulo } 999.
</LatexBlock>

# Part 3: Prime Number, Fermat’s Theorem and Euler’s Theorem

## Prime Number

Prime numbers **only** have divisors of **1 and itself**.

Composite number has at least one divisor **other than 1 and itself**

**The fundamental theorem of arithmetic**: Any integer <Latex>a \, a > 1</Latex> can be factored in a unique way as: <Latex>a = p_1^{a_1} \cdot p_2^{a_2} \cdot \text{...} \cdot p_t^{a_t}</Latex> where <Latex>p_1 < p_2 < \text{...} < p_t </Latex> are prime numbers and where each <Latex>a_i</Latex> is a positive integer. For example: <Latex>24 = 2 \cdot 2 \cdot 2 \cdot 3 = 2^{3} \cdot 3^{1}</Latex>

## Fermat's Theorem

If <Latex>p</Latex> is prime and <Latex>a</Latex> is a positive integer not divisible by <Latex>p</Latex> then:

<LatexBlock>
a^{p-1} ≡ 1 (\mod p) \ \text{Fermat's Little Theorem}
</LatexBlock>

How? Here's the proof: 

<LatexBlock>
\text{Known: } a \nmid p \, a > 0 \; \newline
\because (p-1) < p \newline
\therefore ( \text{any number} \mod p) \in \\{1, 2, 3, ..., (p-1)\\}\newline
\text{If let } p = 5 \, \ 8 \cdot \\{1,2,3,4\\} = \\{ 8, 16, 24, 32\\}\newline
\text{And } \\{ 8, 16, 24, 32\\} ≡ \\{1,2,3,4\\} \ (\mod 5)\newline
\therefore a \cdot \\{1, 2, 3, ..., (p-1)\\} ≡ \\{1, 2, 3, ..., (p-1)\\} \ (\mod p) \newline
\\{a, 2 \cdot a, 3 \cdot a, ..., (p-1) \cdot a\\} ≡ \\{1, 2, 3, ..., (p-1)\\} \ (\mod p) \newline
\therefore a \cdot 2 \cdot a \cdot 3 \cdot a \cdot ... \cdot (p-1) \cdot a \mod p = 1 \cdot 2 \cdot 3 \cdot ... \cdot (p-1) \newline
a \cdot 2 \cdot a \cdot 3 \cdot a \cdot ... \cdot (p-1) \cdot a = a^{p-1}(p-1)!\newline
1 \cdot 2 \cdot 3 \cdot ... \cdot (p-1) = (p-1)!\newline
a^{p-1}(p-1)! \mod p = (p-1)!\newline
a^{p-1}(p-1)! ≡ (p-1)! \ (\mod p)\newline
\because ax ≡ ay (\mod n) \text{ equals to } x ≡ y (\mod n)\newline
\therefore a^{p-1} ≡ 1 (\mod p)\newline
</LatexBlock>

<drawer title="Table of Example">
So, why <Latex>a \cdot \\{1, 2, 3, ..., (p-1)\\} ≡ \\{1, 2, 3, ..., (p-1)\\} \ (\mod p) </Latex> can be transform to <Latex>a \cdot 2 \cdot a \cdot 3 \cdot a \cdot ... \cdot (p-1) \cdot a  ≡ 1 \cdot 2 \cdot 3 \cdot ... \cdot (p-1) (\mod p)?</Latex>

It is called: **Permutation Property in Fermat's Little Theorem**

1. <Latex>\\{a, 2 \cdot a, 3 \cdot a, ..., (p-1) \cdot a\\}</Latex> is simply a rearranged (permuted) version of <Latex>\\{1, 2, 3, ..., (p-1)\\}</Latex>
2. The product of elements remains the same: <Latex>a \cdot 2 \cdot a \cdot 3 \cdot a \cdot ... \cdot (p-1) \cdot a  ≡ 1 \cdot 2 \cdot 3 \cdot ... \cdot (p-1) (\mod p)</Latex>

Assume that <Latex>p = 3</Latex>, because <Latex>a \nmid b</Latex>, reminders shouldn't be 0;

| ×          | 0   | 1      | 2      |
| ---------- | --- | ------ | ------ |
| 0          | 0   | 0      | 0      |
| 1          | 0   | 1      | 2      |
| 2          | 0   | 2      | 1      |
| 3          | 0   | 0      | 0      |
| 4 (%3 = 1) | 0   | 1      | 2      |
| 5 (%3 = 2) | 0   | 2      | 1      |
| 6 (%3 = 0) | 0   | 0      | 0      |
| 7 (%3 = 1) | 0   | 1      | 2      |
| 8 (%3 = 2) | 0   | 2      | 1      |
| 9 (%3 = 0) | 0   | 0      | 0      |
| a          | 0   | 1 or 2 | 1 or 2 |

Therefore, according to the regulation:

If <Latex>a = 1</Latex>, <Latex>1 \times 1 \cdot 1 \times 2 ≡ 1 \cdot 2 \ (\mod 3)</Latex>

If <Latex>a = 2</Latex>, <Latex>2 \times 1 \cdot 2 \times 2 ≡ 1 \cdot 2 \ (\mod 3)</Latex>

If <Latex>a = 4</Latex>, <Latex>4 \times 1 \cdot 4 \times 2 ≡ 1 \cdot 2 \ (\mod 3)</Latex>

Therefore, <Latex>a \times 1 \cdot a \times 2 \cdot a \times 3 \cdot ... \cdot a \times (p-1)  ≡ 1 \cdot 2 \cdot 3 \cdot ... \cdot (p-1) (\mod p)</Latex>

</drawer>

## Euler’s Totient Function

For a positive integer <Latex>n</Latex>, Euler's Totient Function <Latex>\phi(n)</Latex> is defined as the number of integers from 1 to <Latex>n</Latex> that are coprime to <Latex>n</Latex>. Two integers are coprime if their greatest common divisor (gcd) is 1.

**Basic Property**:

<LatexBlock>
\phi(n) = \left| \\{ k \mid 1 \leq k \leq n, gcd(k, n) = 1 \\} \right|
</LatexBlock>

**For a Prime Number** <Latex>p</Latex>: If <Latex>p</Latex> is a prime number, then every number from 1 to <Latex>p - 1</Latex> is coprime with <Latex>p</Latex>. Therefore:

<LatexBlock>
\phi(p) = p - 1
</LatexBlock>

<drawer title="Example">
For <Latex>p = 7</Latex>, a prime number:<Latex>\phi(7) = 7 - 1 = 6</Latex>

The numbers from 1 to 6 (i.e., 1, 2, 3, 4, 5, 6) are all coprime with 7.
</drawer>

It is used in Euler's Theorem, which generalizes Fermat's Little Theorem. For any integer <Latex>a</Latex> and <Latex>n</Latex> where <Latex>a</Latex> is coprime to <Latex>n</Latex>:

<LatexBlock>
a^{p-1} ≡ 1 (\mod p) \ \newline
a^{\phi(p)} ≡ 1 (\mod p) \ \text{Fermat's Little Theorem}
</LatexBlock>

**General Formula**: 

The general formula for Euler's Totient Function <Latex>\phi(n)</Latex>, where <Latex> n </Latex> is expressed as a product of distinct prime factors, is given by:

<LatexBlock>
\phi(n) = n \left(1 - \frac{1}{p_1}\right) \left(1 - \frac{1}{p_2}\right) \cdots \left(1 - \frac{1}{p_m}\right)
</LatexBlock>

where <Latex> n </Latex> can be expressed as:

<LatexBlock>
n = p_1^{k_1} \cdot p_2^{k_2} \cdots p_m^{k_m}
</LatexBlock>

and <Latex> p_1, p_2, \ldots, p_m </Latex> are distinct prime numbers.

<drawer title="Example">
For <Latex>n = 30</Latex>, Factorize <Latex>30 = 2 \cdot 3 \cdot 5</Latex>

Therefore, <Latex>\phi(30) = 30 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{3}\right) \left(1 - \frac{1}{5}\right) = 8</Latex>

Thus, <Latex>\phi(30) = 8</Latex>, meaning there are 8 numbers from 1 to 30 that are coprime with 30.
</drawer>

If <Latex>n = p^{k}</Latex> (<Latex>p</Latex> is prime), then <Latex>\phi(n) = p^{k} - p^{k-1}</Latex>

Proof:

<LatexBlock>
\phi(n) = n \left(1 - \frac{1}{p_1}\right) \left(1 - \frac{1}{p_2}\right) \cdots \left(1 - \frac{1}{p_m}\right)\newline
</LatexBlock>

If <Latex>n = p^{k}</Latex> (<Latex>p</Latex> is prime), there is only one prime factor <Latex>p</Latex> with exponent <Latex>k</Latex>. Thus:

<LatexBlock>
\phi(p^{k}) = p^{k} \left(1 - \frac{1}{p}\right) \newline
\phi(p^{k}) = p^{k} \cdot \frac{p-1}{p} \newline
\phi(p^{k}) =  \frac{p^{k} \cdot (p-1)}{p} = p^{k-1} \cdot (p-1) \newline

</LatexBlock>

Simplify this further:

<LatexBlock>\phi(n) = p^{k} - p^{k-1}</LatexBlock>

# Part 4: Efficient Modulo Operation for Large Numbers

## Chinese Remainder Theorem

The **Chinese Remainder Theorem (CRT)** is a fundamental result in number theory that provides a method for solving systems of simultaneous congruences with pairwise coprime moduli. It ensures that there is a unique solution to such systems, and this solution is congruent modulo the product of the moduli.

### Theorem

Let <Latex>n_1, n_2, \ldots, n_k</Latex> be pairwise coprime positive integers, and let <Latex>a_1, a_2, \ldots, a_k</Latex> be integers. Then there exists a unique integer <Latex>x</Latex> modulo <Latex>N = n_1 \cdot n_2 \cdots n_k</Latex> such that:

<LatexBlock>
x \equiv a_i \pmod{n_i} \quad \text{for } i = 1, 2, \ldots, k
</LatexBlock>

### Proof Outline

1. **Define the Problem:**

   We want to find an integer <Latex>x</Latex> that satisfies:
   
   <LatexBlock>
   x \equiv a_i \pmod{n_i}
   </LatexBlock>

   for each <Latex>i</Latex>, where <Latex>n_i</Latex> are pairwise coprime.

2. **Construct the Solution:**

   Let <Latex>N = n_1 \cdot n_2 \cdots n_k</Latex>. For each <Latex>i</Latex>:
   
   - Define <Latex>N_i = \frac{N}{n_i}</Latex>.
   - Find <Latex>M_i</Latex> such that <Latex>N_i \cdot M_i \equiv 1 \pmod{n_i}</Latex>. This can be done using the Extended Euclidean Algorithm to find the modular inverse of <Latex>N_i</Latex> modulo <Latex>n_i</Latex>.

3. **Formulate the Solution:**

   The solution can be expressed as:

   <LatexBlock>
   x = \sum_{i=1}^k a_i \cdot N_i \cdot M_i
   </LatexBlock>

4. **Verify the Solution:**

   Check that <Latex>x</Latex> satisfies all congruences:

   <LatexBlock>
   x \equiv a_i \pmod{n_i}
   </LatexBlock>

   for all <Latex>i</Latex>. 

5. **Uniqueness:**

   The solution <Latex>x</Latex> is unique modulo <Latex>N</Latex> because the moduli are pairwise coprime, ensuring that the solution within the range <Latex>0</Latex> to <Latex>N-1</Latex> is unique.

<drawer title="Example">
Consider the following system of congruences:

<LatexBlock>
\begin{cases}
x \equiv 2 \pmod{3} \newline
x \equiv 3 \pmod{4} \newline
x \equiv 2 \pmod{5} \newline
\end{cases}
</LatexBlock>

**Calculate <Latex>N</Latex>:**<Latex>N = 3 \cdot 4 \cdot 5 = 60</Latex>

**Compute <Latex>N_i</Latex> and <Latex>M_i</Latex>:**

For <Latex>n_1 = 3</Latex>: <Latex>N_1 = \frac{60}{3} = 20</Latex>

Find <Latex>M_1</Latex> such that <Latex>20 \cdot M_1 \equiv 1 \pmod{3}</Latex>. 

Here, <Latex>M_1 = 2</Latex> (since <Latex>20 \cdot 2 \equiv 40 \equiv 1 \pmod{3}</Latex>).

For <Latex>n_2 = 4</Latex>: <Latex>N_2 = \frac{60}{4} = 15</Latex>

Find <Latex>M_2</Latex> such that <Latex>15 \cdot M_2 \equiv 1 \pmod{4}</Latex>. 

Here, <Latex>M_2 = 3</Latex> (since <Latex>15 \cdot 3 \equiv 45 \equiv 1 \pmod{4}</Latex>).

For <Latex>n_3 = 5</Latex>: <Latex>N_3 = \frac{60}{5} = 12</Latex>

Find <Latex>M_3</Latex> such that <Latex>12 \cdot M_3 \equiv 1 \pmod{5}</Latex>. 

Here, <Latex>M_3 = 3</Latex> (since <Latex>12 \cdot 3 \equiv 36 \equiv 1 \pmod{5}</Latex>).

**Calculate <Latex>x</Latex>:**

   <LatexBlock>
   x = 2 \cdot 20 \cdot 2 + 3 \cdot 15 \cdot 3 + 2 \cdot 12 \cdot 3 = 80 + 135 + 72 = 287
   </LatexBlock>

**Reduce <Latex>x</Latex> modulo <Latex>60</Latex>:**

   <LatexBlock>
   x \equiv 287 \pmod{60} \equiv 47
   </LatexBlock>

Thus, <Latex>x = 47</Latex> is a solution to the system of congruences.
</drawer>
