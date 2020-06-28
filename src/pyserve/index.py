# -*- coding:utf-8 -*
#!/usr/bin/env python3
'''Serveur http pour extraction base de donnée mysql
'''
#FLASK
from flask import Flask, request
from flask_httpauth import HTTPBasicAuth
from flask_cors import CORS
#DIVERS
from werkzeug.security import generate_password_hash, check_password_hash
import simplejson as json
from datetime import datetime
#PERSO
from FUTIL.my_logging import *
from tempeDB import *



my_logging(console_level = DEBUG, logfile_level = INFO, details = True)

tempeDB = TempeDB(host = '192.168.10.174', user = 'invite')

app = Flask(__name__)
CORS(app)

auth = HTTPBasicAuth()

users = {
    "angular": generate_password_hash("ralugna!")
}

@auth.verify_password
def verify_password(username, password):
    if username in users:
        return check_password_hash(users.get(username), password)
    return False

@app.route('/')
@auth.login_required
def index():
    return "API pour accés à base de donnés mysql T-HOME"

@app.route('/tempeDB')
@auth.login_required
def t_home():
    id = request.args.get('id')
    date_format = "%Y-%m-%d"
    try:
        date_debut = datetime.strptime(request.args.get('date_debut'),date_format)
    except ValueError:
        date_debut = None
    try:
        date_fin = datetime.strptime(request.args.get('date_fin'),date_format)
    except ValueError:
        date_fin = None
    if id:
        return json.dumps(tempeDB.historique(id, date_debut, date_fin))
    else:
        return "{}"

@app.route('/tempeDB/capteurs')
@auth.login_required
def capteurs():
    return json.dumps(tempeDB.get_capteurs())

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=50889, debug=True)
