const STR_KEY = "my_app_storage_key";
/**
 * Veriyi Kaydetme Fonksiyonu
 * @param {Array} data - seesawObjects dizimiz
 */

export function saveData(data) {
  const strData = JSON.stringify(data); // Diziyi JSON stringine dönüştür
  localStorage.setItem(STR_KEY, strData); // Veriyi localStorage'a kaydet
}
/**
 * Veriyi Yükleme Fonksiyonu
 * @returns {Array} - Kaydedilmiş dizi veya boş dizi
 */

export function loadData() {
  const strData = localStorage.getItem(STR_KEY); // localStorage'dan veriyi al
  if (!strData) return []; // Veri yoksa boş dizi döndür
  return JSON.parse(strData); // JSON stringini diziye dönüştür ve döndür
}
