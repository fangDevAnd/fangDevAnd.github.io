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


//添加返回按钮
addBack();

let links = [
    {
        src: "https://img1.baidu.com/it/u=3197755842,3611818723&fm=253&fmt=auto&app=120&f=PNG?w=300&h=300",
        name: "腾讯视频",
        link: "v.qq.com",
        adBlock:"http://"
    }, {
        src: "https://img1.baidu.com/it/u=1789178533,84700239&fm=26&fmt=auto",
        name: "优酷视频",
        link: "www.youku.com/"
    }, {
        src: "https://img2.baidu.com/it/u=3355477474,103047385&fm=26&fmt=auto",
        name: "爱奇艺",
        link: "www.iqiyi.com/"
    }, {
        src: "https://img0.baidu.com/it/u=917710189,929080745&fm=26&fmt=auto",
        name: "六间房",
        link: "p.gouwuke.com/c?w=880701&c=7100&i=27442&pf=m&e=&t= www.6.cn"
    }, {
        src: "https://img0.baidu.com/it/u=2778047413,2895491980&fm=26&fmt=auto",
        name: "土豆网",
        link: "www.5566.net/sp.htm#"
    },
    {
        src: "https://img2.baidu.com/it/u=62140842,116155617&fm=26&fmt=auto",
        name: "乐视网",
        link: "www.5566.net/sp.htm#",
    },
    {
        src: "https://img2.baidu.com/it/u=910208898,3772085318&fm=26&fmt=auto",
        name: "搜狐视频",
        link: "www.5566.net/sp.htm#",
    }, {
        src: "https://img1.baidu.com/it/u=3308780222,3524051795&fm=26&fmt=auto",
        name: "百度视频",
        link: "v.baidu.com/",
    }, {
        src: "https://img2.baidu.com/it/u=1626469276,1132249681&fm=26&fmt=auto",
        name: "56视频",
        link: "www.5566.net/sp.htm#"
    }, {
        src: "https://img1.baidu.com/it/u=3574360052,3701577545&fm=15&fmt=auto",
        name: "哔哩哔哩",
        link: "www.bilibili.com",
    },
    {
        src: "https://img2.baidu.com/it/u=3769294571,881364973&fm=26&fmt=auto",
        name: "芒果Tv",
        link: "www.mgtv.com/",
    }, {
        src: "https://fangdevand.github.io/movie/az49q-gcinx.jpg",
        name: "乐猪Tv",
        link: "www.lezhutv.com/"
    }
]

for (let i = 0; i < links.length; i++) {
    if (links[i].link.indexOf(document.domain)) {
        //找到了对应的链接文件

    }
}
