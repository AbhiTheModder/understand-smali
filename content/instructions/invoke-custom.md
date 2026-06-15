{
   "title": "invoke-custom",
   "weight": 1
}

# `invoke-custom`


Starting from DEX version 038, the `invoke-custom` instruction was introduced to enable flexible, [dynamic invocation](https://docs.oracle.com/javase/specs/jvms/se10/html/jvms-6.html#jvms-6.5.invokedynamic) of methods. It plays a crucial role in dynamic method handling, particularly useful for lambda expressions and functional programming in Java and allows Dalvik VM to dynamically call methods at runtime by referencing a "call site", which points to specific runtime metadata defining the method to be called. In simple terms, `invoke-custom` makes it possible to execute methods that are not directly known or accessible at compile time but are defined dynamically when the application runs. This dynamic invocation mechanism aligns with Java's `java.lang.invoke` API and provides key support for features like lambda expressions.

### Instruction Syntax and Structure

Here's a basic outline of the syntax:
```plaintext
invoke-custom {vC, vD, vE, vF, vG}, call_site@BBBB
```

- `{vC, vD, vE, vF, vG}`: Registers containing arguments passed to the invoked method.
- `call_site@BBBB`: Reference to a "call site" in the DEX file (identified by the index `BBBB`), which points to a method and the metadata required for invocation.

Each `invoke-custom` instruction has the following fields:

- **Argument word count (4 bits)**: Specifies the number of arguments for the method.
- **Call site reference index (16 bits)**: An index pointing to the `call_site_item` in the DEX file, which contains all the metadata for the invocation.
- **Argument registers**: Up to five registers that hold the method's arguments.

### The Role of `call_site_item`

`call_site_item` is a special DEX structure used to hold metadata about a call site. It's located in the DEX file's data section and contains details about the method to be invoked, including the following:

1. **Bootstrap Method Handle**: A reference to a "bootstrap" method that sets up the call site. This method typically belongs to classes like `LambdaMetafactory` in Java and must return a `java.lang.invoke.CallSite`.
2. **Method Name**: A string representing the name of the method to be resolved.
3. **Method Type**: A descriptor defining the method's argument and return types.

This setup gives `invoke-custom` the information needed to invoke a method dynamically.

#### Example of a `call_site_item`
Here's what a typical `call_site_item` would look like conceptually:
```plaintext
{
    bootstrap_method: VALUE_METHOD_HANDLE (e.g., LambdaMetafactory.metafactory),
    method_name: VALUE_STRING (e.g., "isSplitMetaElement"),
    method_type: VALUE_METHOD_TYPE (e.g., (Lcom/reandroid/arsc/chunk/xml/ResXmlElement;)Z)
}
```
Additional arguments can also be included as constant values, passed to the bootstrap method in order.

### Execution Phases of `invoke-custom`

The `invoke-custom` instruction executes in two main phases:

1. **Call Site Resolution**:
   - The DEX interpreter checks if there's an existing `CallSite` object for the specified call site.
   - If a `CallSite` doesn't exist, the bootstrap method specified in `call_site_item` is invoked with the provided arguments. This bootstrap method returns a `CallSite` object that represents the method to be called.
   - The `CallSite` object is cached for future calls to improve performance.

2. **Call Site Invocation**:
   - After the `CallSite` is resolved, the `MethodHandle` within the `CallSite` is invoked.
   - This invocation works similarly to the `invoke-polymorphic` instruction, where the arguments passed in the `invoke-custom` instruction are used directly.

### Practical Example: `invoke-custom` in Action

Consider this Java code in the [ApkSplitInfoCleaner](https://github.com/REAndroid/ARSCLib/blob/main/src/main/java/com/reandroid/apk/ApkSplitInfoCleaner.java#L55) class:

```java
FilterIterator.of(manifest.recursiveElements(), ApkSplitInfoCleaner::isSplitMetaElement)
```

In bytecode, this invocation of `isSplitMetaElement` as a lambda will be compiled into an `invoke-custom` call, where the DEX file contains a `call_site_item` that references `LambdaMetafactory.metafactory` to create a lambda expression.

#### Bytecode Example
Here's what this might look like in Dalvik bytecode:
```smali
invoke-custom {}, call_site_2("test", ()Ljava/util/function/Predicate;, (Ljava/lang/Object;)Z, 
                  invoke-static@Lcom/reandroid/apk/ApkSplitInfoCleaner;->isSplitMetaElement(Lcom/reandroid/arsc/chunk/xml/ResXmlElement;)Z, 
                  (Lcom/reandroid/arsc/chunk/xml/ResXmlElement;)Z)@Ljava/lang/invoke/LambdaMetafactory;->metafactory(Ljava/lang/invoke/MethodHandles$Lookup;Ljava/lang/String;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodHandle;Ljava/lang/invoke/MethodType;)Ljava/lang/invoke/CallSite;
```

This example showcases the following:

1. `call_site_2` defines the arguments for the `LambdaMetafactory.metafactory` bootstrap method.
2. The bootstrap method generates a `CallSite` instance, enabling the `isSplitMetaElement` method to be invoked as a lambda expression matching a functional interface.

### `invoke-polymorphic`

`invoke-polymorphic` is another bytecode instruction (Also introduced starting from DEX version 038 onwards) similar to `invoke-custom`, but it's specifically used for invoking `MethodHandle` methods like `invoke` or `invokeExact`. While `invoke-custom` is for more general dynamic invocation, `invoke-polymorphic` is restricted to methods directly supporting polymorphic invocation in `MethodHandle`.

### References
- [Dalvik bytecode format | Android Open Source Project](https://source.android.com/docs/core/runtime/dalvik-bytecode)
- [REAndroid/ARSCLib for code examples](https://github.com/REAndroid/ARSCLib.git)
- [Stack Answer](https://stackoverflow.com/a/52708946)