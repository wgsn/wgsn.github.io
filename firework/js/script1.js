$(function() {
	$("body").on("click", function(evt) {
		

			if ($(".fire").length < 2 && $(".spark").length < 80) {
				new Fire({
					x: evt.clientX,
					y: evt.clientY
				}).init().launch();
			} else {
				return;
			}
		

	})
})

function Fire(a) {
	this.target = a;
	this.ele = $('<div class="fire"></div>');

	this.init = function() {
		this.ele.css({
			"left": this.target.x + "px",
			"top": $("html").height() + "px"
		});
		$("body").append(this.ele);
		return this;
	}

	this.launch = function() {
		var that = this;
		this.ele.animate({
			top: this.target.y + "px",
			height: "5px"
		}, 1000, function() {
			that.explode();
		})
	}

	this.explode = function() {
		this.ele.remove();
		var count = Math.floor(Math.random() * 61) + 60;
		for (var i = 0; i < count; i++) {
			new Spark(this.target).init().move();
		}
	}
}

function Spark(target) {
	this.target = target;
	this.ele = $('<div class="spark"></div>');
	this.vspeed = Math.floor(Math.random() * 30 + 1) * (Math.random() >= 0.5 ? 1 : -1);
	this.hspeed = Math.floor(Math.random() * 30) * (Math.random() >= 0.5 ? 1 : -1);
	//烟花初始化
	this.init = function() {
			this.ele.css({
				"left": this.target.x + "px",
				"top": this.target.y + "px",
				"background-color": "#" + Math.floor(Math.random() * 0xffffff).toString(16)
			})
			$("body").append(this.ele);
			return this;
		}
		//烟花移动，抛物线运动
	this.move = function() {
		var that = this;
		var timer = setInterval(function() {
			if (that.ele.offset().top > $("html").height() || that.ele.offset().top < 0 || that.ele.offset().left > $("html").width() || that.ele.offset().left < 0) {
				clearInterval(timer);
				that.ele.remove();
				return;
			}
			that.ele.css({
				"left": that.ele.offset().left + that.vspeed + "px",
				"top": that.ele.offset().top + that.hspeed++ + "px"
			})
		}, 20);
	}
}