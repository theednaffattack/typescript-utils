/**An wrapper for async functions allowing one to write 'const [error, data] = asyncWrapper(promise, args)' on one line. */
export async function asyncWrapper<T>(
    fn: (...args: any[]) => Promise<T>,
    ...args: any
): Promise<[unknown | null, T | null]> {
    try {
        const data = await fn(...args);
        return [null, data];
    } catch (error) {
        return [error, null];
    }
}
