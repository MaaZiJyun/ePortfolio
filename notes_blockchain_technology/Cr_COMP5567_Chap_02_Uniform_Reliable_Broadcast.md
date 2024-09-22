---
title: "Cr. COMP5567 Chap. 02: Uniform Reliable Broadcast"
abstract: ""
date: "2024-09-06"
address: "自習スタジオ"
author:
  name: 童夢綺 Domuki
keywords: ["broadcast", "send", "receive", "deliver" ]
---

# 2 operations

## Broadcast

Broadcasting refers to the process of **sharing** a transaction or block with **all nodes in network**. When a node broadcasts a transaction or a block, it sends this data to all its neighboring nodes, which in turn forward it to other nodes, and so on. The goal is to propagate the data across the **entire network**.

like you are speaking in the public, and your voice are floating in the speech hall. (the hall is the protocal)

## Deliver

Delivering refer to the final step in which a transaction or block **reaches its destination** in the network, either in terms of confirming a transaction or sharing data across nodes.

like you are listen to the voice floating in the speech hall. (the hall is the protocal)

# Broadcast in Blockchain Systems

In Blockchain Systems, **message broadcast** is essential. 

A straightforward implementation of broadcast(m) at node p[i].

```
for each j ∈ {1, 2, …, n} do
	send m to pj
end for
```

## Best-effort broadcast in NOT Good

**What if the invoking node (pi) crashes during the for-loop operation?**

- An arbitrary subset of nodes will receive the message m
- You can hardly tell which nodes will receive the message m while which will not when you invoke broadcast(m)

Target: implement the **message broadcast and delivery operations** which provides node with certain **message delivery guarantees** in the presence of **crash failures**

# URB Properties

| Properties      | Definition                                                                                      | key                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Validity**    | If a node URB-delivers a message m from node pi, then m has been previously URB-broadcast by pi | if <Latex>p_i \leftarrow m</Latex>, <br> then <Latex>\exists p_0 \rightarrow m</Latex> previously                                                                                           |
| **Integrity**   | A node URB-delivers a message m at most once                                                    | <Latex>p_i \leftarrow m</Latex> only once                                                                                                                                                   |
| **Reliability** | If a non-faulty node URB-broadcasts a message m, then it URB-delivers the message m             | if <Latex>p_{non-faulty} \rightarrow m</Latex>, <br> then <Latex> p_{non-faulty} \leftarrow m</Latex>                                                                                       |
| **Uniformity**  | If a node URB-delivers a message m, then each non-faulty node URB-delivers the message m        | Let <Latex>N_{\text{non-faulty}}</Latex> be the set of non-faulty nodes<br> if <Latex>p_{i} \rightarrow m</Latex> <br> then <Latex>\forall p \in N_{\text{non-faulty}} \leftarrow m</Latex> |

# URB Protocol

(Question: Why node pi send m to itself instead put itself in the broadcast list and sent together?)

```
Initialization at each node: pi.MJ ← Ø
When node pi invokes URB-broadcast(m):
  send message m to pi itself
When node pi receives message m from node pj:
  if m ∉ pi.MJ then
    pi.MJ ← pi.MJ ∪ {m}
    for each k ∈ {1, 2, …, n} \ {i, j} do
      send message m to node pk
    end for
    URB-deliver(m)
  end if
```

## Key Idea

Simple strategy works: first send out then URB-deliver

Variable MJ (message judger) to judge whether each message is received for the first time

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-017.png)

p3 URB-broadcast m3; sends m3 to p3

p3 URB-broadcast m4; sends m4 to p3

p3 receives m4 from p3 (can m4 be received before m3?)

p3 sends m4 to p1, p2, p4

p3 crashes (no longer URB-delivers m4 or receives m3)

p1 receives m4 from p3; sends m4 to p2, p4

p1 URB-delivers m4

p2 receives m4 from p3; sends m4 to p1, p4

p2 URB-delivers m4

## Validity Proof

The rule of Validity is that: If a node URB-delivers a message <Latex>m</Latex> from node <Latex>p_i</Latex>, then <Latex>m</Latex> has been previously URB-broadcast by <Latex>p_i</Latex>

Since: Every message <Latex>m</Latex> is unique

Statement 1: If node <Latex>p_i</Latex> has not URB-broadcast its unique message <Latex>m</Latex>, no node could URB-deliver <Latex>m</Latex>

Proposition Statement 1’s contraposition holds, so URB-Validity holds.

## Integrity Proof

The rule of Integrity is that: A node URB-delivers a message <Latex>m</Latex> at most once.

Simply, according to the code, there's **only one chance** for a node to URB-deliver the message, or it **will not deliver any message** if it crashed before the code in line 10. Therefore, the URB-Integrity holds.

## Reliability Proof

The rule of Reliability is that: If a non-faulty node URB-broadcasts a message <Latex>m</Latex>, then it URB-delivers the message <Latex>m</Latex>.

If it is a non-faulty node, which means that it will run all the lines of code from top to bottom. Firstly, there's no doubt that the code of line 3 will be run to send message to itself. Secondly, after all the processes in for loop have been completed, the code of line 10 will be run as well surely to URB-delivers the message.

Therefore, the URB-Reliability holds.

## Uniformity Proof

The rule of Uniformity is that: If a node URB-delivers a message <Latex>m</Latex>, then each non-faulty node URB-delivers the message <Latex>m</Latex>.

Assume that there are some nodes, and if they are non-faulty nodes, which means that all of them will run all the lines of code from top to bottom. 

Additionally, if a node URB-delivers a message, then that node must go through all the processes before URB-delivers code which is the URB-broadcast to all nodes on the list.

In this case, because those nodes are non-faulty nodes, all of them must receive the message, and then URB-broadcast and finaly URB-delivers the message.

Therefore, the URB-Uniformity holds.

(Question: why the proof process has to be written as this complicated? when the truth or evidence is so clear?)

## A wonderful combination

**Uniform reliable broadcast (URB)**

- Considers each message individually
- It’s a one-shot broadcast abstraction

But if combine URB and Message Delivery Order together, it will become **a multi-shot broadcast abstraction** which can consider **all** messages **delivered in particular order**

Example of FIFO-URB, What a mess!!

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5567-L2-002.png)

But it is still recognizable as <Latex>m_{11}</Latex>, <Latex>m_{12}</Latex> and <Latex>m_{13}</Latex> broadcasted by node <Latex>p_{1}</Latex> as well as <Latex>m_{41}</Latex> and <Latex>m_{42}</Latex> broadcasted by node <Latex>p_{4}</Latex> are following the rule of FIFO order.

As it mentioned, crashed nodes are just like died people, which **you can speak** to them but **they'll never listen** because they died. (other nodes can broadcast and send message to crashed nodes but crashed nodes cannot delivery any message)

# URB in FIFO

URB properties are remained because FIFO-URB is built based on URB (I know right).

Original rule: If a node URB-delivers a message <Latex>m</Latex> from node <Latex>p_i</Latex>, then <Latex>m</Latex> has been previously URB-broadcast by <Latex>p_i</Latex>

Fixed rule (We only need to consider FIFO message delivery): if a node FIFO-broadcast <Latex>m</Latex> and later FIFO-broadcast <Latex>m'</Latex>, then no node FIFO-delivers <Latex>m'</Latex> unless it has previously FIFO-delivered <Latex>m</Latex>.

In brief: FIFO message delivery is a direct consequence of using the sequence numbers

## FIFO-URB Fundamental Properties

To satisfy the FIFO order, Messages FIFO-broadcast by each node (separately) should be FIFO-delivered according to their FIFO-broadcast order, and FIFO-URB imposes no constraint on the message FIFO-broadcast by distinct nodes. 

(Question: The problem is that the situation which some of FIFO-broadcasted message arrives (delivers) earlier than others is not under the control; therefore, there have to be a way of managing the deliver order to be stable.)

To solve this, each message is attached with a sequence number. when a node URB-delivers a message, it checks if the sequence number attached to the message matches the expected sequence number. **If yes**, it **FIFO-delivers** the message and then checks the message buffer for any other messages with the correct sequence number. **If** the sequence number **doesn't match**, the message is **put into the message buffer.** 

## FIFO-URB Protocol (Cont.)

```
When node pi URB-delivers message m:
let i ￩ m.sender_index
if p[i].next_msg_sequence_num = m.sequence_num then
  FIFO-deliver(m)
  p[i].next_msg_sequence_num += 1
  while ∃m' ∈ msg_in_buffer: i' ￩ m'.sender_index and p[i'].next_msg_sequence_num = m'.sequence_num do
    FIFO-deliver(m’)
    p[i'].next_msg_sequence_num += 1
    msg_in_buffer ￩ msg_in_buffer \ {m’}
  end while
else
  msg_in_buffer ￩ msg_in_buffer ∪ {m}
 end if
```

Use variable <Latex>i</Latex> to contain the index of sender node <Latex>p_{i}</Latex> who URB-delivers "this message" <Latex>m</Latex>.

Then verify whether the sequence num of next message in node with index <Latex>i</Latex> equals to the sequence number of "this message" <Latex>m</Latex> or not.

If it is not, "this message" <Latex>m</Latex> will be put in message buffer and wait for further check in future rounds.

If it is, the process will:

Firstly, FIFO-deliver "this message" <Latex>m</Latex>.

Secondly, increase 1 to the sequence num of next message in node  <Latex>p_{i}</Latex>. 

And then, it will go through a while loop for check the "old" messages <Latex>m'</Latex> in message buffer, if there's any **sequence number of "old" message** sent by node <Latex>p_{i'}</Latex> matchs the **sequence num of next message** in node with index <Latex>i'</Latex>. 

In the loop, it will FIFO-deliver message <Latex>m'</Latex>, and then increase 1 to the sequence num of next message in node  <Latex>p_{i'}</Latex>, and finally remove the message <Latex>m'</Latex> from message buffer and end the loop.

## FIFO-URB Correctness Proof

Assume for contradiction:

m and m’ are two messages FIFO-broadcast in order by node pi, so m.sequence_num < m’.sequence_num

Assume pj FIFO-delivers m’ without FIFO-delivering m first. When node pj FIFO-delivers m’, p[i].next_msg_sequence_num in pj = m’.sequence_num

When node pj FIFO-delivers m’, pj has not FIFO-delivered m yet; So p[i].next_msg_sequence_num in pj < m.sequence_num because p[i].next_msg_sequence_num is increasing from 1 and has never reached m'.sequence_num before it reached m.sequence_num.

Hence, the assumption can never be true, and the FIFO message delivery property is respected.