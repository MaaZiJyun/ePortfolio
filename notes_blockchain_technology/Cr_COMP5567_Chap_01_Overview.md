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

| **Centralized Ledger**                                                     | **Distributed Ledger**                                     |
| :------------------------------------------------------------------------- | :--------------------------------------------------------- |
| Only “Central Institution” maintains the ledger                            | Every nodes maintain the ledger                            |
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

## Hardware and Infrastructure Layer

This layer contains the **specific hardware and infrastructure** for blockchain systems. (All computing technology need supports from hardware)

However, Traditional hardware is **not efficient** for blockchain systems.
- a large number of hashing computation is needed
- Proof of capacity requires a large volume of hard drive

**Specialized hardware** for blockchain systems (What blockchain really needs)
- CPU: several kh/s
- GPU: several mh/s
- Specialized ASIC chips: more than 2400+ mh/s

**Mining pool (infrastructure) vs. individual miners**
- A single miner is **very unlikely** to mine a block (single is weak)
- Multiple miners form a mining pool and the rewards are distributed to the miners based on their shares of mining rates
- The expected rewards are similar (or the same), but forming a mining pool **decreases the variance**

<drawer title="Mining pool decreases the variance?">
When you mine alone, you receive rewards **only if** you find a block. However, the probability is very low due to the high competition and difficulty. High Variance here means that the payout is very inconsistent and unpredictable, **whether the reward will be large or zero**. (You could go for long periods without finding any blocks, meaning you earn nothing for a long time, followed by a large reward if you're successful)

But when you mine by mining pool, it is much more likely to find blocks regularly due to the combined computational power, miners **receive more frequent rewards although it is a little**. However, the variance or the uncertainty in the miner's income is reduced by this regular payout.
</drawer>

## Data Layer

UTXO-based and account-based transaction models：

Account-based: public and private key pair for each account

- The public key is like your account number; other people can send cryptocurrencies to this account
- The private key is like your password; you can use it to sign the transaction (sending cryptocurrencies to others)  

UTXO-based (unspent transaction output)

- A user has multiple UTXO accounts (each with a public and private key pair)
- A transaction consists of multiple UTXOs as input and multiple other UTXOs as output
- The input UTXOs of a transaction will be invalid once the transaction is confirmed


# Blockchain models
