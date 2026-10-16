import { x } from "./tslib.es6.js";
import { BD, WNn } from "./waterfall_update_pb.js";
var rEo, EAh, xAh, b8e;
export { EAh, b8e, rEo, xAh };
var __wakaru_IAh_initialized = false;
export function IAh() {
if (__wakaru_IAh_initialized) return;
__wakaru_IAh_initialized = true;
"use strict";
x(), WNn(), rEo = {
    prepareEnvironment: {
        runningLabel: "Preparing environment",
        doneLabel: "Prepared environment",
        warningLabel: "Prepared environment with warnings",
        failedLabel: "Failed to prepare environment"
    },
    createCloudWorkspace: {
        runningLabel: "Creating cloud workspace",
        doneLabel: "Created cloud workspace",
        warningLabel: "Created cloud workspace with warnings",
        failedLabel: "Failed to create cloud workspace"
    },
    restoreWorkspaceFiles: {
        runningLabel: "Restoring workspace files",
        doneLabel: "Restored workspace files",
        warningLabel: "Restored workspace files with warnings",
        failedLabel: "Failed to restore workspace files"
    },
    setUpRepository: {
        runningLabel: "Setting up repository",
        doneLabel: "Set up repository",
        warningLabel: "Set up repository with warnings",
        failedLabel: "Failed to set up repository"
    },
    startAgentServices: {
        runningLabel: "Starting agent services",
        doneLabel: "Started agent services",
        warningLabel: "Started agent services with warnings",
        failedLabel: "Failed to start agent services"
    },
    installDependencies: {
        runningLabel: "Installing dependencies",
        doneLabel: "Installed dependencies",
        warningLabel: "Installed dependencies with warnings",
        failedLabel: "Failed to install dependencies"
    },
    runWorkspaceSetup: {
        runningLabel: "Running workspace setup",
        doneLabel: "Ran workspace setup",
        warningLabel: "Ran workspace setup with warnings",
        failedLabel: "Failed to run workspace setup"
    },
    installExtensions: {
        runningLabel: "Installing extensions",
        doneLabel: "Installed extensions",
        warningLabel: "Installed extensions with warnings",
        failedLabel: "Failed to install extensions"
    },
    provisionSandbox: {
        runningLabel: "Provisioning sandbox",
        doneLabel: "Provisioned sandbox",
        warningLabel: "Provisioned sandbox with warnings",
        failedLabel: "Failed to provision sandbox"
    },
    completeSetup: {
        runningLabel: "Completing setup",
        doneLabel: "Completed setup",
        warningLabel: "Completed setup with warnings",
        failedLabel: "Failed to complete setup"
    },
    dockerBuild: {
        runningLabel: "Building image",
        doneLabel: "Built image",
        warningLabel: "Built image with warnings",
        failedLabel: "Failed to build image"
    },
    pullDockerImages: {
        runningLabel: "Pulling Docker images",
        doneLabel: "Pulled Docker images",
        warningLabel: "Pulled Docker images with warnings",
        failedLabel: "Failed to pull Docker images"
    },
    saveSnapshot: {
        runningLabel: "Saving snapshot for faster startup",
        doneLabel: "Saved snapshot",
        warningLabel: "Saved snapshot with warnings",
        failedLabel: "Failed to save snapshot"
    },
    waitForWorker: {
        runningLabel: "Waiting for a worker",
        doneLabel: "Worker ready",
        failedLabel: "Failed waiting for a worker"
    },
    gitReposSetup: {
        runningLabel: "Setting up repositories",
        doneLabel: "Set up repositories",
        warningLabel: "Set up repositories with warnings",
        failedLabel: "Failed to set up repositories"
    },
    gitRepoSetup: {
        runningLabel: "Setting up repository",
        doneLabel: "Set up repository",
        warningLabel: "Set up repository with warnings",
        failedLabel: "Failed to set up repository"
    }
}, EAh = {
    [BD.ENVIRONMENT]: "prepareEnvironment",
    [BD.CREATE_CLOUD_WORKSPACE]: "createCloudWorkspace",
    [BD.PROVISION_SANDBOX]: "provisionSandbox",
    [BD.RESTORE_WORKSPACE_FILES]: "restoreWorkspaceFiles",
    [BD.DOCKER_BUILD]: "dockerBuild",
    [BD.SETUP_REPOSITORY]: "setUpRepository",
    [BD.INSTALL_DEPENDENCIES]: "installDependencies",
    [BD.RUN_WORKSPACE_SETUP]: "runWorkspaceSetup",
    [BD.START_AGENT_SERVICES]: "startAgentServices",
    [BD.INSTALL_EXTENSIONS]: "installExtensions",
    [BD.COMPLETE]: "completeSetup"
}, xAh = {
    gitCheckout: "setUpRepository",
    install: "installDependencies",
    prepare: "runWorkspaceSetup",
    verify: "runWorkspaceSetup",
    start: "startAgentServices",
    checkpointPod: "saveSnapshot"
}, b8e = {
    settingUp: "Setting up environment",
    ready: "Environment ready",
    readyWithWarnings: "Environment ready with warnings",
    failed: "Failed to set up environment"
};

}
