import React from 'react'

export interface MlDiscountBarProps {
  text: string
  className?: string
}

export const MlDiscountBar = ({ text, className }: MlDiscountBarProps) => {
  return (
    <div className={`bg-secondary ${className}`}>
      <p className="text-white text-center align-middle font-bold text-sm p-4" style={{ letterSpacing: '0.5px' }}>
        {text}
      </p>
    </div>
  )
}
