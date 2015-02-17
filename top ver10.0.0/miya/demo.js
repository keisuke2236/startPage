console.log("called mode.js");

(function(){
	function test(){
		createDuiDraggable(document.getElementById('div0'));
		createDuiDraggable(document.getElementById('div1'));
		createDuiDraggable(document.getElementById('div2'));
		createDuiDraggable(document.getElementById('div3'));
		createDuiDraggable(document.getElementById('div4'));
		createDuiDraggable(document.getElementById('div5'));
		createDuiDraggable(document.getElementById('div6'));
		createDuiDraggable(document.getElementById('div7'));
		createDuiDraggable(document.getElementById('div8'));
		createDuiDraggable(document.getElementById('div9'));
		//createDuiDraggable(element0, {"containment":"parent","active":false,"hover":false});
	}
	//----- createDuiDraggable(<エレメント>, <連想配列>) -----
	//containment	: parent <- 移動範囲を親要素内とする
	//active		: false <- クリックすると要素が一番上にくる
	//hover 		: false <- マウスが上にくると要素が一番上にくる
	function createDuiDraggable(id, option){
		var draggable = new Dui.draggable(option);
		draggable.Ddraggable(id);
	}

	//こんな感じにやれば cb に渡した関数が、マウスが要素をクリックしたときに３つのイベントが返ってくるようにできる
	// function createDuiDraggable(id, option, cb){
	// 	var callback = (cb)? cb : null;
	// 	var draggable = new Dui.draggable(option);
	// 	draggable.Ddraggable(id, callback);
	// }

	function callback(event){

		//↓ のようにやれば自分で動きを書くこともできる
		switch(Dui.getMouseEventType(event)){
			case "down":break;
			case "up":console.log(event);
				break;
			case "move":break;
		}
	}
	document.addEventListener("DOMContentLoaded", function(){
		test();
	},false);
})();
