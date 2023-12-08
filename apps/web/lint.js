const fs = require('fs/promises');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function main() {
  await delay(500);
  console.log('Linting failed');
  process.exit(1)
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
