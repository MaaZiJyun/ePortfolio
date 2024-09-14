---
title: "COMP5567 Tutorial One"
abstract: ""
date: "2024-09-04"
address: "自習スタジオ"
author:
  name: 童夢綺 Domuki
keywords: []
---

# Foreword

Many of the questions do not have unique answers, so students should do their own thinking, and find their own solutions.

# A little bit review

| **Order**    | **Definition**                                                 | **Scope**        | **Guarantee**                         | Example                                                                                                                                             |
| ------------ | -------------------------------------------------------------- | ---------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FIFO**     | Ensures messages from **one sender** arrive in the order sent  | Per sender/queue | Local order within each sender/queue  | If a node sends m1, m2, m3, they will be received in the **sending order**: 1-2-3                                                                   |
| **Total**    | Ensures **all messages** are seen in the **same global order** | Global           | All processes agree on the same order | If m1, m2, m3 are sent from different nodes, they will be received in the **same order**, such as 1-2-3, 2-1-3 ...                                  |
| **Absolute** | **Strict order** based on **real time**                        | Global           | Events ordered by timestamps          | If m1, m2, m3 are sent from different nodes, they will be received in the **time order** t1-t2-t3 (if t1 < t2 < t3)                                 |
| **Causal**   | Orders events based on **cause-effect** relationships          | Global           | Causally related events are ordered   | satisfy any causal rules:<br> 1. a node broadcast x then y <br> 2. a node delivers x then broadcast y <br> 3. There's a msg z found between x and y |

# The inclusion relationship between each order

| **Can Imply?** | **Absolute**                       | **FIFO**                       | **Total**                        | **Causal**                      |
| -------------- | ---------------------------------- | ------------------------------ | -------------------------------- | ------------------------------- |
| **Absolute**   | -                                  | Absolute **can** imply FIFO    | Absolute **can** imply Total     | Absolute **can** imply Causal   |
| **FIFO**       | \* FIFO **cannot** imply Absolute  | -                              | \* FIFO **cannot** imply Total   | \* FIFO **cannot** imply Causal |
| **Total**      | \* Total **cannot** imply Absolute | \* Total **cannot** imply FIFO | -                                | Total **cannot** imply Causal   |
| **Causal**     | Causal **cannot** imply Absolute   | Causal **can** imply FIFO      | \* Causal **cannot** imply Total | -                               |

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-009.png)

# Questions

 In those questions, the conditions statement will be given, and students need to answer the questions by proving the statement, whether is true or false by providing further details to support their answers.

## FIFO order can imply absolute order

From this question, it is saying that a scenario which can satisfy *FIFO order* will satisfy the *absolute order* as well.

***Solution***: FIFO order does not imply Absolute order.

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-010.png)

***Define***: There are 2 nodes, <Latex>P_1</Latex> and <Latex>P_2</Latex>; 

Node <Latex>P_1</Latex> broadcasts a message <Latex>M_1</Latex> at <Latex>t_1</Latex>;

And <Latex>P_2</Latex> broadcasts a message <Latex>M_2</Latex> at <Latex>t_2</Latex>;

In this case, <Latex>M_1</Latex> and <Latex>M_2</Latex> satisfy FIFO order for sure because there is <u>no node broadcasts more than 1 message</u>;

However, the absolute order is not satisfied because <Latex>P_2</Latex> delivers <Latex>M_2</Latex> before <Latex>M_1</Latex> ( <Latex>t_1</Latex> of <Latex>M_1</Latex> is earlier than <Latex>t_2</Latex> of <Latex>M_2</Latex>);

***Therefore***, FIFO order **cannot imply** Absolute order.

## FIFO order can imply total order

From this question, it is saying that a scenario which can satisfy *FIFO order* will satisfy the *total order* as well.

***Solution***: FIFO order does not imply total order.

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-011.png)

***Define***: There are 2 nodes, <Latex>P_1</Latex> and <Latex>P_2</Latex>; 

Node <Latex>P_1</Latex> broadcasts a message <Latex>M_1</Latex>;

And <Latex>P_2</Latex> broadcasts a message <Latex>M_2</Latex>;

In this case, <Latex>M_1</Latex> and <Latex>M_2</Latex> satisfy FIFO order for sure because there is <u>no node broadcasts more than 1 message</u>;

However, the total order is not satisfied, because <Latex>P_1</Latex> delivers <Latex>M_1</Latex> before it delivers <Latex>M_2</Latex>; 

While, <Latex>P_2</Latex> delivers <Latex>M_2</Latex> before it delivers <Latex>M_1</Latex>. (each node delivers in different ordres)

***Therefore***, FIFO order **cannot imply** Absolute order.

## FIFO order can imply causal order

From this question, it is saying that a scenario which can satisfy *FIFO order* will satisfy the *causal order* as well.

***Solution***: FIFO order does not imply causal order.

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-012.png)

***Define***: There are 3 nodes, <Latex>P_1</Latex>, <Latex>P_2</Latex> and <Latex>P_3</Latex>; 

Node <Latex>P_1</Latex> broadcasts a message <Latex>M_1</Latex>;

And after delivers <Latex>M_1</Latex>, <Latex>P_2</Latex> broadcasts a message <Latex>M_2</Latex>;

In this case, <Latex>M_1</Latex> and <Latex>M_2</Latex> satisfy FIFO order for sure because there is <u>no node broadcasts more than 1 message</u>;

However, the causal order is not satisfied, because <Latex>P_3</Latex> delivers <Latex>M_2</Latex> before it delivers <Latex>M_1</Latex>, which breaks the causal order created at <Latex>P_2</Latex>; 

While, <Latex>P_2</Latex> delivers <Latex>M_2</Latex> before it delivers <Latex>M_1</Latex>. (each node delivers in different ordres)

***Therefore***, FIFO order **cannot imply** causal order.

## Total order can imply FIFO order

From this question, it is saying that a scenario which can satisfy *total order* will satisfy the *FIFO order* as well.

***Solution***: Total order does not imply FIFO order.

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-013.png)

***Define***: There are 2 nodes, <Latex>P_1</Latex> and <Latex>P_2</Latex>; 

Node <Latex>P_1</Latex> broadcasts a message <Latex>M_1</Latex> firstly;

And it broadcasts a message <Latex>M_2</Latex> secondly;

In this case, <Latex>M_1</Latex> and <Latex>M_2</Latex> satisfy total order for sure because both <Latex>P_1</Latex> and <Latex>P_2</Latex> deliver <Latex>M_1</Latex> and <Latex>M_2</Latex> on the same order;

However, the FIFO order is not satisfied, because <Latex>P_1</Latex> broadcasts <Latex>M_1</Latex> and <Latex>M_2</Latex> respectively, 

But both 2 nodes deliver in opposite order.

***Therefore***, total order **cannot imply** FIFO order.

## Total order can imply absolute order

From this question, it is saying that a scenario which can satisfy *total order* will satisfy the *absolute order* as well.

***Solution***: FIFO order does not imply causal order. Anyway, the previous case can be reused at here, but the timestamp representing absolute time needs to be added.

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-014.png)

***Define***: There are 2 nodes, <Latex>P_1</Latex> and <Latex>P_2</Latex>; 

Node <Latex>P_1</Latex> broadcasts a message <Latex>M_1</Latex> at <Latex>t_1</Latex>;

And it broadcasts a message <Latex>M_2</Latex> at <Latex>t_2</Latex>;

In this case, <Latex>M_1</Latex> and <Latex>M_2</Latex> satisfy total order for sure because both <Latex>P_1</Latex> and <Latex>P_2</Latex> deliver <Latex>M_1</Latex> and <Latex>M_2</Latex> on the same order;

However, the absolute order is not satisfied, because <Latex>P_2</Latex> and <Latex>P_1</Latex> delivers <Latex>M_2</Latex> before <Latex>M_1</Latex> ( <Latex>t_1</Latex> of <Latex>M_1</Latex> is earlier than <Latex>t_2</Latex> of <Latex>M_2</Latex>), 

***Therefore***, total order **cannot imply** absolute order.

## Causal order can imply total order

From this question, it is saying that a scenario which can satisfy *causal order* will satisfy the *total order* as well.

***Solution***: FIFO causal does not imply total order. Anyway, the previous case can be reused as here.

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-011.png)

***Define***: There are 2 nodes, <Latex>P_1</Latex> and <Latex>P_2</Latex>; 

Node <Latex>P_1</Latex> broadcasts a message <Latex>M_1</Latex>;

And <Latex>P_2</Latex> broadcasts a message <Latex>M_2</Latex> which is not depended on <Latex>M_1</Latex>;

Since in Causal order, if two messages have no causal relationship (i.e., neither caused the other), then the order in which processes deliver the messages can differ. 

Therefore, both order as M1-M2 and M2-M1 are valid under Causal order as <Latex>M_1</Latex> and <Latex>M_2</Latex> are causally independent.

However, the total order is not satisfied, because all messages are not delivered in the same order on all nodes.

***Therefore***, causal order **cannot imply** total order.

# Others

Later it will be uploaded if it is needed.