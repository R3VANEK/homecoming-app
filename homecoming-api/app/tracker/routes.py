from flask import Blueprint, request
from app.models import *
from app import db


tracker = Blueprint('tracker', __name__, url_prefix='/tracker')

@tracker.route('/collect-location', methods=['POST'])
def collect_location():
    data = request.json
    s = SecurityConfirm(loc_x=data['loc_x'], loc_y=data['loc_y'])
    db.session.add(s)
    db.session.commit()
    return '', 200