# Trekk

## Table Of Contents

  - [Description](#description)
  - [Stack](#stack)
  - [Final Product](#final-product)
  - [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Contributions](#contributions)

## Description
Trekk is a mobile application that allows users to create and share custom augmented reality tours, or 'Trekks'. A user is able to customize their own Trekks by submitting marker images with their corresponding media to be displayed. These media can be in the form of a text description, image url and/or video url. Guests can access private Trekks via a randomly generated access code provided by the Trekk owner.

## Stack
### Back-End
- Node.js
- Ruby
- Rails
- Postgres SQL

### Front-End
- React
- React Native
- ViroReact AR
- Javascript 

## Final Product

### Within a Trekk, the camera recognizes a marker, records its coordinates, and anchors it into scene with precision using depth perception.

!["Within a Trekk, the camera recognizes a marker, records its coordinates, and anchors it into scene with precision using depth perception."](https://media.giphy.com/media/gkQQp91BqgcFQgXFnl/giphy.gif)

### A marker is unique in that it spawns the specific media a User assigned to it.

!["A marker is unique in that it spawns the specific media a User assigned to it."](https://media.giphy.com/media/J5SNU4zC33NlB9eRfF/giphy.gif)

### Access a Trekk without an account via an Access Code. 

!["Access a Trekk without an account via an Access Code."](https://media.giphy.com/media/lmuVuuRTuH693S2mC0/giphy.gif)

### Login or Register to view and create your Trekks.

!["Login or Register to view and create your Trekks."](https://media.giphy.com/media/YkzJGTpLNLAqz5CwcJ/giphy.gif)

### Swipe to copy an Access Code or create a new Trekk.

!["Swipe to copy an Access Code or create a new Trekk."](https://media.giphy.com/media/M9mW6Z6kNOQSCQO4lw/giphy.gif)

### View a current Trekk's markers and the media that they spawn.

!["View a current Trekk's markers and the media that they spawn."](https://media.giphy.com/media/VJrexALHccvvmXEHq4/giphy.gif)

### Edit a Trekk to add markers and attach media.

!["Edit a Trekk to add markers and attach media."](https://media.giphy.com/media/lOakwzVOI9dqx830oJ/giphy.gif)




## Getting Started

Our Ruby on Rails/PostgreSQL database and back-end logic is hosted on Heroku.

To access the codebase for the back-end of Trekk (trekk-api), simply click [here](https://github.com/JacksonStark/trekk-api).
 

1. Clone this repo and follow these steps:
- `cd trekk`
- `npm install`
- `npm start`

2. Download the ViroMedia app on your mobile app store.

3. Copy the Ngrok link inside your terminal and enter it into the Testbed input within the ViroMedia app.

4. Have fun and be creative!


## Dependencies
  ```
  react: 16.8.3,
  react-native: ^0.59.9,
  react-viro: 2.17.0
  axios: ^0.19.0,
  ngrok: ^3.2.5,
  react-native-elements: ^1.2.7,
  react-native-vector-icons: ^6.6.0,
  react-swipeable-views-native: ^0.13.2,
  ```

## Contributions
  This app was created and pair programmed by...

- https://github.com/adamleseur
- https://github.com/FrankZou21
- https://github.com/JacksonStark
