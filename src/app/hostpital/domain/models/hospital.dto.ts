export interface HostpitalDto {
    number: number;
    name: string;
    type: HostpitalType;
}

export enum HostpitalType {
    Public,
    Charitable,
    Private,
}

