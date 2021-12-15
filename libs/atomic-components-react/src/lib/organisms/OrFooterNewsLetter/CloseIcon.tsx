import React from 'react'
import { AtIcon } from '../..'

interface CloseIconProps {
  handleOnClose: () => void
}

export const CloseIcon = ({ handleOnClose }: CloseIconProps) => (
  <div className="flex justify-end sm:absolute top-0 right-0 mr-4 sm:mr-6 mt-4 sm:mt-6">
    <div onClick={handleOnClose} aria-hidden="true">
      <AtIcon type="multiply" color="white" className="cursor-pointer" />
    </div>
  </div>
)
