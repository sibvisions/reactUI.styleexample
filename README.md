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
  The [Basti Theme](src/readme-files/basti) is the default theme applications use when there is nothing set.

  ### 1.2 basti_small
  The [Basti_small Theme](src/readme-files/basti_small) is the small theme when smaller menu-items and components are required.

  ### 1.3 basti_mobile
  The [Basti_mobile Theme](src/readme-files/basti_mobile) is the mobile theme which generally has bigger boxes so you can tap menu-items more easily and the inputfields borders look different aswell. 

## 2. Color-Schemes
There are four basic color-schemes available. Some color-schemes change more colors than others e.g. dark mode changes almost everything but orange not change as much.

  ### 2.1 Default
  The [Default Color-Scheme](src/readme-files/default) is the standatd color-scheme for applications when no color-scheme is set. 

  ### 2.2 Dark
  The [Dark Color-Scheme](src/readme-files/dark) is a dark-mode if you want to rest your eyes. It features dark colors instead of bright ones. 

  ### 2.3 Orange
  The [Orange Color-Scheme](src/readme-files/orange) is a white-orange style for your application. 

  ### 2.4 Blue
  The [Blue Color-Scheme](src/readme-files/blue) is a white-blue style for your application. It is pretty similar to the default color-scheme. 

  # Changing the Themes and Color-Schemes
  Additionally to choosing a color-scheme or theme it is also possible to change the style we have set easily with either our pre-defined CSS-variables or just by your CSS-Statements. This can be done by changing the application.css file of your JVx application or in your react application.

  ## 1. Themes

  ### Example
  As example/template file for themes I've added the [Basti-Theme](src/basti.scss) of the reactUI to this project.

  ### Available CSS-Variables
  To find a list of all pre-defined CSS-variables you are able to change for themes, click [here](src/readme-files/css-variables/themes)

  ### Changing the Theme with application.css
  By changing the "application.css" file of the JVx-application it is also possible to change the styles of the reactUI client. You can either change the pre-defined CSS-variables mentioned earlier or via CSS selectors

  ```css
  :root {
    --button-padding: 1rem 1.5rem;
  }

  .p-inputtext {
      padding: 5px 5px;
  }
  ```

  ### Add a CSS/SCSS File to your project
  Naturally you can also change the style by using your own CSS/SCSS files. Here you can also overwrite our CSS-variables or use your own selectors.

  I've created an example theme, the [Basti_big.scss](src/basti_big.scss). which is exclusive to this style-example. It features a bigger topbar and bigger paddings for some components.

  If you want to use the themes provided by the reactUI, you have to comment the basti_big import out in App.tsx or your selection will be overwritten!

  ## 2. Color-Schemes

  ### Example
  As example/template file for color-schemes I've added the [Default-scheme](src/default-scheme.scss) of the reactUI to this project.

  ### Available CSS-Variables
  To find a list of all pre-defined CSS-variables you are able to change for color-schemes, click [here](src/readme-files/css-variables/color-schemes).

  ### Changing the Color-Scheme with application.css
  By changing the "application.css" file of the JVx-application it is also possible to change the styles of the reactUI client. You can either change the pre-defined CSS-variables mentioned earlier or via CSS selectors

  ```css
  :root {
    --topbar-background: green;
  }

  .logo-background {
    background-color: orange;
  }
```

  ### Add a CSS/SCSS File to your project
  Naturally you can also change the style by using your own CSS/SCSS files. Here you can also overwrite our CSS-variables or use your own selectors.

  I've created another example color-scheme, the [green-scheme.scss](src/green-scheme.scss). which is exclusive to this style-example. 

  If you want to use the color-schemes provided by the reactUI, you have to comment the green-scheme import out in App.tsx or your selection will be overwritten!