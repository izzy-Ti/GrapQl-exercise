import { ButtonProps } from '@/interfaces'
import React from 'react'

const Button: React.FC<ButtonProps> = ({
    label,
    action
}) => {
  return (
    <button className='bg-[#F1E8B8] w-fit text-[#a40e4c] rounded-full px-3 py-1 shadow-lg transition-transform duratio hover:bg-[#ebdf9e] hover:scale-105'
    onClick={action}>{label}</button>
  )
}

export default Button