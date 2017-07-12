export interface IAverageStatistics {
    "TypeTotals": ITypeTotal[];
}

export interface ITypeTotal {
    "Type": string;
    "AveragePercentage": number;
    "UserTotals": IUserTypeTotal[]
}

export interface IUserTypeTotal
{
    "User": string;
    "Total": number;
    "AverageRating": number;
}