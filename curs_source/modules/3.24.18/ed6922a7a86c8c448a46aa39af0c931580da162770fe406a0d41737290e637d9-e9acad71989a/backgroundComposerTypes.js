import { x } from "./tslib.es6.js";
var UKs;
export { UKs };
var __wakaru_lgv_initialized = false;
export function lgv() {
if (__wakaru_lgv_initialized) return;
__wakaru_lgv_initialized = true;
"use strict";
x(), UKs = {
    repoStateLock: {
        active: "Waiting for snapshot from another agent building this environment",
        completed: "Started from previous snapshot"
    },
    repositorySetup: {
        active: "Preparing repository",
        completed: "Prepared repository"
    },
    clone: {
        active: "Cloning repository",
        completed: "Cloned repository"
    },
    checkout: {
        active: "Checking out branch",
        completed: "Checked out branch"
    },
    hydration: {
        active: "Hydrating environment",
        completed: "Hydrated environment"
    },
    imagePull: {
        active: "Pulling Docker images",
        completed: "Pulled Docker images"
    },
    build: {
        active: "Building Docker image",
        completed: "Built Docker image"
    },
    prepare: {
        active: "Running prepare script",
        completed: "Ran prepare script"
    },
    install: {
        active: "Installing",
        completed: "Installed"
    },
    verify: {
        active: "Running verify script",
        completed: "Ran verify script"
    },
    start: {
        active: "Running start script",
        completed: "Ran start script"
    },
    extensionInstall: {
        active: "Installing extensions",
        completed: "Installed extensions"
    },
    snapshot: {
        active: "Creating snapshot",
        completed: "Created snapshot"
    },
    postStart: {
        active: "Completing startup",
        completed: "Completed startup"
    },
    extensionStart: {
        active: "Starting extensions",
        completed: "Started extensions"
    },
    waitingForWorker: {
        active: "Waiting for private worker",
        completed: "Private worker ready"
    },
    completion: {
        active: "Completing setup",
        completed: "Completed setup"
    }
};

}
