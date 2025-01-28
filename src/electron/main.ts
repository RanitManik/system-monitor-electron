import {app, BrowserWindow} from 'electron';
import path from 'path';
import {isDev} from "./util.js";
import {pollResources} from "./resource-manager.js";
import {getPreloadPath} from "./pathResolver.js";

app.on("ready", async () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    }
  })

  if (isDev()) {
    await mainWindow.loadURL("http://localhost:3000");
  } else {
    await mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
  }

  pollResources();
})



