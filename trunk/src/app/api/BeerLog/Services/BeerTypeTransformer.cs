using System.Collections.Generic;

namespace BeerLog.Services
{
    public class BeerTypeTransformer : IBeerTypeTransformer
    {
        private readonly Dictionary<string, string> _types;

        public BeerTypeTransformer()
        {
            _types = new Dictionary<string, string>()
            {
              {"Light","L"},
              {"Amber","A"},
              {"Pale Ale","PA"},
              {"Stout","S"},
              {"Porter","P"},
              {"Bitter","B"},
              {"Copper","C"},
              {"Dark","D"},
              {"Mild","M"},
              {"Wheat","W"}
            };
        }

        public string ToAbbreviation(string type)
        {
            return _types[type];
        }
    }
}
