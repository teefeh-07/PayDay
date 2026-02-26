# #014: Implement JWT Authentication & Role-Based Access Control

**Category:** [BACKEND]
**Difficulty:** ● EASY
**Tags:** `jwt`, `rbac`, `auth`

## Description

Build auth middleware that validates JWTs on protected routes. Define roles: EMPLOYER and EMPLOYEE. Ensure employers can only access their own org's data. Add refresh token support.

## Acceptance Criteria

- [ ] Auth middleware validates JWT tokens.
- [ ] RBAC implemented for EMPLOYER and EMPLOYEE roles.
- [ ] Scope isolation ensures data privacy between organizations.
- [ ] Refresh token mechanism functional.
