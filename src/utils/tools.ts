export const cutLongString = (string: string, limit: number): string => {
    var dots = '...'
    if (string.length > limit) {
        string = string.substring(0, limit) + dots
    }

    return string
}

export const genId = (): string => {
    const timestamp: number = Date.now();
    const random: number = Math.random() * 1000000;
    const id: string = `${timestamp}${random}`.replace('.', '');

    return id;
}