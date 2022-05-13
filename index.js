//GIVEN a command-line application that accepts user input
//WHEN I am prompted for my team members and their information
//THEN an HTML file is generated that displays a nicely formatted team roster based on user input
//WHEN I click on an email address in the HTML
//THEN my default email program opens and populates the TO field of the email with the address
//WHEN I click on the GitHub username
//THEN that GitHub profile opens in a new tab
//WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
//WHEN I enter the team manager’s name, employee ID, email address, and office number
//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
//WHEN I select the engineer option
//THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//WHEN I select the intern option
//THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
//WHEN I decide to finish building my team
//THEN I exit the application, and the HTML is generated

//Application should use Jest for running unit tests
//Aplication should use Inquirer for collecting input from the user

//Application must have these classes: Employee, Manager, Engineer, and Intern
    //The first class is the Employee parent class with the following properties and methods
        // name, id, email, getName(), getId(), getEmail(), getRole() (returns 'Employee')
    //The other 3 classes should extend Employee
        //Manager will also include: officeNumber, getRole() (overridden to 'manager')
        //Engineer will also include: github (username), getGithub(), getRole() (overridden to 'engineer')
        //Intern will also include: school, getSchool(), getRole() (overridden to 'intern')

//HELP WITH:
    //File Structure - what goes where?
    
    //'Inquirer' - connecting it, calling it, and ensuring it is properly ignored (+ 'dist' ?)
    //'Jest' - connecting it, calling it, and any helpful tips

    // Generating HTML file from user input
        //From ReadMe generator? Lesson Activity?


