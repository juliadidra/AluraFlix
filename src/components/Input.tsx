import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        name={props.id}
        className={twMerge(
          "w-full max-w-[350px] md:max-w-[470px] xl:max-w-[573px] h-[60px] rounded-lg border-2 border-blue-800 bg-custom-dark-blue px-4",
          className
        )}
        {...props}
      />
    );
  }
);

export default Input;
