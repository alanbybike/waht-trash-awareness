import React from 'react';
import Main from './Main';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import aboutText from '../locales/about.md';

function About() {
    const { t } = useTranslation();
    return (
      <Main>
        <h1 className="text-2xl font-bold mb-4"> {t('about')}</h1>
        <div className="prose prose-lg">
            <ReactMarkdown children={aboutText} />
        </div>
      </Main>
    );
  }

  export default About;