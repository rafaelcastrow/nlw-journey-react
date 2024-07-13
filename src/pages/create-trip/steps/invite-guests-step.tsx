import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
    openGuestsModal: () => void
    openConfirmTripModal: () => void
    emailsToInvite: string[]

}

export function InviteGuestsStep({
    openGuestsModal,
    openConfirmTripModal,
    emailsToInvite
}: InviteGuestsStepProps) { {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

        <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
          <UserRoundPlus className='size-5 text-zinc-400' />
          {emailsToInvite.length > 0 ? (
            <span className='text-lg text-zinc-100'>{emailsToInvite.length} pessoas(s) convidados</span>
          ) : (
            <span className='text-lg text-zinc-400'>Convidar amigos</span>
          )}
        </button>

        <div className='w-px h-6 bg-zinc-800' />

        <Button onClick={openConfirmTripModal} variant="primary">
          Confirmar Viagem
          <ArrowRight className='size-5' />
        </Button>

      </div>
    )
}}