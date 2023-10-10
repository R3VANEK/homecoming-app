from flask import Blueprint, request, jsonify
from app import db
from app.models import User

users = Blueprint('users', __name__)

# Here is file for users
@users.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data["email"]
    passwd = data["password"]
    query_response = User.query.filter_by(email=email, password=passwd).first()
    if query_response:
        return jsonify({"id": query_response.id}), 200
    return "", 401

@users.route('/register', methods=['POST'])
def register():
    data = request.json
    name = data["name"]
    email = data["email"]
    passwd = data["password"]

    new_user = User(name=name, email=email, password=passwd)

    db.session.add(new_user)
    db.session.commit()

    return "", 200

@users.route('/get-profile-info')
def get_profile():
    data = request.json
    user_id = data["user_id"]
    user_profile = User.query.filter_by(id=user_id).first()
    name = user_profile.name
    email = user_profile.email
    passwd = user_profile.password

    return jsonify({"name": name, "email": email, "password": passwd}), 200