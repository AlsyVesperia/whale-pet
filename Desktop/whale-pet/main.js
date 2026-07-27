const { app, BrowserWindow, ipcMain } = require('electron');

let win;

function createWindow() {
  const { screen } = require('electron');
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    width: width,
    height: height,
    x: 0,
    y: 0,
    transparent: true,
    backgroundColor: '#00000000',
    transparent: true,
    frame: false,
    hasShadow: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    resizable: false,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  if (process.platform === 'darwin') {
    win.setVisibleOnAllWorkspaces(true);
    win.setHasShadow(false);
  }

  win.loadFile('index.html');

  // 默认全穿透
  win.setIgnoreMouseEvents(true, { forward: true });

  // 监听渲染进程发来的“是否需要交互”消息
  ipcMain.on('set-ignore-mouse', (event, ignore) => {
    if (win && !win.isDestroyed()) {
      win.setIgnoreMouseEvents(ignore, { forward: true });
    }
  });
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});