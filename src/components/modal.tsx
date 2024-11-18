import { ReactNode } from "react";

interface ModalRootProps {
  children: ReactNode;
  onClose: () => void;
}

interface ModalContentProps {
  children: ReactNode;
}

function ModalRoot({ children, onClose }: ModalRootProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {children}
    </div>
  );
}

function ModalContent({ children }: ModalContentProps) {
  return (
    <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
      {children}
    </div>
  );
}

export const Modal = {
  Root: ModalRoot,
  Content: ModalContent,
};
