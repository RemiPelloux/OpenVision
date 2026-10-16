var GITLAB_COM_UUID, AZURE_DEVOPS_SERVICES_UUID, BITBUCKET_CLOUD_UUID;
export { AZURE_DEVOPS_SERVICES_UUID, BITBUCKET_CLOUD_UUID, GITLAB_COM_UUID };
var __wakaru_init_scm_provider_installations_initialized = false;
export function init_scm_provider_installations() {
if (__wakaru_init_scm_provider_installations_initialized) return;
__wakaru_init_scm_provider_installations_initialized = true;
"use strict";
GITLAB_COM_UUID = "ad3ea84c-ede1-42fe-889a-16a8c94ccfdf";
AZURE_DEVOPS_SERVICES_UUID = "ad0fa84c-ade1-42fe-889a-16a8c94cad05";
BITBUCKET_CLOUD_UUID = "b17b0c4e-c10d-42fe-889a-16a8c94bb01d";

}
