> This project is ARCHIVED. You can still fork it, but to submit issues or propose changes, go to https://github.com/cfpaige/WalkthroughApp/issues instead.

# BuddyApp

A web app for social activation, making it easy for people who want to get involved in new activities to connect with others with similar interests.

![BuddyApp front page screencap](/buddyApp-screencap.png)


## Motivation

Inspired by ![NAS buddy-mentor program](https://www.autism.org.uk/services/community/befriending-mentoring.aspx), but aimed at 18+.

## Overview

1. **Home page** with a link to a choice of official events (currently sourced from Eventbrite only) and a second link to a user-generated calendar.
2. **Events** (also clickthrough from Browse Events button) displays current list of nearby events.
	- On click, an event displays a modal with info, time and location.
	- In development: secure login to connect with others interested in attending the same event.
3. **Calendar** (also clickthrough from Calendar button) links to a moderated public Google calendar with local activities organized by users.
	- In development: secure login to connect with others interested in attending the same activity.
4. **About/Contact page** with information about the app, testimonials, and contact form.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#### Prerequisites

The app has been tested on and is compatible with IE 11, Edge 18, Firefox 66, Safari =< 11 12, Opera 60, Chrome 74, iOS =< 10 11 12, and Android =< 3 4*.

* Most Android devices from 4.4 onwards use Chrome as the default browser, older versions use the original Android stock browser.

Standard system requirements for installation:

|  | Windows requirements | Mac requirements | Linux requirements |
|:---|:---:|:---:|:---:|
|**Operating system**|Windows 7 or later|Mac OS X Yosemite 10.10 or later 64-bit|Ubuntu 12.04+, Debian 8+, openSUSE 12.2+, or Fedora Linux 17+|
|**Processor**|Intel Pentium 4 or later	Intel|Intel Pentium 3 / Athlon 64 or later|
|**Memory**|2 GB minimum, 4 GB recommended|
|**Screen resolution**|1280x1024 or larger|
|**Application window size**|1024x680 or larger|
|**Internet connection**|Required|

#### Installation

Fork or clone the repository from https://github.com/cfpaige/BuddyApp.

![BuddyApp GitHub repository page screencap](/installation.png)

As of 6/22/2019 Facebook login is not integrated and the app has no dependencies.

#### Deployment

You can deploy within GitHub, or on your preferred server. To do the latter, you will need to:
- have access to DNS record management or know the people to contact;
- set up the DNS records and make sure that all the settings are correct;
- set up and test the website on the production server (where it will live);
- set up email;
- back up any old site BuddyApp would be replacing (if applicable) and deploy the new one;

#### Usage

The app in its current form does not have full functionality. (Most notably, it is not linked to a secure database and does not offer a way of storing users' favorites and contacts.)

#### Built With [![Build Status](https://travis-ci.com/cfpaige/BuddyApp.svg?branch=master)](https://travis-ci.com/cfpaige/BuddyApp)

![Virtual Studio Code](https://code.visualstudio.com/)

**APIs used:** 
- Eventbrite
- Google Geolocation
- Google Reverse Geocode
- Google Calendar
- Facebook SDK
- Firebase SDK

**Additional technologies and languages:**
- CSS grids
- Bootstap
- HTML-5 canvas
- Algolia (search functionality, in development)
- Travis CI (testing, in development)

The team used continued integration process throughout development. Logic functions were built in independent modules and kept separate until fully functional to avoid bugs and redundancies.

#### Contributing

Use the Issues feature of GitHub to suggest changes or fixes.

![GitHub Issues menu screencap](/issues.png)

#### Authors

- **cfpaige** - https://github.com/cfpaige?tab=repositories
- **jacobprimehd** - https://github.com/jacobprimehd?tab=repositories
- **Liu82** - https://github.com/Liu82?tab=repositories
- **christinmd** - https://github.com/christinmd?tab=repositories

#### License

To comply with the licenses of some of the components used, BuddyApp is licensed under the MIT License (https://choosealicense.com/licenses/mit).