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

	var makeArrow = function (direction) {
		directionToRotation = {
			left: 90*2,
			right: 90*0,
			up: 90*3,
			down: 90*1
		};

		var directedArrow = controls
			.group()
			.attr({
				id: direction + '-arrow',
				transform: 'rotate(' + directionToRotation[direction] + ')',
			});
		return directedArrow.use(arrow);
	};

	var controlFunctions = function () {
		var direct = function (direction) {
			return function (arrow) {
				return function () {
					arrow.fill('black');
				};
			};
		};

		return {
			up: direct('up'),
			down: direct('down'),
			left: direct('left'),
			right: direct('right')
		};
	}();

	leftArrow = makeArrow('left');
	upArrow = makeArrow('up');
	rightArrow = makeArrow('right');
	downArrow = makeArrow('down');

	leftArrow.click(controlFunctions.left(leftArrow));
	leftArrow.on('mousedown', function () {
		leftArrow.fill('red');
	});

	upArrow.on('mousedown', function () {
		upArrow.fill('red');
	});
	upArrow.click(controlFunctions.up(upArrow));

	rightArrow.on('mousedown', function () {
		rightArrow.fill('red');
	});
	rightArrow.click(controlFunctions.right(rightArrow));

	downArrow.on('mousedown', function () {
		downArrow.fill('red');
	});
	downArrow.click(controlFunctions.down(downArrow));
});
