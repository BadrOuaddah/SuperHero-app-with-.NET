using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SuperHero_API.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("SuperHeroOrigins")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> GetSuperHero()
        {
            return new List<SuperHero>
            {
                new SuperHero
                {
                    Name = "Spider Man",
                    FirstName = "Peter",
                    LastName = "Parker",
                    Place = "New York City"
                },
                new SuperHero
                {
                    Name = "Iron Man",
                    FirstName = "Tony",
                    LastName = "Stark",
                    Place = "Malibu"
                },
                new SuperHero
                {
                    Name = "Wonder Woman",
                    FirstName = "Diana",
                    LastName = "Prince",
                    Place = "Themyscira"
                }
            };
        }
    }
}
