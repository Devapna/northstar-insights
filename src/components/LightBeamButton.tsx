import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import "./light-beam-button.css";

type BeamStyle = CSSProperties & {
  "--beam-a": string;
  "--beam-b": string;
  "--beam-c": string;
};

export interface LightBeamButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  gradientColors?: [string, string, string];
}

export function LightBeamButton({
  children,
  className = "",
  gradientColors = ["#a78bfa", "#55d6e8", "#a78bfa"],
  type = "button",
  style: customStyle,
  ...props
}: LightBeamButtonProps) {
  const style: BeamStyle = {
    ...customStyle,
    "--beam-a": gradientColors[0],
    "--beam-b": gradientColors[1],
    "--beam-c": gradientColors[2],
  };

  return (
    <button
      className={`light-beam-button ${className}`.trim()}
      type={type}
      style={style}
      {...props}
    >
      <span className="light-beam-button__content">{children}</span>
    </button>
  );
}

export default LightBeamButton;
