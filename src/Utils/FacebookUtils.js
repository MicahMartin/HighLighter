import Utils from '../Utils/Utils.js';

export default class FacebookUtils {

  static shareFacebook(selection) {
    window.FB.ui({
      method: 'share',
      mobile_iframe: true,
      href: `${Utils.getUrl()}`,
      quote: selection,
    }, this.log);
    return selection;
  };
}
