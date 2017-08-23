# A dive into Electron

Another technology that hugely caught my eye in late 2016, Electron.

_I needed Electron back in 2009 when I was learning Visual Basic!_ 

In a nutshell, Electron is a nicely packaged up HTML/CSS/JS project. Just like any website/webapp, Electron will run web technologies **on your desktop** using NodeJS and Chrome's Chromium V8 engine.

I wanted to build a little home/base/homebase for my team at the Alacrity Foundation. An app they could constantly keep running in the background, and eventually would pull in a plethora of infomation. Latest Slack messages, pull request alerts/notifications, new emails from potential clients.. I mean the possibilities are endless. These can all be polled and managed with (lots of) Javascript but it was something I was willing to do. Unfortunately, our project at the time was going through some rough stages, and other priorities arose. 

== Official Electron Docs ==

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/victor-sopot/dojo
# Go into the repository
cd dojo
# Install dependencies
npm install
# Run the app
npm start
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

## Other Example Apps

For more example apps, see the
[list of boilerplates](http://electron.atom.io/community/#boilerplates)
created by the awesome electron community.

#### License [CC0 1.0 (Public Domain)](LICENSE.md)
