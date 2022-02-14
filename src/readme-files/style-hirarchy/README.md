# Style Hirarchy of ReactUI
The different layers (in this order!) of the ReactUI are:
1. Base/Core
2. Components
3. Themes
4. Schemes
5. Designer

## Order when using ReactUI as a library
When using the ReactUI as a library the first two layers mentioned above are bundled into a file called "main.css" it is advised to import this file first into your index.js/tsx file like I did in [this project](../../index.tsx). After that you should either import the themes and color-schemes into your project as mentioned [in the main README](../../../README.md). At last how to include the designer file will be mentioned below.


## 1. Base/Core
The Base is the deepest layer of our hirarchy and is the first one to get overwritten. It's used as general styling, positioning and displaying. As we are using PrimeReact components (menus, tables, editors etc.), we are using one of their themes as a base for our component styling. We are using the "Saga Blue" theme. The different themes can be found at the [PrimeReact Website](https://www.primefaces.org/primereact/setup/).

### Changing the Base
If you do not like the PrimeReact theme we have chosen, you are able to change it, but **only if you use the ReactUI directly and not as a library**.
- Go to the [index.scss](https://github.com/sibvisions/reactUI/blob/master/src/index.scss)
- Change the first PrimeReact import to the theme you like.

Example:
``` scss
//@import '~primereact/resources/themes/saga-blue/theme.css';
@import '~primereact/resources/themes/luna-green/theme.css';
```

## 2. Components
This is the layer which gets imported after the PrimeReact theme so it will overwrite it. For most components there is a scss files which overwrites some of the properties set of the theme or adds new ones.

### Changing the Components Style
If you want to change the components style there are two ways depending on if you use the ReactUI as library or not.

#### 2.1. Using ReactUI directly
If you use the ReactUI directly, you can simply go into the scss file of the component you'd like to change and change the scss/css rule there. But you should first check out if the rule is not overwritten by a layer above or it will not work.

#### 2.2. Using ReactUI as a Library
If you use the ReactUI as a library, you should first check out which selector is being used, for the style you want to change in the dev console. Then you can change the style in your project's own css/scss file.

## 3. Themes
The themes are used to set the component sizes mostly by changing their paddings/margins sometimes also width and height properties. They overwrite the base's sizes.

How your own themes are imported/added, how you can change the selected theme or which themes are available can be found [at the main README](../../../README.md).

## 4. Color-Schemes
The color-schemes are used to edit the components backgrounds, text-colors, borders etc. everything which has to do with colors. It overwrites the base's colors.

How your own color-schemes are imported/added, how you can change the selected color-schemes or which color-schemes are available can be found [at the main README](../../../README.md).

## 5. PrimeDesigner
With the [PrimeDesigner](https://www.primefaces.org/designer-react/#/) it is possible to quickly design a PrimeReact theme (similar to our base). The PrimeDesigner css can either be imported directly or used from the public folder similar to the themes and color-schemes.

Note that not all css-rules of the PrimeDesigner are supported. Even though the PrimeDesigner css is most likely being imported as the last layer, the css selectors are more specified than in the PrimeDesigner, simply because it would ruin the general structure of the ReactUI otherwise.

### 5.1. Importing a PrimeDesigner file
There are two different ways to import a PrimeDesigner file, first is when you use ReactUI directly which will replace the base. 

Second way is when you use the ReactUI as library. This will also kind of replace the base but not directly because you don't have access to the base.

#### 5.1.1. Importing into index.scss
To directly import the downloaded theme from the PrimeDesigner, add the css to your project. Then comment out (or delete) the current base, then import your css instead (at the same place).

Example index.scss
``` scss
//@import '~primereact/resources/themes/saga-blue/theme.css';
@import './themeABC.css';
@import '~primereact/resources/primereact.css';
```

#### 5.1.2. Importing into your Project (ReactUI Library)
Add the css file to your project and then import it to your project. Preferably after main.css.

### 5.2. Using the Public Folder
Add a "design" folder to your public folder and add the css file to the folder. Then either add the "design" property to the ReactUI or use the "design" URL parameter and add the file name.

Example URL:
http://localhost:3000/?language=de&appName=vxdemo&colorScheme=dark&theme=basti&design=themeABC&baseUrl=http%3A%2F%2Flocalhost%3A80%2Fservices%2Fmobile/#
