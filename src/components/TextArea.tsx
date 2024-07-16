import { TextareaHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={twMerge(
        "w-full max-w-[350px] md:max-w-[470px] xl:max-w-[573px] h-[112px] rounded-lg border-2 border-blue-800 bg-custom-dark-blue p-2",
        className
      )}
      {...props}
    />
  );
})

export default TextArea;
