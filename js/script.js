{
    const welcome = () => {
        console.log("Hejka. Ten kod jest już w repozytorium Git.");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const toggleText = document.querySelector(".js-span");

        body.classList.toggle("section__button--toggleBackground");
        toggleText.innerText = body.classList.contains("section__button--toggleBackground")
            ? "ciemniejszy" : "jaśniejszy";
    };

    const portraitRemove = () => {
        const portrait = document.querySelector(".js-portrait");
        const portraitButton = document.querySelector(".js-portraitRemove");

        portrait.remove();
        portraitButton.remove();
    };

    const fragmentRemove = () => {
        const fragmentButton = document.querySelector(".js-fragmentRemove");
        const storyFragment = document.querySelector(".js-storyFragment");

        storyFragment.remove();
        fragmentButton.remove();
    };

    const init = () => {
        const backgroundButton = document.querySelector(".js-backgroundButton");
        const portraitButton = document.querySelector(".js-portraitRemove");
        const fragmentButton = document.querySelector(".js-fragmentRemove");
       
        backgroundButton.addEventListener("click", toggleBackground);
        portraitButton.addEventListener("click", portraitRemove);
        fragmentButton.addEventListener("click", fragmentRemove);
        welcome();
    };

    init();




};