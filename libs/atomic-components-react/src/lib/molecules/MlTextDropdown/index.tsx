import React, { useState } from 'react'
import { AtIcon, AtLink } from '../../atoms'

export interface MlTextDropdownProps {
  title: string
  content: string
}

export const MlTextDropdown = ({ title, content }: MlTextDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <AtLink className="w-full" onClick={() => setIsOpen(!isOpen)}>
        <div
          className="cursor-pointer flex justify-between items-center py-7"
          style={{ borderTop: '1px solid #8F8F8F' }}
        >
          <p className="inline text-neutral-dark font-bold text-lg leading-5 tracking-wide pr-1.5">{title}</p>
          <AtIcon type={isOpen ? 'angle-up' : 'angle-down'} />
        </div>
      </AtLink>
      {isOpen && (
        <div className="text-neutral-dark text-sm md:text-base leading-5 md:leading-6">
          {content.split('\n').map((c, idx) => (
            <p className="mb-3.5 md:mb-4" key={idx}>
              {c.replace('-', '\u2011')}
            </p>
          ))}
        </div>
      )}
    </>
  )
}
