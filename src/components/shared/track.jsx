import React from 'react';

const Track = ({ subtitles }) => {

  if (subtitles.length == 0 ) {
    return null
  }

  console.log(subtitles)


  return subtitles.map((subtitle) => (
    <track data-testid="track" kind="captions" key={subtitle.id} src={subtitle.url} srcLang={subtitle.language} label={subtitle.label} />
  ))
};

export default Track;
