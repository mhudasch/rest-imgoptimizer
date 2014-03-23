## rest-imgoptimizer ##
Author: Martin Hudasch

Der rest-imgoptimizer ist ein node webservice-wrapper um das [imgoptimizer](https://github.com/thecodingwhiteknight/rest-imgoptimizer.git) modul.


### Vorraussetzungen ###

* Eine node Runtime z.B. von [hier](http://nodejs.org/).
* node Executable im PATH (wird meisstens bei der Installation erledigt).
* `npm install` im rest-imgoptimizer Verzeichnis ausführen.

### Verwendung ###

#### Kommandozeile ####
<br/>
`rest-imgoptimizer`

`rest-imgoptimizer --port 8080`

#### REST ####

Request

POST <br/>
`http://server:8080/optimize`

HEADERS <br/>
`Content-Type: application/json`

PAYLOAD <br/>
`{ "type":"gif", "base64": "...." }`

Erfolg Respose <br/>
<code>
{<br/>
    "message": "...report...",<br/>
    "originalSize": 200000,<br/>
    "resultSize": 145000,<br/>
    "saving": 55000,<br/>
    "savingPercentage": 27.5,<br/>
    "resultBase64": "....",<br/>
    "took": "5"<br/>
}<br/>
</code>

Fehler Respose <br/>
<code>
{<br/>
    "error": "...report..."<br/>
}<br/>
</code>
