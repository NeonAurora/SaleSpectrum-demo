using Microsoft.EntityFrameworkCore;
using AuditApi.Models;

namespace AuditApi.Data
{
    public class AuditContext : DbContext
    {
        public AuditContext(DbContextOptions<AuditContext> options) : base(options)
        {
        }

        public DbSet<AuditLog> AuditLogs { get; set; }
        public DbSet<ReqAccess> ReqAccesses { get; set; }
    }
}
