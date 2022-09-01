import * as t from "https://deno.land/std/testing/asserts.ts";
import { schema2example } from "./schema2example.js";

Deno.test("simple", () => {
  const schema = {
    type: "string"
  };
  t.assertEquals(schema2example(schema), "abc");
});
Deno.test("object", () => {
  const schema = {
    type: "object",
    properties: {
      a: {
        type: "number",
        example: 123
      },
      b: {
        type: "array",
        items: {
          type: "integer",
          example: 5,
        }
      }
    }
  };
  t.assertEquals(schema2example(schema), { a: 123, b: [5] });
});
