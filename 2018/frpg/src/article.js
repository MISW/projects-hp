
const articles = {};


articles.top_page = `
`;


articles.manual = `
# 説明書
## 起動方法
- インストーラーを起動して指示に従って進めると、インストールできます。
- インストールすると、デスクトップにゲームを起動するためのアイコンが現れます。
- 実行が止められた場合には　右クリック/プロパティ/セキュリティ/信頼する　を押してください。

- 毎回の実行時に、インターネットにつながっていれば、ゲームの更新チェックをします。このゲームの更新があれば自動で更新します。
- ゲームデータは、戦闘終了時などにオートセーブされます。

## ゲームの操作方法
- W, A, S, Dキー: 移動、カーソル移動
- Jキー: 話しかける、決定
- Hキー: メニューを開く、キャンセル

※操作方法は、ゲームコントローラーを意識して設定しています。

## 動作環境
- 必須: Windows（64ビット）のみ
- 推奨: CPU：Core i シリーズ以上、RAM：8GB以上
`;


articles.get_lost = `
# ゲームに迷ったら
家にいる親父に話しかけよう。アドバイスがもらえるよ。
`;


articles.distribution = `
# 配布
コミックマーケット95で配布します。
`;


articles.about = `
# この企画について
これはMIS.W (早稲田大学経営情報学会）の2018年ファミコン風RPG企画の作品です。

## 制作メンバー
- SUAN
- wBeLucky
- スタスタ
- Will
- りょーたろー
- きよし
- oguni
- Tsuzu
- 櫻
- 白
- Recy
- Caelum
- そーしょー
- ソエキ
- エレン
- おいなり
- サカタカ
- 鶏野
- ゆーが

## 開発環境
- ゲーム本体はC++でDXライブラリを使って作りました。
- アップデーターにはGo言語を使用しています。
`;


articles.contact = `
# ご感想/バグ報告

お名前
<input type="text" id="title_text" class="form-control" style="width: 100%;" value="匿名"><br>

メッセージ
<textarea id="body_text" class="form-control" style="width: 100%; height: 200px;"></textarea>
<input id="submit_button" type="button" class="btn brn-primary" value="送信" onclick="sendNewPost()">
`;

