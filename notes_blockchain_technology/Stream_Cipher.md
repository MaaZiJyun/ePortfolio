---
title: "Stream Cipher"
abstract: "Lecture 2 in Distributed Algorithms and Protocols for Blockchains"
date: "2024-09-11"
address: "自習スタジオ"
author:
  name: 童夢綺 Domuki
keywords: ["Distributed Algorithms", "Protocols", "Blockchains", ]
---

# Stream Cipher

making OTP practical

Idea: replace "random" key by "pseudo random" key.

Definition: Pseudo random generator(PRG) is a function G:{0,1}^s -> {0,1}^n, where n >> s

- {0,1}^s is the space of seed
- G should be efficient computable
- Output should seem random

the only random thing is the seed

<LatexBlock>
c = E(k,m) := m \oplus G(k) \newline
D(k,c) := c \oplus G(k)
</LatexBlock>

> Stream Cipher cannot hace perfect secrecy
> 
> Need a different definition of security
> 
> Security will depend on specific PRG