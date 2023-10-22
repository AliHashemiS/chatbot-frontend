import React from 'react';
import './LanguageSwitcher.css'

function LanguageSwitcher({ onChangeLanguage, currentLanguage }) {
    const handleLanguageChange = (newLanguage) => {
        onChangeLanguage(newLanguage);
    }

    return (
        <div className="language-switcher">
            <span className='language-title'>Language</span>
            <button
                onClick={() => handleLanguageChange('English')}
                className="button-english"
            >
                English
            </button>
            <button
                onClick={() => handleLanguageChange('Spanish')}
                className="button-spanish"
            >
                Spanish
            </button>
            <span className='language-title'>{currentLanguage}</span>
        </div>
    );
}

export default LanguageSwitcher;