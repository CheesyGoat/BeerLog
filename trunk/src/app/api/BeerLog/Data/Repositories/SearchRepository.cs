using BeerLog.Models.ViewModels;
using System.Collections.Generic;
using BeerLog.Data.Store;
using System.Linq;
using BeerLog.Services;
using System;

namespace BeerLog.Data.Repositories
{
    public interface ISearchRepository
    {
        IEnumerable<BeerListSummaryViewModel> SearchFor(string searchCriteria);
    }

    public class SearchRepository : ISearchRepository
    {
        private readonly IDataLoader _dataLoader;
        private readonly IBeerTypeTransformer _beerTypeTransformer;

        public SearchRepository(IDataLoader dataLoader, IBeerTypeTransformer beerTypeTransformer)
        {
            _dataLoader = dataLoader;
            _beerTypeTransformer = beerTypeTransformer;
        }

        public IEnumerable<BeerListSummaryViewModel> SearchFor(string searchCriteria)
        {
            var matches = _dataLoader.Collection.Where(x => x.Brewery.IndexOf(searchCriteria, StringComparison.CurrentCultureIgnoreCase) > 0 
                                                            || x.Name.IndexOf(searchCriteria, StringComparison.CurrentCultureIgnoreCase) > 0);
            return matches.Select(x =>
            {
                var chrisRating = x.Scores.First(y => y.Scorer == "Chris").Rating;
                var NeilRating = x.Scores.First(y => y.Scorer == "Neil").Rating;
                return new BeerListSummaryViewModel(x.Id, _beerTypeTransformer.ToAbbreviation(x.Type), $"{x.Brewery} - {x.Name}", chrisRating, NeilRating);
            }).OrderBy(x => x.Beer);
        }
    }
}