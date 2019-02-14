input = 6;

createGrid = size => {
	const grid = []
	for(let i=size; i>0; i--) {
		grid.push(new Array(size));
	}
	return grid;
}

output = input => {
	const array=createGrid(input);
	count=1;
	let i = 0;
	let j = 0;
	let dI = 0;
	let dJ = 1;

	while (count <= input**2) {
		array[i][j] = count;
		count++;

		if (j + dJ === input || i + dI === input || j + dJ === -1 || array[i + dI][j + dJ]) {
			let tmpDi = dI;
			dI = dJ;
			dJ = -tmpDi;
		}
		console.log("next count" + count);
		i += dI;
		console.log("i" + i);
		j += dJ;
		console.log("j" + j);
	}
	return array
}

printGrid = target => {
	for (let i = 0; i < target.length; i++) {
		console.log(target[i].join(" "));
	}
}

printGrid(output(input));
console.log(output(input));

// console.log(createGrid(input));