/**
 * 主要的功能是实现对web程序预加载脚本程序
 *该脚本会被加载到webview中,通过android的webview进行调用
 *
 */


/**
 * 添加返回的按钮
 */

let addBack = () => {
    let ele = addEleBody("div", "backItem", "_global_back");
    ele.innerHTML = "<i class=\"iconfont\">&#xe600;</i>";
    ele.onclick = function () {
        window.location.href = "https://fangdevand.github.io/movie/";
    }
}


//添加脚本
let addScript = (url) => {
    //<script src="./web.js"></script>
    let sc = addEleHead("script");
    sc.src = url;

}

/**
 * 动态添加css样式文件
 * @param url
 */
let addCssLink = (url) => {
    let ele = addEleHead("link");
    ele.rel = "stylesheet";
    ele.href = url;
}


/**
 * 在标签head中添加元素,
 * 常见的功能是用来加载资源
 * @param tag
 */
let addEleHead = (tag) => {
    let ele = document.createElement(tag);
    document.head.appendChild(ele);
    return ele;
}


/**
 * 在body中添加元素
 * @param tag
 * @param className
 * @param id
 */
let addEleBody = (tag, className, id) => {

    let ele = document.createElement(tag);
    ele.className = className;
    ele.id = id;
    document.body.appendChild(ele);
    return ele;
}


window.onload = function () {


    addBack();


}


