
# Prueba técnica Metlabs

Esta es una aplicación web serverless que utiliza Firebase de Google, incluyendo autenticación y base de datos. La aplicación está desarrollada con Typescript y React para proporcionar una interfaz interactiva y dinámica.

Enlace a la apliación desplegada: [polygon-app](https://polygon-pmfrancisco.vercel.app/)


## Características

- **Serverless:** Utiliza Firebase para evitar la gestión de servidores.
- **Autenticación:** Implementada con Firebase Authentication.
- **Base de datos:** Utiliza Firestore de Firebase para almacenamiento de datos.
- **Frontend:** Construido con React y Typescript para una experiencia de usuario moderna y robusta.
- **Despliegue:** Desplegada en Vercel para un hosting eficiente y escalable.
- **Responsividad:** Diseño completamente responsivo para adaptarse a dispositivos móviles y de escritorio.


## Instalación

Install my-project with npm


1. Clona el repositorio:

```bash
  git clone <url_repositorio>
```

2. Navega al directorio desde tu terminal:

```bash
  cd client
```

3. Instala las dependencias usando npm o yarn:

```bash
  npm install
  # or
  yarn install
```

4. Configura Firebase

- Ve a Firebase Console y crea un nuevo proyecto.
- Configura Firebase Authentication y Firestore Database.
- Ve a la sección de configuración del proyecto en Firebase y copia las claves de configuración.
- Crea un archivo .env en el directorio raíz del proyecto y agrega las siguientes variables de entorno con las claves correspondientes:
```bash
  VITE_API_KEY=your_api_key
  VITE_AUTH_DOMAIN=your_auth_domain
  VITE_PROJECT_ID=your_project_id
  VITE_STORAGE_BUCKET=your_storage_bucket
  VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
  VITE_APP_ID=your_app_id
  VITE_MEASUREMENT_ID=your_measurement_id
```
## Despliegue

Inicia la aplicacion

```bash
  npm run build
```


## Licencia

[APACHE 2.0](LICENSE)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/GITHUB-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/PMFrancisco)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/franciscopm)