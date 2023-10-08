import clsx from 'clsx'

export type RibbonProps = {
  size: 'small' | 'large'
  text: string
}

export default function Ribbon({ size, text }: RibbonProps) {
  return (
    <div
      className={clsx('absolute z-50 bg-[#FF096F] text-white font-extrabold origin-center -rotate-45 text-center', {
        'w-40 text-4xl left-[-37px] top-[23px]': size === 'large',
        'w-20 text-lg left-[-19px] top-[11px] leading-5': size === 'small',
      })}
    >
      {text}
    </div>
  )
}
