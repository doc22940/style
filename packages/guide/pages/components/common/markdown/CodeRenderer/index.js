import 'prismjs/themes/prism-dark.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Refractor from 'react-refractor';
import bash from 'refractor/lang/bash';
import { component } from './styles.scss';
import copy from 'copy-to-clipboard';
import ejs from 'refractor/lang/ejs';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import js from 'refractor/lang/javascript';
import markdown from 'refractor/lang/markdown';
import python from 'refractor/lang/python';
import r from 'refractor/lang/r';
import scss from 'refractor/lang/scss';
import sql from 'refractor/lang/sql';

Refractor.registerLanguage(js);
Refractor.registerLanguage(bash);
Refractor.registerLanguage(python);
Refractor.registerLanguage(scss);
Refractor.registerLanguage(sql);
Refractor.registerLanguage(r);
Refractor.registerLanguage(markdown);
Refractor.registerLanguage(ejs);

const getLang = (lang) => {
  switch (lang) {
    case 'javascript':
      return 'js';
    default:
      return lang;
  }
};

const parseCode = (value) => {
  const matches = value.match(/^::(\[[\d]*[\d,]*\])\n/);
  if (!matches) return { code: value, markers: [] };
  console.log('VALUE', value);
  console.log('CODE', value.split('\n').slice(1).join('\n').trim());
  return {
    code: value.split('\n').slice(1).join('\n').trim(),
    markers: JSON.parse(matches[1]),
  };
};

class CodeBlock extends React.Component {
  render() {
    const { value, language } = this.props;

    const { code, markers } = parseCode(value);

    return (
      <div className={component}>
        <Refractor
          language={getLang(language ? language.toLowerCase() : 'bash')}
          value={code}
          markers={markers}
        />
        <button
          className='copy'
          onClick={() => copy(code)}
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    );
  }
}

export default CodeBlock;
