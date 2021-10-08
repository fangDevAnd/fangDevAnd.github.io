/**
 广告拦截处理
 */

/**
 * 隐藏主页的广告
 */
function hiddenIndexAppBanner() {


    let eles = document.getElementsByClassName("at-app-banner");
    if (eles.length > 0) {
        eles[0].style.display = "none";
    }
}

function hiddenOpenApp() {
    let eles = document.getElementsByClassName("site-top__open-app");
    if (eles.length > 0) {
        eles[0].style.display = "none";
    }
}


let addNavbar = () => {
    let kk = document.createElement("div");
    kk.innerHTML = "<div class=\"nav-bar\">\n" +
        "    <i class=\"iconfont theme_cr mg-l-10\" onclick='gotoHeme()'>&#xe601;</i>\n" +
        "    <span class=\"theme_cr\">返回</span>\n" +
        "</div>";
    document.body.insertBefore(kk, document.body.firstChild);
}


addNavbar();
hiddenIndexAppBanner();
hiddenOpenApp();

