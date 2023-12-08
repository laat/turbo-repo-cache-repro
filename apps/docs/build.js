const fs = require('fs/promises');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function main() {
  await delay(2000);
  await fs.mkdir('dist', { recursive: true });
  await fs.writeFile('dist/output.txt', 'Hello World!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
