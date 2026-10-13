import { cn } from "@workspace/ui/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  wrapperClassName?: string;
}

export function Select({ label, wrapperClassName, className, children, ...rest }: SelectProps) {
  return (
    <div className={cn("flex flex-col gap-1", wrapperClassName)}>
      {label && <label className="text-sm font-medium text-ink">{label}</label>}
      <select
        className={cn(
          "appearance-none bg-paper border border-stone-300 rounded-[5px] px-3 py-2 pr-8 text-sm text-ink",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-green",
          className
        )}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}
