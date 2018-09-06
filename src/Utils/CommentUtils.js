export default class CommentUtils {

  static formatComment(selection) {
    console.log("formatting cmment");
    return selection;
  };

  static openComments(comment) {
    const commentContent = document.getElementById('comments-content');
    const commentToggleBar = document.getElementById('comments-toggle-bar');
    const addComment = document.getElementById('add-comment-form');
    const newComment = document.getElementById('new-comment');

    try {
      commentContent.classList.add("ugc-comments--active");
      commentToggleBar.innerHTML = commentToggleBar.innerHTML.replace('Show', 'Hide');
      newComment.value += comment;
      addComment.scrollIntoView();
    } catch (e) {
      console.error("The error baby: ", e);
    } 

    return comment;
  };
};
