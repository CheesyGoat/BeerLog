using BeerLog.Models.Domain;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace BeerLog.Data.Store
{
    public class DataLoader : IDataLoader
    {
        public List<BeerModel> Collection { get; private set; }
        
        public void Load(string contentRootPath)
        {
            using (StreamReader streamReader = File.OpenText(Path.Combine(contentRootPath, "Content", "scores.json")))
                Collection = JsonConvert.DeserializeObject<List<BeerModel>>(streamReader.ReadToEnd());
        }
    }
}
