const { app, BrowserWindow, ipcMain } = require("electron");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        fullscreen: true,
        autoHideMenuBar: true,
        backgroundColor: "#000000",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile("index.html");

    // Opsional: buka DevTools untuk debugging
    // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

// Menutup aplikasi saat tombol CLOSE ditekan
ipcMain.on("close-app", () => {
    app.quit();
});

app.on("window-all-closed", () => {
    app.quit();
});