# JSONSchema.js

JSONスキーマ（JSON Schema）を操作するためのJavaScriptモジュールです。

## 機能
- JSONデータをJSONスキーマに対して検証する
- JSONスキーマをTypeScriptの型定義ファイル（d.ts）に変換する
- JSONスキーマからサンプルデータを生成する
- JSONデータからJSONスキーマを生成する

## 使い方

```javascript
import { JSONSchema } from "https://code4fukui.github.io/JSONSchema/JSONSchema.js";

const schema = {
  "$schema": "http://json-schema.org/draft-07/hyper-schema#",
  "title": "Person",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "altname": {
      "type": [ "string", "null" ],
    },
    "age": {
      "type": "integer",
    },
    "friends": {
      "type": "array",
      "items": {
        "type": "string",
      }
    }
  },
  "required": [ "name", "altname" ]
};
const res = await JSONSchema.validate({ name: "taisukef" }, schema);
console.log(res.errors); // requires property "altname"
```

## ライセンス
MIT License