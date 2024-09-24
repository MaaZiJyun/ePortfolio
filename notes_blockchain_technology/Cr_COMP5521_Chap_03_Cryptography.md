---
title: "Cr. COMP5521 Chap. 03: Cryptography"
abstract: "Lecture 3 in DISTRIBUTED LEDGER TECHNOLOGY, CRYPTOCURRENCY AND E-PAYMENT"
date: "2024-09-17"
address: "自習スタジオ"
author:
  name: 童夢綺 Domuki
keywords: ["Distributed Algorithms", "Protocols", "Blockchains", ]
---

# Part 1: Symmetric Encryption

This part is a little bit duplicated with the content in [Chapter one of COMP5563](https://domuki.top/study/blockchain_technology/Cr_COMP5563_Chap_01_Intro_OTP)

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-006.png)

## Symmetric Cipher Model

Two requirements for secure use of conventional encryption:
- A strong encryption algorithm
- Sender and receiver must have obtained copies of the secret key in a secure fashion and must keep the key secure

## Caesar Cipher

It is simplest and earliest known use of a substitution cipher

Algorithm can be expressed as: <Latex>c = E(3, p) = (p + 3) \mod 26</Latex>

A shift may be of any amount, so that the general Caesar algorithm is: <Latex>C = E(k , p) = (p + k) \mod 26</Latex>

Where k takes on a value in the range 1 to 25; the decryption algorithm is simply: <Latex>p = D(k , C) = (p-k) \mod 26</Latex>

## One-time Pad

Improvement to Vernam cipher:
- In OTP, the key is as long as the message
- OTP requires the key to be completely random
- The key is used only once and then discarded

**The scheme is unbreakable.** Because the ciphertext (random output) contains no information whatsoever about the plaintext, there is simply no way to break the code

<drawer issue="Encryption is similar to shift cipher" title="Example">
Let <Latex>Z_m ={0,1,…,m-1}</Latex> be the alphabet.

Plaintext space = Ciphtertext space = Key space = <Latex>(Z_m )^n</Latex>

The key is chosen uniformly randomly

Plaintext <Latex>X = (x_1, x_2, …, x_n )</Latex>

Key <Latex>K = (k_1, k_2, …, k_n )</Latex>

Ciphertext <Latex>Y = (y_1, y_2, …, y n )</Latex>

<LatexBlock>
e_k (X) = (x_1 +k_1, x_2 +k_2, …, x_n +k_n ) \mod m \newline
d_k (Y) = (y_1 -k_1, y_2 -k_2, …, y_n -k_n ) \mod m
</LatexBlock>
</drawer>

## The Binary Version of One-Time Pad

Plaintext space = Ciphtertext space = Key space = <Latex>\\{0,1\\}^n</Latex>

<drawer issue="How those 0 and 1 bits calculate?" title="Bit Operators">
Bit AND: If there's a zero in calculation, then the result will be zero.

- 0 ∧ 0 = 0 
- 0 ∧ 1 = 0 
- 1 ∧ 0 = 0 
- 1 ∧ 1 = 1

Bit OR: If there's a one in calculation, then the result will be one.

- 0 ∨ 0 = 0 
- 0 ∨ 1 = 1 
- 1 ∨ 0 = 1 
- 1 ∨ 1 = 1

Bit XOR:  If 2 numbers are same, then the result will be zero.

- 0 ⊕ 0 = 0 
- 0 ⊕ 1 = 1 
- 1 ⊕ 0 = 1 
- 1 ⊕ 1 = 0
</drawer>

<drawer issue="How to encrpt plaintext with key in Binary?" title="Example">
<LatexBlock>
\text{let } P = 11011011 \, K = 01101001 \newline
\text{and} E(P) = P \land K \newline
\therefore E(P) = 01001001
</LatexBlock>
</drawer>

## Difficulty

The one-time pad offers complete security but, in practice, has **two** fundamental difficulties:

- There is the practical problem of making **large quantities of random keys**. Any heavily used system might require millions of random characters on a regular
basis
- Mammoth **key distribution problem**. For every message to be sent, a key of equal length is needed by both sender and
receiver

Although, The one-time pad is the only cryptosystem that exhibits **perfect secrecy**, because of these difficulties, the one-time pad is of **limited utility**, and it's primarily used for **low-bandwidth channels** requiring very high security. 

# Part 2: RSA Algorithm

## Rivest-Shamir-Adleman (RSA) Algorithm

This algorithm was developed in 1977 at MIT by Ron ==R==ivest, Adi ==S==hamir & Len ==A==dleman. It is the **most widely used general-purpose** approach to public-key encryption.

Before RSA, key distribution in cryptography required securely sharing a secret key between two parties. This was **challenging** because the secret key had to be shared privately, and if an attacker intercepted the key, the entire communication could be compromised.

RSA introduced the concept of public-key cryptography, where:

- A pair of keys is generated: a **public** key (for encryption) and a **private** key (for decryption).
- The public key can be shared freely, and only the private key can decrypt the messages.

RSA solves **the need** for a trapdoor function — a function that is easy to compute in one direction but hard to reverse without special information (probably "one-way"). They utilized the Modular arithmetic to solve the problem. The process of encrypting <Latex>M</Latex> to <Latex>C</Latex> is easy to compute. However, reversing this operation (finding <Latex>M</Latex>from <Latex>C</Latex>) without knowing the private key requires factoring <Latex>n</Latex> back into <Latex>p</Latex> and <Latex>q</Latex>, which is computationally hard when <Latex>n</Latex> is very large (with thousands of bits)

<LatexBlock>
C = M^e \mod n \newline
M = C^d \mod n
</LatexBlock>

The combination of these 2 formula will be: 

<LatexBlock>
M = M^{e \cdot d} \mod n \newline
\text{Then}  M^{e \cdot d - 1} \equiv 1 (\mod n)
</LatexBlock>

However, this system was incomplete because they still didn't fully understand how <Latex>e</Latex> (the encryption exponent) and <Latex>d</Latex> (the decryption exponent) should relate to each other.

## From Euler to RSA

The breakthrough came with the understanding of Euler's Totient Function <Latex>\phi(n)</Latex>, because it establishes the mathematical foundation for the relationship between the public and private keys.

Well, Euler can be a good solution.

<LatexBlock>
a^{\phi(n)} \equiv 1 (\mod n) \newline
\text{Then} (a^{\phi(n)})^k \equiv 1^k \equiv 1 (\mod n)
</LatexBlock>

Replace the <Latex>a</Latex> with <Latex>M</Latex>

<LatexBlock>
M^{\phi(n)} \equiv 1 (\mod n)\newline
M^{k \cdot \phi(n)} \equiv 1 (\mod n)
</LatexBlock>

Then, combine these 2 formula:

<LatexBlock>
M^{k \cdot \phi(n)} \equiv 1 (\mod n)\newline
M^{e \cdot d - 1} \equiv 1 (\mod n)\newline
\therefore e \cdot d = k \cdot \phi(n) + 1\newline
\text{mod}\phi(n)\text{ in the calculation:} \newline
e \cdot d \equiv 1 (\mod \phi(n))\newline
\therefore d \text{ is the inverse module of} e \newline
\therefore d \equiv e^{-1} (\mod \phi(n)) \, \text{and} gcd(e, \phi(n)) = 1\newline
</LatexBlock>

## RSA Algorithm

RSA makes use of an expression with exponentials. Plaintext is encrypted in blocks with each block having a binary value less than some number <Latex>n</Latex>. 

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L3-001.png)

<drawer issue="Why binary value less than some number n" title="Proof Outline">
<LatexBlock>
\text{Assume} n = 1001_{(2)} \text{1111101001 in binary} \, e = 3 \newline
\text{if} M = 1111110000_{(2)} \, (M > n) \newline
\text{then} M^e \text{will be too large to calculate}
</LatexBlock>
If the binary value of the plaintext block is too large, the encrypted ciphertext may lose its original encryption properties, or the plaintext may not be correctly restored during decryption.
</drawer>

Encryption and decryption are of the following form, for some plaintext block M and ciphertext block C 

<LatexBlock>
C = M^e \mod n \newline
M = C^d \mod n = (M^e)^d \mod n = M^{e \cdot d} \mod n \newline
</LatexBlock>

Both sender and receiver must know the value of <Latex>n</Latex>. But, the sender knows the value of <Latex>e</Latex>, and only the receiver knows the value of <Latex>d</Latex>

<LatexBlock>
PU = \\{e, n\\} \newline
PR = \\{d, n\\}
</LatexBlock>

## The Detail of RSA Algorithm:

### Key generation by Alice

<LatexBlock>
\text{select} p \ \text{and} q \, \text{where} p, q \in \mathbb{P} \, p \neq q \newline
\text{calculate} n = p \times q \newline
\text{calculate} \phi(n) = (p - 1) \cdot (q - 1) \newline
\text{select} e \, \text{where} e \in \mathbb{Z} \, gcd(\phi(n), e) = 1 \, 1 < e < \phi(n) \newline
\text{calculate} d \equiv e^{-1} (\mod \phi(n)) \newline
\text{public key} PU = \[e, n\] \newline
\text{private key} PR = \[d, n\] \newline
</LatexBlock>

### Encryption by Bob with Alice's public key

<LatexBlock>
\text{Plaintext} M < n \newline
\text{Ciphertext} C = M^e \mod n \newline
</LatexBlock>

### Decryption by Alice with Alice's private key

<LatexBlock>
\text{Plaintext} C \newline
\text{Ciphertext} M = C^d \mod n \newline
</LatexBlock>

<drawer issue="Calculate what is the private key" title="Question 1">
Question 1: Use the extended Euclidean algorithm to calculate the private key from public key in the previous slide.

<LatexBlock>
\text{SOLUTION:}\newline
\text{Since} e = 7 \, n = 187 \newline
\text{Thus} n = p \cdot q = 11 \times 17 = 187\newline
\text{Thus} \phi(n) = 10 \times 16 = 160\newline
\text{Extended Euclidean algorithm:} GCD(e, \phi(n)) = GCD(7, 160) \newline
\qquad 160 = 22 \times 7 + 6 \newline
\qquad 7 = 1 \times 6 + 1 \newline
\text{i.e.} 1 = 7 - 1 \times 6\newline
\qquad 1 = 7 - 1 \times (160 - 22 \times 7)\newline
\qquad 1 = 23 \times 7 - 1 \times 160\newline
\qquad 1 \equiv 23 \times 7 (\mod 160)\newline
\text{Therefore} d = 23 \, PR = \[23, 187\] 
</LatexBlock>
</drawer>

<drawer issue="Calculate what is the private key" title="Question 2">
Question 2: In RSA, assume <Latex>p = 7</Latex>, <Latex>q=17</Latex>, <Latex>e = 5</Latex>, <Latex>M = 8</Latex>;
<Latex>n = p \cdot q</Latex>, <Latex>\phi(n) = (p - 1) \cdot (q - 1)</Latex>, <Latex>C = M^e \mod n</Latex>, <Latex>d \cdot e \mod \phi(n) = 1</Latex> What is d?

<LatexBlock>
\text{SOLUTION:}\newline
\text{Since} p = 7 \, q = 17 \newline
\text{Thus} n = p \cdot q = 7 \times 17 = 119\newline
\text{Thus} \phi(n) = 6 \times 16 = 96\newline
\text{Extended Euclidean algorithm:} GCD(e, \phi(n)) = GCD(5, 96) \newline
\qquad 96 = 19 \times 5 + 1 \newline
\text{i.e.} 1 = 1 \times 96 - 19 \times 5\newline
\qquad 1 \equiv (96-19) \times 5 (\mod 96)\newline
\qquad 1 \equiv 77 \times 5 (\mod 96)\newline
\text{Therefore} d = 77
</LatexBlock>
</drawer>

<drawer issue="Calculate C and M" title="Extended Question">
Extended Question: What is <Latex>C</Latex>? and From <Latex>C</Latex>, what the <Latex>M</Latex> suppose to be?
<br>
Obviously, <Latex>C = M^e \mod n</Latex> and <Latex>M = C^d \mod n</Latex>

<LatexBlock>
\text{SOLUTION:}\newline
\text{Since} n = 119 \, M = 8 \, e = 5\newline
\text{Thus} C = M^e \mod n = 8^5 \mod 119 = 43 \newline
\text{Thus} M = C^d \mod n = 43^{77} \mod 119 \newline
\text{Simplify the complex formula:} \newline
\because n = 7 \times 17 \newline

\qquad\begin{cases}
m_1 = 43^{77} \mod 7 = (6 \times 7 + 1)^{77} \mod 7 \, \text{(divide 43 by 7)}  \newline
m_2 = 43^{77} \mod 17 = (17 \times 2 + 9)^{(17-1) \times 4 + 13} \mod 17 \, \text{(divide 43 by 7)} \newline
\end{cases}\newline

\because \text{Fermat's Throrem:} a^{p-1} \equiv 1 (\mod p) \newline
\therefore m_2 = 9^{13} \mod 17 = 8 \newline

\qquad\begin{cases}
m \mod 7 = 1 \newline
m \mod 17 = 8 \newline
\end{cases}\newline
\text{let} m = 17 \cdot x + 8 \newline
\therefore 17 \cdot x + 8 \equiv 1 \mod 7 \newline
\qquad (2 \times 7 + 3) \cdot x + (7 + 1) \equiv 1 \mod 7 \newline
\qquad 3 \cdot x + 1 \equiv 1 \mod 7 \newline
\qquad x \equiv 0 \mod 7 \newline
\therefore x \mod 7 = 0 \newline
\text{if} x = 0 \, x \mod 7 = 0 \newline
\therefore m = 17 \times 0 + 8 = 8 \newline
\therefore \text{formula} \begin{cases}
8 \mod 7 = 1 \newline
8 \mod 17 = 8 \newline
\end{cases} \text{holds}\newline
\therefore M = 8
</LatexBlock>
</drawer>

# Part 3: Diffie-Hellman Algorithm

## The Diffie-Hellman Algorithm

Requires two large numbers, one prime (P), and one primitive root (G) of P, and P and G are both publicly available numbers. (P is at least 512 bits)

Compute shared, private key:

<LatexBlock>
k_a = y^a \mod p \newline
k_b = x^b \mod p 
</LatexBlock>

Algebraically it can be shown that <Latex>k_a = k_b</Latex>. After exchanging, users will have a symmetric secret key for communications.

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L3-002.png)

Example: Alice and Bob get public numbers, known that: <Latex>P = 23</Latex>, <Latex>G = 9</Latex>, <Latex>a = 4</Latex>, and <Latex>b = 3</Latex>.

Alice and Bob compute public values:

<LatexBlock>
X = A = g^a \mod p = 9^4 \mod 23\newline
Y = B = g^b \mod p = 9^3 \mod 23 \newline
\text{i.e.} \begin{cases}
X = 9^4 \mod 23 = 6 \newline
Y = 9^3 \mod 23 = 16 \newline
\end{cases}\newline
</LatexBlock>

Then, Alice and Bob exchange public numbers. Alice and Bob compute symmetric keys by using the public values:

<LatexBlock>
k_a = A = y^a \mod p = 16^4 \mod 23\newline
k_b = B = x^b \mod p = 6^3 \mod 23 \newline
\text{i.e.} k_a = k_b = 9\newline
</LatexBlock>

Finally, Alice and Bob now can talk securely.

# Part 4: Public-Key Cryptography, Requirement, Factorization

# Principles of Public-Key Cryptosystems

The concept of public-key cryptography evolved from an attempt to solve two of the **most difficult problems** associated with symmetric encryption:

**Key distribution**: How to secure communications in genral without having to trust a KDC (Key Distribution Centre) with your key. (The security cannot be promised if KDC has been attacted.)

**Digital signatures**: How to verify that a message comes intact from the claimed sender. 

Whitfield Diffie and Martin Hellman from Stanford University achieved a breakthrough in 1976 by coming up with a method that addressed the key distribution problem. 

**Diffie–Hellman key exchange**: It allows two parties to negotiate a shared key on an insecure network without the need for a trusted third party to distribute the key. The core of this algorithm is to use two large prime numbers and a primitive root. Each party chooses a private random number, and then calculates a public value. After the two parties exchange the public values, they obtain the same shared key through certain calculations.

**RSA algorithm** can address both problems.

## Applications for Public-Key Cryptosystems

Public-key cryptosystems can be classified into three categories:

1. **Encryption/Decryption**: The sender encrypts a message with the recipient's public key
2. **Digital Signature**: The sender "sign" a message with its private key
3. **Key Exchange**: Two sides cooperate to exchange a session key

Some algorithms are suitable for all three applications, whereas others can be used only for one or two

| algorithm      | Encryption/Decryption | Digital Signature | Key Exchange |
| -------------- | --------------------- | ----------------- | ------------ |
| RSA            | Yes                   | Yes               | Yes          |
| Elliptic       | Yes                   | Yes               | Yes          |
| Diffie-Hellman | No                    | No                | Yes          |
| DSS            | No                    | Yes               | No           |

## Public-Key Requirements

Firstly, It is computationally easy to:

1. **generate a pair** (public and private key) for party B
2. **generate the corresponding ciphertext** for sender A when knowing the public key and the message to be encrypted
3. **decrypt the resulting ciphertext** for receiver B using the private key to recover the original message

Secondly, It is computationally impossible to:
1. **determine the private key** for an attacker, when just knowing the public key
2. **recover the original message** for an attacker, when just knowing the public key and a ciphertext

Finally, the two keys can be applied in either order

## Trap-door vs One-way Function

### A one-way function

maps a domain into a range such that every function value has a unique inverse, with the condition that the calculation of the function is easy, whereas the calculation of the inverse is infeasible.

<LatexBlock>
Y=f(X) \qquad \text{easy}\newline
X=f^{-1}(Y) \qquad \text{infeasible}
</LatexBlock>

A hash function, e.g., MD5, SHA256

### A trap-door one-way function

A trap-door one-way function is a family of invertible functions <Latex>f_{k}</Latex> such that:

<LatexBlock>
Y=f_k(X) \qquad \text{easy, if known:} k, X \newline
X=f_k^{-1}(Y) \qquad \text{easy, if known:} k, Y \newline
X=f_k^{-1}(Y) \qquad \text{infeasible, if known:} Y \ \text{but unknown:} k
</LatexBlock>

A practical public-key scheme depends on a **suitable trap-door one-way function**

## Basic Uses of Message Encryption

### (a) Symmetric encryption: confidentiality

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L3-003.png)

### (b) Public-key encryption: confidentiality

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L3-004.png)

### (c) Public-key encryption: authentication and signature

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L3-005.png)

### (d) Public-key encryption: confidentiality, authentication, and signature

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L3-006.png)