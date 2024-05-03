# Next.js SEO - The Ultimate Guide

This a list of SEO steps:

- [realfavicongenrator](https://realfavicongenerator.net/)
- uploading a link in social media does need image to show up. the recommeded size is `1200X630px` and you can resize it on [gimp](https://www.gimp.org/)
- naming convention is always `opengraph-image.png` and place in app folder
- check social media links of our app go [socialsharePreview](https://socialsharepreview.com/) for deployed apps
- if not deployed first go [srv.us](https://docs.srv.us/) copy `ssh srv.us -R 1:localhost:3000` and run in terminal
- get the url then head over to socialsharePreview or [opengraph](https://www.opengraph.xyz/) to see the image
- If you want titles of the page on top of images for social media instead of using 08-others/social-media-cards we can use the [opengraph-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) from nextjs

- to make static to dynamic content use the generateStaticParams fns refer posts/postId
- handle notfound page for url doesnot exist refer posts/postId
- To find search engine crawlers and index your site efficiently use [sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- then upload the index files to google

- to hidden pages from engine crawler use [robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
- sitemap and robots are not mandatory

Watch the tutorial on YouTube: https://www.youtube.com/watch?v=wTGVHLyV09M

![thumbnail](https://github.com/codinginflow/nextjs-seo/assets/52977034/dbeacda1-e5c5-4598-9f78-da5d5b9269ac)
