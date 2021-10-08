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

function hiddenOpenApp(){
    let eles = document.getElementsByClassName("site-top__open-app");
    if (eles.length > 0) {
        eles[0].style.display = "none";
    }
}




hiddenIndexAppBanner();
hiddenOpenApp();

