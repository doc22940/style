import CodeRenderer from 'Components/common/markdown/CodeRenderer';
import Content from './content.md';
import ImageRenderer from 'Components/common/markdown/ImageRenderer';
import ParagraphRenderer from 'Components/common/markdown/ParagraphRenderer';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const Linters = (props) => (
  <div className={classnames(component, 'markdown-default')}>
    <Content
      escapeHtml={false}
      linkTarget='_blank'
      renderers={{
        code: CodeRenderer,
        image: ImageRenderer,
        paragraph: ParagraphRenderer,
      }}
    />
  </div>
);

export default Linters;
