/**
 * 当前页面主要实现的是加载lezutv的广告拦截的功能实现
 *
 *
 *
 */

/**
 * 捕获乐猪Tv的广告ccv
 */
let block = () => {
    //乐猪Tv的广告使用的是底部bottomNavad的div进行显示的,只要不显示就行
    let ad = document.getElementById("bottomNavad");
    if (ad != null)
        ad.style.display = "none";
}

let addNavbar = () => {
    let kk = document.createElement("div");
    kk.style.height = "46px";
    kk.innerHTML = "<div class=\"nav-bar\">\n" +
        "    <i class=\"iconfont theme_cr mg-l-10\" onclick='gotoHeme()'>&#xe601;</i>\n" +
        "    <span class=\"theme_cr\">返回</span>\n" +
        "</div>";
    document.body.insertBefore(kk, document.body.firstChild);
}

addNavbar();

block();











