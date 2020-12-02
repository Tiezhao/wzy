const promiseTimeout = (val, time = '200') =>
  new Promise((ok, err) => {
    setTimeout(() => ok(val), time);
  });

export function get(url) {
  return fetch(url, {
    method: 'get',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  }).then((result) => promiseTimeout(result.json()));
}

export function post(url, params) {
  return fetch(url, {
    method: 'post',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(params),
  }).then((result) => promiseTimeout(result.json()));
}

export default { get, post };
