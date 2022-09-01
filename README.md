# JSONSchema.js

- a manipulate [JSON Schema](https://json-schema.org/) ES module for JavaScript

```JavaScript
import { JSONSchema } from "https://code4fukui.github.io/JSONSchema/JSONSchema.js";

const schema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
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

## Functions

### async JSONSchema.validate(instance, schema)

- validate instance data by JSON Schema

### JSONSchema.toDTS / schema2dts

- A converter function JSON Schema to TypeScript type definition file (d.ts)

```javascript
const dts = JSONSchema.toDTS(schema);
console.log(dts);
/*
export interface Person {
  name: string;
  altname: string | null;
  age?: number;
  friends?: string[];
};
*/
```

```bash
cd demo
deno run -A example.js > example.d.ts
```

### JSONSchema.getExample / schema2json

- extract a example instance from JSON Schema

### JSONSchema.fromJSON(schemajson)

- create JSON Schema by SchemaJSON json data
- see also [SchemaCSV](https://github.com/code4fukui/SchemaCSV)

```json
[
  { "name": "did", "type": "string", "example": "AA383838", "description": "publickey" },
  { "name": "name", "type": "string", "example": "taisukef" },
  { "name": "age", "type": "integer", "example": 43 }
]
```

## Test

```bash
deno test -A
```

## Dependencies

- [jsonscheama-es - JSON Schema validater ES module](https://github.com/code4fukui/jsonschema-es/)
