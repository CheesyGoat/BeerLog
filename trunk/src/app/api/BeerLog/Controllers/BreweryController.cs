using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeerLog.Controllers
{
    public class BreweryController : Controller
    {
        private readonly IBreweryRetriever _breweryRetriever;

        public BreweryController(IBreweryRetriever breweryRetriever)
        {
            _breweryRetriever = breweryRetriever;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok();
        }
    }
}
