export const onDropItem = (e: any, ElementId: any) => {
  let val = e.dataTransfer.getData("item_display_value");
  const element = <HTMLElement>document.getElementById(ElementId);

  const tag = document.createElement("tag");
  tag.setAttribute("contenteditable", new Boolean(false).toString());
  tag.classList.add("dropped-item-style");
  tag.setAttribute("id", val);
  const node = document.createTextNode(val);

  tag.appendChild(node);
  element.appendChild(tag);
};

const escapeRegex = (string: any) => {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

export const onChangeEditableDivElement = (newString: any, Obj: any) => {
  let mapObj: any = {};
  const a = Obj.map((item: any, index: any) => {
    mapObj[item.displayValue] = item.actualValue;
    return item.displayValue;
  });

  let rex = new RegExp(a.map(escapeRegex).join("|"), "g");
  newString = newString.replace(rex, (match: any) => mapObj[match]);

  return newString;
};
