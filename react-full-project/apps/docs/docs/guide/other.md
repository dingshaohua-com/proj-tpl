# 其它

## GitIgnore
基于 rsbuild 和 rspress 创建项目中的 `.gitignore` 相同，我们把 main 项目的此文件复制到根项目即可，然后删除两个项目的此文件即可！

## Biome
基于 rsbuild 和 rspress 创建项目中的 `biome.json` 相同，我们把它抽离到子包
```json title=packages/config-biome/index.json
{
  "assist": {
    "actions": {
      "source": {
        "organizeImports": "on"
      }
    }
  },
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "formatter": {
    "indentStyle": "space",
    "lineWidth": 1000
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single"
    }
  },
  "css": {
    "parser": {
      "cssModules": true
    }
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "a11y": {
        "recommended": false
      },
      "style": {
        "noNonNullAssertion": "off"
      }
    }
  }
}
```

最后在根项目中创建此文件，这样全局皆准寻此配置
```json title=biome.json
{
  "extends": ["./packages/config-biome/index.json"]
}
```

哦，对了最后别忘了，在根项目中安装 `pnpm add --D @biomejs/biome --workspace-root`，并且在vscode安装biome插件