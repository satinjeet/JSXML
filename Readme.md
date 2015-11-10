A minimal JS XML to JSOn parser.

A simple method to convert XML to json object using DOM parser class

<h2> Sample XML data</h2>
<code>
    &lt;script id="input" type="text/xml"&gt;

        &lt;note&gt;

            &lt;to&gt;Tove&lt;/to&gt;

            &lt;from&gt;Jani&lt;/from&gt;

            &lt;heading&gt;Reminder&lt;/heading&gt;

            &lt;body&gt;

                Dont forget me this weekend!

                &lt;otherwise&gt; i will kill you :)&lt;/otherwise&gt;

            &lt;/body&gt;

            &lt;parallel&gt;Some content&lt;/parallel&gt;

        &lt;/note&gt;

    &lt;/script&gt;
</code>

<hr>

<h3>Usage</h3>
<code>
    &lt;script&gt;

        parser = new xmlP(document.getElementById('input').innerHTML);

        console.log(parser.parseToJSON());

    &lt;/script&gt;
</code>

<hr>

<h2>Output</h2>
<pre>
    {"note":{"to":"Tove","from":"Jani","heading":"Reminder","body":{"otherwise":" i will kill you :)"},"parallel":"Some content"}}
</pre>