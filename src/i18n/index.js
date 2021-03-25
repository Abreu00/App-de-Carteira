import Vue from "vue"
import VueI18n from "vue-i18n"
import pt_br from './pt_br'
import en_us from './en_us'


Vue.use(VueI18n);

const messages = {
    en: en_us,
    pt: pt_br
};
console.log('iosaio');

export default new VueI18n({
    locale: 'pt',
    messages,
});