import {app, BrowserWindow} from 'electron'; 


let appWindow

let createWindow = () => {
    appWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    appWindow.loadFile('index.html');

    appWindow.webContents.openDevTools();

    appWindow.on('closed', ()=>{
        appWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed',()=>{
    //close mac apps
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', ()=>{
    if(!appWindow) {
        createWindow();
    }
});