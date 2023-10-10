from flask import Blueprint, json, jsonify, request
from app import db
from app.models import DangerAlert

dangers = Blueprint('dangers', __name__, url_prefix='/dangers')


@dangers.route('/')
def get_dangers():
    query = DangerAlert.query.all()
    result = []
    for o in query:
        result.append(
            {
                "id": o.id,
                "title": o.title,
                "loc_x": o.loc_x,
                "loc_y": o.loc_y,
                "date_posted": str(o.date_posted),
            }
        )
    return jsonify(result), 200
    

@dangers.route('/report', methods=['POST'])
def report_danger():
    data = request.json
    new_alert = DangerAlert(title=data['title'], loc_x=data['loc_x'], loc_y=data['loc_y'])
    db.session.add(new_alert)
    db.session.commit()
    return '', 200