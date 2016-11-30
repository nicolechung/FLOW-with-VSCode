Extensions to install

[VSCode-Flow](https://marketplace.visualstudio.com/items?itemName=rtorr.vscode-flow)

[VSCode-flow-ide](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide)

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


VSCode settings
Make sure you use these local settings in the `.vscode` folder.

Do not run JS Standard. Instead, JS Standard rules are applied to `eslint` via a package called [eslint-config-standard](https://github.com/feross/eslint-config-standard)

The local `.vscode` folder has settings that turns of `JS Standard`.

Instead, the local `.eslintrc.json` file uses the sames rules as `JS Standard`.

