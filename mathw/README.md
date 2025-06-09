# Convertir un Proyecto React en una Aplicación de Escritorio (Linux y Windows)

Este proyecto está basado en React y puede convertirse en una aplicación de escritorio multiplataforma usando [Electron](https://www.electronjs.org/) y [electron-builder](https://www.electron.build/).

## Estructura del Proyecto

```
my-react-app/
├── public/
├── src/
├── package.json
├── electron/
│   └── main.js
└── ...
```

## Pasos para Convertir el Proyecto

### 1. Instalar Electron y electron-builder

Desde la raíz del proyecto, ejecuta:

```bash
npm install --save-dev electron electron-builder
```

### 2. Crear el archivo principal de Electron

Crea una carpeta llamada `electron` y dentro de ella un archivo `main.js` con el siguiente contenido:

```js
// filepath: electron/main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile(path.join(__dirname, '../build/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
```

> Si usas TypeScript, puedes adaptar este archivo a `.ts`.

### 3. Modificar los scripts en `package.json`

Agrega o modifica los siguientes scripts:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "electron": "npm run build && electron electron/main.js",
  "dist": "npm run build && electron-builder"
}
```

### 4. Configurar electron-builder

Agrega la configuración mínima en tu `package.json`:

```json
"build": {
  "appId": "com.tuempresa.tuapp",
  "productName": "MiAppReact",
  "files": [
    "build/**/*",
    "electron/**/*"
  ],
  "directories": {
    "buildResources": "assets"
  },
  "linux": {
    "target": ["AppImage", "deb"]
  },
  "win": {
    "target": ["nsis"]
  }
}
```

### 5. Construir y ejecutar la app

- Para probar en modo escritorio:

  ```bash
  npm run electron
  ```

- Para generar instaladores para Linux y Windows:

  ```bash
  npm run dist
  ```

  Los instaladores se generarán en la carpeta `dist/`.

---

## Requisitos

- Node.js y npm instalados
- Para Linux: dependencias de Electron (puedes necesitar instalar `libgtk-3-0`, `libnss3`, etc.)
- Para Windows: puedes compilar desde Linux usando Wine, pero se recomienda compilar en cada sistema operativo.

---

## Recursos

- [Electron Documentation](https://www.electronjs.org/docs)
- [electron-builder Documentation](https://www.electron.build/)