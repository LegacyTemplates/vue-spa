using System.Collections.Generic;
using Funq;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Caching;
using ServiceStack.Configuration;
using ServiceStack.FluentValidation;

namespace MyApp
{
    [Priority(-100)] // Run before ConfigureAuthRepository
    public class ConfigureAuth : IConfigureAppHost
    {
        public void Configure(IAppHost appHost)
        {
            var AppSettings = appHost.AppSettings;
            appHost.Plugins.Add(new AuthFeature(() => new CustomUserSession(),
                new IAuthProvider[] {
                    new CredentialsAuthProvider(), //Enable UserName/Password Credentials Auth
                }));

            appHost.Plugins.Add(new RegistrationFeature()); //Enable /register Service

            //override the default registration validation with your own custom implementation
            appHost.RegisterAs<CustomRegistrationValidator, IValidator<Register>>();

            //appHost.Register<ICacheClient>(new MemoryCacheClient()); //Store User Sessions in Memory Cache (default)
        }
    }
    
    // Type class to store additional metadata in Users Session
    public class CustomUserSession : AuthUserSession {}
    
    // Custom Validator to add custom validators to built-in /register Service requiring DisplayName and ConfirmPassword
    public class CustomRegistrationValidator : RegistrationValidator
    {
        public CustomRegistrationValidator()
        {
            RuleSet(ApplyTo.Post, () =>
            {
                RuleFor(x => x.DisplayName).NotEmpty();
                RuleFor(x => x.ConfirmPassword).NotEmpty();
            });
        }
    }
}
