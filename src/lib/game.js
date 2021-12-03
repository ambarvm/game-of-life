export function updateGrid(rows, width, height) {
	const newRows = Array(height)
		.fill(null)
		.map(() => Array(width).fill(false));

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			let neighbors = 0;
			if (i > 0 && j > 0) if (rows[i - 1][j - 1]) neighbors++;
			if (i > 0) if (rows[i - 1][j]) neighbors++;
			if (i > 0 && j < width - 1) if (rows[i - 1][j + 1]) neighbors++;

			if (j > 0) if (rows[i][j - 1]) neighbors++;
			if (j < width - 1) if (rows[i][j + 1]) neighbors++;

			if (i < height - 1 && j > 0) if (rows[i + 1][j - 1]) neighbors++;
			if (i < height - 1) if (rows[i + 1][j]) neighbors++;
			if (i < height - 1 && j < width - 1) if (rows[i + 1][j + 1]) neighbors++;

			const alive = rows[i][j];
			if (alive && (neighbors > 3 || neighbors < 2)) {
				newRows[i][j] = false;
			} else if (alive) {
				newRows[i][j] = true;
			}

			if (!alive && neighbors === 3) {
				newRows[i][j] = true;
			}
		}
	}

	return newRows;
}
