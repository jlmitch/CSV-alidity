
## Available Scripts

I used Yarn instead of NPM.  After cloning the Repo, in the project directory, you can run:

### `yarn` || `npm install`

Which ever package manager you prefer. 

### `yarn start` || `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Description

This is my application CSV-alidity.  It was built using create-react-app. It allows the user to upload the provided .csv file.  Upon upload, the code will pull out any duplicate entries (based on user email). I was not able to find the smaller edge cases in the alloted time, and also was not able to siphon through all the non duplicates in the 4 hour window.  Instead, I am displaying a filtered dataset (meaning: does not have the duplicates - based on email) within the Non Duplicates section.

As far as styling goes, I added SASS.  I took some of the colors from the [https://www.validity.com](Validity) website to give it a little visual familiarity.

I'm using a library called Papa Parse to parse the .csv file.  Here's the documentation if you're curious [https://www.papaparse.com](PapaParse)

## What Would I do to improve this code?

Well, firstly, I would finish the requirements.  I'd also write some validation to ensure the user was submiting an actual .csv file.  I did however, add a very small check to ensure that the user adds some type of file, at the very least.  A `window.Alert` is not a very good way to handle it, but it was added more for the sake of time. Another obvious thing I would have done would be to write some unit tests.

I would have also gone in and broke the FileReader component into smaller pieces as it's starting to get a little bloated. In addition to breaking it up, I would organize the file structure a little more neatly.  Overall, I really enjoyed this challenge, and fully intend on finishing it. Thanks for the chance! I'm really hoping that everything works out.  This company seems really great, and exactly what I'm looking for to help cultivate my growth as a developer. 

P.S. I left a couple `console.logs` in the code so that you can see what was returned when testing.