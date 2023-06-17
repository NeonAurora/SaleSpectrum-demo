using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using AuditApi.Data;

namespace AuditApi.Controllers
{
    [ApiController]
    [Route("management/[controller]")]
    public class AuditLogsController : ControllerBase
    {
        private readonly AuditContext _context;

        public AuditLogsController(AuditContext context)
        {
            _context = context;
        }

        // GET: management/auditLogs
        [HttpGet]
        public async Task<ActionResult> GetAuditLogs()
        {
            var auditLogs = await _context.AuditLogs.ToListAsync();
            return Ok(auditLogs);
        }
    }
}
