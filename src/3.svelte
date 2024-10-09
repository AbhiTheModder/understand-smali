<script>
  import { Hamburger } from 'svelte-hamburgers';
  import Menu from './lib/Menu.svelte';

  let open;
  import { FooterCopyright } from 'flowbite-svelte';
</script>

<main>
  <div class="hamburger" aria-label="Toggle navigation">
    <Hamburger
    --border-radius="0px"
    bind:open
    --color="#646cff" /></div>

  <Menu {open} />
  <div class="content">
    <h3 class="registers">REGISTERS</h3>
    <p><strong>In Smali, registers are used to store any type of data (such as int, float, boolean, objects, and arrays), except for double and long values, where each one requires two registers for 64 bits and then pass arguments to the method. There are two types of registers: <code>local</code> and <code>param(eter)</code> registers</strong></p>
    <hr>
    <p><strong>Let&#39;s talk about registers in more detail today</strong></p>
    <ul>
    <li>On the first or second day, I recall discussing a bit about the topic, but I did not delve into detail. My primary objective at that time was to introduce you to the fundamental structure of codes and instill confidence in your abilities. This approach aimed to lay a solid foundation before exploring more intricate concepts.</li>
    <li>Now we&#39;re ready to move on, Yay!</li>
    </ul>
    <p><strong>So, I was thinking, why not take a stroll through some examples? It'll be like a fun walk in the park, but instead of trees and flowers, we'll have code and awesomeness. Get ready to explore and learn in a whole new way!</strong>
    <br><br><strong>NOTE:</strong> <em> If you're curious about the building process, you can check out this link: <code><a href="https://github.com/AbhiTheModder/understand-smali/blob/main/AndroidIDE.md">https://github.com/AbhiTheModder/understand-smali/blob/main/AndroidIDE.md</a></code>. It's got all the details on how to download, install, and build an APK in AndroidIDE. I used it to generate the APK for the explanations in this guide. But no worries if you're not into that right now. You can always just jump straight into the Smali explanation part.</em></p>
    <h3 id="so-lets-start">SO Let&#39;s start</h3>
    <p>Basically, there are two types of registers.
    First: <code>local</code>, Second: <code>Param(eter)</code> registers</p>
    <ul>
    <li><strong>Local registers</strong> [Denoted with <code>v</code> as prefix]</li>
    </ul>
    <p><strong>Local registers</strong> are used to store local variables within a method. They are numbered from <code>v0</code> to <code>vN</code>, where <strong>N</strong> is the number of local variables in the method. <br><li>They are accessible only within the method in which they are defined.
    When a method is called, the arguments are copied to these local registers. <li>After a method is called, the local registers are destroyed. Well just think if they&#39;ll not get destroyed it&#39;ll hold same data always then how could the dev or app will store different types of data and use at other places. Just think like I used <code>v0</code> once to store a false value for boolean, and it gets stored permanently then LMAO if I used <code>v0</code> again anywhere else it would have the same bool value 🤣 (for ex. I used <code>const/4 v0, 0x0</code>). So they&#39;re stored until and only when that method is used/called/executed, and after it ends those gets destroyed and that&#39;s also another reason when sometimes we see a method call we also see that two registers are used like <code>invoke-virtual {'{v0,'} {'v1}'} Lcom/some/package;-&gt;class()V or anything</code> so here just after that <code>class</code> finished working some value got returned to it&#39;s <code>v0</code> reg. And same time when it was called it took that and stored again to another one because it&#39;s going to be destroyed soon. </p>
    <p>Local registers are an important part of the Smali language. They provide a way to store temporary values and pass arguments to methods</p>
    <ul>
    <li><strong>Parameter registers</strong> [Denoted with <code>p</code> as prefix]</li>
    </ul>
    <p>Parameter registers are used to store the arguments passed to a method. They are numbered from <code>p0</code> to <code>pN</code>, where <strong>N</strong> is the number of arguments passed to the method. Parameter registers are accessible only within the method in which they are defined.</p>
    <p><strong>Let&#39;s go to our main package name class activity</strong>, i.e, <code>Lcom/example/myapplication/MainActivity;</code></p>
    <p><strong>This is how it looks like at direct method <code>&lt;init&gt;</code>:</strong></p>
    <p><img src="https://github.com/AbhiTheModder/understand-smali/assets/85984486/361c630c-da7f-49ce-9796-52cd5f0d2942" alt="annotely_image"></p>
    <p><code>TL;DR - I&#39;ll talk about methods, those other things also but for now focusing on registers</code></p>
    <h2 id="registers-xx"><code>.registers xx</code></h2>
    <p><strong>Hey,</strong> Yes I&#39;m talking to you, did you see that line <code>.registers 1</code>. <strong>Did you?</strong></p>
    <p>Oh, yes of course you would&#39;ve 😆, So that&#39;s what <em>defines how many registers are going to be used inside a method</em></p>
    <p><strong>YOU:</strong> So, does it mean if we use an extra register like v0,v2,v1 etc. it&#39;ll not work ?</p>
    <p><strong>ME:</strong> Yes, it&#39;ll not</p>
    <p><strong>YOU:</strong> But but..., I remember when I edit or put any extra register containing code inside methods MT just saves it without showing any error 😢 then why&#39;re you saying like that :(</p>
    <p><strong>ME:</strong> Have you checked what MT does after you save and compile it back, ever ?</p>
    <p><strong>YOU:</strong> NO</p>
    <p><strong>ME:</strong> Of course in MT you&#39;ll not face it, but maybe in some traditional or Apktool you&#39;ll face them. Now let me show you reason why MT doesn&#39;t do that, Simple reason is that MT automatically does the work for ya bruh. See below</p>
    <table>
    <thead>
    <tr>
    <th>Original code ⇣</th>
    <th>We Modified ⇣</th>
    <th>After compilation and re-opening with MT ⇣</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><img width="100%" src="https://github.com/AbhiTheModder/understand-smali/assets/85984486/36225df8-a59a-4e09-83b4-5bf45d14f02d" alt="annotely_image" ></td>
    <td><img width="100%" src="https://github.com/AbhiTheModder/understand-smali/assets/85984486/45978748-214e-4c33-b278-b68213d06956" alt="annotely_image"></td>
    <td><img width="100%" src="https://github.com/AbhiTheModder/understand-smali/assets/85984486/78b608b1-c94f-46df-b14e-23c81ffb55b1" alt="annotely_image"></td>
    </tr>
    </tbody></table>
    <p>OR MT Could do this too sometimes:</p>
    <p><img src="https://github.com/AbhiTheModder/understand-smali/assets/85984486/71ece454-e50d-49d2-826c-d0f29e8e95e8" alt="annotely_image"></p>
    <p>Notice that in above image <code>.registers</code> line didn&#39;t increase registers besides it even modified our original intended <code>v0</code> to <code>p0</code>, well I&#39;ll talk about this also just wait for a while</p>
    <p>Now back to our previous talk</p>
    <p><strong>ME:</strong> did you get it now, did you see how MT increased the <code>registers</code> count from <code>1</code> to <code>2</code> there now I hope you&#39;ll understand
    <br><strong>YOU:</strong> (ME: I&#39;ll wait your comments about this if you get it right or not)</p>
    <p><strong>Extra INFO:</strong></p>
    <ul>
    <li>sometimes you&#39;ll encounter <code>.locals xx</code> like line also instead of <code>.registers xx</code> (xx used for any number). Well, not much of big issue <code>.locals</code> are used to define how many <strong>local numbers</strong>(again v0, v1, v2, ... vN) of registers used by methods, and they&#39;re <strong>statically</strong> known.</li>
    <li>Also note that when there is <code>.locals</code> defined, it means an extra number for parameter registers, about which we&#39;ll talk next day. So it&#39;ll be like this
    if code has <code>.locals 1</code> it&#39;ll mean that there should/will be <em>2 local registers</em> and <em>1 param(eters) registers</em> will be allowed in that method.</li>
    </ul>
    <p><strong>Ques.)</strong>How to increase register count inside a method safely and identify new usable registers?</p>
    <p><strong>Ans.)
      <code>Increase the register count of the method, and use the newly created registers
        the only gotcha is that the new registers aren't at the end of the register range - they're actually just before the parameter registers.
        
        For example, let's take a method that has 5 registers total (.registers 5), 3 of which are parameter registers. So you have v0 and v1 which are non-param registers, and p0-p2 which are the 3 parameter registers, and are aliases for v2-v4.
        
        If you need to add an additional 2 registers, you would bump it up to .registers 7. The parameter registers stay at the end of the register range, so p0-p2 are now aliased to v4-v6, and v2 and v3 are the new registers that are safe to use.</code>
        <br> Source: <a href="https://stackoverflow.com/a/12648626"> Jesus Freke on StackOverflow</a>
        <br><br> If you;re having difficulty understanding above ans by Freke, let's take an example of cricket:
      <code>Think of it like this: You’re in the middle of a cricket match with your pals, ok? There are 5 of you out there, and you’ve got this solid trio you always toss the ball to – they’re like your go-to guys, yep you get it by now we call them the ‘parameter registers,’ because passing to them feels like your second nature.<br>
        Now, imagine you want to up your game by bringing in a couple of new players, aiming to rack up more runs. But here’s the catch: you can’t just stick them at the back; that’s where your main squad is. So, you slot them in just before your usual crew. Voilà, you’ve now got a 7-player lineup!<br>
        But wait a sec...<br>
        Your original three musketeers?<br>
        They’re still your ‘parameter registers,’ the ones you rely on the most, now chilling at the back. And the newbies? They’re your ‘new registers.’ You’re breaking them in, using them to swing the bat or roll the arm over. They’re fresh on the team, so you’re still getting the hang of playing with them, but they’re all set for action.</code>  
      </strong></p>
    <p>TBC...</p>
  </div>
  <div
    data-chirpy-theme="system"
    data-chirpy-comment="true"
    id="chirpy-comment"
  ></div>
</main>

<a class="Back" href="/2" aria-label="Go To Previous Page">
  <button>
    ⇦
  </button>
</a>

<a class="Next" href="/4" aria-label="Go To Next Page">
  <button>
    ⇨
  </button>
</a>

<FooterCopyright aClass="hover:underline" href="https://github.com/AbhiTheModder" by="AbhiTheModder" year={2024} copyrightMessage= "" />

<style>
  .content {
    text-align: left;
  }
  
  .registers {
    /* font-size: small;
    padding: 5px; */
    font-weight: 700;
    text-decoration: underline;
    text-align: center;
    /* margin-left: 100px; */
  }

  .Next {
    right: 0;
    margin-right: 20px;
  }

  .Back {
    left: 0;
    margin-left: 20px;
  }

  .Next, .Back {
    position: fixed;
    bottom: 0;
    margin-bottom: 20px;
  }

  .hamburger {
    position: absolute;
    top:0;
    left:0;
  }
</style>
