<p align="center">
<a href="https://github.com/AbhiTheModder"><img title="GitHub" src="https://img.shields.io/badge/Abhi-TheModder-brightgreen?style=for-the-badge&logo=github"></a>
<a href="https://www.youtube.com/channel/UCtBILuQgvXHPfvOUdcmMS2Q"><img title="YouTube" src="https://img.shields.io/badge/YouTube-Abhi The MØÐÐĒR-red?style=for-the-badge&logo=Youtube"></a>
</p>

<p align="center">
<a href="https://t.me/joinchat/xP-wW-A5mIBmMjY1"><img title="Telegram" src="https://img.shields.io/badge/Telegram-black?style=for-the-badge&logo=Telegram"></a>
<a href="https://t.me/Mods_byAbhi_demandbot"><img title="Telegram Bot" src="https://img.shields.io/badge/Telegram-bot-black?style=for-the-badge&logo=Telegram_bot"></a></p>

### Continuing Day 01

_So I left some things on DAY 01 because I don't want you to forget the things and that's why I left in middle ,so when I start from the left out part, you need to recall previous ones_ 

**NOTE:** _I inform you first hand that I'll talk about smali and will let you know smali only, for the things what it does. Kindly refer to a Java tutorial on internet._

## So yesterday we left on what is )v there?
    - To understand it first see the image below:
      
![image](https://user-images.githubusercontent.com/85984486/154000523-038e79b5-bc7d-4593-b1c1-5b3795368c42.png)
[Source: jesusfreke/baksmali]

  - as you can see in the image **V** means void but we want know what does this void does...
_It denotes that a method does not have a return type._ **But this is also a point to note that a constructor method can never have a return type, but it does not have the void keyword in its declaration** So don't think that constructor will also have )V at end even when it can't have return types. For more info you should consider learning Java not smali because you're not going to write programs just remember that void used only to denote that the method has no return types. And so whereever you'll see a void method, notice that before `.end method` there's always `return-void` to return with.
  - In smali it's denoted by **V** and in java you've to write **void**
  - That's why in DAY 01 example java code declares **void** as a word but in smali it became just a single word **V**

  - **Now VOID are of two types one is _void type_ and another is _void keyword_
  - The first line which I talked about is _void keyword_ 
  - The _void type works like an end method. Just like we say that `.method` is code (in Smali a method directive) starting parent notation, the `.end method` is it's ending,  similarly, void type represents the void return type as a class and contain a Class<Void> public value which you've seen.
  - Therefore, the only value we can assign to a Void variable is null.


      ![image](https://user-images.githubusercontent.com/85984486/154001045-aaf56369-fc0f-4157-a18f-3991e90ddc85.png) 

**Now I know you're wondering about what is return which we're talking all the way during understanding void and also in DAY 01 smali example**
## So, What is `return`?
   - In Java, return is a reserved keyword i.e., we can’t use it as an identifier. It is used to exit from a method, with or without a value.
   - So this means the code returns the value, which return keyword returns.
   - So, from now on, you'll have to remember that whenever changing Booleans in methods where there is less checks, you should consider editing 0x1 to those parameters which are being returned. 
   - For example, let's see DAY 01 example:

    `.class` public LHelloWorld;
    `.super` Ljava/lang/Object;

    `.method` public static main([Ljava/lang/String;)V
    registers 2

    sget-object v0, Ljava/lang/System;->out:Ljava/io/PrintStream;

      const-string v1, "Hello World!"

    invoke-virtual {v0, v1}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    return-void
     `.end method`

   - Here, you can see that void is returning, means the registers used here is being returned. So if we want to disable it, we can add `const/4 v0, 0x0` before return method, and the return method will do its function.
   - This is a point to note that, I take this code just as an example. Maybe if you modify the hello world in this example, then it won't work or crashes. I just took it as an example to tell what it actually does.

### _Now let's talk about these v0,v1,v2,v3,v4,p0,p1,p2 blah blah_
      These are called Registers names
    So, let's first talk about registers...

## Registers
   - Registers are defined just after `.method` line
   * It does a simple work. It tells the code that how many registers in the code are going to be used.
   * Its alternative is _.locals_ which specifies the **non-parameters** in the code.
   * Now go and read <a href="https://github.com/JesusFreke/smali/wiki/Registers"> This wiki</a> two-three-four as many times, until you don't understand it. If you're still not able to, then message at <a href="https://t.me/ReverseEngineering0">Telegram group</a>, I'll see where you're facing the issue. Then I'll reply you and next day I'll mention that in wiki so others don't face the same issue in future 😀
   * As per user requests, I explained it further from DAY 5, so have a look on them too :)

**Now I've told every basic thing, for further understanding you should consider reading the smali grammar table. Don't learn the table. Each time you're modifying any application, have a look on the table. Don't worry, gradually you'll learn it. You can find the table below 😊😊**
[Smali - Table Of Java Opcode's.pdf](https://github.com/AbhiTheModder/understand-smali/files/8066835/Smali.-.Table.Of.Java.Opcode.s.pdf)

**Now let's take a simple app to understand editing procedure**
   * So let's start from a simple app 
   - I take <a href="https://apkpure.com/blue-light-filter-night-mode/com.eyefilter.nightmode.bluelightfilter">Blue Light Filter - Night Mode</a>
   - Now you'll think, I didn't tell you, how to find places, keywords etc. hahaha.. Wait Bruh Wait 😎😎

   - **Approach**:
      
         1. Open the app, and check what part in the app is asking you to pay, and where it is.
           So, in the chosen "Blue Light Filter" app, we find it's asking us to pay just for removing ads and it's calling it as ** Remove ads**, as you can see in the image below:

![Screenshot 2022-02-15 134633](https://user-images.githubusercontent.com/85984486/154020916-f0ab00a0-34a4-40c2-b253-0d2d9bafecc7.png)

      2. Remember those things. 
      3. Extract the app into apk or you can download apk of apps from various internet sources.
      4. Try to search for the things which you saw in the app for which it was asking to pay. **Remember, search that as strings. If you've android, you can use MT Manager etc. like tools which allows you to search for specially strings but if you're on windows you can use "your_word" to search. Remember to use these quotation marks ("), before and after your word, so that any code editor, search for the strings only. I'm using MT Manager here.
         So, in this apk, I'm going to search for **remove ads** 
![Screenshot 2022-02-15 135752](https://user-images.githubusercontent.com/85984486/154022556-1040d79a-071e-4a44-b2ed-673c9210a09f.png)
The result is:
![image](https://user-images.githubusercontent.com/85984486/154022653-a8d6e30d-dc23-4c89-b9c6-9f8f0a63da92.png)
_**But the results don't seem interesting to me, so I'll try to search for the words separately**_
So, I'll search now for just **remove** and results:
![Screenshot 2022-02-15 140307](https://user-images.githubusercontent.com/85984486/154023322-cbca00ca-b2e6-4309-a38b-9dea330e3597.png)
and this result seems right to me, + interesting too, because it is completing the word "Remove Ads", which we tried to find first, but in an interesting way, so I'll go through it:
![image](https://user-images.githubusercontent.com/85984486/154023833-1a03e9a9-f99a-423f-9e4d-a1aeffc739c3.png)
to go, click on it and then in popup window, click on "search" button.

Then the results are:
![image](https://user-images.githubusercontent.com/85984486/154024094-aa73b928-667b-49dd-8850-cd3797ee9ba9.png)
We will now check them we are lucky that we found just two results, but what to do when there are a lot of results... So _**for that case, we have not to go to the androidx classes, google classes, the only places we have to go, is the app's package classes results and sometimes, if that not results in good place and we fail to mod, then we'll go into the other classes :)**_

**Now going to first result:**
![image](https://user-images.githubusercontent.com/85984486/154024799-bf55757d-eddf-42db-b563-b31031e9d50f.png)

I find that, it's void method, and we know it can take only a single value, that's "null". So, before digging in this void method, we should check other results also, so that we don't have to do hard work. If we don't find anything through another result, then we'll start digging...

**On going to another result:**
 
![image](https://user-images.githubusercontent.com/85984486/154025351-32585999-a626-4a80-a776-b8310a7c21f9.png)
Now to understand this, see top of this page, where I've put all types pic... (what V is called & what Z is called)
Now what is invoke-static doing? Go and see the smali table. Do some of your own work also...
In simpler terms, I'll say that it's performing function of passing the values of registers...
Now analyzing the codes, we can see that the Boolean method is taking value from v1 register, then passing to v0, and then to p0, and returning the value of p0.
The **.registers 3** is telling those three registers are taking place in this function, which I've told you about before, and those are v1,v0 and p0. But why v1 and p0 is doing the things... For that, see the <a href="https://github.com/JesusFreke/smali/wiki/Registers"> This wiki</a>. There, it's written how parameters are being passed.

Now we can modify the value by two types, either changing the value of v1, which is being passed to p0 at final, from false(0x0) to true(0x1), as Boolean can only contain two values: true or false...

So, we can change the line 106 like this, from 0x0 to 0x1:
![image](https://user-images.githubusercontent.com/85984486/154027286-4dd6e2f0-241d-4af8-b4b8-dab8ac5062ff.png)

**OLD CODE**

![image](https://user-images.githubusercontent.com/85984486/154027229-53b07d2b-c5c9-4659-b8b0-765868d61ead.png)

**MODIFIED CODE**

We can also force the Boolean method to return true always, as we know the function of return type (I've told above see again if you don't know what return type does...)

Now we can see that the return type is returning the value of p0, so we can write a code that returns the value of p0 as true, like this:
![Screenshot 2022-02-15 143704](https://user-images.githubusercontent.com/85984486/154031478-015eb2dd-6854-422a-baa8-90b498356291.png)

      const/4 store only 0xF (Decimal 15)

      While const/16 can store maximum value of 16-bit integer which is 0x10000 (decimal 65,536)

      const without any bits can store long integer values as we haven't assigned bit value to it like /4 or /16 after it

and Boolean can store only either 0 or 1, so we can simply use const/4. And p0 used because return type is returning the value of p0.

And after compiling, the result is:
![image](https://user-images.githubusercontent.com/85984486/154032197-8dd17c91-23df-48d3-8b7c-b2c4db22aa8f.png)

