import React from 'react';
import ClipboardShortText from '../ClipboardShortText/ClipboardShortText';

type ZoomLinkProps = {
  url: string;
  passcode: string;
};

const ZoomLink = ({ url, passcode }: ZoomLinkProps) => {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <a href={url} target='blank'>Zoom Recording</a>
      <span>Passcode: <ClipboardShortText text={passcode} /></span>
    </div>
  );
};

export default ZoomLink;