function get(uri) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.withCredentials = false;
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200 || xhr.status == 304) {
          var json = JSON.parse(xhr.responseText);
          resolve(json);
        } else {
          reject(json);
        }
      }
    };
    xhr.send();
  });
}

function getParam(key) {
  const query = window.location.search.substring(1);
  if (!query.trim()) {
    return {};
  }
  const keyValuePair = query.split("&");
  const params = {};
  for (let index in keyValuePair) {
    const keyValue = keyValuePair[index];
    if (keyValue.split("=").length != 2) {
      continue;
    }
    params[keyValue.split("=")[0]] = keyValue.split("=")[1];
  }
  return params[key];
}
