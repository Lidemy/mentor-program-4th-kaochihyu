import $ from 'jquery';// eslint-disable-line

export function getCommentsAPI(apiUrl, siteKey, before, cb) {
  let url = `${apiUrl}/api_discussions_example.php?site_key=${siteKey}`;
  if (before) {
    url += `&before${before}`;
  }
  $.ajax({
    url,
  }).done((data) => {
    cb(data);
  });
}

export function addComments(apiUrl, siteKey, data, cb) {
  $.ajax({
    type: 'POST',
    url: `${apiUrl}/api_add_discussions.php`,
    data,
  }).done((res) => {
    cb(res);
  });
}
