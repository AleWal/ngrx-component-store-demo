export interface HospitalDto {
    number: number;
    name: string;
    type: HostpitalType;
}

export enum HostpitalType {
    Public,
    Charitable,
    Private,
}

