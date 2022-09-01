import { Validator } from "https://code4fukui.github.io/jsonschema-es/lib/index.js";

export const createValidator = async (schema) => {
  const validator = new Validator();
  validator.addSchema(schema);
  for (;;) {
    const nextSchema = validator.unresolvedRefs.shift();
    if (!nextSchema) {
      break;
    }
    const schema = await (await fetch(nextSchema)).json();
    validator.addSchema(schema);
  }
  return validator;
};
