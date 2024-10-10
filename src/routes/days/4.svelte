<script>
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "../../lib/Menu.svelte";

  let open;
  import { FooterCopyright } from "flowbite-svelte";
</script>

<main>
  <div class="hamburger" aria-label="Toggle navigation">
    <Hamburger --border-radius="0px" bind:open --color="#646cff" />
  </div>

  <Menu {open} />
  <div class="content">
    <p><strong>NOTE:</strong></p>
    <ul>
      <li>
        <strong><code>non-static methods</code></strong> are also called
        <strong><code>instance methods</code></strong>.
      </li>
      <li>
        As we&#39;ve already discussed a bit about param registers on Day 3 of
        local registers we&#39;ll be just continuing it with a more bit, yeah
        cheese burger. Let&#39;s start lol. 😂
      </li>
      <li>
        Oh i forgot, it&#39;s WCC time so let&#39;s go with cricket as an
        example.
      </li>
      <li>
        This page has been my labor of love. I’ve wiped the slate clean,
        rewritten everything from scratch countless times, and scoured the
        internet for articles (you can find them at the bottom of this page) to
        get it just right. Fingers crossed that you enjoy it! 😊
      </li>
    </ul>
    <p>
      Imagine you&#39;re the captain of a cricket team, and your players are the
      registers. Now, let&#39;s play a match in the Android stadium!
    </p>
    <p>
      <strong>The Team Line-up:</strong>
      In Smali, which is like the playbook for Android&#39;s Dalvik Virtual Machine
      (DVM), we have a special team of players called registers. These registers
      are like your cricket players, each with a unique role. Some are batsmen (local
      registers <code>v0</code>, <code>v1</code>, <code>v2</code>,...), some are
      bowlers (parameter registers <code>p0</code>, <code>p1</code>,
      <code>p2</code>,...), and one is the wicketkeeper (the special register
      <code>ret</code> for return values).
    </p>
    <p>
      <strong>The Match Strategy:</strong>
      When you&#39;re about to bowl (invoke a method), you need to decide which players
      (registers) will handle the ball (method parameters). The parameter registers
      (<code>p0</code>, <code>p1</code>, <code>p2</code>,...) are your frontline
      bowlers. They&#39;re the ones who receive the ball first and pass it on to
      the batsmen (local registers) to score runs (process the data).
    </p>
    <p>
      <strong>Opening Bowlers:</strong>
      The <code>p</code> registers are like your opening bowlers. They&#39;re
      the first to get into action. In a non-static method, <code>p0</code> is
      the captain of the team (the <code>this</code> reference in Java), always
      leading from the front. For static methods, <code>p1</code> takes the lead
      as the first parameter register.
    </p>
    <p>
      <strong>The Bowling Action:</strong>
      Just like in cricket, where you have to bowl according to the rules, in Smali,
      you have to follow the it&#39;s calling convention. This means you set your
      bowlers (<code>p</code> registers) in the right order before delivering the
      ball (invoking the method). If you&#39;re bowling a long or double delivery
      (64-bit values), you need two bowlers (registers) working in tandem to handle
      it.
    </p>
    <p>
      <strong>Fielding Adjustments:</strong>
      Sometimes, in the middle of the game, you realize you need an extra fielder
      (register). In Smali, this is like needing an extra register while editing
      code. You can&#39;t just add a player without changing the field setting (renumbering
      the registers). But, if you&#39;ve used the <code>p</code> naming scheme, it&#39;s
      like having versatile players who can adapt to any position on the field without
      confusion.
    </p>
    <p>
      <strong>The Winning Shot:</strong>
      In the end, it&#39;s all about scoring runs (returning values). The special
      wicketkeeper register (<code>ret</code>) is there to catch the ball
      (value) and make the winning run (return the result).
    </p>
    <p>
      <strong>Post-Match Analysis:</strong>
      After the game, you want to review the match footage (decompile the code).
      Tools like baksmali help you separate the players (registers) into locals and
      parameters, making it easier to analyze their performance.
    </p>
    <p>
      <strong>Conclusion:</strong>
      Understanding parameter registers in Smali is like knowing your cricket team
      inside out. It helps you play a better game (write and debug Android apps)
      and makes you a champion in the Android league!
    </p>
    <ul>
      <li>
        <p>
          <strong>Handling &#39;this&#39; Type Registers</strong>: In DVM, for
          every instance (non-static) method, the first parameter is a reference
          to the method&#39;s object, known as the <code>this</code> reference.
          It is stored in the <code>p0</code> register for instance methods. This
          allows methods to access their own fields and other instance-specific data.
        </p>
      </li>
      <li>
        <p>
          <strong>Is p0 Special?</strong>: The <code>p0</code> register is not
          inherently special; it&#39;s simply a convention used to refer to the
          first parameter register, which holds the <code>this</code> reference
          for instance (non-static) methods. <code>p0</code> can be repurposed within
          the code, indicating flexibility in its use.
        </p>
      </li>
      <li>
        <p>
          <strong>Parameter Registers Description and Function</strong>:
          Parameter registers in Smali, denoted by <code>p0</code>,
          <code>p1</code>, <code>p2</code>, etc., are used to store method
          parameters. For instance methods, <code>p0</code> holds the object
          reference, and for static methods, <code>p1</code> becomes the first parameter
          register. These registers are crucial for passing arguments to methods
          and are stored in the last registers of the method&#39;s register set.
        </p>
      </li>
      <li>
        <p>
          <strong>Crucial Use Case and Benefits</strong>: The introduction of
          the <code>p</code> naming scheme for parameter registers was to
          address the inconvenience of renumbering registers when editing Smali
          code. If additional registers are needed, using the <code>p</code> naming
          scheme allows for easy adjustment of the total number of registers without
          renumbering existing ones. This simplifies code modifications and enhances
          readability by visually distinguishing between local and argument registers.
        </p>
      </li>
    </ul>
    <p><strong>Handling values for registers</strong></p>
    <p>
      Well, by far at this point you would've understand some points, like:
      <li id="regval">Registers can have any type value</li>
      <li id="regval">Registers are always of 32-bits in dalvik-bytecode</li>
      <strong
        >So, How does we handle values like Long(l) and Double(J) in Smali, as
        we know they have 64-bits, right?</strong
      >
      <br /> Yes, exactly what you're thinking right now, just by using
      <strong>two registers</strong> for the value.
    </p>
    <p>
      There's a very good explanation both in text and video on this, you can
      find it here:
      <br />
      <li id="regvalexp">
        <a href="https://t.me/TDOhex_Discussion/21844">Video explanation</a>
      </li>
      <li id="regvalexp">
        <a href="https://t.me/TDOhex_Discussion/21971">Text explanation</a>
      </li>
      Make sure to focus on the part where Long value for DateTime is being manipulated
      in the video that's the main point.
      <br /><img
        src="https://te.legra.ph/file/555562113ab157dac645a.jpg"
        alt="QNA"
        width="90%"
      />
    </p>
  </div>
  <div
    data-chirpy-theme="system"
    data-chirpy-comment="true"
    id="chirpy-comment"
  ></div>
</main>

<a class="Back" href="/days/3" aria-label="Go To Previous Page">
  <button> ⇦ </button>
</a>

<a class="Next" href="/days/5" aria-label="Go To Next Page">
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

  #regval {
    text-align: left;
    font-size: smaller;
    padding: 5px;
    font-weight: 300;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }

  #regvalexp {
    text-decoration: dotted underline;
    list-style: square;
    text-align: left;
    font-size: smaller;
    padding: 5px;
    font-weight: 300;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }

  .Next {
    right: 0;
    margin-right: 20px;
  }

  .Back {
    left: 0;
    margin-left: 20px;
  }

  .Next,
  .Back {
    position: fixed;
    bottom: 0;
    margin-bottom: 20px;
  }

  .hamburger {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
