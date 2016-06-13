//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。
 *
 */

(function() {

	// マップ上にウィンドウ表示するよ宣言
　　　　// メッセージウインドウより上に表示する場合
//	var Scene_map_start = Scene_Map.prototype.start;
//	Scene_Map.prototype.start = function() {
//		Scene_map_start.call(this);
//	    this._InfoWindow = new Window_Info();
//	    this.addWindow(this._InfoWindow);
//	};

    // メッセージウインドウより下に表示する場合
    var Scene_map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function() {
        this._InfoWindow = new Window_Info();
        this.addWindow(this._InfoWindow);
        Scene_map_createAllWindows.call(this);
    };

    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
        this._InfoWindow.setText();
        // 指定スイッチで起動
        if($gameSwitches.value(2)){
            this._InfoWindow.show();
        }else{
            this._InfoWindow.hide();
        }        
    };
	
	// ここからメニューウィンドウ作り始まります。
	function Window_Info() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function() {
		var x = 0;
		var y = 0;
	    var width = 180;
	    var height = 624;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info.prototype.refresh = function() {
	    this.contents.clear();
		this.changeTextColor(this.textColor(16));
                this.contents.fontSize = 26;
		this.drawText("COMBO",0, 0);
		this.resetTextColor();
                this.contents.fontSize = 30;
		this.drawText($gameVariables.value(39),0,40, 100, 'right');
		this.changeTextColor(this.textColor(16));
                this.contents.fontSize = 26;
		this.drawText("COMBO BONUS",0, 100);
		this.resetTextColor();
                this.contents.fontSize = 30;
		this.drawText($gameVariables.value(56),0,140, 100, 'right');
		this.changeTextColor(this.textColor(16));
                this.contents.fontSize = 26;
		this.drawText("SCORE", 0, 200);
		this.resetTextColor();
                this.contents.fontSize = 30;
		this.drawText($gameVariables.value(57),0,240, 100, 'right');
		this.changeTextColor(this.textColor(16));
                this.contents.fontSize = 26;
		this.drawText("TIME",0, 300);
		this.resetTextColor();
                this.contents.fontSize = 30;
		this.drawText($gameVariables.value(2),0,340, 100, 'right');
		this.changeTextColor(this.textColor(16));
                this.contents.fontSize = 26;
		this.drawText("LIFE",0, 400);
		this.resetTextColor();
                this.contents.fontSize = 48;
		this.drawText("× " + $gameVariables.value(40),0,440, 100, 'right');
	};
	
	// フォントサイズ
	Window_Info.prototype.standardFontSize = function() {
    	return 26;
    };
	// ウィンドウの透明度
//	Window_Info.prototype.standardBackOpacity = function() {
//    	return 255;
//	};
    // ウィンドウの余白
	Window_Info.prototype.standardPadding = function() {
    	return 18;
	};
	// ウィンドウの色調
//	Window_Info.prototype.updateTone = function() {
//    	this.setTone(64, 0, 128);
//	};
	
})();