import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';

type ClipboardShortTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

const ClipboardShortText = ({ text, className, style }: ClipboardShortTextProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { colorMode } = useColorMode();
  const { siteConfig } = useDocusaurusContext();

  // Get the appropriate text color based on theme
  const textColor = colorMode === 'dark' ? '#fff' : '#000';


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        position: 'relative',
        ...style
      }}
    >
      <span>{text}</span>
      <button
        onClick={handleCopy}
        style={{
          background: 'none',
          border: 'none',
          padding: '4px',
          cursor: 'pointer',
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center'
        }}
        aria-label="Copy to clipboard"
      >
        <img 
          src="/copy-solid-full.svg" 
          alt="Copy"
          style={{
            width: '14px',
            height: '14px',
            filter: `invert(${colorMode === 'dark' ? 1 : 0})` // Invert SVG color based on theme
          }}
        />
        {showTooltip && (
          <div
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#333',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              whiteSpace: 'nowrap'
            }}
          >
            Copied!
          </div>
        )}
      </button>
    </div>
  );
};

export default ClipboardShortText;