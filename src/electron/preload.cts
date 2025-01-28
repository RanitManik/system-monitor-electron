const electron = require('electron');

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback: (statistics: any) => void) => callback({}),
  getStaticData: (statistics: any) => console.log('static'),
})