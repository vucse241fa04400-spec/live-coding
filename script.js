function showMessage(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;


    toast.classList.add("show");


    clearTimeout(window.toastTimer);


    window.toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);
}


/* PAGE LOAD ANIMATION */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const cards =
            document.querySelectorAll(".card");


        cards.forEach((card, index) => {

            card.style.animationDelay =
                `${index * 70}ms`;


            card.classList.add(
                "card-enter"
            );

        });

    }
);
