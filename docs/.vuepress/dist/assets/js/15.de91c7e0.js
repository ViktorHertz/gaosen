(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{561:function(e,r,s){},632:function(e,r,s){"use strict";s(561)},657:function(e,r,s){"use strict";s.r(r);s(50),s(6),s(51),s(49),s(12),s(272),s(270),s(558);var t={name:"Chess",data:function(){return{IN_BOARD_:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],displayChess:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],FEN:"rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR",FENArray:[],userInputFEN:"",userInput:""}},created:function(){},mounted:function(){var e=this;this.initBoard(),document.querySelectorAll("div.imgBox img").forEach((function(r){r.addEventListener("mousedown",(function(r){var s=r.target.src.slice(32,33),t=e.ImgNameToChessName(s);console.log(t),1}))}))},methods:{IN_BOARD:function(e){return 0!=this.IN_BOARD_[e]},COORD_XY:function(e,r){return e+(r<<4)},RANK_Y:function(e){return e>>4},FILE_X:function(e){return 15&e},initBoard:function(){this.displayChess=[],this.FENArray=this.FEN.split(""),this.FENtoBoard(this.FENArray);for(var e=0;e<256;e++)this.IN_BOARD(e)||(this.displayChess[e]=null);for(var r=this.COORD_XY(3,3),s=this.COORD_XY(11,12),t=document.querySelectorAll("div.imgBox img"),a="",n=0,c=0,i=r;i<=s;i++)if(this.IN_BOARD(i)){switch(this.displayChess[i]){case 8:a="K";break;case 9:a="A";break;case 10:a="B";break;case 11:a="N";break;case 12:a="R";break;case 13:a="C";break;case 14:a="P";break;case 16:a="k_";break;case 17:a="a_";break;case 18:a="b_";break;case 19:a="n_";break;case 20:a="r_";break;case 21:a="c_";break;case 22:a="p_";break;case 1:case 0:a="UNexist";break;default:a="UNexist"}n=this.RANK_Y(i),this.FILE_X(i),c=i-7*n-30;var u="/img/chess/".concat(a,".png");t[c].src=u,a="",n=0,c=0}},FENtoBoard:function(e){var r=3,s=3;for(var t in e){var a=e[t];if("/"==a&&s++,s>12)break;if(r>11)r=3;else if(a>="1"&&a<="9")r+=parseInt(a);else if(a>="a"&&a<="z"){var n=r+(s<<4);this.displayChess[n]=this.FENCharToNum(a),r++}else if(a>="A"&&a<="Z"){var c=r+(s<<4);this.displayChess[c]=this.FENCharToNum(a),r++}else console.log("err")}},FENCharToNum:function(e){switch(e){case"K":return 8;case"A":return 9;case"B":return 10;case"N":return 11;case"R":return 12;case"C":return 13;case"P":return 14;case"k":return 16;case"a":return 17;case"b":return 18;case"n":return 19;case"r":return 20;case"c":return 21;case"p":return 22;default:return"err"}},FENCharToImg:function(e){switch(e){case"K":return"K";case"A":return"A";case"B":return"B";case"N":return"N";case"R":return"R";case"C":return"C";case"P":return"P";case"k":return"k_";case"a":return"a_";case"b":return"b_";case"n":return"n_";case"r":return"r_";case"c":return"c_";case"p":return"p_";default:return"err"}},ImgNameToChessName:function(e){switch(e){case"K":return"红方_帅";case"A":return"红方_士";case"B":return"红方_相";case"N":return"红方_马";case"R":return"红方_车";case"C":return"红方_炮";case"P":return"红方_兵";case"k":return"黑方_将";case"a":return"黑方_仕";case"b":return"黑方_象";case"n":return"黑方_马";case"r":return"黑方_车";case"c":return"黑方_炮";case"p":return"黑方_卒";default:return"空"}},drawWithFEN:function(e){this.FENArray=[],this.FENArray=e.split(""),this.displayChess=[],this.FENtoBoard(this.FENArray);for(var r=0;r<256;r++)this.IN_BOARD(r)||(this.displayChess[r]=null);for(var s=this.COORD_XY(3,3),t=this.COORD_XY(11,12),a=document.querySelectorAll("div.imgBox img"),n="",c=0,i=0,u=s;u<=t;u++)if(this.IN_BOARD(u)){switch(this.displayChess[u]){case 8:n="K";break;case 9:n="A";break;case 10:n="B";break;case 11:n="N";break;case 12:n="R";break;case 13:n="C";break;case 14:n="P";break;case 16:n="k_";break;case 17:n="a_";break;case 18:n="b_";break;case 19:n="n_";break;case 20:n="r_";break;case 21:n="c_";break;case 22:n="p_";break;case 1:case 0:n="UNexist";break;default:n="UNexist"}c=this.RANK_Y(u),this.FILE_X(u),i=u-7*c-30;var o="/img/chess/".concat(n,".png");a[i].src=o,n="",c=0,i=0}},sureInput:function(){var e=this.userInput;this.drawWithFEN(e)},test2:function(){this.drawWithFEN("1n1akabnr/r8/9/9/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR")},btnClick2:function(){this.test2()}}},a=(s(632),s(3)),n=Object(a.a)(t,(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("div",{attrs:{id:"y"}},[e._v("初始化FEN串：rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR")]),e._v(" "),s("button",{staticClass:"f1",on:{click:e.btnClick2}},[e._v("调试按钮")]),e._v(" "),s("button",{staticClass:"f1",on:{click:e.initBoard}},[e._v("remake")]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"input-box"},[s("i",{staticClass:"iconfont reco-douyin"}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userInput,expression:"userInput"}],attrs:{type:"text",placeholder:"输入曲子，以'/'分隔"},domProps:{value:e.userInput},on:{input:function(r){r.target.composing||(e.userInput=r.target.value)}}}),e._v(" "),s("div",{on:{click:e.sureInput}},[e._v("确定")])]),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"chessBoard"},e._l(90,(function(r,t){return s("div",{staticClass:"imgBox myImgBox"},[s("img",{key:t,attrs:{src:e.$withBase("/img/chess/K_.png"),id:"pos"+t,alt:"一个棋子"}})])})),0)])}),[],!1,null,"23f013ec",null);r.default=n.exports}}]);