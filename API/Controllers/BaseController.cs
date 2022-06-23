using Microsoft.AspNetCore.Mvc;

namespace SahaiCart.API.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class BaseController : ControllerBase
{
    public BaseController()
    {
    }
}