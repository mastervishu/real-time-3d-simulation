function getRandomPosition(minLat: number, maxLat: number, minLon: number, maxLon: number): { lat: number, lon: number } {
    const lat = Math.random() * (maxLat - minLat) + minLat;
    const lon = Math.random() * (maxLon - minLon) + minLon;

    return { lat, lon };
}

export { getRandomPosition }
