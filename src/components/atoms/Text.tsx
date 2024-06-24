interface TextProps {
  children: React.ReactNode;
  variant:
    | "NavBarButtons"
    | "PremiumBannerHeader"
    | "Highlights"
    | "SRegular";
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, variant, as = "p", className = "" }) => {
  const baseClass = "Raleway";
  const variantClasses = {
    NavBarButtons: "text-base font-semibold",
    PremiumBannerHeader: "text-6xl font-bold",
    Highlights: "text-2xl font-bold",
    SRegular: "text-xs"
  };

  const textClass: string = `${baseClass} ${variantClasses[variant] || ""} ${className}`;
  const Element = as as keyof JSX.IntrinsicElements;

  return <Element className={textClass}>{children}</Element>;
};

