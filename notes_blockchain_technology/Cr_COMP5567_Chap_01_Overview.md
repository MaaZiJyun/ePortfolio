---
title: "Cr. COMP5567 Chap. 01: Overview [undone]"
abstract: ""
date: "2024-09-06"
address: "自習スタジオ"
author:
  name: 童夢綺 Domuki
keywords: ["Distributed Algorithms", "Protocols", "Blockchains", ]
---

# Definition of Blockchain

## Bitcoin and Cryptocurrencies

When talking about blockchain technology, Bitcoin and Cryptocurrencies are always the topic that will never be absent. Since it is the most famous application of blockchain technology in the world so far.

In 2008, Bitcoin was create and launched by Satoshi Nakamoto. And after that, more and more people joined the crowd. More and more different types of cryptocurrenies were launched, such as Ethereum for smart contract, Monero for annonymous and FileCoin for storage.

## Evolution of Blockchain Technology

**Blockchain 1.0 (2008)**: Crptocurrencies, such as Bitcoin and Litecoin

**Blockchain 2.0 (2014)**: Smart Contract and DApp, e.g., Ethereum

**Blockchain 3.0 (2016)**: Enterprise customization, Hyperledger Fabric

Blockchain 4.0? and Web 3.0?

## What is Blockchain

Wikipedia: a type of Digital Ledger Technology (DLT) that consists of growing list of records, called blocks, that are securely linked together using cryptography.

Oxford dictionary: a system in which a record of transactions made in bitcoin or another cryptocurrency are maintained across several computers that are linked in a peer-to-peer network.

Simple Definition: A blockchain is like a <u>digital notebook that keeps track of things</u>, but once you write something in it, you can’t change it. Imagine it as a **long chain of boxes**, where each box holds information. Each **new box** gets **added to the end of the chain**, and **everyone** who **uses the chain** **can see** what’s inside the boxes, making it very safe and hard to cheat.

## Distributed Ledger

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-008.png)

| **Centralized Ledger**                                                 | **Distributed Ledger**                                     |
| :--------------------------------------------------------------------- | :--------------------------------------------------------- |
| Only “Central Institution” maintains the ledger                                       | Every nodes maintain the ledger                            |
| Each individual can have a part of the ledgers (related to itself)         | Every nodes have the full ledger                           |
| All the individuals are requesting and sending transactions from/to “Bank” | All the nodes make consensus and validate the transactions |

# Blockchain layered structure

> **Somebody said that there are 6 layers in blockchain structure, but someone said it should be 5. which one is correct?**
>
> Both models make trade-offs based on the intended depth of analysis and research focus, and neither is absolutely right or wrong. The choice depends on the specific domain and application scenario.
>
> The 6-layer architecture focuses more on detailed, independent analysis of specific functional modules within the blockchain, making it ideal for deeper research, optimization, and innovation.
>
> The 5-layer architecture emphasizes simplicity and comprehensibility, suitable for more macro-level analysis and early-stage application development.

# Blockchain models