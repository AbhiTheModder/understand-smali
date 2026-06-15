{
   "title": "Registers [local]",
   "weight": 3
}

# Registers [local]

**In Smali, registers are used to store any type of data (such as int, float, boolean, objects, and arrays), except for double and long values, where each one requires two registers for 64 bits and then pass arguments to the method. There are two types of registers: `local` and `param(eter)` registers**

---

## **Let's talk about registers in more detail today**

- On the first or second day, I recall discussing a bit about the topic, but I did not delve into detail. My primary objective at that time was to introduce you to the fundamental structure of codes and instill confidence in your abilities. This approach aimed to lay a solid foundation before exploring more intricate concepts.
- Now we're ready to move on, Yay!

**So, I was thinking, why not take a stroll through some examples? It'll be like a fun walk in the park, but instead of trees and flowers, we'll have code and awesomeness. Get ready to explore and learn in a whole new way!**

**NOTE:** _If you're curious about the building process, you can check out this link: [https://github.com/AbhiTheModder/understand-smali/blob/main/AndroidIDE.md](https://github.com/AbhiTheModder/understand-smali/blob/main/AndroidIDE.md). It's got all the details on how to download, install, and build an APK in AndroidIDE. I used it to generate the APK for the explanations in this guide. But no worries if you're not into that right now. You can always just jump straight into the Smali explanation part._

### Let's start

Basically, there are two types of registers. First: `local`, Second: `Param(eter)` registers

- **Local registers** \[Denoted with `v` as prefix\]

**Local registers** are used to store local variables within a method. They are numbered from `v0` to `vN`, where **N** is the number of local variables in the method.

- They are accessible only within the method in which they are defined. When a method is called, the arguments are copied to these local registers.
- After a method is called, the local registers are destroyed. Well just think if they'll not get destroyed it'll hold same data always then how could the dev or app will store different types of data and use at other places. Just think like I used `v0` once to store a false value for boolean, and it gets stored permanently then LMAO if I used `v0` again anywhere else it would have the same bool value 🤣 (for ex. I used `const/4 v0, 0x0`). So they're stored until and only when that method is used/called/executed, and after it ends those gets destroyed and that's also another reason when sometimes we see a method call we also see that two registers are used like `invoke-virtual {'{v0,'} {'v1}'} Lcom/some/package;->class()V or anything` so here just after that `class` finished working some value got returned to it's `v0` reg. And same time when it was called it took that and stored again to another one because it's going to be destroyed soon.

  Local registers are an important part of the Smali language. They provide a way to store temporary values and pass arguments to methods

  - **Parameter registers** \[Denoted with `p` as prefix\]

  Parameter registers are used to store the arguments passed to a method. They are numbered from `p0` to `pN`, where **N** is the number of arguments passed to the method. Parameter registers are accessible only within the method in which they are defined.

  **Let's go to our main package name class activity**, i.e, `Lcom/example/myapplication/MainActivity;`

  **This is how it looks like at direct method `<init>`:**

  ![annotely_image](/images/361c630c-da7f-49ce-9796-52cd5f0d2942.png)

  `TL;DR - I'll talk about methods, those other things also but for now focusing on registers`

  ## `.registers xx`

  **Hey,** Yes I'm talking to you, did you see that line `.regsters 1`. **Did you?**

  Oh, yes of course you would've 😆, So that's what _defines how many registers are going to be used inside a method_

  **YOU:** So, does it mean if we use an extra register like v0,v2,v1 etc. it'll not work ?

  **ME:** Yes, it'll not

  **YOU:** But but..., I remember when I edit or put any extra register containing code inside methods MT just saves it without showing any error 😢 then why're you saying like that :(

  **ME:** Have you checked what MT does after you save and compile it back, ever ?

  **YOU:** NO

  **ME:** Of course in MT you'll not face it, but maybe in some traditional or Apktool you'll face them. Now let me show you reason why MT doesn't do that, Simple reason is that MT automatically does the work for ya bruh. See below

  Original code ⇣
  ![annotely_image](/images/36225df8-a59a-4e09-83b4-5bf45d14f02d.png)

  We Modified ⇣
  ![annotely_image](/images/45978748-214e-4c33-b278-b68213d06956.png)

  After compilation and re-opening with MT ⇣
  ![annotely_image](/images/78b608b1-c94f-46df-b14e-23c81ffb55b1.png)

  OR MT Could Do this too sometimes:
  ![annotely_image](/images/71ece454-e50d-49d2-826c-d0f29e8e95e8.png)

  Notice that in above image `.registers` line didn't increase registers besides it even modified our original intended `v0` to `p0`, well I'll talk about this also just wait for a while

  Now back to our previous talk

**ME:** did you get it now, did you see how MT increased the `registers` count from `1` to `2` there now I hope you'll understand  
**YOU:** (ME: I'll wait your comments about this if you get it right or not)

## **Extra INFO:**

- sometimes you'll encounter `.locals xx` like line also instead of `.registers xx` (xx used for any number). Well, not much of big issue `.locals` are used to define how many **local numbers**(again v0, v1, v2, ... vN) of registers used by methods, and they're **statically** known.
- Also note that when there is `.locals` defined, it means an extra number for parameter registers, about which we'll talk next day. So it'll be like this if code has `.locals 1` it'll mean that there should/will be _2 local registers_ and _1 param(eters) registers_ will be allowed in that method.

**Ques.)** How to increase register count inside a method safely and identify new usable registers?

**Ans.)** Increase the register count of the method, and use the newly created registers the only gotcha is that the new registers aren't at the end of the register range - they're actually just before the parameter registers. For example, let's take a method that has 5 registers total (.registers 5), 3 of which are parameter registers. So you have v0 and v1 which are non-param registers, and p0-p2 which are the 3 parameter registers, and are aliases for v2-v4. If you need to add an additional 2 registers, you would bump it up to .registers 7. The parameter registers stay at the end of the register range, so p0-p2 are now aliased to v4-v6, and v2 and v3 are the new registers that are safe to use. > Source: [JesusFreke on StackOverflow](https://stackoverflow.com/a/12648626)

### If you're having difficulty understanding above ans. by Freke, let's take an example of cricket:

Think of it like this: You're in the middle of a cricket match with your pals, ok? There are 5 of you out there, and you've got this solid trio you always toss the ball to – they're like your go-to guys, yep you get it by now we call them the 'parameter registers,' because passing to them feels like your second nature. Now, imagine you want to up your game by bringing in a couple of new players, aiming to rack up more runs. But here's the catch: you can't just stick them at the back; that's where your main squad is. So, you slot them in just before your usual crew. Voila, you've now got a 7-player lineup! But wait a sec... Your original three musketeers? They're still your 'parameter registers,' the ones you rely on the most, now chilling at the back. And the newbies? They're your 'new registers.' You're breaking them in, using them to swing the bat or roll the arm over. They're fresh on the team, so you're still getting the hang of playing with them, but they're all set for action.

    TBC...