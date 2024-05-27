
# Template Webpack 5 - Module Federation 💻

Guía de como estructurar cualquier proyecto de ReactJS para trabajar con Microfronts utilizando Webpack 5 y Module Federation. Este repositorio contiene una configuración básica y entendible para exportar tus componentes/layouts/pages hacia cualquier otro proyecto que utilice Webpack 5.


## Documentación 🗒️

[Webpack 5](https://webpack.js.org/blog/2020-10-10-webpack-5-release/)

[Module Federation](https://webpack.js.org/concepts/module-federation/)

[React 18](https://es.react.dev/blog/2022/03/29/react-v18)
## Scripts 🛠️

El repositorio contiene scripts listos para poder probar y desplegar en los diferentes ambientes dev/qa/prod.

Los siguientes scripts nos ayudan a levantar el servidoor de Webpack en el ambiente deseado.

```bash
  npm run start:dev
  npm run start:qa
  npm run start:prod
```

Los siguientes scripts nos ayudan a crear el build del proyecto en el ambiente deseado.

```bash
  npm run build:dev
  npm run build:qa
  npm run build:prod
```
## Module Federation 🔗

Para poder agregar nuevas exportaciones de componentes en Webpack, debemos de considerar los archivos que se encuentran dentro de la carpeta `config`. El archivo `webpack.common.js` contiene la configuración que se comparte en cada ambiente, por lo solo se debera modificar en caso de nuevos plugins generales o configuración especifica.

Para agregar una nueva exportación de componentes, debemos situarnos en el ambiente correspondiente y en el plugin de `ModuleFederationPlugin` agregar la exportación en la propiedad `exposes`, por ejemplo:

```javascript
new ModuleFederationPlugin({
    name: 'template', // Nombre para indentificar nuestro proyecto en MF
    filename: 'remoteEntry.js',
    exposes: {
        "./Login": "./src/layouts/Login.tsx",
        "./MyComponent":  "./src/components/MyComponent.tsx", // Nuevo componente expuesto
    },
    ...
    },
}),
```

Esta exportación debe de añadirse en cada ambiente (cada archivo `webpack.env` de la carpeta `config`), puede haber exportaciones que no esten en todos los ambientes, esto es normal ya que las liberaciones son secuenciales de desarrollo a qa, de qa a prod.


## Puntos importantes ❗

#### Menos uso de librerías

Se recomienda utilizar lo menos posible de librerías externas para que el build sea lo mas liviano y rapído al momento de importarse en otro proyecto.

#### Capa de negocio en los componentes

Analizar la exportación de los componentes antes de publicarlos, una buena practica será conocer las propiedades y los usos que tendrá estos componentes al momento de exponerse y poder evitar errores al momento de integrarlos.

#### CSS Puro

Como bien sabemos existen diferentes formas de aplicar estilos a nuestros componentes, ya sea utilizando CSS-in-JS o utilizando librería de componentes, por lo que se recomienda utilizar archivos de estilos por separado, esto para tener una mayor compatibilidad con los diseños en el navegador y el proyecto host.



## Autores

- [@ArturoEsp](https://www.github.com/arturoesp) - Arturo Espinoza Herrera | Desarrollador FullStack TS/JS

