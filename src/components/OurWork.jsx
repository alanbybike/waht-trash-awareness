import React from 'react';
import Main from './Main';
import { useTranslation } from 'react-i18next';
function OurWork() {
  const { t } = useTranslation();
  return (
    <Main>
      <h1 className="text-2xl font-bold mb-4"> {t('our_work')}</h1>
      <p>
        {t('our_work_description')}
      </p>
    </Main>
  );
}

export default OurWork;