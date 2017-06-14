namespace BeerLog.Services
{
    public interface IBeerTypeTransformer
    {
        string ToAbbreviation(string type);
    }
}