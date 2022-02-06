const load = async <T>(path: string): Promise<T> => {
    try {
        return await import(path);
    } catch (e) {
        throw new Error(`Failed to load file at ${path}`);
    }
}

export default load;