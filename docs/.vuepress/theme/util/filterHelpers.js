export function setUrlParams (urlParam, list) {
  var params = ""
  for (var i = 0; i < list.length; i++) {
    if (params !== "") {
      params = params + ","
    }
    params = params + list[i]
  }
  if (list.length == 0) {
    params = ''
  }
  history.replaceState(null, null, setUrlParameter(window.location.href, urlParam, params))
}

export function setUrlParameter (url, key, value) {
    var key = encodeURIComponent(key),
        value = encodeURIComponent(value);

    var baseUrl = url.split('?')[0],
        newParam = key + '=' + value,
        params = '?' + newParam;

    let urlQueryString = '';
    if (url.split('?')[1] == undefined){ // if there are no query strings, make urlQueryString empty
    } else {
        urlQueryString = '?' + url.split('?')[1];
    }

    // If the "search" string exists, then build params from it
    if (urlQueryString) {
        var updateRegex = new RegExp('([\?&])' + key + '[^&]*');
        var removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');

        if (typeof value === 'undefined' || value === null || value === "") { // Remove param if value is empty
          params = urlQueryString.replace(removeRegex, "$1");
          params = params.replace(/[&;]$/, "");

        } else if (urlQueryString.match(updateRegex) !== null) { // If param exists already, update it
          params = urlQueryString.replace(updateRegex, "$1" + newParam);

        } else if (urlQueryString=="") { // If there are no query strings
          params = '?' + newParam;
        } else { // Otherwise, add it to end of query string
          params = urlQueryString + '&' + newParam;
        }
    }

    // no parameter was set so we don't need the question mark
    params = params === '?' ? '' : params;

    return baseUrl + params;
}

export function getUrlParameter (url, parameter) {
  parameter = parameter.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?|&]' + parameter + '=([^&#]*)');
  var results = regex.exec('?' + url.split('?')[1]);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export function setListMutation (param, store, mutation) {
  if (param.length > 0 && param[0] !== "" && param[0] !== "null") {
    store.commit(mutation, param)
  }
}

export function setBooleanMutation (param, store, mutation) {
  if (param !== undefined && param !== '') {
    let value = false
    if (param == 'true') {
      value = true
    }
    store.commit(mutation, value)
  }
}

export function sortByString (a, b, direction = 'ASC') {
  const titleA = a.toUpperCase()
  const titleB = b.toUpperCase()
  let comparison = 0
  if (titleA > titleB) {
    comparison = 1
  } else if (titleA < titleB) {
    comparison = -1
  }
  if (direction == 'ASC') {
    return comparison
  } else {
    return comparison * -1
  }
}
