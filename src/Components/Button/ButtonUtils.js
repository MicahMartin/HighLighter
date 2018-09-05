import Utils from '../../Utils.js';

export default class ButtonUtils {

  static formatSelection = selection => { 
    let selectionText;
    try {
      selectionText = selection.textContent;
    } catch (e) {
      console.error(e);
    }
    return selectionText;
  };

  static formatTweet = textContent => {
    const twitterCreator = document.querySelector("meta[name='twitter:creator']")?.getAttribute("content");

    const tweetText = `"${textContent}" — ${twitterCreator}`;

    return tweetText;
  };

  static log(selection) { 
    console.log({selection});
    return selection;
  };

  static sendTweet = tweetText => {
    const tweetIntent = `https://twitter.com/intent/tweet?text=${tweetText}&url=${Utils.getUrl()}&via=BostonGlobe`;
    const tab = window.open(tweetIntent, '_blank');
    tab.focus();    
    // not sure what to return here?
    return tweetIntent;
  };

  static facebookFn(selection) {
    
    return selection;
  };

  static quoteFn(selection) {
    
  };
}
