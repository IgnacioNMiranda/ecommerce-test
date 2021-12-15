declare module '*.svg' {
  const content: any
  export const ReactComponent: any
  export default content
}

/* takes Promise<T> | ()=>Promise<T> | () => T
 * returns U
 */

type Unwrap<T> = T extends Promise<infer U>
  ? U
  : T extends (...args: any) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : T
