![og.png](./client/public/og.png)

## Introduction
Gc cup is a web app created with react-typescript that records the results, fixtures, standings, and stats for the 2022 AAiT graduating class football tournament. It's the last of a series of projects I made for football tournaments while in University which include motion graphics with css([Walk up video](https://github.com/BarokDG/Walk-Up)) and a web app similar to gc cup for a different tournament with it's own api and an admin dashboard([source](https://github.com/DL-Cup/website-upgrade)).

## Project Overview
On the top level, there are two folders - "client" and "server". 

### Client
This is where all the frontend code is. I've setup netlify to update on new commits to this folder. The main folder structure is from the create-react-app template so it's very basic. The only thing to note is that I've stored the data for the app inside utils/data. I've explained the reasons as to why in the [Server section](#server).

The frontend is made with react-typescript, redux, and tailwindCSS. Although I love writing css, I ~~hate~~ struggle coming up with names for classes. TailwindCSS allows me to write css without having to worry about naming and I also like that it gives me a customizable design system.

### Server
There isn't much at the moment inside the "server" folder. I originally planned to create an api for the web app but I couldn't make time since it was my last semester in University and I was finalizing my final year project. I plan to get back to it soon.

## Prerequisites
- [NodeJS](https://nodejs.org) version 14+

## Installation
Navigate to the client folder and run
```bash
npm install
```
Then run
```bash
npm run start
```
