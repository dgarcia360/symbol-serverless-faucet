## NEM2 Serverless Faucet

[![Netlify Status](https://api.netlify.com/api/v1/badges/987ec6b8-8c50-41ff-b0a0-d54b25935ca0/deploy-status)](https://app.netlify.com/sites/nem2-faucet/deploys)

A serverless faucet for Catapult using Netlify's Lambda Functions.

**Demo**: [https://nem2-faucet.netlify.com](https://nem2-faucet.netlify.com)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dgarcia360/nem2-serverless-faucet)

## Requirements

* Git
* NodeJS 12 LTS
* yarn

## Installation

1. Clone the repository.

2. Enter the project.

```
cd nem2-serverless-faucet 
```

3. Run yarn install.

```
yarn install 
```

4. Set up the faucet's private key.

```
export FAUCET_PRIVATE_KEY="my value"
```

5. Start the server.

```
yarn run start 
```

6. Open ``http://localhost:8080`` in a new browser tab.

## Contributing

Contributions are welcome and appreciated! Check [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

Copyright (c) 2019 David Garcia ([@dgarcia360](https://davidgarcia.dev>)).

Based on [netlify/functions](https://github.com/netlify/functions) boilerplate.

Licensed under MIT license (see [LICENSE.md](LICENSE.md) for details)
