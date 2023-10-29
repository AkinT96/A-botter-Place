function showPrewview() {
    if (window.innerWidth >= 1000) {

        const elementZumHovern1 = document.querySelector(".imagebox1 img");
        const auszublendendesElement1 = document.querySelector(".vorschaubild1");

        elementZumHovern1.addEventListener("mouseover", () => {
            auszublendendesElement1.style.display = "flex";
        });

        elementZumHovern1.addEventListener("mouseout", () => {
            auszublendendesElement1.style.display = "none";
        });

        // JavaScript-Code für das zweite Element
        const elementZumHovern2 = document.querySelector(".imagebox2 img");
        const auszublendendesElement2 = document.querySelector(".vorschaubild2");

        elementZumHovern2.addEventListener("mouseover", () => {
            auszublendendesElement2.style.display = "flex";
        });

        elementZumHovern2.addEventListener("mouseout", () => {
            auszublendendesElement2.style.display = "none";
        });

        // JavaScript-Code für das dritte Element
        const elementZumHovern3 = document.querySelector(".imagebox3 img");
        const auszublendendesElement3 = document.querySelector(".vorschaubild3");

        elementZumHovern3.addEventListener("mouseover", () => {
            auszublendendesElement3.style.display = "flex";
        });

        elementZumHovern3.addEventListener("mouseout", () => {
            auszublendendesElement3.style.display = "none";
        });}
}
