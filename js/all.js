// JavaScript Document

$(document).ready(function(){
	
	$(".header").ready(function(){
		$(".no").delay(1000).fadeIn(1000);
		$(".header").delay(1500).fadeOut(1000);
	});
	$(".t1").click(function(){
		$("html,body").animate({scrollTop:$(".t01").offset().top},1000)
	});
	$(".t2").click(function(){
		$("html,body").animate({scrollTop:$(".t02").offset().top},1000)
	});
	$(".t3").click(function(){
		$("html,body").animate({scrollTop:$(".t03").offset().top},1000)
	});
	$(".t4").click(function(){
		$("html,body").animate({scrollTop:$(".t04").offset().top},1000)
	});
	$(".t5").click(function(){
		$("html,body").animate({scrollTop:$(".t05").offset().top},1000)
	});
	$(".t6").click(function(){
		$("html,body").animate({scrollTop:$(".t06").offset().top},1000)
	});
	$(".box1btn2").click(function(){
		$(".box1-4").hide();
	});
	$(".box1btn").click(function(){
		$(".box1-4n").show();
		$(".box1-4").show();
	});
	
	$(".n1").click(function(){
		$(".box3t1").show();
		$(".box3t2").hide();
		$(".box3t3").hide();
	});
	$(".n2").click(function(){
		$(".box3t2").show();
		$(".box3t1").hide();
		$(".box3t3").hide();
	});
	$(".n3").click(function(){
		$(".box3t3").show();
		$(".box3t2").hide();
		$(".box3t1").hide();
	});
	$(".b1").click(function(){
		alert("目前網路不穩定,請稍後在試")
	});
	$(".b2").click(function(){
		$(".box5btn2").val("");
		$(".box5btn3").val("");
	});
	$(".b3").click(function(){
		alert("目前網路不穩定,請稍後在試")
	});
	
	$(".b4-1").click(function(){
		$(".box4n").show();
		$(".box41").show();
		$(".box46").hide();
		$(".box45").hide();
		$(".box44").hide();
		$(".box43").hide();
		$(".box42").hide();
	});
	$(".b4-2").click(function(){
		$(".box4n").show();
		$(".box42").show();
		$(".box41").hide();
		$(".box46").hide();
		$(".box45").hide();
		$(".box44").hide();
		$(".box43").hide();
	});
	$(".b4-3").click(function(){
		$(".box4n").show();
		$(".box43").show();
		$(".box41").hide();
		$(".box46").hide();
		$(".box45").hide();
		$(".box44").hide();
		$(".box42").hide();
	});
	$(".b4-4").click(function(){
		$(".box4n").show();
		$(".box44").show();
		$(".box41").hide();
		$(".box46").hide();
		$(".box45").hide();
		$(".box42").hide();
		$(".box43").hide();
	});
	$(".b4-5").click(function(){
		$(".box4n").show();
		$(".box45").show();
		$(".box41").hide();
		$(".box46").hide();
		$(".box43").hide();
		$(".box44").hide();
		$(".box42").hide();
	});
	$(".b4-6").click(function(){
		$(".box4n").show();
		$(".box46").show();
		$(".box41").hide();
		$(".box42").hide();
		$(".box45").hide();
		$(".box44").hide();
		$(".box43").hide();
	});
	$(".b4-7").click(function(){
		$(".box41").hide();
		$(".box42").hide();
		$(".box43").hide();
		$(".box44").hide();
		$(".box45").hide();
		$(".box46").hide();
	});
	
	$(".b4-8").click(function(){
		alert("補貨中");
	});
	$(".b4-7").click(function(){
		$(".m1").html(function(i,val){ return val=0});
		$(".m2").html(function(i,val){ return val=0});
		$(".m3").html(function(i,val){ return val=0});
		$(".m4").html(function(i,val){ return val=0});
		$(".m5").html(function(i,val){ return val=0});
		$(".m6").html(function(i,val){ return val=0});
	});
	$(".b42").click(function(){
		$(".m1").html(function(i,val){ return+val+1});
	});
	$(".b41").click(function(){
		$(".m1").html(function(i,val){ return+val-1});
	});
	$(".b42").click(function(){
		$(".m2").html(function(i,val){ return+val+1});
	});
	$(".b41").click(function(){
		$(".m2").html(function(i,val){ return+val-1});
	});
	$(".b42").click(function(){
		$(".m3").html(function(i,val){ return+val+1});
	});
	$(".b41").click(function(){
		$(".m3").html(function(i,val){ return+val-1});
	});
	$(".b42").click(function(){
		$(".m4").html(function(i,val){ return+val+1});
	});
	$(".b41").click(function(){
		$(".m4").html(function(i,val){ return+val-1});
	});
	$(".b42").click(function(){
		$(".m5").html(function(i,val){ return+val+1});
	});
	$(".b41").click(function(){
		$(".m5").html(function(i,val){ return+val-1});
	});
	$(".b42").click(function(){
		$(".m6").html(function(i,val){ return+val+1});
	});
	$(".b41").click(function(){
		$(".m6").html(function(i,val){ return+val-1});
	});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});