---
title: "高斯过程回归的简单应用"
abstract: ""
date: "2024-12-28"
address: "自習委員会"
author:
  name: 童夢綺
keywords: []
---

高斯过程回归（Gaussian Process Regression, GPR）是一种统计学方法，用于分析和预测数据。它特别适合处理小样本数据，并且能够提供预测的不确定性（即预测值的置信区间）。它的核心思想是通过一种概率分布（高斯过程），为未知的函数建模，而不是直接拟合一个特定的函数形式。

传统方法（如线性回归或多项式回归）：通常直接拟合一个特定的函数形式，比如直线：

<LatexBlock>f(x) = ax + b</LatexBlock>

或多项式，来描述数据的关系。例如：

<LatexBlock>f(x) = ax^2 + bx + c</LatexBlock>


高斯过程不是直接给出一个确定的函数，相反，它认为“这个函数可能是这样的，也可能是那样的”，并用概率的方式来描述这些可能性。它假设数据的背后存在一个未知的函数 <Latex>f(x)</Latex> ，并通过概率分布来描述这个函数的可能性。

在高斯分布中，我们可以描述一个随机变量<Latex>x</Latex>的分布：<Latex>x \sim \mathcal{N}(\mu, \sigma^2)</Latex>，其中<Latex>\mu</Latex>是均值，<Latex>\sigma^2</Latex>是方差。

描述的一个函数<Latex>f(x)</Latex>的分布：<Latex>f(x) \sim \mathcal{GP}(m(x), k(x, x'))</Latex>。<Latex>m(x)</Latex>是均值函数<Latex>k(x, x')</Latex>是协方差函数（也叫核函数）。

