using System.Collections.Generic;

namespace BeerLog.Models.ViewModels
{
    public class BeerDetailsViewModel
    {
        public int Id { get; set; }

        public string Type { get; set; }

        public string Brewery { get; set; }

        public string Name { get; set; }

        public decimal Percentage { get; set; }

        public List<ScoreViewModel> Scores { get; set; }

        public string Notes { get; set; }

        public BeerDetailsViewModel()
        {
            Scores = new List<ScoreViewModel>();
        }
    }
}
