// virtual keyboard (beta):
const VirtualKeyboard = require('electron-virtual-keyboard');



const {
	BrowserWindow,
	app
} = require('electron');
const path = require("path");
let isDebug = !!(process.argv[2] && (process.argv[2].trim().toLowerCase() === "-d" || process.argv[1].includes("inspect-brk")));
app.commandLine.appendSwitch('--enable-features', 'OverlayScrollbar');
global.shutdown = {
	confirmed: false
};
global.isDebug = isDebug;
let win;
app.on('ready', function() {
	const {
		width,
		height,
		x,
		y
	} = require("electron").screen.getPrimaryDisplay().workAreaSize;

	win = new BrowserWindow({
		icon: path.join(__dirname, "operators/KibouteAssets/kLogo1.png"),
		frame: true,
		closable: true,
		fullscreen: true,
		fullscreenable: false,
		symbolColor: '#74b1be',
		resizable: false,
		show: true,
		kiosk: true,
		title: 'Graphite Error Runtime', // Incase something goes south!	
    x: 0,
    y: 0,
		width: 411,
		height: 731,
		minHeight: 238,
		minWidth: 411,
		backgroundColor: '#3b3b3b',
		webPreferences: {
			parent: win,
			nodeIntegrationInWorker: true,
			experimentalFeatures: true,
			nodeIntegration: true,
			webviewTag: true,
			sandbox: true,
			blinkFeatures: 'OverlayScrollbars'
		}
	});
	win.center();
	win.setPosition(0, 0);

 
   vkb = new VirtualKeyboard(win.webContents);
   
	//  win.webContents.openDevTools({mode: 'undocked'});
	win.loadFile(path.join(__dirname, "operators/com.graphitesessionstarter.scs1/piles/index.html"));
	win.setIcon(path.join(__dirname, "operators/KibouteAssets/kLogo1.png"));
	if (win.removeMenu) win.removeMenu(); else win.setMenu(null);
  
});

