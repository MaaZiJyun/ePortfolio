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

<drawer issue="Mining pool decreases the variance?" title="Explaination">
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

## Network Layer 

| Distributed Algorithms      | Concept                                                                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Peer-to-peer networking** | a network of nodes which functions as  clients and servers simultaneously                                                                 |
| **Atomic broadcasting**     | message sent by a node can be delivered to everyone, or none                                                                              |
| **Peer discovery**          | the method for a newly joining node to establish connections with other nodes in the blockchain network                                   |
| **Remote procedure call**   | simplifies distributed computing by allowing developers to write code that calls remote functions the same way they would call local ones |

## Connections with other nodes in the blockchain network

A blockchain can be maintained by nodes all around the world, but how can they keep a consistent ledger?

The answer is: **Consensus protocol (consensus layer)**, A procedure through which all the nodes of the blockchain network reach a common agreement about the present state of the distributed ledger.

**Consensus is crucial to running a blockchain** because it ensures that all participants (nodes) in a decentralized network agree on the state of the blockchain (e.g., transaction history, balances, smart contract states). Since blockchain operates without a central authority, consensus mechanisms allow the network to maintain integrity, security, and trust.

## Application and Presentation Layer

### Smart contracts or Chaincode

"Chaincode" = "smart contract", A self-executing contract with the terms of the agreement between buyer and
seller being directly written into lines of code. Ethereum is the first blockchain system that supports smart contracts.

Smart contract is supposed to be **Turing-complete**. **All computation problems** can be solved (regardless of the complexity).

Bitcoin doesn’t support smart contracts, but uses a scripting system

### Decentralized Applications

An application that can operate autonomously, typically through **the use of smart contracts**, that run **on a decentralized computing**, blockchain or other distributed ledger system.

# Blockchain models

## Why Blockchain Models Matter?

Blockchain models are crucial because they provide a framework for understanding, designing, and proving the correctness of distributed algorithms and protocols used in blockchains. These models help define the requirements and conditions under which blockchains operate and ensure that the systems function properly in decentralized environments. 

- To deign the distributed algorithms and protocols for blockchains (Requirements and Conditions).
- To prove that the designed distributed algorithms and protocols are correct.

## Blockchain Types

Blockchain technology can be categorized into different types based on the level of access control, decentralization, and governance. The main types of blockchains are Permissionless and Permissioned, with the latter having subtypes such as Private, Federated, and Hybrid blockchains. 

### Permissionless Blockchain

Also known as **Public Blockchain**, it is fully decentralized and allows anyone to join, participate, and interact with the network. Public blockchains are primarily used for cryptocurrencies, such as: Bitcoin, Ethereum. 

Advantages: 

- High security
- No regulations
- Full transparency
- Decentralization
- Immutability

Disadvantages:

- Low or limited performance
- High energy consumption

### Private Blockchains

A **private blockchain**, or managed blockchain, is a blockchain controlled by a single stakeholder (organization, company, etc.), whose central authority can determine who can be the blockchain nodes. Example: university can establish a private blockchain to monitor the academic performance.

Advantages:

- Higher performance
- Higher scalability
- Full privacy

Disadvantages:

- Less decentralization
- Less security
- Less trustworthiness

### Federated Blockchains

A **federated blockchain** known as consortium blockchain is a blockchain governed by a group of stakeholders. Examples: Supply chain management, Energy Web Foundation

Different types of blockchains cater to different needs, from completely open and decentralized systems (public blockchain) to private and permissioned systems for enterprises. 

### Hybrid Blockchains

A hybrid blockchain is a blockchain that is controlled by a single stakeholder, but with a level of oversight performed by the public blockchain, which is required to perform certain transaction validations.

### Summary

| **Aspect**             | **Public Blockchain**                                                                                        | **Private Blockchain**                                                                   | **Federated Blockchain**                                                                    | **Hybrid Blockchain**                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Security**           | High security due to decentralization, but can be vulnerable to 51% attacks if mining power is concentrated. | Security depends on a central entity; fewer nodes mean lower resilience against attacks. | Moderately secure; shared control by multiple entities reduces single-point failures.       | Moderate security; balance between public decentralization and private control.        |
| **Regulations**        | Hard to regulate, no central authority; often operates in unregulated environments.                          | Easier to comply with regulations since a central entity controls the network.           | Easier to enforce regulations, as participants agree on standards.                          | Can be customized to meet regulatory requirements, mixing public and private controls. |
| **Transparency**       | Fully transparent; all transactions visible to everyone.                                                     | Limited transparency; only authorized users can see data.                                | Limited transparency; only participants see the data.                                       | Flexible; certain data is public, while sensitive information remains private.         |
| **Governance**         | Decentralized; decisions made by consensus across all participants.                                          | Centralized; governance by the organization or entity running the chain.                 | Semi-decentralized; governance shared by a group of organizations.                          | Partially decentralized; some decisions are public, others controlled centrally.       |
| **Immutability**       | High immutability; difficult to change data once recorded.                                                   | Lower immutability; central entity can modify data if needed.                            | Moderate immutability; changes require participant consensus.                               | Mixed; public data may be immutable, while private data can be altered.                |
| **Performance**        | Low performance due to high decentralization; slower transaction speeds and scalability.                     | High performance; faster transaction speeds and scalability due to fewer participants.   | Better scalability and performance than public blockchains, but slower than private chains. | Moderate performance; balances speed and decentralization.                             |
| **Data Availability**  | Data fully available to the public; anyone can access it.                                                    | Data restricted to authorized participants.                                              | Data available only to participating organizations.                                         | Data availability is flexible, some public, some restricted.                           |
| **Participants**       | Open to anyone; anyone can join and participate.                                                             | Restricted to known entities; usually within a single organization.                      | Restricted to a group of predefined entities or organizations.                              | A mix of open and restricted participation depending on design.                        |
| **Energy Consumption** | High energy consumption (especially with Proof of Work).                                                     | Low energy consumption as consensus mechanisms are more efficient.                       | Moderate energy consumption, as consensus is more efficient than public chains.             | Depends on the specific consensus mechanisms used; generally moderate.                 |

## Synchrony

It is hard or impossible to set limits on the time taken for process execution, message delivery, or clock drift of blockchain nodes. Therefore, time differences are unavoidable.

### Synchronous blockchains

- The time taken to execute each step of a particular process has knownlower and upper bounds
- Each message transmitted over a communication channel is receivedwithin a known bounded time
- Each process has a local clock whose drift rate from the real time has aknown bound

However, Asynchronous blockchains have no bounds onProcess execution speeds, Message transmission delay and Clock drift rates.

### Global Time

Each node has its **own internal clock**, and local processes can use it to obtain the value of the current time.

Even if two processes read their clocks at the same time, their time readings might be different because computer clock drifts from perfect time and their drift rates differ a lot.

Even if the clocks on all the nodes are set to the same time initially, their clocks would eventually vary quite significantly unless corrections are applied.

### Concurrency

In blockchains, we are interested in knowing whether an event at one node **occurred before, after, or concurrently with another event** at other nodes.

## Message Concurrency & Ordering

### FIFO Order

**Same Node Sending**: If messages <Latex>m_1</Latex> and <Latex>m_2</Latex> are sent from the same node, <Latex>m_1</Latex> must be sent before <Latex>m_2</Latex>.

**Delivery Order**: When these messages reach another node, they must be delivered in the same order they were sent. This means that <Latex>m_1</Latex> will be delivered before <Latex>m_2</Latex> at the receiving node.

### Absolute order

**Message Sending from Different Nodes**: they do not have to originate from the same sender/ broadcast resource.

**Timestamping**:Each message is associated with a timestamp (e.g., <Latex>t_1</Latex> for <Latex>m_1</Latex> and <Latex>t_2</Latex> for <Latex>m_2</Latex>). If <Latex>t_1 < t_2</Latex>, it indicates that <Latex>m_1</Latex> was sent before <Latex>m_2</Latex> in the global sense.

**Delivery Order Across All Nodes**: When these messages reach another node, they must be delivered in the same order they were sent. (<Latex>m_1</Latex> before <Latex>m_2</Latex> because <Latex>t_1 < t_2</Latex>)

### Consistent/total order

**No Global Timestamp Required**

**Message Sending from Different Nodes**: they do not have to originate from the same sender/ broadcast resource.

**Consistency Across Nodes**: Total order ensures that <u>all nodes deliver messages in the same sequence</u>. Regardless of when messages are sent or how long they take to arrive, every node must process them in the same order. 

### Causal order

**No Global Timestamp Required**

**Same Node Sequence**: If messages <Latex>m_1</Latex> and <Latex>m_2</Latex> are sent from the same node, <Latex>m_1</Latex> must be sent before <Latex>m_2</Latex>. This maintains the causal relationship where <Latex>m_1</Latex> is a prerequisite for <Latex>m_2</Latex>.

**Different Nodes Sequence**: if <Latex>m_1</Latex> is sent from node <Latex>n_1</Latex> and <Latex>m_2</Latex> is sent from node 
<Latex>n_2</Latex>, <Latex>n_2</Latex> should deliver <Latex>m_1</Latex> before sending <Latex>m_2</Latex> if <Latex>m_2</Latex> causally depends on <Latex>m_1</Latex>.

**Transitivity**: If message <Latex>m_1</Latex> causally affects <Latex>m_2</Latex> (i.e., <Latex>m_1</Latex> happens before <Latex>m_2</Latex>), and <Latex>m_2</Latex> causally affects <Latex>m_3</Latex>, then <Latex>m_1</Latex> must also be delivered before <Latex>m_3</Latex>. This transitive property helps maintain the overall causal relationship across a chain of messages.

**Causal Independence**: If two messages <Latex>m_1</Latex> and <Latex>m_2</Latex> are sent from different nodes and neither causally affects the other, then they can be delivered in any order. This means that causal ordering only applies to messages with direct dependencies.

### Comparison

| **Order**    | **Definition**                                                 | **Scope**        | **Guarantee**                         | Example                                                                                                                                             |
| ------------ | -------------------------------------------------------------- | ---------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FIFO**     | Ensures messages from **one sender** arrive in the order sent  | Per sender/queue | Local order within each sender/queue  | If a node sends m1, m2, m3, they will be received in the **sending order**: 1-2-3                                                                   |
| **Total**    | Ensures **all messages** are seen in the **same global order** | Global           | All processes agree on the same order | If m1, m2, m3 are sent from different nodes, they will be received in the **same order**, such as 1-2-3, 2-1-3 ...                                  |
| **Absolute** | **Strict order** based on **real time**                        | Global           | Events ordered by timestamps          | If m1, m2, m3 are sent from different nodes, they will be received in the **time order** t1-t2-t3 (if t1 < t2 < t3)                                 |
| **Causal**   | Orders events based on **cause-effect** relationships          | Global           | Causally related events are ordered   | satisfy any causal rules:<br> 1. a node broadcast x then y <br> 2. a node delivers x then broadcast y <br> 3. There's a msg z found between x and y |

More Exercise in this [Tutorial One](https://domuki.top/study/blockchain_technology/Cr_COMP5567_Chap_02_Tutorial_One).

## Failure model

Both blockchain nodes and communication channels among the nodes may fail

### Crash Failure

Crash failure means the node halts and remains halted, and other nodes may **NOT** be able to detect the halting state. (you die, but no one knows). 
Fail-stop: the node halts and remains halted, and other nodes may detect the halting state (you die, and others may know).

### Omission Failure

Communication channel produces an omission failure, also known as “dropping messages”, if it does **not transport** a message from a node’s outgoing message buffer **to another** node’s incoming message buffer. It is generally caused by a lack of message buffer space at the sender or receiver or by a network transmission error

| Class of failure | Affects | Description                                                                                                      |
| ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| Fail-stop        | Node    | A node halts and remains halted. Other nodes may detect the node’s halting state                                 |
| Crash            | Node    | A node halts and remains halted. Other nodes may NOT be able to detect the node’s halting state                  |
| Omission         | Channel | A message inserted in a node’s outgoing message buffer never arrives at the other node’s incoming message buffer |
| Send-omission    | Node    | A node completes the sending of a message, but the message is not put in its outgoing message buffer             |
| Receive-omission | Node    | A message is put in a node’s incoming message buffer, but that process does not receive it                       |

### Timing Failure

Timing failures occur only in synchronous systems (blockchains)

| Class of failure    | Affects | Description                                                                     |
| ------------------- | ------- | ------------------------------------------------------------------------------- |
| Clock               | Node    | A node’s local clock exceeds the bounds on its rate of drift from the real time |
| Node Performance    | Node    | A node exceeds the bounds on the interval between two steps                     |
| Channel Performance | Node    | A message’s transmission takes longer than the stated bounded                   |

### Fault Tolerance

The **fault-tolerance** property that enables a system, e.g., a blockchain, to continue operating properly in the event of the failure of some of its components is called fault tolerance
