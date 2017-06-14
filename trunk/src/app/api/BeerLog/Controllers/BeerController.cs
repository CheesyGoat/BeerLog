using BeerLog.Data.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;

namespace BeerLog.Controllers
{
    [Route("api/[controller]")]
    public class BeerController : Controller
    {
        private readonly IBeerRepository _beerRepository;

        public BeerController(IBeerRepository beerRepository)
        {
            _beerRepository = beerRepository;
        }

        // GET api/values
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_beerRepository.Get(id));
            }
            catch (Exception exception)
            {
                return BadRequest($"Shit went wrong man. {exception.Message}");
            }
        }
    }
}
