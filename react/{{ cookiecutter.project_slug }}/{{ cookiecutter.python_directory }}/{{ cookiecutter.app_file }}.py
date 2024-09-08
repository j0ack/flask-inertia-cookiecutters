"""{{ cookiecutter.project_slug }}."""

import os.path as op

from flask import Flask
from flask_inertia import Inertia, render_inertia


ROOT_DIR = op.abspath(op.dirname(op.dirname(__file__)))


def index():
    return render_inertia("Index")


def create_app(config_filename: str) -> Flask:
    app = Flask(
        __name__,
        template_folder=op.join(ROOT_DIR, "templates"),
        static_folder=op.join(ROOT_DIR, "static", "dist"),
    )
    app.config.from_pyfile(f"{config_filename}.py")
    Inertia(app)

    app.add_url_rule("/", "index", index)

    return app
