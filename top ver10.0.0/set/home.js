$(document).ready(function() {
  $(function() {

    $('.obj').resizable({
      start: function(event, ui) {
        closeindex();
        event.target.style.zIndex="10";
        $("#mask").css("display","block");
      },
      stop: function(event, ui) {
        $("#mask").css("display","none");
      }
    });


    $('.obj').draggable({containment: 'parent',
    start: function(event, ui) {
      closeindex();
      event.target.style.zIndex="10";
      $("#mask").css("display","block");
    },
    stop: function(event, ui) {
      $("#mask").css("display","none");
      if(!event.target.classList.contains("other")){frameStopFunction(event,ui);}
      }
    });

    $('.obj').click(function(e){
      if(e.target.style.width=="50%"){
        closeindex();
        e.target.style.width="10%";
        e.target.style.zIndex="20";
      }else{
        closeindex();
        e.target.style.width="50%";
        e.target.style.zIndex="20";
      }
    });




    function frameStopFunction(event,ui){
      if(event.screenY<150){
        console.log(event);
        if(event.target.style.width=="100%"){
          defaultFrame(event.target);
        }
        event.target.style.width="100%";
        event.target.style.height="95%";
        event.target.style.left="0%";
        event.target.style.top="0%";
      }else{
        if(event.target.style.width=="100%"){
          defaultFrame(event.target);
        }
      }
    }
    //resetFrame (obj)を渡すと初期位置に戻るようにする
    function defaultFrame(resetFrame){
      var num = resetFrame.id.substr(resetFrame.id.length - 1, 1);
      var left = 15 * (num-4) + '%';
      resetFrame.style.width="10%";
      resetFrame.style.height="80%";
      resetFrame.style.top="10%";
      resetFrame.style.left = left;
    }


    //----------divに書かれている内容の編集------------------
    var x = 1;
    var y = 1;
    var date = new Date();
    $("#div1").resizable({grid: [x, x]});
    var autor ="rorensu";
    document.getElementById('div1').innerHTML = "login ...success autor["+ autor +"]<br /> "+date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+" ["+date.getHours()+":"+date.getMinutes()+"_"+date.getSeconds()+"]";

    /*$("#div2").resizable({grid: [x, x]});*/


    //------eventadd 要素が選択された時に一番上に来るようにする　--------
    var flg = 0;


    function closeindex(){
      var el = document.getElementById('div0');
      var s = 9;
      while(true){
        //el.style.width = "10%";
        el.style.zIndex="0";
        el = document.getElementById('div' + s);
        if(s==3){break;}else{s-=1;}
      }
    }
    function closeother(){
      var el = document.getElementById('div0');
      var s = 9;
      while(true){
        el.style.width = "10%";
        el.style.zIndex="0";
        el = document.getElementById('div' + s);
        if(s==3){break;}else{s-=1;}
      }
    }





    document.addEventListener('click', function (e) {

      var target = e.target;   /* クリックされた最深の要素 */
      if (target.tagName === 'FONT') {
        switch (target.id) {
          case 'title1': document.getElementById("frame1").src="4.html";
          break;
          case 'title2': document.getElementById("frame2").src="5.html";
          break;
          case 'title3': document.getElementById("frame3").src="6.html";
          break;
          case 'title4': document.getElementById("frame4").src="7.html";
          break;
          case 'title5': document.getElementById("frame5").src="8.html";
          break;
          case 'title6': document.getElementById("frame6").src="9.html";
          break;
        }
        closeother();
      }
    }, false);
  });

});



function clock() {
  var myDay = new Array("日","月","火","水","木","金","土");
  var now  = new Date();
  var year = now.getFullYear(); // 年
  var month = now.getMonth()+1; // 月
  var date = now.getDate(); // 日
  var day = now.getDay();
  var hour = now.getHours(); // 時
  var min  = now.getMinutes(); // 分
  var sec  = now.getSeconds(); // 秒

  // 数値が1桁の場合、頭に0を付けて2桁で表示する指定
  if(hour < 10){ hour = "0" + hour;}
    if(min < 10){ min = "0" + min;}
      if(sec < 10){ sec = "0" + sec;}


        var clock2 = month + '月' + date + '日' + '（' + myDay[day] + '曜日）'  + hour + ':' + min + '_' + sec + '秒';

        document . getElementById( 'clock-01' ) . innerHTML= clock2 . toLocaleString(); // div id="clock-02"

        // 1000ミリ秒ごとに処理を実効
        window . setTimeout( "clock()", 1000);
      }
      window . onload = clock;
