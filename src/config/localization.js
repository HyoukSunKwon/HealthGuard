import memoize from 'lodash.memoize'; 
import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import { I18nManager } from 'react-native';

export const translationGetters = {
  'en-US': () => require('../locales/en.json'),
  'ko-KR': () => require('../locales/ko.json'),
  'es-US': () => require('../locales/es.json'),
};

export const ltext = memoize(
  (key, config) =>
    i18n.t(key, config).includes('missing') ? key : i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const i18nInit = () => {
  let localeLanguageTag = Localization.locale;

  let isRTL = Localization.isRTL;
  ltext.cache.clear();

  // update layout direction
  I18nManager.forceRTL(isRTL);
  
  // set i18n-js config
  let supportedLocale;
  // set i18n translation files
  // set default language to english for unsupported translations
  if(translationGetters.hasOwnProperty(localeLanguageTag))
    supportedLocale = translationGetters[localeLanguageTag]()
  else
    supportedLocale = translationGetters["en-US"]()

  // set app language to device language
  i18n.translations = {
    [localeLanguageTag]: supportedLocale,
  };

  // set i18n locale from device settings
  i18n.locale = localeLanguageTag;
};