import * as t from "https://deno.land/std/testing/asserts.ts";
import { createValidator } from "./createValidator.js";

Deno.test("simple", async () => {
  const schema = {};
  const instance = {};
  const options = {};
  const v = await createValidator(schema);
  const res = v.validate(instance, schema, options);
  t.assertEquals(res.errors.length, 0);
});
