using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SahaiCart.DataAccess.Data;
using SahaiCart.Models.Entities;

namespace SahaiCart.API.Controllers
{
    public class ProductsController : BaseController
    {
        private ModelContext _context;
        private ILogger<ProductsController> _logger;

        public ProductsController(ModelContext context, ILogger<ProductsController> logger)
        {
            this._context = context ?? throw new ArgumentNullException(nameof(context));
            this._logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        #region "API"

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var products = await _context.Products.ToListAsync();
            if (products.Any())
            {
                return Ok(products);
            }
            else
            {
                _logger.LogError($"No {nameof(Product)} found");
                return NotFound($"No {nameof(Product)} found");
            }
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Product>> GetProduct(int Id)
        {
            var product = await _context.Products.FindAsync(Id);
            if (product != null)
            {
                return Ok(product);
            }
            else
            {
                _logger.LogError($"{nameof(Product)} with Id {Id} not found");
                return NotFound($"{nameof(Product)} with Id {Id} not found");
            }
        }

        #endregion
    }
}