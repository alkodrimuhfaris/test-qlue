<h1 align="center">Dashboard App for Table, Chart and Map</h1>

Dashboard App with table and chart visualisation and map with places API by google, intuitive and great user experience with responsive display on desktop/pc and phone/tablet

## Built with
[![React Router Dom](https://img.shields.io/badge/React%20Router%20Dom-v5.2.0-orange)](https://reactrouter.com/)
[![Redux](https://img.shields.io/badge/Redux-v4.0.5-purple.svg?style=rounded-square)](https://redux.js.org/)
[![Reactstrap](https://img.shields.io/badge/Reactstrap-v8.5.1-orange)](https://reactstrap.github.io/)
[![amCharts v4](https://img.shields.io/badge/amCharts-v4-blue)](https://www.amcharts.com/docs/v4/)


## Requirements
1. <a href="https://nodejs.org/en/download/">Node JS</a>
2. Node_modules
3. Physical device or Android emulator
4. Code editor (Visual Studio Code)
5. Web Browser (Google Chrome)
6. API Key from Google Maps

## How to run the app?
1. Go to `./public/index.html`
2. In line `31` change the line to be</br>
``` html
<script src="https://maps.googleapis.com/maps/api/js?key=[YOUR-API-KEY-HERE]&libraries=places"></script>

```
3. Add your API key to `REACT_APP_GOOGLE_API_KEY` in your `.env` file
4. Open app's directory in CMD
5. Type `yarn install`
6. Type `yarn start`

## Documentation
1. `/table`: route for rick and morty table visualisation from [Rick and Morty API](https://rickandmortyapi.com/api)
2. `/chart`: route for COVID-19 table, and chart visualisation from Indonesian COVID-19 API from [Kawal Indonesia API](https://api.kawalcorona.com/indonesia) and [Data Covid](https://data.covid19.go.id/public/api) with [![amCharts v4](https://img.shields.io/badge/amCharts-v4-blue)](https://www.amcharts.com/docs/v4/)
3. `/map`: route for google map from Google Places API and Maps for JavaScript API

## Screenshot
<img src='https://drive.google.com/uc?id=1Dcgj0ei416a3aoRLkvaT_g5bLa8K7hls' width='25%'><img src='https://drive.google.com/uc?id=1GsBAZJferlEc9qi-XMGwSacZmEBPVP6V' width='25%'>

<img src='https://drive.google.com/uc?id=10cyZWPsY00b8uMSN7WsEQoTbmL9evotx' width='25%'>


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**


