---
title: "How to Install Hexo and Solve Problems"
date: "2020-02-12 23:39:27"
categories: "Hexo Study"
address: "自習スタジオ"
author:
  name: 童夢綺
keywords: ['Hexo', 'Markdown']
---

## 1. Prepare Environment

download and install: 

	1. [Node.js](https://nodejs.org/en/)
 	2. [Git](https://git-scm.com/)

> If your computer already has these, congratulations! You can skip to the Hexo installation step.
>
> If not, please follow the following instructions to install all the requirements.

Verify that if the installation is complete:

```
git version
node -v
npm -v
```

<!--more-->

## 2. Create a new file folder

I opened my Data disk and create a new folder which will be used to store the data of my blog.

So, I named it "Blog". Obviously.

Then I open the **cmd** window in this folder and operated follow the conduction of <hexo.io> step by step.

```
$ npm install hexo-cli -g
$ hexo init blog
$ cd blog
$ npm install
$ hexo server
```

you might be meet some problem from that. When I installed this, I found I cannot install...

That's because I didn't  add it all to **PATH** and that made me confused for a long time.



## 3. Add Path

If you ask how to add a path. well, you need open **properties** of your **This PC** then go to the left-up corner click **Advanced system setting** . 

![properties](/images/_posts/Me-Hexo-and-Problems/properties.png)

After that, go to the **Environment Variables** 

![gotoEV](/images/_posts/Me-Hexo-and-Problems/goto.png)

click on the **System Variables** and add Path

![SV](/images/_posts/Me-Hexo-and-Problems/systemvar.png)

![addpath](/images/_posts/Me-Hexo-and-Problems/add.png)





## 4. Hexo Initialization

Once Hexo is installed, run the following commands to initialize Hexo in the **blog** 

```
$ hexo init blog
$ cd blog
$ npm install
```

Finished initialization, here’s what my **blog** folder looks like:

```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes

```

Up to now, the construction of blog was completed. I used command below and searched `  http://localhost:4000`, then I saw the preview effect of my blog:

```
hexo s
```



## 5. Login my Github and create a new repository

I already had a account of Github so I needn't register again.

The only thing I need notice is that the **Repository name** must follow the frame `username.github.io` and **username** must be the same as your real username in Github.

I met a problem here cause I didn't follow this rule. 



## 6. Set SSH Key

I already set it, so I just record some things important here.

 ```
git config --global user.name "username"
git config --global user.email "email"
ssh-keygen -t rsa -C "email"
 ```

press the Enter key 3 times...

```
ssh -T git@github.com
```

Then add the key in your Github setting



## 7. Upload to Github

7.1. Check the link of Repository (SSH or HTTP)

btw, I used SSH.

7.2. Open the file named "_config.yml" in basic folder **blog** and find out *"deploy"* 

```
deploy:
	type: git
	repo:  ....the link of Repository (SSH or HTTP)
	branch: master
```

7.3. install a plugin `hexo-deployer-git` 

```
npm install hexo-deployer-git --save
```

7.4. Upload

```
hexo g -d
```

