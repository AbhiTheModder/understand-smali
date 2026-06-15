const addCopyButtons = (clipboard) => {
    document.querySelectorAll("pre > code").forEach((codeBlock) => {
        const button = document.createElement("button");
        button.className = "clipboard-button";
        button.type = "button";
        button.innerHTML = 'Copy';
        button.addEventListener("click", () => {
            clipboard.writeText(codeBlock.innerText).then(
                () => {
                    button.blur();
                    button.innerHTML = 'Copied!';
                    setTimeout(() => (button.innerHTML = 'Copy'), 2000);
                },
                (error) => (button.innerHTML = "Error")
            );
        });
        const pre = codeBlock.parentNode;
        pre.parentNode.insertBefore(button, pre);
    });
};

if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    const script = document.createElement("script");
    script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js";
    script.integrity = "sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=";
    script.crossOrigin = "anonymous";
    script.onload = () => addCopyButtons(clipboard);
    document.body.appendChild(script);
}