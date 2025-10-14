import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

type ClipboardShortTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

const ClipboardShortText = ({ text, className, style }: ClipboardShortTextProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { colorMode } = useColorMode();


  const handleCopy = async (e?: React.TouchEvent | React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      // Fallback method for better mobile support
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers/devices
        // Claude wrote this and I don't understand it but 
        // the button doesn't work on touchscreens if it's not here
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
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
        onTouchStart={handleCopy}
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