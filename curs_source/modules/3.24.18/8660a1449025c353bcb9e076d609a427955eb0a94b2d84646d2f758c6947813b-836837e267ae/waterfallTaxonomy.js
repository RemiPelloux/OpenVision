import { E } from "./tslib.es6.js";
import { kL, ywi } from "./waterfall_update_pb.js";
var Sul, hvg, pvg, Aat;
export { Aat, Sul, hvg, pvg };
var __wakaru_mvg_initialized = false;
export function mvg() {
if (__wakaru_mvg_initialized) return;
__wakaru_mvg_initialized = true;
"use strict";
E(), ywi(), Sul = {
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
}, hvg = {
    [kL.ENVIRONMENT]: "prepareEnvironment",
    [kL.CREATE_CLOUD_WORKSPACE]: "createCloudWorkspace",
    [kL.PROVISION_SANDBOX]: "provisionSandbox",
    [kL.RESTORE_WORKSPACE_FILES]: "restoreWorkspaceFiles",
    [kL.DOCKER_BUILD]: "dockerBuild",
    [kL.SETUP_REPOSITORY]: "setUpRepository",
    [kL.INSTALL_DEPENDENCIES]: "installDependencies",
    [kL.RUN_WORKSPACE_SETUP]: "runWorkspaceSetup",
    [kL.START_AGENT_SERVICES]: "startAgentServices",
    [kL.INSTALL_EXTENSIONS]: "installExtensions",
    [kL.COMPLETE]: "completeSetup"
}, pvg = {
    gitCheckout: "setUpRepository",
    install: "installDependencies",
    prepare: "runWorkspaceSetup",
    verify: "runWorkspaceSetup",
    start: "startAgentServices",
    checkpointPod: "saveSnapshot"
}, Aat = {
    settingUp: "Setting up environment",
    ready: "Environment ready",
    readyWithWarnings: "Environment ready with warnings",
    failed: "Failed to set up environment"
};

}
