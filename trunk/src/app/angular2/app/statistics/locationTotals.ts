export interface ILocationTotals {
    UserLocations: [IUserLocationTotals];
}

export interface IUserLocationTotals {
    User: string;
    Locations: [ILocationTotal];
    TotalCask: number;
    TotalTasters: number;
    TotalBottled: number;
}

export interface ILocationTotal {
    Location: string;
    Total: number;
}