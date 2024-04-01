# SWAPI SPANISH - Serverless Nest.js Application

SWAPI SPANISH is a serverless application built with Nest.js, designed to provide information about some start wars planets in Spanish. The application is deployed using a serverless architecture on AWS Lambda and is connected to AWS DynamoDB for data storage.

## Endpoints

The application provides the following endpoints:

### Get Planets

- **Endpoint**: `/planetas`
- **Method**: `GET`
- **Handler**: `dist/main.getPlanets`
- **Description**: Retrieves a list of all planets.

### Get Planet by ID

- **Endpoint**: `/planetas/{id}`
- **Method**: `GET`
- **Handler**: `dist/main.getPlanetById`
- **Description**: Retrieves information about a specific planet by its ID.

### Save Planet

- **Endpoint**: `/planetas`
- **Method**: `POST`
- **Handler**: `dist/main.savePlanet`
- **Description**: Saves information about a new planet.

## Deployment

The application is deployed using the Serverless Framework to AWS Lambda. Ensure that you have the necessary AWS credentials set up and configured in your environment.

To deploy the application, run the following command:

```
serverless deploy --stage production
```


## AWS DynamoDB

The application is connected to AWS DynamoDB for data storage. Make sure that your DynamoDB table is correctly configured and accessible by the application.

## Local Development

To run the application locally for development purposes, you can use the following command:

```
npm run start:dev
```


## Environment Variables

Ensure to set the following environment variables either in your local environment or in your AWS Lambda configuration:

- `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
- `AWS_REGION`: The AWS region where your DynamoDB table is located.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.

