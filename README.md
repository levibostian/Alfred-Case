# Alfred-Case

Alfred workflow to convert some text into a different case format. 

![screenshot](screenshot.png)

## Install

```
$ npm install --global alfred-case
```

*Requires [Node.js](https://nodejs.org) 8+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*

*Note: If you are using nvm on your machine, you may get a message when trying to use this workflow "couldn't find binary node". I fixed this issue by adding `ln -s $(command -v node) /usr/local/bin/node` to my `.bashrc` file which will create a symlink from the NVM node version.*

## Usage

In Alfred, type `case`, space, then enter in the text that you would like converted into a different case. After a second, you will see a list of your entered text converted into another case. 

Hit <kbd>Enter</kbd> to copy the converted text to the clipboard.

## Development

If you go through the getting started guide for [alfy](https://github.com/sindresorhus/alfy), you will notice that when you develop using alfy, your project exists inside of your Alfred workflow directory. This is handy because it makes testing your workflow much easier because you can make an edit to your `index.js` file, save, then open alred and run your workflow. 

Therefore, being able to develop for this plugin is not as easy as "git clone" and you're done. Instead, you need to 

## Credits 

* [alfy](https://github.com/sindresorhus/alfy) - Made it pretty easy to crete a workflow!

## License

MIT. [See license](LICENSE.md).
