const SCHEMA = "http://json-schema.org/draft-07/schema#";

const getValueByType = (type, value) => {
  if (type == "number") {
    return parseFloat(value);
  } else if (type == "integer") {
    return parseInt(value);
  } else if (type == "boolean") {
    return value == "true" ? true : false;
  } else {
    return value;
  }
};

export const json2schema = (data, title) => {
  const sc = { "$schema": SCHEMA };
  if (title !== undefined) {
    sc.title = title;
  }
  sc.type = "object"; // or array?

  let parent = sc;
  const prop = sc.properties = {};
  for (const d of data) {
    const path = d.name.split(".");
    let cur = prop;
    parent = sc;
    for (let i = 0; i < path.length - 1; i++) {
      const p = prop[path[i]];
      if (!p) {
        throw new Error("must set parent");
      } else {
        cur = p.properties || p.items.properties;
        parent = p.properties ? p : p.items;
      }
    }
    const name = path[path.length - 1];
    const type = d.type.replace(/\?/g, "");
    const t = { type };
    if (d.example !== undefined) {
      t.example = getValueByType(type, d.example);
    }
    if (d.description !== undefined) {
      t.description = d.description;
    }
    if (!d.type.endsWith("?")) {
      if (!parent.required) {
        parent.required = [];
      }
      parent.required.push(name);
    }
    if (d.type.startsWith("array")) {
      t.items = { type: "object", properties: {} };
    } else if (d.type.startsWith("object")) {
      t.properties = {};
    }
    cur[name] = t;
  }
  return sc;
};
