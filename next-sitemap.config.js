/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.amirraz.com', // Replace with your site's URL
    generateRobotsTxt: true, // Generate robots.txt file
    sitemapSize: 7000, // Optional: Limits the number of entries per sitemap
    exclude: ['/api/*', '/admin/*'], // Exclude paths you don't want indexed
};
