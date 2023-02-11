console.log("Hejka. Ten kod jest już w repozytorium Git.");

let section__button = document.querySelector(".section__button");
let body = document.querySelector(".body");
let section__span = document.querySelector(".section__span");

section__button.addEventListener("click", () => {
    body.classList.toggle("section__button--backgroundSwitch");

    section__span.innerText = body.classList.contains("section__button--backgroundSwitch")
        ? "ciemniejszy" : "jaśniejszy";
});


let section__portrait = document.querySelector(".section__portrait");
let section__portraitRemove = document.querySelector(".section__portraitRemove");

section__portraitRemove.addEventListener("click", () => {
    section__portrait.remove();
    section__portraitRemove.remove();
});


let section__fragmentRemove = document.querySelector(".section__button--fragmentRemove");
let section__storyFragment = document.querySelector(".section__storyFragment");

section__fragmentRemove.addEventListener("click", () => {
    section__storyFragment.remove();
    section__fragmentRemove.remove();
});