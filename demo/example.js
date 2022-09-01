import { schema2dts } from "../schema2dts.js";

const schemaurl = "https://qiita.com/api/v2/schema";
const schema = await (await fetch(schemaurl)).json();
const dts = schema2dts(schema);
console.log(dts);

await Deno.writeTextFile("example.d.ts", dts);
