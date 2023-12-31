// install packages
const inquirer = require('inquirer')
const fs = require('fs');
const { log } = require('console');

function readmeFormat ({title, description, installation, usage, contribution, tests, license, userName, email}, badge) {
    return `# ${title} ${badge}
## Description
    ${description}
## Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questions?](#questions)
## Installation
    ${installation}
## Usage
    ${usage}
## Contributions
    ${contribution}
## Tests
    ${tests}
## License
    ${license}
## Questions
- [My GitHub](https://github.com/${userName})
    ${email}
## Screenshot(s)`;
}

// prompt the user for the README input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter Your Project Title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a Description of This Application:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide Directions for the Installation of This Application, or N/A:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe What it is Like to Use This Application:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Are There Any Credits to be Made for This Application? If not enter N/A:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide the User With Some Testing Instructions, or N/A:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is the license of this application?',
            choices: ['MIT', 'Apache', 'Unlicense', 'Boost']
        },
        {
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is a good email users can reach you at?'
        }
    ])

    .then((answers) => {
        log(answers);
        let badge = "";
        if (answers.license === 'MIT') {
            answers.license = "The MIT License (MIT)\n\tCopyright (c) 2015 Chris Kibble Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        }
        else if (answers.license === 'Apache') {
            answers.license = "Copyright 2013 Mir Ikram Uddin\n\tLicensed under the Apache License, Version 2.0 (the 'License');\n\tyou may not use this file except in compliance with the License.\n\tYou may obtain a copy of the License at\n\thttp://www.apache.org/licenses/LICENSE-2.0\n\tUnless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.";
            badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        }
        else if (answers.license === 'Unlicense') {
            answers.license = "This is free and unencumbered software released into the public domain. Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.\n\tIn jurisdictions that recognize copyright laws, the author or author of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.\n\tTHE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\tFor more information, please refer to <http://unlicense.org/>"
            badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
        }
        else {
            answers.license = "Boost Software License - Version 1.0 - August 17th, 2003\n\tPermission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the 'Software') to use, reproduce, display, distribute, execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so, all subject to the following:\n\tThe copyright notices in the Software and this entire statement, including the above license grant, this restriction and the following disclaimer, must be included in all copies of the Software, in whole or in part, and all derivative works of the Software, unless such copies or derivative works are solely in the form of machine-executable object code generated by a source language processor.\n\tTHE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
            badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        }
        // format the data
        const data = readmeFormat(answers, badge);
        // write file
        const filename = "README.md"
        fs.writeFile(filename, data, (err) => {
            err ? log(err) : console.log("README file created!");;
        });
    });
