import Vue from "vue"
import VueI18n from "vue-i18n"
import pt_br from './pt_br/'
import en_us from './en_us/'


Vue.use(VueI18n);

const messages = {
  en: en_us.messages,
  pt: pt_br.messages,
};

const numberFormats = {
  en: en_us.numberFormats,
  pt: pt_br.numberFormats,
};

export default new VueI18n({
  locale: 'pt',
  messages,
  numberFormats
});