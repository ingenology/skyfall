<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <title>Search for your location - Yorb.it</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" href="/favicon.ico">
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="styles/styles.css"/>
        <script src="scripts/vendor/modernizr.js"></script>

    </head>
    <body>
        <!--[if lt IE 10]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <cfif isdefined("action")>
			<cfset addOut = #replace(address," ","+","all")#>
			<cfset cityOut = #replace(city," ","+","all")#>
				
			<cfhttp method="get" url="http://maps.googleapis.com/maps/api/geocode/xml?address=#addOut#,+#cityOut#,+#state#&sensor=true" result="getAdd"></cfhttp>
			<cfset mydoc = XmlParse(#getAdd.filecontent#)>
			<cfset latOut = mydoc.GeocodeResponse.result.geometry.location.lat.XMLText>
			<cfset longOut = mydoc.GeocodeResponse.result.geometry.location.lng.XMLText>
			<cflocation url="GIBSmap.cfm?zoomIn=7&centerIn=#latOut#,#longOut#&mapType=#mapType#">
			<cfabort>
			<cfoutput>
			Lat: #latOut#<br>
			Long: #longOut#<br>
			<a href="GIBSmap.cfm?zoomIn=7&centerIn=#latOut#,#longOut#">Map It</a>
			</cfoutput>
			<cfabort> 
		</cfif>
        <header>
            <div class="container">
                <div class="logo">
                    <a href="/">
                        <img src="/images/logo.png" alt="Yorb.it" title="Yorb.it Logo" />
                    </a>
                </div>
                <div class="navigation-button">
                    <img src="/images/menu_button.png" />
                </div>
            </div>
        </header>
        <div class="container">
            <div class="modal" id="modal1">
	            <form action="getAddress.cfm?action=true" method="post">
	                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
	                <input type="text" class="location" id="location" name="address" placeholder="Location" />
	                <input type="text" class="date" id="dateIn" name="dateIn" placeholder="Date" />
	                <div class="button-group map-type">
	                    <p>Seach maps by the following</p>
	                    <div class="button first" data="3">
	                        Thermal
	                    </div>
	                    <div class="button" data="2">
	                        Night
	                    </div>
	                    <div class="button last active" data="1">
	                        Geo
	                    </div>
	                </div>
	                <select class="hidden" id="mapType" name="mapType">
	                    <option value="1" selected>CorrectedReflectance_TrueColor</option>
	                    <option value="2">City Lights</option>
	                    <option value="3">MODIS_Aqua_SurfaceReflectance_Bands121</option>
	                </select>
	                <input type="submit" class="btn btn-primary btn-large pull-right" value="Proceed" />
                </form>
            </div>
        </div>


        <script src="scripts/vendor.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>



        <script src="scripts/scripts.js"></script>
</body>
</html>







<!--

<!doctype html>
<html>
<head>
<title>Search for your location - Yorb.it</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body>
<cfif isdefined("action")>
	<cfset addOut = #replace(address," ","+","all")#>
	<cfset cityOut = #replace(city," ","+","all")#>
		
	<cfhttp method="get" url="http://maps.googleapis.com/maps/api/geocode/xml?address=#addOut#,+#cityOut#,+#state#&sensor=true" result="getAdd"></cfhttp>
	<cfset mydoc = XmlParse(#getAdd.filecontent#)>
	<cfset latOut = mydoc.GeocodeResponse.result.geometry.location.lat.XMLText>
	<cfset longOut = mydoc.GeocodeResponse.result.geometry.location.lng.XMLText>
	<cflocation url="GIBSmap.cfm?zoomIn=7&centerIn=#latOut#,#longOut#&mapType=#mapType#">
	<cfabort>
	<cfoutput>
	Lat: #latOut#<br>
	Long: #longOut#<br>
	<a href="GIBSmap.cfm?zoomIn=7&centerIn=#latOut#,#longOut#">Map It</a>
	</cfoutput>
	<cfabort> 
</cfif>

<form action="getAddress.cfm?action=true" method="post">
	Address: <input type="text" name="address"><br>
	City: <input type="text" name="city"><br>
	State: <input type="text" name="state"><br>
	Zip: <input type="text" name="zip"><br>
	Country: <input type="text" name="country"><br>
	<select name="mapType">
		<option value="1">CorrectedReflectance_TrueColor</option>
		<option value="2">City Lights</option>
		<option value="3">MODIS_Aqua_SurfaceReflectance_Bands121</option>
	</select>
	<input type="submit" value="Get Coordinates">
</form>
</body>
</html>
-->