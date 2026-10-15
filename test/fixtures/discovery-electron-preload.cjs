const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('discoveryFixture', {
  invoke: configuration => ipcRenderer.invoke('vscode:openvision-discover-models', configuration),
});
