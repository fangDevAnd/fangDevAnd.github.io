/**
 * 当前页面主要实现的是加载lezutv的广告拦截的功能实现
 *
 *
 *
 */

/**
 * 捕获乐猪Tv的广告
 */
let block = () => {
    //乐猪Tv的广告使用的是底部bottomNavad的div进行显示的,只要不显示就行
    let ad = document.getElementById("bottomNavad");
    ad.style.display = "none";
}


block();












