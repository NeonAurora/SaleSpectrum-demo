using System;
using System.ComponentModel.DataAnnotations;

namespace AuditApi.Models
{
    public class ReqAccess
    {
        [Key]
        public int id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Country { get; set; }

        public string Occupation { get; set; }

        public string PhoneNumber { get; set; }
    }
}
