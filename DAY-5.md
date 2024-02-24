### REGISTERS
**In Smali, registers are used to store any type of data (such as int, float, boolean, objects, and arrays), except for double and long values, where each one requires two registers for 64 bits and then pass arguments to the method. There are two types of registers: `local` and `param(eter)` registers**
***


**Let's talk about registers in more detail today**
- In day 1 or I guess 2, I remember I talked about them but not in detail... Why? Because at that time, my motive was to just let you all familiarize with simple structure of codes, and put up some confidence in all of you :)
- Now we're ready to move on, Yay!

**For that I thought about why not walkthrough examples :)**
**NOTE:** _You can refer to the building process [here](https://github.com/AbhiTheModder/understand-smali/blob/main/AndroidIDE.md). For download process, install, build apk in AndroidIDE from which I've generated apk for the explanations. No problems, if you don't want and just want to start through smali explanation part ;)_

### So, Let's start :D
Basically, there are two types of registers:
Firstly `local`, & then Secondly, `Param(eter)` registers.

* **Local registers** [Denoted with `v` as prefix]

Local registers are used to store local variables within a method. They are numbered from v0 to vN, where N is the number of local variables in the method. Local registers are accessible only within the method, in which they are defined.
When a method is called, the arguments are copied to these local registers. After a method is called, these local registers are destroyed. Well, just think if they'll not get destroyed, it'll hold same data always. Then how would the dev or app, will store different types of data, and use at other places... Just think, like I used `v0` once to store a false value for boolean, and it gets stored permanently !! Then LMAO, if I used `v0` again anywhere else, it would have the same bool value 🤣 (for ex. I used `const/4 v0, 0x0`). So, they're stored until and only when that method is used/called/executed, and after it ends, these get destroyed. That's another reason why, when sometimes we see a method call, we also see that two registers are used like `invoke-virtual {v0, v1} Lcom/some/package;->class()V or anything`. So, here just after that `class` finished working, some value got returned to it's `v0` reg. And same time when it was called, it took that and stored again to another one because it's going to be destroyed soon. 

Local registers are an important part of the Smali programming language. They provide a way to store temporary values and pass arguments to methods.

* **Parameter registers** [Denoted with `p` as prefix]

Parameter registers are used to store the arguments passed to a method. They are numbered from p0 to pN, where N is the number of arguments passed to the method. Parameter registers are accessible only within the method in which they are defined.


**Let's go to our main package name class activity**, i.e, `Lcom/example/myapplication/MainActivity;`

**This is how it looks like, at direct method `<init>`:**

![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/361c630c-da7f-49ce-9796-52cd5f0d2942)

`TL;DR : I'll talk about methods, those other things also... But for now, focusing on registers :)`

## `.registers xx`
**Hey,** Yes I'm talking to you, did you see that line `.regsters 1`. **Did you?**

Oh, yes of course, you would've 😆.. So, that's what defines _how many registers are going to be used inside a method_

YOU: So, does it mean if we use an extra register like v0,v2,v1 etc. it'll not work ?

ME: Yes, it'll not.

YOU AGAIN: But but..., I remember, when I edit or put any extra register containing code inside methods, MT just saves it without showing any error 😢 Then why're you saying like that :(

ME AGAIN: Have you checked what MT does after you save and compile it back, ever ?

YOU: NO

ME: Of course in MT you'll not face it, but maybe in some traditional tool or Apktool, you'll face them. Now, let me show you reason why MT doesn't do that... Simple reason is, MT automatically does that work for ya bruh... See below:

| Original code | We Modified | After compilation and re-opening with MT|
|--------------|--------------|--------------|
| ![annotely_image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/36225df8-a59a-4e09-83b4-5bf45d14f02d) | ![annotely_image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/45978748-214e-4c33-b278-b68213d06956) | ![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/78b608b1-c94f-46df-b14e-23c81ffb55b1) |

OR MT could do this too sometimes:

![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/71ece454-e50d-49d2-826c-d0f29e8e95e8)

Notice that in above image, `.registers` line didn't increase registers... Besides, it even modified our original intended `v0` to `p0`.. Well, I'll talk about this too, just wait for a while :D

Now back to our previous convo..

ME: Did you get it now... Did you see, how MT increased the `registers` count from `1` to `2` there now... I hope you'll understand :)

YOU: (ME: I'll wait for your comments about this, if you understood or not :)

**Extra INFO:**
- sometimes you'll encounter `.locals xx` like line also instead of `.registers xx` (xx used for any number). Well, not much of big issue. `.locals` are used to define how many **local numbers** (again v0, v1, v2, ..., vN) of registers used by methods, and they're **statically** known.
- Also, note that when there is `.locals` defined, it means an extra number for parameter registers, about which we'll talk next day. So it'll be like this...
If code has `.locals 1`, it means that, there should/will be _2 local registers_ and _1 param(eter) registers_ will be allowed in that method.

TBC...

## **Written with ❤ by Abhi**
**_Kindly message me in telegram, if you've any problems in understanding anything_**
