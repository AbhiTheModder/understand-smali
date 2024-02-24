_**Yesterday, I got a question from one of the reader, and as told, I'll put those here. So that if anyone else faces same problem, he/she can be benefitted**_

### The Question and Answer:
![image](https://user-images.githubusercontent.com/85984486/154293034-ca952c95-b81a-432d-a38e-13cda00ee490.png)

**Dex Basic Judgement Language by @Spicey_01, who also did hard work on smali understanding, and like me, compiled all the resources he got from internet, in explanatory language. So, all credits for this page to him. Go spam his DM/PM/IB by Thanks😂 (No, don't do this, but atleast add one Thanks message in his DM/PM/IB), and I'm modifying some of his lines, which might be difficult to understand by newbies, to simple language only 😁😁**


![image](https://user-images.githubusercontent.com/85984486/154318743-8878c46c-79b9-4bcb-ae09-1240f428a802.png)

### Some common things in smali:
 `.field` private isFlag:z Define variable

 `.method` => method

 `.parameter` => method parameter

 `.prologue` => method start

 `.line 12` => This method is on line 12, likely you can see same like `.line 2` or `.line 3` or 4, but the meaning is same, that the method is at that speicifc line, in the file/code. See image below:

![image](https://user-images.githubusercontent.com/85984486/154317164-c1e2a7e3-7593-4bc7-8b87-a766f77745a2.png)


 `invoke-super` => Invoke the parent function => mean

![image](https://user-images.githubusercontent.com/85984486/154294512-bfca15fc-51ab-4943-a180-667ff2ac4b80.png) So call the parent function into the given function/code...


 `const/high16 vO, 0x7fo3` => Assign value of 0x7fo3 to v0

 `invoke-direct` => Invoke a function (this doesn't seem to give more explanation as I've given invoke meaning above)

 `return-void` => function returns void

 `.end method` => function ends

 `new-instance` => Create an instance (Same like creating a new by calling `.method`, but when you need to call inside a method, it's used)

 `iput-object` => object assignment (it puts the object which is being told to it)

 `invoke-static` => Invoke a static function (Go google it, because there are lot of helpful resources, and I can't add all of them here)

### Conditional jump branch:

**NOTE: There can be anything thing like a,ab,02,0a,0b in places of `**` which is being used in below lines in smali**

 "`if-eq vA,vB, :cond. **`" => If vA equals vB, then jump to :cond_ **

 "`if-ne vA,vB, :cond_ **`" => Jump to :cond_ ** if vA is not equal to vB

 "`if-lt vA,vB, :cond_ **`" => If vA is less than vB, then jump to :cond_ **

 "`if-ge vA,vB, :cond_ **`" => If vA is greater than or equal to vB, then jump to :cond_ **

 "`if-gt vA,vB, :cond_ **`" => Jump to :cond_ **, if vA is greater than vB

 "`if-le vA,vB, :cond_ **`" => If vA is less than or equal to vB, jump to :cond_ **

 "`if-eqz vA, :cond_ **`" => If vA equals 0, then jump to :cond_ **

 "`if-nez vA, :cond. **`" => Jump to :cond. _**, if vA is not equal to 0

 "`if-ltz vA, :cond. **`" => If vA is less than 0, then jump to :cond_ **

 "`if-gez vA, :cond_ **`" => If vA is greater than or equal to 0, then jump to :cond. **

 "`if-gtz vA, :cond_ **`" => If vA is greater than 0, then jump to :cond_ **

 "`if-lez vA, :cond_ **`" => If vA is less than or equal to 0, jump to :cond_ _**

  ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝；
### Some important conditions types/methods:

  **The java code of the `if` function:**
**NOTE: I'll not explain these lines below. Why? => because in day 1, I've told you, how to analyze java vs smali. Read one by one and try to understand yourself. If not understood, then feel free to message me, I'll explain.**

       private boolean ifSense(){
           boolean tempFlag = ((3-2)==1)? true : false;
         if (tempFlag) {
           return true;
        }else{
                 return false;
        }
    }

 **`if` function analysis:**

     .method private ifSense()Z
       .locals 2

     .prologue
     .line 22
     const/4 v0, 0x1 // v0 is assigned 1

     .line 24
     .local v0, tempFlag:Z
     if-eqz v0, :cond_0 // Determine whether v0 is equal to 0, if it does not meet the conditions, go down, and execute the cond_0 branch if it meets the conditions

     .line 25
     const/4 v1, 0x1 // conditional branch

     .line 27
     :goto_0
     return v1

     :cond_0
     const/4 v1, 0x0 // cond_0 branch

       goto :goto_0
    .end method

**Text description**: _If the if branch is met, the program will go down and finally return; and if the condition is not met, it will go to the :cond_0 branch, and finally execute goto :goto_0 to go back :goto_0 to return_

 ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝；

**`for` function java code:**

       private void forSense(){
             listStr = new ArrayList<String>(COUNT);
          for (int i=0; i<COUNT;i++) {
              listStr.add("Now it's my turn to play music"); //listStr is smae like print function but a listing for more details watch some basic java tut
          }
       }

**`for` function analysis:**

         .line 40
     const/4 v0, 0x0

     .local v0, i:I
     :goto_0
     if-lt v0, v3, :cond_0 // if-lt judges that the value v0 is less than v3, if it does not conform to go down, it conforms to the execution branch :cond_0

     .line 43
     return-void

     .line 41
     :cond_0 // label
     iget-object v1, p0, Lcom/example/smalidemo/MainActivity;->listStr:Ljava/util/List; // reference object

     const-string v2, "\u73b0\u5728\u8f6e\u5230\u6211\u4e0a\u573a\u4e50"

     invoke-interface {v1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z // List is an interface, so execute the interface method add

     .line 40
     add-int/lit8 v0, v0, 0x1 // Put the value in the second v0 register, plus the value of 0x1 into the first register to achieve auto-increment

     goto :goto_0 // goto :goto_0 tag

**Text description**: S_et a label goto_0, judge that v0 is less than v3, and conform to the execution branch: cond_0, and then run back to: goto_0 to continue the judgment_

 ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝；  =====
 (After reading the following content, you will almost get started after reading through)

# Basic knowledge:

**APK, Dalvik bytecode and smali files**
 ———————————————————————————————————————————————————  ———————————————————————————————————————————————————  —————————

<a href="https://medium.com/androiddevnotes/the-internals-of-android-apk-build-process-article-5b68c385fb20"> The internals of Android APK build process — Article</a>

**APK file**
 - **Everyone should know that the APK file is actually a compressed package with MIME as ZIP. We can see the internal file structure by modifying the ZIP suffix. For example, after modifying the suffix, open the Crocodile Naughty APK with RAR and you can see (Google Play download  full version):**
 
**_Suppose The app is My Water.apk and you modifies it to My Water.zip_**
     Where's My Water.zip\

**asset\** <resource directory 1: asset and res are both resource directories but there are differences, see the description below>
**lib\** <so library storage location, usually compiled by NDK, commonly used in projects called by game engine or JNI native>
|---**armeabi\ **|---<so library files are divided into different CPU architectures>
|---**armeabi-v7a**\
**META-INF\ **<store some property files of the project, such as Manifest.MF>
**res\** <resource directory 2: asset and res are both resource directories but there are differences, see the description below>
|---**drawable\** |---<image and corresponding xml resource>
|---**layout\** |---<xml resource defining layout>
|---...
**AndroidManifest.xml** <The basic configuration property file of the Android project,It is like brain of humans>
**classes.dex** <The file that can be directly executed by Dalvik VM compiled by Java code, which is introduced below>
**resources.arsc** <an index file for the resources in the res directory, saving the contents of the strings.xml and other files in the original project>
       
![image](https://user-images.githubusercontent.com/85984486/154316834-a3157dab-3ede-4b52-a7e6-cf33691856be.png)

#### Unimportant Note: The difference between asset and res resource directories:

1. The resource file in the res directory will automatically generate an index file (R.java) when compiling, which is referenced by R.xxx.yyy in the Java code; and the resource file in the asset directory does not need to generate an index, in the Java code  Need to use AssetManager to access;

2. In general, except for audio and video resources (which need to be placed under raw or asset), resource files used in Android projects developed in Java will be placed under res; those using C++ game engines (or using Lua binding, etc.)  All resource files need to be placed under the asset.

 Because Where's My Water is developed using Disney's own DMO game engine, all resource files used in the game are stored under assets, except for the application icons, which still need to be placed under res.
       
       
**Dalvik bytecode:**
 —————————————————————————————————————————————
  * Dalvik is a virtual machine specially designed by google for the Android operating system, which is deeply optimized.
  *Although programs on Android are developed using java, Dalvik and the standard java virtual machine JVM are two different things.
  *Dalvik VM is register-based, while JVM is stack-based;
  *Dalvik has its own file execution format dex (dalvik executable), while JVM executes java bytecode.
  *Dalvik VM is faster and takes less space than JVM.

         Through Dalvik's bytecode, we cannot directly see the original logic code. At this time, we need to use tools such as Apktool or dex2jar+jd-gui to help view it.
         However, it should be noted that in the end, the file we need to operate to modify the APK is the .smali file, not the exported Java file to recompile (and this is basically impossible).
       
       
**`smali` file**

Well, after having a certain understanding of Dalvik, let's introduce the key points: smali, and its syntax.

  Simply put, smali is the core code executed inside the Dalvik VM.  It has its own set of syntax, which will be introduced below. If you have experience in JNI development, you can quickly understand it.

**First, the data type of smali**

**In smali, the data types are the same as in Android, but the corresponding symbols are changed:**

         B---byte
         C---char
         D---double
         F---float
         I---int
         J---long
         S---short
         V---void
         Z---boolean
         [XXX---array
         Lxxx/yyy---object
   
**The last two items are parsed here. The representation of the array is:**
  Add the square brackets "[" before the basic type. For example, the int array and the float array are represented as: [I, [F; the representation of the object starts with L, and the format is LpackageName/objectName;
  (Note that there must be a semicolon at the end), for example, the String object in smali is:
         Ljava/lang/String;, where java/lang corresponds to the java.lang package, and String is an object defined in the package.

_**Some people may ask, since the class is represented by LpackageName/objectName;, how can the inner class in the class be referenced in smali?**_
   The answer is: LpackageName/objectName$subObjectName;.  That is, add the "$" sign before the inner class. More rules about the "$" sign will be discussed later.
       
****Second, the definition of the function****

 —————————————————————————————————————————————

The definition of a function is generally:

 Func-Name (Para-Type1Para-Type2Para-Type3...)Return-Type

Note that there are no separators between parameters, and it is easy to understand with a few examples:

1. `foo()V`

         Yes, this is void foo().

2. `foo(III)Z`

         This is boolean foo(int, int, int).

3. `foo (Z[I[ILjava/lang/String;J)Ljava/lang/String;`

         See that this is String foo (boolean, int[], int[], String, long) ?
               
### A specific introduction to the content of the smali file

 —————————————————————————————————————————————

 Let's start to further analyze the specific examples in smali,
   - Take WMWActivity.smali in Crocodile Naughty (it's a app name) for analysis (for how to obtain it, please refer to APK Decompilation 2 in the next section: Tool Introduction, temporarily introduce the smali syntax),
 Its content is roughly like this:
       
         .class public Lcom/disney/WMW/WMWActivity;
         .super Lcom/disney/common/BaseActivity;
         .source "WMWActivity.java"
   
       # interfaces
         .implements Lcom/burstly/lib/ui/IBurstlyAdListener;
   
      # annotations
         .annotation system Ldalvik/annotation/MemberClasses;
                 value = {
                         Lcom/disney/WMW/WMWActivity$MessageHandler;,
                         Lcom/disney/WMW/WMWActivity$FinishActivityArgs;
                 }
         .end annotation
   
   
       # static fields
         .field private static final PREFS_INSTALLATION_ID:Ljava/lang/String; = "installationId"
         //...
          
          
       # instance fields
         .field private _activityPackageName:Ljava/lang/String;
         //...
          
          
       # direct methods
         .method static constructor <clinit>()V
                 .locals 3
          
                 .prologue
                 //...
          
                 return-void
         .end method
          
         .method public constructor <init>()V
                 .locals 3
          
                 .prologue
                 //...
          
                 return-void
         .end method
          
         .method static synthetic access$100(Lcom/disney/WMW/WMWActivity;)V
                 .locals 0
                 .parameter "x0"
          
                 .prologue
                 .line 37
                 invoke-direct {p0}, Lcom/disney/WMW/WMWActivity;->initIap()V
          
                 return-void
         .end method
          
         .method static synthetic access$200(Lcom/disney/WMW/WMWActivity;)Lcom/disney/common/WMWView;
                 .locals 1
                 .parameter "x0"
          
                 .prologue
                 .line 37
                 iget-object v0, p0, Lcom/disney/WMW/WMWActivity;->_view:Lcom/disney/common/WMWView;
          
                 return-object v0
         .end method
          
         //...
          
       # virtual methods
         .method public captureScreen()V
                 .locals 4
          
                 .prologue
                 //...
          
                 goto :goto_0
         .end method
          
         .method public didScreenCaptured()V
                 .locals 6
          
                 .prologue
                 //...
          
                 goto :goto_0
         .end method

_**It's normal to be confused.  Now I'll break it down one by one, understanding the meaning of these symbols will make you more effective when injecting code later.**_
       
# Inheritance, interface and package information in smali

 —————————————————————————————————————————————

First look at the first few lines:
   1] .class public Lcom/disney/WMW/WMWActivity;

   2] .super Lcom/disney/common/BaseActivity;

   3] .source "WMWActivity.java"

   4]

   5] # interfaces

   6] .implements Lcom/burstly/lib/ui/IBurstlyAdListener;
   
   7]
   8] # annotations

   9] .annotation system Ldalvik/annotation/MemberClasses;

   10] value = {

   11] Lcom/disney/WMW/WMWActivity$MessageHandler;,

   12] Lcom/disney/WMW/WMWActivity$FinishActivityArgs;

   13] }

   14] .end annotation

* Lines 1-3 define basic information: this is a smali file compiled by WMWActivity.java (line 3), which is a class (line 1) under the package com.disney.WMW, which inherits from com.disney.common.BaseActivity (line 2).
* Lines 5-6 define the interface information: this WMWActivity implements the IBurstyAdListener interface under the package com.burstly.lib.ui (an advertising SDK).
* Lines 8-14 define the inner class: it has two-member inner classes - MessageHandler and FinishActivityArgs. The inner class will be mentioned in the following subsections.

  **After analyzing the information at the beginning of the smali file, we have been able to construct a Java file like this in our brain:**
       
                 class WMWActivity extends BaseActivity implements IBurstlyAdListener{
                         //...
                         class MessageHandler {
                                 //...
                         }
                         class FinishActivityArgs{
                                 //...
                         }
                 }

  That's right, this is the general framework of the original WMWActivity.java, member variables and function information?  Don't worry, the following is about to analyze.
        
 **Before proceeding with the analysis, there are a few things that need to be explained.**
  ** As mentioned earlier, one of the biggest differences between the Dalvik VM and the JVM is that the Dalvik VM is register-based**.
  **_What does register-based mean?_**
That is, all operations in smali must go through registers:
**Local registers** are represented by symbols starting with v and ending with numbers, such as v0, v1, v2, ...
**Parameter registers** are represented by symbols starting with p and ending with numbers, such as p0, p1, p2, ...
In particular, **p0 is not necessarily the first parameter in the function**,
_In a non-static function,_
_p0 stands for "this",_(SEE JAVA BASIC TUTORIALS TO KNOW WHAT `this` MEANS)
_p1 represents the first parameter of the function,_
_p2 represents the second parameter in the function..._
**In the static function, p0 corresponds to the first parameter (because there is no this method in Java's static method).**
_There are no restrictions on local registers_, and in theory they can be used arbitrarily. The following is an example:
       
                 const/4 v0, 0x0
                 iput-boolean v0, p0, Lcom/disney/WMW/WMWActivity;->isRunning:Z
       
* In the above two sentences, the v0 local register is used, and the value 0x0 is stored in v0,
* Then the second sentence uses the command iput-boolean to store the value in v0 into the member variable com.disney.WMW.WMWActivity.isRunning.
* That is equivalent to: this.isRunning = false; (
* As mentioned above, p0 represents "this" in non-static functions, which is an instance of com.disney.WMW.WMWActivity in this case).
* The specific instructions and meanings of these two sentences can be ignored for the time being.
* It is enough to understand the mechanism of Dalvik VM first. In fact, the syntax is very similar to assembly language, and the specific instructions will be introduced one by one later.
       
## 2. Member variables in smali

 —————————————————————————————————————————————

**The following continues to describe the content of member variables:**

                 1 ] # static fields
                 2 ] .field private static final PREFS_INSTALLATION_ID:Ljava/lang/String; = "installationId"
                 3] //...
                 4]
                 5]
                 6 ] # instance fields
                 7] .field private _activityPackageName:Ljava/lang/String;
                 8 ] //...

The static fields and instance fields defined above are both member variables.
The format is: .field public/private [static] [final] varName:<type>.
 - However, there is still a difference between static fields and instance fields. Of course, the difference is obvious, that is, static fields are static, while instance is not.
* **There are also different instructions for retrieving these different member variables according to this distinction.**
   => Generally speaking, the obtained commands are: iget, sget, iget-boolean, sget-boolean, iget-object, sget-object, etc.,
      The operating instructions are: iput, sput, iput-boolean, sput-boolean, iput-object, sput-object, etc.
      The member variable object without the "-object" suffix indicates that the operation is the basic data type, and the member variable with "-object" indicates that the operation is the object type. In particular, the boolean type is operated using the instruction with "-boolean".
       
(1) The command to obtain static fields is similar to:
       
                         sget-object v0, Lcom/disney/WMW/WMWActivity;->PREFS_INSTALLATION_ID:Ljava/lang/String;
       
 sget-object is used to get the variable value and save it to the register of the next parameter,
 Here, get the String member variable PREFS_INSTALLATION_ID that appears above and put it in the v0 register,
    Note: The type of the class to which the variable belongs, is required in the front, followed by a colon and the type of the member variable, and "->" in the middle indicates the ownership.
       
(2) The instruction to obtain instance fields is basically the same as that of static fields, but because it is not a static variable, it cannot only indicate the type of the class where the variable is located, but also needs an instance of the class where the variable is located.  See example:
                       
                         iget-object v0, p0, Lcom/disney/WMW/WMWActivity;->_view:Lcom/disney/common/WMWView;
       
  It can be seen that the iget-object instruction has one more parameter than sget-object, which is the instance of the class where the variable is located. Here, it is p0 or "this".
       
(3) There are also aget and aget-object to obtain the array. The instruction usage is similar to the above, and will not be described in detail.

(4) The use of the put instruction and the get instruction are unified, and the example is not explained directly:
   
                         const/4 v3, 0x0
                         sput-object v3, Lcom/disney/WMW/WMWActivity;->globalIapHandler:Lcom/disney/config/GlobalPurchaseHandler;
       
  => Equivalent to: this.globalIapHandler = null; (null = 0x0)
                 .local v0, wait:Landroid/os/Message;
                         const/4 v1, 0x2
                         iput v1, v0, Landroid/os/Message;->what:I
      
  => Equivalent to: wait.what = 0x2; (wait is an instance of Message)
       
 3. Function call in smali

 —————————————————————————————————————————————

**Functions in smali, like member variables, are also divided into two types**.
   But the difference between **static and instance in different member variables is the difference between direct and virtual**.
     So, what is the _**difference between direct method and virtual method?**_
_To put it bluntly, a direct method is a private function, and the rest of the public and protected functions belong to a virtual method._
 -> So, when calling a function, there are invoke-direct, invoke-virtual, and several different instructions such as invoke-static, invoke-super, and invoke-interface.
 Of course, there are also _invoke-XXX/range_ commands, which are called _**when there are more than 4 parameters**_, which are _relatively rare_, just understand them.

(1), **invoke-static**: As the name implies, it calls the static function. Because it is a static function, it has one less parameter than other calls, for example:
   
                         invoke-static {}, Lcom/disney/WMW/UnlockHelper;->unlockCrankypack()Z
       
  Note here that there is a pair of braces "{}" after invoke-static, which is actually the instance + parameter list that calls the method,
   Since this method requires neither parameters nor static, so {} is empty, look at another example:
       
                         const-string v0, "fmodex"
                         invoke-static {v0}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V<span style="font-family: Verdana, sans-serif; "> </span>
       
   This is the method used to call static void System.loadLibrary(String) to load the so library compiled by NDK, and also here v0 is the parameter "fmodex".
      
(2), **invoke-super**: The instruction used to call the parent class method can be seen in onCreate, onDestroy and other methods, omitted.

(3), **invoke-direct**: call the private function, for example:
   
                         invoke-direct {p0}, Lcom/disney/WMW/WMWActivity;->getGlobalIapHandler()Lcom/disney/config/GlobalPurchaseHandler;
       
       
Here GlobalPurchaseHandler getGlobalIapHandler() is a private function defined in WMWActivity.
   If you use invoke-virtual or invoke-static incorrectly when modifying smali, a common VerifyError will be raised when the compiled program is run.


## **Written with ❤ by Abhi**
**_Kindly message me in telegram if you've any problem's in understanding anything_**
