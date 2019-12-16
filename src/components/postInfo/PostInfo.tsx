import React from 'react';

interface PostInfoInterface {
  text: string;
  date: string;
}

const PostInfo: React.FC<PostInfoInterface> = ({ text, date }) => {
  const wordsLength = text.split(' ').length;
  const readTime = wordsLength < 200
    ? 'less than 1 min read'
    : `${Math.ceil(wordsLength / 200)} min read`;

  const renderCups = () => {
    const cupsNum = Math.floor(wordsLength / 200 / 5);
    const cups = [];
    for (let i = 0; i <= cupsNum; i += 1) {
      cups.push(
        <span key={i} role="img" aria-label="coffee">
          ☕️
        </span>,
      );
    }
    return cups;
  };

  return (
    <time className="post-list-item__info">
      <span role="img" aria-label="coffee">
        ⏳
        {' '}
      </span>
      {date}
      {' '}
•
      {renderCups()}
      {' '}
      {readTime}
    </time>
  );
};

export default PostInfo;
