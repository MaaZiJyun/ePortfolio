---
title: "Introduction and OTP"
abstract: "Lecture 1 in APPLIED CRYPTOGRAPHY FOR FINANCIAL APPLICATIONS "
date: "2024-09-04"
address: "自習スタジオ"
author:
  name: 童夢綺 Domuki
keywords: ["cryptography", "OTP", "symmetric cipher", ]
---

# Overview

Cryptography is **everywhere**, especially in Fintech. Fintech, a compound of "financial technology", refers to the application of innovative technologies to financial industry. There are so many general applications about Cryptography: **Generate secret keys** (e.g., Pseudo random generator.), **secure communication** (e.g., HTTPS for websites), **user authentication** (e.g., certificate for verifying users’ identities) and **cryptocurrency** (e.g., Building blocks). 

Those four applications are just examples. In fact, there are much much more applications about the technology of cryptography, like securing digital identities, protecting privacy, and ensuring trust. There are some more specific applications or use cases of cryptography.

## Secure Communication

In secure communication, cryptography works by ensuring that data sent between two parties is kept private, authentic, and intact. This is done using encryption, authentication, and integrity-checking mechanisms. 

What is TLS? SSL/TLS (Transport Layer Security) is a **cryptographic protocol** designed to provide secure communication over a network. It is widely used to secure data transmitted over the internet, such as in web browsing, email, instant messaging, and other forms of communication. For example, <u>HTTPS Secures web traffic by using TLS to encrypt HTTP traffic</u>.

TLS (Transport Layer Security) is primarily organized into **two main phases**:

### Handshake Protocol

The Handshake Protocol is responsible for **establishing** a **secure connection** (create a connection) between the client and server using public-key cryptography. (will be talked about later)

### Record layer

The Record Layer is responsible for the **secure transmission** of data after the handshake is complete by using shared secret key.

> ***Is TLS Phases only included Handshake Protocol and Record Layer?***
> 
> Yes, TLS (Transport Layer Security) is primarily organized into two main phases: Handshake Protocol and Record Layer.

## Protected Files on Disk

When storing data onn disk, it's basically the person who stores the file today and will read the file tomorrow. Rather than communicating between 2 parties, in the case of a stored disk encryption, it's the person today who communicates the himself tomorrow. However, the 2 scenarios, secure communications and secure files are kind of the same philosophically.

## Building Blocks: Symmetric Encryption

Building blocks for securing traffic is what's called symmetric encryption systems. (details will be talked about later)Basically, In a symmetric encryption system, 2 parties <Latex>A</Latex> and <Latex>B</Latex> share secret key, which only they know and the attacters do not know. 

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-006.png)

<Latex>E</Latex> is Encrption Cipher, and <Latex>D</Latex> is Decryption Cipher, which can be considered as functions at here. The encryption algorithm takes the message and the key as the inputs of the function to generate the corresponding ciphertext <Latex>c</Latex>. And And the description does the opposite. Actually, all factors in the diagram like <Latex>E</Latex>, <Latex>D</Latex> are known in the public. The only thing that's kept secret is the secret key <Latex>k</Latex>.

## Use Cases

Single use key (one-time key): Key is only used to encrypt one message. (a new key is generated for every email)

Multi use key (many-time key): Key is used to encrypt multiple messages. (a same key is used to encrypt many files) It needs more machinery than for one-time key.

## Things to remember

Cryptography is a tremendous tool for protecting information from computer, and it is the basis of many security mechanisms. However, there are still a lot of things which cryptography cannot do. The solution it provided is not for all security problems. For example, the bugs in the program and social engineering. Additionally, the cryptography will be useless if the way being implemented is not proper.

# What is Cryptography

Cryptography is like a secure language that transforms your message (plaintext) into a secret code (ciphertext)  and then back again, so only the people who know the secret code can understand it. It’s used to protect information from being read by anyone who shouldn’t have access to it.

**Example:**

- **Secret key establishment**: During Secret Key Establishment, cryptography is used (mainly through public key methods) to agree on a shared key.
- **Secure communication**: In the Secure Communication phase, symmetric encryption with the established key ensures that all exchanged data is encrypted and secure.
- **Digital signatures**: You "sign" the message using a special private key that only you have. Others can check your signature using your public key (which anyone can have). If everything matches, it means the message is authentic.
- **Anonymous communication**: When the sender creates a message, they encrypt it using the recipient’s public key. This way, only the recipient, who holds the matching private key, can decrypt the message.

> ***If transactions are anonymous, how does the system determine the intended recipient and the sender? How does it ensure that the transactions are connected successfully?***
>
> Anonymity in digital systems does not mean the identity is completely absent; rather, it means the identity is protected and obscured. 
> 
> Anonymity relies on using cryptographic methods such as public and private keys. While public keys are visible, they don't reveal personal identities.
> 
> If someone could obtain or decrypt additional information linked to the public key (for example, through other means or vulnerabilities), they might potentially uncover the real-world identity behind that key.

### Double Spending Issue

The double-spending issue is a problem in digital currencies where someone tries to spend the same coin or money twice. With physical money, you can't do this because once you give away a dollar bill, you no longer have it. But with digital money, if there’s no proper system in place, someone could try to send the same digital coin to two people at once.

### Why it happens

In the digital world, **data can be copied**. And, there’s a time window before the network fully confirms a transaction, and in that period, someone could try to exploit this gap.

Alice sends the Bitcoin to Bob:

- She broadcasts a transaction to the Bitcoin network, sending 1 Bitcoin to Bob.
- The network starts the process of confirming this transaction, but it takes time (usually several minutes and often requires 6 confirmations to be fully secure).

Before the transaction is confirmed, Alice sends the same Bitcoin to Charlie:

- Alice quickly creates a second transaction, sending the same 1 Bitcoin to Charlie.
- This second transaction is also broadcast to the network, and now both transactions (to Bob and to Charlie) are floating around.

If Charlie doesn’t wait for confirmations:

- If Charlie doesn’t know the importance of waiting for the transaction to be confirmed, he might trust the initial broadcast of the transaction without realizing it hasn't been officially added to the blockchain yet.
- In other words, Charlie might think, “Alice sent me 1 Bitcoin, I see it in the system,” and accept it, even though the transaction hasn’t been verified.

Charlie accepts the payment:

- Charlie accepts the transaction without waiting for confirmations, believing the Bitcoin has been sent. But since both transactions (to Bob and Charlie) are competing, only one will be confirmed.

> ***According to the statement, "If the transaction to Bob is confirmed first, then Charlie’s transaction will be rejected by the network because Alice has already spent the Bitcoin with Bob." So, why is there a double spending problem? Can't the network just decide who gets paid first? Even if someone confirms a transaction before it's officially added to the blockchain, the blockchain will eventually detect the issue. So why does double spending remain a concern?***
>
> Yes, the blockchain eventually resolves the conflict by confirming only one transaction, but the double-spending problem occurs **before that resolution**, when two parties (Bob and Charlie) both think they might receive the same Bitcoin. The blockchain prevents long-term double-spending, but without waiting for confirmations, there’s **a short-term risk** of being cheated.

## Zero-knowledge proof

Zero-knowledge proof is a cryptographic method that allows one party (the prover) to prove to another party (the verifier) that they know a specific piece of information or that a statement is true, without revealing the actual information itself. 

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-007.png)

# History of Cryptography

## Symmetric Ciphers

Symmetric ciphers use the same **key** for **both encryption and decryption**. The security of these ciphers depends on keeping the key secret.

**Example:**

Plaintext: HELLO

Key: 3 (Shift each letter by 3 positions)

**Encryption Process** (Caesar Cipher):

- H shifts to K
- E shifts to H
- L shifts to O
- L shifts to O
- O shifts to R

**Ciphertext**: KHOOR

**Decryption Process**: To decrypt, shift each letter back by 3 positions to retrieve the original plaintext.

## Substitution Cipher - A bad cipher

A substitution cipher **replaces** each **letter** in the plaintext **with another letter** from the alphabet. The substitution is consistent throughout the message. 𝑘 indicates a mapping. Caesar cipher (no key): shift by 3.

**Example**:

Plaintext: HELLO

Substitution Key: A->M, B->N, C->O, ..., L->X, M->Y, N->Z, O->A, ..., Z->L

**Encryption Process**:

- H becomes T
- E becomes R
- L becomes X
- L becomes X
- O becomes A

**Ciphertext**: TRXXA

**Decryption Process**: Reverse the substitution using the key to recover the original message.

## Vigenère Cipher

The Vigenère cipher is a polyalphabetic substitution cipher that uses a keyword to shift each letter in the plaintext. The keyword repeats to match the length of the plaintext.

**Example**:

**Plaintext**: ATTACKATDAWN

**Keyword**: LEMON

**Encryption Process**:

Repeat the keyword: LEMONLEMONLE

Align with plaintext and shift each letter:

- A (shift by L, which is 11) becomes L
- T (shift by E, which is 4) becomes X
- T (shift by M, which is 12) becomes F

Continue for the rest of the plaintext.

**Ciphertext**: LXFOPVEFRNHR

**Decryption Process**: Reverse the shifts using the keyword to recover the original message.

## Rotor Machines

Rotor machines, such as the Enigma machine, use rotating wheels or rotors to encrypt messages. Each rotor has a different substitution alphabet and changes with each keystroke, adding complexity to the encryption.

**Example (Enigma Machine)**:

**Plaintext**: HELLO

**Rotor Settings**: Rotors and plugboard settings create complex substitutions.

**Encryption Process**:

The machine scrambles each letter of the plaintext using the rotor settings and plugboard configurations.

For instance, 'H' might be encrypted to 'W', 'E' to 'K', etc., through multiple substitution layers as the rotors advance.
Ciphertext: (Complex, based on rotor settings and plugboard configurations.)

**Decryption Process**: The machine must be set to the original rotor and plugboard settings to decrypt the message, reversing the complex substitutions.

# One-time Pad (OTP)

## Symmetric Cipher Definition

Definition. A cipher defined over (𝒦, ℳ, 𝒞) is a pair of “efficient” algorithms
𝐸, 𝐷 , where 𝐸: 𝒦 × ℳ → 𝒞 and 𝐷: 𝒦 × 𝒞 → ℳ,

<LatexBlock>s. \ t. \ \forall m \in \mathcal{M}, \ k \in \mathcal{K} : D(k,E(k,m)) = m.</LatexBlock>

- **Encryption Function** (<Latex>E</Latex>): This function takes a plaintext message (<Latex>m</Latex>) and a key (<Latex>k</Latex>), and produces a ciphertext.
- **Decryption Function** (<Latex>D</Latex>): This function takes the ciphertext and the same key (<Latex>k</Latex>), and produces the original plaintext message (<Latex>m</Latex>).
- **Symmetric Key**: The same key <Latex>k</Latex> is used for both encryption and decryption.
- **Mathematical Expression**: The expression <Latex>D(k,c) = m</Latex> shows that if you encrypt a message <Latex>m</Latex> using the key <Latex>k</Latex> to get the ciphertext <Latex>c = E(k,m)</Latex>, then decrypting that ciphertext with the same key <Latex>k</Latex> will return the original message <Latex>m = D(k,c) = D(k,E(k,m))</Latex>.

## Vernam Cipher

The first example of a "secure" cipher is the **Vernam Cipher**, invented by Gilbert Vernam in 1917. The Vernam Cipher is considered a significant milestone in the history of cryptography because it **introduced** the **concept** of the **one-time pad**, which is theoretically proven to be unbreakable under certain conditions.

<LatexBlock>\mathcal{M} = \mathcal{C} = \{0, 1\}^n</LatexBlock>
<LatexBlock>\mathcal{K} = \{0, 1\}^n</LatexBlock>

* Each key is <Latex>n</Latex> bits long. For example, if <Latex>n = 8</Latex>, each key is an 8-bit string (e.g., 00011010).

Vernam's cipher uses a **key** that is **as long as the message** itself. This key, or "pad," is used only once, hence the name "one-time pad." The key must be completely random, kept secret, and never reused.

## Information Theoretic Security

**Basic idea**: ciphertext should reveal no “information” about the plaintext.

**Definition**. A cipher <Latex>(\mathcal{E}, \mathcal{D})</Latex> over <Latex>(\mathcal{K}, \mathcal{M}, \mathcal{C})</Latex> has perfect secrecy if

<LatexBlock>\forall m_0, m_1 \in \mathcal{M}, \ \text{len} (m_0) = \text{len} (m_1) ; \ \forall c \in \mathcal{C} :</LatexBlock>

<LatexBlock>\Pr[E(k, m_0) = c] = \Pr[E(k, m_1) = c]</LatexBlock>

<LatexBlock>\text{where} \ k \ \text{is uniform in} \ \mathcal{K} \ (\text{i.e.,} \ k \leftarrow \mathcal{K}).</LatexBlock>

- **Equal Probability for All Messages**: For any two messages <Latex>m_0</Latex> and <Latex>m_1</Latex> of the same length (in the message space <Latex>M</Latex>), and for any ciphertext <Latex>c</Latex> in the ciphertext space <Latex>C</Latex>, the probability that <Latex>m_0</Latex> encrypts to <Latex>c</Latex> is equal to the probability that <Latex>m_1</Latex> encrypts to <Latex>c</Latex>.
- **Key Uniformity**: The key <Latex>k</Latex> is uniformly distributed in the key space <Latex>K</Latex>. This means each key is equally likely to be chosen.

> **Why the probability that 𝑚0  encrypts to 𝑐 should be equal to the probability that 𝑚1 encrypts to 𝑐? What happens if the probabilities are different?**
> 
> Let’s say Alice encrypts "HELLO" and "WORLD" **several times** using a **weak encryption scheme**. An attacker records the > ciphertexts:
> 
> 10 encryptions of "HELLO" produce "XYZ" 9 times (90%).
> 
> 10 encryptions of "WORLD" produce "XYZ" only once (10%).
> 
> After observing this many times, the attacker starts to realize that "XYZ" is far more likely to be the encryption of "HELLO" than "WORLD."
> 
> The attacker doesn’t know the 90% chance upfront but <u>learns it through repeated observation, analyzing patterns, or exploiting weaknesses in the encryption process</u>. Once they have gathered enough data, they can guess that whenever they see the ciphertext "XYZ", it’s most likely from "HELLO" because that’s what happens most of the time. **But If the probabilities are the same, the attacker won't be able to find out which message was encrypted, even if they intercept the ciphertext multiple times.**

## OTP Security - A good cipher

**Lemma.** OTP has **perfect secrecy**.

**Bad news**: perfect security => key leangth >= message length

**Proof:**

<LatexBlock>\forall m, c: \Pr[E(k, m) = c] = \frac{ \\text{\\#} k \text{ s.t. } E(k, m) = c}{|\mathcal{K}|}</LatexBlock>

- <Latex>\Pr[E(k, m) = c]</Latex>: This denotes the probability that encrypting the message <Latex>m</Latex> with a key <Latex>k</Latex> results in the ciphertext <Latex>c</Latex> .
- <Latex>\\text{\\#} k \text{ s.t. } E(k, m) = c</Latex>: This counts the number of keys <Latex>k</Latex> that produce the ciphertext <Latex>c</Latex> when encrypting the message <Latex>m</Latex>.
- <Latex>|\mathcal{K}|</Latex>: This represents the total number of possible keys in the key space <Latex>\mathcal{K}</Latex>.

As <Latex>|\mathcal{K}|</Latex> is fixed, and <Latex>\forall m, c \\#\{k \in \mathcal{K}:E(k, m) = c\}</Latex> is a constant. 

And <Latex>\\#\{k \in \mathcal{K}:E(k, m) = c\} = 1</Latex> in OTP.

**Theorem.** Perfect secrecy is <Latex>|\mathcal{K}| \geq |\mathcal{M}|</Latex>.