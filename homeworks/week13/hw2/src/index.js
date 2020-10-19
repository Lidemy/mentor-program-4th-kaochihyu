import { getCommentsAPI, addComments } from './api';
import { appendCommentToDom, appendStyle } from './utils';
import { cssTemplate, getLoadMoreButton, getForm } from './template';
import $ from 'jquery';// eslint-disable-line

export function init(options) {// eslint-disable-line
  const { siteKey } = options;
  const { apiUrl } = options;
  let containerElement = null;
  let commentDOM = null;
  let lastId = null;
  const loadMoreClassName = `${siteKey}_load_more`;
  const commentsClassName = `${siteKey}_comments`;
  const formClassName = `${siteKey}_add_comment_form`;
  const commentsSelector = `.${commentsClassName}`;
  const formSelector = `.${formClassName}`;
  containerElement = $(options.containerSelector);
  containerElement.append(getForm(formClassName, commentsClassName));
  appendStyle(cssTemplate);
  commentDOM = $(commentsSelector);
  // 新增留言
  $(formSelector).submit((e) => {
    e.preventDefault();
    const nicknameDOM = $(`${formSelector} input[name=nickname]`);
    const contentDOM = $(`${formSelector} input[name=content]`);
    const newCommentData = {
      'site_key': siteKey,// eslint-disable-line
      'nickname': nicknameDOM.val(),// eslint-disable-line
      'content': contentDOM.val(),// eslint-disable-line
    };
    addComments(apiUrl, siteKey, newCommentData, (data) => {
      if (!data.ok) {
        alert(data.message);// eslint-disable-line no-alert
        return;
      }
      $('input[name=nickname]').val('');
      $('input[name=content]').val('');
      appendCommentToDom(commentDOM, newCommentData, true);
    });
  });
  function getComments() {
    $(`.${loadMoreClassName}`).hide();
    getCommentsAPI(apiUrl, siteKey, lastId, (data) => {
      if (!data.ok) {
        alert(data.message);// eslint-disable-line no-alert
        return;
      }

      // const comments = data.discussions;
      const { discussions: comments } = data;
      for (const comment of comments) {// eslint-disable-line
        appendCommentToDom(commentDOM, comment);
      }

      const length = data.length// eslint-disable-line
      if (length === 0) {
        $(`.${loadMoreClassName}`).hide();
      } else {
        lastId = comments[length - 1].id;
        const loadMoreButtonHTML = getLoadMoreButton(loadMoreClassName);
        $(commentsSelector).append(loadMoreButtonHTML);
      }
    });
  }
  // getComments();
  $(commentsSelector).on('click', `.${loadMoreClassName}`, () => {
    getComments();
  });
}
