document.onclick = function(evt) {
	new Fire({x:evt.clientX,y:evt.clientY}).init().launch();
}

function Fire(target) {
	this.target = target;
	this.ele = document.createElement("div");
	
	this.init = function() {
		this.ele.className = "fire";
		this.ele.style.left = this.target.x + "px";
		this.ele.style.top = document.documentElement.offsetHeight + "px";
		document.body.appendChild(this.ele);
		return this;
	}
	//发射，从底部运动到鼠标的位置
	this.launch = function() {
		var that = this;
		animate(this.ele,{top:this.target.y,height:3},function(){
			that.explode();
		});
	}
	//爆炸
	this.explode = function() {
		document.body.removeChild(this.ele);
		//随机生成若干个火花
		var count = Math.floor(Math.random()*61) + 60;
		for(var i=0; i<count; i++) {
			new Spark(this.target).init().move();
		}
	}
}

function Spark(target){
	this.target = target;
	this.ele = document.createElement("div")
	this.vspeed = Math.floor(Math.random()*20)*(Math.random() >= 0.5 ? 1 : -1);
	this.hspeed = Math.floor(Math.random()*20)*(Math.random() >= 0.5 ? 1 : -1);
	//烟花初始化
	this.init = function() {
		this.ele.className = "spark";
		this.ele.style.left = this.target.x + "px";
		this.ele.style.top = this.target.y + "px";
		this.ele.style.background = "#" + Math.floor(Math.random()*0xffffff).toString(16);
		document.body.appendChild(this.ele);
		return this;
	}
	//烟花移动，抛物线运动
	this.move = function(){
		var that = this;
		var timer = setInterval(function() {
			if(that.ele.offsetTop > document.documentElement.offsetHeight){
				clearInterval(timer);
				document.body.removeChild(that.ele);
				return;
			}
			that.ele.style.left = that.ele.offsetLeft + that.vspeed + "px";
			that.ele.style.top = that.ele.offsetTop + that.hspeed++ + "px";
		},10);
	}
}


