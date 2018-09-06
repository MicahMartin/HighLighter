import Utils from '../Utils/Utils.js';

export default class TwitterUtils {

  static formatTweet(textContent) {
    // TODO: babel plugin for safe nav operator
    // good chance creator would be null :(
    const twitterCreator = document.querySelector("meta[name='twitter:creator']").getAttribute("content");
    const tweetText = `"${textContent}" — ${twitterCreator}`;

    return tweetText;
  };

  static sendTweet(tweetText) {
    const tweetIntent = `https://twitter.com/intent/tweet?text=${tweetText}&url=${Utils.getUrl()}&via=BostonGlobe`;
    // should this be another generic func or is it overkill at that point?
    // func paradigm makes it feel like everything can be a reuseable generic func
    const tab = window.open(tweetIntent, '_blank');
    tab.focus();    
    return tweetIntent;
  };
}
