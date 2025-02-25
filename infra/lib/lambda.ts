import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecr from 'aws-cdk-lib/aws-ecr'
import * as lambda from 'aws-cdk-lib/aws-lambda'

export class LambdaCdk extends cdk.Stack {

    constructor(scope: Construct, id:string, props: cdk.StackProps){
        super(scope, id, props)

        console.log("desplegando nuestra lambda 🥳")


        const repository = ecr.Repository.fromRepositoryName(this, 'Lambda-python', 'auth-lambda-dev')
        
        const lambdaPython = new lambda.DockerImageFunction(this, 'lambda-production', {
            code: lambda.DockerImageCode.fromEcr(repository),
            functionName: 'LAMBDA-PYTHON-PROD',
            description: "una lambda de ejemplo - mateo producion",
            memorySize: 3008,
            timeout: cdk.Duration.minutes(5)
        })

        repository.grantPullPush(lambdaPython)
        repository.grantPull(lambdaPython)

    }
}