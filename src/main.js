let html = document.querySelector("#html");
let style = document.querySelector("#style");
//生成一段代码
let string = `/* 你好，我是风一样的男子  
 * 接下来我要演示一下我的前段功底
 * 首先我要准备一个div
 */

#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圆
 **/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/* 八卦是阴阳
 * 一黑一白
 **/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 再加两个球球 */
#div1::before{
  width: 100px;
  height:  100px;
  
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: #000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
  width: 100px;
  height:  100px;
 
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
//string是用来容纳一段代码的，后期会对它进行处理，它和string是不一样的
let string2 = "";
//string2是用来显示一段代码的，是用来显示在页面上的

let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }

    //如果是回车，就不照搬

    html.innerHTML = string2;

    style.innerHTML = string.substring(0, n);
    window.scrollTo(0,99999);
    html.scrollTo(0,99999);
    if (n < string.length - 1) {
      //如果n不是最后一个就继续
      n = n + 1;

      step();
    }
  }, 0);
};
step()
