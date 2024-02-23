<p align="center">
<a href="https://github.com/AbhiTheModder"><img title="GitHub" src="https://img.shields.io/badge/Abhi-TheModder-brightgreen?style=for-the-badge&logo=github"></a>
<a href="https://www.youtube.com/channel/UCtBILuQgvXHPfvOUdcmMS2Q"><img title="YouTube" src="https://img.shields.io/badge/YouTube-Abhi The MØÐÐĒR-red?style=for-the-badge&logo=Youtube"></a>
</p>

<p align="center">
<a href="https://t.me/joinchat/xP-wW-A5mIBmMjY1"><img title="Telegram" src="https://img.shields.io/badge/Telegram-black?style=for-the-badge&logo=Telegram"></a>

# understand-smali
This repo is for the beginners in reverse engineering who keep wondering about everything inside smali.

<a href="https://telegra.ph/Introduction-to-Smali-06-29"> OUR LOVELY RESPECTED Prof. euzada has also written a brief introduction to smali</a> 

<a href="https://github.com/AbhiTheModder/understand-smali/blob/main/Introduction%20to%20smali%20by%20euzada%20part%202.md"> Introduction to smali part 2 by Prof. euzada</a>

#### It's my promise after reading this fully, you're never going to face any problems in reverse engineering :)

# Why this repo?
The beginners always keep wondering and asking old reversers about how to recognize right place in smali, how to dig, where to change blah blah and when no-one replies/respond to you = "It hurts very much deep inside" and this is what I have faced, so I don't want anyone else to face same and that's the reason also why I reply to everybody and help everyone without anything in demand (I know I did some of my hails 😜) but we have to remember that older reversers have their real life too...

And in this full article/repo I'll tell every word in the most simple way so that you can understand it.

# Smali vs Java
### The first question when apps were build in java, why there is smali in APK/APKs?
   - So the answer is quite simple 
   - You know that computers can't understand most of our numerical values, like after 10 it needs to write a, b, c, d, …etc. to understand which we call hex value, binary numbers  
   - It means computer can't understand our number system fully, and we can't understand computer's number system unless we learn it. We have mind so we can learn computer's things as it was created by us, but it's difficult to say computer to learn our number system ("Hey computer, we're not going to learn your language. We're dumb, we'll write such a code inside you that you'll understand our languages" --- LOL this will take more time so better learn about computer's behaviour :)
   - So, we can understand java, but android needs to convert them to smali to understand it and function properly.
#### So, Java = very important for developer's and reverse engineers 
#### and smali = important for OS and reverse engineers 🤣

# What is smali
   - The assembly language used by the Android Dalvik Virtual Machine (if try to understand simply it's a compiler for java codes into smali); usually created by decompiling .DEX (Dalvik Executable) files (Bunch of java codes compiled and added to archive, but this archive is not .zip or .7z it's called .dex), which are the executables included in Android apps (.APK files); usually used for low-level inspection of an Android app's contents, or for modding/reverse engineering Android apps.
   -  "Smali" stands for assembler in Icelandic. Iceland has a village named Dalvik from which the Dalvik Virtual machine was named. Similarly, "Baksmali" stands for disassembler. (Copied from Google 😎)
   -  For example, say you have Java code that does something like

          int x = 56
       the dex code for the method will most likely contain the hexadecimal sequence

          13 00 38 00
       in smali we see the code like this:
           
          const/16 v0, 38 (Don't worry about const/16 or v0, I'll tell everything)
          
![image](https://i.stack.imgur.com/nEEK5.png)
[source: Stack Overflow]

# What things it contains
   - Everything in it are similar to Java from classes to functions, only representation of those things are changed nothing else.
   - I'll talk about each and every code don't worry.


### Example
   Since everybody takes example of "Hello World!" in programming field, I'm going to take also
   
   The code in Java :
                  
                  class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
    }
  The code in smali:
  
        .class public LHelloWorld;
        .super Ljava/lang/Object;

    .method public static main([Ljava/lang/String;)V
    .registers 2

    sget-object v0, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const-string	v1, "Hello World!"

    invoke-virtual {v0, v1}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    return-void
     .end method
Now let's understand it :
   - In the Java code and smali the first line you can understand yourself that it is initiating the class name, the only difference is that in Java we can simply write class HelloWorld{your codes} but in smali for writing we have to put capital "L" before class name.
   - The next line in smali:
        [Ljava.lang.Object; is the name for Object[].class  and .super doing function like calling/storing of it.

   - The next line is initiating method, which is like our nerves which transfers the data to our brain that what's inside it and that's the thing which the user want's to perform. Then the brain does the work according to it. Similarly method contains the code which the user wants to perform. 
   - The public word after `.method` is like the open-source programs that we can overwrite. If there was private word then we need to modify it, like we get premium apps/softwares illegally (Modding/Cracking).
   - The next line after public calling string function means that we want to display some strings to the user. 
   - The `)V` which we're seeing is used to return types in smali for understanding types in smali you can go to <a href="https://github.com/AbhiTheModder/understand-smali/wiki">This repo wiki page</a>.
