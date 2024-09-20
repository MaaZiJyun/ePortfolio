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

However, this system was incomplete because they still didn't fully understand how <Latex>e</Latex> (the encryption exponent) and <Latex>d</Latex> (the decryption exponent) should relate to each other.

## From Euler to RSA

The breakthrough came with the understanding of Euler's Totient Function <Latex>\phi(n)</Latex>, because it establishes the mathematical foundation for the relationship between the public and private keys.

