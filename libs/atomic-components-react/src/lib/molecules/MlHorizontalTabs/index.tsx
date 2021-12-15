import React, { useState } from 'react'

export type TabItem = {
  label: string
  content: React.ReactNode
  disabled?: boolean
}

export interface MlHorizontalTabsProps {
  tabs?: TabItem[]
}

export const MlHorizontalTabs = ({ tabs }: MlHorizontalTabsProps) => {
  const [activeTab, setActiveTab] = useState(0)

  return !tabs || tabs.length === 0 ? null : (
    <div>
      <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
        {tabs?.map((tab, index) => (
          <button
            key={index}
            type="button"
            className={`uppercase focus:outline-none text-secondary ${
              activeTab === index ? 'border-b-2 border-secondary font-medium' : ''
            } ${tab.disabled ? 'opacity-60 cursor-default' : ''}`}
            disabled={tab.disabled}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {tabs[activeTab].content}
    </div>
  )
}
