using System;

namespace BeerLog.Models.ViewModels
{
    public class ScoreViewModel
    {
        public string Scorer { get; set; }

        public int Rating { get; set; }

        public bool Taster { get; set; }

        public bool Bottle { get; set; }

        public string Location { get; set; }

        public DateTime Date { get; set; }
    }
}
