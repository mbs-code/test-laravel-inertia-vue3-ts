export const useCounter = () => {
  const counter = ref<number>(0)

  const increment = () => { counter.value ++ }
  const decrement = () => { counter.value -- }

  return {
    value: readonly(counter),
    increment,
    decrement,
  }
}
