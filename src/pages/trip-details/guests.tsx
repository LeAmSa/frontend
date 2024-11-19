import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div className="space-y-6 ">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 overflow-hidden">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span
              title="jessica.white@yahoo.com"
              className="block text-sm text-zinc-400 truncate"
            >
              jessica.white@yahoo.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium hover:bg-zinc-700 transition-colors">
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  );
}
