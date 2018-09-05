import * as R from 'ramda'

export default class Utils {
  static getUrl = () => window.location.href.split(/[?#]/)[0];
  static replaceNewlines = R.curry( string => string.replace(/[\r\n]+/g, " "));
}
