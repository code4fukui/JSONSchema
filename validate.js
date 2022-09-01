import { createValidator } from "./createValidator.js";

export const validate = async (instance, schema, options) => {
  const v = await createValidator(schema);
  return v.validate(instance, schema, options);
};
