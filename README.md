# JSONSchema.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A JavaScript ES module for manipulating [JSON Schema](https://json-schema.org/).

## Features

- Validate JSON data against a JSON Schema
- Convert JSON Schema to TypeScript type definition file (d.ts)
- Extract an example instance from a JSON Schema
- Create JSON Schema from a JSON data structure

## Usage

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
console.log(res.errors); // requires property "altname"
```

### Functions

- `async JSONSchema.validate(instance, schema)`: Validate instance data by JSON Schema
- `JSONSchema.toDTS(schema)`: Convert JSON Schema to TypeScript type definition file (d.ts)
- `JSONSchema.getExample(schema)`: Extract an example instance from JSON Schema
- `JSONSchema.fromJSON(schemajson)`: Create JSON Schema from a JSON data structure

## Test

```bash
deno test -A
```

## Dependencies

- [jsonscheama-es](https://github.com/code4fukui/jsonschema-es/) - JSON Schema validator ES module

## License

MIT License — see [LICENSE](LICENSE).