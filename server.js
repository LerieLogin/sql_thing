const inquirer = require('inquirer')


// const PORT = process.env.PORT || 3001;

const options = 
  [
    /* Pass your questions in here */
    {
      type: 'list',
      name: 'shape',
      message: 'Enter shape:',
      choices: ['veiw all employees', 'add role', 'add employee', 'add role', 'update role' ]
      // validate: function(userInput) {
      //     if (userInput.length > 3) {
      //         return "logo must be 3 characters"
      //     }
      //     return true
    },  
  {
      type: 'input',
      name: 'color',
      message: 'enter color:'
  },
  {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color:'
  },
  {
      type: 'list',
      name: 'shape',
      message: 'Enter shape:',
      choices: ['circle', 'triangle', 'square']
  }

  ]
  // .then((answers) => {
  //   // Use user feedback for... whatever!!
  // })
  // .catch((err) => {
  //   if (err) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });

  const init = async () => {
    try {
        const answers = await options.prompt(options)
        const logo = generateLogo(answers)
        fs.writeFile('logo.svg', logo, (err) => {
            if (err) {
                throw err
            }
            console.log('logo generated :)')
        })
    } catch (error) {
        console.error('error occurred', error)
    }
}

init()
