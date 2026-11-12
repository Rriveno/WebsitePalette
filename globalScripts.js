let theme = document.getElementById("themeToggle");

theme.addEventListener('click', themeToggle);

// --backgroundColor: #efefef;
// --fontColor: #534eb9;
// --headerColor: #634bae;
// --borderColor: #7347a2;

function themeToggle() {
    let currentTheme = theme.innerHTML;

    if(currentTheme == "Theme: Dark") {
        theme.innerHTML = "Theme: Light";
        document.documentElement.style.setProperty("--backgroundColor", "#efefef");
        document.documentElement.style.setProperty("--fontColor", "#534eb9");
        document.documentElement.style.setProperty("--borderColor", "#634bae");
    } else {
        theme.innerHTML = "Theme: Dark";
        document.documentElement.style.setProperty("--backgroundColor", "#634bae");
        document.documentElement.style.setProperty("--fontColor", "#efefef");
        document.documentElement.style.setProperty("--borderColor", "#D8DCEC");
    }
}

// const copyBtn = document.getElementById("one-color-one");
// const textElement = document.getElementsByClassName("hex-one");

// copyBtn.addEventListener("click", async () => {
// try {
//     let text = await navigator.clipboard.writeText(textElement.innerHTML);
//     console.log(textElement.innerHTML);
//     copyBtn.innerHTML = "Copied!";
//     setTimeout(() => (copyBtn.innerHTML = "Copy Code"), 100);
// } catch (err) {
//     console.error("Failed to copy text: ", err);
// }
// });