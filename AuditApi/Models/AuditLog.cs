using System;
using System.ComponentModel.DataAnnotations;

namespace AuditApi.Models
{
    public class AuditLog
    {
        [Key]
        public int id { get; set; }

        public string UserId { get; set; }

        public string Action { get; set; }

        public DateTime Timestamp { get; set; }

        public string Details { get; set; }

        public string Name { get; set; } // new column

        public decimal SalesImpact { get; set; } // new column
    }
}

