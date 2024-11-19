import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const buttonVariants = tv({
  base: "flex items-center gap-2 rounded-lg px-5 py-2 font-medium transition-colors",
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
      secondary: "bg-zinc-800 text-zinc-200  hover:bg-zinc-700",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants()} {...props}>
      {children}
    </button>
  );
}
