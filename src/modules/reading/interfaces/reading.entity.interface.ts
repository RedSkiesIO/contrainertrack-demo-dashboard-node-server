export interface ReadingEntityInterface {
    readonly id: number;
    readonly sensor_id: any;
    readonly temperature: number;
    readonly pressure: number;
    readonly humidity: number;
    readonly battery: number;
    readonly acceleration: number;
    readonly rssi: number;
    readonly geo_location: string;
    readonly createdAt: number;
}