from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.config import Config

db = SQLAlchemy()
migrate = Migrate()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    # with app.app_context():
    #     db.create_all()

    from app.users.routes import users
    from app.tracker.routes import tracker
    from app.dangers.routes import dangers
    from app.errors.routes import errors
    from app.trusted_users.routes import trusted_users
    
    app.register_blueprint(users)
    app.register_blueprint(tracker)
    app.register_blueprint(dangers)
    app.register_blueprint(errors)
    app.register_blueprint(trusted_users)

    return app
