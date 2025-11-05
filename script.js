//your JS code here. If required.

const tbody = document.querySelector('#output');

function randomTime() {
      return Math.floor(Math.random() * 3) + 1;
}

    function createPromise(name) {
      const time = randomTime();
      return new Promise((resolve) => {
        const start = performance.now();
        setTimeout(() => {
          const end = performance.now();
          const seconds = ((end - start) / 1000).toFixed(3);
          resolve({ name, time: seconds });
        }, time * 1000);
      });
    }

async function runPromises() {
      const promises = [
        createPromise('Promise 1'),
        createPromise('Promise 2'),
        createPromise('Promise 3')
      ];

      const startAll = performance.now();
      const results = await Promise.all(promises);
      const endAll = performance.now();
      const totalTime = ((endAll - startAll) / 1000).toFixed(3);

      tbody.innerHTML = '';

      results.forEach((res) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${res.name}</td>
          <td>${res.time}</td>
        `;
        tbody.appendChild(row);
      });

      const totalRow = document.createElement('tr');
      totalRow.innerHTML = `
        <td>Total</td>
        <td>${totalTime}</td>
      `;
      tbody.appendChild(totalRow);
    }

    // Run all promises
    runPromises();



