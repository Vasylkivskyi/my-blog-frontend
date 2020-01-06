import React from 'react';

export const quoteStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null && contentState.getEntity(entityKey).getType() === 'QUOTE'
    );
  }, callback);
};

export const QUOTE = (props) => {
  const { children } = props;
  return (
    <span
      className="quote"
    >
      {children}
    </span>
  );
};

const addQuotePlugin = {
  decorators: [
    {
      strategy: quoteStrategy,
      component: QUOTE,
    },
  ],
};

export default addQuotePlugin;
