{
    const welcome = () => {
        console.log("Hejka. Ten kod jest już w repozytorium Git.");
    };

    const portraitButton = document.querySelector(".js-portraitRemove");
    const fragmentButton = document.querySelector(".js-fragmentRemove");

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const toggleText = document.querySelector(".js-span");

        body.classList.toggle("body--light");
        toggleText.innerText = body.classList.contains("body--light")
            ? "ciemniejszy" : "jaśniejszy";
    };

    const portraitRemove = () => {
        const portrait = document.querySelector(".js-portrait");

        portrait.remove();
        portraitButton.remove();
    };

    const fragmentRemove = () => {
        const storyFragment = document.querySelector(".js-storyFragment");

        storyFragment.remove();
        fragmentButton.remove();
    };

    const init = () => {
        const backgroundButton = document.querySelector(".js-backgroundButton");

        backgroundButton.addEventListener("click", toggleBackground);
        portraitButton.addEventListener("click", portraitRemove);
        fragmentButton.addEventListener("click", fragmentRemove);

        welcome();
    };

    init();
};