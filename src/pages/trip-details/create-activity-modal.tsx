import { Calendar, Tag, X } from "lucide-react";
import { Modal } from "../../components/modal";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <Modal.Root onClose={closeCreateActivityModal}>
      <Modal.Content>
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400">
            Todos os convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-4 text-zinc-400 ml-2" />
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 w-20 outline-none flex-1"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex flex-1 items-center gap-2">
            <Calendar className="size-4 text-zinc-400 ml-2" />
            <input
              type="datetime-local"
              name="occurs-at"
              placeholder="Data e horário da viagem"
              className="bg-transparent text-lg placeholder-zinc-400 w-20 outline-none flex-1"
            />
          </div>

          <Button type="submit" size="full">
            Salvar atividade
          </Button>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}
