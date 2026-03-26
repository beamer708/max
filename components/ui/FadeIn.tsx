import { CSSProperties, ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
};

/**
 * Wraps children with the `reveal` CSS class.
 * ScrollAnimatorInit sets up an IntersectionObserver that adds `visible`
 * when the element enters the viewport, triggering the fade-up animation.
 */
export function FadeIn({ children, className, delay = 0, style }: FadeInProps) {
  return (
    <div
      className={`reveal${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}s`, ...style } : style}
    >
      {children}
    </div>
  );
}
