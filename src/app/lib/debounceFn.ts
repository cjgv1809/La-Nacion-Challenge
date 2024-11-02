function debounceFn(func: (...args: unknown[]) => void, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return function (...args: unknown[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export default debounceFn;
