Extensions to install

[VSCode-Flow](https://marketplace.visualstudio.com/items?itemName=rtorr.vscode-flow)
[VSCode-flow-ide](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide)
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
[JSStandard](https://marketplace.visualstudio.com/items?itemName=shinnn.standard)
```
npm install flow-bin -global
```
Setting up user preferences

Then, in your user preferences in VS Code

```
"javascript.validate.enable": false,
    "eslint.enable": true,
    "standard.enable" : true,
    "editor.tabSize": 2,
    "flow.enabled": true,
    "flow.path": "<path to global flow>"
```