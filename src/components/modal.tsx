import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ModalRootProps extends ComponentProps<"div"> {
  children: ReactNode;
  onClose: () => void;
}

interface ModalContentProps extends ComponentProps<"div"> {
  children: ReactNode;
}

interface ModalTitleProps extends ComponentProps<"h2"> {
  text: string;
}

function ModalRoot({ children, onClose, ...props }: ModalRootProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      {...props}
    >
      {children}
    </div>
  );
}

function ModalContent({ children, ...props }: ModalContentProps) {
  return (
    <div
      className={twMerge(
        "w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5",
        props.className
      )}
    >
      {children}
    </div>
  );
}

function ModalTitle({ text, ...props }: ModalTitleProps) {
  return (
    <h2 className="text-left text-lg font-semibold" {...props}>
      {text}
    </h2>
  );
}

export const Modal = {
  Root: ModalRoot,
  Content: ModalContent,
  Title: ModalTitle,
};
