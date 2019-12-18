## NEM2 Serverless Faucet

A serverless faucet for Catapult using Netlify's Lambda Functions.

**Demo**: [https://nem2-faucet.netlify.com](https://nem2-faucet.netlify.com)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dgarcia360/nem2-serverless-faucet)

## Requirements

*  **Git**
* **NodeJS 12 LTS**
* **yarn**

## Installation

1. Clone the repository.

2. Enter the project.

{% highlight bash %}
cd nem2-serverless-faucet 
{% endhighlight %}

4. Run yarn install.

{% highlight bash %}
yarn install 
{% endhighlight %}

5. Set up the faucet's private key.

{% highlight bash %}
export FAUCET_PRIVATE_KEY="my value"
{% endhighlight %}

6. Start the server.

{% highlight bash %}
yarn run start 
{% endhighlight %}

7. Open ``http://localhost:8080`` in a new browser tab.

## Contributing

Contributions are welcome and appreciated! Check [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

Copyright (c) 2019 David Garcia ([@dgarcia360](https://davidgarcia.dev>)).

Based on [netlify/functions](https://github.com/netlify/functions) boilerplate.

Licensed under MIT license (see [LICENSE.md](LICENSE.md) for details)
