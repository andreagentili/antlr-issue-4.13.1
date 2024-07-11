# antlr-issue-4.13.1

This repo shows that this rollup configuration does not work with latest `4.13.1-patch-1` (mentioned in [this issue](https://github.com/antlr/antlr4/issues/4415)), as rollup is showing `Could not resolve import "antlr4"` errors.

```
$ npm install
$ npm run build

> language-parser@1.0.0 build
> rollup -c --bundleConfigAsCjs


src/index.ts → out...
(!) Plugin node-resolve: Could not resolve import "antlr4" in ./src/index.ts using exports defined in ./node_modules/antlr4/package.json.
(!) Plugin node-resolve: Could not resolve import "antlr4" in ./src/grammar/LanguageParser.ts using exports defined in ./node_modules/antlr4/package.json.
(!) Plugin node-resolve: Could not resolve import "antlr4" in ./src/grammar/LanguageVisitor.ts using exports defined in ./node_modules/antlr4/package.json.
(!) Plugin node-resolve: Could not resolve import "antlr4" in ./src/grammar/LanguageLexer.ts using exports defined in ./node_modules/antlr4/package.json.
(!) Plugin node-resolve: Could not resolve import "antlr4" in ./src/grammar/LanguageListener.ts using exports defined in ./node_modules/antlr4/package.json.
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
antlr4 (imported by "src/index.ts", "src/grammar/LanguageParser.ts", "src/grammar/LanguageVisitor.ts", "src/grammar/LanguageLexer.ts" and "src/grammar/LanguageListener.ts")
created out in 409ms
```
