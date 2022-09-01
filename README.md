# JSONSchema
 
## schema2dts

- A converter function JSON Schema to TypeScript type definition file (d.ts)
- [JSON Schema | The home of JSON Schema](https://json-schema.org/)
- [jsonscheama-es - JSON Schema validater ES module](https://github.com/code4fukui/jsonschema-es/)

### Usage

```javascript
import { schema2dts } from "https://code4fukui.github.io/JSONSchema/schema2dts.js";
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
const dts = schema2dts(schema);
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

### example

```bash
deno run -A example.js > example.d.ts
```
