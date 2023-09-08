// Import the necessary libraries.
const sonarqubeScanner = require('sonarqube-scanner');

// Define the SonarQube scanner options.
const scannerOptions = {
  serverUrl: 'http://54.234.65.128:9000/', // Replace with your SonarQube server URL.
  token: 'sqa_f69cc8ce96b2f3ad17601cbe593c06824b1f9861', // Replace with your SonarQube authentication token.
  options: {
    'sonar.sources': 'src',
    'sonar.tests': 'tests',
    'sonar.language': 'js',
    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
    'sonar.testExecutionReportPaths': 'test-report.xml',
    'sonar.projectKey': 'my_nodejs_project',
    'sonar.projectName': 'My Node.js Project',
    'sonar.projectVersion': '1.0.0',
  },
};

// Run the SonarQube scanner.
sonarqubeScanner(scannerOptions, () => {
  console.log('SonarQube scanner finished.');
});
