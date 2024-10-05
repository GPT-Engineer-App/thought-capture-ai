# CI/CD Pipeline

This project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD).

## Workflow

The CI/CD pipeline is defined in the `.github/workflows/main.yml` file and consists of the following steps:

1. **Checkout**: The repository is checked out.
2. **Setup Node.js**: Node.js is set up with the version specified in the workflow file.
3. **Install Dependencies**: Project dependencies are installed using npm.
4. **Build**: The project is built using the build script defined in package.json.
5. **Deploy to Netlify**: The built project is deployed to Netlify.

## Netlify Deployment

The project is set up to automatically deploy to Netlify when changes are pushed to the main branch. The Netlify site ID and auth token are stored as GitHub secrets for security.

To modify the Netlify deployment settings, you can update the `netlify.toml` file in the root of the project.

## Environment Variables

Any necessary environment variables should be set in the GitHub repository settings under Secrets and Variables > Actions.

## Monitoring

After each workflow run, you can check the Actions tab in the GitHub repository to see the status and logs of the CI/CD process.