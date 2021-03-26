// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license == 'No License') {
    return '';
  }
  return '![](https://img.shields.io/github/license/ghall89/readme-generator?style=for-the-badge)';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license == 'No License') {
    return '';
  }
  return `- [License](#license)`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license, name, title) => {
      
  if (license == 'No License') {
    return '';
  }
  let licenseText = '';
  const currentYear = new Date().getFullYear();
  
  switch (license) {
    
    case 'GNU General Public License':
      licenseText = `
${title}
Copyright (C) ${currentYear}  ${name}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
      `;
      break;
    case 'MIT License':
      licenseText = `
MIT License

Copyright (c) ${currentYear} ${name}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
      `;
      break;
    case 'Apache License':
      licenseText = `
Copyright ${currentYear} ${name}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
      `;
    break;
  };
  
  return `
## License
${licenseText}
  `;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const { name, github, email, title, description, installation, usage, license } = data;

  
  return `
${renderLicenseBadge(license)}
# ${title}

## Description

${description}

![](./assets/screenshot.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data)}
- [Questions](#usage)

## Installation

${data.installation}

## Usage

${usage}
${renderLicenseSection(license, name, title)}
## Questions

Direct any questions to [${name}](http://github.com/${github}) via email at ${email}

`;
}

module.exports = generateMarkdown;
