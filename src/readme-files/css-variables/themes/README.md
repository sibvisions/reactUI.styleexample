# CSS Variables for Themes
CSS-variables are set by putting the variable into :root e.g.
```css
:root {
    --button-padding: 1rem 1.5rem;
}
```

## Font Variables
Variable | Description
--- | ---
font-size | The font-size of the application

## Login Variables
Variable | Description
--- | --- 
login-form-top-bottom-padding | The top and bottom paddings/gaps of the login form
login-form-left-right-padding | The left and right paddings/gaps of the login form
login-form-field-margin | The margins between fields of the login mask

## Standard-Menu Variables
Variable | Description
--- | --- 
std-header-height | The header/topbar height of the standard-menu
std-screen-title-size | The font-size of the screen title
std-screen-title-margin | The left margin to the collapse button
std-menu-width | The menu (panelmenu) width of the standard-menu
std-menu-collpased-width | The menu (panelmenu) width of the standard-menu when collapsed
std-logo-width | The logo width of the standard-menu
std-logo-collapsed-width | The logo width of the standard-menu when collapsed
std-logo-height | The logo height of the standard-menu
std-profile-height | The profile-menu's height
std-profile-width-small | The profile-menu's width when the window is small (<= 960px width)
std-profile-padding | The profile-menu's menubar padding to increase it's size
std-profile-pic | The size of the profile-menu's picture size
std-profile-submenu-width-small | The profile-menu's submenu list width, when the window is small (<= 960px width)
std-topbar-button-size | The size of the topbar buttons
std-topbar-button-size-small | The size of the topbar buttons, when the window is small (<= 960px width)
std-fadeout-width | The width of the fadeout div (a div which makes menu-item texts seem like fading out when the menu is collapsed)
std-fadeout-left | The left value of the absolute positioned fadeout-div
std-menu-header-padding | The padding of a standard-menu's header item (defines the gap between header items)
std-menu-item-padding | The padding of a standard-menu's menu-item (defines the gap between header items)
menuicon-size | The size of the menuicon (also for corporation menu)

## Corporation-Menu Variables
Variable | Description
--- | --- 
corp-header-height | The header/topbar height of the corporation-menu
corp-screen-title-size | The font-size of the screen title
corp-logo-width | The logo width of the corporation-menu
corp-profile-height | The profile-menu's height of the corporation-menu
corp-profile-width-small | The profile-menu's width when the window is small (<= 960px width)
corp-profile-padding | The profile-menu's menubar padding to increase it's size
corp-profile-pic | The size of the profile-menu's picture size
corp-profile-submenu-width-small | The profile-menu's submenu list width, when the window is small (<= 960px width)
corp-topbar-button-size | The size of the topbar buttons
corp-topbar-button-size-small | The size of the topbar buttons, when the window is small (<= 960px width)
corp-menubar-height | The height of the menubar of the corporation-menu
corp-speeddial-size | The size of the speeddial-button (quick navigation to screens)
corp-menu-header-padding | The padding of a standard-menu's header item (defines the gap between header items)
corp-menu-item-padding | The padding of a standard-menu's menu-item (defines the gap between header items)

## Input Variables
Variable | Description
--- | --- 
input-padding-tb | The top and bottom padding of input-fields.
input-padding-lr | The left and right padding of input fields.
input-button-padding | The padding of buttons next to input-fields (LinkedCellEditor, DateCellEditor)
input-button-icon-size | The size of an icon in input-field-buttons (LinkedCellEditor, DateCellEditor)

## Button Variables
Variable | Description
--- | --- 
button-padding | The padding for regular buttons
button-icon-only-padding | Paddings for buttons, which don't have any text and only an icon
menubtn-leftbtn-padding | The paddings of a Popupmenubuttons left side
menubtn-rightbtn-padding | The paddings of a Popupmenubuttons right side
checkbox-size | The size of the Checkbox component
radiobutton-size | The size of the Radiobutton component

## Tabset Variables
Variable | Description
--- | --- 
tab-padding | The padding of Tabs in the Tabset-Navbar

## Table Variables
Variable | Description
--- | --- 
table-header-padding | The padding of table-header-columns
table-cell-padding-top-bottom | The top and bottom padding of table-cells
table-cell-padding-left-right | The left and right padding of table-cells
table-data-height | The height of table data (not the height of row, height of row will be data-height + ~8px)

## Label Variables
Variable | Description
--- | --- 
label-padding | The top and bottom padding for labels

## Dialog Variables
Variable | Description
--- | --- 
dialog-header-padding | The padding of a dialogs header
error-dialog-textarea-height | The height of the error-dialog textarea
error-dialog-icon-size | The font-size of the error-dialog icon

## Crash Variables
Variable | Description
--- | --- 
crash-message-size | The size of the crash message
crash-stack-height: The height of the crash message stack

## Topbar (Progressbar) Variables
Variable | Description
--- | --- 
topbar-position: The position of the topbar (progressbar) valid values are "top" and "bottom"
topbar-medium-interval: The interval when a response roundtrip is considered medium. Not entering a valid number in ms will remove the interval completely (no color change)
topbar-long-interval: The interval when a response roundtrip is considered long. Not entering a valid number in ms will remove the interval completely (no color change)

