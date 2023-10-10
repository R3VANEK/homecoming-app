from flask import Blueprint, request, jsonify
from app import db
from app.models import TrustedUsers, User

trusted_users = Blueprint('trusted-users', __name__, url_prefix='/trusted-users')

@trusted_users.route('/', methods=['GET'])
def get_all():
    data = request.json
    user_id = data["user_id"]
    query_trusted = TrustedUsers.query.filter_by(traveler_id=user_id).all()
    user_trusted = []
    for tu in query_trusted:
        query_user = User.query.filter_by(id=tu.trusted_user_id).first()
        u = {
            "id": query_user.id,
            "name": query_user.name,
            "email": query_user.email,
            "password": query_user.password # xD
        }
        user_trusted.append(u)
    return jsonify(user_trusted), 200

@trusted_users.route('/', methods=['POST'])
def add_trusted_user():
    data = request.json
    traveler_id = data["user_id"]
    trusted_user_id = data["trusted_id"]
    new_trusted_user = TrustedUsers(traveler_id=traveler_id, trusted_user_id=trusted_user_id)
    db.session.add(new_trusted_user)
    db.session.commit()
    return "", 200

@trusted_users.route('/<int:trusted_id>', methods=['DELETE'])
def i_dont_trust_them_anymore(trusted_id):
    data = request.json
    user_id = data["user_id"]
    untrusted_user = TrustedUsers.query.filter_by(traveler_id=user_id, trusted_user_id=trusted_id).first()
    db.session.delete(untrusted_user)
    db.session.commit()
    return "", 200