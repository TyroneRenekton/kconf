export default class KunUtils {

  static beautySub(str, len) {
    if (!str || !len) {
      return "";
    }
    const reg = /[\u4e00-\u9fa5]/g,
      slice = str.substr(0, len),
      chineseCharNum = (~~(slice.match(reg) && slice.match(reg).length)),
      realen = slice.length * 2 - chineseCharNum;
    return str.substr(0, realen) + (realen < str.length ? '...' : '');
  }
}
