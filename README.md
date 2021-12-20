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

# Getting Started
Import the "ReactUI" Component from the reactUI library, in your main file (e.g. App.tsx) render the component and pass properties as you wish.

## Setting the Theme and Coloring Scheme
Setting the theme and coloring scheme is possible in three ways. You can set it via URL parameters in your browser, as property of the ReactUI component in your code or if you have the development environmental variable, you can also set it in your config.json file.

  **Available themes:** 
  - basti
  - basti_small
  - basti_mobile 
    
  **Available color-schemes:** 
  - default
  - dark
  - orange
  - blue

### 1. Config.JSON
If you don't enter the required properties in the URL, it is also possible to add a config.json file into your public directory (only works with devbundle). This has the least priority:
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

### 2. Setting via URL
  
  To set the theme and color-scheme by URL use the "theme" and "colorScheme" parameters. Setting by URL has mid-tier priority.

  **Example URL:** 
  
  "http://localhost:3000/?language=en&appName=vxdemo&theme=basti&coloringScheme=dark&baseUrl=http%3A%2F%2Flocalhost%3A80%2Fservices%2Fmobile/#/home"

### 3. Setting via Properties

  Setting the theme and color-scheme by properties is done by passing the ReactUI properties theme and colorScheme. Setting the values as properties has the highest priority.

### Style specific Properties for the ReactUI Component
Name | Type | Description
--- | --- | --- |
theme | string | The UI's theme. Will mainly change paddings (-> sizes) of components
colorScheme | string | The UI's colors. Will change the front-end appearance of the web-app

### Example
```typescript
  return (
    <ReactUI 
        theme="basti"
        colorScheme="dark"
      />
  );
```

# Showcase
In the following links there are screenshots which will showcase the already built-in themes and color-schemes which you can choose from.

## 1. Themes
There are three basic themes you can choose. Those will mainly change the padding or size of the components.

  ### 1.1 basti
  This is the default theme applications use when there is nothing set. [Basti Theme](src/readme-files/basti)

  ### 1.2 basti_small
  This is the small theme when smaller menu-items and components are required. [Basti_small Theme](src/readme-files/bast_small)

  ### 1.3 basti_mobile
  This is the mobile theme which generally has bigger boxes so you can tap menu-items more easily and the inputfields borders look different aswell. [Basti_mobile Theme](src/readme-files/basti_mobile)

## 2. Color-Schemes
There are four basic color-schemes available. Some color-schemes change more colors than others e.g. dark mode changes almost everything but orange not change as much.

  ### 2.1 Default
  This is the default color-scheme for applications. [Default Color-Scheme](src/readme-files/default)

  ### 2.2 Dark
  This color-scheme is a dark-mode if you want to rest your eyes. It features dark colors instead of bright ones. [Dark Color-Scheme](src/readme-files/dark)

  ### 2.3 Orange
  The orange color-scheme is a white-orange style for your application. [Orange Color-Scheme](src/readme-files/orange)

  ### 2.4 Blue
  The blue color-scheme is a white-blue style for your application. It is pretty similar to the default. [Blue Color-Scheme](src/readme-files/blue)

  # Changing the Themes and Color-Schemes
  Additionally to choosing a color-scheme or theme it is also possible to change the style we have set easily with either our pre-defined CSS-variables or just by your CSS-Statements. This can be done by changing the application.css file of your JVx application or in your react application.

  ## Example
  As example for color-schemes I've added the default-scheme of the reactUI to this project. [Default-scheme](./default-scheme.scss)

  ## Available CSS-Variables
  To find a list of all pre-defined CSS-variables you are able to change, click [here](src/readme-files/css-variables).

  ## Changing the Color-Scheme with application.css
  By changing the "application.css" file of the JVx-application it is also possible to change the styles of the reactUI client. You can either change the pre-defined CSS-variables mentioned earlier or via CSS selectors

  ```css
:root {
    --topbar-background: green;
}

.logo-background {
  background-color: orange;
}
```

  ## Add a CSS/SCSS File to your project
  Naturally you can also change the style by using your own CSS/SCSS files. Here you can also overwrite our CSS-variables or use your own selectors.

  I've created another example color-scheme which is exclusive to this style-example. [Green-scheme.scss](./green-scheme.scss).

  If you want to use the color-schemes provided by the reactUI, you have to comment the green-scheme import out or your selection will be overwritten!