import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface DropdownProps {
  placeholder?: string;
  options: string[];
  rootClassName?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  defaultSelected?: string | null;
  onSelect?: (v: string) => void;
}

const Dropdown = ({
  placeholder,
  options,
  rootClassName,
  buttonClassName,
  dropdownClassName,
  optionClassName,
  defaultSelected,
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null | undefined>(
    defaultSelected
  );

  function handleSelect(option: string) {
    setSelected(option);
    setIsOpen(false);
    onSelect && onSelect(option);
  }

  return (
    <div
      className={twMerge(
        "relative w-full max-w-[350px] md:max-w-[470px] xl:max-w-[573px] h-[70px]",
        rootClassName
      )}
    >
      <button
        type="button"
        className={twMerge(
          "w-full h-full rounded-lg border border-custom-dark-gray bg-custom-dark py-4 px-3 text-zinc-300 flex items-center gap-4",
          buttonClassName
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected ?? placeholder}

        <div className="flex items-center gap-2 ml-auto">
          {selected && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(null);
              }}
              className="rounded-full p-1 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
            >
              <X />
            </button>
          )}
          <ChevronDown />
        </div>
      </button>

      {isOpen && (
        <div
          className={twMerge(
            "absolute top-[75px] w-full p-2 text-zinc-300 rounded-lg border border-custom-dark-gray bg-custom-dark flex flex-col gap-4",
            dropdownClassName
          )}
        >
          {options.map((option, key) => (
            <button
              key={key}
              onClick={() => handleSelect(option)}
              className={twMerge(
                "w-full p-2 hover:bg-zinc-800 rounded-sm h-12",
                optionClassName
              )}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
