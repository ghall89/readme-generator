// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = licenseInput => {
    
  if (licenseInput == 'No License') {
    return '';
  } else {
    let licenseText = '';
    
    if (licenseInput == 'GNU General Public License') {
      licenseText = `
This project is licensed under the GNU General Public License
      `;
    } else if (licenseInput == 'MIT License') {
      licenseText = `
This project is licensed under the MIT License
      `;
    } else if (licenseInput = 'Apache License') {
      licenseText = `
This project is licensed under the Apache License  
      `
    }
    return `
## License
${licenseText}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const licenseInput = data.license;

  
  return `
# ${data.title}

## Description
${data.description}

![](./assets/screenshot.png)

## Installation
${data.installation}

## Usage
${data.usage}
${renderLicenseSection(licenseInput)}
`;
}

module.exports = generateMarkdown;
