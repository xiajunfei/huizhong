$(function(){//等文档节点加载完毕就触发
	var advertNode=$('.advert');//出现左右箭头
	var advert_bgNodeli=$('.advert_bg li');//广告淡入淡出
	var advert_leftNode=$('.advert_left');//左切换
	var advert_rightNode=$('.advert_right');//右切换
	var advert_bottom_ulNode=$('.advert_bottom_ul');
	var advert_bottom_ulNodeli=$('.advert_bottom_ul li');
	var four_indexNode=$('.four_index');//企业级应用节点
	var four_indexNodedl=$('.four_index dl');
	var dl_bg_Name="dl_bg_04";//样式名称
	var About_main_left_textNode=$('.About_main_left_text');//蓝色幕布出现
	var About_main_left_textNodespan=$('.About_main_left_text span');//蓝色幕布出现
	var About_main_left_bgNode=$('.About_main_left_bg');
	var About_main_rightNode=$('.About_main_right');//需要做动态效果的ul
	var About_main_rightNodeli=$('.About_main_right li');//需要做动态效果的li
	var About_left_navNode=$('.AboutUs .About_left_nav');//左击
	var About_right_navNode=$('.AboutUs .About_right_nav');//右击
	var UR_client_ulNode=$('.UR_client_ul');//合作伙伴
	var UR_client_ulNodeLength=$('.UR_client_ul li');//合作伙伴长度
	var About_left_navNode_01=$('.UR_client .About_left_nav');
	var About_right_navNode_01=$('.UR_client .About_right_nav');
	var fixedNode=$('.fixed');//固定定位
	var fixedSpanNode=$('.fixed a span').eq(0);
	var fixed_showNode=$('.fixed_show');
	var top_bgNode=$('.top_bg');
	/********导航*************/
	$('.header_ul li').mouseenter(function(){
		$(this).children('dl').show();//find
	});
	$('.header_ul li').mouseleave(function(){
		$(this).children('dl').hide();
	});
	$('.header_ul li dd').mouseenter(function(){
		$(this).children('dl').show();//find
		var newPos=$(this).children('dl').index();
		if(newPos==1)
		{
			$(this).addClass('header_ul_nav');
		}
	});
	$('.header_ul li dd').mouseleave(function(){
		$(this).children('dl').hide();
		var newPos=$(this).children('dl').index();
		if(newPos==1)
		{
			$(this).removeClass('header_ul_nav');
		}
	});
	/*************广告************/
	advertNode.hover(
		function(){
			advert_leftNode.show();
			advert_rightNode.show();
		},
		function(){
			advert_leftNode.hide();
			advert_rightNode.hide();
		});
	advert_bottom_ulNodeli.mouseenter(function(){//滑过advert_bottom_ul做图片切换
		if($(this).hasClass('advert_bottom_ul_current'))
		{
			return;
		}
		var newPos=$(this).index();
		var oldPos=$('.advert_bottom_ul .advert_bottom_ul_current').index();
		oldNew(newPos,oldPos);
	});
	advert_leftNode.click(function(){//点击图片向左移动
		var oldPos=$('.advert_bottom_ul .advert_bottom_ul_current').index();
		var lastPos=advert_bottom_ulNodeli.length-1;
		var newPos=oldPos==0?lastPos:oldPos-1;
		oldNew(newPos,oldPos);
	});
	advert_rightNode.click(function(){//点击图片向右移动
		var oldPos=$('.advert_bottom_ul .advert_bottom_ul_current').index();
		var lastPos=advert_bottom_ulNodeli.length-1;
		var newPos=oldPos==lastPos?0:oldPos+1;
		oldNew(newPos,oldPos);
	});
	function oldNew(newPos,oldPos){
		advert_bottom_ulNodeli.eq(newPos).addClass('advert_bottom_ul_current');
		advert_bottom_ulNodeli.eq(oldPos).removeClass('advert_bottom_ul_current');
		advert_bgNodeli.eq(oldPos).stop(false,true).fadeOut();
		advert_bgNodeli.eq(newPos).stop(false,true).fadeIn();
	}
	four_indexNodedl.mouseenter(function(){//为企业级应用加样式
		var newPos=$(this).index();
		var oldPos=$('.four_index .dl_current').index();
		var dl_bg_CurName=dl_bg_Name.substr(0,dl_bg_Name.length-1);
		var dl_bg_CurNameNew=dl_bg_CurName+(newPos+1);
		var dl_bg_CurNameOld=dl_bg_CurName+(oldPos+1);
		if($(this).hasClass(dl_bg_CurNameNew))
		{
			return;
		}
		if(newPos==0)
		{
			four_indexNodedl.eq(newPos).animate({marginLeft:"0px"},500);
			four_indexNodedlFun(newPos,oldPos);
		}
		else
		{
			for(var i=1;i<=newPos;i++)
			{
				four_indexNodedl.eq(i).animate({marginLeft:-330+"px"},500);
				four_indexNodedlFun(newPos,oldPos);
			}
		}
		
		if(four_indexNodedl.eq(newPos).css('margin-left')=='-330px')
		{
			for(var i=newPos+1;i<four_indexNodedl.length;i++)
			{
				four_indexNodedl.eq(i).animate({marginLeft:0+"px"},500);
				four_indexNodedlFun(newPos,oldPos);
			}
		}
		else if(newPos==0)
		{
			for(var i=0;i<four_indexNodedl.length;i++)
			{
				four_indexNodedl.eq(i).animate({marginLeft:0+"px"},500);
				if(newPos==0)
				{
					four_indexNodedlFun(newPos,oldPos);
				}
			}
		}
	});
	function four_indexNodedlFun(newPos,oldPos)//为企业级应用加样式
	{
		var dl_bg_CurName=dl_bg_Name.substr(0,dl_bg_Name.length-1);//得到样式的整个名称，删除最后一位的数字，也就是得到除最后一位数字外的全部名称
		var dl_bg_CurNameNew=dl_bg_CurName+(newPos+1);//得到新位置的颜色样式
		var dl_bg_CurNameOld=dl_bg_CurName+(oldPos+1);//得到旧位置的颜色样式
		four_indexNodedl.eq(newPos).addClass(dl_bg_CurNameNew);
		four_indexNodedl.eq(newPos).addClass('dl_current');
		four_indexNodedl.eq(oldPos).removeClass('dl_current');//
		four_indexNodedl.eq(oldPos).removeClass(dl_bg_CurNameOld);//删除颜色样式
	}
	/*****************四个球*****************/
	$('#circle li').mouseenter(function(){
		if($(this).hasClass('circle_cur'))
		{
			return;
		}
		var oldPos=$(".circle_cur").index();
//		$(this).animate({width:"502px"},300,function(){
//			$(this).addClass('circle_cur');
//		});
//		$('#circle li').eq(oldPos).animate({ width:"167px"},300,function(){
//			$(this).removeClass('circle_cur');
//		})/*效果不好*/
		$(this).addClass('circle_cur').stop().animate({width:"502px"},300);
		$('#circle li').eq(oldPos).removeClass('circle_cur').stop().animate({ width:"167px"},300);
	});
	/*************关于汇众aboutus*************/
	About_main_left_bgNode.mouseenter(function(){
		About_main_left_textNode.stop().animate({height:'100%'},500);
		About_main_left_textNodespan.stop().animate({height:'100%'},500);
		$(this).find('img').stop().animate({width:"580px",margin:"-30px 0 0 -30px"},500);//图片放大
	});
	About_main_left_textNode.mouseleave(function(){//离开关于汇众的时候滑过的是已经在上面的蒙层
		About_main_left_textNode.stop().animate({height:'0'},500);
		About_main_left_textNodespan.stop().animate({height:'0'},500);
		About_main_left_bgNode.find('img').stop().animate({width:"491px",margin:"0 0 0 0"},500);//图片缩小
	});
	About_right_navNode.click(function(){
		
		var oldPos=$('.About_main_right .About_current').index();
		var lastPos=About_main_rightNodeli.length-1;
		var newPos=oldPos==lastPos?0:oldPos+1;
		About_main_rightNodeli.eq(oldPos).removeClass('About_current');
		About_main_rightNodeli.eq(newPos).addClass('About_current');
	});
	About_left_navNode.click(function(){
		
		var oldPos=$('.About_main_right .About_current').index();
		var lastPos=About_main_rightNodeli.length-1;
		var newPos=oldPos==0?lastPos:oldPos-1;
		About_main_rightNodeli.eq(oldPos).removeClass('About_current');
		About_main_rightNodeli.eq(newPos).addClass('About_current');
	});
	/*******************合作伙伴*********************/
	About_left_navNode_01.click(function(){
		var UR_client_ulNodeli=$('.UR_client_ul li').eq(0);
		UR_client_ulNodeli.stop().animate({marginLeft:'-200px'},500,function(){
			$(this).appendTo($(this).parent()).css({'margin-left':'0px'});
		});
	});
	About_right_navNode_01.click(function(){//向右
		var UR_client_ulNodeli=$('.UR_client_ul li').eq(UR_client_ulNodeLength.length-1);//得到最后一个节点
		UR_client_ulNodeli.css({'margin-left':'-200px'}).prependTo(UR_client_ulNode);//将最后一个节点插到第一个位置
		UR_client_ulNodeli.stop().animate({marginLeft:'0px'},500);
	});
	fixedSpanNode.click(function(){//右边一直存在的广告使其消失
		fixedNode.css({'display':'none'});
		fixed_showNode.css({'display':'block'});
	});
	fixed_showNode.click(function(){
		fixedNode.css({'display':'block'});
		fixed_showNode.css({'display':'none'});
	});
	$(window).scroll(function(){//滚动
		var scrollTopNode=$('html').scrollTop()+$('body').scrollTop();//滚去的距离
		var scrollTopMath=parseInt(scrollTopNode);
		console.log(scrollTopMath);
		if(scrollTopMath>800)
		{
			top_bgNode.css({'display':'block'});
		}
		if(scrollTopMath<800)
		{
			top_bgNode.css({'display':'none'});
		}
	});
	top_bgNode.click(function(){//回到顶部
		$('html,body').animate({scrollTop:0},500);
		//$('html,body').scrollTop(0);
	});
});
