// Copyright  by miyajima
console.log("called script.js");

var Dui = {};

(function(){
	var MYdraggable = function(opt){
		opt = (opt)? opt : {};
		this.containment = (opt.containment)? opt.containment : false;
		this.active 	　= (opt.active)?　opt.active : false;
		this.hover 		　= (opt.hover)? opt.hover : false;
	};
	MYdraggable.prototype.Ddraggable = function(element, func){
		if(element == void 0) return null;
		var cb = func || null;
		event(element, cb, this);
	};
	function getMEType(event){
		switch(event.type){
			case "mousedown":return "down";
			case "mouseup"	:return "up";
			case "mousemove":return "move";
			default:return null;
		}
	}
	function event(element, cb, inst){
		var dragFlag = false;
		var cX = 0, cY = 0;//client
		var eX = 0, eY = 0;//element
		var mX = 0, mY = 0;//move
		document.addEventListener('mousedown',function(e){
			// console.log(e);
			if(e.target.classList.contains("Ddrag")&& e.target.id == element.id){
				if(cb !== null){
					cb(e);
				}
				else{
					if(inst.active){
						changeActiveElement(e);
					}
					dragFlag = true;
					cX = e.clientX + document.body.scrollLeft;
					cY = e.clientY + document.body.scrollTop;
					eX = e.target.offsetLeft;
					eY = e.target.offsetTop;
				}
			}
		},false);
		document.addEventListener('mouseup',function(e){
			if(cb !== null){
				cb(e);
			}
			else{
				if(dragFlag){
					dragFlag = false;
				}
			}

		},false);
		document.addEventListener('mousemove',function(e){
			if(cb !== null){
				if(e.target.classList.contains("Ddrag") && e.target.id == element.id){
					cb(e);
				}
			}
			else{
				if(dragFlag){
					mX = e.clientX - cX;
					mY = e.clientY - cY;
					cX = e.clientX + document.body.scrollLeft;
					cY = e.clientY + document.body.scrollTop;
					if(inst.containment == "parent"){
						//もしかしたらバグが出る可能性が
						var maxW = element.offsetParent.offsetWidth-element.offsetWidth;//親要素の最大の横幅
						var maxH = element.offsetParent.offsetHeight-element.offsetHeight;//親要素の最大の高さ
						var parentOleft = element.offsetParent.offsetLeft;//親要素の左マージン
						var parentOtop = element.offsetParent.offsetTop;//親要素の上マージン
						var parentMaxW = parentOleft+element.offsetParent.offsetWidth;//左の空白 + 親要素の横幅
						var parentMaxH = parentOtop+element.offsetParent.offsetHeight;//上の空白 + 親要素の高さ
						var nX = eX+mX;//どれだけ x 座標を移動するか
						var nY = eY+mY;//どれだけ y 座標を移動するか
						eX = (nX < 0)? 0 : (nX > maxW)? maxW : nX;//elementの x 座標
						eY = (nY < 0)? 0 : (nY > maxH)? maxH : nY;//elementの y 座標
						cX = (cX < parentOleft)? parentOleft : (cX > parentMaxW)? parentMaxW : cX;//クライアント座標の更新(範囲外の処理)
						cY = (cY < parentOtop)? parentOtop : (cY > parentMaxH)? parentMaxH : cY;//クライアント座標の更新(範囲外の処理)
					}
					else{
						eX += mX;
						eY += mY;
					}
					element.style.top = eY+"px";
					element.style.left = eX+"px";
				}
				else{
					if(e.target.classList.contains("Ddrag") && e.target.id == element.id && inst.hover){
						changeActiveElement(e);
					}
				}
			}
		},false);
	}
	function changeActiveElement(e){
		if(e.target.classList.contains("Ddrag")){
			var element = document.getElementsByClassName(e.target.className);
			var tmpElement = document.getElementById(e.target.id);
			var i;
			var l;
			console.log(element.log);
			for(i=0,l=element.length; i<l; i++){
				//element[i].style.zIndex = '0';
				//element[i].style.opacity = '0.4';
			}
			//移動中のz-indexを２に指定してその間に１のオブジェクトを配置する。
			tmpElement.style.zIndex = '200';
		}

	}
	Dui.draggable = MYdraggable;
	Dui.getMouseEventType = getMEType;
})();
