var JOB_ROLE, JOB_ROLES, JOB_ROLE_SLUG, JOB_ROLE_TO_SLUG, USE_CASE, USE_CASES;
export { JOB_ROLE, JOB_ROLES, JOB_ROLE_SLUG, JOB_ROLE_TO_SLUG, USE_CASE, USE_CASES };
var __wakaru_init_onboarding_initialized = false;
export function init_onboarding() {
if (__wakaru_init_onboarding_initialized) return;
__wakaru_init_onboarding_initialized = true;
"use strict";
JOB_ROLE = {
    SOFTWARE_ENGINEER: "Software Engineer",
    DESIGNER: "Designer",
    PRODUCT_MANAGER: "Product Manager",
    RESEARCHER: "Researcher",
    DATA: "Data",
    EDUCATOR: "Educator",
    STUDENT: "Student",
    MARKETER: "Marketer",
    OPERATIONS: "Operations",
    OTHER: "Other..."
};
JOB_ROLES = [
    JOB_ROLE.SOFTWARE_ENGINEER,
    JOB_ROLE.DESIGNER,
    JOB_ROLE.PRODUCT_MANAGER,
    JOB_ROLE.RESEARCHER,
    JOB_ROLE.DATA,
    JOB_ROLE.EDUCATOR,
    JOB_ROLE.STUDENT,
    JOB_ROLE.MARKETER,
    JOB_ROLE.OPERATIONS,
    JOB_ROLE.OTHER
];
JOB_ROLE_SLUG = {
    SOFTWARE_ENGINEER: "software-engineer",
    DESIGNER: "designer",
    PRODUCT_MANAGER: "product-manager",
    RESEARCHER: "researcher",
    DATA: "data",
    EDUCATOR: "educator",
    STUDENT: "student",
    MARKETER: "marketer",
    OPERATIONS: "operations",
    OTHER: "other"
};
JOB_ROLE_TO_SLUG = {
    [JOB_ROLE.SOFTWARE_ENGINEER]: JOB_ROLE_SLUG.SOFTWARE_ENGINEER,
    [JOB_ROLE.DESIGNER]: JOB_ROLE_SLUG.DESIGNER,
    [JOB_ROLE.PRODUCT_MANAGER]: JOB_ROLE_SLUG.PRODUCT_MANAGER,
    [JOB_ROLE.RESEARCHER]: JOB_ROLE_SLUG.RESEARCHER,
    [JOB_ROLE.DATA]: JOB_ROLE_SLUG.DATA,
    [JOB_ROLE.EDUCATOR]: JOB_ROLE_SLUG.EDUCATOR,
    [JOB_ROLE.STUDENT]: JOB_ROLE_SLUG.STUDENT,
    [JOB_ROLE.MARKETER]: JOB_ROLE_SLUG.MARKETER,
    [JOB_ROLE.OPERATIONS]: JOB_ROLE_SLUG.OPERATIONS,
    [JOB_ROLE.OTHER]: JOB_ROLE_SLUG.OTHER
};
USE_CASE = {
    CODING: "coding",
    TASKS: "tasks"
};
USE_CASES = [
    USE_CASE.CODING,
    USE_CASE.TASKS
];

}
