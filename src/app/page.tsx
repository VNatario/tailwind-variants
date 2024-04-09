import { tv } from 'tailwind-variants'

const button = tv({
  base: 'font-bold rounded-md text-white px-4 py-2',
  variants: {
    color: {
      primary: 'bg-blue-500 hover:bg-blue-700 ',
      secondary: 'bg-red-500 hover:bg-red-700',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      className: 'px-2 py-1',
    },
  ],
  defaultVariants: {
    color: 'primary',
  },
})

export default function Home() {
  return (
    <div className="flex">
      <button className={button({ color: 'secondary' })}>Button</button>
    </div>
  )
}
