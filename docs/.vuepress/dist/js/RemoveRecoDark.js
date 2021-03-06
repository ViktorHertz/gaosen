/*修改一些默认reco主题色*/
function adjustRecoColor() {
  let myStyle = `--default-color-10: rgba(0, 0, 0, 1);
    --default-color-9: rgba(0, 0, 0, 0.9);
    --default-color-8: rgba(0, 0, 0, 0.8);
    --default-color-7: rgba(0, 0, 0, 0.7);
    --default-color-6: rgba(0, 0, 0, 0.6);
    --default-color-5: rgba(0, 0, 0, 0.5);
    --default-color-4: rgba(0, 0, 0, 0.4);
    --default-color-3: rgba(0, 0, 0, 0.3);
    --default-color-2: rgba(0, 0, 0, 0.2);
    --default-color-1: rgba(0, 0, 0, 0.1);
    --background-color: #1d2025;
    --box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.6);
    --box-shadow-hover: 0 2px 16px 0 rgba(0, 0, 0, 0.7);
    --text-color: rgba(255, 255, 255, 0.8);
    --text-color-sub: #8B8B8B;
    --border-color: rgba(0, 0, 0, 0.3);
    --code-color: rgba(0, 0, 0, 0.3);
    --mask-color: #000;`
  $('html.dark').attr('style',myStyle)
}
/*根据向下滚动举例调整导航栏透明度*/
function adjustHeadBar() {
  $(window).scroll(() => {
    let scrollTop = 80;
    if($(window).scrollTop() > scrollTop) {
      $('header.navbar').attr('style', 'background: var(--background-color);')
    }
    else {
      $('header.navbar').attr('style', 'background: none;')
    }
  })
}

$(document).ready(function(){
  setInterval(() => {
    adjustRecoColor()
  },1000)
  adjustHeadBar()
})