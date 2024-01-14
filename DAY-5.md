### REGISTERS
**In Smali, registers are used to store any type of data, except for double and long values, where each one requires two registers for 64 bits. There are two types of registers: `local` and `param(eter)` registers**
***


**Let's talk about registers in more detail today**
- In day 1 or I guess 2 I remember I talked about them but not in detail, why? Because at that time my motive was to just let you all familiarize with simple structure of codes and put up some confidence it you all
- Now we're ready to move on, Yay!

**For that I thought about why not walkthrough examples :)**
**NOTE:** _You can refer to the building process [here](https://github.com/AbhiTheModder/understand-smali/blob/main/AndroidIDE.md) for knowing how to download, install, build apk in AndroidIDE from which I've generated apk for the explanations, no problems if you don't want and just want to start through smali explanation part_

### SO Let's start
Basically, there are two types of registers.
First `local`, Secondly `Param(eter)` registers

* **Local registers** [Denoted with `v` as prefix][Static]

Local registers are used to store local variables within a method. They are numbered from v0 to vN, where N is the number of local variables in the method. Local registers are accessible only within the method in which they are defined.

* **Parameter registers** [Denoted with `p` as prefix][Non-Static]

Parameter registers are used to store the arguments passed to a method. They are numbered from p0 to pN, where N is the number of arguments passed to the method. Parameter registers are accessible only within the method in which they are defined.


**Let's go to our main package name class activity**, i.e, `Lcom/example/myapplication/MainActivity;`

