using BeerLog.Models.Domain;
using System;

namespace BeerLog.Services
{
    public class BreweryComparer : IBreweryComparer
    {
        public bool Equals(BeerModel x, BeerModel y)
        {
            return x.Brewery.Equals(y.Brewery, StringComparison.CurrentCultureIgnoreCase);
        }

        public int GetHashCode(BeerModel obj)
        {
            return obj.Brewery.GetHashCode();
        }
    }
}
