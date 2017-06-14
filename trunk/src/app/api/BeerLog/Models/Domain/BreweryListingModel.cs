namespace BeerLog.Models.Domain
{
    public class BreweryListingModel
    {
        public BreweryListingModel(string brewery)
        {
            Brewery = brewery;
        }

        public string Brewery { get; private set; }
    }
}
