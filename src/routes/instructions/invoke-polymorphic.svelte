<script>
  import { Hamburger } from "svelte-hamburgers";
  import Highlight, { LineNumbers } from "svelte-highlight";
  import java, { smali } from "svelte-highlight/languages/smali";
  import Menu from "../../lib/Menu.svelte";

  import { FooterCopyright } from "flowbite-svelte";
  let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    import("svelte-highlight/styles/github-dark.css");
  } else {
    import("svelte-highlight/styles/github.css");
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      prefersDark = event.matches;
      if (prefersDark) {
        import("svelte-highlight/styles/github-dark.css");
      } else {
        import("svelte-highlight/styles/github.css");
      }
    });

  const code = `    invoke-polymorphic {vC, vD, ...}, Ljava/lang/invoke/MethodHandle;->methodName([Ljava/lang/Object;)Ljava/lang/Object;, (Signature)ReturnType`;
  const code_2 = `void foo(MethodHandle handle) throws Throwable {
            handle.invoke(10, 20);
            handle.invokeExact("foo", "bar");
        }`;
  const code_3 = `        const/16 v0, 0xa
        const/16 v1, 0x14
        invoke-polymorphic {p1, v0, v1}, Ljava/lang/invoke/MethodHandle;->invoke([Ljava/lang/Object;)Ljava/lang/Object;, (II)V
        
        const-string v0, "foo"
        const-string v1, "bar"
        invoke-polymorphic {p1, v0, v1}, Ljava/lang/invoke/MethodHandle;->invokeExact([Ljava/lang/Object;)Ljava/lang/Object;, (Ljava/lang/String;Ljava/lang/String;)V`;

  const codeStyle = `margin-bottom: 1rem;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-family: monospace;`;

  let open;
</script>

<main>
  <div class="hamburger" aria-label="Toggle navigation">
    <Hamburger --border-radius="0px" bind:open --color="#646cff" />
  </div>

  <Menu {open} />

  <div class="content">
    <h3 id="invoke-polymorphic"><code>invoke-polymorphic</code></h3>
    <p>
      The <code>invoke-polymorphic</code> instruction was introduced alongside
      <code>invoke-custom</code>
      in DEX version 038, specifically designed to call "signature polymorphic" methods
      like <code>MethodHandle.invoke</code> and
      <code>MethodHandle.invokeExact</code>. This functionality enables more
      flexible method invocation in bytecode, allowing methods to be called with
      a variable number and type of arguments, without the need for wrapping
      them in arrays or converting primitive types.
    </p>
    <h3 id="what-does-signature-polymorphism-mean">
      What Does "Signature Polymorphism" Mean?
    </h3>
    <p>
      In the case of <code>invoke-polymorphic</code>, "polymorphism" refers to
      methods capable of handling different types and numbers of arguments,
      known as "signature polymorphic" methods. Unlike standard methods, which
      require fixed parameter types and counts, signature polymorphic methods
      can accept any combination of argument types directly in bytecode. This
      contrasts with Java&#39;s usual
      <code>Object...</code>
      (varargs) parameter style, where arguments are typically passed as an array
      of <code>Object</code>s, making <code>invoke-polymorphic</code> highly efficient
      for diverse method signatures.
    </p>
    <p>Currently, the only signature polymorphic methods in Java are:</p>
    <ul>
      <li><code>MethodHandle.invoke(Object...)</code></li>
      <li><code>MethodHandle.invokeExact(Object...)</code></li>
    </ul>
    <p>
      These methods are designed to accept different signatures, a capability
      defined in the JVM Specification, §2.9.3.
    </p>
    <h3 id="syntax-of-invoke-polymorphic">
      Syntax of <code>invoke-polymorphic</code>
    </h3>
    <Highlight language={smali} {code} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={true}
        style={codeStyle}
      /></Highlight
    >
    <p>In this structure:</p>
    <ul>
      <li>
        <strong>Registers (<code>{`{vC, vD, ...}`}</code>)</strong>: These
        contain the actual arguments for the <code>MethodHandle</code> invocation.
      </li>
      <li>
        <strong
          >Method Reference (<code
            >Ljava/lang/invoke/MethodHandle;->methodName(...)</code
          >)</strong
        >: Refers to <code>invoke</code> or <code>invokeExact</code> method, specifying
        the signature and return type dynamically.
      </li>
      <li>
        <strong>Signature and Return Type</strong>: Directly specified in the
        instruction, allowing it to match the expected argument and return types
        of each invocation.
      </li>
    </ul>
    <h3 id="practical-example-of-invoke-polymorphic">
      Practical Example of <code>invoke-polymorphic</code>
    </h3>
    <p>
      Consider this Java method that uses <code>MethodHandle.invoke</code> and
      <code>MethodHandle.invokeExact</code>:
    </p>
    <Highlight language={java} code={code_2} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={true}
        style={codeStyle}
      /></Highlight
    >
    <p>This code translates into Dalvik bytecode as follows:</p>
    <Highlight language={java} code={code_3} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={true}
        style={codeStyle}
      /></Highlight
    >
    <p>In this bytecode:</p>
    <ol>
      <li>
        The <code>invoke-polymorphic</code> instruction is used to call
        <code>MethodHandle.invoke</code>
        and <code>MethodHandle.invokeExact</code> directly, with arguments
        passed in registers (<code>{`{v0, v1}`}</code>) instead of a single
        array.
      </li>
      <li>
        The <code>(II)V</code> and
        <code>(Ljava/lang/String;Ljava/lang/String;)V</code>
        type signatures are explicitly included, allowing the
        <code>MethodHandle</code> to handle primitive and object types interchangeably.
      </li>
    </ol>
    <h3 id="why-use-invoke-polymorphic">
      Why Use <code>invoke-polymorphic</code>?
    </h3>
    <ul>
      <li>
        <strong>Efficiency</strong>: Unlike varargs methods,
        <code>invoke-polymorphic</code> calls can handle primitive types directly
        without boxing, and arguments don’t need to be bundled into arrays.
      </li>
      <li>
        <strong>Dynamic Invocation</strong>: Provides a flexible, low-overhead
        way to call methods dynamically in DEX, particularly beneficial for
        applications requiring runtime method dispatch.
      </li>
    </ul>
    <h3 id="differences-between-invoke-custom-and-invoke-polymorphic">
      Differences Between <code>invoke-custom</code> and
      <code>invoke-polymorphic</code>
    </h3>
    <ul>
      <li>
        <strong>Purpose</strong>: <code>invoke-custom</code> provides a general
        mechanism for dynamic method calls, while
        <code>invoke-polymorphic</code>
        is specifically designed for signature polymorphic methods in the
        <code>MethodHandle</code> class.
      </li>
      <li>
        <strong>Signature Flexibility</strong>: <code>invoke-polymorphic</code>
        allows different signatures for each call without needing wrappers, unlike
        <code>invoke-custom</code>, which relies on the
        <code>call_site_item</code> structure to define a method signature statically.
      </li>
    </ul>
    <h3 id="references">References</h3>
    <ul>
      <li>
        <a href="https://source.android.com/docs/core/runtime/dalvik-bytecode"
          >Dalvik bytecode format | Android Open Source Project</a
        >
      </li>
      <li>
        <a
          href="https://docs.oracle.com/javase/specs/jvms/se11/html/jvms-2.html#jvms-2.9.3"
          >JVM Specification §2.9.3</a
        >
      </li>
      <li>
        <a href="https://stackoverflow.com/a/52708946">Stack Answer</a>
      </li>
    </ul>
  </div>

  <!-- Comment section -->
  <div
    data-chirpy-theme="system"
    data-chirpy-comment="true"
    id="chirpy-comment"
  ></div>
</main>

<a
  class="Back"
  href="/instructions/invoke-custom"
  aria-label="Go To Previous Page"
>
  <button> ⇦ </button>
</a>

<a
  class="Next"
  href="/instructions/invoke-custom"
  aria-label="There are no next pages, Go To Home Page"
>
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
    word-break: break-all;
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
