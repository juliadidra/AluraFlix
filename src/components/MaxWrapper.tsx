import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface MaxWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWrapper = ({ className, children }: MaxWrapperProps) => {
  return (
    <div className={twMerge("w-full max-w-[1440px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default MaxWrapper;
