#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LambdaCdk } from '../lib/lambda';


const app = new cdk.App();

let env = app.node.tryGetContext("context") || 'lambda'

switch(env) {

  case 'lambda':
    const lamda = new LambdaCdk(app, "lambda-production", {
      env:{
        account: "273354645944",
        region: "us-east-1"
      }
    })

  case 's3':
    const s3 = new LambdaCdk(app, "lambda-production", {
      env:{
        account: "273354645944",
        region: "us-east-1"
      }
    })
}