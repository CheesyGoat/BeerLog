namespace BeerLog.Models.ViewModels
{
    public class BeerListSummaryViewModel
    {
        public BeerListSummaryViewModel(int id, string type, string beer, int chrisRating, int neilRating)
        {
            Id = id;
            Type = type;
            Beer = beer;
            ChrisRating = chrisRating;
            NeilRating = neilRating;
        }

        public int Id { get; set; }

        public string Type { get; set; }

        public string Beer { get; set; }

        public int ChrisRating { get; set; }

        public int NeilRating { get; set; }
    }
}
