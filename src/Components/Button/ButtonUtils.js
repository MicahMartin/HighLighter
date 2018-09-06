import Utils from '../../Utils.js';
import '../../Styles/Button/Button.css';

export default class ButtonUtils {

  static formatTweet(textContent) {
    // TODO: babel plugin for safe nav operator
    // good chance creator would be null
    const twitterCreator = document.querySelector("meta[name='twitter:creator']").getAttribute("content");
    const tweetText = `"${textContent}" — ${twitterCreator}`;

    return tweetText;
  };

  static sendTweet(tweetText) {
    const tweetIntent = `https://twitter.com/intent/tweet?text=${tweetText}&url=${Utils.getUrl()}&via=BostonGlobe`;
    const tab = window.open(tweetIntent, '_blank');
    tab.focus();    
    // not sure what to return here?
    return tweetIntent;
  };

  static shareFacebook(selection) {
    console.log("sharing ", selection);
    return selection;
  };

  static formatComment(selection) {
    
    console.log("formatting cmment");
    return `<i className="commentQuote">${selection}</i>`;
  };

  static openComments(comment) {
    
    alert(comment);
    return comment;
  };

  static log(selection) { 
    console.log({selection});
    return selection;
  };
}
