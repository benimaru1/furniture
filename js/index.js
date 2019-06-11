(()=>{
	var banner=document.getElementById("banner");
	var bannerImgs=banner.querySelector("[data-load=bannerImgs]"),
		  bannerInds=banner.querySelector("[data-load=bannerInds]"),
			n=0,LIWIDTH=1920,TRANS=300,INTERVAL=2000,
		  timer=null;
	ajax("get","data/index/01-banner.php")
		.then(data=>{
			//var banners=[...data];
			var banners=data;
			banners.push(banners[0]);
			var strImgs="";
			for(var img of banners){
				strImgs+=`
					<li>
						<img src="${img.src}" title="${img.fname}">
         	</li>	
				`;
			}
			var strInds="<li></li>".repeat(banners.length-1);
			bannerImgs.innerHTML=strImgs;
			bannerImgs.style.width=1920*banners.length+"px";
			bannerImgs.style.transition="all 0.3s linear";
			bannerInds.innerHTML=strInds;
			bannerInds.children[0].className="hover";
			return new Promise(resolve=>resolve());
		}).then(()=>{
			function moveOnce(){
				n++;
				console.log(n);
				var left=n*LIWIDTH;
				bannerImgs.style.left=-left+"px";
				bannerInds.children[n-1].className="";
				if(n===bannerImgs.children.length-1){
					bannerInds.children[0].className="hover";
					setTimeout(()=>{
						bannerImgs.style.transition="";
						bannerImgs.style.left=0;
						n=0;
						setTimeout(()=>{
							bannerImgs.style.transition=
								"all 0.3s linear";
						},100);
					},TRANS);
				}else{
					bannerInds.children[n].className="hover";
				}
			}
			timer=setInterval(moveOnce,INTERVAL+TRANS);
			return new Promise(resolve=>resolve(moveOnce));
		}).then(moveOnce=>{
			bannerImgs.parentNode.onmouseover=function(){
				clearInterval(timer);
				timer=null;
			}
			bannerImgs.parentNode.onmouseout=function(){
				timer=setInterval(moveOnce,INTERVAL+TRANS);
			}
			for(let i=0;i<bannerInds.children.length;i++){
				bannerInds.children[i].onclick=function(){
					n=i;
					bannerImgs.style.left=-n*LIWIDTH+"px";
					bannerInds.querySelectorAll("li.hover")[0].className="";
					bannerInds.children[i].className="hover";
				}
			}
			$("[data-move=left]")[0].onclick=function(e){
				e.preventDefault();
				if(n>0){
					n--;
					bannerImgs.style.left=-n*LIWIDTH+"px";
					bannerInds.children[n+1].className="";
					bannerInds.children[n].className="hover";
				}else{
					bannerImgs.style.transition="";
					n=bannerImgs.children.length-1;
					bannerImgs.style.left=-n*LIWIDTH+"px";
					setTimeout(()=>{
						bannerImgs.style.transition=
							"all 0.3s linear";
						n--;
						bannerImgs.style.left=-n*LIWIDTH+"px";
						bannerInds.children[0].className="";
						bannerInds.children[n].className="hover";
					},100);
				}
			}
			$("[data-move=right]")[0].onclick=function(e){
				e.preventDefault();
				if(n<bannerInds.children.length-1){
					n++;
					bannerImgs.style.left=-n*LIWIDTH+"px";
					bannerInds.children[n-1].className="";
					bannerInds.children[n].className="hover";
				}else{
					n++;
					bannerImgs.style.left=-n*LIWIDTH+"px";
					bannerInds.lastElementChild.className="";
					bannerInds.firstElementChild.className="hover";
					setTimeout(()=>{
						bannerImgs.style.transition="";
						bannerImgs.style.left=0;
						n=0;
						setTimeout(()=>{
						bannerImgs.style.transition=
							"all ."+TRANS/100+"s linear";
						},100)
					},TRANS)
				}
			}
		}).catch(err=>console.log(err));
})();