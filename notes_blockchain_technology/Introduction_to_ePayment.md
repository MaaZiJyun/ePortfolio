---
title: "Introduction to E-Payment"
abstract: "Lecture 1 covered the evolution of payment systems, starting with Traditional Payments like cash and credit cards. It then explored E-Payments, including online banking and secure Internet Payment Systems with protocols like SET and 3D Secure.The lecture highlighted E-wallets (e.g., Apple Wallet), Mobile Payments through smartphones, and prominent Asian platforms like Alipay and WeChat Pay. It concluded with Cryptocurrency, focusing on Bitcoin and blockchain technology's role in secure, peer-to-peer transactions. Overall, the lecture traced the shift from traditional to modern payment methods, emphasizing their impact on the industry."
date: "2024-09-02"
address: "自習スタジオ"
author:
  name: 童夢綺 Domuki
keywords: ["ePayment", "protocols", "SET", "3D Secure", ]
---

# Payment Fundamentals

## Traditional Payment

Historically, payment methods evolved from bartering and commodity-based systems to the use of commodity standards and eventually cash.

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-001.png)

firstly, people barter to each other, but they changed because it's INCONVENIENT.

Then, people purchase to each other with gold or sliver, but they changed because it's INCONVENIENT.

Again, people purchase to each other with paper notes, but they changed because it's INCONVENIENT.

Same as usual, people purchase to each other with cash, but they're going to change it because it's INCONVENIENT still.

**Shortcomings of tradictional payment are significant**

* Lack of Convenience
* Lack of Security
* Lack of Coverage

## E-Payment

E-payment or Electronic payment is a **financial exchange** that <u>**takes place online**</u> between buyers and sellers. 

Well, the key is <u>"Online"</u>.

There's a system for this way of payment called: **Electronic Payment System (EPS)** which helps the customer or user to make online payment for their shopping.

When we talk about traditional way, there're always shortcomings, but there're always advantages in modern way.

| E-payment                       | T-payment           |
| ------------------------------- | ------------------- |
| Increased sales                 | Lack of Convenience |
| Increased speed and convenience | Lack of Security    |
| Reduced Transaction Costs       | Lack of Coverage    |

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-002.png)

There are 2 types of *Electronic Payment System (EPS)*, **Internet Payment System** and **Mobile Payment System**.

However, they are quite similar. The difference is that the Internet payment system emphasizes payment operations through **web pages** in a **traditional network environment**. While, the mobile payment system emphasizes more convenient and **flexible payment** methods on **mobile devices** through mobile **applications** or other mobile-specific technologies (such as NFC).

# Internet Payment Systems

## Internet Banking

A bank or financial institution can conduct a range of financial **transactions** through the financial institution’s **website**. The security way they used are **OTP (one-time password)** and **USB Key**.

## Credit Card

A plastic card having a magnetic number and code. But it is risky because of operational risk, credit risk and legal risk.

## Secure Electronic Transaction Protocol (SET)

In order to ensure data is secure, to keep e-commerce participant information private and to solve multi-party authentication problems, SET had been created. SET is a system that keeps credit card transactions secure and reliable. It was created by Visa and Mastercard in 1996. 

In SET, there are 5 participents involved: 

* **Cardholder** or customer *(who spends the money)*
* **Issuer** or Customer financial institution *(who controls the money)*
* **Merchant** or seller *(who earns the money)*
* **Acquirer** or Merchant financial institution *(who will gain the money)*
* **Certificate authority** *(who claims that everyone is innocent)*

But it is getting **rare** because of the complexity, high security threshold and slow processing speed.

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-003.png)

SET uses a hierarchy of trust. All parties holds the certificate of "Good Guy" signed directly or indirectly by Certificate authority.

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-004.png)

## Three-Domain Secure Protocol (3D-Secure)

As an alternative solution to the SET protocol, since 2003, which is still popular in nowadays.

In 3D-Secure, there are 3 domains involved: 

* **Acquirer domain** The bank and the merchant being paid
* **Issuer domain** The bank and the cardholder paying
* **Interoperability domain** The system provided by the payment card company (like credit, debit, or prepaid cards) to support the 3-D Secure security protocol.

# Mobile Payment Systems

## E-wallet

The E-wallet is another payment scheme that operates like a **carrier** of credit/bank card and other information, some mobile wallets such as ApplyPay, GooglePay, Alipay and WeChat pay.

Mobile payment systems use a method called **tokenization** to keep card details secure. **Tokenization** is the process of replacing sensitive information, like a credit card number, with a unique code or "token" that can't be used on its own but can be safely used in transactions.

Once the cards added to the app, it generates a **virtual account number** and your real card number is protected. The token itself is just a random code with no direct link to real card number.

* Customer Pays with E-Wallet: When the customer uses their e-wallet to pay, the e-wallet sends a token (instead of the real card number) to the merchant.
* Merchant Sends Token to Bank: The merchant doesn't process the token themselves. They simply pass it along to their payment processor or directly to the bank.
* Bank Verifies Token: The bank checks the token against the e-wallet’s system, which knows how to match the token to the customer’s real card information.
* Approval or Denial: If everything checks out, the bank approves the transaction and sends this approval back to the merchant.
* Transaction Completed: The merchant receives the approval and completes the transaction, all without ever seeing the customer’s real card number.

## Alipay 

### **User-Presented** Mode Payment

In this approach, user (customer) presents their payment information, typically in the form of a QR code, to the merchant.

- The merchant uses a barcode scanner to scan the QR code presented by the customer.
- After scanning, the merchant's system sends a request to Alipay for a payment order.
- Alipay communicates with Alipay+MPP to process the payment.
- Alipay+MPP sends the payment order details back to Alipay.
- Alipay+MPP display the payment result to customer and customer sees the payment result or confirmation in their Alipay app.
- Alipay+MPP sends the payment result back to the merchant for processing and completion.

However, if UPMP is customer-presented, then OCP and ECP should be merchant-presented.

### **Order** Code Payment

In this approach, the payment process is initiated by the merchant, and the customer completes the payment using a code provided by the merchant.

- The merchant initiates a request to Alipay to generate a payment order.
- Alipay generates a QR code for the payment order and sends it back to the merchant.
- The customer uses their app to scan the QR code displayed by the merchant.
- The app processes the QR code to decode the payment information.
- Alipay+MPP, the payment processing platform, requests the details of the order from Alipay.
- Alipay sends the order details back to Alipay+MPP.
- Alipay+MPP displays the order details to the customer for confirmation and payment.
- After the customer confirms and completes the payment, Alipay+MPP sends a payment notification to Alipay.
- Alipay informs the merchant of the payment status or confirmation.

### **Entry** Code Payment

The payment process is initiated by the customer using a code provided by the merchant.

- The user scans the QR code provided by the merchant using their mobile app.
- The user is redirected to a third-party payment page where they enter the payment amount and place the order.
- After the user places the order on the third-party page, the merchant requests an order from Alipay.
- Alipay provides the payment scheme or payment details to the merchant.
- The merchant’s system initiates the payment process by calling up the app cashier to handle the payment.
- The user confirms the payment on the third-party page, which communicates with Alipay+MPP for payment processing.
- Alipay+MPP displays the payment result or confirmation page from the third-party service to the user.
- Alipay+MPP sends a payment notification to Alipay to update the payment status.
- Alipay informs the merchant of the payment status or confirmation.

## WeChat pay

Here's a condensed 5-step flow for WeChat Pay:

![Alt text for the image](/images/_posts/Blockchain_Technology/COMP5521-L1-005.png)

- The customer uses the scanner to scan a QR code generated by WeChat Pay.
- The scanner uploads the QR code data to the store's checkout system.
- The store’s checkout system sends the payment request to WeChat Pay.
- WeChat Pay processes the payment and returns the result (success or failure) to the checkout system.
- WeChat Pay sends a notification of the successful payment via SMS and a WeChat notification to the customer.

## E-payment conclusion and challenges

**Strengths**

- Convenient. Easy to recharge, and suitable for online shopping
- Immediate Transaction
- Avoid the risk of carrying large amounts of cash
- More and more businesses support electronic payment

**Weaknesses**

- Cyber security risks
- Non-anonymous transactions
- Centralized credit-card/bank system
- Increased business costs (compared to cryptocurrency)

**Solutions** BITCOIN LETS GOOOOOO (...)

- Strengthen the supervision of networks and e-payment
- Cryptocurrency based on blockchain

# Cryptocurrency

There's a lot of advantages of cryptocurrency: 

- Fast, safe and cheap
- Ease of use and high portable
- Untraceable
- Decentralized nature
- Transparent and neutral
- Investment tool

Nowadays, there's various different kinds of cryptocurrency in the market. Two of them are significant and popular which are Bitcoin and Ethereum.

Bitcoin offers an alternative to fiat currencies, acting as a decentralized, permissionless currency without government or bank control—often referred to as 'digital gold.' 

Ethereum, on the other hand, is seen as a 'world computer' that runs code (or smart contracts) in a decentralized way.

## Libra - Big dream

The Libra Blockchain is a decentralized, programmable database designed to support a **low-volatility** (refers to a situation where the price or value of a cryptocurrency or digital asset changes very little over time) cryptocurrency. Libra is supposed to have the ability to serve as an efficient medium of exchange for **billions of people** around the world.

(However, it is just a dream.)

