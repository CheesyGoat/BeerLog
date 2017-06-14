using BeerLog.Models.Domain;
using System.Collections.Generic;

namespace BeerLog.Data.Store
{
    public interface IDataLoader
    {
        List<BeerModel> Collection { get; }
        void Load(string contentRootPath);
    }
}