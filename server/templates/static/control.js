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

	// create all the svg buttons
	var buttons = {};
	$.each(arrowDirections, function (index, direction) {
		var rotation = 90*index;
		var directedArrow = controls
			.group()
			.attr({
				id: direction + '-arrow',
				transform: 'rotate(' + rotation + ')',
			});
		directedArrow.use(arrow);
		buttons[direction] = directedArrow;
	});

	var stop = defs.group();
	var stopPolyline = stop.polygon([
		[0,0],
		[0,20],
		[100,20],
		[100,0]
	]);
	buttons.stop = controls.use(stop).attr({
		'transform' : 'translate(-50, 50)'
	});

	var actions = arrowDirections.concat(['stop']);
	// attach on-click and off-click listeners to all arrows
	$.each(actions, function (index, action) {
		var button = buttons[action];

		var clickState = {};
		button.on('mousedown', function () {
			button.fill('red');
			clickState.clicking = true;

			$.ajax({
				url: '/go/' + action,
				type: 'POST'
			}).error(function () {
				console.log('error going ' + action);
			}).success(function () {
				console.log('success going ' + action);
			});
		});

		var notClickedFunction = function () {
			if (!clickState.clicking) {
				return;
			}

			clickState.clicking = false;
			button.fill('black');
		};

		button.on('mouseup', notClickedFunction);
		button.on('mouseout', notClickedFunction);
	});
});
