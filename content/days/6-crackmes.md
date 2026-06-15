{
   "title": "CrackMe's",
   "weight": 6
}

# CrackMe challenges for Android

So let's walk through the process of cracking an Android app.
Taking some simple crackmes first, then moving on to more complex ones.

## crackme0x01

- Author: [@num1r0](https://github.com/num1r0)
- Source: [https://github.com/num1r0/android_crackmes.git](https://github.com/num1r0/android_crackmes.git)

### Description

The very basic crackme challenge. Gives you chance to get familiar with all Android RE tools

### Solution

As the description says, it's a very basic crackme. But it's a good starting point for learning Android RE.

Let's first install the app on our device and run it. And we're presented with a simple password input screen:

![password input screen](/images/crackmes/crackme0x01.png)

Let's try to enter some random password and see what happens:

![alt text](/images/crackmes/crackme0x01_1.png)
We get a toast message saying "Wrong password -> No flag :\)\)". So let's try to find out how the app checks the password.

Now let's decompile the apk first.
For that we have plenty of tools available:

- [apktool](https://apktool.org/)
- [jadx](https://github.com/skylot/jadx) | [jadx-gui](https://github.com/skylot/jadx-gui)
- [dex2jar](https://github.com/pxb1988/dex2jar)
- [enjarify](https://github.com/Storyyeller/enjarify)
- [jd-gui](http://java-decompiler.github.io/)
- [CFR](http://www.benf.org/other/cfr/)
- [procyon](https://web.archive.org/web/20200722205047/https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler)
- [fernflower](https://github.com/JetBrains/intellij-community/tree/master/plugins/java-decompiler)
- [jad](https://varaneckas.com/jad/)
- [javap](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javap.html)
- [jclasslib](https://github.com/ingokegel/jclasslib)
- [Krakatau](https://github.com/Storyyeller/Krakatau.git)
- [Candle](https://github.com/bradsdavis/candle-decompiler.git)
- [Smali/BakSmali](https://github.com/JesusFreke/smali.git)
- [bytecode-viewer](https://github.com/Konloch/bytecode-viewer)
- [JEB](https://www.pnfsoftware.com/)
- [APKEditor](https://github.com/REAndroid/APKEditor.git)
- [APKLab](https://apklab.surendrajat.xyz/)

Also, we've our own [RevEngi Bot](https://t.me/RevEngiBot) Just inside Telegram for this task 😂

My Personal Favorites are `apktool`,`APKEditor`,`JADX`,`baksmali`(for this you need to extract `.dex` files out of apk), and MT of course in Android side.

Now, without further ado, whichever tool you've used doesn't matter what our goal here is to first go the place where the error string is or the place where the password is checked.
I'll be assuming you're familiar with how to search for strings at least.
So, after search we see that it's result leads to the class `MainActivity$1` and the method `onClick`:

```smali
.method public onClick(Landroid/view/View;)V
  .registers 5

  new-instance p1, Lcom/entebra/crackme0x01/FlagGuard;

  invoke-direct {p1}, Lcom/entebra/crackme0x01/FlagGuard;-><init>()V

  iget-object v0, p0, Lcom/entebra/crackme0x01/MainActivity$1;->val$edtTxt:Landroid/widget/EditText;

  invoke-virtual {v0}, Landroid/widget/EditText;->getText()Landroid/text/Editable;

  move-result-object v0

  invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;

  move-result-object v0

  invoke-virtual {p1, v0}, Lcom/entebra/crackme0x01/FlagGuard;->getFlag(Ljava/lang/String;)Ljava/lang/String;

  move-result-object p1

  if-eqz p1, :cond_47 // Compare if the value in our register p1 is null/0 or not
  // If 0 then go to cond_47
  // else just continue below code flow

  new-instance v0, Landroid/support/v7/app/AlertDialog$Builder;

  iget-object v1, p0, Lcom/entebra/crackme0x01/MainActivity$1;->this$0:Lcom/entebra/crackme0x01/MainActivity;

  invoke-direct {v0, v1}, Landroid/support/v7/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

  const-string v1, "Congratulations!"

  invoke-virtual {v0, v1}, Landroid/support/v7/app/AlertDialog$Builder;->setTitle(Ljava/lang/CharSequence;)Landroid/support/v7/app/AlertDialog$Builder;

  new-instance v1, Ljava/lang/StringBuilder;

  invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

  const-string v2, "The flag is: "

  invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

  invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

  invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

  move-result-object p1

  invoke-virtual {v0, p1}, Landroid/support/v7/app/AlertDialog$Builder;->setMessage(Ljava/lang/CharSequence;)Landroid/support/v7/app/AlertDialog$Builder;

  const-string p1, "OK"

  new-instance v1, Lcom/entebra/crackme0x01/MainActivity$1$1;

  invoke-direct {v1, p0}, Lcom/entebra/crackme0x01/MainActivity$1$1;-><init>(Lcom/entebra/crackme0x01/MainActivity$1;)V

  invoke-virtual {v0, p1, v1}, Landroid/support/v7/app/AlertDialog$Builder;->setPositiveButton(Ljava/lang/CharSequence;Landroid/content/DialogInterface$OnClickListener;)Landroid/support/v7/app/AlertDialog$Builder;

  invoke-virtual {v0}, Landroid/support/v7/app/AlertDialog$Builder;->create()Landroid/support/v7/app/AlertDialog;

  move-result-object p1

  invoke-virtual {p1}, Landroid/support/v7/app/AlertDialog;->show()V

  goto :goto_69

  :cond_47 // Conditional branch 47 to trigger Error Dialogue
  new-instance p1, Landroid/support/v7/app/AlertDialog$Builder;

  iget-object v0, p0, Lcom/entebra/crackme0x01/MainActivity$1;->this$0:Lcom/entebra/crackme0x01/MainActivity;

  invoke-direct {p1, v0}, Landroid/support/v7/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

  const-string v0, "Nope!" // Error Title Message

  invoke-virtual {p1, v0}, Landroid/support/v7/app/AlertDialog$Builder;->setTitle(Ljava/lang/CharSequence;)Landroid/support/v7/app/AlertDialog$Builder;

  const-string v0, "Wrong password -> No flag :))" // The Error Message

  invoke-virtual {p1, v0}, Landroid/support/v7/app/AlertDialog$Builder;->setMessage(Ljava/lang/CharSequence;)Landroid/support/v7/app/AlertDialog$Builder;

  const-string v0, "OK"

  new-instance v1, Lcom/entebra/crackme0x01/MainActivity$1$2;

  invoke-direct {v1, p0}, Lcom/entebra/crackme0x01/MainActivity$1$2;-><init>(Lcom/entebra/crackme0x01/MainActivity$1;)V

  invoke-virtual {p1, v0, v1}, Landroid/support/v7/app/AlertDialog$Builder;->setPositiveButton(Ljava/lang/CharSequence;Landroid/content/DialogInterface$OnClickListener;)Landroid/support/v7/app/AlertDialog$Builder;

  invoke-virtual {p1}, Landroid/support/v7/app/AlertDialog$Builder;->create()Landroid/support/v7/app/AlertDialog;

  move-result-object p1

  invoke-virtual {p1}, Landroid/support/v7/app/AlertDialog;->show()V

  :goto_69
  return-void
.end method
```

When you look at it, it'll feel like a mess, but if you look at the `:cond_47`(remember `:cond_` is the usual format the numbering can vary on your decompiled code) label, you'll see that it's the condition which is responsible for error dialogue message. So, If we want to just crack this check one of the most basic and easiest approach is nullifying this check. Just remove that line of `if-eqz p1, :cond_47`, and you'll be able to bypass the check. But, we're not here to just crack the check, we're here to learn. Also, if you just do this you'll be able to bypass the check and get the "Congratulations" dialogue, but you'll not be able to get the flag.

![alt text](/images/crackmes/crackme0x01_2.png)

Hahahaha 😂, I know it's a bit of a disappointment, but it's not the end. Let's understand the flow of the code a bit more.

So, how is `:cond_47` triggered?
Well, if you look at the `if-eq` instruction just above few lines of the code, you'll see that it's comparing the password you entered with the correct password. If they're not equal, it'll branch to `:cond_47` and show the error message. So, how do we find the correct password?

The main piece of code:

```smali
  new-instance p1, Lcom/entebra/crackme0x01/FlagGuard;

  invoke-direct {p1}, Lcom/entebra/crackme0x01/FlagGuard;-><init>()V

  iget-object v0, p0, Lcom/entebra/crackme0x01/MainActivity$1;->val$edtTxt:Landroid/widget/EditText;

  invoke-virtual {v0}, Landroid/widget/EditText;->getText()Landroid/text/Editable;

  move-result-object v0

  invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;

  move-result-object v0

  invoke-virtual {p1, v0}, Lcom/entebra/crackme0x01/FlagGuard;->getFlag(Ljava/lang/String;)Ljava/lang/String;

  move-result-object p1
```

The first line is creating a new instance of `FlagGuard` class. The next line is calling the constructor of `FlagGuard` class. To Understand `new-instance` better you can read [new-instance](https://smali.pages.dev/new-instance) i've made sure to use this same example to make it easier for you to understand

Now that If you're done with understanding `new-instance` let's move on to the next line(s).

## So, What's Happening with the Rest of the Code?

Let's break down the remaining lines of the Smali code:

```smali
iget-object v0, p0, Lcom/entebra/crackme0x01/MainActivity$1;->val$edtTxt:Landroid/widget/EditText;
```

This grabs the `EditText` widget of `android.widget.EditText` and puts it into the `v0` register. In Java, this would be something like this:

```java
EditText editText = this.val$edtTxt;
```

So, The box where we enter the password is stored in `v0` register.

Next:

```smali
invoke-virtual {v0}, Landroid/widget/EditText;->getText()Landroid/text/Editable;
move-result-object v0
```

This calls the `getText()` method on the `EditText` object (`v0`) and stores the result (the text inside the `EditText`) back in `v0`. In Java:

```java
Editable text = editText.getText();
```

Then, the text from the `EditText` is stored in `v0` register.

The text is then converted to a string:

```smali
invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;
move-result-object v0
```

In Java:

```java
String textString = text.toString();
```

**Why?** Well 🤨, because the `getFlag()` method of `FlagGuard` expects a `String` as an argument, so our password needs to be a `String`.

Finally, this line passes the string from the `EditText` to the `getFlag()` method of `FlagGuard`:

```smali
invoke-virtual {p1, v0}, Lcom/entebra/crackme0x01/FlagGuard;->getFlag(Ljava/lang/String;)Ljava/lang/String;
move-result-object p1
```

In Java:

```java
String flag = flagGuard.getFlag(textString);
```

Here, the `getFlag()` method is called on the `FlagGuard` object (stored in `p1`), and the result (the flag) is stored in `p1`.

## So, How Do We Find the Correct Password?

Well, we can't just look at the code and see what the password is. We need to analyze the `getFlag()` method to see how it checks the password. Since now it's clear from our initial analysis also that it's return value was being compared with 0 or not. 0 means the password is incorrect and anything else means the password is correct. But we tried to bypass the check 😜, but it didn't work. So, let's analyze the `getFlag()` method.

## Analyzing the `getFlag()` Method

`getFlag()` method is defined in `FlagGuard` class. Let's open it up and see what's happening there.

```smali
.method public getFlag(Ljava/lang/String;)Ljava/lang/String;
  .locals 1

  .line 11
  new-instance v0, Lcom/entebra/crackme0x01/Data;

  invoke-direct {v0}, Lcom/entebra/crackme0x01/Data;-><init>()V

  .line 12
  invoke-virtual {v0}, Lcom/entebra/crackme0x01/Data;->getData()Ljava/lang/String;

  move-result-object v0

  invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

  move-result p1

  if-eqz p1, :cond_0

  .line 13
  invoke-direct {p0}, Lcom/entebra/crackme0x01/FlagGuard;->unscramble()Ljava/lang/String;

  move-result-object p1

  return-object p1

  :cond_0
  const/4 p1, 0x0

  return-object p1
.end method
```

Here, again we see that there's an instance of Data class has been created then from it `getData()` is being used to maybe for now let's assume to get some data from our string and return 0 or 1. If it returns 1 then `unscramble()` method is being called which is returning the flag.
We'll look at `unscramble()` method later, let's first analyze `getData()` method.

## Analyzing the `getData()` Method

If we check the whole `Data` class:

```smali
.class public Lcom/entebra/crackme0x01/Data;
.super Ljava/lang/Object;
.source "Data.java"


# instance fields
.field private final secret:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
  .locals 1

  .line 3
  invoke-direct {p0}, Ljava/lang/Object;-><init>()V

  const-string v0, "s3cr37_p4ssw0rd_1337"

  .line 4
  iput-object v0, p0, Lcom/entebra/crackme0x01/Data;->secret:Ljava/lang/String;

  return-void
.end method


# virtual methods
.method public getData()Ljava/lang/String;
  .locals 1

  .line 7
  invoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

  const-string v0, "s3cr37_p4ssw0rd_1337"

  return-object v0
.end method
```

Aha, 🤯 it's returning the hard-coded string `s3cr37_p4ssw0rd_1337` which seems to be most likely as our password. So, we need to pass this string to `getFlag()` method to get the flag. Let's try it out.

![alt text](/images/crackmes/crackme0x01_3.png)

and wohooo🥳, we got the flag.

## Analyzing the `unscramble()` Method

It's good 🤩 that we got the flag, but it's always good to know how it's being unscrambled. Let's check the `unscramble()` method.

```smali
.method private unscramble()Ljava/lang/String;
  .locals 9

  .line 21
  new-instance v0, Ljava/lang/StringBuilder;

  invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

  const-wide v1, 0x4094e40000000000L  # 1337.0

  .line 22
  invoke-static {v1, v2}, Ljava/lang/String;->valueOf(D)Ljava/lang/String;

  move-result-object v1

  const-string v2, "\\."

  invoke-virtual {v1, v2}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

  move-result-object v1

  const/4 v2, 0x0

  aget-object v1, v1, v2

  invoke-static {v1}, Ljava/lang/Integer;->valueOf(Ljava/lang/String;)Ljava/lang/Integer;

  move-result-object v1

  invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

  move-result v1

  const-string v3, "qw4r_q0c_nc4nvx3_0i01_srq82q8mx"

  .line 23
  invoke-virtual {v3}, Ljava/lang/String;->toCharArray()[C

  move-result-object v3

  array-length v4, v3

  :goto_0
  if-ge v2, v4, :cond_2

  aget-char v5, v3, v2

  const-string v6, "Char: "

  .line 24
  invoke-static {v5}, Ljava/lang/String;->valueOf(C)Ljava/lang/String;

  move-result-object v7

  invoke-static {v6, v7}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

  const-string v6, "abcdefghijklmnopqrstuvwxyz"

  .line 26
  invoke-virtual {v6, v5}, Ljava/lang/String;->indexOf(I)I

  move-result v6

  const-string v7, "indexOf: "

  .line 27
  invoke-static {v6}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

  move-result-object v8

  invoke-static {v7, v8}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

  if-gez v6, :cond_0

  .line 29
  invoke-static {v5}, Ljava/lang/String;->valueOf(C)Ljava/lang/String;

  move-result-object v5

  goto :goto_1

  :cond_0
  sub-int/2addr v6, v1

  const-string v5, "abcdefghijklmnopqrstuvwxyz"

  .line 31
  invoke-virtual {v5}, Ljava/lang/String;->length()I

  move-result v5

  rem-int/2addr v6, v5

  if-gez v6, :cond_1

  const-string v5, "abcdefghijklmnopqrstuvwxyz"

  .line 33
  invoke-virtual {v5}, Ljava/lang/String;->toCharArray()[C

  move-result-object v5

  const-string v7, "abcdefghijklmnopqrstuvwxyz"

  invoke-virtual {v7}, Ljava/lang/String;->length()I

  move-result v7

  add-int/2addr v6, v7

  aget-char v5, v5, v6

  invoke-static {v5}, Ljava/lang/String;->valueOf(C)Ljava/lang/String;

  move-result-object v5

  goto :goto_1

  :cond_1
  const-string v5, "abcdefghijklmnopqrstuvwxyz"

  .line 35
  invoke-virtual {v5}, Ljava/lang/String;->toCharArray()[C

  move-result-object v5

  aget-char v5, v5, v6

  invoke-static {v5}, Ljava/lang/String;->valueOf(C)Ljava/lang/String;

  move-result-object v5

  :goto_1
  const-string v6, "letter "

  .line 37
  invoke-static {v6, v5}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

  .line 38
  invoke-virtual {v0, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

  add-int/lit8 v2, v2, 0x1

  goto :goto_0

  :cond_2
  const-string v1, "FLAG: "

  .line 40
  invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

  move-result-object v2

  invoke-static {v1, v2}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

  .line 41
  invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

  move-result-object v0

  return-object v0
.end method
```

Wait, before that did you see those code lines with `Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I` They're responsible for writing to the logcat. So, it seems that the app is logging the flag. In that case we could've solved it using MT Log injection or by fetching its logcat through adb. Or we can solve it by bypassing the second check at of `getData()` at `getFlag()` method also.

Aha, if you look at the decompiled code, you can see that it's doing some weird stuff with the alphabet. It's shifting the letters by the index of the input character, wrapping around the end of the alphabet, and appending the result to a string.

```smali
new-instance v0, Ljava/lang/StringBuilder;
invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V
```

In Java, this corresponds to:

```java
StringBuilder sb = new StringBuilder();
```

So, The method first starts by creating an instance of `StringBuilder` class object, which will be used to build the final unscrambled string. Again if you want to know about `new-instance` you can refer to [new-instance](https://smali.pages.dev/new-instance).

```smali
const-wide v1, 0x4094e40000000000L  # 1337.0
invoke-static {v1, v2}, Ljava/lang/String;->valueOf(D)Ljava/lang/String;
move-result-object v1
```

Here, the value `1337.0` is loaded into registers as a double(why? Lol, I remember telling you about necessary mnemonics in smali right? Did you forget that? Huh, 😒 anyway check `valueOf` contains `D` inside it's brackets and `D` means double (64 bit) in smali). It converts the double into a string representation using `valueOf()`.

In Java:

```java
String str = String.valueOf(1337.0);
```

It's converting `1337.0` into the string `"1337"`

```smali
const-string v2, "\\."
invoke-virtual {v1, v2}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;
move-result-object v1
```

In Java:

```java
String[] parts = str.split("\\.");
```

The method splits the string `"1337.0"` on the `.` character. This results in the array `["1337", "0"]`.

```smali
aget-object v1, v1, v2
invoke-static {v1}, Ljava/lang/Integer;->valueOf(Ljava/lang/String;)Ljava/lang/Integer;
move-result-object v1
invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I
move-result v1
```

The string `"1337"` is converted into an integer:

```java
int num = Integer.valueOf(parts[0]);
```

So, `v1` now holds the integer value `1337`. This number is key to unscrambling the characters.

```smali
const-string v3, "qw4r_q0c_nc4nvx3_0i01_srq82q8mx"
invoke-virtual {v3}, Ljava/lang/String;->toCharArray()[C
move-result-object v3
```

The scrambled string `"qw4r_q0c_nc4nvx3_0i01_srq82q8mx"` is loaded and converted into a character array.

In Java:

```java
char[] scrambled = "qw4r_q0c_nc4nvx3_0i01_srq82q8mx".toCharArray();
```

The method is now preparing to loop through each character and unscramble it.

```smali
:goto_0
if-ge v2, v4, :cond_2
aget-char v5, v3, v2
```

In Java:

```java
for (int i = 0; i < scrambled.length; i++) {
    char c = scrambled[i];
}
```

The loop goes through each character in the scrambled string, storing the current character in `v5`.

```smali
invoke-static {v5}, Ljava/lang/String;->valueOf(C)Ljava/lang/String;
move-result-object v7
invoke-static {v6, v7}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I
```

Skip...

In Java:

```java
Log.e("Char: ", String.valueOf(c));
```

Skip, skip....

```smali
const-string v6, "abcdefghijklmnopqrstuvwxyz"
invoke-virtual {v6, v5}, Ljava/lang/String;->indexOf(I)I
move-result v6
```

The method looks for the character's position in the alphabet. If the character is found in the string `"abcdefghijklmnopqrstuvwxyz"`, its index is returned. In Java:

```java
int index = "abcdefghijklmnopqrstuvwxyz".indexOf(c);
```

If the character is found in the alphabet (i.e., `index >= 0`, using `if-gez` instrunction ), the method adjusts its position based on the value `1337`:

```smali
sub-int/2addr v6, v1
rem-int/2addr v6, v5
```

The first one subtracts `1337` from the index and wraps it around if necessary, then second one using the remainder (`rem-int`) to ensure the new index is within the bounds of the alphabet.

In Java:

```java
int newIndex = (index - 1337) % 26;
if (newIndex < 0) {
    newIndex += 26;
}
```

Finally, the unscrambled character is appended to the `StringBuilder`:

```smali
invoke-virtual {v0, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;
```

In Java:

```java
sb.append(unscrambledChar);
```

This is repeated for every character in the scrambled string.

So, The `unscramble()` method is essentially a Caesar-like cipher, where each character in the scrambled string is shifted by a large value (1337), wrapped around the alphabet if necessary, and logged along the way. It builds the unscrambled string using a `StringBuilder` and finally returns it.

Which will result in: `fl4g_f0r_cr4ckm3_0x01_hgf82f8bm`

It felt overly complicated right?
However, with time and practice, you will get used to it. And when you do instead of wasting time reading understanding this whole process you'll start writing simple scripts to automate these tasks, like at first glance I felt from the method name, double 1337 value and shifting that it's kinds ceaser shift operation, so I would write a simple python script to unscramble it. Like this one below:

```python
scrambled = "qw4r_q0c_nc4nvx3_0i01_srq82q8mx"
alphabet = "abcdefghijklmnopqrstuvwxyz"
shift = 1337

print(
    "".join(
        (alphabet[(alphabet.index(char) - shift) % 26] if char in alphabet else char)
        for char in scrambled
    )
)
```

Hope this helps and you enjoyed reading this.

**Happy Reversing!**