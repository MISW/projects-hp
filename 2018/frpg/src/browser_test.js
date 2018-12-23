if (platform.name === 'IE' &&
    +platform.version.slice(0, platform.version.indexOf(".")) < 11) {
    document.getElementById("content").insertAdjacentHTML('afterbegin',
        '<div id="browser_alert">' +
            'このページはご使用のブラウザでは正しく表示できません。' +
            '<a href="https://www.mozilla.org/ja/firefox/new/">Firefox</a>, ' +
            '<a href="https://www.google.com/chrome/">Google Chrome</a>, ' +
            '<a href="https://www.microsoft.com/ja-jp/windows/microsoft-edge">Microsoft Edge</a>' +
            'などの最新のブラウザの使用を推奨します。' +
        '</div>');
}
