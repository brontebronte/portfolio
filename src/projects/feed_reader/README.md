# Feed Reader Test

The project utilizes *Jasmine*, to test the functionality of the Javascript codes written.

## Getting Started

1. There are four test suites- RSS Feeds, The menu, Initial Entries and New Feed Selection.
2. RSS Entries: test that allFeeds var, url and name are defined and  not empty.
3. The Menu: test by default to be hidden and that the click toggles accordingly.
4. Initial Entries: test once async completed, that there is more than one entry.
5. News Feed Selection: ensures new content is loaded, and that they are no duplicates.



### Prerequisites

#### Some useful tips to help you get started:

1. Clone/Download repository
2. Open the folder, click on index.html
3. Change the path on terminal, to your project folder.
4. Get a local 8000 host

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer
  ```

5. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.
6. Open a separate terminal window, and include the commands below (ensure to change the cd again).

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8000
  ```
7. Results of Jasmine text can be seen directly on `index.html`, it will also indicate whether the functions are run accordingly.
8. To test additional functions, you are able to make changes at `spec/feedreader.js` .
