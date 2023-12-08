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

process.on('SIGINT', function () {
  console.log('exiting... (SIGINT)');
  process.exit(128 + 2);
});

process.on('SIGTERM', function () {
  console.log('exiting... (SIGTERM)');
  process.exit(128 + 12);
});

process.on('SIGHUP', function () {
  console.log('exiting... (SIGHUP)');
  process.exit(128 + 1);
});
