{
   "title": "Examples",
   "weight": 5
}

# Example Modifications in Smali

After gaining an understanding of smali through explanations and resources up to Day 4, let's dive into practical examples to further enhance our skills.

## Example 1: Modifying a String

Modifying a string in a smali file is very easy.

Find the line that contains the string you want to modify. It might look something like this:

```smali
const-string v0, "Original Title"
```

In the above code snippet, "Original Title" is the string we want to modify, and **`v0`** is the variable that holds the string and **`const-string`** is the instruction that loads the string into the variable.

To modify this string, simply replace "Original Title" with your desired title, let's say "New Title":

```smali
const-string v0, "New Title"
```

Save the changes, compile your dex file, when you run your app you'll see the modified string in action.

## Example 2: Comparisions in smali

Comparisons in smali are a bit more complex than in Java, but they follow a similar pattern. Let's take a look at an example:

![alt text](/images/image-2.png)

In this example, we have **three** comparisons:  
1\. **`if-eqz`** checks if **`v0`** is equal to zero. If it is, the program jumps to the **`:label_end`** section.  
2\. **`if-eq`** checks if **`v0`** is equal to **`v1`**. If they are equal, the program jumps to the **`:label_true`** section.  
3\. **`if-nez`** checks if **`v0`** is not equal to zero. If it is not, the program jumps to the **`:label_end`** section.

Although there are many more conditionals in smali, these are the most common comparison instructions in smali, which you'll stumble upon while modifying smali files most of the time. For other types of comparisons, you can refer to the [opcodes-table](https://github.com/AbhiTheModder/understand-smali/blob/main/smali-opcodes/Smali%20-%20Table%20Of%20Java%20Opcode's.pdf).

Now onto our previous conversion, To modify this comparison, you would need to change the values being compared or the actions taken based on the comparison result.

For example, if you want to change the first comparison to check if **`v0`** is equal to 2 instead of 1, you would change the line **`const/4 v0, 0x1`** to **`const/4 v0, 0x2`**.

If you want to change the action taken when the comparison is true, you would modify the instructions following the **`if-eqz`** or **`if-eq`** instruction, depending on the comparison you're modifying.  
Now if you look carefully the above code seems to be checking if **`v0`** is equal to 2 and if it is, it jumps to **`:label_true`** section and then checks if **`v0`** is not equal to zero and if it is not, it jumps to the **`:label_end`** section, so basically it seems like v2 is never being set to 1 ever, now you know what i'm talking about right 😉.

## Example 3: Modifying a Method

Modifying a method in a smali file involves understanding the method's structure and making the necessary changes. Let's take a look at an example:

![alt text](/images/image-3.png)

In the above code snippet, we have a method called **`getVersion`** that returns a string(Remember our previous days talk(s), through `Ljava/lang/String` we made it clear this method will accept strings inside it even if there happen to be no code inside `getVersion` method, you can deduce and make your changes using this little information) representing the version of the app.

Now suppose you have an app which relies on checks for version updates through this method and a version with `2.0.0` just came out, however there are certain function(s) which the developer removed from newer version, which you always used, so you choose to stick to your `1.0.0` version, in that case because of the check, the app started prompting you for updates.
Now you don't want that to happen right?

As talked earlier in **[Example 2: Modifying a String](https://github.com/AbhiTheModder/understand-smali/wiki/DAY-5-%E2%80%90--Examples#example-1-modifying-a-string)** section, we can change the version string to a different value:

![alt text](/images/image-4.png)

Save the changes, compile your dex file, and you can now use your app with 2.0.0 version without being prompted for updates.

## Example 4: Adding a New Method

Adding a new method to a smali file involves defining the method's structure and implementing its functionality. Let's take a look at an example:

- In this example, we'll add a new method called **`getGreeting`** that returns the greeting message "Hello, World!".
- We'll define the method as **`public static`**, which means it can be called without creating an instance of the class.
- The method will return a string, so we'll use the **`return-object`** instruction to return the string value and **`Ljava/lang/String`** to specify that the method returns a string.
- We'll use the **`const-string`** instruction to create a new string object containing the app's name.
- Finally, we'll use the **`.end method`** directive to mark the end of the method definition.

Here's how the code for the new method will look like:

![alt text](/images/image-5.png)

In the above code snippet, we've defined a new method called **`getGreeting`** that returns a string greeting. To use this method:

- Add the new method to the target smali file, but how will you do so?

Now because our method is static will use `invoke-static` instruction to call it.

- To call the new method, you can use the **`invoke-static`** instruction, which allows you to call a static method without creating an instance of the class.
- The **`invoke-static`** instruction takes three arguments: the class containing the method, the method name, and the method signature.
- In this case, the class containing the method let's suppose is `Lcom/example/App`, so the instruction will look like this: **``` invoke-static ``{`{reg*}`}``, Lcom/example/App;->method_name+method_signature ```**
- The method name is **`getGreeting`**, and the method signature is **`()Ljava/lang/String;`** because it takes no arguments and returns a string.
- So the instruction will look like this: **``` invoke-static ``{`{reg*}`}``, Lcom/example/App;->getGreeting()Ljava/lang/String; ```**.
- Finally, you can use the **`move-result-object`** instruction to store the returned string value in a register.

**Note:**  
\* The `reg*` is a placeholder for the register that can be any register which is available in the method.  
\* The `move-result-object` instruction is used to move the result of a method call to a register.

## Caution and Best Practices

Remember to save your changes and compile your dex file(s) before running your app to see the modified comparison in action.

Keep in mind that modifying smali code can have unintended consequences, so it's important to understand what you're doing and to test your changes thoroughly.

Also, always make a backup of your original smali files before making any modifications, so you can easily revert your changes if necessary. Though if you're MT Manager user it automatically creates a new file with `.bak` extension, so you don't have to worry about it.  
But if you're using any other tool then you have to do it manually, also MT only creates backup file of your previous state of modification, so if you want to keep a backup of your original file then you have to do it manually.

Finally, always follow the best practices for modding and respect the intellectual property of the original app developers.

_**Happy modding!**_