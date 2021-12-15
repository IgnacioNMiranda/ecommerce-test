export enum Target {
  SELF = '_self',
  BLANK = '_blank',
}

export const targetFunctions: Record<Target, (value: string) => void> = {
  [Target.SELF]: (value: string) => {
    window.location.href = value
  },
  [Target.BLANK]: (value: string) => {
    window.open(value)
  },
}
