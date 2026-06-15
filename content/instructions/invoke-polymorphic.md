{
   "title": "invoke-polymorphic",
   "weight": 2
}

### `invoke-polymorphic`

The `invoke-polymorphic` instruction was introduced alongside `invoke-custom` in DEX version 038, specifically designed to call "signature polymorphic" methods like `MethodHandle.invoke` and `MethodHandle.invokeExact`. This functionality enables more flexible method invocation in bytecode, allowing methods to be called with a variable number and type of arguments, without the need for wrapping them in arrays or converting primitive types.

### What Does "Signature Polymorphism" Mean?

In the case of `invoke-polymorphic`, "polymorphism" refers to methods capable of handling different types and numbers of arguments, known as "signature polymorphic" methods. Unlike standard methods, which require fixed parameter types and counts, signature polymorphic methods can accept any combination of argument types directly in bytecode. This contrasts with Java's usual `Object...` (varargs) parameter style, where arguments are typically passed as an array of `Object`s, making `invoke-polymorphic` highly efficient for diverse method signatures.

Currently, the only signature polymorphic methods in Java are:
- `MethodHandle.invoke(Object...)`
- `MethodHandle.invokeExact(Object...)`

These methods are designed to accept different signatures, a capability defined in the JVM Specification, §2.9.3.

### Syntax of `invoke-polymorphic`

```plaintext
invoke-polymorphic {vC, vD, ...}, Ljava/lang/invoke/MethodHandle;->methodName([Ljava/lang/Object;)Ljava/lang/Object;, (Signature)ReturnType
```

In this structure:
- **Registers (`{vC, vD, ...}`)**: These contain the actual arguments for the `MethodHandle` invocation.
- **Method Reference (`Ljava/lang/invoke/MethodHandle;->methodName(...)`)**: Refers to `invoke` or `invokeExact` method, specifying the signature and return type dynamically.
- **Signature and Return Type**: Directly specified in the instruction, allowing it to match the expected argument and return types of each invocation.

### Practical Example of `invoke-polymorphic`

Consider this Java method that uses `MethodHandle.invoke` and `MethodHandle.invokeExact`:

```java
void foo(MethodHandle handle) throws Throwable {
    handle.invoke(10, 20);
    handle.invokeExact("foo", "bar");
}
```

This code translates into Dalvik bytecode as follows:

```smali
const/16 v0, 0xa
const/16 v1, 0x14
invoke-polymorphic {p1, v0, v1}, Ljava/lang/invoke/MethodHandle;->invoke([Ljava/lang/Object;)Ljava/lang/Object;, (II)V

const-string v0, "foo"
const-string v1, "bar"
invoke-polymorphic {p1, v0, v1}, Ljava/lang/invoke/MethodHandle;->invokeExact([Ljava/lang/Object;)Ljava/lang/Object;, (Ljava/lang/String;Ljava/lang/String;)V
```

In this bytecode:

1. The `invoke-polymorphic` instruction is used to call `MethodHandle.invoke` and `MethodHandle.invokeExact` directly, with arguments passed in registers (`{v0, v1}`) instead of a single array.
2. The `(II)V` and `(Ljava/lang/String;Ljava/lang/String;)V` type signatures are explicitly included, allowing the `MethodHandle` to handle primitive and object types interchangeably.

### Why Use `invoke-polymorphic`?

- **Efficiency**: Unlike varargs methods, `invoke-polymorphic` calls can handle primitive types directly without boxing, and arguments don't need to be bundled into arrays.
- **Dynamic Invocation**: Provides a flexible, low-overhead way to call methods dynamically in DEX, particularly beneficial for applications requiring runtime method dispatch.

### Differences Between `invoke-custom` and `invoke-polymorphic`

- **Purpose**: `invoke-custom` provides a general mechanism for dynamic method calls, while `invoke-polymorphic` is specifically designed for signature polymorphic methods in the `MethodHandle` class.
- **Signature Flexibility**: `invoke-polymorphic` allows different signatures for each call without needing wrappers, unlike `invoke-custom`, which relies on the `call_site_item` structure to define a method signature statically.

### References

- [Dalvik bytecode format | Android Open Source Project](https://source.android.com/docs/core/runtime/dalvik-bytecode)
- [JVM Specification §2.9.3](https://docs.oracle.com/javase/specs/jvms/se11/html/jvms-2.html#jvms-2.9.3)
- [Stack Answer](https://stackoverflow.com/a/52708946)