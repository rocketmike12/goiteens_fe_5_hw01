let myName = "Михайло";

let windows93 = { name: "windows93", url: "https://windows93.net" };

let firstNumber = 12;
let secondNumber = 93;

let colors = ["Червоний", "Зелений", "Синій"];

export default function App() {
	return (
		<>
			<h1 class="app-title">{myName}</h1>
			<p class="app-text">Ласкаво просимо до нашого сайту!</p>
			<img class="app-image" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/White_cat_watching_Wikipedia.jpg" alt="cat watching Wikipedia" />
			<a href={windows93["url"]} class="app-link">
				{windows93["name"]}
			</a>

			<p class="app-text">Сума чисел: {firstNumber + secondNumber}</p>

			<h2 class="app-list-title">Список кольорів:</h2>
			<ul class="app-list">
				{colors.map((color) => (
					<li><p>{color}</p></li>
				))}
			</ul>
		</>
	);
}
