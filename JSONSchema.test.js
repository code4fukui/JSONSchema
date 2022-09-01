import * as t from "https://deno.land/std/testing/asserts.ts";
import { JSONSchema } from "./JSONSchema.js";

export const schema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/product.schema.json",
  "title": "Product",
  "description": "A product from Acme's catalog",
  "type": "object",
  "properties": {
    "productId": {
      "description": "The unique identifier for a product",
      "type": "integer"
    }
  },
  "required": [ "productId" ]
};

Deno.test("validate", async () => {
  const data = {
    productId: 31,
  };
  t.assertEquals((await JSONSchema.validate(data, schema)).errors.length, 0);
});
