import React from 'react'

const themes = [
  {
    theme: 'primary',
    class: 'bg-primary border-primary text-gray-50 hover:bg-gray-50 hover:text-primary'
  },
  {
    theme: 'primary-outline',
    class: 'border-primary text-primary hover:bg-secondary hover:border-secondary hover:text-gray-50'
  },
  {
    theme: 'secondary',
    class: 'bg-gray-50 border-gray-50 text-primary hover:bg-primary hover:text-gray-50 hover:border-primary'
  },
  {
    theme: 'secondary-outline',
    class: 'border-gray-50 text-gray-50 hover:bg-secondary hover:border-secondary'
  },
  {
    theme: 'disabled',
    class: 'bg-tiara border-tiara text-white disabled cursor-default'
  },
]

const Button = ({
  title,
  theme = 'primary',
  styles = '',
  onClick = () => { },
  disable = false
}) => {
  const themeClass = themes.find((item) => item.theme === theme)?.class ?? themes[0].class

  return (
    <button
      className={`min-w-[180px] p-3 border-[1px] rounded-sm text-center font-semibold uppercase transition-all duration-300 ${themeClass} ${styles}`}
      type='button'
      onClick={onClick}
      disabled={disable}
    >
      {title}
    </button>
  )
}

export default Button