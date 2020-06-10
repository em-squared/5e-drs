export function encode (o) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(o))))
}

export function decode (s) {
  return JSON.parse(decodeURIComponent(escape(atob(s))))
}
