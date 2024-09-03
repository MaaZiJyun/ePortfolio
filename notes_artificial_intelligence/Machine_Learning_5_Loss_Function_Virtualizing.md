---
title: "Machine Learning 5: Virtualizing of Loss Function"
abstract: ""
date: "2024-08-21"
address: "自習委員会"
author:
  name: 童夢綺
keywords: []
---

Now, back to the origial model, <Latex>b</Latex> will not be simplified but be a variable in cost function. 

| **Name**      | **Content**                                                                 |
| :------------ | :-------------------------------------------------------------------------- |
| Model         | <Latex>f_{w}(x) = wx + b</Latex>                                            |
| Parameters    | <Latex>w, b</Latex>                                                         |
| Cost Function | <Latex>J(w,b) =  \frac{1}{2n} \sum_{i=1}^{n} (f_{w,b}(x_i) - y_i)^2</Latex> |
| Goal          | <Latex>Minimize J(w,b)</Latex>                                              |

In previous example, the loss function can be represented by *Rectangular coordinate system* because there is only one variable <Latex>w</Latex>. Now the situation is getting more complicated because there are 2 variables, <Latex>w</Latex> and <Latex>b</Latex>. In this case, virtualizing it requires "3D coordinate system". The figure of the loss function will probably be like a bowl. And the three axes are <Latex>J(w,b)</Latex>, <Latex>w</Latex> and <Latex>b</Latex>.