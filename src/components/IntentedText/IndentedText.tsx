import { JSX } from "react";

type IndentedTextProps = {
  children: React.ReactNode;
  paddingPx?: number | string; // pixels if number, or any valid CSS length if string
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
};

const LeftPaddedText = ({
  children,
  paddingPx = 30,
  as: Component = "p",
  className,
  style,
}: IndentedTextProps) => {
  const textIndent = typeof paddingPx === "number" ? `${paddingPx}px` : paddingPx;
  return (
    <Component className={className} style={{ paddingLeft: textIndent, ...style }}>
      {children}
    </Component>
  );
};

export default LeftPaddedText;