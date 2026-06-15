{
   "title": "new-instance",
   "weight": 3
}

# `new-instance`

**NOTE:** _This article was made on the same time as of writing crackme0x01 article, so it might be a good idea to read that first to get a gist of idea as some piece of code have been taken from it, however it's not mandatory to do so._

When reverse-engineering Android APKs, you're bound to encounter **Smali bytecode**. One common Smali instruction is `new-instance`.
Most of the time when working on Android RE APKs, often you will see lines like this:

```smali
new-instance p1, Lcom/example/MyInstance;
```

This creates a new instance of a class. The `p1` is a register that contains the reference to the newly created instance. The `Lcom/example/MyInstance;` is the class that is being instantiated.

To Understand this better you need to be able to understand the meaning behind **Instance Methods** in Java. You might know that Java is an object-oriented programming language. Instance methods are a fundamental part of Java's object-oriented capabilities. They enable objects to have behaviors, interact with their own state, and communicate with other objects

They are essential components of a class that define the behaviors and actions an object of the class can perform. These methods are **non-static** and require an **object of their class to be created before they can be invoked**. This is because instance methods can access instance variables and other instance methods directly, allowing them to operate on the specific state of an object.

## What Does `new-instance` Do?

The `new-instance` instruction creates a new object of a specified class and stores its reference in a register. In Java, you might do something like:

```java
FlagGuard flagGuard = new FlagGuard();
```

In Smali, this is represented by:

```smali
new-instance p1, Lcom/entebra/crackme0x01/FlagGuard;
```

Here's a breakdown:

- `p1`: A register that stores the reference to the new `FlagGuard` object.
- `Lcom/entebra/crackme0x01/FlagGuard;`: The class being instantiated (in this case, `FlagGuard`).

After the `new-instance` instruction, **the object is created but not fully initialized yet**.

## Initializing the Object

After creating the object, we need to call its **constructor** to initialize it. This is where the **`invoke-direct`** instruction comes in. In Java, you call the constructor automatically when creating an object. But in Smali, it breaks down into two steps:

1. **Create the instance**: Which we have already done with `new-instance`.
2. **Call the constructor**.

```smali
invoke-direct {p1}, Lcom/entebra/crackme0x01/FlagGuard;-><init>()V
```

This line directly calls the constructor `-><init>()V` of the `FlagGuard` class on the newly created object stored in `p1`.

If you want to learn more than this then refer to Java Tutorials on Instance Methods and Constructors.