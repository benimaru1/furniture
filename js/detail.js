(()=>{
	//异步加载页面
	$.get("data/detail/01-detail.php",
		location.search.slice(1))
	.then(output=>{
		console.log(output);
		var data=output.data;
		var imgs=output.imgs;
		var html=`
			<a href="index.html">首页</a>
			<span> > </span>
			<a href="product.html?family_id=${data.family_id}">${data.category}</a>
			<span> > </span>
			<a href="productDetail.html?pid=${data.pid}">${data.title}</a>
		`;
		//加载面包屑
		$("#bread-crumb").html(html);

		//加载右上信息
		html=`
			<div class="title">${data.title}</div>
				<a href="javascript:;" class="subtitle">${data.subtitle}</a>
				<div class="p-price">
					<div class="price"><span>特价: </span><span>¥${data.price}元</span></div>
					<div class="promise">服务承诺： ${data.promise}</div>
					<!--客服 -->
					<div class="parameter">
						<span>客服: 联系客服</span>
						<img src="image/kefuf.gif">
					</div>
					<!--规格 -->
					<div class="spec">
						<p>规格: <span>${data.spec}</span></p>
					</div>
				</div>	
		`;
		$("#show-details").prepend(html);
		//加载左边图片
		$("#mImg").attr("src",imgs[0].md);
		$("#lImg").attr("src",imgs[0].lg);
		html="";
		for(var i=0;i<imgs.length;i++){
			html+=`<li><img src="${imgs[i].sm}" 
				data-md="${imgs[i].sm}" 
				data-lg="${imgs[i].sm}"></li>`;
		}
		$("ul.icon_list").html(html);
	});
	//图片转换
	$(".icon_list").on("mouseenter","li",function(){
		var mdSrc=$(this).children().first().attr("data-md");
		var lgSrc=$(this).children().first().attr("data-lg");
		$("#mImg").attr("src",mdSrc);
		$("#lImg").attr("src",lgSrc);
	});

	//商品详情页放大镜效果
	$("#superMask").hover(function(){
		$("#mask").toggle();
		$(this).parent().next().toggle();
	});
	function move(e){
		e=e||window.event;
		var x=e.offsetX,y=e.offsetY;
		if(x<100){
			$("#mask").css("left",0);
		}else if(x>500){
			$("#mask").css("left",400);
		}else{
			$("#mask").css("left",x-100);
		}
		if(y<100){
			$("#mask").css("top",0);
		}else if(y>300){
			$("#mask").css("top",200);
		}else{
			$("#mask").css("top",y-100);
		}
		$(".lg-img>img").css({
			"left":-2*parseInt($("#mask").css("left")),
			"top":-2*parseInt($("#mask").css("top"))
		})
	}
	$("#superMask").mousemove(move);

	/*调整购物数量*/
	$(".account").on("click","button",function(){
		var n = parseInt($(this).siblings("input").val());
		if($(this).html()==="+"){
			n++;
		}else if(n>1){
			n--;
		}
		$(this).siblings("input").val(n);
	});
	$(".shops").on("click","a",function(){
		var n = parseInt($(".account").children("input").val());
		if($(this).hasClass("cart")){
			$.get("data/detail/02-insert_cart.php",
				location.search.slice(1)+"&count="+n)
				.then(function(result){
					if(result.code===200){
						$('.modalNo').fadeIn();
						$(".sure").click(function(){
							$('.modalNo').fadeOut();
						});
					}
			});
		}else if($(this).hasClass("buy")){
			$.get("data/detail/02-insert_cart.php",
				location.search.slice(1)+"&count="+n)
				.then(function(result){
					if(result.code===200){
						location.href = "cart.html";
					}
			});
		}else{
			$('.modalNo').fadeIn();
			$(".sure").click(function(){
				$('.modalNo').fadeOut();
			});
		}
	});
})();