using AutoMapper;
using BeerLog.Data.Repositories;
using BeerLog.Models.ViewModels;
using System;
using System.Collections.Generic;

namespace BeerLog.Services
{
    public interface IBreweryRetriever
    {
        List<BreweryListingViewModel> All();
        List<BreweryListingViewModel> Search(string searchCriteria);
    }

    public class BreweryRetriever : IBreweryRetriever
    {
        private readonly IBreweryRepository _breweryRepository;

        public BreweryRetriever(IBreweryRepository breweryRepository)
        {
            _breweryRepository = breweryRepository;
        }

        public List<BreweryListingViewModel> All()
        {
            var breweries = _breweryRepository.All();
            return Mapper.Map<List<BreweryListingViewModel>>(breweries);
        }

        public List<BreweryListingViewModel> Search(string searchCriteria)
        {
            var breweries = _breweryRepository.Search(searchCriteria);
            return Mapper.Map<List<BreweryListingViewModel>>(breweries);
        }
    }
}
