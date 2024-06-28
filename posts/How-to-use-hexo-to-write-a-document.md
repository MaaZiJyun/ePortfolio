---
title: "How to use Hexo to write a document"
abstract: "This essay guide introduces using Hexo for document creation: start with hexo new \"doc\" to create files in source/_posts. Markdown formatting via Typora covers headings, formatting, quoting, code blocks, formulas, lists, tables, links, and images. Customize document frameworks and headers, then publish for seamless deployment."
date: "2020-02-12 17:01:47"
categories: "Hexo Study"
address: "自習スタジオ"
author:
  name: 童夢綺
keywords: ['Hexo', 'Markdown']
---

# 1. Creating original file
Open git bash.exe in site file folder, then input the commit below to create a new file named "doc"
``` bash
$ hexo new "doc"
```
the file will be create under the folder *source/_post* named "doc".
this is the original file using to record the content of document which will be shared to the website.

<!--more-->


# 2. Start writing(base on Markdown)

## 2.1. What is Markdown?
> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

## 2.2. Grammar

There's a tool using to edit Markdown must be recommended: **Typora**
simple, but powerful
here's the download website has been wrote down for you: <https://www.typora.io/>.

### 2.2.1. Title

**Markdown Grammar:**

``` bash
#			title 1
##			title 2
###			title 3
####			title 4
#####			title 5
######			title 6
```

**Typora Hot-key:**

Ctrl+1: title 1
Ctrl+2: title 2
Ctrl+3: title 3
Ctrl+4: title 4
Ctrl+5: title 5
Ctrl+6: title 6
Ctrl+0: paragraph

### 2.2.2. Bold, italic, strikethrough, and underline

**Markdown Grammar:**

``` bash
*italic*
**bold**
***bold&italic***
~~strikethrough~~
```

**Typora Hot-key:**

Ctrl+I: Italic
Ctrl+B: Bold
Ctrl+U: Underline
Alt+Shift+5: Strikethrough

### 2.2.3. Quote

**Markdown Grammar:**

``` bash
> word quote
```

**Typora Hot-key:** Ctrl+Shift+Q

### 2.2.4. Code Block

**Markdown Grammar:**

``` bash
`code inside the sentences`
```

~~~bash
```
multi-line
```
~~~

Typora Hot-key:**

Inside: Ctrl+Shift+\`
Multi-line: Ctrl+Shift+K

### 2.2.5. Formula Block

**Markdown Grammar:**

``` bash
$$
math formula
$$
```

**Typora Hot-key:** Ctrl+Shift+M

### 2.2.6. Dividing Line

**Markdown Grammar:**

``` bash
method 1: ---
method 2: +++
method 3: ***
```

### 2.2.7. List

**Markdown Grammar:**

``` bash
1.	An ordered list

*	Unordered list
+
-
```

**Typora Hot-key:**
An ordered list:	Ctrl+Shift+\[
Unordered list:		Ctrl+Shift+\]

### 2.2.8. Form

**Markdown Grammar:**

``` bash
head 1|head 2
-|-|-
cont. 11|cont. 12
cont. 21|cont. 22
```

**Typora Hot-key:** Ctrl+T

### 2.2.9. Link

**Markdown Grammar:**

``` bash
method 1: [word](address "description")
for example: [exampleLink](https://www.example.net/ "Example Link")

method 2: <address>
for example: <https://www.example.net/>
```

**Typora Hot-key:** Ctrl+K

### 2.2.10. Picture

**Markdown Grammar:**

``` bash
![photo text](photo address "description")
for example: ![example photo](https://www.example.net/example.PNG "example photo")
```

**Typora Hot-key:** Ctrl+Shift+I

**Notices: **
1. value of `post_asset_folder` in site folder should be *true*
2. open git bash in site folder, then input the command: `npm install hexo-asset-image --save`
3. It'll create a folder named "doc" as long as you command `hexo new doc` to create a doc. We just need to put image in this folder and call it by Markdown Grammar.

## 3.3. Advanced Setting

### 3.3.1. Frame Setting

When we using `hexo new "doc"` to create file, Hexo will initialize new document according to `/scaffolder/post.md` .
In other words, `/scaffolder/post.md` is the framework of new doc. 

```
title: {{ doc }}
date: {{ date }}
tags: 
categories: 
```

### 3.3.2. Head Setting

```
title: doc
date: YYYY-MM-DD HH:MM:SS
tags: [tag1, tag2, ...]
categories: category
```

### 3.3.3. Homepage Display
The document we wrote is quite long, sometimes. 
However, when using Hexo framework to construct a blog, the homepage will display the content of whole document by default and the page will looks weird.
In this situation, we just put `<!--more-->` in the position where you wanna stop showing on the homepage


# 3. Publish

```
$ hexo g -d
```