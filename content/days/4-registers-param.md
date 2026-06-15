{
   "title": "Registers [param]",
   "weight": 4
}

# Registers [param]

**NOTE:**

- **`non-static methods`** are also called **`instance methods`**.
- As we've already discussed a bit about param registers on Day 3 of local registers we'll be just continuing it with a more bit, yeah cheeseburger. Let's start lol. 😂
- Oh I forgot, it's WCC time so let's go with cricket as an example.
- This page has been my labor of love. I've wiped the slate clean, rewritten everything from scratch countless times, and scoured the internet for articles to get it just right. Fingers crossed that you enjoy it! 😊

Imagine you're the captain of a cricket team, and your players are the registers. Now, let's play a match in the Android stadium!

**The Team Line-up:** In Smali, which is like the playbook for Android's Dalvik Virtual Machine (DVM), we have a special team of players called registers. These registers are like your cricket players, each with a unique role. Some are batsmen (local registers `v0`, `v1`, `v2`,...), some are bowlers (parameter registers `p0`, `p1`, `p2`,...), and one is the wicket keeper (the special register ret for return values).

**The Match Strategy:** When you're about to bowl (invoke a method), you need to decide which players (registers) will handle the ball (method parameters). The parameter registers (`p0`, `p1`, `p2`,...) are your frontline bowlers. They're the ones who receive the ball first and pass it on to the batsmen (local registers) to score runs (process the data).

**Opening Bowlers:** The `p` registers are like your opening bowlers. They're the first to get into action. In a non-static method, `p0` is the captain of the team (the `this` reference in Java), always leading from the front. For static methods, `p1` takes the lead as the first parameter register.

**The Bowling Action:** Just like in cricket, where you have to bowl according to the rules, in Smali, you have to follow it's calling convention. This means you set your bowlers (`p` registers) in the right order before delivering the ball (invoking the method). If you're bowling a long or double delivery (64-bit values), you need two bowlers (registers) working in tandem to handle it.

**Fielding Adjustments:** Sometimes, in the middle of the game, you realize you need an extra fielder (register). In Smali, this is like needing an extra register while editing code. You can't just add a player without changing the field setting (renumbering the registers). But, if you've used the `p` naming scheme, it's like having versatile players who can adapt to any position on the field without confusion.

**The Winning Shot:** In the end, it's all about scoring runs (returning values). The special wicket keeper register (`ret`) is there to catch the ball (value) and make the winning run (return the result).

**Post-Match Analysis:** After the game, you want to review the match footage (decompile the code). Tools like baksmali help you separate the players (registers) into locals and parameters, making it easier to analyze their performance.

**Conclusion:** Understanding parameter registers in Smali is like knowing your cricket team inside out. It helps you play a better game (write and debug Android apps) and makes you a champion in the Android league!

- **Handling 'this' Type Registers**: In DVM, for every instance (non-static) method, the first parameter is a reference to the method's object, known as the `this` reference. It is stored in the `p0` register for instance methods. This allows methods to access their own fields and other instance-specific data.
- **Is p0 Special?**: The `p0` register is not inherently special; it's simply a convention used to refer to the first parameter register, which holds the `this` reference for instance (non-static) methods. `p0` can be repurposed within the code, indicating flexibility in its use.
- **Parameter Registers Description and Function**: Parameter registers in Smali, denoted by `p0`, `p1`, `p2`, etc., are used to store method parameters. For instance methods, `p0` holds the object reference, and for static methods, `p1` becomes the first parameter register. These registers are crucial for passing arguments to methods and are stored in the last registers of the method's register set.
- **Crucial Use Case and Benefits**: The introduction of the `p` naming scheme for parameter registers was to address the inconvenience of renumbering registers when editing Smali code. If additional registers are needed, using the `p` naming scheme allows for easy adjustment of the total number of registers without renumbering existing ones. This simplifies code modifications and enhances readability by visually distinguishing between local and argument registers.

**Handling values for registers**

Well, by far at this point you would've understood some points, like:

- Registers can have any type value
- Registers are always of 32-bits in dalvik-bytecode
  **So, How do we handle values like Long(l) and Double(J) in Smali, as we know they have 64-bits, right?**  
  Yes, exactly what you're thinking right now, just by using **two registers** for the value.

There's a very good explanation both in text and video on this, you can find it here:

- [Video explanation](https://t.me/TDOhex_Discussion/21844)
- [Text explanation](https://t.me/TDOhex_Discussion/21971)
  Make sure to focus on the part where Long value for DateTime is being manipulated in the video that's the main point.  
  ![QNA](/images/555562113ab157dac645a.jpg)