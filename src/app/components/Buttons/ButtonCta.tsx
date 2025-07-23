import { ComponentProps } from 'react'

export interface ButtonCta {
  className: string
}

type ButtonHomeProps = ComponentProps<'a'>

export function ButtonHome(props: ButtonHomeProps) {
  return (
    <div className="z-50 my-4 flex w-full justify-center sm:justify-start">
      <a
        aria-label="Contato Whatsapp"
        className="focus:shadow-outline delay-0 inline-flex h-12 w-auto items-center justify-center rounded-full shadow-*-lg shadow-green-400/20 bg-brandCyan px-8 font-medium duration-75 ease-in-out hover:scale-105 focus:outline-none sm:h-14 md:w-auto"
        {...props}
      />
    </div>
  )
}

type ButtonHomeFlexProps = ComponentProps<'div'>

export function ButtonHomeFlex(props: ButtonHomeFlexProps) {
  return <div className="z-50 ml-3 flex items-center" {...props} />
}

type ButtonHomeTextProps = ComponentProps<'div'>

export function ButtonHomeText(props: ButtonHomeTextProps) {
  return (
    <div
      className="z-50 text-center text-xs uppercase text-white sm:text-left sm:text-lg font-bold"
      {...props}
    />
  )
}

type ButtonFloatProps = ComponentProps<'a'>

export function ButtonFloat(props: ButtonFloatProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex h-24 w-24 items-end justify-end p-2 hover:-translate-x-0 hover:scale-110 hover:transition-all hover:duration-300">
      <div className="absolute flex items-center justify-center rounded-full shadow-*-lg shadow-gray-800/20 bg-green-400 p-4 hover:transition-all focus:outline-none">
        <a aria-label="Contato Whatsapp" {...props} />
      </div>
    </div>
  )
}
