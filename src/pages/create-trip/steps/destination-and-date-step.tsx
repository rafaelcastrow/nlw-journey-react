import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    openGuestsInput: () => void
    closeGuestsInput: () => void

}

export function DestinationAndDateStep({
    isGuestsInputOpen,
    openGuestsInput,
    closeGuestsInput
} : DestinationAndDateStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

        <div className='flex items-center gap-2 flex-1'>
        <MapPin className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
        </div>

        <div className='flex items-center gap-2'>
        <Calendar className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"/>
        </div>

        <div className='w-px h-6 bg-zinc-800' />

        {isGuestsInputOpen ? (
            <Button onClick={closeGuestsInput} variant="secondary">
                <Settings2 className='size-5 text-zinc-400' />
                Alterar local/data
            </Button>
        ) : ( 
            <Button onClick={openGuestsInput} variant="primary">
                <ArrowRight className='size-5' />
                Continuar
            </Button>)}
        </div>
    )
    }