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
        window.location.href = "http://192.168.0.107:8080/";
    }
}


/**
 * 回到首页
 */
let gotoHeme = () => {
    window.location.href = "http://192.168.0.107:8080/";
}


//添加脚本
let addScript = (url) => {
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


addCssLink("https://fangdevand.github.io/movie/web.css");


let links = [
    {
        name: "vqq",
        link: "v.qq.com",
    }, {
        name: "youku",
        link: "www.youku.com/"
    }, {
        name: "iqiyi",
        link: "www.iqiyi.com/"
    }, {
        name: "六间房",
        link: "p.gouwuke.com/c?w=880701&c=7100&i=27442&pf=m&e=&t= www.6.cn"
    }, {
        name: "土豆网",
        link: "www.5566.net/sp.htm#"
    },
    {
        name: "乐视网",
        link: "www.5566.net/sp.htm#",
    },
    {
        name: "搜狐视频",
        link: "www.5566.net/sp.htm#",
    }, {
        name: "百度视频",
        link: "v.baidu.com/",
    }, {

        name: "56视频",
        link: "www.5566.net/sp.htm#"
    }, {
        name: "哔哩哔哩",
        link: "www.bilibili.com",
    },
    {
        name: "芒果Tv",
        link: "www.mgtv.com",
    }, {
        name: "lezhu",
        link: "www.lezhutv.com"
    }
]

for (let i = 0; i < links.length; i++) {
    if (links[i].link.indexOf(document.domain) !== -1) {
        //找到了对应的链接文件
        //加载对应的js文件和css文件
        let pla = links[i].name;
        addScript("https://fangdevand.github.io/movie/" + pla + "/adblock.js");
        addScript("https://fangdevand.github.io/movie/" + pla + "/addump.js");
        addCssLink("https://fangdevand.github.io/movie/" + pla + "/global.css");
    }
}


