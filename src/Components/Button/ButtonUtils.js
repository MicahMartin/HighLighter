import * as Ramda from 'ramda'
import Utils from '../../Utils.js';

export default class ButtonUtils {

  static formatSelection(formatFn, selection) { 
    // Should be a Selection obj at this point
    const selectionText = selection.toString();
    return formatFn(selectionText);
  };

  static formatter = Ramda.curry(ButtonUtils.formatSelection);

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

  static facebookFn(selection) {
    
    return selection;
  };

  static quoteFn(selection) {
    
    return selection;
  };

  static log(selection) { 
    console.log({selection});
    return selection;
  };
}
