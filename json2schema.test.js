import * as t from "https://deno.land/std/testing/asserts.ts";
import { json2schema } from "./json2schema.js";

Deno.test("simple", () => {
  const schemajson = [
    { name: "did", type: "string", example: "AA383838", description: "publickey" },
    { name: "name", type: "string", example: "taisukef" },
    { name: "age", type: "integer", example: 43 },
  ];
  const sc = json2schema(schemajson);
  //console.log(JSON.stringify(sc, null, 2));
  const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "did": {
        "type": "string",
        "example": "AA383838",
        "description": "publickey"
      },
      "name": {
        "type": "string",
        "example": "taisukef"
      },
      "age": {
        "type": "integer",
        "example": 43
      }
    },
    "required": [
      "did",
      "name",
      "age"
    ]
  };
  t.assertEquals(sc, schema);
});
