<script>
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "../../lib/Menu.svelte";

  import { FooterCopyright } from "flowbite-svelte";
  import Highlight, { LineNumbers } from "svelte-highlight";
  import java, { smali } from "svelte-highlight/languages/smali";
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
  let open;
  const codeStyle = `margin-bottom: 1rem;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: monospace;`;

  const code = `    const/4 v0, 0x1
    if-eqz v0, :label_end

    const/4 v1, 0x2

    if-eq v0, v1, :label_true

    const/4 v2, 0x0
    
    goto :label_end

    :label_true
    if-nez v0, :label_end
    const/4 v2, 0x1

    :label_end
    # further code ...`;
</script>

<main>
  <div class="hamburger" aria-label="Toggle navigation">
    <Hamburger --border-radius="0px" bind:open --color="#646cff" />
  </div>

  <Menu {open} />
  <h1 class="head">Example Modifications in Smali</h1>

  <div class="content">
    <p>
      After gaining an understanding of smali through explanations and resources
      up to Day 4, let's dive into practical examples to further enhance our
      skills.
    </p>
    <h2 id="example-1">Example 1: Modifying a String</h2>
    <p>Modifying a string in a smali file is very easy.</p>
    <p>
      Find the line that contains the string you want to modify. It might look
      something like this:
    </p>
    <Highlight
      language={smali}
      code="const-string v0, &quot;Original Title&quot;"
    />
    <p>
      In the above code snippet, "Original Title" is the string we want to
      modify, and <strong><code>v0</code></strong> is the variable that holds
      the string and <strong><code>const-string</code></strong> is the instruction
      that loads the string into the variable.
    </p>
    <p>
      To modify this string, simply replace "Original Title" with your desired
      title, let's say "New Title":
    </p>
    <Highlight language={smali} code="const-string v0, &quot;New Title&quot;" />
    <p>
      Save the changes, compile your dex file, when you run your app you'll see
      the modified string in action.
    </p>
    <h2 id="example-2">Example 2: Comparisons in smali</h2>
    <p>
      Comparisons in smali are a bit more complex than in Java, but they follow
      a similar pattern. Let's take a look at an example:
    </p>
    <Highlight language={smali} {code} />
    <p>
      In this example, we have <strong>three</strong> comparisons:
      <br />1. <strong><code>if-eqz</code></strong> checks if
      <strong><code>v0</code></strong>
      is equal to zero. If it is, the program jumps to the
      <strong><code>:label_end</code></strong>
      section.
      <br />2. <strong><code>if-eq</code></strong> checks if
      <strong><code>v0</code></strong>
      is equal to <strong><code>v1</code></strong>. If they are equal, the
      program jumps to the <strong><code>:label_true</code></strong> section.
      <br />3. <strong><code>if-nez</code></strong> checks if
      <strong><code>v0</code></strong>
      is not equal to zero. If it is not, the program jumps to the
      <strong><code>:label_end</code></strong>
      section.
      <br />
      <br />
      Although there are many more conditionals in smali, these are the most common
      comparison instructions in smali, which you'll stumble upon while modifying
      smali files most of time. For other types of comparisons, you can refer to
      the
      <a
        href="https://github.com/AbhiTheModder/understand-smali/blob/main/smali-opcodes/Smali%20-%20Table%20Of%20Java%20Opcode's.pdf"
        >opcodes-table</a
      >.
      <br /><br />Now onto our previous conversion, To modify this comparison,
      you would need to change the values being compared or the actions taken
      based on the comparison result.
      <br />
      <br />
      For example, if you want to change the first comparison to check if
      <strong><code>v0</code></strong>
      is equal to 2 instead of 1, you would change the line
      <strong><code>const/4 v0, 0x1</code></strong>
      to <strong><code>const/4 v0, 0x2</code></strong>.
      <br />
      <br />
      If you want to change the action taken when the comparison is true, you would
      modify the instructions following the <strong><code>if-eqz</code></strong>
      or <strong><code>if-eq</code></strong> instruction, depending on the
      comparison you're modifying.
      <br />
      Now if you look carefully the above code seems to be checking if
      <strong><code>v0</code></strong>
      is equal to 2 and if it is, it jumps to
      <strong><code>:label_true</code></strong>
      section and then checks if <strong><code>v0</code></strong> is not equal
      to zero and if it is not, it jumps to the
      <strong><code>:label_end</code></strong> section, so basically it seems like
      v2 is never being set to 1 ever, now you know what i'm talking about right
      😉.
    </p>
    <h2 id="example-3">Example 3: Modifying a Method</h2>
    <p>
      Modifying a method in a smali file involves understanding the method's
      structure and making the necessary changes. Let's take a look at an
      example:
    </p>
    <Highlight
      language={smali}
      code=".method public static getVersion()Ljava/lang/String;
  .locals 1
      const-string v0, &quot;1.0.0&quot;
  return-object v0
.end method"
      let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={true}
        style={codeStyle}
      /></Highlight
    >
    <p>
      In the above code snippet, we have a method called <strong
        ><code>getVersion</code></strong
      >
      that returns a string(Remember our previous days talk(s), through
      <code>Ljava/lang/String</code>
      we made it clear this method will accept strings inside it even if there were
      happen to be no code inside <code>getVersion</code> method, you can deduce
      and make your changes using these little information's) representing the
      version of the app.
      <br />
      <br />
      Now suppose you have an app which relies on checks for version updates through
      this method and a version with <code>2.0.0</code> just came out, however
      there are certain function(s) which the developer removed from newer
      version, which you always used so you choose to stick to your
      <code>1.0.0</code>
      version, in that case because of the check, the app started prompting you for
      updates.
      <br />
      Now you don't want that to happen right?
      <br />
      <br />
      As talked earlier in
      <strong><a href="#example-1">Example 2: Modifying a String</a></strong> section,
      we can change the version string to a different value:
    </p>
    <Highlight
      language={smali}
      code=".method public static getVersion()Ljava/lang/String;
  .locals 1
    const-string v0, &quot;2.0.0&quot;
  return-object v0
.end method"
      let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={true}
        style={codeStyle}
      /></Highlight
    >
    <p>
      Save the changes, compile your dex file, and you can now use your app with
      2.0.0 version without being prompted for updates.
    </p>
    <h2 id="example-4">Example 4: Adding a New Method</h2>
    <p>
      Adding a new method to a smali file involves defining the method's
      structure and implementing its functionality. Let's take a look at an
      example:
    </p>
    <p>
      <li class="steps">
        In this example, we'll add a new method called <strong
          ><code>getGreeting</code></strong
        > that returns the greeting message "Hello, World!".
      </li>
      <li class="steps">
        We'll define the method as <strong><code>public static</code></strong>,
        which means it can be called without creating an instance of the class.
      </li>
      <li class="steps">
        The method will return a string, so we'll use the <strong
          ><code>return-object</code></strong
        >
        instruction to return the string value and
        <strong><code>Ljava/lang/String</code></strong> to specify that the method
        returns a string.
      </li>
      <li class="steps">
        We'll use the <strong><code>const-string</code></strong> instruction to create
        a new string object containing the app's name.
      </li>
      <li class="steps">
        Finally, we'll use the <strong><code>.end method</code></strong> directive
        to mark the end of the method definition.
      </li>
      <br />
      Here's how the code for the new method will look like:
    </p>
    <Highlight
      language={smali}
      code=".method public static getGreeting()Ljava/lang/String;
  .registers 1
    const-string v0, &quot;Hello, World!&quot;
  return-object v0
.end method"
      let:highlighted
      ><LineNumbers
        {highlighted}
        wrapLines={true}
        style={codeStyle}
      /></Highlight
    >
    <p>
      In the above code snippet, we've defined a new method called <strong
        ><code>getGreeting</code></strong
      >
      that returns a string greeting. To use this method:
      <br />
      <br />
      <li>
        Add the new method to the target smali file, but how will you do so?
      </li>
    </p>
    <p>
      Now because our method is static will use <code>invoke-static</code>
      instruction to call it.
      <br />
      <br />
      <li class="steps">
        To call the new method, you can use the <strong
          ><code>invoke-static</code></strong
        > instruction, which allows you to call a static method without creating
        an instance of the class.
      </li>
      <li class="steps">
        The <strong><code>invoke-static</code></strong> instruction takes three arguments:
        the class containing the method, the method name, and the method signature.
      </li>
      <li class="steps">
        In this case, the class containing the method let's suppose is <code
          >Lcom/example/App</code
        >, so the instruction will look like this:
        <strong
          ><code
            >invoke-static <code>{`{reg*}`}</code>,
            Lcom/example/App;->method_name+method_signature</code
          ></strong
        >
      </li>
      <li class="steps">
        The method name is <strong><code>getGreeting</code></strong>, and the
        method signature is <strong><code>()Ljava/lang/String; </code></strong> because
        it takes no arguments and returns a string.
      </li>
      <li class="steps">
        So the instruction will look like this: <strong
          ><code
            >invoke-static <code>{`{reg*}`}</code>,
            Lcom/example/App;->getGreeting()Ljava/lang/String;</code
          ></strong
        >.
      </li>
      <li class="steps">
        Finally, you can use the <strong><code>move-result-object</code></strong
        > instruction to store the returned string value in a register.
      </li>
    </p>
    <p>
      <strong>Note:</strong>
      <br />
      * The <code>reg*</code> is a placeholder for the register that can be any
      register which is available in the method.
      <br />
      * The <code>move-result-object</code> instruction is used to move the result
      of a method call to a register.
    </p>
    <br />
    <h2>Caution and Best Practices</h2>
    <p>
      Remember to save your changes and compile your dex file(s) before running
      your app to see the modified comparison in action.
      <br />
      <br />
      Keep in mind that modifying smali code can have unintended consequences, so
      it's important to understand what you're doing and to test your changes thoroughly.
      <br />
      <br />
      Also, always make a backup of your original smali files before making any modifications,
      so you can easily revert your changes if necessary. Though if you're MT Manager
      user it automatically creates a new file with <code>.bak</code> extension
      so you don't have to worry about it.
      <br />But if you're using any other tool then you have to do it manually,
      also MT only creates backup file of your previous state of modification,
      so if you want to keep a backup of your original file then you have to do
      it manually.
      <br />
      <br />
      Finally, always follow the best practices for modding and respect the intellectual
      property of the original app developers.
    </p>
    <p>Happy modding!</p>
  </div>

  <!-- Comment section -->
  <div
    data-chirpy-theme="system"
    data-chirpy-comment="true"
    id="chirpy-comment"
  ></div>
</main>

<a class="Back" href="/days/4" aria-label="Go To Previous Page">
  <button> ⇦ </button>
</a>

<a
  class="Next"
  href="/days/6"
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
  }

  .head {
    font-size: medium;
    font-weight: 700;
    text-decoration: underline;
    text-align: center;
    /* margin-left: 100px; */
  }

  .Next,
  .Back {
    position: fixed;
    bottom: 0;
    margin-bottom: 20px;
  }

  .steps {
    margin-bottom: 10px;
    list-style: decimal;
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
