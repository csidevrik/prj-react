const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  console.log('Creating window...')
  
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // En desarrollo, carga la URL de Vite
  // if (process.env.VITE_DEV_SERVER_URL) {
  //   win.loadURL(process.env.VITE_DEV_SERVER_URL)
  // } else {
  //   // En producción, carga los archivos construidos
  //   win.loadFile('dist/index.html')
  // }
    // Añadir logs para debugging
  win.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Failed to load:', errorCode, errorDescription)
  })

  win.webContents.on('did-finish-load', () => {
    console.log('Page loaded successfully')
  })
  
  // En desarrollo, carga el servidor de Vite
  if (process.env.NODE_ENV === 'development') {
    console.log('Loading development URL')
    win.loadURL('http://localhost:5173')
    win.webContents.openDevTools()
  } else {
    // Cambiado para usar path.resolve y manejar rutas de producción
    const indexPath = path.resolve(__dirname, './dist/index.html')
    console.log('Loading production file:', indexPath)
    win.loadFile(indexPath).catch(error => {
      console.error('Error loading file:', error)
      // Intenta una ruta alternativa si la primera falla
      const altPath = path.resolve(process.resourcesPath, 'app/dist/index.html')
      console.log('Trying alternative path:', altPath)
      win.loadFile(altPath).catch(console.error)
  }
  
  // // Abre las herramientas de desarrollo en modo desarrollo
  // if (process.env.NODE_ENV === 'development') {
  //   win.webContents.openDevTools()
  // }

}

app.whenReady().then(() => {
  console.log('App is ready')
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
