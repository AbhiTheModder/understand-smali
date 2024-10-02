<script>
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "./lib/Menu.svelte";

  let open;
  import { Footer, FooterCopyright } from "flowbite-svelte";
</script>

<main>
  <div class="hamburger" aria-label="Toggle navigation">
    <Hamburger --border-radius="0px" bind:open --color="#646cff" />
  </div>

  <Menu {open} />
  <h1 class="title">Introduction!</h1>
  <p class="title sub">
    This wiki is for the beginners in reverse engineering, who keep wondering
    about everything inside smali.
  </p>
  <br />
  <p class="title sub">Ready to dive in?</p>
  <a href="/1" aria-label="Dive into the wiki">
    <button aria-label="Let's Start" class="button bounce" type="button">
      Let's Start
    </button>
  </a>
  <h2 class="title subhead">External Resources:</h2>
  <br />
  <br />
  <div class="subheadgroup">
    <li class="li">
      <b>Introduction to Smali</b>:
      <a href="https://te.legra.ph/Introduction-to-Smali-06-29">PART 1</a>
      |
      <a
        href="https://github.com/AbhiTheModder/understand-smali/blob/main/Introduction%20to%20smali%20by%20euzada%20part%202.md"
        >PART 2</a
      >
    </li>
  </div>
  <div class="subheadgroup two">
    <li class="li">
      List of smali <b>opcodes</b> table [pdf]:
      <a
        href="https://github.com/AbhiTheModder/understand-smali/blob/main/smali-opcodes/Smali%20-%20Table%20Of%20Java%20Opcode's.pdf"
        >Download</a
      >
    </li>
  </div>
  <div class="subheadgroup three">
    <li class="li">
      <b>Smali Helper</b> Android App:
      <a
        href="https://github.com/AbhiTheModder/understand-smali/tree/main/smali-helper"
        >Get APK</a
      >
    </li>
  </div>
  <div class="subheadgroup four">
    <li class="li">
      <b>Rev</b>(verse) <b>Engi</b>(neers) [bot]:
      <a href="https://t.me/RevEngiBot">Try It Here</a>
    </li>
    <br />
  </div>
  <div class="subheadgroup five">
    <li class="li">
      <b>Basic Internet scraps on smali</b>:
      <a
        href="https://github.com/AbhiTheModder/understand-smali/wiki/Basic-Internet-Scraps-%E2%80%90-@Spicey_01"
        >Click Here</a
      >
    </li>
    <br />
  </div>
  <div class="subheadgroup six">
    <li class="li">
      <b>Android Dalvik OPCODES</b>:
      <a
        href="https://developer.android.com/reference/dalvik/bytecode/Opcodes.html"
        >Click Here</a
      >
    </li>
    <br />
  </div>
  <div class="subheadgroup seven">
    <li class="li">
      <b>Smali CheatSheet</b>:
      <a
        href="https://gist.github.com/AndHager/6302d7cf759312fd1ac745839c351428"
        >Click Here</a
      >
    </li>
    <br />
  </div>
  <div class="subheadgroup eight">
    <li class="liei">
      <b>Research Articles on smali</b>:
      <a
        href="https://github.com/AbhiTheModder/understand-smali/tree/main/Articles"
        ><strong><code>../Articles</code></strong></a
      >
    </li>
    <br />
  </div>
  <div
    data-chirpy-theme="system"
    data-chirpy-comment="true"
    id="chirpy-comment"
  ></div>
</main>

<a class="Back" href="/" aria-label="Back to Home">
  <button> ⇦ </button>
</a>

<a class="Next" href="/1" aria-label="Start Day 1">
  <button> ⇨ </button>
</a>

<Footer>
  <div class="footer">
    <FooterCopyright
      aClass="hover:underline"
      href="https://github.com/AbhiTheModder"
      by="AbhiTheModder"
      year={2024}
      copyrightMessage=""
    />
  </div>
</Footer>

<style>
  .title {
    font-weight: 600;
  }
  .sub {
    font-weight: 200;
  }
  .subhead {
    font-weight: 400;
    position: absolute;
    left: 0.5;
    padding: 0;
    margin-top: 5px;
  }
  .subheadgroup {
    list-style-type: none;
    position: absolute;
    left: 0.5;
    margin-top: 30px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
  .li {
    font-weight: 400;
  }
  .liei {
    font-weight: 700;
  }
  .two {
    margin-top: 60px;
  }
  .three {
    margin-top: 90px;
  }
  .four {
    margin-top: 120px;
  }
  .five {
    margin-top: 150px;
  }
  .six {
    margin-top: 180px;
  }
  .seven {
    margin-top: 210px;
  }
  .eight {
    margin-top: 240px;
  }
  #chirpy-comment {
    margin-top: 270px;
  }
  .Next {
    right: 0;
    margin-right: 20px;
  }

  .Back {
    left: 0;
    margin-left: 20px;
  }

  .bounce {
    animation: bounce 5s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
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
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
  }
  @media (prefers-color-scheme: light) {
    .footer {
      color: black;
    }
  }
</style>
