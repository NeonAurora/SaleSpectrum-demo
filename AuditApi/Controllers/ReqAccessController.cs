using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using AuditApi.Data;
using AuditApi.Models;

namespace AuditApi.Controllers
{
    [ApiController]
    [Route("management/[controller]")]
    public class ReqAccessController : ControllerBase
    {
        private readonly AuditContext _context;

        public ReqAccessController(AuditContext context)
        {
            _context = context;
        }

        // POST: management/reqAccess
        [HttpPost]
        public async Task<ActionResult> PostReqAccess([FromBody] ReqAccess reqAccess)
        {
            _context.ReqAccesses.Add(reqAccess);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
