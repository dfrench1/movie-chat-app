import React from "react";
const languageList = ['en','fr','it','es','de'];

const Language = ({ saveLang, lang, onLangChange }) => {
  return (
    <div>
      <label htmlFor="select">Language</label>
      <select
        value={lang} 
        id="select"
        onChange={e => {
          saveLang(e.target.value);
          onLangChange(e);
        }}
      >
      {languageList.map(item => (
        <option 
          key={item}
        >
          {item}
        </option>
      ))}
      </select>
    </div>
  );
};

Language.propTypes = {};

export default Language;
