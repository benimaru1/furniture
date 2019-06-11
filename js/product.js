(()=>{
	function loadProductsByPage(n=1){
		$.get("data/product/01-product.php",
			location.search.slice(1)+"&pno="+n)
		.then(data=>{
			console.log(data);
			var html="";
			for(var p of data.data){
				html+=`
					<div class="met-product">
						<div class="widget-header">
							<a href="${p.href}"><img src="${p.src}" title="${p.title}"></a>
						</div>
						<div class="widget-body">
							<p class="title">${p.title}</p>
							<p class="price">${p.price}元</p>	
							<p class="spec">类型 : ${p.category}</p>
							<p class="color">颜色 : ${p.spec}</p>
							<div class="detail">${p.details}</div>
							<div class="btn-look">
								<a href="${p.href}" class="btn-detail">查看详情</a>
								<a href="${p.href}" class="look"><img src="image/look.png">${p.see_count}</a>
							</div>
						</div>
					</div>	
				`;
			}
			$("div.widget").html(html);
			//生成分页加载
			html="";
			for(var i=1;i<=data.pageCount;i++){
				html+='<a href="javascript:;">'+i+'</a>';
			}
			html='<a class="previous" href="javascript:;">上一页</a>'+html+
				'<a class="next" href="javascript:;">下一页</a>';
			$(".met-pager").html(html).children(":eq("+n+")").addClass("current");
			if(n==1){
				$(".met-pager>a:first-child").addClass("disabled");
			}
			if(n==data.pageCount){
				$(".met-pager>a:last-child").addClass("disabled");
			}
			if(n!=1&&n!=data.pageCount){
				$(".met-pager>a:first-child,.met-pager>a:last-child").removeClass("disabled");
			}
		});
	}
	loadProductsByPage();
	//页面加载
	$(".met-pager")
		.on("click","a:not(.disabled):not(.current)",e=>{
			var $a=$(e.target);
			var n=parseInt($(".met-pager>a.current").html());
			if($a.is(":first-child")){
				loadProductsByPage(n-1);
			}else if($a.is(":last-child")){
				loadProductsByPage(n+1);
			}else{
				loadProductsByPage(parseInt($a.html()));
			}
	});

	//搜索功能
	function searchProductsByPage(n=1){
		$.get("data/product/02-search.php",
			location.search.slice(1)+"&pno="+n)
		.then(data=>{
			console.log(data);
			var html="";
			for(var p of data.data){
				html+=`
					<div class="met-product">
						<div class="widget-header">
							<a href="${p.href}"><img src="${p.src}" title="${p.title}"></a>
						</div>
						<div class="widget-body">
							<p class="title">${p.title}</p>
							<p class="price">${p.price}元</p>	
							<p class="spec">类型 : ${p.category}</p>
							<p class="color">颜色 : ${p.spec}</p>
							<div class="detail">${p.details}</div>
							<div class="btn-look">
								<a href="${p.href}" class="btn-detail">查看详情</a>
								<a href="${p.href}" class="look"><img src="image/look.png">${p.see_count}</a>
							</div>
						</div>
					</div>	
				`;
			}
			$("div.widget").html(html);
			//生成分页加载
			html="";
			for(var i=1;i<=data.pageCount;i++){
				html+='<a href="javascript:;">'+i+'</a>';
			}
			html='<a class="previous" href="javascript:;">上一页</a>'+html+
				'<a class="next" href="javascript:;">下一页</a>';
			$(".met-pager").html(html).children(":eq("+n+")").addClass("current");
			if(n==1){
				$(".met-pager>a:first-child").addClass("disabled");
			}
			if(n==data.pageCount){
				$(".met-pager>a:last-child").addClass("disabled");
			}
			if(n!=1&&n!=data.pageCount){
				$(".met-pager>a:first-child,.met-pager>a:last-child").removeClass("disabled");
			}
		});
	}
	$("#txtSearch").click(function(){
		location.search="product.html?kw="+txt.value();
		console.log(location.search);
		searchProductsByPage();
	});
	//页面加载
	$(".met-pager")
		.on("click","a:not(.disabled):not(.current)",e=>{
			var $a=$(e.target);
			var n=parseInt($(".met-pager>a.current").html());
			if($a.is(":first-child")){
				searchProductsByPage(n-1);
			}else if($a.is(":last-child")){
				searchProductsByPage(n+1);
			}else{
				searchProductsByPage(parseInt($a.html()));
			}
	});
})();