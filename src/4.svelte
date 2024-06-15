<script>
  import { Hamburger } from 'svelte-hamburgers';
  import Menu from './lib/Menu.svelte';

  let open;
  import { FooterCopyright } from 'flowbite-svelte';
</script>

<main>
  <div class="hamburger">
    <Hamburger
    --border-radius="0px"
    bind:open
    --color="#646cff" /></div>

  <Menu bind:open />
  <div class="content">
    <p><strong>NOTE:</strong> </p>
    <ul>
    <li>As we&#39;ve already discussed a bit about param registers on Day 3 of local registers we&#39;ll be just continuing it with a more bite, yeah bite,cheese burger to it. Let&#39;s start lol. 😂</li>
    <li>Oh i forgot, it&#39;s WCC time so let&#39;s go with cricket as an example. </li>
    <li>This page has been my labor of love. I’ve wiped the slate clean, rewritten everything from scratch countless times, and scoured the internet for articles (you can find them at the bottom of this page) to get it just right. Fingers crossed that you enjoy it! 😊</li>
    </ul>
    <p>Imagine you&#39;re the captain of a cricket team, and your players are the registers. Now, let&#39;s play a match in the Android stadium!</p>
    <p><strong>The Team Line-up:</strong>
    In Smali, which is like the playbook for Android&#39;s Dalvik Virtual Machine (DVM), we have a special team of players called registers. These registers are like your cricket players, each with a unique role. Some are batsmen (local registers <code>v0</code>, <code>v1</code>, <code>v2</code>,...), some are bowlers (parameter registers <code>p0</code>, <code>p1</code>, <code>p2</code>,...), and one is the wicketkeeper (the special register <code>ret</code> for return values).</p>
    <p><strong>The Match Strategy:</strong>
    When you&#39;re about to bowl (invoke a method), you need to decide which players (registers) will handle the ball (method parameters). The parameter registers (<code>p0</code>, <code>p1</code>, <code>p2</code>,...) are your frontline bowlers. They&#39;re the ones who receive the ball first and pass it on to the batsmen (local registers) to score runs (process the data).</p>
    <p><strong>Opening Bowlers:</strong>
    The <code>p</code> registers are like your opening bowlers. They&#39;re the first to get into action. In a non-static method, <code>p0</code> is the captain of the team (the <code>this</code> reference in Java), always leading from the front. For static methods, <code>p1</code> takes the lead as the first parameter register.</p>
    <p><strong>The Bowling Action:</strong>
    Just like in cricket, where you have to bowl according to the rules, in Smali, you have to follow the ARM&#39;s calling convention. This means you set your bowlers (<code>p</code> registers) in the right order before delivering the ball (invoking the method). If you&#39;re bowling a long or double delivery (64-bit values), you need two bowlers (registers) working in tandem to handle it.</p>
    <p><strong>Fielding Adjustments:</strong>
    Sometimes, in the middle of the game, you realize you need an extra fielder (register). In Smali, this is like needing an extra register while editing code. You can&#39;t just add a player without changing the field setting (renumbering the registers). But, if you&#39;ve used the <code>p</code> naming scheme, it&#39;s like having versatile players who can adapt to any position on the field without confusion.</p>
    <p><strong>The Winning Shot:</strong>
    In the end, it&#39;s all about scoring runs (returning values). The special wicketkeeper register (<code>ret</code>) is there to catch the ball (value) and make the winning run (return the result).</p>
    <p><strong>Post-Match Analysis:</strong>
    After the game, you want to review the match footage (decompile the code). Tools like baksmali help you separate the players (registers) into locals and parameters, making it easier to analyze their performance.</p>
    <p><strong>Conclusion:</strong>
    Understanding parameter registers in Smali is like knowing your cricket team inside out. It helps you play a better game (write and debug Android apps) and makes you a champion in the Android league!</p>
    <ul>
    <li><p><strong>Handling &#39;this&#39; Type Registers</strong>: In DVM, for every instance (non-static) method, the first parameter is a reference to the method&#39;s object, known as the <code>this</code> reference. It is stored in the <code>p0</code> register for instance methods. This allows methods to access their own fields and other instance-specific data.</p>
    </li>
    <li><p><strong>Is p0 Special?</strong>: The <code>p0</code> register is not inherently special; it&#39;s simply a convention used to refer to the first parameter register, which holds the <code>this</code> reference for instance (non-static) methods. <code>p0</code> can be repurposed within the code, indicating flexibility in its use.</p>
    </li>
    <li><p><strong>Parameter Registers Description and Function</strong>: Parameter registers in Smali, denoted by <code>p0</code>, <code>p1</code>, <code>p2</code>, etc., are used to store method parameters. For instance methods, <code>p0</code> holds the object reference, and for static methods, <code>p1</code> becomes the first parameter register. These registers are crucial for passing arguments to methods and are stored in the last registers of the method&#39;s register set.</p>
    </li>
    <li><p><strong>Crucial Use Case and Benefits</strong>: The introduction of the <code>p</code> naming scheme for parameter registers was to address the inconvenience of renumbering registers when editing Smali code. If additional registers are needed, using the <code>p</code> naming scheme allows for easy adjustment of the total number of registers without renumbering existing ones. This simplifies code modifications and enhances readability by visually distinguishing between local and argument registers.</p>
    </li>
    </ul>
  </div>
  <details>
    <summary>Some external references used for registers explanation</summary>
    <div class="references">
        <br>(1) android - How does the Dalvik VM save and restore its registers
        <br><a href="https://stackoverflow.com/questions/8721628/how-does-the-dalvik-vm-save-and-restore-its-registers-between-method-calls">https://stackoverflow.com/questions/8721628/how-does-the-dalvik-vm-save-and-restore-its-registers-between-method-calls</a>
        <br>(2) Dalvik virtual machine instruction set and architecture.
        <br><a href="https://stackoverflow.com/questions/17916910/dalvik-virtual-machine-instruction-set-and-architecture">https://stackoverflow.com/questions/17916910/dalvik-virtual-machine-instruction-set-and-architecture</a>
        <br>(3) Dalvik VM Instruction Formats - Vanderbilt University.
        <br><a href="http://www.dre.vanderbilt.edu/~schmidt/android/android-4.0/dalvik/docs/instruction-formats.html">http://www.dre.vanderbilt.edu/~schmidt/android/android-4.0/dalvik/docs/instruction-formats.html</a>
        <br>(4) Registers · JesusFreke/smali Wiki · GitHub.
        <br><a href="https://github.com/JesusFreke/smali/wiki/Registers">https://github.com/JesusFreke/smali/wiki/Registers</a>
        <br>(5) Can you help me understand this smali code?
        <br><a href="https://www.reddit.com/r/androiddev/comments/8nmr9b/can_you_help_me_understand_this_smali_code/">https://www.reddit.com/r/androiddev/comments/8nmr9b/can_you_help_me_understand_this_smali_code/</a>
        <br>(6) How do i set these tricky boolean values to true in Smali-Dalvik?. 
        <br><a href="https://reverseengineering.stackexchange.com/questions/31754/how-do-i-set-these-tricky-boolean-values-to-true-in-smali-dalvik">https://reverseengineering.stackexchange.com/questions/31754/how-do-i-set-these-tricky-boolean-values-to-true-in-smali-dalvik</a>
        <br>(7) Understanding the Dalvik bytecode with the Dedexer tool 
        <br><a href="https://www.slideshare.net/slideshow/understanding-the-dalvik-bytecode-with-the-dedexer-tool/2634903">https://www.slideshare.net/slideshow/understanding-the-dalvik-bytecode-with-the-dedexer-tool/2634903</a>
        <br>(8) SymDroid: Symbolic Execution for Dalvik Bytecode - Tufts University.
        <br><a href="https://www.cs.tufts.edu/~jfoster/papers/cs-tr-5022.pdf">https://www.cs.tufts.edu/~jfoster/papers/cs-tr-5022.pdf</a>
        <br>(9) Dalvik bytecode format | Android Open Source Project.
        <br><a href="https://source.android.com/docs/core/runtime/dalvik-bytecode">https://source.android.com/docs/core/runtime/dalvik-bytecode</a>
        <br>(10) Example Smali - androidcracking. 
        <br><a href="http://androidcracking.blogspot.com/2010/09/examplesmali.html">http://androidcracking.blogspot.com/2010/09/examplesmali.html</a>
        <br>(11) Dalvik Opcodes - pallergabor
        <br><a href="http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html">http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html</a>
        <br>(12) Why is this an invalid smali register?
        <br><a href="https://www.exchangetuts.com/why-is-this-an-invalid-smali-register-1641296524602199">https://www.exchangetuts.com/why-is-this-an-invalid-smali-register-1641296524602199</a>
        <br>(13) How does Dalvik handle &#39;this&#39; registers?
        <br><a href="https://calebfenton.github.io/2016/02/21/how-does-dalvik-handle-this-registers">https://calebfenton.github.io/2016/02/21/how-does-dalvik-handle-this-registers</a>
        <br>(14) Modifying smali file
        <br><a href="https://stackoverflow.com/questions/12648196/modifying-smali-files">https://stackoverflow.com/questions/12648196/modifying-smali-files</a>
    </div>
  </details>
  <div
    data-chirpy-theme="system"
    data-chirpy-comment="true"
    id="chirpy-comment"
  ></div>
</main>

<a class="Back" href="/">
  <button>
    ⇦
  </button>
</a>

<a class="Next" href="/5">
  <button>
    ⇨
  </button>
</a>

<FooterCopyright aClass="hover:underline" href="https://github.com/AbhiTheModder" by="AbhiTheModder" year={2024} copyrightMessage= "" />

<style>
  .content {
    text-align: left;
    word-wrap: break-word;
  }
  .references {
    text-align: left;
    font-size: smaller;
    padding: 5px;
    font-weight: 300;
  }
  .Next {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-bottom:20px;
    margin-right:20px;
  }
  .Back {
    position: fixed;
    bottom: 0;
    left: 0;
    margin-bottom:20px;
    margin-left:20px;
  }
  .hamburger {
    position: absolute;
    top:0;
    left:0;
  }
</style>
