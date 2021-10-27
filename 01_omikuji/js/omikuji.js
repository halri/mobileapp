"use strict";
window.addEventListener("DOMContentLoaded",
 function(){
     // ページ本体が読み込まれたタイミングで実行するコード
     $("header").textillate({ 
        loop: false, 
        minDisplayTime: 2000, 
        initialDelay: 2000, 
        autoStart: true,       
        in: {                
          effect: "fadeInLeftBig", 
          delayScale: 1.5,          
          delay: 50,               
          sync: false,            
          shuffle: true            
        } 
      }); 
       
      // おみくじボタン（id="btn1"）　ボヤァと表示させる 
      $(function(){ 
        ScrollReveal().reveal("#btn1", { duration: 9000 }); 
      }); 
      setTimeout(
          function(){
    
     //ホップアップメッセジ
     let popMessage ="いらっしゃい！おみくじ引いてって！";
     Window.alert(popMessage);
          },
          "5000"
      );
 }, false
);

//おみくじボタン1
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
 function(){
    //  let n= Math.floor(Math.random() * 3);

    //  switch (n) {
    //      case 0:
    //      btn1.textContent = "VeryHappy!!";
    //      btn1.style.color="#FF0000";
    //      btn1.style.fontSize= "40px";
    //      break;
    //      case 1:
    //         btn1.textContent= "Happy!";
    //         btn1.style.color="#FFF001";
    //         btn1.style.fontSize= "30px";
    //         break;
    //      case 2:
    //      btn1.textContent= "UnHappy..";
    //      btn1.style.color="#261e1c";
    //      btn1.style.fontSize= "20px";
    //      break;
    //  }
        let resultText =["大吉!!!!","吉!!!","中吉!!!","小吉!!","未吉!","凶.."];
        let resultColor =["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize =["55px","50px","45px","40px","35px","30px"];
        let n =Math.floor(Math.random()* resultText.length);
        btn1.textContent=resultText[n];
        btn1.style.color=resultColor[n];
        btn1.style.fontSize=resultFontSize[n];
     // snowfall stop 
     $(document).snowfall("clear"); 
     // jQueryのsnowfall 
     $(document).ready(function(){ 
       $(document).snowfall({ 
         maxSpeed : 5, // 最大速度 
         minSpeed : 1, // 最小速度 
         maxSize  : 20, // 最大サイズ 
         minSize  : 1, // 最小サイズ 
         image : 'img/sakura_hanabira.png' 
       }); 
     }); 
  
 }, false
);