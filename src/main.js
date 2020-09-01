const _el   = require('electron');

const {
    app,
    BrowserWindow
} = _el;


app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        transparent: true,
        frame: false,
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('./views/mainWindow/index.html')
});