$(document).ready(function() {
	$(".news-title a").eq(0).click(function(){
		$(".news-content").show().next().hide();
	
	})
	$(".news-title li").eq(1).click(function(){
		$(".news-second").show().prev().hide();
	})
})
 window.onload=function(){
          var oul=$('.showpic ul')[0];
          var oDiv=$('.showpic');
          oul.innerHTML=oul.innerHTML+oul.innerHTML;
           function move(){
          	if (oul.offsetLeft<"-849"){oul.style.left="0"}
          	else oul.style.left=oul.offsetLeft-2+"px"; }
          var time= setInterval(move,30)
          oDiv.mouseover(function(){clearInterval(time)})
          oDiv.mouseout(function(){time=setInterval(move,30)});

}