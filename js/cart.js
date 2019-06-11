/*加载购物车内容*/
$(function(){
	$.ajax({
		url:"data/cart/list.php",
		success:function(data){
			console.log(data);
			if(data.code === 300){
				alert("您尚未登录");
				location.href='login.html';
			}else if(data.code === 200){
				var html = "";
				if(data.data.length){
					$.each(data.data,function(i,p){
						html+=`
							<div class="imfor">
								<div class="check">
									<span class="normal">
										<img src="image/cart/product_normal.png">
									</span>
									<input type="hidden" name="cid" value="${p.cid}">
								</div>
								<div class="product">
									<a href="${p.href}" class="product_img">
										<img src="${p.pic}">
									</a>
									<div>
										<div class="title">${p.title}</div>
										<div class="spec">${p.spec}</div>
									</div>
								</div>
								<div class="price">
									<p class="color">家具商城专享价</p>
									¥<span>${p.price}</span>元
								</div>
								<div class="count">
									<span class="reduce">-</span>
									<input type="text" value="${p.count}">
									<span class="add">+</span>
								</div>
								<div class="addPrice">
									<span>¥</span>
									<span class="num">${p.price*p.count}</span>
								</div>
								<div class="del">
									<a href="javascript:;" class="del_d">删除</a>
								</div>
							</div>	
						`;
					});
				}else{
					$(".none").show();
				}
				$(".box_content").html(html);
			}
		}
	});
	if(!$(".imfor")){
		$("#section").hide();
		$(".none").show();
	}
	$("imfor").each(function(){
		var price = parseFloat($(this).children(".price").children("span").html());
		var count = parseFloat($(this).children(".count").children("input").val());
		var addPrice = price*count;
		$(this).children(".addPrice").children(".num").text(addPrice.toFixed(2));
	});
	amountadd();
	//全选
	$(".all").click(function(){
		amountadd();
		if($(".all>span").hasClass("normal")){
			$(".all>span").removeClass("normal").addClass("true");
			$(".all>span>img").attr("src","image/cart/product_true.png");
			$(".check>span").removeClass("normal").addClass("true");
			$(".check>span>img").attr("src","image/cart/product_true.png");
			var checked =1;
			totl();
		} else {
			$(".all>span").removeClass("true").addClass("normal");
			$(".all>span>img").attr("src","image/cart/product_normal.png");
			$(".check>span").removeClass("true").addClass("normal");
			$(".check>span>img").attr("src","image/cart/product_normal.png");
			var checked =0;
		}
		$.ajax({
			type: 'POST',
			url: 'data/cart/update_allChecked.php',
			data: {checked: checked},
			success: function(result){
				console.log(result);
			}
		})
	});
	/*勾选发送参数*/
	$(".box_content").on("click",".imfor>.check>span",function(){
		amountadd();
		var cid = $(this).next().val();
		var amou = parseInt($('.total').text());
		if($(this).hasClass("normal")){
			$(this).addClass('true').removeClass('normal');
      $(this).children('img').attr('src', 'image/cart/product_true.png');
			var checked = 1;
			amountadd();
		}else{
			$(this).addClass('normal').removeClass('true');
      $(this).children('img').attr('src', 'image/cart/product_normal.png');
			var checked = 0;
		}
		$.ajax({
        type: 'POST',
        url: 'data/cart/update_checked.php',
        data: {cid:cid, checked: checked},
        success: function(result){
          console.log(result);
        }
    })
	});
	/*修改数量*/
	$(".box_content").on("click",".imfor>.count>span",function(){
		var cid=$(this).parent().siblings(".check").children("input").val();
		var n=parseInt($(this).siblings("input").val());
		if($(this).html()=="+"){
			n++;
		}else if(n>1){
			n--;
		}
		amountadd();
		var $that =$(this);
		$.ajax({
			type: 'POST',
			url: 'data/cart/update_count.php',
			data: {cid:cid, count: n},
			success: function(result){
				if(result.code === 200){
					var price =parseFloat($that.parent().prev().children("span").html());
					$that.siblings("input").val(n);
					$that.parent().next().children(".num").text(price*n);
				}
			}
    });
	});
	/*删除商品*/
	$(".box_content").on("click",".imfor>.del>.del_d",function(){
		var $that =$(this);
		var cid=$(this).parent().siblings(".check").children("input").val();
		$(".modal").fadeIn();
		$(".yes,.no").click(function(){
			if($(this).hasClass("no")){
				$(".modal").fadeOut();
			}else{
				$.ajax({
					type: 'POST',
					url: 'data/cart/delete.php',
					data: {cid:cid},
					success: function(result){
						console.log(result);
					}
				});
				$that.parent().parent().remove();
				$(".modal").fadeOut();
			}
		});
	});

  //批量删除
  $(".del_foot").click(function () {
    var str = [];
    $('.check>span').each(function () {
      if ($(this).hasClass('true')) {
        var id = $(this).next().val();
        str.push(id);
      }
    });
    if (str.length > 0) {
      $('.modal').fadeIn();
      $('.no').click(function () {
        $('.modal').fadeOut();
      });
      $('.yes').click(function () {
				$.ajax({
					type: 'POST',
					url: 'data/cart/delete_count.php',
					data: {str:str},
					success: function(result){
						console.log(result);
					}
				});
				$('.modal').fadeOut();
				location.reload()
      });
    } else {
      $('.modalNo').fadeIn();
      $('.close').click(function () {
        $('.modalNo').fadeOut();
      })
    }
  })
	//合计
	function totl() {
		var sum = 0.00;
		var amount = 0;
		$(".num").each(function () {
			sum += parseInt($(this).text());
			$(".totalPrice").text(sum.toFixed(2));
			amount++;
			$('.total').text(amount);
		})
	}
	// 单独
	function amountadd() {
		var sum = 0.00;
		var amount = 0;
		$('.check>span').each(function () {
			if ($(this).hasClass('true')) {
				sum += parseFloat($(this).parent().siblings('.addPrice').children('.num').text());
				amount += parseInt($(this).parent().siblings('.count').children('input').val());
			}
		})
		$('.totalPrice').text(sum.toFixed(2));
		$(".total").text(amount);
	}
});
