using BeerLog.Data.Store;
using BeerLog.Models.Domain;
using BeerLog.Services;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BeerLog.Data.Repositories
{
    public interface IBreweryRepository
    {
        IEnumerable<BreweryListingModel> All();
        IEnumerable<BreweryListingModel> Search(string searchCriteria);
    }

    public class BreweryRepository : IBreweryRepository
    {
        private readonly IDataLoader _dataLoader;
        private readonly IBreweryComparer _breweryComparer;

        public BreweryRepository(IDataLoader dataStore, IBreweryComparer breweryComparer)
        {
            _dataLoader = dataStore;
            _breweryComparer = breweryComparer;
        }

        public IEnumerable<BreweryListingModel> All()
        {
            return _dataLoader.Collection.Distinct(_breweryComparer).Select(x => new BreweryListingModel(x.Brewery));
        }

        public IEnumerable<BreweryListingModel> Search(string searchCriteria)
        {
            return _dataLoader.Collection.Distinct(_breweryComparer)
                                         .Where(x => x.Brewery.IndexOf(searchCriteria, StringComparison.CurrentCultureIgnoreCase) > 0)
                                         .Select(x => new BreweryListingModel(x.Brewery));
        }
    }
}
