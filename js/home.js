/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-23 10:17:56
 * @version $Id$
 */

$(init)
function init() {
	$("select").click(function() {
		$("#_input").val($("#select option:selected").text());
	})
	
}