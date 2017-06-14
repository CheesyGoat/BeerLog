using AutoMapper;
using BeerLog.Data.Store;
using BeerLog.Models.ViewModels;
using System.Linq;

namespace BeerLog.Data.Repositories
{
    public interface IBeerRepository
    {
        BeerDetailsViewModel Get(int id);
    }

    public class BeerRepository : IBeerRepository
    {
        private readonly IDataLoader _dataLoader;

        public BeerRepository(IDataLoader dataLoader)
        {
            _dataLoader = dataLoader;
        }

        public BeerDetailsViewModel Get(int id)
        {
            var beer = _dataLoader.Collection.FirstOrDefault(x => x.Id == id);
            return Mapper.Map<BeerDetailsViewModel>(beer);
        }
    }
}
