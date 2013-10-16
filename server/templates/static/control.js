$(function () {
	var draw = SVG('controls');
	var defs = draw.defs();

	var arrow = defs.group().attr({
		id: 'rightarrow',
		transform: 'translate(3,-20)'
	});

	var arrowPolyline = arrow.polygon([
		[0,20],
		[10,30],
		[26,30],
		[26,40],
		[46,20],
		[26,0],
		[26,10],
		[10,10]
	]);

	var controls = draw
		.group()
		.attr('transform', 'translate(100,100)');

	var arrowDirections = ['right', 'down', 'left', 'up'];

	// create all the svg arrows
	var arrows = {};
	$.each(arrowDirections, function (index, direction) {
		var rotation = 90*index;
		var directedArrow = controls
			.group()
			.attr({
				id: direction + '-arrow',
				transform: 'rotate(' + rotation + ')',
			});
		directedArrow.use(arrow);
		arrows[direction] = directedArrow;
	});

	// attach on-click and off-click listeners to all arrows
	$.each(arrowDirections, function (index, direction) {
		var arrow = arrows[direction];

		var clickState = {};
		arrow.on('mousedown', function () {
			clickState.clicking = true;
			arrow.fill('red');
			var sendDirective = function () {
				console.log('attempting to go ' + direction);
				$.ajax({
					url: 'http://localhost:5000/go/' + direction,
					type: 'POST'
				}).error(function () {
					console.log('error going ' + direction);
				}).success(function () {
					console.log('success going ' + direction);
				});
			};

			sendDirective();
			clickState.intervalid = window.setInterval(sendDirective, 100);
			console.log(clickState);
		});

		var notClickedFunction = function () {
			if (!clickState.clicking) {
				return;
			}

			clickState.clicking = false;
			arrow.fill('black');
			console.log(clickState);
			window.clearTimeout(clickState.intervalid);
		};

		arrow.on('mouseup', notClickedFunction);
		arrow.on('mouseout', notClickedFunction);
	});
});
