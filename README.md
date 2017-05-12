# GeneClient
[Live Demo](http://ec2-34-223-230-85.us-west-2.compute.amazonaws.com:4200/samples)


[API Base URL](http://ec2-34-223-230-85.us-west-2.compute.amazonaws.com:5000/api/values)

# Technologies
- OS: Ubuntu 16.04.2 LTS (Xenial Xerus)
- .Net Core
- npm 4.5.0
- Angular CLI 2.3.1
- Bootstrap 4

```shell
[miles 19:14:23:] Gene $ dotnet --info
.NET Command Line Tools (1.0.1)

Product Information:
 Version:            1.0.1
 Commit SHA-1 hash:  005db40cd1

Runtime Environment:
 OS Name:     ubuntu
 OS Version:  16.04
 OS Platform: Linux
 RID:         ubuntu.16.04-x64
 Base Path:   /opt/dotnet/sdk/1.0.1
```

# Building Locally

Assumes `sqlite3` and `.NET Core` installed.

## Steps
1. Clone repo and install dependencies
2. Launch local servers
3. Open browser to [localhost](http://localhost:4200)

```shell
# shell-1
$ git clone https://github.com/mileshill/GeneByGene.git
$ cd GeneByGene
$ dotnet restore && dotnet run
...
Now listening on http://localhost:5000
...

#shell-2
$ cd /path/to/GeneByGene
$ npm install
$ ng serve
...
** NG Live Development Server is running on http://localhost:4200. **
```

Now open the browser to [localhost](http://localhost:4200). 

# Deploying to Cloud
1. Update hosts
2. Adjustment permission to cloud servers (not described here)
3. Follow local launch commands

Update `Program.cs` to run on the desired host and url with the `.UseUrls("http://host:port")` method.
```csharp
namespace Gene
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseUrls("http://0.0.0.0:5000")
                .Build();

            host.Run();
        }
    }
}
```
Tell angular to launch on new port
```shell
$ ng serve --host 0.0.0.0
```
# API
- GET `/users` : unsorted list of users
```json
{
    UserId:int, 
    FirstName:string, 
    LastName:string
}
```

- GET `/statuses`: unsorted lists of statuses
```json
{
    StatusId:int, 
    Status:string
}
```
- GET `/samples/{id:range(-1,3)}`: 
    - -1: return all samples
    - 0-3: return samples with StatusId == id
```json
{
    CreatedAt: DateTime,
    Barcode: string,
    Status: string,
    StatusId: int,
    FirstName: string,
    LastName: string
}
```
- GET `/users/{chars}` : return samples where user name contains `chars`
```json
{
    CreatedAt: DateTime,
    Barcode: string,
    Status: string,
    StatusId: int,
    FirstName: string,
    LastName: string
}
```

- POST `/samples`: add sample to database
```json
// body
{
    Barcode: string,
    CreatedBy: int,
    StatusId: int
}
```
