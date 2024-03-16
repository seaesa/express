export interface PropType {
  path: string,
  element?: any,
  template?: any,
  layout?: any,
  childPath?: Array<PropType>
}
export interface Rules {
  route: Array<PropType>,
  template?: any
}