import * as t from "https://deno.land/std/testing/asserts.ts";
import { schema2dts } from "./schema2dts.js";

Deno.test("simple", () => {
  const schema = {
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
  const dts = schema2dts(schema);
  t.assertEquals(dts, `export type Product = { // A product from Acme's catalog
  productId: number; // The unique identifier for a product
}`);
});

Deno.test("types", () => {
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
  t.assertEquals(dts, `export type Person = {
  name: string;
  altname: string | null;
  age?: number;
  friends?: string[];
}`);
});
