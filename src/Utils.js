export default class Utils {
  static getUrl = () => window.location.href.split(/[?#]/)[0];

  static getSelected = () => {
    let selectedElem = "";
    if(window.getSelection && window.getSelection().type === 'Range' && !window.getSelection().isCollapsed){
      selectedElem = window.getSelection();
    }
    return selectedElem;
  }
}
