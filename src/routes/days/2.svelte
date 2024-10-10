<script>
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "../../lib/Menu.svelte";

  let open;
  import { FooterCopyright } from "flowbite-svelte";
</script>

<main>
  <div class="hamburger" aria-label="Toggle navigation">
    <Hamburger --border-radius="0px" bind:open --color="#646cff" />
  </div>

  <Menu {open} />
  <div class="content">
    <p>
      As I mentioned I&#39;ll be adding the pictures of any queries users ask me
      to the next day wiki, so here it is,
    </p>
    <img
      alt=" "
      src="https://user-images.githubusercontent.com/85984486/154830448-6394f8d7-09ab-4a99-8583-866478f3eb12.png"
      width="250"
    />

    <p>
      Let&#39;s take an app : I&#39;ve taken <a
        href="https://apkpure.com/benime-whiteboard-video-maker/com.benzveen.doodlify"
        >Benime Whiteboard Video Maker</a
      >
      Video and methods credits:
      <a href="https://t.me/Mr_Craazy">✘𝙰𝚂✘ ༄ᶬʳ᭄✿CʀaazƳ࿐</a>
      You can watch his full video from
      <a href="https://t.me/ApkEditorPr00/958">here</a>
    </p>
    <ul>
      <li>
        When you&#39;ll download the app from apkpure or any website you&#39;ll
        see it&#39;s in an extensions .apks or .zip or .xapk formats simply
        these are as a archive or bundle format to make size of output less. To
        convert them we need to convert it into .apk format for which we use <strong
          >Antisplit-G2 or SAI</strong
        >
      </li>
    </ul>
    <p>Here used AntiSplit:</p>
    <p>
      <a
        href="https://user-images.githubusercontent.com/85984486/220582158-450e51f9-1523-4232-b243-5270bd3eec35.mp4"
        ><img
          src="https://user-images.githubusercontent.com/85984486/220583032-0e53cc62-10da-45ac-abc7-e4876bdcef2f.png"
          alt="Watch the video"
        /></a
      >
    </p>
    <h3 id="after-converting-to-apk-now-we-are-about-start-our-work-😜">
      After converting to apk now we are about start our work 😜:
    </h3>
    <ul>
      <li>
        GO to the location with MT Manager where the converted apk format is
      </li>
      <li>
        Open the apk and click on any classes.dex then select dex editor
        plus,Then select all the dex:
      </li>
    </ul>
    <p>
      <img
        src="https://user-images.githubusercontent.com/85984486/161694354-143d6dde-21d0-4adc-9935-212ce2d68d30.png"
        alt=" "
        width="250"
      />
      <img
        alt=" "
        src="https://user-images.githubusercontent.com/85984486/161694476-2f03cf6a-5432-4686-a482-d64d8a6b62c2.png"
        width="250"
      />
    </p>
    <p>
      Now from the search option search for <strong>DoodleMainActivity</strong>
    </p>
    <img
      src="https://user-images.githubusercontent.com/85984486/220585332-7258acab-f6c8-427b-bedd-a403a050d20a.png"
      alt=" "
      width="250"
    />

    <blockquote>
      <p>
        Now you&#39;ll be thinking similar to those tutorials i&#39;m going to
        skip it and will let it up to you to know how I came to this conclusion
        to search only <strong>DoodleMainActivity</strong> 😂
      </p>
      <p>Well don&#39;t worry I&#39;m not going to do that:</p>
    </blockquote>
    <ul>
      <li>
        <p>
          Reasons why <strong>DoodleMainActivity</strong> is being searched:
        </p>
        <ol>
          <li>
            As I mentioned it&#39;s good if you have a little Java knowledge
            even only creating the hello world! app in Java is enough for
            beginning the reverse engineering... Now if you recall your memory a
            little bit you&#39;ll remember that the first file during making of
            that <strong><code>hello world!</code></strong> project we make a
            java file named as <strong><code>MainActivity</code></strong> and in
            that file we write everything and after we build the application that
            file is being run and show us hello world! text on main screen
          </li>
          <li>
            Similarly every app has it&#39;s MainActivity which it opens first
            on launch of the application and in this app i.e. Benime that
            activity is <strong><code>DoodleMainActivity</code></strong>
          </li>
          <li>
            It&#39;s always good to first check the opening activity of any app
            during reverse engineering of it for many reasons such as checking
            what&#39;s it is doing on run and sometimes devs leave their
            important stuffs here also like in-app purchases details which we
            people needs 😁
          </li>
          <li>
            So I hope this much is enough reasons for you to understand why <strong
              >DoodleMainActivity</strong
            > is being searched.
          </li>
        </ol>
      </li>
      <li>
        <p>
          Open the first result which you get and just like in the below image
          click on <code>goto</code> it&#39;ll lead you guy&#39;s to the
          <strong>DoodleMainActivity</strong>
        </p>
      </li>
    </ul>
    <img
      src="https://user-images.githubusercontent.com/85984486/220589905-9766f8d9-7108-4bb4-bdc1-111a5ae79f72.png"
      alt=" "
      width="250"
    />

    <h2 id="first-lets-know-about-static-field-in-java">
      First let&#39;s know about <strong><code>static field</code></strong> in Java:
    </h2>
    <ul>
      <li>
        I searched on google for its quicker and short understanding and you can
        see:
      </li>
    </ul>
    <img
      src="https://user-images.githubusercontent.com/85984486/220591408-431e1274-c2f0-41d9-b412-d0d6291d77c3.png"
      alt=" "
      width="250"
    />

    <img
      src="https://user-images.githubusercontent.com/85984486/220590692-f6e81675-2934-40ee-b120-1dc52387ea50.png"
      alt=" "
      width="250"
    />

    <ul>
      <li>
        From these results one thing is clear that it&#39;s being used to store
        some values
      </li>
      <li>
        Now let&#39;s see what we get in the <strong>DoodleMainActivity</strong>
        class:
      </li>
    </ul>
    <img
      src="https://user-images.githubusercontent.com/85984486/220592275-442f677f-c3ed-4520-bffd-894fa39d38c9.png"
      alt=" "
      width="250"
    />

    <p>
      aha 😜 So there is an static field in this class, that means <strong
        ><code>R:Z</code></strong
      >
      is being used to store some value and what does
      <strong>'<code>Z</code>'</strong> represents in smali?(of course boolean) so
      it only can store two values i.e., either true or false
    </p>
    <blockquote>
      <p>
        <strong>NOTE:</strong> It&#39;s to be noted that every time you see
        static fields in classes of app doesn&#39;t mean that it&#39;s right and
        you start editing with that and began complaining about
        <strong
          >not working but you still followed my method in another app</strong
        >
        LoL 🤣. We have to analyze that class to see if the
        <strong>in-app purchases are related to that field or not</strong>, only
        then start editing them.
      </p>
    </blockquote>
    <ul>
      <li>
        Now after analyzing the code we came to conclusion that this field is
        the value where data is stored, you can also see as <strong
          ><code>ca-pub-xxx</code></strong
        > etc. codes are used for ads and in-app purchases:
      </li>
    </ul>
    <img
      src="https://user-images.githubusercontent.com/85984486/220594836-ae987741-35e9-426f-b796-50d8acdfb95c.png"
      alt=" "
      width="250"
    />

    <ul>
      <li>
        Now then search for the places inside the class where that static field
        is called, and we reach here:
      </li>
    </ul>
    <img
      src="https://user-images.githubusercontent.com/85984486/220595225-c085947e-bbcb-404d-b0a3-60d8fe7f1679.png"
      alt=" "
      width="250"
    />

    <ul>
      <li>
        For more understanding of below lines refer to <a href="/3">DAY 03</a>
      </li>
    </ul>
    <blockquote>
      <p>
        Now let&#39;s understand through line one of <strong
          ><code>G(Ljava/lang/Boolean;)V</code></strong
        >
        we can understand that first it&#39;s creating boolean to register p1 to
        store bool value in it then through <strong><code>if-eqz</code></strong>
        checking if value of p1 results 0 (false) or 1 (true) and if the value results
        in 0 then it&#39;ll go to <code>:cond_13</code> i.e., line 237 where you
        can see then it&#39;ll make p1 value 0 and use the field bool
        <code>R:Z</code> which we see earlier here... from above image we can also
        see if it&#39;s false it&#39;ll skip the result and will not execute the
        below codes of if-eqz so as to run then we&#39;ll move these codes inside
        the condition as:
      </p>
    </blockquote>
    <img
      src="https://user-images.githubusercontent.com/85984486/220597715-97fed673-71e8-43b6-91e4-dedc4a63e897.png"
      alt=" "
      width="250"
    />

    <img
      src="https://user-images.githubusercontent.com/85984486/220598111-47d4e87c-e2c4-49c9-b3fc-607e45d0a29d.png"
      alt=" "
      width="350"
    />

    <p>
      then we&#39;ll return the value as return-void because register v0 value
      is being stored to p1:
    </p>
    <img
      src="https://user-images.githubusercontent.com/85984486/220598987-0187eb4b-eba4-4199-8fbf-a1846a1b78b4.png"
      alt=" "
      width="250"
    />

    <ul>
      <li>
        Now let&#39;s move on and it&#39;s similar (as there is also same codes
        just we need to remove the if-eqz code which I discussed earlier about)
        to above process so I&#39;ll be skipping explanation still if anyone of
        you doesn&#39;t understand below processes then as always I say
        you&#39;re free to ask to me at <a href="https://t.me/QbtaumaiBot"
          >@Qbtaumai</a
        > 😉:
      </li>
    </ul>
    <p>
      <img
        src="https://user-images.githubusercontent.com/85984486/220600212-528ea9f9-dfad-418f-b9f2-56827c16a7f3.png"
        alt=" "
        width="250"
      />
      <img
        src="https://user-images.githubusercontent.com/85984486/220600242-afafefba-62b6-452c-a585-b15aff8fcba0.png"
        alt=" "
        width="250"
      />
      <img
        src="https://user-images.githubusercontent.com/85984486/220600251-7866c615-e284-4160-beac-95cf67c074e9.png"
        alt=" "
        width="250"
      />
      <img
        src="https://user-images.githubusercontent.com/85984486/220601199-fc62e6b6-1033-4a71-a128-2dd6a863c73c.png"
        alt=" "
        width="250"
      />
      <img
        src="https://user-images.githubusercontent.com/85984486/220601231-67da3aea-1947-4cb1-a8a8-286fe995c74c.png"
        alt=" "
        width="250"
      />
    </p>
  </div>
  <div
    data-chirpy-theme="system"
    data-chirpy-comment="true"
    id="chirpy-comment"
  ></div>
</main>

<a class="Back" href="/days/1" aria-label="Go To Previous Page">
  <button> ⇦ </button>
</a>

<a class="Next" href="/days/3" aria-label="Go To Next Page">
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
  .content {
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
