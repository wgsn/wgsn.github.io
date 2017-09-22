var stage = document.getElementById("stage");
		var images = document.getElementsByTagName("img");
		var imgLen = images.length;
		var degree = 360/imgLen;
		var stepX = null;
		var stepY = null;
		var degX = null;
		var degY = null;
		for(var i = 0; i < imgLen; i++){
			var str = "rotateY("+degree*i+"deg) translateZ(300px)";
			css3Transform(images[i],str);
		}
		document.ondragstart = function(e){
			return false;
			
		}
		document.onmousedown = function(e){
			var eve = e || event;
			eve.preventDefault();
			var mouX = eve.clientX;
			var mouY = eve.clientY;
			document.onmousemove = function(e){
				var eve1 = e || event;
				var mouseX = eve1.clientX;
				var mouseY = eve1.clientY;
				stepX = mouseX - mouX;
				stepY = mouseY - mouY;
				degX -= stepY*0.2;
				degY += stepX*0.1;
				var str = "perspective(800px) rotateX(-30deg) rotateX("+degX+"deg) rotateY("+degY+"deg) "
				css3Transform(stage,str);
				mouX = mouseX;
				mouY = mouseY;
			}
		}
		document.onmouseup = function(){
			document.onmousemove = function(){
				return false;
			};
		};
		function css3Transform(element, value) {
	        var arrPriex = ["o", "ms", "Moz", "webkit", ""];
	        var length = arrPriex.length;
	        for (var i=0; i < length; i+=1) {  
	        	element.style[arrPriex[i] + "Transform"] = value; 
	        }
	    }