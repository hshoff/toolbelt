function extend(old, props) {
  var newObj = Object.create(old);

  if (props) {
    for (var key in props) {
      newObj[key] = props[key];
    }
  }

  return newObj;
}
