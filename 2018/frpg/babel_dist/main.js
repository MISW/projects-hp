"use strict";

{
  // 各ページ移動ボタンのクリックイベント
  Array.prototype.slice.call(document.querySelectorAll(".sidebar-item"), 0).forEach(function (sidebarItem) {
    var id = sidebarItem.id;
    sidebarItem.addEventListener("click", function () {
      if (typeof article[id] !== "string") {
        console.error("typeof article[selector] !== \"string\"");
        return;
      }

      if (/^\s*$/.test(article[id])) {
        document.querySelector("#article").innerHTML = "";
      } else {
        document.querySelector("#article").innerHTML = "<div class=\"card card-preload scale-when-hover markdown-body\">" + marked(article[id].trim()) + "</div>";
        document.body.offsetWidth; // 強制的にレンダリング
        // IE対応のためのslice.call

        Array.prototype.slice.call(document.querySelectorAll(".card-preload"), 0).forEach(function (el) {
          el.classList.remove("card-preload");
        });
      }
    });
  }); // 背景読み込み

  var secondImage = "./img/second_background_anime.gif";
  var img = new Image();

  img.onload = function () {
    document.querySelector("#content").style.backgroundImage = "url(".concat(secondImage, ")");
  };

  img.src = secondImage;
}
//# sourceMappingURL=main.js.map