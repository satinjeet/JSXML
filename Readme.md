A minimal JS XML to JSOn parser.

A simple method to convert XML to json object using DOM parser class

<h2> Sample XML data</h2>
``
`    <script id="input" type="text/xml">`
`        <note>`
`            <to>Tove</to>`
`            <from>Jani</from>`
`            <heading>Reminder</heading>`
`            <body>`
`                Dont forget me this weekend!`
`                <otherwise> i will kill you :)</otherwise>`
`            </body>`
`            <parallel>Some content</parallel>`
`        </note>`
`    </script>`
``
<hr>

<h3>Usage</h3>
``
`    <script>`
`        parser = new xmlP(document.getElementById('input').innerHTML);`
`        console.log(parser.parseToJSON());`
`    </script>`
``

<hr>

<h2>Output</h2>
`
    {"note":{"to":"Tove","from":"Jani","heading":"Reminder","body":{"otherwise":" i will kill you :)"},"parallel":"Some content"}}
`