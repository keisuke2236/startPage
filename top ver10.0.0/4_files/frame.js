$(document).ready(function() {
  $(function() {

    var temp = 0;
    $('#newadd').click(function(e){
      if(temp==0){
        document.getElementById("addzone").style.display='inline';

        temp=1;
      }else{
        var el = document.getElementById("newurl");
        var titleStr = document.getElementById("newtitle");
        var newlink = document.createElement('a');
        var newbr = document.createElement('br');
        newlink.innerHTML=titleStr.value;
        newlink.href=el.value;
        el.value="";
        titleStr.value="";
        document.getElementById('links').appendChild(newlink);
        document.getElementById('links').appendChild(newbr);
        document.getElementById("addzone").style.display='none';
        temp = 0;
      }
    });

  });
});
