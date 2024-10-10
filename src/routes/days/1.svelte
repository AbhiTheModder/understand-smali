<script>
  import Highlight, { LineNumbers } from "svelte-highlight";
  import java from "svelte-highlight/languages/java";
  import ashes from "svelte-highlight/styles/ashes";
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "../../lib/Menu.svelte";

  let open;
  import { FooterCopyright } from "flowbite-svelte";

  const codeBlocks = {
    code: `class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }}
  }`,
    code2: `.class public LHelloWorld;
      .super Ljava/lang/Object;

      .method public static main([Ljava/lang/String;)V
      .registers 2

      sget-object v0, Ljava/lang/System;->out:Ljava/io/PrintStream;

      const-string v1, "Hello World!"
      invoke-virtual {v0, v1}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V
      
      return-void
    .end method`,
  };
</script>

<svelte:head>
  {@html ashes}
</svelte:head>

<main>
  <div class="hamburger" aria-label="Toggle navigation">
    <Hamburger --border-radius="0px" bind:open --color="#646cff" />
  </div>

  <Menu {open} />
  <div class="mainbody">
    <h1 id="h1">Smali vs Java</h1>
    <h4 id="h4">The First Question which may come to your mind is:</h4>
    <li class="li">
      If the Apps are made in Java then what is this smali and why is it
      important ?
    </li>
    <h4 id="h4">Well The answer to is quite simple:</h4>
    <li class="li">
      Computers have limitations in understanding numerical values beyond the
      decimal system (base-10). To represent values greater than 9, they use
      hexadecimal values (a, b, c, d, etc.) and binary numbers (0s and 1s).
    </li>
    <li class="li">
      This implies that computers cannot fully comprehend our number system, and
      vice versa. We must learn their number systems to bridge this gap.
    </li>
    <li class="li">
      While we can learn how computers operate, it is impractical to expect
      computers to learn our number system.
    </li>
    <li class="li">
      Similarly, when we use Java to develop Android applications, the Android
      system needs to convert the Java code into a format it can understand,
      known as Smali. This conversion ensures that the Android system can
      interpret and execute the Java code properly.
    </li>
    <p class="pimp">
      Smali is important because it allows developers,reverse engineers and
      malware analysts to:
    </p>
    <li class="li">Reverse engineer Android applications</li>
    <li class="li">Modify Android applications</li>
    <li class="li">Create malicious applications</li>
    <li class="li">Identify malicious applications</li>
    <h2 id="h2">What is Smali?</h2>
    <li class="li">
      Smali is a low-level language that is similar to Java bytecode. It is
      designed to be easy to read and understand, and it can be used to create
      and modify Android applications. Smali is also used by malware authors to
      create malicious applications.
    </li>
    <li class="li">Stands for "assembler" in Icelandic.</li>
    <li class="li">
      Everything in it are similar to Java (from start import to methods,
      classes, etc.), only representation of those things are changed nothing
      else
    </li>
    <h2 id="h2">What is Baksmali?</h2>
    <li class="li">Stands for "disassembler" in Icelandic.</li>
    <li class="li">
      Also named after the village of Dalvik, as it is the opposite operation of
      assembling (Smali).
    </li>
    <h2 id="h2">What is Dalvik Virtual Machine (DVM)?</h2>
    <li class="li">
      The Dalvik Virtual Machine (DVM) is an android virtual machine optimized
      for mobile devices. It optimizes the virtual machine for memory, battery
      life and performance.
    </li>
    <li class="li">
      Named after the village of Dalvik in Iceland, where the Dalvik Virtual
      Machine was created. It was written by Dan Bornstein. <a
        href="https://en.wikipedia.org/wiki/Dalvik_VM">Read More</a
      >
    </li>
    <li class="li">
      The DVM is responsible to run Android applications. The DVM is responsible
      for executing the instructions contained in Smali code. When an Android
      application is installed on a device, the DVM converts the Smali code into
      a format that the device's processor can understand. This process is known
      as "dexing".
    </li>
    <h2 id="h2">Connection to the Dalvik Virtual Machine with Smali</h2>
    <li class="li">
      The DVM converts Smali code into a format that the device's processor can
      understand through the process known as "dexing".
    </li>
    <img width="70%" src="https://i.stack.imgur.com/nEEK5.png" alt=" " />
    <h3 id="h3">Let's take an example and try to understand</h3>
    <p>
      Since everybody takes example of `Hello World!` in this field, let's go
      with that
    </p>
    <li class="li">In Java and Smali:</li>

    {#each Object.entries(codeBlocks) as [key, value]}
      <Highlight language={java} code={value} let:highlighted>
        <LineNumbers
          {highlighted}
          wrapLines={true}
          style="margin-bottom: 1rem;"
        />
      </Highlight>
    {/each}

    <h4 id="h4">Now let's Understand this</h4>
    <img
      width="100%"
      src="https://user-images.githubusercontent.com/85984486/154001045-aaf56369-fc0f-4157-a18f-3991e90ddc85.png"
      alt="Java Main Method"
    />
    <p>
      <b>Line 1: </b>In Java, you can simply write
      <code>class HelloWorld {`{your code}`}</code> <br /> However, in
      <b>smali</b>
      you must add a capital "<b>L</b>" before the class name, like
      <code>.class public <b>L</b>HelloWorld {`{your code}`}</code>. <br /> Note
      that there is <b>'<code>.</code>'</b> too just before 'class' defining, this
      is basic syntax for each method/class/return defining in smali
    </p>
    <p>
      The next line in smali: <code>[Ljava.lang.Object;</code> is the name for
      <code>Object[].class</code>
      and <code>.super</code> doing function like calling/storing of it
    </p>
    <br />
    <p><b>Line 2: </b><code>.super Ljava/lang/Object;</code></p>
    <p>
      declares that the current class extends the Java class <code>Object</code
      >.
    </p>
    <p>
      When you create a new class in Java, it automatically <b>extends</b> the
      Java class <code>Object</code>. This means that your new class inherits
      all of the methods and variables that are defined in the
      <code>Object</code> class.
    </p>
    <p>
      A simple way to understand this concept is a family tree. In a family
      tree, everyone is related to each other. Similarly, in Java, all classes
      are related to the <code>Object</code> class.
    </p>
    <p>
      For example, let's say you have a class called <code>Car</code>. The
      <code>Car</code>
      class inherits all of the methods and variables that are defined in the
      <code>Object</code>
      class. This means that you can use methods like <code>toString()</code>,
      <code>equals()</code>, and <code>hashCode()</code> on any <code>Car</code>
      object.
    </p>
    <p>
      Another way to think about it is that the <code>Object</code> class is the
      <b>parent class</b>
      of all other classes in Java. When you create a new class, you are
      essentially saying that your new class is a <b>child</b> of the
      <code>Object</code> class.
    </p>
    <ul>
      <li><b>Parent Class:</b> <code>Vehicle</code></li>
      <li><b>Child Class:</b> <code>Car</code></li>
    </ul>
    <p>
      The <code>Car</code> class inherits all of the properties and methods of
      the <code>Vehicle</code> class. This means that a <code>Car</code> object
      has all of the same properties and methods as a <code>Vehicle</code>
      object, such as <code>make</code>, <code>model</code>, and
      <code>year</code>.
    </p>
    <p>
      In the same way, all Java classes extend the <code>Object</code> class,
      which means that they inherit all of the properties and methods of the
      <code>Object</code> class.
    </p>
    <br />
    <p>
      <b>Line 4: </b><code
        >.method public static main([Ljava/lang/String;)V</code
      >
    </p>
    <p>
      declares a public static method named <code>main</code> that takes an
      array of <code>String</code> objects as input and returns
      <code>void</code>.
    </p>
    <p>
      In this case/example the <code>main</code> method is like the
      <b>front door</b>
      of your house. When someone wants to enter your house, they come through
      the front door. Similarly, when you run a Java program, the JVM enters
      your program through the <code>main</code> method.
    </p>
    <p>
      Another way is to think of the <code>main</code> method as the
      <b>starting point</b>
      of a race. When a race begins, all of the runners start at the same
      starting line. Similarly, when you run a Java program, the JVM starts
      executing your program at the <code>main</code> method.
    </p>
    <br />
    <p><b>Line 5: </b><code>.registers 2</code></p>
    <p>
      specifies that the method uses two registers. More information on <a
        href="/3">Day 3 wiki</a
      >
    </p>
    <br />
    <p>
      <b>Line 7: </b><code
        >sget-object v0, Ljava/lang/System;->out:Ljava/io/PrintStream;</code
      >
    </p>
    <p>
      retrieves the <code>PrintStream</code> object associated with the standard
      output stream and stores it in register <code>v0</code>.
    </p>
    <br />
    <p><b>Line 9: </b><code>const-string v1, "Hello World!"</code></p>
    <p>loads the string "Hello World!" into register <code>v1</code>.</p>
    <br />
    <p>
      <b>Line 10: </b><code
        >invoke-virtual {`{v0, v1}`},
        Ljava/io/PrintStream;->println(Ljava/lang/String;)V</code
      >
    </p>
    <p>
      calls the <code>println</code> method on the <code>PrintStream</code>
      object in register <code>v0</code>, passing the string in register
      <code>v1</code> as an argument. This prints the string "Hello World!" to the
      standard output stream.
    </p>
    <br />
    <p><b>Line 12: </b><code>return-void</code></p>
    <p>returns from the <code>main</code> method.</p>
    <br />
    <p><b>Line 13: </b><code>.end method</code></p>
    <p>marks the end of the method.</p>
  </div>
  <div
    data-chirpy-theme="system"
    data-chirpy-comment="true"
    id="chirpy-comment"
  ></div>
</main>

<a class="Back" href="/about" aria-label="Go To Previous Page">
  <button> ⇦ </button>
</a>

<a class="Next" href="/days/2" aria-label="Go To Next Page">
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
  .li {
    font-size: small;
    padding: 5px;
    /* font-weight: 500; */
  }

  .pimp {
    font-weight: 100;
  }

  .mainbody {
    text-align: left;
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
