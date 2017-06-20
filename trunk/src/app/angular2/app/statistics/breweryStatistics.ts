export interface IBreweryStatistics {
    "GrandTotal": number;
    "UserTotals": IUserBreweries[]
}

export interface IUserBreweries {
    "User": string;
    "Total": number;
}