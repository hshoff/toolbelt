function extend(old, props) {
  var newObj = Object.create(old);

  if (props) {
    for (var key in props) {
      newObj[key] = props[key];
    }
  }

  return newObj;
}


function extend(target, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}
