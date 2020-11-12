<?xml version = "1.0"?>
<xsl:stylesheet version = "1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
<xsl:output method = "html" omit-xml-declaration = "no" doctype-system = "http://www.w3c.org/TR/xhtml1/DTD/xhtml1-strict.dtd" 
doctype-public = "-//W3C//DTD XHTML 1.0 Strict//EN"/>
<xsl:template match = "/">
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>User information</title>
</head>
<body>

	<table border = "1" bgcolor = "pink">
	<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Email</th>
			<th>Topics of Interest</th>
			<th>Last logged in</th>

		</tr>
	</thead>
	<xsl:for-each select = "/user/user_info">
		<tr>
			<td><xsl:value-of select = "@id"/></td>
			<td><xsl:value-of select = "name"/></td>
			<td><xsl:value-of select = "email"/></td>
			<td><xsl:value-of select = "topic"/></td>
			<td><xsl:value-of select = "llt"/></td>
		</tr>
	</xsl:for-each>
	</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>