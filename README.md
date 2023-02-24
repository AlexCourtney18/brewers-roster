# Brewers-Roster

## Description
This tool displays the Milwaukee Brewers roster and allows the user to view additional information about each player. The user can filter players by their position by clicking on the position buttons near the top of the page. The site is styled to be responsive on all screen sizes. The site was built using Vue 3 for the front end. The data is handled using the json-server npm package to mimic the functionality of a server based API while using local data.

The site takes the abreviated data and converts it back to the full word for ease of use. For instance, the pitcher position is abbreviated as "P" in the data file. The site will look for that abbreviation and instead render the full word on the page.

[Demonstration Video](https://watch.screencastify.com/v/WS21C4liGC8B8bUu3NGW)
## Installation
To install the application, clone the repository to your local machine. Once downloaded, navigate to the root of the file in your terminal and enter the following command to install required depdendencies:
```
npm install
```
*Note - it is important to confirm you are in the root of the application before using the npm install command to ensure all dependencies are installed correctly. The website functions in your local web browser.

## Usage
Once the application is installed, open the project in your preferred code editor. To start the application, run the following commands **in two separate terminals**.
```
npm run serve
```
```
npx json-server --watch data/db.json
```
Once both commands have been run, navigate to the terminal where you ran "npm run serve". Control click on the link "App running at: - Local:" Your two terminals should look as follows if the site was started correctly:

![vue-terminal](/src/assets/terminal1.PNG)
</br>
__________________________________________________________________________________________________
![json-server-terminal](/src/assets/terminal2.PNG)

### Additional Screenshots of Application
![homepage-screenshot](/src/assets/home.PNG)
</br>
![filtered-results-screenshot](/src/assets/filtered.PNG)
</br>
![individual-player-screenshot](/src/assets/individual.PNG)
