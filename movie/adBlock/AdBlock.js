/**
 * 当前页面的主要功能是实现各种视频播放平台的广告的拦截
 *
 *
 *
 */


let urlLZ = "www.lezhutv.com";

let block = (url) => {

  if (url.indexOf(urlLZ)) {

    blockLZ(url);

  }
}


/**
 * 捕获乐猪Tv的广告
 * @param url
 */
let blockLZ = (url) => {
  //乐猪Tv的广告使用的是底部bottomNavad的div进行显示的,只要不显示就行
  var iframe = document.getElementById('video_frame').contentWindow.document;
  let ad = iframe.getElementById("bottomNavad");
  ad.style.display = "none";
}


export default {
  block
}








