import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import intervalPlural from 'i18next-intervalplural-postprocessor'
import translationEN from './locales/en/translatrion.json'
import translationZH from './locales/zh/translatrion.json'

const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
}

i18n.use(initReactI18next).use(intervalPlural).init({
  resources,
  lng: 'zh',
  fallbackLng: 'en',
})
