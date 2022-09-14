# Ad-serving hiring challenge

This project represent a minimal ad-serving SDK that wraps the Google Publisher Tag (GPT) and provides a small API to initiate ad calls.

## Tasks

### 1. Bugfix

If you reload the page several times you will notice that ads are loaded that do not fit the ad slot properly. 

Fix this behavior and request only sizes that fit the ad slot(s).

### 2. Feature

At the moment the ads are getting requested no matter if they are in the viewport.

Implement a simple lazy loading functionality that requests the ads when they enter the viewport. In the `registerAdSlot` function is a marked line where you could start implementing this feature.

### Timing

We expect these tasks to take no more than 4 hours. We will discuss how long you took during the follow up call.

## Setup the project

```bash
$ npm install
```

Will download and install the project dependencies. 

## Run the project in development mode

```bash
$ npm start
```

This will start a local web server and open a browser where a test page gets served and the code runs.
Whenever you do a change to your codebase it will rebuild your project and reload the preview.
