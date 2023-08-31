/**
 * @ts-check
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
    output: "export",

    // www.domain.tld/<repository name>
    // use empty string if www.domain.tld
    basePath: "/<repository name>",
}

module.exports = nextConfig