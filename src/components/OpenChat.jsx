import Button from "./Button";
import SearchBar from "./SearchBar";
import { Send } from "@mui/icons-material";

export default function OpenChat() {
  return (
    <div className="w-[600px] bg-transparent-white rounded-[30px] backdrop-blur-[2px] inline-flex flex-col justify-stretch items-stretch overflow-hidden">
      {/* Header */}
      <div className="p-2.5 bg-grey-lighter inline-flex justify-start items-center gap-5">
        <img className="size-12 rounded-full" src="public/images/profile-pictures/pino-daniele.webp" />
        <div className="flex-1 text-ink text-xl font-medium font-['Gabarito']">Pino Daniele</div>
      </div>

      {/* Messages */}
      <div className=" grow flex-1 py-5 flex flex-col justify-end items-stretch gap-6 overflow-hidden">
        {/* domenica */}
        <div className="text-center text-grey-dark text-sm font-normal font-['Hanken_Grotesk']">domenica</div>
        <div className="px-5 inline-flex justify-start items-start">
          <div className="flex-1 px-5 py-2.5 bg-light rounded-tl-sm rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]">
            <p className="text-ink text-base font-normal font-['Hanken_Grotesk']">Ciao, piacere sono Pino!</p>
          </div>
          <div className="w-48" />
        </div>
        <div className="px-5 inline-flex justify-start items-start">
          <div className="flex-1 px-5 py-2.5 bg-light rounded-tl-sm rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]">
            <p className="text-ink text-base font-normal font-['Hanken_Grotesk']">ho visto sul tuo profilo che fai giri in MTB nella mia stessa zona</p>
          </div>
          <div className="w-48" />
        </div>

        {/* lunedì */}
        <div className="text-center text-grey-dark text-sm font-normal font-['Hanken_Grotesk']">lunedì</div>
        <div className="px-5 inline-flex justify-start items-start">
          <div className="w-48" />
          <div className="flex-1 px-5 py-2.5 bg-tertiary rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-sm">
            <p className="text-light text-base font-normal font-['Hanken_Grotesk']">Ciao Pino, si spesso quando non ho niente da fare faccio dei giri in MTB</p>
          </div>
        </div>
        <div className="px-5 inline-flex justify-start items-start">
          <div className="flex-1 px-5 py-2.5 bg-light rounded-tl-sm rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]">
            <p className="text-ink text-base font-normal font-['Hanken_Grotesk']">Che bello🤩</p>
          </div>
          <div className="w-48" />
        </div>
        <div className="px-5 inline-flex justify-start items-start">
          <div className="flex-1 px-5 py-2.5 bg-light rounded-tl-sm rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]">
            <p className="text-ink text-base font-normal font-['Hanken_Grotesk']">Ti va di fare un giro questo weekend?</p>
          </div>
          <div className="w-48" />
          </div>
          <div className="px-5 inline-flex justify-start items-start">
          <div className="flex-1 px-5 py-2.5 bg-tertiary rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-sm">
            <p className="text-light text-base font-normal font-['Hanken_Grotesk']">Volentieri</p>
          </div>
          <div className="w-48" />
          </div>
          

        {/* oggi */}
        <div className="text-center text-grey-dark text-sm font-normal font-['Hanken_Grotesk']">oggi</div>
        <div className="px-5 inline-flex justify-start items-start">
          <div className="w-48" />
          <div className="flex-1 px-5 py-2.5 bg-tertiary rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-sm">
            <p className="text-light text-base font-normal font-['Hanken_Grotesk']">Che ne dici di domenica?</p>
          </div>
        </div>
        <div className="px-5 inline-flex justify-start items-start">
          <div className="w-48" />
          <div className="flex-1 px-5 py-2.5 bg-tertiary rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-sm">
            <p className="text-light text-base font-normal font-['Hanken_Grotesk']">Dovrebbe far bel tempo ☀️</p>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="p-5 bg-tertiary inline-flex gap-3 justify-start items-center">
        <SearchBar className="grow" placeholder="type your message..." />
        <Button variant="transparent" className="p-1.5 text-white hover:text-secondary">
          <Send />
        </Button>
      </div>
    </div>
  );
}
