import { schema2dts } from "./schema2dts.js";

const schemaurl = "https://qiita.com/api/v2/schema";
const schema = await (await fetch(schemaurl)).json();
console.log(schema2dts(schema));
