import Image from 'next/image'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from './components/Buttons/ButtonCta'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-white font-extrabold text-4xl sm:text-6xl">
          GTM Test
        </h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <ButtonHome
            href={`https://wa.me/5594984334432?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
          >
            <ButtonHomeText>Quero saber mais</ButtonHomeText>
            <ButtonHomeFlex>
              <WhatsappLogoIcon
                className="h-5 w-5 sm:h-6 sm:w-6 fill-white drop-shadow-lg"
                weight="fill"
              />
            </ButtonHomeFlex>
          </ButtonHome>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h1 className="text-white font-medium text-2xl sm:text-3xl">
          GTM Test
        </h1>
      </footer>
    </div>
  )
}
