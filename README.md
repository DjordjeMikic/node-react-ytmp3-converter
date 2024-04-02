# Simple Yt to mp3 converter in node and react

### The application is made for training purposes, not for copyright infringement. If the application is misused, I do not bear any responsibility.

App has option to convert yt video to mp4 (video) or mp3 (audio) format

#### Installation

```bash
git clone <REPO_URL>
cd <REPO_URL>
```

#### Install dependencies

In the root of the app

npm:

```bash
npm install
```

yarn:

```bash
yarn
```

For next speps we will user only yarn commands form npm there is command prefix run.

#### Start in development mode

Client:

```bash
yarn dev:client
```

Server:

```bash
yarn dev:server
```

#### Build

Client:

```bash
yarn build:client
```

Server:

```bash
yarn build:server
```

#### Start production mode

First you must build the application, described in previous instruction

Client:

```bash
yarn start:client
```

Server:

```bash
yarn start:server
```

#### Lint

Client:

```bash
yarn lint:client
```

Server:

```bash
yarn lint:server
```

#### Format

Fix files with prettier

Client:

```bash
yarn format:client
```

Server:

```bash
yarn format:server
```

## Docker

Client:

```bash
cd packages/client &&
docker build . -t client &&
docker run -dp 5174:5174 client
```

Server:

```bash
cd packages/server &&
docker build . -t server &&
docker run -dp 8000:8000 client
```

### Docker Compose

```bash
docker-compose up
```
