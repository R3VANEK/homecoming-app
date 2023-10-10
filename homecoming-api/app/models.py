from datetime import datetime
from app import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)


    def __repr__(self):
        return f"User('{self.name}', '{self.email}')"


class TrustedUsers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    traveler_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    trusted_user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)


class DangerAlert(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    title = db.Column(db.String(100), nullable=False)
    loc_x = db.Column(db.String(100), nullable=False)
    loc_y = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    # content = db.Column(db.Text, nullable=False)
    # localization = db.Column(db.String(100), nullable=True)

    def __repr__(self):
        return f"DangerAlert('{self.title}', '{self.date_posted}')"


class Journey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    finish_time = db.Column(db.DateTime, nullable=True, default=None)
    journeys = db.relationship('SecurityConfirm', backref='security_confirm', lazy=True)



class SecurityConfirm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    journey_id = db.Column(db.Integer, db.ForeignKey('journey.id'), nullable=True)
    start_time = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    loc_x = db.Column(db.String(100), nullable=False)
    loc_y = db.Column(db.String(100), nullable=False)
    
