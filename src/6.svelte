<script>
  import { Hamburger } from "svelte-hamburgers";
  import Highlight from "svelte-highlight";
  import java, { smali } from "svelte-highlight/languages/smali";
  import Menu from "./lib/Menu.svelte";
  import { FooterCopyright } from "flowbite-svelte";
  import "svelte-highlight/styles/github.css";

  let code = `new-instance p1, Lcom/example/MyInstance;`;
  let code_2 = `FlagGuard flagGuard = new FlagGuard();`;
  let code_3 = `new-instance p1, Lcom/entebra/crackme0x01/FlagGuard;`;
  let code_4 = `invoke-direct {p1}, Lcom/entebra/crackme0x01/FlagGuard;-><init>()V`;

  let open;
</script>

<main>
  <div class="hamburger" aria-label="Toggle navigation">
    <Hamburger --border-radius="0px" bind:open --color="#646cff" />
  </div>

  <Menu {open} />

  <div class="content">
    <h1 id="new-instance"><code>new-instance</code></h1>
    <p>
      <strong>NOTE:</strong>
      <em
        >This article was made on the same time as of writing crackme0x01
        article, so it might be a good idea to read that first to get a gist of
        idea as some piece of code have been taken from it, however it&#39;s not
        mandatory to do so.</em
      >
    </p>
    <p>
      When reverse-engineering Android APKs, you&#39;re bound to encounter <strong
        >Smali bytecode</strong
      >. One common Smali instruction is <code>new-instance</code>. Most of the
      time when working on Android RE APKs, often you will see lines like this:
    </p>
    <Highlight language={smali} {code} />
    <p>
      This creates a new instance of a class. The <code>p1</code> is a register
      that contains the reference to the newly created instance. The
      <code>Lcom/example/MyInstance;</code> is the class that is being instantiated.
    </p>
    <p>
      To Understand this better you need to be able to understand the meaning
      behind <strong>Instance Methods</strong> in Java. You might know that Java
      is an object-oriented programming language. Instance methods are a fundamental
      part of Java&#39;s object-oriented capabilities. They enable objects to have
      behaviors, interact with their own state, and communicate with other objects
    </p>
    <p>
      They are essential components of a class that define the behaviors and
      actions an object of the class can perform. These methods are <strong
        >non-static</strong
      >
      and require an
      <strong
        >object of their class to be created before they can be invoked</strong
      >. This is because instance methods can access instance variables and
      other instance methods directly, allowing them to operate on the specific
      state of an object.
    </p>
    <h2 id="what-does-new-instance-do">
      What Does <code>new-instance</code> Do?
    </h2>
    <p>
      The <code>new-instance</code> instruction creates a new object of a specified
      class and stores its reference in a register. In Java, you might do something
      like:
    </p>
    <Highlight language={smali} code={code_2} />
    <p>In Smali, this is represented by:</p>
    <Highlight language={smali} code={code_3} />
    <p>Here’s a breakdown:</p>
    <ul>
      <li>
        <code>p1</code>: A register that stores the reference to the new
        <code>FlagGuard</code> object.
      </li>
      <li>
        <code>Lcom/entebra/crackme0x01/FlagGuard;</code>: The class being
        instantiated (in this case, <code>FlagGuard</code>).
      </li>
    </ul>
    <p>
      After the <code>new-instance</code> instruction,
      <strong>the object is created but not fully initialized yet</strong>.
    </p>
    <h2 id="initializing-the-object">Initializing the Object</h2>
    <p>
      After creating the object, we need to call its <strong>constructor</strong
      >
      to initialize it. This is where the
      <strong><code>invoke-direct</code></strong> instruction comes in. In Java,
      you call the constructor automatically when creating an object. But in Smali,
      it breaks down into two steps:
    </p>
    <ol>
      <li>
        <strong>Create the instance</strong>: Which we have already done with
        <code>new-instance</code>.
      </li>
      <li><strong>Call the constructor</strong>.</li>
    </ol>
    <Highlight language={smali} code={code_4} />
    <p>
      This line directly calls the constructor <code>-&gt;&lt;init&gt;()V</code>
      of the <code>FlagGuard</code> class on the newly created object stored in
      <code>p1</code>.
    </p>
    <p>
      If you want to learn more than this then refer to Java Tutorials on
      Instance Methods and Constructors.
    </p>

    <p><b>Happy modding!</b></p>
  </div>

  <!-- Comment section -->
  <div
    data-chirpy-theme="system"
    data-chirpy-comment="true"
    id="chirpy-comment"
  ></div>
</main>

<a class="Back" href="/6" aria-label="Go To Previous Page">
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
