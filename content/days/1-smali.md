{
   "title": "Smali vs Java",
   "weight": 1
}

# Smali vs Java

#### The First Question which may come to your mind is:

- If the Apps are made in Java then what is this smali, and why is it important ?

#### Well The answer to is quite simple:

- Computers have limitations in understanding numerical values beyond the decimal system (base-10). To represent values greater than 9, they use hexadecimal values (a, b, c, d, etc.) and binary numbers (0s and 1s).
- This implies that computers cannot fully comprehend our number system, and vice versa. We must learn their number systems to bridge this gap.
- While we can learn how computers operate, it is impractical to expect computers to learn our number system.
- Similarly, when we use Java to develop Android applications, the Android system needs to convert the Java code into a format it can understand, known as Smali. This conversion ensures that the Android system can interpret and execute the Java code properly.

Smali is important because it allows developers, reverse engineers and malware analysts to:

- Reverse engineer Android applications
- Modify Android applications
- Create malicious applications
- Identify malicious applications

## What is Smali?

- Smali is a low-level language that is similar to Java bytecode. It is designed to be easy to read and understand, and it can be used to create and modify Android applications. Smali is also used by malware authors to create malicious applications.
- Stands for "assembler" in Icelandic.
- Everything in it are similar to Java (from start import to methods, classes, etc.), only representation of those things are changed nothing else

## What is Baksmali?

- Stands for "disassembler" in Icelandic.
- Also named after the village of Dalvik, as it is the opposite operation of assembling (Smali).

## What is Dalvik Virtual Machine (DVM)?

- The Dalvik Virtual Machine (DVM) is an android virtual machine optimized for mobile devices. It optimizes the virtual machine for memory, battery life and performance.
- Named after the village of Dalvik in Iceland, where the Dalvik Virtual Machine was created. It was written by Dan Bornstein. [Read More](https://en.wikipedia.org/wiki/Dalvik_VM)
- The DVM is responsible to run Android applications. The DVM is responsible for executing the instructions contained in Smali code. When an Android application is installed on a device, the DVM converts the Smali code into a format that the device's processor can understand. This process is known as "dexing".

## Connection to the Dalvik Virtual Machine with Smali

The DVM converts Smali code into a format that the device's processor can understand through the process known as "dexing".

![ ](/images/nEEK5.png)

### Let's take an example and try to understand

Since everybody takes example of `Hello World!` in this field, let's go with that

- In Java:

![alt text](/images/image.png)

- In Smali:

![alt text](/images/image-1.png)

#### Now let's Understand this

![Java Main Method](/images/154001045-aaf56369-fc0f-4157-a18f-3991e90ddc85.png)

- **Line 1:** In Java, you can simply write `` class HelloWorld `{your code}` ``  
  However, in **smali** you must add a capital "**L**" before the class name, like `` .class public **L**HelloWorld `{your code}` ``.
  Note that there is **'`.`'** too just before 'class' defining, this is basic syntanx for each method/class/return defining in smali.

The next line in smali: `[Ljava.lang.Object;` is the name for `Object[].class` and `.super` doing function like calling/storing of it

- **Line 2:** `.super Ljava/lang/Object;`

declares that the current class extends the Java class `Object`.

When you create a new class in Java, it automatically **extends** the Java class `Object`. This means that your new class inherits all the methods and variables that are defined in the `Object` class.

A simple way to understand this concept is a family tree. In a family tree, everyone is related to each other. Similarly, in Java, all classes are related to the `Object` class.

For example, let's say you have a class called `Car`. The `Car` class inherits all the methods and variables that are defined in the `Object` class. This means that you can use methods like `toString()`, `equals()`, and `hashCode()` on any `Car` object.

Another way to think about it is that the `Object` class is the **parent class** of all other classes in Java. When you create a new class, you are essentially saying that your new class is a **child** of the `Object` class.

- **Parent Class:** `Vehicle`
- **Child Class:** `Car`

The `Car` class inherits all the properties and methods of the `Vehicle` class. This means that a `Car` object has all the same properties and methods as a `Vehicle` object, such as `make`, `model`, and `year`.

In the same way, all Java classes extend the `Object` class, which means that they inherit all the properties and methods of the `Object` class.

- **Line 4:** `.method public static main([Ljava/lang/String;)V`

declares a public static method named `main` that takes an array of `String` objects as input and returns `void`.

In this case/example the `main` method is like the **front door** of your house. When someone wants to enter your house, they come through the front door. Similarly, when you run a Java program, the JVM enters your program through the `main` method.

Another way is to think of the `main` method as the **starting point** of a race. When a race begins, all the runners start at the same starting line. Similarly, when you run a Java program, the JVM starts executing your program at the `main` method.

- **Line 5:** `.registers 2`

specifies that the method uses two registers. More information on [Day 3 wiki](https://smali.pages.dev/3)

- **Line 7:** `sget-object v0, Ljava/lang/System;->out:Ljava/io/PrintStream;`

retrieves the `PrintStream` object associated with the standard output stream and stores it in register `v0`.

- **Line 9:** `const-string v1, "Hello World!"`

loads the string "Hello World!" into register `v1`.

- **Line 10:** `` invoke-virtual `{v0, v1}`, Ljava/io/PrintStream;->println(Ljava/lang/String;)V ``

calls the `println` method on the `PrintStream` object in register `v0`, passing the string in register `v1` as an argument. This prints the string "Hello World!" to the standard output stream.

- **Line 12:** `return-void`

returns from the `main` method.

- **Line 13:** `.end method`

marks the end of the method.

## Class Header

Okay, so we looked at a full example. Now, let's zoom in on the very top of a `smali` file. Think of it like the title and introduction of a book – it tells you some important things about what you're about to read! This top part is called the *Class Header*.

Imagine the *Class Header* is like a little information card for the class. It *always* has a couple of important pieces of information, and *sometimes* it has a few extra details.

Here are the important things you'll find in the *Class Header*:

*   `.class`: (Must-have!) We learned this before. It tells you what the class is called (like a name tag!).
*   `.super`: (Must-have!) We learned this too.  This is like saying "This class is a type of..." It tells you what "parent" class this class comes from (like saying "a dog is a type of animal").
*   `.source`: (Nice to have, but not always there!) This tells you the name of the original `.java` file that this `smali` code came from. It's like saying "This recipe came from Grandma's cookbook."
*   `.implements`: (Sometimes there!) This tells you if the class follows specific "rules" or promises to do certain things. Imagine it's like a scout promising to be helpful and kind.
  - This directive is used to specify that the current class implements one or more interfaces. When a class implements an interface, it must provide concrete implementations for all the methods declared in the interface.
  Example: In Java, you can write:
  ```java
  package com.example;

  class ExampleClass implements MyInterface {
      // Class implementation
  }
  ```
  In Smali, this would be represented as:
  ```smali
  .class public Lcom/example/ExampleClass;
  .super Ljava/lang/Object;
  .source "ExampleClass.java"

  .implements Lcom/example/MyInterface;
  ```
* `.debug`: (Rare to see!)
  - This directive is used to enable or disable debugging information for the class. When debugging information is enabled, the Smali code will include additional information that can be useful for debugging purposes. It's practical implementation is hardly seen in the wild.

## Annotations

Annotations in Smali are similar to annotations in Java. They provide metadata about the class, method, or field, such as its visibility or whether it is deprecated.

They are declared using the `.annotation` directive, followed by the annotation's visibility (e.g., `runtime`, `system`, `build`) and the annotation's type descriptor and any associated elements. The annotation block is terminated by the `.end annotation` directive.

Here are some examples of annotations in Smali:

```smali
.class public Lcom/example/ExampleClass;
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

# class definition and methods go here
```

In this example:

* `@Deprecated`: This is a **runtime annotation** (indicated by `runtime`) with the descriptor `Ljava/lang/Deprecated;`. It signifies that the `ExampleClass` is deprecated and should no longer be used.
* `@EnclosingClass`: This is a **system annotation** (indicated by `system`) with the descriptor `Ldalvik/annotation/EnclosingClass;`. The `value` element specifies that `ExampleClass` is enclosed within the `Lcom/example/OuterClass;`.
* `@InnerClass`: This is another **system annotation** with the descriptor `Ldalvik/annotation/InnerClass;`. It indicates that `ExampleClass` is an inner class. The annotation includes elements specifying the `accessFlags` (here, `0x0002`, indicating it's a private inner class, you can read more about access flags at https://jakewharton.github.io/dalvik-dx/docs/latest/com/android/dx/rop/code/AccessFlags.html), the `name` of the inner class ("ExampleClass"), and the `outer` class (`Lcom/example/OuterClass;`).

```java
public static final Parcelable.Creator<j> CREATOR = new i(0);
```

The equivalent Smali code with an annotation for the field's generic signature would look like:

```smali
.field public static final CREATOR:Landroid/os/Parcelable$Creator;

  .annotation system Ldalvik/annotation/Signature;
    value = {
      "Landroid/os/Parcelable$Creator<",
      "LC1/j;",
      ">;"
    }
  .end annotation

.end field
```

Here, the `@Signature` annotation (`Ldalvik/annotation/Signature;`) specifies that the `CREATOR` field is a `Parcelable.Creator` parameterized with the type `C1/j`. This preserves the generic type information from the original Java code.

**Annotation visibility:**

- `system`: This annotation is visible to the virtual machine but not to the Java code.
- `runtime`: This annotation is visible to the Java code at runtime and can be accessed using reflection.
- `build`: This annotation is used during the build process and is not visible at runtime.

## Fields

Fields in Smali are defined using the `.field` directive within a class. Each field has a name, type, access modifiers and optionally an initial value. The syntax for defining a field is as follows:

```smali
.field [access_flags] field_name:field_type [= initial_value]
```

Where:
- `access_flags`: Optional access modifiers (e.g., `public`, `private`, `static`, etc.).
- `field_name`: The name of the field.
- `field_type`: The type of the field (e.g., `I` for integer, `Ljava/lang/String;` for a string, etc.).
- `initial_value`: Optional initial value for the field.

**Example:**

```smali
.field public static final myField:I = 42
.field private myString:Ljava/lang/String; = "Hello, Smali!"
.field public myBoolean:Z
```
here, `myField` is a public static final integer field i.e, it can be accessed from anywhere, is a constant and is of type integer with an initial value of `42`. `myString` is a private field of type string with an initial value of "Hello, Smali!". `myBoolean` is a public field of type boolean with no initial value specified.

***Access Modifiers:**
Access modifiers in Smali are used to control the visibility and accessibility of fields and methods. The common access modifiers are:
- `public`: The field or method is accessible from any other class.
- `private`: The field or method is accessible only within the class it is defined in.
- `protected`: The field or method is accessible within the class and its subclasses.
- `static`: The field or method belongs to the class itself rather than to instances of the class.
- `final`: The field is a constant and cannot be changed after initialization.
- `volatile`: The field is volatile and changes to it are immediately visible to other threads.
- `transient`: The field is not serialized when the object is serialized.
- `synthetic`: The field is generated by the compiler and is not explicitly defined in the source code.
- `enum`: The field is an enumeration type.
- `abstract`: The method is abstract and must be implemented by subclasses.
- `native`: The method is implemented in native code (e.g., C/C++).

## Methods

Methods in Smali are defined using the `.method` directive. The syntax for defining a method is as follows:
```smali
.method [access_flags] method_name([parameter_types])return_type
    .registers number_of_registers

    # method body goes here
.end method
```
Where:
- `access_flags`: Optional access modifiers (e.g., `public`, `private`, `static`, etc.).
- `method_name`: The name of the method.
- `parameter_types`: A list of parameter types enclosed in parentheses. Each type is represented by its Smali descriptor (e.g., `I` for integer, `Ljava/lang/String;` for a string, etc.).
- `return_type`: The return type of the method, represented by its Smali descriptor (e.g., `V` for void, `I` for integer, `Ljava/lang/String;` for a string, etc.).
**Example:**
```smali
.method public static myMethod(I)Ljava/lang/String;
    .registers 2

    const-string v0, "Hello, Smali!"

    return-object v0
.end method
```
In this example, `myMethod` is a public static method that takes an integer parameter and returns a string. The method uses two registers (`v0` and `v1`) to store intermediate values. It creates a string "Hello, Smali!" and returns it.



## Type Descriptors
Type descriptors in Smali are used to represent the types of fields, method parameters and return values. They are similar to Java type descriptors but have a specific syntax. Here are some common type descriptors:
| Descriptor       | Type                    | Value Example (human-readable)                                               | Size in Bytes |
| ---------------- | ----------------------- | ---------------------------------------------------------------------------- | ------------- |
| `V`              | Void                    | `-`                                                                          | `0`           |
| `Z`              | Boolean                 | `true`/`false`                                                               | `1`           |
| `B`              | Byte                    | `-128 to 127`                                                                | `1`           |
| `S`              | Short                   | `-32,768 to 32,767`                                                          | `2`           |
| `C`              | Character               | `'a'`, `'b'`, etc.                                                           | `2`           |
| `I`              | Integer                 | `-2,147,483,648 to 2,147,483,647`                                            | `4`           |
| `F`              | Float                   | `1.4E-45 to 3.4028235E38`                                                    | `4`           |
| `J`              | Long                    | `-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807`                    | `8`           |
| `D`              | Double                  | `4.9E-324 to 1.7976931348623157E308`                                         | `8`           |
| `[`              | Array (reference type)  | `[I` (array of integers), `[Ljava/lang/String;` (array of strings)           | `-`           |
| `L<class_name>;` | Object (reference type) | `Ljava/lang/String;` (String object), `Lcom/example/MyClass;` (custom class) | `-`           |

> [!NOTE]
> Unless stated otherwise, all type descriptors are case-sensitive. For example, `I` is an integer, while `i` is not a valid type descriptor.
> Similarly, unless stated otherwise, all type descriptors in the above table are primitive type while `L<class_name>;` is not a primitive type but a reference type.