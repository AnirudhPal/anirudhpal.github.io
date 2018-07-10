# Welcome to My Classroom

## Index

1. [**Day 1**](#day-1)

    * [*Install AdBlock*](#install-adblock)
    * [*Mouse Activity*](#mouse-activity)
    * [*Keyboard Activity*](#keyboard-activity)
    * [*Log Off / Log In*](#log-off--log-in)
    * [*What is Programming?*](#what-is-programming)

2. [**Day 2**](#day-2)

    * [*Conversational Programming*](#conversational-programming)
    * [*Instructional Programming*](#instructional-programming)
    * [*Binary Programming*](#binary-programming)
    * [*Human Sort*](#human-sort)
    * [*Selection Sort*](#selection-sort)
    * [*Bubble Sort*](#bubble-sort)
    * [*Algorithms, Instruction Sets and More*](#algorithms-instruction-sets-and-more)

3. [**Day 3**](#day-3)

    * [*Install Cmder*](#install-cmder)
    * [*Secure Shell*](#secure-shell)
    * [*Source Control*](#source-control)
    * [*Compile*](#compile)
    * [*Execute*](#execute)

4. [**Day 4**](#day-4)

    * [*Follow Instructions*](#follow-instructions)
    * [*C Hello World*](#c-hello-world)
    * [*Python Hello World*](#python-hello-world)

5. [**Day 5**](#day-4)

    * [*Introductory Word*](#introductory-word)
    * [*Introductory PowerPoint*](#introductory-powerpoint)
    * [*Introductory Excel*](#introductory-excel)
    * [*PowerPoint Activity*](#powerpoint-activity)
    * [*Excel Activity*](#excel-activity)
    * [*Email Activity*](#email-activity)
    * [*Stay Secure on the Internet*](#stay-secure-on-the-internet)

6. [**Day 6**]()

    * [*What is HTML?*](#what-is-html)
    * [*Understanding Tags*](#understanding-tags)
    * [*Nesting Tags*](#nesting-tags)
    * [*Simple Website Tutorial*](#simple-website-tutorial)

7. [**References**](#references)

## Day 1

### Install AdBlock

Open chrome's options menu.

<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/au8Igxpw7dE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

Navigate to *More tools*.

<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/jMBhRl_y6bo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

Click on *Extensions*.

<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/Fc6-NGxawHg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

Click on *Get more Extensions*.

<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/wBTdq_0i_7Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

Search for *ABP*.

<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/PjumpTYmxY0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

Install *AdBlock*.

<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/mCAOPjoP3PE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

### Mouse Activity

Click on Link --> [Mouse Game](https://www.netplay.life/)

Scroll Down

<div class="videoWrapper"></div>

Click on *FULL SCREEN* and play the game.

<div class="videoWrapper"></div>

Keep your scores ready.

<div class="videoWrapper"></div>

### Keyboard Activity

Click on Link --> [Keyboard Game](http://zty.pe/)

Click on *new game*.

<div class="videoWrapper"></div>

Keep your scores ready.

<div class="videoWrapper"></div>

### Log Off / Log In

Click on Start.

<div class="videoWrapper"></div>

Click on *Log Off*.

<div class="videoWrapper"></div>

Follow the Log In Instruction Booklet.

<div class="videoWrapper"></div>

### What is Programming?

Programming is creating a sequence of instructions called a Program to enable the computer to do something. Lets do an activity to better understand this concept.

## Day 2

### Conversational Programming

The students give me *one line* instructions to get me from point A to B.

### Instructional Programming

The students give me *one word* instructions to get me from point A to B.

Instruction Set:

Instruction|Meaning
:-|-:
Forward| Move forward one step.
Backward| Move backward one step.
Right| Turn right by 90 degrees on the spot.
Left| Turn left by 90 degrees on the spot.

### Binary Programming

The students give me *one digit* instructions to get me from point A to B.

Instruction Set:

Instruction|Meaning
:-|-:
0| Move forward one step.
1| Turn right by 90 degrees on the spot.

### Human Sort

Human process instructions in a very complex but efficient manner. We are able to constantly observe change and thus sort ourselves rather quickly. Driving is a example of humans performing a complex task very easily.

<div class="videoWrapper"></div>

### Selection Sort

We pick the a number and keep moving it till we find the right slot.

<div class="videoWrapper"></div>

### Bubble Sort (Easier for Humans)

We compare pairs and swap them if needed.

<div class="videoWrapper"></div>

### Algorithms, Instruction Sets and More

*Instruction Set* is a finite list of very specific operations. *Algorithm* is a precise rule specifying how to solve some problem.

## Day 3

### Install Cmder

Download -> [Cmder](https://github.com/cmderdev/cmder/releases/download/v1.3.6/cmder_mini.zip)

Click on *Show in folder*.

<div class="videoWrapper"></div>

Right Click and then *Extract Here*.

<div class="videoWrapper"></div>

Open Application.

<div class="videoWrapper"></div>

### Secure Shell

> SSH or SecureShell is a application that allows you to remotely accesses other Linux computers. This allows people to share one single computer or work on another computer remotely.

Replace 'X' with user number and enter the command below. NOTE: This will only work in the Computer Labs during the camp!

``` bash
ssh UserX@10.185.1.169
```

Say *yes* if you get a prompt.

Enter password *1234*.

After running this your screen should look similar this.

<div class="videoWrapper"></div>

### Source Control

> GIT is a application that allows exchange of code and is used to log modification to files that are shared among multiple users. We only use it to download source code.

Enter the command below.

``` bash
git clone https://github.com/alexdantas/nSnake.git
```

After running this your screen should look like this.

<div class="videoWrapper"></div>

### Compile

> Code on its own is just a bunch of text. It has to be translated so the machine can understand it. This process of translation is called compiling your code.

Enter the commands below.

``` bash
cd nSnake
make
```

After running this your screen should look like this.

<div class="videoWrapper"></div>

### Execute

> At this point we have the code translated to what a machine can understand. But when does it start reading it? We have to tell it start reading the code and running the application. This process is called execution.

Enter the commands below.

``` bash
cd bin
./nsnake
```

After running this your screen should look like this.

<div class="videoWrapper"></div>

## Day 4

### Follow Instructions

> Please use previous knowledge and this instructional to get to the right setup for this lab session.

Open Cmder

Enter the following commands and remember to replace 'X' with your assigned user number:

``` bash
ssh UserX@10.185.1.169
yes
1234
git clone https://github.com/AnirudhPal/PALS_C_Hello_World.git
cd PALS_C_Hello_World
make
./hello
```

### C Hello World

> A Hello World program is generally the simplest and first program a programmer writes in a new programming language. We are going to write such a program for the programming language C.

Enter the command:

``` bash
vim hello.c
```

Use arrow keys to get to line 7.

Press *i*.

Type *printf("Hello World!!");*

Press *ESC*.

Type *:wq*.

Enter the following commands:

``` bash
make
./hello
```

### Python Hello World

> We will do the same for the programming language Python.

Enter the command:

``` bash
python
```

Type *print("Hello World!!")*.

## Day 5

### Introductory Word

> Microsoft Word is an application used for making text documents with formatting.

Open Word.

<div class="videoWrapper"></div>

Click on *Blank document*.

<div class="videoWrapper"></div>

Type what you want to type.

<div class="videoWrapper"></div>

To save press *CTRL + S*. The select location, give a name and click save.

<div class="videoWrapper"></div>

### Introductory PowerPoint

> Microsoft PowerPoint is a presentation software which can be used for school projects as well as business meetings.

Open PowerPoint.

<div class="videoWrapper"></div>

Click on *Blank presentation*.

<div class="videoWrapper"></div>

Type what you want to type.

<div class="videoWrapper"></div>

This is how you copy a picture.

<div class="videoWrapper"></div>

To save press *CTRL + S*. The select location, give a name and click save.

<div class="videoWrapper"></div>

To start a presentation press *F5* key.

<div class="videoWrapper"></div>

### Introductory Excel

> Microsoft Excel is probably to most powerful yet under-utilized tool from Microsoft Office. It can be used manipulating multiple data points.

Open Excel.

<div class="videoWrapper"></div>

Click on *Blank spreadsheet*.

<div class="videoWrapper"></div>

Type what you want to type.

<div class="videoWrapper"></div>

This is how you add numbers.

```
=SUM(A1:A5)
```

<div class="videoWrapper"></div>

To save press *CTRL + S*. The select location, give a name and click save.

<div class="videoWrapper"></div>

### PowerPoint Activity

> In this activity we will use what we learned in the last class to work on a project. We have to make PowerPoint Presentation that shows us a Top 5's List. The topic is up to you and here is an example to help you out:

<div class="videoWrapper"></div>

<div class="videoWrapper"></div>

### Excel Activity

> Excel do a lot more than add numbers. Here is an example of some of the stuff you can do.

<div class="videoWrapper"></div>

<div class="videoWrapper"></div>

### Email Activity

> Since how your email works depends on the website you use, I will demonstrate how to use email on Gmail.

<div class="videoWrapper"></div>

### Stay Secure on the Internet

> One must be careful using a computer. This is especially important if the computer is not yours. Here are some of the things that can harm you on the net and how to defend against it.

<div class="videoWrapper"></div>

## Day 6

### What is HTML?

### Understanding Tags

### Nesting Tags

### Simple Website Tutorial

## References

1. [NetPlay Mouse Training](https://www.netplay.life/)
2. [Ztype Keyboard Training](http://zty.pe/)
3. [Kids Dictionary](http://dictionary.kids.net.au/)
4. [Wikimedia](https://commons.wikimedia.org/)
5. [Coding Connect](https://www.codingconnect.net/)
6. [Giphy](https://giphy.com/)
7. [nSnake](https://github.com/alexdantas/nSnake)
8. [Cmder](http://cmder.net/)
