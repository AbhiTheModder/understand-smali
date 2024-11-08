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

  const code = `invoke-custom {vC, vD, vE, vF, vG}, call_site@BBBB`;
  const code_2 = `{
    bootstrap_method: VALUE_METHOD_HANDLE (e.g., LambdaMetafactory.metafactory),
    method_name: VALUE_STRING (e.g., &quot;isSplitMetaElement&quot;),
    method_type: VALUE_METHOD_TYPE (e.g., (Lcom/reandroid/arsc/chunk/xml/ResXmlElement;)Z)
}`;
  const code_3 = `FilterIterator.of(manifest.recursiveElements(), ApkSplitInfoCleaner::isSplitMetaElement)`;
  const code_4 = `invoke-custom {}, call_site_2("test", ()Ljava/util/function/Predicate;, (Ljava/lang/Object;)Z, invoke-static@Lcom/reandroid/apk/ApkSplitInfoCleaner;->isSplitMetaElement(Lcom/reandroid/arsc/chunk/xml/ResXmlElement;)Z, (Lcom/reandroid/arsc/chunk/xml/ResXmlElement;)Z)@Ljava/lang/invoke/LambdaMetafactory;->metafactory(Ljava/lang/invoke/MethodHandles$Lookup;Ljava/lang/String;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodHandle;Ljava/lang/invoke/MethodType;)Ljava/lang/invoke/CallSite;`;

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
    <h2 id="invoke-custom"><code>invoke-custom</code></h2>
    <p>
      Starting from DEX version 038, the <code>invoke-custom</code> instruction
      was introduced to enable flexible, dynamic invocation of methods. It plays
      a crucial role in dynamic method handling, particularly useful for lambda
      expressions and functional programming in Java and allows Dalvik VM to
      dynamically call methods at runtime by referencing a &quot;call
      site&quot;, which points to specific runtime metadata defining the method
      to be called. In simple terms, <code>invoke-custom</code> makes it
      possible to execute methods that are not directly known or accessible at
      compile time but are defined dynamically when the application runs. This
      dynamic invocation mechanism aligns with Java&#39;s
      <code>java.lang.invoke</code> API and provides key support for features like
      lambda expressions.
    </p>
    <h3 id="instruction-syntax-and-structure">
      Instruction Syntax and Structure
    </h3>
    <p>Here’s a basic outline of the syntax:</p>
    <Highlight language={smali} {code} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={true}
        style={codeStyle}
      /></Highlight
    >
    <ul>
      <li>
        <code>{`{vC, vD, vE, vF, vG}`}</code>: Registers containing arguments
        passed to the invoked method.
      </li>
      <li>
        <code>call_site@BBBB</code>: Reference to a &quot;call site&quot; in the
        DEX file (identified by the index <code>BBBB</code>), which points to a
        method and the metadata required for invocation.
      </li>
    </ul>
    <p>Each <code>invoke-custom</code> instruction has the following fields:</p>
    <ul>
      <li>
        <strong>Argument word count (4 bits)</strong>: Specifies the number of
        arguments for the method.
      </li>
      <li>
        <strong>Call site reference index (16 bits)</strong>: An index pointing
        to the <code>call_site_item</code> in the DEX file, which contains all the
        metadata for the invocation.
      </li>
      <li>
        <strong>Argument registers</strong>: Up to five registers that hold the
        method&#39;s arguments.
      </li>
    </ul>
    <h3 id="the-role-of-call_site_item">
      The Role of <code>call_site_item</code>
    </h3>
    <p>
      <code>call_site_item</code> is a special DEX structure used to hold metadata
      about a call site. It&#39;s located in the DEX file&#39;s data section and
      contains details about the method to be invoked, including the following:
    </p>
    <ol>
      <li>
        <strong>Bootstrap Method Handle</strong>: A reference to a
        &quot;bootstrap&quot; method that sets up the call site. This method
        typically belongs to classes like <code>LambdaMetafactory</code> in Java
        and must return a <code>java.lang.invoke.CallSite</code>.
      </li>
      <li>
        <strong>Method Name</strong>: A string representing the name of the
        method to be resolved.
      </li>
      <li>
        <strong>Method Type</strong>: A descriptor defining the method’s
        argument and return types.
      </li>
    </ol>
    <p>
      This setup gives <code>invoke-custom</code> the information needed to invoke
      a method dynamically.
    </p>
    <h4 id="example-of-a-call_site_item">
      Example of a <code>call_site_item</code>
    </h4>
    <p>
      Here’s what a typical <code>call_site_item</code> would look like conceptually:
    </p>
    <Highlight language={java} code={code_2} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={true}
        style={codeStyle}
      /></Highlight
    >
    <p>
      Additional arguments can also be included as constant values, passed to
      the bootstrap method in order.
    </p>
    <h3 id="execution-phases-of-invoke-custom">
      Execution Phases of <code>invoke-custom</code>
    </h3>
    <p>
      The <code>invoke-custom</code> instruction executes in two main phases:
    </p>
    <ol>
      <li>
        <p><strong>Call Site Resolution</strong>:</p>
        <ul>
          <li>
            The DEX interpreter checks if there’s an existing <code
              >CallSite</code
            > object for the specified call site.
          </li>
          <li>
            If a <code>CallSite</code> doesn’t exist, the bootstrap method
            specified in <code>call_site_item</code> is invoked with the
            provided arguments. This bootstrap method returns a
            <code>CallSite</code> object that represents the method to be called.
          </li>
          <li>
            The <code>CallSite</code> object is cached for future calls to improve
            performance.
          </li>
        </ul>
      </li>
      <li>
        <p><strong>Call Site Invocation</strong>:</p>
        <ul>
          <li>
            After the <code>CallSite</code> is resolved, the
            <code>MethodHandle</code>
            within the <code>CallSite</code> is invoked.
          </li>
          <li>
            This invocation works similarly to the <code
              >invoke-polymorphic</code
            >
            instruction, where the arguments passed in the
            <code>invoke-custom</code> instruction are used directly.
          </li>
        </ul>
      </li>
    </ol>
    <h3 id="practical-example-invoke-custom-in-action">
      Practical Example: <code>invoke-custom</code> in Action
    </h3>
    <p>
      Consider this Java code in the <code
        ><a
          href="https://github.com/REAndroid/ARSCLib/blob/main/src/main/java/com/reandroid/apk/ApkSplitInfoCleaner.java#L55"
          >ApkSplitInfoCleaner</a
        >
      </code> class:
    </p>
    <Highlight language={java} code={code_3} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={true}
        style={codeStyle}
      /></Highlight
    >
    <p>
      In bytecode, this invocation of <code>isSplitMetaElement</code> as a
      lambda will be compiled into an <code>invoke-custom</code> call, where the
      DEX file contains a <code>call_site_item</code> that references
      <code>LambdaMetafactory.metafactory</code> to create a lambda expression.
    </p>
    <h4 id="bytecode-example">Bytecode Example</h4>
    <p>Here’s what this might look like in Dalvik bytecode:</p>
    <Highlight language={smali} code={code_4} let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={true}
        style={codeStyle}
      /></Highlight
    >
    <p>This example showcases the following:</p>
    <ol>
      <li>
        <code>call_site_2</code> defines the arguments for the
        <code>LambdaMetafactory.metafactory</code> bootstrap method.
      </li>
      <li>
        The bootstrap method generates a <code>CallSite</code> instance,
        enabling the <code>isSplitMetaElement</code> method to be invoked as a lambda
        expression matching a functional interface.
      </li>
    </ol>
    <h3 id="invoke-polymorphic"><code>invoke-polymorphic</code></h3>
    <p>
      <code>invoke-polymorphic</code> is another bytecode instruction (Also
      introduced starting from DEX version 038 onwards) similar to
      <code>invoke-custom</code>, but it&#39;s specifically used for invoking
      <code>MethodHandle</code>
      methods like <code>invoke</code> or <code>invokeExact</code>. While
      <code>invoke-custom</code>
      is for more general dynamic invocation, <code>invoke-polymorphic</code> is
      restricted to methods directly supporting polymorphic invocation in
      <code>MethodHandle</code>.
    </p>

    <h3 id="references">References</h3>
    <ul>
      <li>
        <a href="https://source.android.com/docs/core/runtime/dalvik-bytecode"
          >Dalvik bytecode format | Android Open Source Project</a
        >
      </li>
      <li>
        <a href="https://github.com/REAndroid/ARSCLib.git"
          >REAndroid/ARSCLib for code examples</a
        >
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

<a class="Back" href="/days/6" aria-label="Go To Previous Page">
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
