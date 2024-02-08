const { app, BrowserWindow } = require('electron')
const path =require('path')
//crear window
const createWindow = () => {
    const win = new BrowserWindow({
      width: 400,
      height: 800,
      resizable: false,
      WebPreferences:{
        preload:path.join(__dirname,'preload.js'),
        transparent: true
      }
    })
    win.setMaximizable(false);
    //loadpage html
    win.loadFile('index.html')
    //title
    win.setTitle('Calculator')
    //icon
    win.setIcon('calculator.png')
    //menu
    win.setMenu(null)
    //open inspect
    // win.webContents.openDevTools()
  }

  app.whenReady().then(() => {
    createWindow()
  })
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })


  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  
  if (require('electron-squirrel-startup')) app.quit();