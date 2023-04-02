# Trendify

A powerful machine learning driven website to predict a song's TRUE popularity on the basis of song's characteristics, ignoring its advertisements and investments.
Its based over a machine learning model (link) developed by us.

## Screenshot
![WhatsApp Image 2023-03-12 at 23 23 40](https://user-images.githubusercontent.com/115351696/224563341-71f7bce0-f75e-4f30-a9f4-45a318c6de8d.jpg)
![WhatsApp Image 2023-03-12 at 23 23 51](https://user-images.githubusercontent.com/115351696/224563378-c5eef2b0-a241-438c-8ded-01f3a49943d0.jpg)
![WhatsApp Image 2023-03-12 at 23 24 26](https://user-images.githubusercontent.com/115351696/224563387-1fe8e860-41db-4c63-96c5-b36e34de9452.jpg)
![WhatsApp Image 2023-03-12 at 23 24 27](https://user-images.githubusercontent.com/115351696/224563401-a90fce89-4cad-477c-8586-a883a636eaca.jpg)
![WhatsApp Image 2023-03-12 at 23 25 45](https://user-images.githubusercontent.com/115351696/224563416-e4c56fc4-3e85-4fd1-b6bc-72ba5cd712ab.jpg)
## Local Setup

CURRENTLY UNAVAILABLE !!!

Either download a [Zip file](https://github.com/Spotify-Hit-Pedictor/Trendify/archive/refs/heads/main.zip)
OR
Fork the repository and clone it.

Open the project directory over terminal and run `npm i`.

Over the terminal run `python app.py`.

Create another terminal and run `npm start`.

It runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Features Implemented

- CREATE: Predicting popularity on the basis of user given parameters.
- Predict(under development): Analyzing an existing songs features to get its true popularity.

## Technologies/Libraries/Packages Used

Languages: ReactJS, SCSS, Python

Packages: sass, axios, @mui/material, @mui/icons-material, react, react-DOM, react-routerDOM

Python Libraries: flask, flask_cors, pickle, xgboost

## Team Member

Dev Kudawla
(IIIT Gwalior, 2021 IMG-022)

Himanshu Sharma
(IIIT Gwalior, 2021 IMG-028)

Satyabrat Ojha
(IIIT Gwalior, 2021 IMG-054)

## Song's features

- danceability: Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable. 

- energy: Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy. 

- loudness: The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db. 
	   
- mode: Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.

- speechiness: Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks. 

- acousticness: A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic. The distribution of values for this feature look like this:

- instrumentalness: Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0. The distribution of values for this feature look like this:

- liveness: Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.

- valence: A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).

- tempo: The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration. 

- duration: 	The duration of the track in seconds.

- time_signature: An estimated overall time signature of a track. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure).

- sections: The number of sections the particular track has. This feature was extracted from the data recieved by the API call for Audio Analysis of that particular track.

