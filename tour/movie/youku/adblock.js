/**
 * 优酷的状态栏使用的是占位的处理方案
 *
 */
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


