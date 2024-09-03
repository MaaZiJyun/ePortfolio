---
title: "Machine Learning 4: Loss Function"
abstract: ""
date: "2024-08-21"
address: "自習委員会"
author:
  name: 童夢綺
keywords: []
---

# What is Loss Function

A loss function in machine learning is a mathematical function that measures the difference between the predicted output of a model (<Latex>\hat{y}</Latex>) and the actual output (or true label, <Latex>y</Latex>). The purpose of the loss function is to quantify how well or poorly a model is performing by comparing the predicted values against the actual values.

# Types of Loss Functions

There are different types of loss functions used depending on the type of machine learning problem. Mean Squared Error (MSE) will be an example to introduce, which measures the average squared difference between the predicted and actual values. It’s commonly used in regression problems.

<LatexBlock>\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (\hat{y}_i - y_i)^2</LatexBlock>

# Example

Assuming that the previous case of house price prediction will be discussed in detail. The model and cost function are given in the table below. In order to make it more clear and easy to understand, the <Latex>b</Latex> has been assigned to 0. Therefore, function <Latex>f_{w,b}(x) = wx + b</Latex> has become to <Latex>f_{w}(x) = wx</Latex>

| **Name**      | **Content**                                                            |
| :------------ | :--------------------------------------------------------------------- |
| Model         | <Latex>f_{w}(x) = wx</Latex>                                           |
| Parameters    | <Latex>w</Latex>                                                       |
| Cost Function | <Latex>J(w) =  \frac{1}{n} \sum_{i=1}^{n} (f_{w}(x_i) - y_i)^2</Latex> |
| Goal          | <Latex>Minimize J(w)</Latex>                                           |

Assume that there are three known data, which are <Latex>(1, 1)</Latex>, <Latex>(2, 2)</Latex>, and <Latex>(3, 3)</Latex> if expressed in <Latex>(x, y)</Latex>. The input value is on the x-axis and the output value is on the y-axis. Then let <Latex>w</Latex> equals to 0, 0.5 and 1 and do the further calculation (while <Latex>w</Latex> can be any value).

The calculation detail:

<LatexBlock>\because J(w) =  \frac{1}{2n} \sum_{i=1}^{n} (wx_i - y_i)^2, w = 1</LatexBlock>
<LatexBlock>\therefore J(0) =  \frac{1}{6} \sum_{i=1}^{3} (x_i - y_i)^2 =\frac{(1 - 1)^2 + (2 - 2)^2 + (3 - 3)^2}{6} = 0</LatexBlock>
<LatexBlock>J(0.5) =  \frac{1}{6} \sum_{i=1}^{3} (x_i - y_i)^2 =\frac{(0.5 - 1)^2 + (1 - 2)^2 + (1.5 - 3)^2}{6} \approx 0.58</LatexBlock>
<LatexBlock>J(1) =  \frac{1}{6} \sum_{i=1}^{3} (x_i - y_i)^2 =\frac{1^2 + 2^2 + 3^2}{6} \approx 2.3</LatexBlock>

The visualization of calculation result

![Alt text for the image](/images/_posts/Machine_Learning/ml006.png)

**What is other ways to calculate the w, instead of trying with numbers on by one. (Speculation)**

### **Definition of the Loss Function**
Assuming <Latex>b = 0</Latex>, the loss function <Latex>J(w)</Latex> is defined as:

<LatexBlock>
J(w) = \frac{1}{n} \sum_{i=1}^{n} \left( wx_i - y_i \right)^2
</LatexBlock>

where <Latex>n = 3</Latex>, because we have three data points.

### **Substituting Data Points**
Substitute the data points <Latex>(1,1)</Latex>, <Latex>(2,2)</Latex>, and <Latex>(3,3)</Latex> into the loss function:

<LatexBlock>
J(w) = \frac{1}{3} \left[ (w \cdot 1 - 1)^2 + (2w - 2)^2 + (3w - 3)^2 \right]
</LatexBlock>

This can be further simplified to:

<LatexBlock>
J(w) = \frac{1}{3} \left[ (w - 1)^2 + (2w - 2)^2 + (3w - 3)^2 \right]
</LatexBlock>

### **Taking the Derivative with Respect to <Latex>w</Latex>**
Differentiate with respect to <Latex>w</Latex> and set the derivative to zero:

<LatexBlock>
\frac{\partial J(w)}{\partial w} = \frac{2}{3} \left[ (w - 1) \cdot 1 + (2w - 2) \cdot 2 + (3w - 3) \cdot 3 \right] = 0
</LatexBlock>

Expand and simplify:

<LatexBlock>
\frac{\partial J(w)}{\partial w} = \frac{2}{3} \left[ (w - 1) + 4(w - 1) + 9(w - 1) \right] = \frac{2}{3} \times 14 \times (w - 1) = 0
</LatexBlock>

Solving gives:
<Latex>
w = 1
</Latex>

### **Conclusion**
The optimal value of <Latex>w</Latex> is <Latex>1</Latex>, so the ideal regression model (function) is:
<Latex>
f(x) = 1 \cdot x
</Latex>







