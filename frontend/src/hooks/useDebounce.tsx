const useDebounce = () => {
  return {
    debounce: (event: React.MouseEvent, fn: Function, timeout: number) => setTimeout(() => fn(event), timeout)
  }
}
export default useDebounce