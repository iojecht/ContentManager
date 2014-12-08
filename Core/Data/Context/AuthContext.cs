using Microsoft.AspNet.Identity.EntityFramework;

namespace Core.Data.Context
{
    public class AuthContext : IdentityDbContext<IdentityUser>
    {
        public AuthContext() : base("AuthContext")
        {
            
        }
    }
}