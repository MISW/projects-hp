{
    const links = [
        "top_page",
        "manual",
        "get_lost",
        "distribution",
        "about",
        "contact"
    ];

    links.forEach((selector) => {
        document.querySelector("#" + selector).addEventListener("click", () => {
            if (typeof article[selector] !== "string") {
                console.error("typeof article[selector] !== \"string\"");
                return;
            }
            if (/^\s*$/.test(article[selector])) {
                document.querySelector("#article").innerHTML = "";
            } else {
                document.querySelector("#article").innerHTML =
                    "<div class=\"card card-preload scale-when-hover markdown-body\">" + marked(article[selector]) + "</div>";
                document.body.offsetWidth;  // 強制的にレンダリング
                // IE対応のためのslice.call
                Array.prototype.slice.call(document.querySelectorAll(".card-preload"), 0).forEach((el) => {
                    el.classList.remove("card-preload");
                });
            }
        });
    });
}
