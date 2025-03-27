from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend_crop():
    data = request.json
    soil = data['soilType']
    moisture = data['moistureLevel']

    # AI Logic (Simple Example)
    if soil.lower() == "loamy" and moisture == "high":
        crop = "Rice"
    elif soil.lower() == "clay" and moisture == "medium":
        crop = "Wheat"
    else:
        crop = "Corn"

    return jsonify({"crop": crop})

if __name__ == '__main__':
    app.run(debug=True)
