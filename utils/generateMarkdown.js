

// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseData) {  
  if (!licenseData) {
    return `""
    `
  } else {
    if(licenseData){
      return `![${licenseData}](https://img.shields.io/badge/${licenseData}-License-blue)
    `
  }
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  if (!licenseLink) {
    return `""
    `
  } else {
    if(licenseLink){
      return `https://img.shields.io/badge/${licenseLink}-License-blue
    `
  }
  }
}


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseData) {
  return `
  ## License
  ${licenseData}
  `
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## ${data.description}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## badges
${renderLicenseBadge(data.license)}


## Table of Contents

- [installation](#installation)
- [contribution](#contribution)
- [Testing](#testing)
- [GitHub](#github)
- [License](#license)
- [Questions](#questions)

## Installation 
  ${data.installation} 

## Usage
  ${data.usage}

## Contribution  
  ${data.contribution}

## Testing
  ${data.testing}

## Github 
${data.github}

## Questions
    ${data.email}
    - 
    ${data.contact}
`;
}


module.exports = generateMarkdown;