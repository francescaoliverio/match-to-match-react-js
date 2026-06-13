// src/components/OpenChat.jsx

import Button from "./Button"
import SearchBar from "./SearchBar"
import { Send } from "@mui/icons-material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import { cn } from "../lib/utils"

const MSG_BASE_STYLES = "py-2.5 px-5 rounded-4xl max-w-[80%]"

const MSG_VARIANT_STYLES = {
  fromYou: "bg-tertiary text-light rounded-br-sm self-end",
  toYou: "bg-light text-ink rounded-tl-sm self-start",
}

export default function OpenChat({ onBack, className }) {
  return (
    <div className={cn("bg-transparent-white h-full rounded-4xl flex flex-col justify-stretch items-stretch overflow-hidden", className)}>
      {/* Header */}
      <div className="p-2.5 bg-secondary flex justify-start items-center gap-5">
        <Button variant="transparent" className="p-1.5 md:hidden text-ink" onClick={onBack}>
          <ArrowBackIosNewIcon />
        </Button>
        <img className="size-12 rounded-full" src="images/profile-pictures/pino-daniele.webp" />
        <h4>Pino Daniele</h4>
      </div>
      {/* Messages */}
      <div className="flex-1 flex flex-col-reverse justify-start items-stretch gap-2.5 p-5 overflow-y-scroll scroll-smooth">
        {/* --- OGGI --- */}
        <div className={cn(MSG_BASE_STYLES, MSG_VARIANT_STYLES["fromYou"])}>Dovrebbe far bel tempo ☀️</div>
        <div className={cn(MSG_BASE_STYLES, MSG_VARIANT_STYLES["fromYou"])}>Che ne dici di domenica?</div>
        <div className={cn(MSG_BASE_STYLES, MSG_VARIANT_STYLES["fromYou"])}>Volentieri</div>
        <div className="text-center text-grey-dark text-sm">oggi</div>
        {/* --- LUNEDÌ --- */}
        <div className={cn(MSG_BASE_STYLES, MSG_VARIANT_STYLES["toYou"])}>Ti va di fare un giro questo weekend?</div>
        <div className={cn(MSG_BASE_STYLES, MSG_VARIANT_STYLES["toYou"])}>Che bello🤩</div>
        <div className={cn(MSG_BASE_STYLES, MSG_VARIANT_STYLES["fromYou"])}>Sì, spesso quando non ho niente da fare faccio dei giri in MTB</div>
        <div className={cn(MSG_BASE_STYLES, MSG_VARIANT_STYLES["fromYou"])}>Ciao Pino</div>
        <div className="text-center text-grey-dark text-sm">lunedì</div>
        {/* --- DOMENICA --- */}
        <div className={cn(MSG_BASE_STYLES, MSG_VARIANT_STYLES["toYou"])}>Ho visto sul tuo profilo che fai giri in MTB nella mia stessa zona</div>
        <div className={cn(MSG_BASE_STYLES, MSG_VARIANT_STYLES["toYou"])}>Ciao, piacere sono Pino!</div>
        <div className="text-center text-grey-dark text-sm">domenica</div>
      </div>
      {/* Input bar */}
      <div className="p-5 bg-tertiary inline-flex gap-3 justify-start items-center">
        <SearchBar className="grow" placeholder="type your message..." />
        <Button variant="transparent" className="p-1.5 text-white hover:text-secondary">
          <Send />
        </Button>
      </div>
    </div>
  )
}
