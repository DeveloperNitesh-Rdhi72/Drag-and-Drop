const dragitem = document.querySelectorAll("#drag");
const leftbox = document.querySelector(".leftbox");
const rightbox = document.querySelector(".rightbox");

dragitem.forEach(drag => {
    drag.addEventListener("dragstart", (e) => {
        let selected = e.target;

        rightbox.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        rightbox.addEventListener("drop", (e) => {
            rightbox.appendChild(selected);
            selected = null;
        });

        leftbox.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        leftbox.addEventListener("drop", (e) => {
            leftbox.appendChild(selected);
            selected = null;
        });

    })
})