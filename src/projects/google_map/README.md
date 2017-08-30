# Google Map API

The project showcases five locations in Florence, Italy - two supermarkets and three eateries, utilizing the *Google Map API*.

## Getting Started

1. On the left, there is a menu bar, separated into three main sections.
2. When markers are clicked, an info window will appear, the map will zoom in and the marker color will change to indict you have already seen this marker.
3. The first section showcases three buttons for the markers - show, hide and reset. **Show** will maintain *marker's you've clicked* if you have hidden them from view. **Hide** will temporarily remove the markers. **Reset** will showcase all markers as per-default.
4. To look for other locations around Florence the first section also has a search box.
5. Second section of the menu, continues the markers details, scroll further down for more.
6. Third section contains live updates on the local weather, date and time in Florence utilizing *Weather Underground API*.



### Prerequisites

#### Some useful tips to help you get started:

1. Change the path on terminal, to your project folder.
2. Get a local 8000 host

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer
  ```

3. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.
4. Open a separate terminal window, and include the commands below (ensure to change the cd again).

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8000
  ```
