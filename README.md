# understand-smali
This repo is for the starters in reverse engineering who keeps wondering about everything inside smali.

<a href="https://telegra.ph/Introduction-to-Smali-06-29"> OUR LOVELY RESPECTED Prof. euzada has also written brief introduction to smali</a> 
<a href="https://github.com/AbhiTheModder/understand-smali/blob/main/Introduction%20to%20smali%20by%20euzada%20part%202.md"> Introduction to smali part 2 by Prof. euzada</a>

#### It's my promise after reading this fully you're never going to face any problem's in reverse engineering

# Why this repo?
The starter's always keeps wondering and asking older reverser's about how to recognise right place in smali, how to dig, where to change blah blah and when no-one replies/respond to you = "It hurts very much deep inside" and this is what I faced so I don't want anyone more to face same and that's the reason also why i replies to every people and help everyone without anything in demand ( I know I did some my hails 😜)

And in this full articlee/repo i'll tell every word simple no complexity so that you can understand it.

# Smali vs Java
### The first question when apps were build in java why there is smali in apk/apks?
   - So the answer is quite simple 
   - You know that computer's can't understand our numirical most of values like after 10 it needs to write a,b,c,d..etc to understand which we call hex value,binary numbers  
   - mean cumputer can't understand our nuumber system fully and we can't understand computer's number system unless we learn them we have mind so we can learn computer's things as it was created by us but it's difficult to say computer to learn our number system ( "Hey, computer we not gonna learn your language we're dumb we'll write such a code inside you that you'll understand our language's" --- LoL this will take more time so better learn how computer's behaviour)
   - So, same way we understand java but android needs to convert them to smali to understand it and function properly
#### So, Java = very important for developer's and reverse engineer's 
#### and smali = important for OS and reverse engineer's 🤣

# What is smali
   - The assembly language used by the Android Dalvik Virtual Machine(if try to understand simply it's a compiler for java codes into smali); usually created by decompiling .DEX (Dalvik Executable) files(Bunch of java codes compiled and addded to archive but this archive is not .zip or .7z it's called .dex), which are the executables included in Android apps (.APK files); usually used for low-level inspection of an Android app's contents, or for modding/reverse engineering Android apps.
   -  "Smali" stands for assembler in Icelandic. Iceland has a village named Dalvik from which the Dalvik Virtual machine was named. Similarly, "Baksmali" stands for disassembler. ( Copied from Google 😎)
   -  For example, say you have Java code that does something like

          int x = 56
       the dex code for the method will most likely contain the hexadecimal sequence

          13 00 38 00
       in smali we see the codee like this:
           
          const/16 v0, 38 (Don't worry about const/16 or v0, I'll tell everything)
          
![image](https://i.stack.imgur.com/nEEK5.png)
source Stackoverflow

# What things it contain
   - Everything in it are similar to Java from classes to a sinle function only representation of those things are changed nothing else
   - I'll talk about each and every code don't worry


### Now in this i'll not talk about methods,register's etc. things of smali you should read Prof. euzada introduction and smali grammar/table for that purpose in this repository's wiki page
