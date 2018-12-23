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

var sendNewPost = function sendNewPost() {
  var titleEl = document.querySelector("#title_text");
  var bodyEl = document.querySelector("#body_text");

  if (!titleEl || !bodyEl) {
    console.error("!titleEl || !bodyEl");
    return;
  }

  if (!titleEl.value.length) {
    return;
  }

  if (titleEl.value.length > 100) {
    alert("名前が長すぎます。100文字以下でお願いします。");
    return;
  }

  if (!bodyEl.value.length) {
    return;
  }

  if (bodyEl.value.length > 1000) {
    alert("本文が長すぎます。1000文字以下でお願いします。");
    return;
  }

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr);
      alert("送信しました！");
    }
  };

  xhr.open("POST", "https://script.google.com/macros/s/AKfycbwsixvFco58E15FhMJEif81z68X8F5ZLrCu1hykKVblh8Eey8o/exec");
  xhr.send(JSON.stringify({
    command: "new",
    title: titleEl.value,
    body: bodyEl.value
  }));
  titleEl.value = "";
  bodyEl.value = "";
};
//# sourceMappingURL=main.js.map