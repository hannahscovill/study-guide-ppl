import React from 'react';

type TooltipInlineTextProps = {
  text: string;
  tooltip: string;
  style?: React.CSSProperties;
};

const TooltipInlineText = ({ text, tooltip, style }: TooltipInlineTextProps) => {
  return (
    <span
      style={{ textDecoration: 'dotted underline', cursor: 'help', ...style }}
      title={tooltip}
    >
      {text}
    </span>
  );
};

export default TooltipInlineText;