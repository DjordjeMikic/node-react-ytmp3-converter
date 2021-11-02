# Simple Yt to mp3 converter in node and react
### The application is made for training purposes, not for copyright infringement. If the application is misused, I do not bear any responsibility.

#### Installation
```console
user$ git clone https://github.com/DjordjeMikic/node-react-ytmp3-converter.git
user$ cd clonedDirectory
user/clonedDirectory$ npm run complete
```

#### For development usage
Set in front-end/socket.js HOST variable on line 4
```javascript
export const HOST = 'http://localhost:8000'; //Or some other url and port
```
And run it with command
```console
user/clonedDirectory$ npm run dev
```

#### For production usage
Set in front-end/socket.js if you touched it already to '' then build front-end with command from root of repository
```console
user/clonedDirectory$ npm run buildcl
```
And run it with
```console
user/clonedDirectory$ npm start
```
