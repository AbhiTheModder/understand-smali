## INFORMATION:
INTRODUCTION TO SMALI PART 2
BY @EUZADA

# cond VS goto
Examples of words you will encounter at the beginning that you must understand to know how to behave with the codes.
#Cond_xxx and #goto_xxx are basically the same. The only difference while you compile the file, the compiler will replace cond with goto if goto was the command. Let me give you an example. If eqz v0, :cond_1 means if v0 equal to zero go to cond_1. You can force it to go to cond_1 by typing before if statement goto :cond_1. If you compile the file and open it again, you will see instead goto :goto_xxx. Here, the compiler will replace the word with something clearer. So anywhere in the code if you see :cond_xx you know that this is a jump from an if statement (a cond). However, if you see :goto_xx you know that an unconditional jump take you here with goto statement.  

# Try and catch
#Try_start and #try_end are part of try ... Catch statement. You are missing catch. It is a way to protect your app from crashing. Let's see an example. We know that in division we can't divide a number by zero. So let's say in your program you want to divide two numbers. But if the denominator is equal zero your app will definitely crash. To prevent the crash, you need to use is in Java try ... Catch statement. Which will be in smali try_start ...(the code) try_end and catch. So in smali between try_start and try_enf you put your code like that:

Try_start_xx
Divide a/b 

Try_end_xx

Catch
Message : you can't use zero as denominator.

So here instead of crashing the app, the user will receive an error message, but the app will be catch by this message and continue running with no crash.

# pswitch or case statement
#Pswitch is exactly case statement in Java or C. Instead of doing many if statement, you can do case statement.

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

## I found this nice example online:

int day = 4;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  case 4:
    System.out.println("Thursday");
    break;
  case 5:
    System.out.println("Friday");
    break;
  case 6:
    System.out.println("Saturday");
    break;
  case 7:
    System.out.println("Sunday");
    break;
}
// Outputs "Thursday" (day 4)

I don't think it needs explainations. It is clear and simple to understand. Here like you said. If day == 1, than print out Monday ...
