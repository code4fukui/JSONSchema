import { createValidator as _createValidator } from "./createValidator.js";
import { validate as _validate } from "./validate.js";
import { schema2dts as _schema2dts } from "./schema2dts.js";
import { schema2example as _schema2example } from "./schema2example.js";
import { json2schema as _json2schema } from "./json2schema.js";

export class JSONSchema {
  static async createValidator(schema) {
    return _createValidator(schema);
  }
  static async validate(data, schema, options) {
    return _validate(data, schema, options);
  }
  static toDTS(schema) {
    return _schema2dts(schema);
  }
  static getExample(schema) {
    return _schema2example(schema);
  }
  static fromJSON(schemajson) {
    return _json2schema(schemajson);
  }
};
