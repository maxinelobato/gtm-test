import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import { ButtonFloat } from './ButtonCta'

export function ButtonFloatWttp() {
  return (
    <>
      <ButtonFloat
        target="_blank"
        href={`https://wa.me/5594984334432?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
      >
        <WhatsappLogoIcon
          className="h-8 w-8 fill-white drop-shadow-lg"
          weight="fill"
        />
      </ButtonFloat>
    </>
  )
}
