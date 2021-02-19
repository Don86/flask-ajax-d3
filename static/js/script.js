$(function () {

	var $val1 = $("#val1")
	var $val2 = $('#val2')

	$('button').click(function () {
		var user = $('#num1').val();
		var pass = $('#num2').val();
		$.ajax({
			type: 'POST', // make a POST request to /calc_func
			url: '/calc_func',
			data: $('form').serialize(),
			success: function (response) {
				console.log(response);
				//console.log(typeof(response));
				$val1.append(response.height);
				$val2.append(response.width);

				// directly draw straight from here
				var svg = d3.select("div.myGraph")
					.append("svg")
					.attr("width", 400)
					.attr("height", 200);

				const x1 = 20;
				const x2 = 20 + response.width;
				const y1 = 30;
				const y2 = 30 + response.height;

				var data = [{ x1: x1, x2: x2, y1: y1, y2: y2 }];

				var rects = svg.selectAll("div.myGraph")
					.data(data)
					.enter()
					.append("rect")
					.attr("x", d => d.x1)
					.attr("y", d => d.y1)
					.attr("width", d => d.x2 - d.x1)
					.attr("height", d => d.y2 - d.y1)
					.attr("fill", "teal");
			},
			error: function (error) {
				console.log(error);
			}
		});
	});
});