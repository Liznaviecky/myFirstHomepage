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

    const init = () => {
        const backgroundButton = document.querySelector(".js-button");
        const portraitButton = document.querySelector(".js-portraitRemove");

        backgroundButton.addEventListener("click", toggleBackground);
        portraitButton.addEventListener("click", portraitRemove);

        welcome();
    };

    init();






    let section__fragmentRemove = document.querySelector(".section__button--fragmentRemove");
    let section__storyFragment = document.querySelector(".section__storyFragment");

    section__fragmentRemove.addEventListener("click", () => {
        section__storyFragment.remove();
        section__fragmentRemove.remove();
    });
};