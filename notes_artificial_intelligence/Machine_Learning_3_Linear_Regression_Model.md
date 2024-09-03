---
title: "Machine Learning 3: Linear Regression Model"
abstract: ""
date: "2024-08-22"
address: "自習委員会"
author:
  name: 童夢綺
keywords: []
---

# About Regression

In simple terms, it’s like drawing a line through a scatter plot of data points to best represent the overall trend. And from the trend, the data points in future can be approximately predicted.

Same as the example mentioned previously:

e.g. To predict the price of housing in the future
this is an example of supervised learning, because a dataset, the right answer that is the label or the right price on the plots, was provided to algorithm 

# How to represent

This is the diagram to show relationship between model, feature and prediction in use. 

![Alt text for the image](/images/_posts/Machine_Learning/ml005.png)

This is one of the examples of Linear Regression Function:

<LatexBlock>f_{w,b}(x) = wx + b</LatexBlock>

In the example given, it is an *Univariate Linear Regression* (Linear Regression with one variable). <Latex>f_{w,b}(x) = wx + b</Latex> can be written as <Latex>f(x) = wx + b</Latex> and <Latex>\hat{y} = wx + b</Latex>. Actually, <Latex>f(x)</Latex> can be other functions like non-linear function such as curve or a parabola. the reason of using <Latex>f(x) = wx + b</Latex> to represent Linear Regression is that linear function is relatively simple and easy to work with.

In a machine learning model, <Latex>w</Latex> and <Latex>b</Latex> are learned from the data during the training process to minimize the difference between the predicted values <Latex>\hat{y}</Latex> and the actual values <Latex>y</Latex>.

# Between <Latex>\hat{y}</Latex> and <Latex>y</Latex>

The <Latex>y</Latex> is the actual, observed, or true value from the data, while <Latex>\hat{y}</Latex> (pronounced "y-hat") is the value predicted by the model. When <Latex>\hat{y}</Latex> (the predicted value) gets closer and closer to <Latex>y</Latex> (the actual value), it means that the model’s function <Latex>f(x)</Latex> is making more accurate predictions.

In other words, the smaller the difference between <Latex>y</Latex> and <Latex>\hat{y}</Latex>, the better the model is at capturing the true relationship between the input <Latex>x</Latex> and the output <Latex>y</Latex>. This is often what we're aiming for in regression and other predictive modeling tasks—minimizing the difference (or **error**) between the actual outcomes and the predicted ones.

The only things that could be modified to make the prediction more accurate are <Latex>w</Latex> and <Latex>b</Latex>. Changing the <Latex>w</Latex> and <Latex>b</Latex> variables in model to create a better line in order to reduce the error is the purpose.

But the question is that how to define the ERROR, the difference between the actual outcomes and the predicted ones, is getting smaller and smaller? More information will be involved in *Loss Function*.

# Prediction Example

With the help of model, we can use it to make our original prediction. Let's predict the price of a house with 1200 sqft. Assume that the <Latex>x</Latex> is 1.2. 

```python
w = 200                         
b = 100    
x_i = 1.2
cost_1200sqft = w * x_i + b    

print(f"${cost_1200sqft:.0f} thousand dollars")
```