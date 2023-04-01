from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import xgboost as xgb

app = Flask("__name__")
CORS(app)

with open("final_model.bin", "rb") as f_in:
    (dv, model) = pickle.load(f_in)

@app.route("/", methods=["GET"])
def greet():
    return "Welcome to Spotify Hit Prediction API. POST song data to /predict endpoint to get prediction stats."

@app.route("/predict", methods=["POST"])
def predict():
    song_data = request.get_json()
    X = dv.fit_transform([song_data])
    dX = xgb.DMatrix(X, feature_names=dv.get_feature_names_out())
    y_pred = model.predict(dX)

    prediction = y_pred[0]
    if prediction >= 0.5:
        verdict = "Hit"
    else:
        verdict = "Flop"

    result = {"hit_probability": float(prediction), "verdict": verdict}
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)

