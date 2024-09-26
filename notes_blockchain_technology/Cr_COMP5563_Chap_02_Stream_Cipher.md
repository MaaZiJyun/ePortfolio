---
title: "Cr. COMP5563 Chap. 02: Stream Cipher [undone]"
abstract: ""
date: "2024-09-11"
address: "自習スタジオ"
author:
  name: 童夢綺 Domuki
keywords: ["Distributed Algorithms", "Protocols", "Blockchains", ]
---

# Stream Ciphers and Pseudo Random Generators

## Stream Cipher

making OTP practical

Idea: replace "random" key by "**pseudo random**" key.

Definition: **Pseudo random generator**(PRG) is a function <Latex>G:\\{0,1\\}^s \rightarrow \\{0,1\\}^n</Latex>, where <Latex>n >> s</Latex>.

- <Latex>{0,1}^s</Latex> is the space of seed
- <Latex>G</Latex> should be efficient computable by a deterministic algorithm
- Output should seem **random**

the <u>only random thing</u> is the seed

<LatexBlock>
c = E(k,m) := m \oplus G(k) \newline
D(k,c) := c \oplus G(k)
</LatexBlock>

- Stream Cipher cannot hace perfect secrecy
- Need a different definition of security (Because the length of stream cipher key is usually shorter than plaintext)
- Security will depend on specific PRG

## PRGs Must be Unpredictable

It will be a problem if PRGs are predictable: <Latex>\exists i: G(k)[1, ..., i] \stackrel{ alg. }{\to} G(k)[i+1, ..., n]</Latex>. The formula demostrates that there's a specific algorithm <Latex>\stackrel{ alg. }{\to}</Latex> which can predict the <Latex>G(k)</Latex> value after <Latex>i</Latex> such as <Latex>(i + 1)</Latex>, from the existing set of <Latex>G(k)[1, ..., i]</Latex>.