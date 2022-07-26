# Simple Status

#  Install

```
yarn
```

## Run for development in browser

```
yarn dev
```

## Run for development in Figma

```
yarn watch
```

Open `Figma Desktop App`, right click anywhere on the canvas to open the menu, `Plugins`->`Development`->`Import plugin from manifest...`, select the path of the `dist/manifest.json` file created earlier, you can successfully import the plugin.

Then by right-clicking, `Plugins`->`Development`->(plugin name), you can open the plugin.

## Build to production
```
npm run build
```

The project uses this boilerplate `https://github.com/BigLiao/figma-plugin-vue3`
