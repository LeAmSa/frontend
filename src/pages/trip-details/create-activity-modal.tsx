import { Calendar, Tag } from "lucide-react";
import { Modal } from "../../components/modal";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../../components/loading";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  async function createActivity(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);

    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const occurs_at = data.get("occurs-at")?.toString();

    await api.post(`/trips/${tripId}/activities`, { title, occurs_at });

    setIsLoading(false);

    window.location.reload();

    closeCreateActivityModal();
  }

  return (
    <Modal.Root onClose={closeCreateActivityModal}>
      <Modal.Content>
        <Modal.Title text="Cadastrar atividade" />
        <p className="text-zinc-400">
          Todos os convidados podem visualizar as atividades.
        </p>

        <form onSubmit={createActivity} className="space-y-3">
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
            {isLoading ? <Loading /> : "Salvar Atividade"}
          </Button>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}
