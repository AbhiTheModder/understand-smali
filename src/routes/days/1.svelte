<script>
  import Highlight, { LineNumbers } from "svelte-highlight";
  import java from "svelte-highlight/languages/java";
  // import ashes from "svelte-highlight/styles/ashes";
  import { Hamburger } from "svelte-hamburgers";
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

  let open;

  const codeStyle = `margin-bottom: 1rem;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: monospace;`;

  const codeBlocks = {
    code: `class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
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

<main>
  <div class="hamburger" aria-label="Toggle navigation">
    <Hamburger --border-radius="0px" bind:open --color="#646cff" />
  </div>

  <Menu {open} />
  <div class="mainbody">
    <h1 id="h1">Smali</h1>
    <h2 id="h2">Smali vs Java</h2>
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
        <LineNumbers {highlighted} wrapLines={true} style={codeStyle} />
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
      of all other classes in Java. When you create a new class, you are essentially
      saying that your new class is a <b>child</b> of the
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
      of your house. When someone wants to enter your house, they come through the
      front door. Similarly, when you run a Java program, the JVM enters your program
      through the <code>main</code> method.
    </p>
    <p>
      Another way is to think of the <code>main</code> method as the
      <b>starting point</b>
      of a race. When a race begins, all of the runners start at the same starting
      line. Similarly, when you run a Java program, the JVM starts executing your
      program at the <code>main</code> method.
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
    <h3 id="class-header">Class Header</h3>
    <p>
      Okay, so we looked at a full example. Now, let&#39;s zoom in on the very
      top of a <code>smali</code> file. Think of it like the title and
      introduction of a book – it tells you some important things about what
      you&#39;re about to read! This top part is called the
      <em>Class Header</em>.
    </p>
    <p>
      Imagine the <em>Class Header</em> is like a little information card for
      the class. It <em>always</em> has a couple of important pieces of
      information, and <em>sometimes</em> it has a few extra details.
    </p>
    <p>
      Here are the important things you&#39;ll find in the <em>Class Header</em
      >:
    </p>
    <ul>
      <li>
        <code style="color: chocolate;">.class</code>: (Must-have!) We learned
        this before. It tells you what the class is called (like a name tag!).
      </li>
      <li>
        <code style="color: chocolate;">.super</code>: (Must-have!) We learned
        this too. This is like saying "This class is a type of..." It tells you
        what "parent" class this class comes from (like saying "a dog is a type
        of animal").
      </li>
      <li>
        <code style="color: chocolate;">.source</code>: (Nice to have, but not
        always there!) This tells you the name of the original
        <code>.java</code>
        file that this
        <code>smali</code> code came from. It&#39;s like saying "This recipe came
        from Grandma&#39;s cookbook."
      </li>
      <li>
        <code style="color: chocolate;">.implements</code>: (Sometimes there!)
        This tells you if the class follows specific "rules" or promises to do
        certain things. Imagine it&#39;s like a scout promising to be helpful
        and kind. This directive is used to specify that the current class
        implements one or more interfaces. When a class implements an interface,
        it must provide concrete implementations for all the methods declared in
        the interface. Example: In Java, you can write:
        <Highlight
          language={java}
          code={`package com.example;

class ExampleClass implements MyInterface {
    // Class implementation
}`}
          let:highlighted
        >
          <LineNumbers {highlighted} wrapLines={true} style={codeStyle} />
        </Highlight>
        <p>In Smali, this would be represented as:</p>
        <Highlight
          language={java}
          code={`.class public Lcom/example/ExampleClass;
.super Ljava/lang/Object;
.source "ExampleClass.java"
.implements Lcom/example/MyInterface;`}
          let:highlighted
        >
          <LineNumbers {highlighted} wrapLines={true} style={codeStyle} />
        </Highlight>
      </li>
    </ul>
    <ul>
      <li>
        <code style="color: chocolate;">.debug</code>: (Rare to see!)
        <ul>
          <li>
            This directive is used to enable or disable debugging information
            for the class. When debugging information is enabled, the Smali code
            will include additional information that can be useful for debugging
            purposes. It&#39;s practical implementation is hardly seen in the
            wild.
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="annotations">Annotations</h3>
    <p>
      Annotations in Smali are similar to annotations in Java. They provide
      metadata about the class, method, or field, such as its visibility or
      whether it is deprecated.
    </p>
    <p>
      They are declared using the <code style="color: chocolate;"
        >.annotation</code
      >
      directive, followed by the annotation&#39;s visibility (e.g.,
      <code>runtime</code>,
      <code>system</code>, <code>build</code>) and the annotation&#39;s type
      descriptor and any associated elements. The annotation block is terminated
      by the <code>.end annotation</code> directive.
    </p>
    <p>Here are some examples of annotations in Smali:</p>
    <Highlight
      language={java}
      code={`.class public Lcom/example/ExampleClass;
.super Ljava/lang/Object;

.annotation runtime Ljava/lang/Deprecated;
.end annotation

.annotation system Ldalvik/annotation/EnclosingClass;
  value = Lcom/example/OuterClass;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
  accessFlags = 0x0002
  name = "ExampleClass"
  outer = Lcom/example/OuterClass;
.end annotation

# class definition and methods go here`}
      let:highlighted
    >
      <LineNumbers {highlighted} wrapLines={true} style={codeStyle} />
    </Highlight>
    <p>In this example:</p>
    <ul>
      <li>
        <code style="color: chocolate;">@Deprecated</code>: This is a
        <strong>runtime annotation</strong>
        (indicated by <code>runtime</code>) with the descriptor
        <code>Ljava/lang/Deprecated;</code>. It signifies that the
        <code>ExampleClass</code> is deprecated and should no longer be used.
      </li>
      <li>
        <code style="color: chocolate;">@EnclosingClass</code>: This is a
        <strong>system annotation</strong>
        (indicated by <code>system</code>) with the descriptor
        <code>Ldalvik/annotation/EnclosingClass;</code>. The <code>value</code>
        element specifies that <code>ExampleClass</code> is enclosed within the
        <code>Lcom/example/OuterClass;</code>.
      </li>
      <li>
        <code style="color: chocolate;">@InnerClass</code>: This is another
        <strong>system annotation</strong>
        with the descriptor <code>Ldalvik/annotation/InnerClass;</code>. It
        indicates that <code>ExampleClass</code> is an inner class. The
        annotation includes elements specifying the <code>accessFlags</code>
        (here, <code>0x0002</code>, indicating it&#39;s a private inner class,
        you can read more about access flags at
        <a
          href="https://jakewharton.github.io/dalvik-dx/docs/latest/com/android/dx/rop/code/AccessFlags.html"
          >https://jakewharton.github.io/dalvik-dx/docs/latest/com/android/dx/rop/code/AccessFlags.html</a
        >), the <code>name</code> of the inner class ("ExampleClass"), and the
        <code>outer</code>
        class (<code>Lcom/example/OuterClass;</code>).
      </li>
    </ul>
    <Highlight
      language={java}
      code={`public static final Parcelable.Creator<j> CREATOR = new i(0);`}
    />
    <p>
      The equivalent Smali code with an annotation for the field&#39;s generic
      signature would look like:
    </p>
    <Highlight
      language={java}
      code={`.field public static final CREATOR:Landroid/os/Parcelable$Creator;

.annotation system Ldalvik/annotation/Signature;
  value = {
    "Landroid/os/Parcelable$Creator<",
    "LC1/j;",
    ">;"
  }
.end annotation

.end field`}
      let:highlighted
    >
      <LineNumbers {highlighted} wrapLines={true} style={codeStyle} />
    </Highlight>
    <p>
      Here, the <code style="color: chocolate;">@Signature</code> annotation (<code
        >Ldalvik/annotation/Signature;</code
      >) specifies that the <code>CREATOR</code> field is a
      <code>Parcelable.Creator</code>
      parameterized with the type <code>C1/j</code>. This preserves the generic
      type information from the original Java code.
    </p>
    <p><strong>Annotation visibility:</strong></p>
    <ul>
      <li>
        <code style="color: chocolate;">system</code>: This annotation is
        visible to the virtual machine but not to the Java code.
      </li>
      <li>
        <code style="color: chocolate;">runtime</code>: This annotation is
        visible to the Java code at runtime and can be accessed using
        reflection.
      </li>
      <li>
        <code style="color: chocolate;">build</code>: This annotation is used
        during the build process and is not visible at runtime.
      </li>
    </ul>
    <h3 id="fields">Fields</h3>
    <p>
      Fields in Smali are defined using the <code style="color: chocolate;"
        >.field</code
      > directive within a class. Each field has a name, type, access modifiers and
      optionally an initial value. The syntax for defining a field is as follows:
    </p>
    <Highlight
      language={java}
      code={`.field [access_flags] field_name:field_type [= initial_value]`}
    />
    <p>Where:</p>
    <ul>
      <li>
        <code style="color: chocolate;">access_flags</code>: Optional access
        modifiers (e.g.,
        <code style="color: chocolate;">public</code>,
        <code style="color: chocolate;">private</code>,
        <code style="color: chocolate;">static</code>, etc.).
      </li>
      <li>
        <code style="color: chocolate;">field_name</code>: The name of the
        field.
      </li>
      <li>
        <code style="color: chocolate;">field_type</code>: The type of the field
        (e.g., <code style="color: chocolate;">I</code> for integer,
        <code style="color: chocolate;">Ljava/lang/String;</code> for a string, etc.).
      </li>
      <li>
        <code style="color: chocolate;">initial_value</code>: Optional initial
        value for the field.
      </li>
    </ul>
    <p><strong>Example:</strong></p>
    <Highlight
      language={java}
      code={`.field public static final myField:I = 42
.field private myString:Ljava/lang/String; = "Hello, Smali!"
.field public myBoolean:Z`}
      let:highlighted
    >
      <LineNumbers {highlighted} wrapLines={true} style={codeStyle} />
    </Highlight>
    <p>
      here, <code style="color: chocolate;">myField</code> is a public static
      final integer field i.e, it can be accessed from anywhere, is a constant
      and is of type integer with an initial value of <code>42</code>.
      <code style="color: chocolate;">myString</code>
      is a private field of type string with an initial value of "Hello, Smali!".
      <code style="color: chocolate;">myBoolean</code> is a public field of type
      boolean with no initial value specified.
    </p>
    <p>
      <strong id="access-modifiers">Access Modifiers:</strong>
      Access modifiers in Smali are used to control the visibility and accessibility
      of fields and methods. The common access modifiers are:
    </p>
    <ul>
      <li>
        <code style="color: chocolate;">public</code>: The field or method is
        accessible from any other class.
      </li>
      <li>
        <code style="color: chocolate;">private</code>: The field or method is
        accessible only within the class it is defined in.
      </li>
      <li>
        <code style="color: chocolate;">protected</code>: The field or method is
        accessible within the class and its subclasses.
      </li>
      <li>
        <code style="color: chocolate;">static</code>: The field or method
        belongs to the class itself rather than to instances of the class.
      </li>
      <li>
        <code style="color: chocolate;">final</code>: The field is a constant
        and cannot be changed after initialization.
      </li>
      <li>
        <code style="color: chocolate;">volatile</code>: The field is volatile
        and changes to it are immediately visible to other threads.
      </li>
      <li>
        <code style="color: chocolate;">transient</code>: The field is not
        serialized when the object is serialized.
      </li>
      <li>
        <code style="color: chocolate;">synthetic</code>: The field is generated
        by the compiler and is not explicitly defined in the source code.
      </li>
      <li>
        <code style="color: chocolate;">enum</code>: The field is an enumeration
        type.
      </li>
      <li>
        <code style="color: chocolate;">abstract</code>: The method is abstract
        and must be implemented by subclasses.
      </li>
      <li>
        <code style="color: chocolate;">native</code>: The method is implemented
        in native code (e.g., C/C++).
      </li>
    </ul>
    <h3 id="methods">Methods</h3>
    <p>
      Methods in Smali are defined using the <code>.method</code> directive. The
      syntax for defining a method is as follows:
    </p>
    <Highlight
      language={java}
      code={`.method [access_flags] method_name([parameter_types])return_type
    .registers number_of_registers

    # method body goes here
.end method`}
    />
    <p>Where:</p>
    <ul>
      <li>
        <code style="color: chocolate;">access_flags</code>: Optional access
        modifiers (e.g.,
        <code style="color: chocolate;">public</code>, <code>private</code>,
        <code>static</code>, etc.).
      </li>
      <li>
        <code style="color: chocolate;">method_name</code>: The name of the
        method.
      </li>
      <li>
        <code style="color: chocolate;">parameter_types</code>: A list of
        parameter types enclosed in parentheses. Each type is represented by its
        Smali descriptor (e.g.,
        <code>I</code>
        for integer, <code>Ljava/lang/String;</code> for a string, etc.).
      </li>
      <li>
        <code style="color: chocolate;">return_type</code>: The return type of
        the method, represented by its Smali descriptor (e.g., <code>V</code>
        for void, <code>I</code> for integer, <code>Ljava/lang/String;</code>
        for a string, etc.).
        <br /><strong>Example:</strong>
        <Highlight
          language={java}
          code={`.method public static myMethod(I)Ljava/lang/String;
    .registers 2

    const-string v0, "Hello, Smali!"

    return-object v0
.end method`}
          let:highlighted
        >
          <LineNumbers {highlighted} wrapLines={true} style={codeStyle} />
        </Highlight>
      </li>
    </ul>

    <p>
      In this example, <code>myMethod</code> is a public static method that
      takes an integer parameter and returns a string. The method uses two
      registers (<code>v0</code> and <code>v1</code>) to store intermediate
      values. It creates a string "Hello, Smali!" and returns it.
    </p>
    <h3 id="type-descriptors">Type Descriptors</h3>
    <p>
      Type descriptors in Smali are used to represent the types of fields,
      method parameters and return values. They are similar to Java type
      descriptors but have a specific syntax. Here are some common type
      descriptors:
    </p>
    <table class="descriptor-table">
      <thead>
        <tr>
          <th>Descriptor</th>
          <th>Type</th>
          <th>Value Example (human-readable)</th>
          <th>Size in Bytes</th>
        </tr>
      </thead>
      <tbody
        ><tr>
          <td><code>V</code></td>
          <td>Void</td>
          <td><code>-</code></td>
          <td><code>0</code></td>
        </tr>
        <tr>
          <td><code>Z</code></td>
          <td>Boolean</td>
          <td><code>true</code>/<code>false</code></td>
          <td><code>1</code></td>
        </tr>
        <tr>
          <td><code>B</code></td>
          <td>Byte</td>
          <td><code>-128 to 127</code></td>
          <td><code>1</code></td>
        </tr>
        <tr>
          <td><code>S</code></td>
          <td>Short</td>
          <td><code>-32,768 to 32,767</code></td>
          <td><code>2</code></td>
        </tr>
        <tr>
          <td><code>C</code></td>
          <td>Character</td>
          <td><code>&#39;a&#39;</code>, <code>&#39;b&#39;</code>, etc.</td>
          <td><code>2</code></td>
        </tr>
        <tr>
          <td><code>I</code></td>
          <td>Integer</td>
          <td><code>-2,147,483,648 to 2,147,483,647</code></td>
          <td><code>4</code></td>
        </tr>
        <tr>
          <td><code>F</code></td>
          <td>Float</td>
          <td><code>1.4E-45 to 3.4028235E38</code></td>
          <td><code>4</code></td>
        </tr>
        <tr>
          <td><code>J</code></td>
          <td>Long</td>
          <td
            ><code>-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</code
            ></td
          >
          <td><code>8</code></td>
        </tr>
        <tr>
          <td><code>D</code></td>
          <td>Double</td>
          <td><code>4.9E-324 to 1.7976931348623157E308</code></td>
          <td><code>8</code></td>
        </tr>
        <tr>
          <td><code>[</code></td>
          <td>Array (reference type)</td>
          <td
            ><code>[I</code> (array of integers),
            <code>[Ljava/lang/String;</code> (array of strings)</td
          >
          <td><code>-</code></td>
        </tr>
        <tr>
          <td><code>L<class_name>;</class_name></code></td>
          <td>Object (reference type)</td>
          <td
            ><code>Ljava/lang/String;</code> (String object),
            <code>Lcom/example/MyClass;</code> (custom class)
          </td>
          <td><code>-</code></td>
        </tr>
      </tbody>
    </table>
    <div class="note-block">
      <p>
        <strong>NOTE</strong>: Unless stated otherwise, all type descriptors are
        case-sensitive. For example, <code>I</code> is an integer, while
        <code>i</code> is not a valid type descriptor. Similarly, unless stated
        otherwise, all type descriptors in the above table are primitive types
        while
        <code>L&lt;class_name&gt;;</code> is not a primitive type but a reference
        type.
      </p>
    </div>
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
