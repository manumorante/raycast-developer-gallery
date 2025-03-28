export const colors = {
  red: '\x1b[31;1m',
  green: '\x1b[32;1m',
  yellow: '\x1b[33;1m',
  blue: '\x1b[34;1m',
  reset: '\x1b[0m'
};

export const print = {
  title: (text) => console.log(`\n${colors.blue}${text}${colors.reset}\n`),
  info: (text) => console.log(`${colors.yellow}${text}${colors.reset}`),
  success: (text) => console.log(`${colors.green}${text}${colors.reset}`),
  error: (text) => console.log(`${colors.red}${text}${colors.reset}`),
  step: (text) => console.log(`${colors.yellow}→ ${text}${colors.reset}`),
  done: (text) => console.log(`${colors.green}✓ ${text}${colors.reset}`),
  path: (text) => console.log(`  ${colors.blue}${text}${colors.reset}`),
}; 