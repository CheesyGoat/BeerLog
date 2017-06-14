using Newtonsoft.Json;
using System.Collections.Generic;

namespace BeerLog.Models.Domain
{
    [JsonObject("Beer")]
    public class BeerModel
    {
        public int Id { get; set; }

        public string Type { get; set; }

        public string Brewery { get; set; }

        public string Name { get; set; }

        public decimal Percentage { get; set; }

        public List<ScoreModel> Scores { get; set; }

        public string Notes { get; set; }

        public BeerModel()
        {
            Scores = new List<ScoreModel>();
        }
    }
}
