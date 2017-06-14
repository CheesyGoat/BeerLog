using Microsoft.AspNetCore.Mvc;
using BeerLog.Data.Repositories;
using System;

namespace BeerLog.Controllers
{
    [Route("api/[controller]")]
    public class SearchController : Controller
    {
        private readonly ISearchRepository _searchRepository;

        public SearchController(ISearchRepository searchRepository)
        {
            _searchRepository = searchRepository;
        }

        // GET api/values
        [HttpGet("{searchCriteria}")]
        public IActionResult Get(string searchCriteria)
        {
            try
            {
                return Ok(_searchRepository.SearchFor(searchCriteria));
            }
            catch(Exception exception)
            {
                return BadRequest($"Shit went wrong man. {exception.Message}");
            }
        }
    }
}
