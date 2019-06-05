using System.Collections.Generic;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Configuration;

namespace MyApp
{
    [Priority(-90)] // Run before AppHost.Configure()
    public class ConfigureAuthRepository : IConfigureAppHost
    {
        public void Configure(IAppHost appHost)
        {
            appHost.Register<IAuthRepository>(new InMemoryAuthRepository()); //Store Authenticated Users in Memory

            CreateUser(appHost, "admin@email.com", "Admin User", "p@55wOrd", roles:new[]{ RoleNames.Admin });
        }

        // Add initial Users to the configured Auth Repository
        public void CreateUser(IAppHost appHost, string email, string name, string password, string[] roles)
        {
            var authRepo = appHost.TryResolve<IAuthRepository>();
            if (authRepo.GetUserAuthByUserName(email) == null)
            {
                var newAdmin = new UserAuth { Email = email, DisplayName = name };
                var user = authRepo.CreateUserAuth(newAdmin, password);
                authRepo.AssignRoles(user, roles);
            }
        }
    }
}
