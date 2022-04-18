import React, { FC } from 'react';
import { I18nextProvider } from 'react-i18next';

import Header from './components/Header';
import Content from './components/Content';
import { useTranslations } from './translations/i18n';

import './Wizard.scss';

const Wizard: FC = () => {
  const i18n = useTranslations();
  return (
    <I18nextProvider i18n={i18n}>
      <div className="wizard">
        <div className="wizard-content">
          <Header />
          <Content />
        </div>
      </div>
    </I18nextProvider>
  );
};

export default Wizard;
