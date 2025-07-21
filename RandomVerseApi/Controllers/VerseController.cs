using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RandomVerseApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VerseController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private const string ApiUrl = "https://bible-api.com/";

        public VerseController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet("random")]
        public async Task<IActionResult> GetRandomVerse()
        {
            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync($"{ApiUrl}random");
            if (!response.IsSuccessStatusCode)
            {
                return StatusCode((int)response.StatusCode, "Failed to fetch verse");
            }

            var json = await response.Content.ReadAsStringAsync();
            using var doc = JsonDocument.Parse(json);
            return Ok(doc.RootElement);
        }
    }
}
