{
   "title": "Basics",
   "weight": 2
}

# Basics

As I mentioned I'll be adding the pictures of any queries users ask me to the next day wiki, so here it is,

![ ](/images/154830448-6394f8d7-09ab-4a99-8583-866478f3eb12.png)

Let's take an app : I've taken [Benime Whiteboard Video Maker](https://apkpure.com/benime-whiteboard-video-maker/com.benzveen.doodlify) Video and methods credits: [Mr. Craazy](https://t.me/Mr_Craazy)

When you'll download the app from apkpure or any website you'll see it's in an extension `.apks` or `.zip` or `.xapk` formats simply these are as a archive or bundle format to make size of output less. To convert them we need to convert it into .apk format for which we use **Antisplit-G2 or SAI**

Here used AntiSplit:

[![Watch the video](/images/220583032-0e53cc62-10da-45ac-abc7-e4876bdcef2f.png)](https://user-images.githubusercontent.com/85984486/220582158-450e51f9-1523-4232-b243-5270bd3eec35.mp4)

### After converting to apk now we are about start our work 😜:

- GO to the location with MT Manager where the converted apk format is
- Open the apk and click on any classes.dex then select dex editor plus, Then select all the dex

![ ](/images/161694354-143d6dde-21d0-4adc-9935-212ce2d68d30.png)
![ ](/images/161694476-2f03cf6a-5432-4686-a482-d64d8a6b62c2.png)

Now from the search option search for **DoodleMainActivity**

![ ](/images/220585332-7258acab-f6c8-427b-bedd-a403a050d20a.png)

> Now you'll be thinking similar to those tutorials i'm going to skip it and will let it up to you to know how I came to this conclusion to search only **DoodleMainActivity** 😂
>
> Well don't worry I'm not going to do that:

- Reasons why **DoodleMainActivity** is being searched:

  1.  As I mentioned it's good if you have a little Java knowledge even only creating the hello world! App in Java is enough for beginning the reverse engineering... Now if you recall your memory a bit you'll remember that the first file during making of that **`hello world!`** project we make a java file named as **`MainActivity`** and in that file we write everything, and after we build the application that file is being run and show us hello world! Text on main screen
  2.  Similarly every app has it's MainActivity which it opens first on launch of the application and in this app i.e. Benime that activity is **`DoodleMainActivity`**
  3.  It's always good to first check the opening activity of any app during reverse engineering of it for many reasons such as checking what it is doing on run and sometimes devs leave their important stuffs here also like in-app purchases details which we people need 😁
  4.  So I hope this much is enough reasons for you to understand why **DoodleMainActivity** is being searched.

- Open the first result which you get and just like in the below image click on `goto` it'll lead you guy's to the **DoodleMainActivity**

![ ](/images/220589905-9766f8d9-7108-4bb4-bdc1-111a5ae79f72.png)

## First let's know about **`static field`** in Java:

- I searched on Google for its quicker and short understanding, and you can see:

![ ](/images/220591408-431e1274-c2f0-41d9-b412-d0d6291d77c3.png) ![ ](/images/220590692-f6e81675-2934-40ee-b120-1dc52387ea50.png)

- From these results one thing is clear that it's being used to store some values
- Now let's see what we get in the **DoodleMainActivity** class:

![ ](/images/220592275-442f677f-c3ed-4520-bffd-894fa39d38c9.png)

aha! 😜 So there is a static field in this class, that means **`R:Z`** is being used to store some value and what does **'`Z`'** represents in smali?(of course boolean) so it only can store two values i.e., either true or false

> [!NOTE]
> It's to be noted that every time you see static fields in classes of app doesn't mean that it's right, and you start editing with that and began complaining about **not working, but you still followed my method in another app** LoL 🤣. We have to analyze that class to see if the **in-app purchases are related to that field or not**, only then start editing them.

- Now after analyzing the code we came to conclusion that this field is the value where data is stored, you can also see as **`ca-pub-xxx`** etc. codes are used for ads and in-app purchases:

![ ](/images/220594836-ae987741-35e9-426f-b796-50d8acdfb95c.png)

- Now then search for the places inside the class where that static field is called, and we reach here:

![ ](/images/220595225-c085947e-bbcb-404d-b0a3-60d8fe7f1679.png)

- For more understanding of below lines refer to [DAY 03](https://smali.pages.dev/3)

> Now let's understand through line one of **`G(Ljava/lang/Boolean;)V`** we can understand that first it's creating boolean to register p1 to store bool value in it then through **`if-eqz`** checking if value of p1 results 0 (false) or 1 (true) and if the value results in 0 then it'll go to `:cond_13` i.e., line 237 where you can see then it'll make p1 value 0 and use the field bool `R:Z` which we see earlier here... from above image we can also see if it's false it'll skip the result and will not execute the below codes of if-eqz, to run then we'll move these codes inside the condition as:

![ ](/images/220597715-97fed673-71e8-43b6-91e4-dedc4a63e897.png) ![ ](/images/220598111-47d4e87c-e2c4-49c9-b3fc-607e45d0a29d.png)

then we'll return the value as return-void because register v0 value is being stored to p1:

![ ](/images/220598987-0187eb4b-eba4-4199-8fbf-a1846a1b78b4.png)

- Now let's move on, it's similar (as there is also same codes just we need to remove the if-eqz code which I discussed earlier about) to above process, so I'll be skipping explanation still if anyone of you doesn't understand below processes then as always I say you're free to ask me at [@Qbtaumai](https://t.me/QbtaumaiBot) 😉:

![ ](/images/220600212-528ea9f9-dfad-418f-b9f2-56827c16a7f3.png) ![ ](/images/220600242-afafefba-62b6-452c-a585-b15aff8fcba0.png) ![ ](/images/220600251-7866c615-e284-4160-beac-95cf67c074e9.png) ![ ](/images/220601199-fc62e6b6-1033-4a71-a128-2dd6a863c73c.png) ![ ](/images/220601231-67da3aea-1947-4cb1-a8a8-286fe995c74c.png)