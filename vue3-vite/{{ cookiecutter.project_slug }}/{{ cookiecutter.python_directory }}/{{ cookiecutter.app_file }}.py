"""{{ cookiecutter.project_slug }}."""

import os.path as op
import json
from typing import Any, Dict

from flask import Flask
from flask_inertia import Inertia, render_inertia


ROOT_DIR = op.abspath(op.dirname(op.dirname(__file__)))
MANIFEST_FILE = op.join(
    ROOT_DIR,
    "static",
    "dist",
    "manifest.json",
)

def load_manifest() -> Dict[str, Dict[str, Any]]:
    try:
        with open(MANIFEST_FILE) as fi:
            manifest = json.load(fi)
    except:
        manifest = {}

    return {"manifest": manifest}


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

    app.context_processor(load_manifest)

    app.add_url_rule("/", "index", index)

    return app
