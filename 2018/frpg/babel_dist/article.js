"use strict";

var articles = {};
articles.top_page = "\n";
articles.manual = "\n# \u8AAC\u660E\u66F8\n## \u8D77\u52D5\u65B9\u6CD5\n- \u30A4\u30F3\u30B9\u30C8\u30FC\u30E9\u30FC\u3092\u8D77\u52D5\u3057\u3066\u6307\u793A\u306B\u5F93\u3063\u3066\u9032\u3081\u308B\u3068\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002\n- \u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3068\u3001\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u306B\u30B2\u30FC\u30E0\u3092\u8D77\u52D5\u3059\u308B\u305F\u3081\u306E\u30A2\u30A4\u30B3\u30F3\u304C\u73FE\u308C\u307E\u3059\u3002\n- \u5B9F\u884C\u304C\u6B62\u3081\u3089\u308C\u305F\u5834\u5408\u306B\u306F\u3000\u53F3\u30AF\u30EA\u30C3\u30AF/\u30D7\u30ED\u30D1\u30C6\u30A3/\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3/\u4FE1\u983C\u3059\u308B\u3000\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n- \u6BCE\u56DE\u306E\u5B9F\u884C\u6642\u306B\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306B\u3064\u306A\u304C\u3063\u3066\u3044\u308C\u3070\u3001\u30B2\u30FC\u30E0\u306E\u66F4\u65B0\u30C1\u30A7\u30C3\u30AF\u3092\u3057\u307E\u3059\u3002\u3053\u306E\u30B2\u30FC\u30E0\u306E\u66F4\u65B0\u304C\u3042\u308C\u3070\u81EA\u52D5\u3067\u66F4\u65B0\u3057\u307E\u3059\u3002\n- \u30B2\u30FC\u30E0\u30C7\u30FC\u30BF\u306F\u3001\u6226\u95D8\u7D42\u4E86\u6642\u306A\u3069\u306B\u30AA\u30FC\u30C8\u30BB\u30FC\u30D6\u3055\u308C\u307E\u3059\u3002\n\n## \u30B2\u30FC\u30E0\u306E\u64CD\u4F5C\u65B9\u6CD5\n- W, A, S, D\u30AD\u30FC: \u79FB\u52D5\u3001\u30AB\u30FC\u30BD\u30EB\u79FB\u52D5\n- J\u30AD\u30FC: \u8A71\u3057\u304B\u3051\u308B\u3001\u6C7A\u5B9A\n- H\u30AD\u30FC: \u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F\u3001\u30AD\u30E3\u30F3\u30BB\u30EB\n\n\u203B\u64CD\u4F5C\u65B9\u6CD5\u306F\u3001\u30B2\u30FC\u30E0\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u30FC\u3092\u610F\u8B58\u3057\u3066\u8A2D\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002\n\n## \u52D5\u4F5C\u74B0\u5883\n- \u5FC5\u9808: Windows\uFF0864\u30D3\u30C3\u30C8\uFF09\u306E\u307F\n- \u63A8\u5968: CPU\uFF1ACore i \u30B7\u30EA\u30FC\u30BA\u4EE5\u4E0A\u3001RAM\uFF1A8GB\u4EE5\u4E0A\n";
articles.get_lost = "\n# \u30B2\u30FC\u30E0\u306B\u8FF7\u3063\u305F\u3089\n\u5BB6\u306B\u3044\u308B\u89AA\u7236\u306B\u8A71\u3057\u304B\u3051\u3088\u3046\u3002\u30A2\u30C9\u30D0\u30A4\u30B9\u304C\u3082\u3089\u3048\u308B\u3088\u3002\n";
articles.distribution = "\n# \u914D\u5E03\n\u30B3\u30DF\u30C3\u30AF\u30DE\u30FC\u30B1\u30C3\u30C895\u3067\u914D\u5E03\u3057\u307E\u3059\u3002\n";
articles.about = "\n# \u3053\u306E\u4F01\u753B\u306B\u3064\u3044\u3066\n\u3053\u308C\u306FMIS.W (\u65E9\u7A32\u7530\u5927\u5B66\u7D4C\u55B6\u60C5\u5831\u5B66\u4F1A\uFF09\u306E2018\u5E74\u30D5\u30A1\u30DF\u30B3\u30F3\u98A8RPG\u4F01\u753B\u306E\u4F5C\u54C1\u3067\u3059\u3002\n\n## \u5236\u4F5C\u30E1\u30F3\u30D0\u30FC\n- SUAN\n- wBeLucky\n- \u30B9\u30BF\u30B9\u30BF\n- Will\n- \u308A\u3087\u30FC\u305F\u308D\u30FC\n- \u304D\u3088\u3057\n- oguni\n- Tsuzu\n- \u6AFB\n- \u767D\n- Recy\n- Caelum\n- \u305D\u30FC\u3057\u3087\u30FC\n- \u30BD\u30A8\u30AD\n- \u30A8\u30EC\u30F3\n- \u304A\u3044\u306A\u308A\n- \u30B5\u30AB\u30BF\u30AB\n- \u9D8F\u91CE\n- \u3086\u30FC\u304C\n\n## \u958B\u767A\u74B0\u5883\n- \u30B2\u30FC\u30E0\u672C\u4F53\u306FC++\u3067DX\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u4F7F\u3063\u3066\u4F5C\u308A\u307E\u3057\u305F\u3002\n- \u30A2\u30C3\u30D7\u30C7\u30FC\u30BF\u30FC\u306B\u306FGo\u8A00\u8A9E\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002\n";
articles.contact = "\n# \u3054\u611F\u60F3/\u30D0\u30B0\u5831\u544A\n\n\u304A\u540D\u524D\n<input type=\"text\" id=\"title_text\" class=\"form-control\" style=\"width: 100%;\" value=\"\u533F\u540D\"><br>\n\n\u30E1\u30C3\u30BB\u30FC\u30B8\n<textarea id=\"body_text\" class=\"form-control\" style=\"width: 100%; height: 200px;\"></textarea>\n<input id=\"submit_button\" type=\"button\" class=\"btn brn-primary\" value=\"\u9001\u4FE1\" onclick=\"sendNewPost()\">\n";
//# sourceMappingURL=article.js.map