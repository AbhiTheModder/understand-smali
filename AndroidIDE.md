## AndroidIDE
- Let's first create our small example app on.
- I'm using this IDE because it's quite new with latest updates and many new features with feel like Android Studio :)
- First, Download it [here](https://github.com/AndroidIDEOfficial/AndroidIDE/releases)
- after downloading the APK a/c to your device, arch CPU install it
- Now it'll be available at your home screen or inside App Drawer if you've disabled home screen shortcut for new apps

<img src="https://github.com/AbhiTheModder/understand-smali/assets/85984486/4a3d04ff-8de8-4603-86ef-8c9405867842" />

- Now open it and let's get to installation:

| Splash | Stats | Grant Perms | Choose SDK | Wait for finish | We're done |
|--------|---------|---------|---------|---------|---------|
| <img src="https://github.com/AbhiTheModder/understand-smali/assets/85984486/05830288-04e2-4a84-a637-f956504ef336" /> | <img src="https://github.com/AbhiTheModder/understand-smali/assets/85984486/201050e6-5e61-4ec0-a980-6eae3ac4a252" /> | <img src="https://github.com/AbhiTheModder/understand-smali/assets/85984486/5e89abdf-75bf-4aa6-b7a9-01e5a6b3b906" /> | <img src="https://github.com/AbhiTheModder/understand-smali/assets/85984486/8f465b4e-31e4-4b04-8d1b-3af78a555ee1" /> | <img src="https://github.com/AbhiTheModder/understand-smali/assets/85984486/3d425baf-42f1-4edf-a953-624eed820be4" /> | ![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/0f489ef8-b71a-4561-8d78-7605718cf88f) |

- **Now let's start building an example app:**
  - Click on the " + Create Project "

![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/5f2716cc-7ccc-48a4-ba30-42748617c5d1)
  - **Choose empty project:**

  ![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/08cfd360-d666-461b-b7af-d20633e6932e)

  - Create our project
  
  ![annotely_image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/5939e0c1-bfb6-45a3-8779-972579cd4ed7)

**First build will take a while to finish things up, so take a break and coffee ☕ :)**
  - Ok so after build succeeds we're good to go further,

  ![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/e186a150-f981-45f9-817d-d7329d80d632)

  - Now don't worry you don't have to code or write anything just click on "run button" and do `assemblerelease`
  
| Run | Search | Confirm & Run |
|--------|--------|--------|
| ![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/8d7fcd54-e987-432d-bf81-c5093b3a60e7) | ![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/675a49ab-b85e-456f-b38a-231724fbb71c) | ![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/9378d8d7-2025-4e4e-94c4-715c2b040082) |

  - After you see "BUILD SUCCESSFUL" close the app and let's head to our All-time fav. MT Manager. 
  - If you followed the build process just as I instructed, then the output build release will be placed at `/storage/emulated/0/AndroidIDEProjects/My Application/app/build/outputs/apk/release/`
  - Ofcource it'll be unsigned so we have to sign first:

| Unsigned Apk | Function | Choose | Sign |
|-----------|-----------|-----------|-----------|
![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/dfa7075c-ea96-4333-b382-5d3c130c3e21) | ![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/d827866f-85a0-4121-8718-27d15cbe1aa3) | ![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/46d5e618-854d-4b81-a9d8-1006d37139e9) | ![image](https://github.com/AbhiTheModder/understand-smali/assets/85984486/9f0ea843-630e-4f5b-97ce-363ace6f7779) |
