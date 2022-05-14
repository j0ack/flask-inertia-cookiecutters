# Flask-Inertia cookiecutters

[Cookiecutters templates](https://github.com/cookiecutter/cookiecutter)
for [Flask-inertia](https://github.com/j0ack/flask-inertia).

## Features

This repository provides several cookiecutter templates using [directories](https://cookiecutter.readthedocs.io/en/2.0.2/advanced/directories.html).

It will create a minimal skeleton for a Flask application binded with Inertia
thanks to Flask-Inertia Adapter with the following JS frameworks:

* VueJS 3
  - TypeScript
  - WebPack config
  - A `$route` plugin to access Flask defined routes from JavaScript
* Svelte
  - TypeScript
  - Rollup config

## Use

```
pip install cookiecutter
cookiecutter https://github.com/j0ack/flask-inertia-cookiecutters.git --directory=[vue3|svelte]
```

You will be asked about your basic info that will be used in your project.
