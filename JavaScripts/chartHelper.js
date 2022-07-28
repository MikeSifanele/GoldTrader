function getRelativeCandle({ maxPrice, open, high, low, close } = {}) {
    open = open / maxPrice * 100;
    high = high / maxPrice * 100;
    low = low / maxPrice * 100;
    close = close / maxPrice * 100;

    return { open, high, low, close };
}