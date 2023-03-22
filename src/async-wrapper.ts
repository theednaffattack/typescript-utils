export async function asyncWrapper(
  fn: Function,
  ...args: any
): Promise<[unknown, any]> {
  try {
    const data = await fn(...args);
    return [null, data];
  } catch (error) {
    return [error, null];
  }
}
