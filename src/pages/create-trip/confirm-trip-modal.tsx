import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Modal } from "../../components/modal";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  onCreateTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  onCreateTrip,
}: ConfirmTripModalProps) {
  return (
    <Modal.Root onClose={closeConfirmTripModal}>
      <Modal.Content>
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button type="button" onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">Florianópolis</span>,
            Brasil nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={onCreateTrip} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-4 text-zinc-400 ml-2" />
            <input
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 w-20 outline-none flex-1"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="size-4 text-zinc-400 ml-2" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 w-20 outline-none flex-1"
            />
          </div>

          <Button type="submit" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}
