$(function () {
	var draw = SVG('controls');
	var defs = draw.defs();

	/* ROBOT SVG */

	var robot = defs.group().attr({
		transform: 'translate(0,0)'
	});

	halfWidth = 20;
	robot.polygon([
		[0,0], // a
		[halfWidth - 8,0], // b
		[halfWidth - 8,10], // c
		[halfWidth,10], // d
		[halfWidth,30], // e
		[halfWidth + 5,30], // f
		[halfWidth + 5,35], // g
		[halfWidth - 4,35], // h
		[halfWidth - 4,15], // i
		[halfWidth - 5,15], // j
		[halfWidth - 5,45], // k
		[halfWidth,45], // l
		[halfWidth,50], // m
		[halfWidth - 10,50], // n
		[halfWidth - 10,40], // o
		[0,40] // p
	]);

	draw.use(robot).attr({
		transform: 'translate(150,0) scale(6,6)'
	}).fill('grey');
	draw.use(robot).attr({
		transform: 'translate(150,0) scale(6,6) matrix(-1, 0, 0, 1, 0, 0)'
	}).fill('grey');


	/* button SVG */

	var arrow = defs.group().attr({
		id: 'rightarrow',
		transform: 'translate(3,-20)'
	});

	arrow.polygon([
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
		.attr({transform: 'translate(150,130)'});

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
	stop.polygon([
		[0,0],
		[0,20],
		[100,20],
		[100,0]
	]);
	buttons.stop = controls.use(stop).attr({
		transform: 'translate(-50, 50)'
	});

	var actions = arrowDirections.concat(['stop']);
	// attach on-click and off-click listeners to all arrows
	$.each(actions, function (index, action) {
		var button = buttons[action];

		var clickState = {};
		button.on('mousedown', function () {
			button.fill('#0f0');
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
