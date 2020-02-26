using Microsoft.AspNetCore.Mvc;
using DatingApp.API.Data;
using System.Threading.Tasks;
using DatingApp.API.Models;
using DatingApp.API.Dtos;

namespace DatingApp.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForReisterDto)
        {
            // validate request
            userForReisterDto.Username = userForReisterDto.Username.ToLower();

            if (await _repo.UserExists(userForReisterDto.Username))
                return BadRequest("username already exists");

            var userToCreate = new User
            {
                Username = userForReisterDto.Username
            };
            var createdUser = await _repo.Register(userToCreate, userForReisterDto.Password);

            return StatusCode(201);

        }
    }
}