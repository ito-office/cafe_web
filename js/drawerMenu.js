/* JS_drawer v1.2.0 ,2024 */
/* create by syo motoyama,2022*/

// DOMContentLoadedイベントで、webサイトが完全に読み込み終わってからJavascriptが動くように設定。
document.addEventListener('DOMContentLoaded', function () {
    //ドロワーメニューのボタン要素を取得
    const toggleButton = document.querySelector('.drawerButton');
    //ドロワーメニューのメニュー要素を取得
    const drawerMenu = document.getElementById('drawerMenu');

    // ドロワーメニューのボタンをクリックした際の処理
    toggleButton.addEventListener('click', function (event) {
        // stopProgapation()メソッドを使って、クリックイベントが親要素に伝播しないようにします。
        //今回、ドロワーメニューのボタンと、webサイト全体にクリックイベントを設定するため、
        //ドロワーボタンをクリックした時はwebサイト全体のクリックイベントが動かないようにしています。
        event.stopPropagation();
        drawerMenu.classList.toggle('open');
        toggleButton.classList.toggle('close');
    });

    // ドロワーメニュー内のアンカーリンクを取得します。
    const anchorLinks = document.querySelectorAll('#drawerMenu ul li a');

    // 取得したアンカーリンク全てにクリックイベントを設定。
    anchorLinks.forEach(function (anchorLink) {
        anchorLink.addEventListener('click', function () {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        });
    });

    // ドキュメント（webサイト）内をクリックした際の処理
    document.addEventListener('click', function (event) {
        const targetElement = event.target;

        // ドロワーメニューが開いている場合に限り、ドロワーメニュー外をクリックで閉じます
        if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement) && targetElement !== toggleButton) {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        }
    });
});