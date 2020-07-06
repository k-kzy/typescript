import { IAM } from 'aws-sdk';

export class IAMRoleNameCollector {
  readonly iam: IAM;

  roleNames: null | Promise<any>;
}
