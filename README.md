N.B. This has be an extraordinarily difficult section of the course for me exacerbated by personal goings on. This is not up to the standard I set for myself. This application has much more potential than what I managed and I intend on addressing it at a later date. 

This website is for **Quit Treker**, a small application for tracking the time since quitting smoking, associated data such as 'Cigarettes not smoked in that time', and a dynamic list of benefits to your body over time as you remain a newly designated non-smoker. The website has one page and will serve as a daily tracker and motivator for anyone wishing to quit smoking.

The goals of this website are to:

- Help the user with a constant reminder of how far they've come since quitting smoking, mainly through a timer starting from the moment they smoke their last cigarette.
- Display some associated benefits to quitting smoking through the use of counters. These counters will track 4 things: 
  - How many days in total since they quit,
  - How many cigarettes they would have smoked in that time,
  - How much money they have saved in that time,
  - How much time they have added to their life based on the amount of cigarettes they would have smoked had they not quit.
- The final piece to this application is the dynamically updated timeline that will display the changes and benefits to the users body over time. They will see the very real health benefits as soon as 20 minutes, and continue for years.

## UX

### User Stories

###### User 1 : Smoker

- As a smoker, part of the problem with quitting and staying off them is how little you feel any benefits, especially early on when all you feel is the addiction. i would like to see as many benefits as possible as early as possible in order to convinve me that quitting is still the right choice.
- Everyone knows that smoking is bad for you but I'd like to know in exactly what way.
- I would like to be reminded of the positive benefits to my health over time and at what point in recovery I am currently in.
- I want to be able to track the positive non-health related benefits to quitting such as how much money I'm saving. Money saved would have an immediate impact on my life so would be a great motivator if I seen what i've saved over time.



### Strategy

My main goal was to create an application with a simple but appealing layout that displays data in a clear and concise manner.

### Scope

I want the application to dsiplay the information to the user in a simple and super easily navigable webpage. I want to avoid an over-abundance of data fields and just provide the most impactful to the user.

### Structure/Features

The webpage will contain an input field at the top; either a calander or a dropdown menu in order for the user to add;

1.  The date in which they intend to quit which will produce a countdown timer leading up to the day they quit, 
2. A past date in which they quit so they can see the accrued benefits they've recieved over that period, and
3. A 'Quit Now' button to start the timer and quit smoking from that point on.



### Features to Implement in Future

The main feature I'd like to add in the future relates to the money saved. I would like to be able to access the users payment details in order to create a limited type of savings account on the application. From there I would like to give the user the option to keep saving or withdraw some/all of their savings.

I would also like to implement a API in order to allow the user to choose a product from Amazon and receive a notification when they've saved enough money to buy their chosen product. 

I would like to expand the range of this application by adding timer profiles for users who wish to quit other additions such as alcohol, sugar, fast food, trichotillomania, etc. so that the benefits that are displayed apply to each different addiction or habit.

UPDATED FEATURES LIST

The reasons for not implementing these will be outlined in the Barriers and Solutions section of this README.

I would like to implement a functioning calander input for the user.

I would like to implement a more visually appealing timeline. One which follows along a vertical line in an alternating and animated flow.

I would like the user to recieve a notification when they've reached a new milestone.

### Skeleton

###### Wireframes

- Can be found in the **Wireframes** folder.

## Technologies Used

- The developer used **VS Code** as the IDE during the development of this site.
- **Balsamiq Wireframes** was used to create the wireframes.
- **Typora** was used to write up this README.md file
- The languages used include:
  - **HTML**
  - **CSS**
  - **Bootstrap (4.6.0)**
  - **Javascript** 
- **Google fonts** as well as **FontAwesome** provided the fonts on the page as well as the icons.
- The image used in this website was obtained with a standard licence from **ShutterStock.com**.

### Resources

- The main resources for this project were:
  - https://css-tricks.com/
  - https://stackoverflow.com/
  - **Code Institute** HTML/CSS module videos
  - Code Institute's Slack community for general advice.
  - **The Complete JavaScript Course 2021: From Zero to Expert** Udemy course by Jonas Schmedtmann

### Testing

- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/)

- [W3C Markup Validation](https://validator.w3.org/#validate_by_upload)

  - All validations returned as "**No errors or warnings to show**"

- The user stories helped me try and keep focused on what exactly a user would want and need. Some applications have a overabundance of data fields and counters, and separate timers, games, and a variety of other elements but they can be difficult to navigate especially when you're quitting smoking or any other addiction you need things to be as unstressful as possible. Obvious points of interest on the webpage consisting of the main information a user would require in order to effectivley track their progress and stay motivated.

- I tested the site on multiple browsers, including Chrome, Edge, Mozilla, and Opera, and also my own mobile devices on Chrome and Samsung Internet.

- The site was also tested using [BrowserStack](https://live.browserstack.com/dashboard#os=android&os_version=10.0&device=Samsung+Galaxy+S20+Ultra&device_browser=chrome&zoom_to_fit=true&full_screen=true&url=https%3A%2F%2Frscanlon2021.github.io%2FPalmFreeIrishSoap%2Fgallery.html%23carouselExampleControls&speed=1). An online browser and mobile device emulator. I viewed the website and tested its functionality on various browsers on multiple device sizes.

   

### Project Barriers 

1. I couldnt find a solution to retrieving the calander input and using that as the value for the quitDate variable. I used multiple tutorials in an attempt to figure this issue out however I couldnt seem to find a solution to what is in all likelihood a very simple answer. I chose to remove any form of user input from the webpage so as not to confuse the assessor. 
   1. Due to this any values I have, such as quitDate, is hardcoded. 
2. Another bug i encountered is the timer shifts a few pixels left and right each second. Again I couldn't seem to find a solution.
3. With the milestone timeline i wanted the timeline to update without the need for refreshing the page.

### Version Control

- **Git** and **GitHub**

### Deployment

To deploy this page to **GitHub Pages** from its **GitHub** repository, the following steps were taken:

1. Log into **GitHub**.
2. From the list of repositories on the screen, select [**Quit Treker**](https://github.com/RScanlon2021/QuitTreker)
3. At the menu above the repository, select **Settings**.
4. Scroll down to the **GitHub Pages** section.
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
6. Another drop-down menu will appear alongside a save button. Click **Save** which will then refresh the page.
7. Return to the repository and on the right-hand side of the page, underneath **Environments** select **github-pages**.
8. Select **View Deployment**.
9. Your deployed website will appear, copy the URL.
10. Return to the repository and on the right-hand side again select the **Settings** icon and paste the URL into the **Website** input bar, and select **Save Changes**.
11. Your site is now live on **GitHub Pages** and able to access easily from the repository page.

#### How to run this project on an online IDE

1. You must first create a **Gitpod** account [here](https://www.gitpod.io/).
2. The you must install the **Gitpod extension** onto your browser [here](https://www.gitpod.io/docs/browser-extension/).
3. Log in to your **GitHub** account and go to the  [**Quit Treker**](https://github.com/RScanlon2021/QuitTreker) repository.
4. Click on the green **Gitpod** button above the project file list to clone the repository.

#### How to run this project on VS Code

1. Install **VS Code** onto your computer [here.](https://code.visualstudio.com/)
2. Upon being greeted by the *Welcome* tab click on **clone repository**.
3. Enter the following link into the input bar  https://github.com/RScanlon2021/QuitTreker.
4. On the left hand side of the editor click on the **Run and Debug** icon and press the **Run and Debug** button.
5. Select your desired browser from the dropdown and it will then open in a new window.

### Credits

###### Primary

1. The background image was sourced from **ShutterStock** with a standard licence.

###### Acknowledgements

- The Milestone Benefits were sourced from **NHS.uk** and **Healthline.com**.
- I would like to thank Code Institute itself, all their tutors, and my fellow enrollees for any and all assistance they may have given.
- In particular I would like to thank Code Institiute Student Care for accomodating me in what has been a hectic few months personally. I know this isn't up to the standard of my last project but I fully intend on making up for it in the MS3.

### 

### 