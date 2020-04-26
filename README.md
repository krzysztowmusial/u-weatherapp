|  | Weather-App |
| ------ | ------ |
| Category | University Project |
| Date | 26.04.20 |
| Demo | [GitHub](https://krzysztowmusial.github.io/weather-app/) |

### Description
Small, simple project for my studies.
Shows the ability to fetch data from the API, I guess.

### Important
To make it work on GitHub Pages I had to add a custom url to the form action:
```sh
<form action="https://krzysztowmusial.github.io/weather-app/" method="GET">
```
If you want to clone this repository remember to change this line to:
```sh
<form action="/" method="GET">
```
Also have in mind that this app is using my API key, remember to change it for your own:
```sh
let key = "&appid=<put your key here>";
```
