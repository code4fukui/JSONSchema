export const schema2dts = (schema, title) => {
  const name = (schema.title || title || "Schema").replace(/\s/g, "_");
  const s2dts = (schema) => {
    if (Array.isArray(schema)) {
      return schema.map(a => a.key).join(",");
    }
    const getType = () => {
      const type = schema.type || "object";
      if (type == "object") {
        const dts = {};
        for (const name in schema.properties) {
          dts[name] = s2dts(schema.properties[name]);
          if (schema.required?.includes(name)) {
            dts[name].required = true;
          }
        }
        return { type: dts };
      } else if (type == "array") {
        const t = s2dts(schema.items);
        t.array = true;
        return t;
      } else if (type == "string") {
        return { type: "string" };
      } else if (type == "boolean") {
        return { type: "boolean" };
      } else if (type == "integer") {
        return { type: "number" }; // "integer";
      } else if (type == "boolean,string") {
        return { type: "boolean | string" };
      } else if (type == "null,string" || type == "string,null") {
        return { type: "string | null" };
      } else if (type == "null,integer" || type == "integer,null") {
        return { type: "string | number" }; // "string | integer";
      } else {
        console.log(schema)
        throw new Error(type);
      }
    };
    const res = getType();
    res.description = schema.description;
    res.example = schema.example;
    return res;
  };
  
  const dts = s2dts(schema);
  //console.log(JSON.stringify(dts, null, 2));

  const toStringDTS = (name, dts) => {
    const res = [];
    res.push("export interface " + name + " {" + (dts.description ? " // " + dts.description : ""));
    const tos = (obj, indent) => {
      for (const name in obj) {
        const t = obj[name];
        const ar = t.array ? "[]" : "";
        const com = [
          t.description || t.example ? " // " : "",
          t.description || "",
          t.example ? " (" + JSON.stringify(t.example) + ")" : "",
        ].join("");
        if (typeof t.type == "object") {
          res.push(indent + name + (t.required ? "" : "?") + ": {" + com);
          tos(t.type, indent + "  ");
          res.push(indent + "}" + ar + ";");
        } else {
          res.push(indent + name + (t.required ? "" : "?") + ": " + t.type + ar + ";" + com);
        }
      }
    };
    tos(dts.type, "  ");
    res.push("}");
    return res.join("\n");
  };
  return toStringDTS(name, dts);
};
