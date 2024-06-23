interface TextProps {
  children: React.ReactNode;
  variant:
    | "NavBarButtons"
    | "PremiumBannerHeader"
    | "SSemiBold"
    | "MSemiBold"
    | "header"
    | "commentCount";
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, variant, as = "p", className = "" }) => {
  const baseClass = "Raleway";
  const variantClasses = {
    NavBarButtons: "text-base font-semibold",
    PremiumBannerHeader: "text-6xl font-bold",
    SSemiBold: "text-2xl font-semibold",
    MSemiBold: "text-4xl font-semibold",
    header: "text-4xl text-[56px] leading-[42px]",
    commentCount: "text-sm",
  };

  const textClass: string = `${baseClass} ${variantClasses[variant] || ""} ${className}`;
  const Element = as as keyof JSX.IntrinsicElements;

  return <Element className={textClass}>{children}</Element>;
};

