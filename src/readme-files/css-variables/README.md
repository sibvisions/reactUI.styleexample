# CSS-Varibles for Color-Schemes
CSS-variables are set by putting the variable into :root e.g.
```css
:root {
    --topbar-background: green;
}
```

## Login Variables
Variable | Description
--- | --- 
login-mask-background | The login masks lower part background-color
login-logo-background | The login masks logo part background-color
login-placeholder-color | The text-color of the login inputfield's placeholder
login-shadow | The shadow of the login mask

## Screen Variable
Variable | Description
--- | ---
screen-background | The background-color of the area where screens are displayed

## TopBar Variables
Variable | Description
--- | ---
topbar-background | The background-color of the topbar
topbar-text-color | The text-color of the topbar (also includes menubars)
topbar-logo-background | The background-color of the logo of the topbar
topbar-button-background | The background-color for the buttons of the topbar
topbar-button-hover-background | The hover background-color for the buttons of the topbar

## Profile-Menu Variables
Variable | Description
--- | ---
profile-background | The background-color of the profile-menubar
profile-hover-background | The hover background-color of the profile-menubar
profile-text-color | The text-color of the profile-menu
profile-seperator | A border which separates the profile menu from the topbar buttons
profile-submenu-background | The background-color of the submenu (clicking profile-menu)
profile-item-hover-background | The hover background-color when a menuitem is hovered
profile-item-hover-text-color | The hover text-color when a menuitem is hovered

## Standard-Menu Variables
Variable | Description
--- | ---
std-menu-background | The background-color of the standard menu
std-menu-item-hover-background | The standard menu background-color of an item when hovering
std-menu-text-color | The text-color of the standard menu
std-menu-item-hover-text-color | The standard menu text-color of an item when hovering
std-menu-activeitem-color | Text color of the active menuitem (screen is opened)
std-menu-border | The border which separates the standard menu from topbar and screen
std-menu-fadeout-background | The background of a div which makes it seem like the text of a menugroup or menuitems is fading out when the menu is collapsed

## Corporation-Menu Variables
Variable | Description
--- | ---
corp-menu-background | The background-color of the corporation-menu's menubar
corp-menu-hover-background | The hover background-color of the corporation-menu's menubar
corp-menu-text-color | The text-color of the corporation-menu's menubar
corp-menu-submenu-background | The background-color of the submenu (clicking corporation-menu)
corp-menu-item-hover-background | The hover background-color when a menuitem is hovered
corp-menu-item-hover-text-color | The hover text-color when a menuitem is hovered
corp-menu-speeddial-background | The background-color of the corporation-menu speeddial
corp-menu-speeddial-color | The text-color of the corporation-menu speeddial
corp-menu-speeddial-shadow | The shadow of the corporation-menu speeddial

## Button Variables
Variable | Description
--- | ---
button-background | The background-color for buttons

## Popupmenubutton Variables
Variable | Description
--- | ---
popupmenubutton-panel-background | The background-color for the popup panel when clicking the button
popupmenubutton-item-hover-background | The background-color when hovering an item
popupmenubutton-item-hover-text-color | The text-color when hovering an item

## Inputfield Variables
Variable | Description
--- | ---
input-background | The background-color of an input field
input-border | The border of an input field

## Checkbox Variables
Variable | Description
--- | ---
checkbox-background | The background-color of a unselected checkbox
checkbox-border | The border of a unselected checkbox
checkbox-selected-background | The background-color of a selected checkbox
checkbox-selected-hover-background | The hover background-color of a selected checkbox
checkbox-color | The text-color of a selected checkbox

## Radiobutton Variables
Variable | Description
--- | ---
radiobutton-background | The background-color of a unselected radiobutton
radiobutton-border | The border of a unselected radiobutton
radiobutton-selected-outer-background | The outer ring background-color of a selected radiobutton
radiobutton-selected-outer-hover-background | The outer ring hover background-color of a selected radiobutton
radiobutton-inner-color | The inner color of a selected radiobutton

## Toolbar Variables
Variable | Description
--- | ---
--toolbar-background | The background-color of a toolbar
--toolbar-border-color | The border color of a toolbar

## Table Variables
Variable | Description
--- | ---
table-header-background | The background-color of table header columns
table-header-border | The border for table header columns
table-header-hover-background | The background-color when hovering a table header
table-row-odd-background | The background-color of odd rows
table-row-even-background | The background-color of even rows
table-row-hover-background | The hover background-color of rows
table-selected-row-background | The background-color of a selected row
table-row-border | The bottom-border of table rows
table-cell-hover-color | The text-color of the cell-content when hovering the cell
table-required-odd-background | The background-color for required columns in odd rows
table-required-even-background | The background-color for required columns in even rows
table-required-color | The text-color of required rows
table-readonly-odd-background | The background-color for readonly columns in odd rows
table-readonly-even-background | The background-color for readonly columns in even rows
table-sort-color | The text-color for sort indicators

## LinkedCellEditor Variables
Variable | Description
--- | ---
linked-panel-background | The background-color of the LinkedCellEditor's panel
linked-item-hover-background | The background-color of an item when hovering it
linked-item-hover-text-color | The text-color of an item when hovering it

## DateCellEditor Variables
Variable | Description
--- | ---
date-panel-background | The background-color of the DatePicker
date-header-background | The background-color of the header (year/month picker)
date-panel-header-border | The border which separates the year/month picker from the day picker
date-panel-hover-color | The text-color of a day when hovering over it
date-selected-background | The background-color of a selected day

## Dialog/Popup Variables
Variable | Description
--- | ---
dialog-header-background | The background-color of a dialogs header
dialog-header-text-color | The text-color of a dialogs header
dialog-header-border | The border which separates the header of a dialog from the content
dialog-icon-hover-color | The hover text-color of the 'x' to close a dialog
dialog-content-background | The background-color of a dialogs content

## Tabset Variables
Variable | Description
--- | ---
tab-navbar-background | The background-color of the Tabset navigation-bar
tab-navbar-border | The border of the Tabset navigation-bar
tab-selected-color | The border- and text-color of a selected Tab
tab-hover-background | The background-color when hovering a Tab
tab-border-color | The bottom-border color of an unselected Tab
tab-close-color | The color of the closing 'x'

## Tree Variables
Variable | Description
--- | ---
tree-background | The background-color of the Tree
tree-border | The border of the Tree
tree-item-hover-background | The background-color of a Tree-Item when hovering it
tree-selected-item-background | The background-color of a selected Tree-Item

## HTML-Editor Variables
Variable | Description
--- | ---
html-toolbar-background | The background-color of a HTML-Editors toolbar
html-toolbar-border | The border of a HTML-Editors toolbar
html-toolbar-button-hover-background | The background-color of toolbar-buttons when hovering them
html-picker-expanded-background | The background-color of picker panel elements (popupmenus)
html-picker-item-hover-background | The background-color when hovering picker items (popupmenus)

## Message Variables
Variable | Description
--- | ---
message-info-header-background | The header background-color of info messages
message-info-header-close-hover | The background-color behind the 'x' to close the message when hovering it of info messages
message-info-header-color | The header text-color info messages
message-warning-header-background | The header background-color of warning messages
message-warning-header-close-hover | The background-color behind the 'x' to close the message when hovering it of warning messages
message-warning-header-color | The header text-color warning messages
message-error-header-background | The header background-color of error messages
message-error-header-close-hover | The background-color behind the 'x' to close the message when hovering it of error messages
message-error-header-color | The header text-color error messages
message-question-header-background | The header background-color of question messages
message-question-header-close-hover | The background-color behind the 'x' to close the message when hovering it of question messages
message-question-header-color | The header text-color question messages

## Error-Dialog Variable
Variable | Description
--- | ---
error-dialog-background | The background-color of the error-dialog

## Loading-Screen Variables
Variable | Description
--- | ---
loading-screen-left-background | The background-color for the left side of the loading-screen
loading-screen-right-background | The background-color for the right side of the loading-screen
loading-spinner-color-1 | The first spinner-color of the progress-spinner animation
loading-spinner-color-2 | The second spinner-color of the progress-spinner animation
loading-spinner-color-3 | The third spinner-color of the progress-spinner animation
loading-spinner-color-4 | The forth spinner-color of the progress-spinner animation

## Focus Variables
Variable | Description
--- | ---
focus-box-shadow | The box-shadow when focusing a component
border-color-hover | The border color when hovering components

## TopBar Variable
Variable | Description
--- | ---
topbar-colors | The colors of the topbar to indicate loading

## Border-Radius Variables
It is also possible to change the border-radius of components

Variable | Description
--- | ---
login-border-radius | The border-radius for the login mask
button-border-radius | The border-radius for buttons
editor-border-radius | The border-radius for Editors/Inputs
date-border-radius | The border-radius for the DatePicker Panel
linked-border-radius | The border-radius for the LinkedCellEditor Panel
table-border-radius | The border-radius for tables
tab-border-radius | The border-radius for the Tabset navbar
dialog-border-radius | The border-radius for Dialogs/Popups
toolbar-border-radius | The border-radius for toolbars