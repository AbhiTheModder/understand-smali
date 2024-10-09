<script>
  import { Hamburger } from "svelte-hamburgers";
  import Highlight, { LineNumbers } from "svelte-highlight";
  import java, { smali } from "svelte-highlight/languages/smali";
  import Menu from "./lib/Menu.svelte";
  import { FooterCopyright } from "flowbite-svelte";
  import "svelte-highlight/styles/github.css";
  import { python } from "svelte-highlight/languages";

  let code = `.method public onClick(Landroid/view/View;)V
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

  if-eqz p1, :cond_47 # Compare if the value in our register p1 is null/0 or not
  # If 0 then go to cond_47
  # else just continue below code flow

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

  :cond_47 # Conditional branch 47 to trigger Error Dialogue
  new-instance p1, Landroid/support/v7/app/AlertDialog$Builder;

  iget-object v0, p0, Lcom/entebra/crackme0x01/MainActivity$1;->this$0:Lcom/entebra/crackme0x01/MainActivity;

  invoke-direct {p1, v0}, Landroid/support/v7/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

  const-string v0, "Nope!" # Error Title Message

  invoke-virtual {p1, v0}, Landroid/support/v7/app/AlertDialog$Builder;->setTitle(Ljava/lang/CharSequence;)Landroid/support/v7/app/AlertDialog$Builder;

  const-string v0, "Wrong password -> No flag :))" # The Error Message

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
  `;

  let code_2 = `for (int i = 0; i < scrambled.length; i++) {
    char c = scrambled[i];
}`;

  let code_3 = `int newIndex = (index - 1337) % 26;
if (newIndex < 0) {
    newIndex += 26;
}`;

  let code_4 = `scrambled = "qw4r_q0c_nc4nvx3_0i01_srq82q8mx"
alphabet = "abcdefghijklmnopqrstuvwxyz"

print(
    "".join(
        (alphabet[(alphabet.index(char) - 1337) % 26] if char in alphabet else char)
        for char in scrambled
    )
)`;

  let code_5 = `.method private unscramble()Ljava/lang/String;
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
.end method`;

  let code_6 = `.class public Lcom/entebra/crackme0x01/Data;
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
.end method`;

  let code_7 = `.method public getFlag(Ljava/lang/String;)Ljava/lang/String;
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
.end method`;

  let code_8 = `  new-instance p1, Lcom/entebra/crackme0x01/FlagGuard;

  invoke-direct {p1}, Lcom/entebra/crackme0x01/FlagGuard;-><init>()V

  iget-object v0, p0, Lcom/entebra/crackme0x01/MainActivity$1;->val$edtTxt:Landroid/widget/EditText;

  invoke-virtual {v0}, Landroid/widget/EditText;->getText()Landroid/text/Editable;

  move-result-object v0

  invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;

  move-result-object v0

  invoke-virtual {p1, v0}, Lcom/entebra/crackme0x01/FlagGuard;->getFlag(Ljava/lang/String;)Ljava/lang/String;

  move-result-object p1`;

  let code_9 = `sb.append(unscrambledChar);`;

  let code_10 = `  invoke-virtual {v0}, Landroid/widget/EditText;->getText()Landroid/text/Editable;
  move-result-object v0`;

  let open;
</script>

<main>
  <div class="hamburger" aria-label="Toggle navigation">
    <Hamburger --border-radius="0px" bind:open --color="#646cff" />
  </div>

  <Menu {open} />

  <div class="content">
    <h1 id="crackme-challenges-for-android">CrackMe challenges for Android</h1>
    <p>
      So let&#39;s walk through the process of cracking an Android app. Taking
      some simple crackmes first, then moving on to more complex ones.
    </p>
    <h2 id="crackme0x01">crackme0x01</h2>
    <ul>
      <li>Author: <a href="https://github.com/num1r0">@num1r0</a></li>
      <li>
        Source: <a href="https://github.com/num1r0/android_crackmes.git"
          >https://github.com/num1r0/android_crackmes.git</a
        >
      </li>
    </ul>
    <h3 id="description">Description</h3>
    <p>
      The very basic crackme challenge. Gives you chance to get familiar with
      all Android RE tools
    </p>
    <h3 id="solution">Solution</h3>
    <p>
      As the description says, it&#39;s a very basic crackme. But it&#39;s a
      good starting point for learning Android RE.
    </p>
    <p>
      Let&#39;s first install the app on our device and run it. And we&#39;re
      presented with a simple password input screen:
    </p>
    <p>
      <img
        src="https://raw.githubusercontent.com/wiki/AbhiTheModder/understand-smali/images/crackmes/crackme0x01.png"
        alt="password input screen"
      />
    </p>
    <p>Let&#39;s try to enter some random password and see what happens:</p>
    <p>
      <img
        src="https://raw.githubusercontent.com/wiki/AbhiTheModder/understand-smali/images/crackmes/crackme0x01_1.png"
        alt="alt text"
      />
      <br />We get a toast message saying &quot;Wrong password -> No flag
      :))&quot;. So let&#39;s try to find out how the app checks the password.
    </p>
    <p>
      Now let&#39;s decompile the apk first. For that we have plenty of tools
      available:
    </p>
    <ul>
      <li><a href="https://apktool.org/">apktool</a></li>
      <li>
        <a href="https://github.com/skylot/jadx">jadx</a> |
        <a href="https://github.com/skylot/jadx-gui">jadx-gui</a>
      </li>
      <li><a href="https://github.com/pxb1988/dex2jar">dex2jar</a></li>
      <li><a href="https://github.com/Storyyeller/enjarify">enjarify</a></li>
      <li><a href="http://java-decompiler.github.io/">jd-gui</a></li>
      <li><a href="http://www.benf.org/other/cfr/">CFR</a></li>
      <li>
        <a
          href="https://web.archive.org/web/20200722205047/https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler"
          >procyon</a
        >
      </li>
      <li>
        <a
          href="https://github.com/JetBrains/intellij-community/tree/master/plugins/java-decompiler"
          >fernflower</a
        >
      </li>
      <li><a href="https://varaneckas.com/jad/">jad</a></li>
      <li>
        <a
          href="https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javap.html"
          >javap</a
        >
      </li>
      <li><a href="https://github.com/ingokegel/jclasslib">jclasslib</a></li>
      <li>
        <a href="https://github.com/Storyyeller/Krakatau.git">Krakatau</a>
      </li>
      <li>
        <a href="https://github.com/bradsdavis/candle-decompiler.git">Candle</a>
      </li>
      <li>
        <a href="https://github.com/JesusFreke/smali.git">Smali/BakSmali</a>
      </li>
      <li>
        <a href="https://github.com/Konloch/bytecode-viewer">bytecode-viewer</a>
      </li>
      <li><a href="https://www.pnfsoftware.com/">JEB</a></li>
      <li>
        <a href="https://github.com/REAndroid/APKEditor.git">APKEditor</a>
      </li>
      <li><a href="https://apklab.surendrajat.xyz/">APKLab</a></li>
    </ul>
    <p>
      Also, we&#39;ve our own <a href="https://t.me/RevEngiBot">RevEngi Bot</a> Just
      inside Telegram for this task 😂
    </p>
    <p>
      My Personal Favorites are <code class="code">apktool</code>,<code
        class="code">APKEditor</code
      >,<code class="code">JADX</code>,<code class="code">baksmali</code>(for
      this you need to extract
      <code class="code">.dex</code> files out of apk), and MT of course in Android
      side.
    </p>
    <p>
      Now, without further ado, whichever tool you&#39;ve used doesn&#39;t
      matter what our goal here is to first go the place where the error string
      is or the place where the password is checked. I&#39;ll be assuming
      you&#39;re familiar with how to search for strings at least. So, after
      search we see that it&#39;s result leads to the class <code class="code"
        >MainActivity$1</code
      >
      and the method <code class="code">onClick</code>:
    </p>
    <Highlight language={smali} {code} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={false}
        style="margin-bottom: 1rem;"
      /></Highlight
    >
    <p>
      When you look at it, it&#39;ll feel like a mess, but if you look at the <code
        class="code">:cond_47</code
      >(remember <code class="code">:cond_</code> is the usual format the
      numbering can vary on your decompiled code) label, you&#39;ll see that
      it&#39;s the condition which is responsible for error dialogue message.
      So, If we want to just crack this check one of the most basic and easiest
      approach is nullifying this check. Just remove that line of
      <code class="code">if-eqz p1, :cond_47</code>, and you&#39;ll be able to
      bypass the check. But, we&#39;re not here to just crack the check,
      we&#39;re here to learn. Also, if you just do this you&#39;ll be able to
      bypass the check and get the &quot;Congratulations&quot; dialogue, but
      you&#39;ll not be able to get the flag.
    </p>
    <p>
      <img
        src="https://raw.githubusercontent.com/wiki/AbhiTheModder/understand-smali/images/crackmes/crackme0x01_2.png"
        alt="alt text"
      />
    </p>
    <p>
      Hahahaha 😂, I know it&#39;s a bit of a disappointment, but it&#39;s not
      the end. Let&#39;s understand the flow of the code a bit more.
    </p>
    <p>
      So, how is <code class="code">:cond_47</code> triggered? Well, if you look
      at the
      <code class="code">if-eq</code>
      instruction just above few lines of the code, you&#39;ll see that it&#39;s
      comparing the password you entered with the correct password. If they&#39;re
      not equal, it&#39;ll branch to <code class="code">:cond_47</code> and show
      the error message. So, how do we find the correct password?
    </p>
    <p>The main piece of code:</p>
    <Highlight language={smali} code={code_8} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={false}
        style="margin-bottom: 1rem;"
      /></Highlight
    >
    <p>
      The first line is creating a new instance of <code class="code"
        >FlagGuard</code
      >
      class. The next line is calling the constructor of
      <code class="code">FlagGuard</code>
      class. To Understand <code class="code">new-instance</code> better you can
      read
      <a href="https://smali.pages.dev/new-instance">new-instance</a> i&#39;ve made
      sure to use this same example to make it easier for you to understand.
    </p>
    <p>
      Now that If you&#39;re done with understanding <code class="code"
        >new-instance</code
      > let&#39;s move on to the next line(s).
    </p>
    <h2 id="so-whats-happening-with-the-rest-of-the-code">
      So, What’s Happening with the Rest of the Code?
    </h2>
    <p>Let’s break down the remaining lines of the Smali code:</p>
    <Highlight
      language={smali}
      code="iget-object v0, p0, Lcom/entebra/crackme0x01/MainActivity$1;->val$edtTxt:Landroid/widget/EditText;"
    />
    <p>
      This grabs the <code class="code">EditText</code> widget of
      <code class="code">android.widget.EditText</code>
      and puts it into the <code class="code">v0</code> register. In Java, this would
      be something like this:
    </p>
    <Highlight language={java} code="EditText editText = this.val$edtTxt;" />
    <p>
      So, The box where we enter the password is stored in <code class="code"
        >v0</code
      > register.
    </p>
    <p>Next:</p>
    <Highlight language={smali} code={code_10} />
    <p>
      This calls the <code class="code">getText()</code> method on the
      <code class="code">EditText</code>
      object (<code class="code">v0</code>) and stores the result (the text
      inside the
      <code class="code">EditText</code>) back in <code class="code">v0</code>.
      In Java:
    </p>
    <Highlight language={java} code="Editable text = editText.getText();" />
    <Highlight
      language={smali}
      code=" invoke-virtual {`{v0}`}, Landroid/widget/EditText;->getText()Landroid/text/Editable;
move-result-object v0"
    />
    <p>
      Then, the text from the <code class="code">EditText</code> is stored in
      <code class="code">v0</code>
      register.
    </p>
    <p>The text is then converted to a string:</p>
    <Highlight
      language={smali}
      code=" invoke-virtual {`{v0}`}, Landroid/text/Editable;->toString()Ljava/lang/String;
move-result-object v0"
    />
    <p>In Java:</p>
    <p>
      <strong>Why?</strong> Well 🤨, because the
      <code class="code">getFlag()</code>
      method of <code class="code">FlagGuard</code> expects a
      <code class="code">String</code>
      as an argument, so our password needs to be a
      <code class="code">String</code>.
    </p>
    <p>
      Finally, this line passes the string from the <code class="code"
        >EditText</code
      >
      to the
      <code class="code">getFlag()</code>
      method of <code class="code">FlagGuard</code>:
    </p>
    <Highlight
      language={smali}
      code=" invoke-virtual {`{p1, v0}`}, Lcom/entebra/crackme0x01/FlagGuard;->getFlag(Ljava/lang/String;)Ljava/lang/String;
move-result-object p1"
    />
    <p>In Java:</p>
    <Highlight
      language={java}
      code="String flag = flagGuard.getFlag(textString);"
    />
    <p>
      Here, the <code class="code">getFlag()</code> method is called on the
      <code class="code">FlagGuard</code>
      object (stored in <code class="code">p1</code>), and the result (the flag)
      is stored in
      <code class="code">p1</code>.
    </p>
    <h2 id="so-how-do-we-find-the-correct-password">
      So, How Do We Find the Correct Password?
    </h2>
    <p>
      Well, we can&#39;t just look at the code and see what the password is. We
      need to analyze the <code class="code">getFlag()</code> method to see how
      it checks the password. Since now it&#39;s clear from our initial analysis
      also that it&#39;s return value was being compared with 0 or not. 0 means
      the password is incorrect and anything else means the password is correct.
      We tried to bypass the check 😜, but it didn&#39;t work. So, let&#39;s
      analyze the <code class="code">getFlag()</code> method.
    </p>
    <h2 id="analyzing-the-getflag-method">
      Analyzing the <code class="code">getFlag()</code> Method
    </h2>
    <p>
      <code class="code">getFlag()</code> method is defined in
      <code class="code">FlagGuard</code> class. Let&#39;s open it up and see what&#39;s
      happening there.
    </p>
    <Highlight language={smali} code={code_7} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={false}
        style="margin-bottom: 1rem;"
      /></Highlight
    >
    <p>
      Here, again we see that there&#39;s an instance of Data class has been
      created then from it <code class="code">getData()</code> is being used to
      maybe for now let&#39;s assume to get some data from our string and return
      0 or 1. If it returns 1 then <code class="code">unscramble()</code> method
      is being called which is returning the flag. We&#39;ll look at
      <code class="code">unscramble()</code>
      method later, let&#39;s first analyze <code class="code">getData()</code> method.
    </p>
    <h2 id="analyzing-the-getdata-method">
      Analyzing the <code class="code">getData()</code> Method
    </h2>
    <p>If we check the whole <code class="code">Data</code> class:</p>
    <Highlight language={smali} code={code_6} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={false}
        style="margin-bottom: 1rem;"
      /></Highlight
    >
    <p>
      Aha, 🤯 it&#39;s returning the hard-coded string <code class="code"
        >s3cr37_p4ssw0rd_1337</code
      >
      which seems to be most likely as our password. So, we need to pass this string
      to <code class="code">getFlag()</code> method to get the flag. Let&#39;s try
      it out.
    </p>
    <p>
      <img
        src="https://raw.githubusercontent.com/wiki/AbhiTheModder/understand-smali/images/crackmes/crackme0x01_3.png"
        alt="alt text"
      />
    </p>
    <p>and wohooo🥳, we got the flag.</p>
    <h2 id="analyzing-the-unscramble-method">
      Analyzing the <code class="code">unscramble()</code> Method
    </h2>
    <p>
      It&#39;s good 🤩 that we got the flag, but it&#39;s always good to know
      how it&#39;s being unscrambled. Let&#39;s check the <code class="code"
        >unscramble()</code
      > method.
    </p>
    <Highlight language={smali} code={code_5} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={false}
        style="margin-bottom: 1rem;"
      /></Highlight
    >
    <p>
      Wait, before that did you see those code lines with <code class="code"
        >Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I</code
      >
      They&#39;re responsible for writing to the logcat. So, it seems that the app
      is logging the flag. In that case we could&#39;ve solved it using MT Log injection
      or by fetching its logcat through adb. Or we can solve it by bypassing the
      second check at of <code class="code">getData()</code> at
      <code class="code">getFlag()</code> method also.
    </p>
    <p>
      Aha, if you look at the decompiled code, you can see that it&#39;s doing
      some weird stuff with the alphabet. It&#39;s shifting the letters by the
      index of the input character, wrapping around the end of the alphabet, and
      appending the result to a string.
    </p>
    <Highlight
      language={smali}
      code=" new-instance v0, Ljava/lang/StringBuilder;
invoke-direct {`{v0}`}, Ljava/lang/StringBuilder;-><init>()V"
    />
    <p>In Java, this corresponds to:</p>
    <Highlight language={java} code="StringBuilder sb = new StringBuilder();" />
    <p>
      So, The method first starts by creating an instance of <code class="code"
        >StringBuilder</code
      >
      class object, which will be used to build the final unscrambled string. Again
      if you want to know about <code class="code">new-instance</code> you can
      refer to
      <a href="https://smali.pages.dev/new-instance">new-instance</a>.
    </p>
    <Highlight
      language={smali}
      code=" const-wide v1, 0x4094e40000000000L  # 1337.0
invoke-static {`{v1, v2}`}, Ljava/lang/String;->valueOf(D)Ljava/lang/String;
move-result-object v1"
    />
    <p>
      Here, the value <code class="code">1337.0</code> is loaded into registers
      as a double(why? Lol, I remember telling you about necessary mnemonics in
      smali right? Did you forget that? Huh, 😒 anyway check
      <code class="code">valueOf</code>
      contains <code class="code">D</code> inside it&#39;s brackets and
      <code class="code">D</code>
      means double (64 bit) in smali). It converts the double into a string
      representation using <code class="code">valueOf()</code>.
    </p>
    <p>In Java:</p>
    <Highlight language={java} code="String str = String.valueOf(1337.0);" />
    <p>
      It&#39;s converting <code class="code">1337.0</code> into the string
      <code class="code">&quot;1337&quot;</code>
    </p>
    <Highlight
      language={smali}
      code=" const-string v2, &quot;\\.&quot;
invoke-virtual {`{v1, v2}`}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;
move-result-object v1"
    />
    <p>In Java:</p>
    <Highlight
      language={java}
      code="String[] parts = str.split(&quot;\\.&quot;);"
    />
    <p>
      The method splits the string <code class="code">&quot;1337.0&quot;</code>
      on the
      <code class="code">.</code>
      character. This results in the array
      <code class="code">[&quot;1337&quot;, &quot;0&quot;]</code>.
    </p>
    <Highlight
      language={smali}
      code=" aget-object v1, v1, v2
invoke-static {`{v1}`}, Ljava/lang/Integer;->valueOf(Ljava/lang/String;)Ljava/lang/Integer;
move-result-object v1
invoke-virtual {`{v1}`}, Ljava/lang/Integer;->intValue()I
move-result v1"
    />
    <p>
      The string <code class="code">&quot;1337&quot;</code> is converted into an
      integer:
    </p>
    <Highlight language={java} code="int num = Integer.valueOf(parts[0]);" />
    <p>
      So, <code class="code">v1</code> now holds the integer value
      <code class="code">1337</code>. This number is key to unscrambling the
      characters.
    </p>
    <Highlight
      language={smali}
      code=" const-string v3, &quot;qw4r_q0c_nc4nvx3_0i01_srq82q8mx&quot;
invoke-virtual {`{v3}`}, Ljava/lang/String;->toCharArray()[C
move-result-object v3"
    />
    <p>
      The scrambled string <code class="code"
        >&quot;qw4r_q0c_nc4nvx3_0i01_srq82q8mx&quot;</code
      > is loaded and converted into a character array.
    </p>
    <p>In Java:</p>
    <Highlight
      language={java}
      code="char[] scrambled = &quot;qw4r_q0c_nc4nvx3_0i01_srq82q8mx&quot;.toCharArray();"
    />
    <p>
      The method is now preparing to loop through each character and unscramble
      it.
    </p>
    <Highlight
      language={smali}
      code=" :goto_0
if-ge v2, v4, :cond_2
aget-char v5, v3, v2"
    />
    <p>In Java:</p>
    <Highlight language={java} code={code_2} />
    <p>
      The loop goes through each character in the scrambled string, storing the
      current character in <code class="code">v5</code>.
    </p>
    <Highlight
      language={smali}
      code=" invoke-static {`{v5}`}, Ljava/lang/String;->valueOf(C)Ljava/lang/String;
move-result-object v7
invoke-static {`{v6, v7}`}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I"
    />
    <p>Skip...</p>
    <p>In Java:</p>
    <Highlight
      language={java}
      code="Log.e(&quot;Char: &quot;, String.valueOf(c));"
    />
    <p>Skip, skip....</p>
    <Highlight
      language={smali}
      code=" const-string v6, &quot;abcdefghijklmnopqrstuvwxyz&quot;
invoke-virtual {`{v6, v5}`}, Ljava/lang/String;->indexOf(I)I
move-result v6"
    />
    <p>
      The method looks for the character&#39;s position in the alphabet. If the
      character is found in the string <code class="code"
        >&quot;abcdefghijklmnopqrstuvwxyz&quot;</code
      >, its index is returned. In Java:
    </p>
    <Highlight
      language={java}
      code="int index = &quot;abcdefghijklmnopqrstuvwxyz&quot;.indexOf(c);"
    />
    <p>
      If the character is found in the alphabet (i.e., <code class="code"
        >index >= 0</code
      >, using <code class="code">if-gez</code> instrunction ), the method
      adjusts its position based on the value <code class="code">1337</code>:
    </p>
    <Highlight
      language={smali}
      code=" sub-int/2addr v6, v1
rem-int/2addr v6, v5"
    />
    <p>
      The first one subtracts <code class="code">1337</code> from the index and
      wraps it around if necessary, then second one using the remainder (<code
        class="code">rem-int</code
      >) to ensure the new index is within the bounds of the alphabet.
    </p>
    <p>In Java:</p>
    <Highlight language={java} code={code_3} />
    <p>
      Finally, the unscrambled character is appended to the <code class="code"
        >StringBuilder</code
      >:
    </p>
    <Highlight
      language={smali}
      code="invoke-virtual {`{v0, v5}`}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;"
    />
    <p>In Java:</p>
    <Highlight language={java} code={code_9} />
    <p>This is repeated for every character in the scrambled string.</p>
    <p>
      So, The <code class="code">unscramble()</code> method is essentially a
      Caesar-like cipher, where each character in the scrambled string is
      shifted by a large value (1337), wrapped around the alphabet if necessary,
      and logged along the way. It builds the unscrambled string using a
      <code class="code">StringBuilder</code> and finally returns it.
    </p>
    <p>
      Which will result in: <code class="code"
        >fl4g_f0r_cr4ckm3_0x01_hgf82f8bm</code
      >
    </p>
    <p>
      It felt overly complicated right? However, with time and practice, you
      will get used to it. And when you do instead of wasting time reading
      understanding this whole process you&#39;ll start writing simple scripts
      to automate these tasks, like at first glance I felt from the method name,
      double 1337 value and shifting that it&#39;s kinds ceaser shift operation,
      so I would write a simple python script to unscramble it. Like this one
      below:
    </p>
    <Highlight language={python} code={code_4} />
    <p>Hope this helps and you enjoyed reading this.</p>
    <p><strong>Happy Reversing!</strong></p>
  </div>

  <!-- Comment section -->
  <div
    data-chirpy-theme="system"
    data-chirpy-comment="true"
    id="chirpy-comment"
  ></div>
</main>

<a class="Back" href="/4" aria-label="Go To Previous Page">
  <button> ⇦ </button>
</a>

<a class="Next" href="/" aria-label="There are no next pages, Go To Home Page">
  <button> ⇨ </button>
</a>

<FooterCopyright
  aClass="hover:underline"
  href="https://github.com/AbhiTheModder"
  by="AbhiTheModder"
  year={2024}
  copyrightMessage=""
/>

<style>
  .content {
    text-align: left;
    word-wrap: break-word;
  }

  .Next,
  .Back {
    position: fixed;
    bottom: 0;
    margin-bottom: 20px;
  }

  .code {
    color: grey;
  }

  .Next {
    right: 0;
    margin-right: 20px;
  }

  .Back {
    left: 0;
    margin-left: 20px;
  }

  .hamburger {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
