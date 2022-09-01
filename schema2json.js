// get JSON with the example or dummy value
export const schema2json = (schema) => {
  const getType = (type) => {
    if (Array.isArray(type)) {
      type = type.filter(t => t != "null")[0];
    }
    return type;
  };
  const getDummy = (type) => {
    if (type == "integer") {
      return 3;
    } else if (type == "number") {
      return 1.5;
    } else if (type == "string") {
      return "abc";
    } else if (type == "boolean") {
      return true;
    } else if (type == "null") {
      return null;
    } else {
      throw new Error("not support yet: " + type);
    }
  };
  const makeExample = (sc) => {
    const type = getType(sc.type);
    if (type == "object") {
      const obj = {};
      const p = sc.properties;
      for (const name in p) {
        obj[name] = makeExample(p[name]);
      }
      return obj;
    } else if (type == "array") {
      return [makeExample(sc.items)];
    } else {
      return sc.example || getDummy(type);
    }
  };
  const res = makeExample(schema);
  return res;
};
/*
const sc = JSON.parse(await Deno.readTextFile("./NewCollege.schema.json"));
const d = schema2json(sc);
console.log(d);
*/
