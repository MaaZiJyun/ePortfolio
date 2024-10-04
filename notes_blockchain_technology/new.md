---
title: "latex"
abstract: "Lecture 1 in DISTRIBUTED LEDGER TECHNOLOGY, CRYPTOCURRENCY AND E-PAYMENT covered the evolution of payment systems, starting with Traditional Payments like cash and credit cards. It then explored E-Payments, including online banking and secure Internet Payment Systems with protocols like SET and 3D Secure.The lecture highlighted E-wallets (e.g., Apple Wallet), Mobile Payments through smartphones, and prominent Asian platforms like Alipay and WeChat Pay. It concluded with Cryptocurrency, focusing on Bitcoin and blockchain technology's role in secure, peer-to-peer transactions. Overall, the lecture traced the shift from traditional to modern payment methods, emphasizing their impact on the industry."
date: "2024-09-02"
address: "自習スタジオ"
author:
  name: 童夢綺 Domuki
keywords: ["ePayment", "protocols", "SET", "3D Secure", ]
---
<LatexBlock>
& \text{From the definition of "perfect secrecy":} \newline \\
&\forall m_0, m_1 \in M, \ len(m_0)  = len(m_1) ;\newline 
&\forall c \in C: Pr[E(k, m_0) = c] = Pr[E(k, m_1) = c]\newline 
&\text{if} \ len(m_0) \neq len(m_1), \newline 
&\text{the definition will not be satisfied anymore.}\newline 
&\text{Proof:}\newline 
&\text{let} \ len(m_0) = l_0, \  len(m_1) = l_1, \ and l_0 < l_1; \newline 
&\left\{\begin{matrix}
&\text{for}  \ m_0, \ c_0 = k[1,2,...,l_0] 
&\\ \text{for}  \ m_1, \ c_1 = k[1,2,...,l_1]
&\end{matrix}\right. \newline 
&\therefore \left\{\begin{matrix}Pr[E(k, m_0) = c] = \frac{1}{2^{l_0}} \\ Pr[E(k, m_1) = c] = \frac{1}{2^{l_1}}\end&{matrix}\right. \newline 
&\therefore Pr[E(k, m_0) = c] \neq Pr[E(k, m_1) = c]\newline 
&\therefore \text{it is clear that "perfect secrecy" will not be hold if} \  len(m_0)  = len(m_1) \ \text{has been removed.} 
</LatexBlock>

\begin{align*}
&\text{Proof:}\newline \\
&\text{To assume an attack that:}\newline \\
& \text{let} 
\left\{\begin{matrix}
m_0 = \text{"aaaa"}, \text{(a plaintext with 4 same letters)}
\\
m_1 = \text{"abcd"}, \text{(a plaintext with 4 different letters)}
\end{matrix}\right. \newline \\
&\text{After the encryption, suppose that} \ c = "mnop" \newline \\
&\text{Analysis: }\\\\
&\text{There is a clear permutation relationship of one-to-one in} \ m_1 = "abcd" \text{that:}\\
&\text{The characters a, b, c, and d correspond one-to-one with the characters m, n, o, and p.} ;\\
&\text{However, there is no such permutation k that can map letter "a" to "m", "n","o" and "p"} \\\\
&\therefore Pr[E(k,m_0) = c] = 0, \text{which means impossible};  Pr[E(k,m_1) = c] \neq 0\\
&\therefore Pr[E(k,m_0) = c] \neq Pr[E(k,m_1) = c]
\end{align*}


\begin{align*}
&\because \text{For one-time pad, it always satisfies} \ |c| = |m| ;\\
&
\begin{cases}
m_0 = c_0 = l_0\\
m_1 = c_1 = l_1
\end{cases} \\
&\therefore \text{Adversary can directly guess which message was encrypted}\\
&\text{based on their different length }(l_1 \ \text{and} \ l_0 )  \\
&\text{if}\ |c| = len(m_0) \neq len(m_1), \text{then:}\\
&\therefore \begin{cases}
Pr[W_0] = 1\\
Pr[W_1] = 0
\end{cases} \\
&\therefore Adv_{ss}[A, E] = |Pr[W_0] - Pr[W_1]| = |1-0| = 1
\end{align*}

\begin{align*}
&\text{Evaluation of} \ E_1:\\\\
&\text{The attacker chooses two different plaintexts:} \ m_0, m_1\\
&\text{The encryption algorithm will select} \ m_0 \ \text{or} \ m_1 \ \text{randomly} (b \in \{0,1\}) \\
&\therefore c = E_1(k,m_b) = E(k,m_b)|| E(k,m_b)\\
&\text{The attacker discovers that the ciphertext consists of 2 identical encrypted blocks} \\
&\text{The attacker is more likely to distinguish the plaintext by comparing repeated encrypted blocks }\\
& Adv_{ss}[A, E_1] \approx  1\\\\
&\text{Evaluation of} \ E_4:\\\\
&\text{The attacker chooses two different plaintexts:} \ m_0, m_1\\
&\text{The encryption algorithm will select} \ m_0 \ \text{or} \ m_1 \ \text{randomly} (b \in \{0,1\}) \\
&\therefore c = E_4(k,m_b) = parity(m)|| E(k,m_b)\\
&\text{The attacker will receive the ciphertext with parity bits} \\
&\text{Let} 
\begin{cases}
m_0 = 0100\\m_1 = 0111
\end{cases}, \text{then after encryption} \  
\begin{cases}
c_0 = 0||E(k,0100)\\c_1 = 1||E(k,0111)
\end{cases}\\
&\because \text{The attacker can distinguish by checking the parity bits in the ciphertext} \\
&\therefore \text{It is not semantically safe and:} \ Adv_{ss}[A, E_1] \approx  1\\\\
\end{align*}


\begin{align*}
&\text{Solution:}\\\\
&\text{When plaintext is: }m=0^{64}  \\
&\text{Initial Stage: } L_0 = 0^{32},R_0 = 0^{32}\\
&\text{After first round of Feistel:}\\
&\begin{cases}
L_1 = R_0 = 0^{32}\\
R_1 = L_0\oplus F(k_1,R_0) = 0^{32}\oplus F(k_1,0^{32}) = F(k_1,0^{32})
\end{cases}\\
&\text{After second round of Feistel:}\\
&\begin{cases}
L_2 = R_1 = F(k_1,0^{32})\\
R_2 = L_1\oplus F(k_2,R_1) = 0^{32}\oplus F(k_2,F(k_1,0^{32})) = F(k_2,F(k_1,0^{32}))
\end{cases}\\
&\text{The final result is: }F_2(k, 0^{64}) = (F(k_1,0^{32}),F(k_2,F(k_1,0^{32})))\\\\

&\text{When plaintext is: }1^{32}||m=0^{32}\\
&\text{Initial Stage: } L_0 = 1^{32},R_0 = 0^{32}\\
&\text{After first round of Feistel:}\\
&\begin{cases}
L_1 = R_0 = 0^{32}\\
R_1 = L_0\oplus F(k_1,R_0) = 1^{32}\oplus F(k_1,0^{32})
\end{cases}\\
&\text{After second round of Feistel:}\\
&\begin{cases}
L_2 = R_1 = 1^{32}\oplus F(k_1,0^{32})\\
R_2 = L_1\oplus F(k_2,R_1) = 0^{32}\oplus F(k_2,1^{32}\oplus F(k_1,0^{32}))
\end{cases}\\
&\text{The final result is: }F_2(k, 1^{32}||0^{32}) = (1^{32}\oplus F(k_1,0^{32}),0^{32}\oplus F(k_2,1^{32}\oplus F(k_1,0^{32})))\\\\
&\text{Calculation: }\\
&F_2(k,0^{64}) \oplus F_2(k, 1^{32} || 0^{32})\\
&\begin{cases}
L: L_2(0^{64})\oplus L_2(1^{32}||0^{32}) = F(k_1,0^{32})\oplus (1^{32}\oplus F(k_1,0^{32})) = 1^{32}\\
R: R_2(0^{64})\oplus R_2(1^{32}||0^{32}) = F(k_2,F(k_1,0^{32}))\oplus F(k2, 1^{32} \oplus F(k_1, 0^{32}))
\end{cases}\\\\
&\therefore \text{The XOR result of the left half is fixed } 1^{32} \text{, which independent of the key. }\\
&\text{This pattern will reduce the secure of the encryption, and provide information to the attacker.}  \\
&\therefore \text{The two round Feistel is insecure.} 
\end{align*}