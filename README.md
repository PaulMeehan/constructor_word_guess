# ProjectTitle

### Programmer: Paul Meehan
### Date: 3/2/2019

**Purpose:**
This application is a Command Line Interface program that is similar to the classic game "Hangman".  The application randomly picks
a word or phrase and displays an underscore character in place of each letter.  As the user guesses correct letters, the application will reveal those letters in their correct location.  The game continues until all of the letters of the phrase have been guessed or the user runs out of guesses.

A video demonstration of this application is available here:

[place link here]

**User instructions:**
Once the game starts, the application will display the secret word or phrase with underscores in place of each letter.  Note that spaces within the phrase will be displayed automatically and do not need to be guessed.

When prompted, type a letter of the alphabet and press Enter.  The game will tell you whether your guess matches one or more of the letters in the secret phase.  It will then diplay the phrase with the guessed letters in their correct locations.

Win the game by guessing all of the letters of the phrase before you run out of guesses (the maximum number of guesses is 5 more than the number of letters in the phrase).

The next game will automatically start with a new secret phrase.


**Technical information:**

* Software needed:
   * Visual Studio
   * Node

* Installation instructions:
   1. Copy the game to a local folder.
   1. Open the folder in Visual Studio
   1. Open a terminal window
   1. Install the necessary modules by entering "npm init"
   1. Start the game by entering "node index"
