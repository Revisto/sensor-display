from flask import Flask, render_template, request, make_response, jsonify
from flask_socketio import SocketIO
from datetime import datetime
import os
app = Flask(__name__)
app.config['SECRET_KEY'] = 'donsky!'
socketio = SocketIO(app, cors_allowed_origins='*')
class ProcessId:
    def __str__(self):
        return self.process_id
    def update(self, PID):
        self.process_id = PID

process_id = ProcessId()

"""
Get current date time
"""
def get_current_datetime():
    now = datetime.now()
    return now.strftime("%m/%d/%Y %H:%M:%S")

"""
Generate random sequence of dummy sensor values and send it to our clients
"""
@app.route('/update', methods = ['POST'])
def update():
    diesel_consumption = request.args.get('diesel_consumption')
    tempreture = request.args.get('tempreture')
    rpm = request.args.get('rpm')
    gas_mass = request.args.get('gas_mass')
    process_id.update(request.args.get('process_id'))

    socketio.emit('updateSensorData', {'diesel_consumption': diesel_consumption, "tempreture": tempreture, "rpm": rpm, "gas_mass": gas_mass, "date": get_current_datetime()})
    data = {'message': 'Done', 'code': 'SUCCESS'}
    return make_response(jsonify(data), 201)

@app.route('/kill')
def kill():
    os.system(f"kill {process_id}")
    return "SUCCESS"

@app.route('/')
def index():
    return render_template('index.html')

"""
Decorator for connect
"""
@socketio.on('connect')
def connect():
    pass
"""
Decorator for disconnect
"""
@socketio.on('disconnect')
def disconnect():
    print('Client disconnected',  request.sid)

if __name__ == '__main__':
    socketio.run(app)