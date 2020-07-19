// 'MIT', 'Apache 2.0', 'GNU GPLv3', 'GNU LGPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Boost Software', 'Unlicense'
const generateBadge = license => {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'GNU LGPLv3') {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license === 'GNU AGPLv3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'Boost Software') {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}

## Badges
${generateBadge(data.license)}

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${data.installation}
## Usage 
${data.usage}
## Credits
${data.credits}
## License
${data.license}
---

## Contributing

## Tests
${data.test}

## Questions
For any additional questions, here is my contact informaton. 
* [GitHub] (github.com/${data.username})
* [Email] (${data.email})
`;
}

module.exports = generateMarkdown;
