export function appendStyle(cssTemplate) {
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.appendChild(document.createTextNode(cssTemplate));
  document.head.appendChild(styleElement);// eslint-disable-line example/rule-name
}
export function encodeHTML(s) {
  return s.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}
export function appendCommentToDom(container, comment, isPrepend) {
  const html = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${encodeHTML(comment.nickname)}</h5>
        <p class="card-text">${encodeHTML(comment.content)}</p>
      </div>
    </div>
  `;
  // 針對新增留言寫的
  if (isPrepend) {
    container.prepend(html);
  } else {
    container.append(html);
  }
}
