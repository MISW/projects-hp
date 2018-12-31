let sendNewPost /*: () => void */;

{
    // IE対応
    const forEach = (arr /*: any */, f /*: (el: any) => void */)/*: void */ => {
        Array.prototype.slice.call(arr, 0).forEach(f);
    };

    // 強制的にレンダリング
    const renderDOM = ()/*: void */ => {
        console.log(document.body.offsetWidth);
    };

    const showArticleCard = (cardHTML /*: string */)/*: void */ => {
        // カードを表示
        const card = document.createElement('div');
        card.classList.add(
            'card', 'card-preload', 'scale-when-hover', 'markdown-body');
        card.innerHTML = cardHTML;
        document.querySelector("#article").innerHTML = '';
        document.querySelector("#article").appendChild(card);

        // アニメーションをスタート
        renderDOM();
        forEach(document.querySelectorAll(".card-preload"), (el) => {
            el.classList.remove("card-preload");
        });
    };

    // 各ページ移動ボタンの実装
    const setPageTransitionButtonEvent = (articles /*: string[] */)/*: void */ => {
        forEach(document.querySelectorAll(".sidebar-item"), (sidebarItem) => {
            const articleName = sidebarItem.id;
            const articleMarkDown = articles[articleName];
            sidebarItem.addEventListener("click", () => {
                if (typeof articleMarkDown !== "string" ||
                    /^\s*$/.test(articles[articleName])) {
                    document.querySelector("#article").innerHTML = "";
                } else {
                    showArticleCard(marked(articles[articleName].trim()));
                }
            });
        });
    };

    const startLoadingGifAnimation = ()/*: void */ => {
        const secondImage = "./img/second_background_anime.gif";
        const img = new Image();
        img.onload = () => {
            // gifアニメのダウンロードが終わったら、デフォルトの背景と入れ替える
            document.querySelector("#content").style.backgroundImage = `url(${secondImage})`;
        };
        // 背景のgifアニメのダウンロードを開始
        img.src = secondImage;
    };

    const isValidPostContent =
            (titleEl /*: HTMLElement */, bodyEl /*: HTMLElement */)/*: boolean */ => {
        if (!titleEl || !bodyEl) {
            console.error("!titleEl || !bodyEl");
            alert("エラーが発生しました。（!titleEl || !bodyEl）");
            return false;
        }
        if (!titleEl.value.length) {
            alert("名前を入力してください。");
            return false;
        }
        if (titleEl.value.length > 100) {
            alert("名前が長すぎます。100文字以下でお願いします。");
            return false;
        }
        if (!bodyEl.value.length) {
            alert("本文を入力してください。");
            return false;
        }
        if (bodyEl.value.length > 1000) {
            alert("本文が長すぎます。1000文字以下でお願いします。");
            return false;
        }
        return true;
    };

    /* window. */ sendNewPost = () => {
        const titleEl = document.querySelector("#title_text");
        const bodyEl = document.querySelector("#body_text");
        if (!isValidPostContent(titleEl, bodyEl)) {
            return;
        }

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                console.log(xhr);
                alert("送信しました！");
            }
        };
        xhr.open("POST","https://script.google.com/macros/s/AKfycbwsixvFco58E15FhMJEif81z68X8F5ZLrCu1hykKVblh8Eey8o/exec");
        xhr.send(JSON.stringify({
            command: "new",
            title: titleEl.value,
            body: bodyEl.value
        }));
        titleEl.value = "";
        bodyEl.value = "";
    };

    // main
    setPageTransitionButtonEvent(/* window.*/ articles);
    startLoadingGifAnimation();
}
