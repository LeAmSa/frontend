import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const newEmail = data.get("email")?.toString();

    if (!newEmail) {
      return;
    }

    if (emailsToInvite.includes(newEmail)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, newEmail]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvite(emailToRemove: string) {
    setEmailsToInvite(
      emailsToInvite.filter((email) => email !== emailToRemove)
    );
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function handleCreateTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate("/trips/123");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-5">
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Para onde você vai?"
                disabled={isGuestsInputOpen}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando?"
                disabled={isGuestsInputOpen}
                className="bg-transparent text-lg placeholder-zinc-400 w-20 outline-none"
              />
            </div>
            <div className="w-px h-6 bg-zinc-800" />
            {isGuestsInputOpen ? (
              <button
                onClick={() => setIsGuestsInputOpen(false)}
                className="flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium hover:bg-zinc-700 transition-colors"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={() => setIsGuestsInputOpen(true)}
                className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400 transition-colors"
              >
                Continuar
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            )}
          </div>
          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-5 animate-showDown">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex flex-1 items-center gap-2"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                  <span className="text-zinc-400 text-lg">
                    {emailsToInvite.length} pessoa(s) convidada(s)
                  </span>
                ) : (
                  <span className="text-zinc-400 text-lg">
                    Quem estará na viagem?
                  </span>
                )}
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <button
                onClick={openConfirmTripModal}
                className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400 transition-colors"
              >
                Confirmar viagem
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            </div>
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          onCreateTrip={handleCreateTrip}
        />
      )}
    </div>
  );
}
