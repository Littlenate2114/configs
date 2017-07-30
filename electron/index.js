const electron = require('electron')
const {app, BrowserWindow} = require("electron");

app.on('ready', () => {
  let win = new BrowserWindow({
    width:450,
    height:290,
    resizable: false,
    frame:false,
    center:true,
    backgroundColor:'#262626',
    title:"Locoa"
  });
  win.loadURL('file:///home/user/Documents/dev/electron/index.html');
  win.setMenu(null)
})

exports.close = () => {
  app.quit();
}
