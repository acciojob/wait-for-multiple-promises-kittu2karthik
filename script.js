
const output = document.querySelector('#output');

function createPromise(promise){
	return new Promise((res, rej) => {
		let time = Math.floor(Math.random() * 3) + 1;
		let start = performance.now();
		setTimeout(() => {
			let end = performance.now();
			let executedTime = ((end - start) / 1000).toFixed(3);
			res({name: promise, executedTime: executedTime});
		}, time * 1000);
	})
}

const promise1 = createPromise('promise1');
const promise2 = createPromise('promise2');
const promise3 = createPromise('promise3');


const totalStart = performance.now();

Promise.all([promise1, promise2, promise3]).then((results) => {
  const totalEnd = performance.now();
  const totalTime = ((totalEnd - totalStart) / 1000).toFixed(3);

  output.innerHTML = '';

  results.forEach((el) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${el.name}</td>
      <td>${el.executedTime}</td>
    `;
    output.appendChild(row);
  });

  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
  <tfoot>
    <td>Total</td>
    <td>${totalTime}</td>
   </tfoot>
  `;
  output.appendChild(totalRow);
});