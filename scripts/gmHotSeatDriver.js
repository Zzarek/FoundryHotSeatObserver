class GMSHotSeatDriver {
	static init() {
		window.addEventListener('mousedown', ev => {
			 if (canvas.activeLayer.controlled.length)
           			 return true;

		
		});
	}
}



Hooks.once('ready', GMSHotSeatDriver.init);
