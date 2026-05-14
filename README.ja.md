# JSONSchema.js

[JSON Schema](https://json-schema.org/) を操作するためのJavaScript ESモジュールです。

## 機能

- JSON Schemaを使用してJSONデータを検証
- JSON SchemaをTypeScriptの型定義ファイル（d.ts）に変換
- JSON Schemaからサンプルインスタンスを抽出
- JSONデータ構造からJSON Schemaを作成

## 使い方

```JavaScript
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
console.log(res.errors); // "altname" プロパティが必要です
```

### 関数

- `async JSONSchema.validate(instance, schema)`: JSON Schemaでインスタンスデータを検証
- `JSONSchema.toDTS(schema)`: JSON SchemaをTypeScriptの型定義ファイル（d.ts）に変換
- `JSONSchema.getExample(schema)`: JSON Schemaからサンプルインスタンスを抽出
- `JSONSchema.fromJSON(schemajson)`: JSONデータ構造からJSON Schemaを作成

## テスト

```bash
deno test -A
```

## 依存関係

- [jsonschema-es](https://github.com/code4fukui/jsonschema-es/) - JSON Schema バリデーター ESモジュール

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
