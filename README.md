# Game of Life

## Description

The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

This project is inspired by his work. It follows the same rule but we add two more properties :
- the mouse or the finger is used to create life on the board
- each cell have a color that is set when the cell become alive :
  - either randomly (because of the mouse or the finger)
  - or using a sort of mean between its alive neighbor (because of having 3 alive neighbor)

The project is localized in multiple languages.

The project supports multiple screen sizes and has two layouts.
One for the mobile and one for the screen with width greater than 800px.

## Usage

To start the app run :

```
deno task start
```

To typecheck and start the app run :

```
deno task check
```

To deploy on deno deploy, run :

```
(export DENO_DEPLOY_TOKEN=${YOUR_SECRET_TOKEN_HERE} && deno task deploy)
```
