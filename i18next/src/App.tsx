import React, { useState } from 'react'
import logo from './logo.svg'
import './App.scss'

import { useTranslation, Trans } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()
  const [target, setTarget] = useState<string>('en')
  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng)
    setTarget(lng)
  }
  const messages = ['message one', 'message two']
  const count = messages.length
  const name: string = 'Kai'
  return (
    <div className="app">
      <button
        className={target == 'en' ? 'btn btn-danger' : 'btn btn-secondary'}
        value={'en'}
        onClick={(e) => {
          changeLng(e.currentTarget.value)
        }}
      >
        EN
      </button>
      <button
        className={target == 'zh' ? 'btn btn-danger' : 'btn btn-secondary'}
        value={'zh'}
        onClick={(e) => {
          changeLng(e.currentTarget.value)
        }}
      >
        ZH
      </button>
      {/* <p>
        <Trans i18nKey="userMessagesUnread" count={count}>
          Hello <strong title={t('nameTitle')}>{{ name }}</strong>, you have
          {{ count }} unread message. Go to messages.
        </Trans>
      </p> */}
      <p>{t('test', { name })}</p>
      <p>{t('keyWithCount', { count: 2 })}</p>
      {/* <p>{t('key1_interval', { postProcess: 'interval', count: 1 })}</p>
      <p>{t('key1_interval', { postProcess: 'interval', count: 100 })}</p> */}
    </div>
  )
}

export default App
