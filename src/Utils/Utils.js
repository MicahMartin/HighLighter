import * as R from 'ramda'

export default class Utils {

  static log = (...args) => (data) => {
    console.log.apply(null, args.concat([data]));
    return data;
  };

  static tagWrapper = R.curry((tag) => (attributes) => (text) => {
    return `<${tag} ${attributes}>${text}</${tag}>`;
  });

  static keyEqValFormat = (obj, seperator = ' ') => {
    const stringBuilder = [];

    for(let key in obj){
      stringBuilder.push(`${key}="${obj[key]}"`);
    }

    const result = stringBuilder.join(seperator);

    return result;
  };

  static replaceNewlines = R.curry( string => string.replace(/[\r\n]+/g, ' '));
  static getUrl = () => window.location.href.split(/[?#]/)[0];


}
