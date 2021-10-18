name=Base App template
description=A basic app template for HyperApps.
text=Click here to learn more about this basic template and a how-to guide on how to create a HyperApps app.
version=TEMPLATE
auth=true
api=true
css=https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
type=html
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
        <h1>Quick Guide to making HyperApps apps</h1>
        <hr>
        <p>
            When you started using HyperApps, You wondered if you could make and submit your own. Check this tutorial on how to make an app, And on how the HyperApps API works.
        </p>
        <h2>App parameters</h2>
        <p>
            This app itself is a base template, So you can copy and paste this code and use it.<br>
            <b><code>NAME</code></b>: Allows you to set a name for your app.<br>
            <b><code>DESCRIPTION</code></b>: Allows you to set a description for your app so your users get to know it better.<br>
            <b><code>VERSION</code></b>: Set a version for your app.<br>
            <b><code>AUTH</code></b>: Asks for authentication permissions that you can then use to show a user profile and user-specific features.<br>
            <b><code>API</code></b>:  Asks for API permissions to store data, Connect to matches, Push notifications, Matchmaking and many, many more options.<br>
            <b><code>CSS</code></b>: This field is for adding custom css, Use <code>default</code> to use the default css, Use <code>none</code> for no css, Or use a URL for custom css.<br>
            <b><code>TYPE</code></b>: Could either be <code>HTML</code> or <code>URL</code>. The URL type does not have permissions to use the HyperApps API, Neither could they use custom CSS.
        </p>
    </body>
</html>