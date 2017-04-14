/*

created by xiedan

*/


/*=====================================tab选项卡============================================*/
(function() {

	var tabs = $('#menu_wrapper').children('li');
	var contents = $('.content');
	contents.first().show().siblings('.content').hide();
	tabs.on('click',function(){
		var index = $(this).index();
		if (index == (tabs.length-1) || index == (tabs.length-2)) {
			$(this).addClass(' ');
		}else{
			$(this).addClass('active').siblings().removeClass('active');
			contents.eq(index).show().siblings('.content').hide();
		}
	});

})();
/*=====================================scrollbar插件============================================*/
    (function($){
        $(document).ready(function(){
            $(".content").mCustomScrollbar({
    axis:"y" ,// vertical and horizontal scrollbar
    theme: "my-theme",
    advanced: {
    updateOnContentResize: true,
    updateOnBrowserResize: true,
    autoScrollOnFocus: false
	}
});
        });
    })(jQuery);
 


/*=====================================photo 变化1============================================*/

// 头像变换函数
$('.container').on("mouseenter mouseleave",function(e) {
     var w = $(this).width(); // 得到盒子宽度
     var h = $(this).height();// 得到盒子高度
     var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
     // 获取x值
     var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
     // 获取y值
     var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
     // 将点的坐标对应的弧度值换算成角度度数值
     var dirName = new Array('top','right','bottom','left');
     if(e.type == 'mouseenter'){
     			// console.log(dirName[direction]);
         		$(this).find('.profil-photo>img').attr('src','img/profil-img_'+dirName[direction]+'.jpg');
         		
         }
         else{
         		$(this).find('.profil-photo>img').attr('src','img/profil-img_middle.jpg');
         }
});


/*=====================================image 变化2============================================*/
( function() {
	var imgBox = $('.slide-photo>img');
	var timer = null;
	var count = 0;
	timer = setInterval(autoPlay,5000);
	function autoPlay(){
		$(imgBox).eq(count%imgBox.length).fadeIn(500).siblings().fadeOut();;
		count ++;
	};		
	imgBox.on('mouseenter',function() {
		clearInterval(timer);
	});
	imgBox.on('mouseleave',function() {
		setInterval(timer);
	});

})();




/*=====================================toggle切换============================================*/

( function() {

	var btns = $('.profil-comment').find('dt');
	btns.on('click',function() {
		$(this).next('dd'). slideToggle(400);
	});
	
})();


/*=====================================demo slide-up============================================*/
( function() {

	var slideBox = $('.demo-list').find('.demo-item');
	slideBox.on('mouseenter',function() {
		$(this).find('i').animate({
			'bottom':'0',
		},800).end()
		.find('img').animate({
			'top':'-30px',
		},800).end();			
	});
	slideBox.on('mouseleave',function() {
	$(this).find('i').animate({
		'bottom':'-30px',
	},800).end()
	.find('img').animate({
		'top': 0,
	},800).end();
	});

})();
/*=====================================demo changebg============================================*/

( function() {

	var demo_item = $('.demo-item').find('a');
	for(var i=0;i<demo_item.length;i++){
		// console.log(demo_item[0].href)
		if(demo_item[i].href === '#'){
			$(this).find('img').src = 'bg1.png';
		}
	}
	
})();
