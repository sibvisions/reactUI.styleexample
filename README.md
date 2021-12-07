# reactUI style example

This is an example application for [reactUI](https://github.com/sibvisions/reactUI). It showcases the built-in reactUI themes and coloring schemes and how a developer is able to insert their own or edit the current modes.

This example uses the reactUI as library to show the different possible styles.

# Dev Setup
- run `npm link` in your reactUI directory
- run `npm link reactUI` in your reactUI.stylexample directory
- run `npm link ../reactUI/node_modules/react` in your reactUI.stylexample directory to prevent react collision errors
- if you run `npm install`, you have to repeat step 2 and 3!
- if you run into issues, where it says that reactUI can't be found, run ```npm run bundle``` or ```npm run devbundle```, depending on whether you want to use production or development environmental variables, in your reactUI directory to create the dist directory where the example will receive the components, functions etc.

**In the newer Node version I had a problem where multiple `npm link` commands did not work. (node 16.x.x) for me 14.x.x worked fine**

## Getting Started
Import the "ReactUI" Component from the reactUI library, in your main file (e.g. App.tsx) render the component and pass properties as you wish.

### Config.JSON
If you don't enter the required properties in the URL, it is also possible to add a config.json file into your public directory (only works with devbundle):
```json
{
    "appName": [application name here],
    "baseUrl": [baseURL here],
    "username": [username here],
    "password": [password here],
    "deviceMode": [deviceMode],
    "language": [language (en, de)],
    "logoBig": [path to logo in public directory],
    "logoSmall": [path to logo in public directory],
    "logoLogin": [path to logo in public directory],
    "theme": [theme here],
    "colorScheme": [color-scheme here]
}
```

### Style specific Properties for the ReactUI Component
Name | Type | Description
--- | --- | --- |
theme | string | The UI's theme. Will mainly change paddings (-> sizes) of components. Available themes: basti, basti_small, basti_mobile
colorScheme | string | The UI's colors. Will change the front-end appearance of the web-app. Available color-schemes: default, dark, orange, blue

### Example
```typescript
  return (
    <ReactUI 
        theme="basti"
        colorScheme="dark"
      />
  );
```