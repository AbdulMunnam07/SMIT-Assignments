// Extract the domain name from a URL string.

function extractDomainFromURL(url) {
    try {
        // Create a new URL object with the input URL string
        const parsedURL = new URL(url);
        // Extract and return the hostname (domain) from the parsed URL object
        return parsedURL.hostname;
    } catch (error) {
        // If parsing the URL fails, return null
        console.error("Error parsing URL:", error);
        return null;
    }
}

// Example usage
const url1 = "https://www.example.com/page";
const domain1 = extractDomainFromURL(url1);
console.log(domain1); // Output: "www.example.com"

const url2 = "https://subdomain.example.co.uk/path";
const domain2 = extractDomainFromURL(url2);
console.log(domain2); // Output: "subdomain.example.co.uk"
