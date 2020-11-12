<?xml version = "1.0"?>
<xsl:stylesheet version = "1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
<xsl:output method = "html" omit-xml-declaration = "no" doctype-system = "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"
doctype-public = "-//W3C//DTD XHTML 1.1//EN"/>
<xsl:template match = "/">
	<html xmlns = "http://www.w3.org/1999/xhtml">
		<body><center><h1>Questions and Answers</h1></center></body>
		<xsl:apply-templates/>

	</html>
</xsl:template>

<xsl:template match = "question">
<head>
<title>Q/Ans</title>
</head>
<body>

	<h2 ><xsl:value-of select = "title"/></h2>
	<h4 >by
		<xsl:value-of select = "author"/>,
	</h4>

	<table style = "border-style: groove; background-color: yellow">
		
		<xsl:for-each select = "answer">
		
		<tr>
			
			<td>
			<xsl:value-of select = "text()"/>
			
			</td>
		</tr>
		</xsl:for-each>
		
	</table>
	<br />
	<b><p  style = "color: red">Last edit: <xsl:value-of select = "lastedit/@time"/>
	</p></b>
</body>
</xsl:template>
</xsl:stylesheet>