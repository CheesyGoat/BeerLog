using BeerLog.Models.Domain;
using System.Collections.Generic;

namespace BeerLog.Services
{
    public interface IBreweryComparer : IEqualityComparer<BeerModel>
    {
        bool Equals(BeerModel x, BeerModel y);
        int GetHashCode(BeerModel obj);
    }
}