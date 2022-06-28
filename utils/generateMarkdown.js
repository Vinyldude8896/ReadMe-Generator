const license = ['APM', 'AUR', 'Bower', 'Cocoapods', 'Conda', 'CPAN', 'CRAN/METCRAN', 'Crates.io', 'CTA', 'DUB', 'Eclipse Marketplace', 'GitHub', 'GitLab', 'gitLab(Self-Managed)', 'Greasy Fork', 'Hex.pm', 'NPM', 'Ore License', 'Packagist License', 'Packagist License(custom Server)', 'PyPI', 'REUSE Compliance', 'weblate componenet license' ];
const licensePackage = ['What is the package name for the license?']
const licenseIcons = ['/apm/l/:', '	/aur/license/:', '/bower/l/:', '/cocoapods/l/:spec', '/conda/l/:channel/:package', '/cpan/l/:packageName', '/cran/l/:packageName', '/crates/l/:crate', '/ctan/l/:library', '/dub/l/:packageName', '/eclipse-marketplace/l/:name', '/github/license/:user/:repo', '/gitlab/v/license/:project+', '	/gitlab/v/license/:project+?gitlab_url=https%3A%2F%2Fjihulab.com', '/gitlab/v/license/:project+?gitlab_url=https%3A%2F%2Fjihulab.com', '	/gitlab/v/license/:project+?gitlab_url=https%3A%2F%2Fjihulab.com', '/npm/l/:packageName', '/ore/l/:pluginId', '/packagist/l/:user/:repo', '/packagist/l/:user/:repo?server=https%3A%2F%2Fpackagist.org', '/pypi/l/:packageName', '/reuse/compliance/:remote+', '/weblate/l/:project/:component?server=https%3A%2F%2Fhosted.weblate.org'];


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## ${data.description}

## License

## badges
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
## Table of Contents

- [installation](#installation)
- [contribution guidelines] (#contribution)
- [Test Instructions] (#test instrcutions)
- [License] (#license)
- Questions (#questions)

## Installation 
  ${data.installation} 


## Contribution  
  ${data.contribution}

## Test Instructions
  ${data.testing}

## ${data.github}

## Questions
    ${data.email}
    - 
    ${data.contact}
`;
}

module.exports = generateMarkdown;
