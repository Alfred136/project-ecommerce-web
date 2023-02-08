import React from 'react'

const themes = [
  {
    theme: 'primary',
    class: 'bg-slate-700 border-slate-700 text-gray-50 hover:bg-gray-50 hover:text-slate-700'
  },
  {
    theme: 'secondary',
    class: 'bg-gray-50 border-gray-50 text-slate-700 hover:bg-slate-700 hover:text-gray-50 hover:border-slate-700'
  },
  {
    theme: 'secondary-outline',
    class: 'border-gray-50 text-gray-50 hover:bg-slate-900 hover:border-slate-900'
  },
]

const Button = ({
  title,
  theme = 'primary',
  styles = '',
  onClick = () => { }
}) => {
  const themeClass = themes.find((item) => item.theme === theme)?.class ?? themes[0].class

  return (
    <button
      type='button'
      onClick={onClick}
      className={`w-[180px] py-3 border-[1.5px] rounded-sm text-center font-semibold ${themeClass} ${styles}`}>
      {title}
    </button>
  )
}

export default Button