# CipherSQLStudio

A minimal SQL practice environment focused on safe query execution
and guided learning.

## Overview
CipherSQLStudio allows users to practice SQL queries in a controlled,
read-only PostgreSQL sandbox with optional hint guidance.

## Why a Sandbox Database?
All queries are validated to allow only safe SELECT operations.
This prevents data mutation while still enabling realistic SQL practice.

## SQL Validation Approach
Instead of full SQL parsing, a keyword allowlist strategy is used.
This keeps validation simple, predictable, and easy to audit.

Allowed:
- SELECT
- WHERE
- GROUP BY
- ORDER BY
- LIMIT

Blocked:
- INSERT
- UPDATE
- DELETE
- DROP
- ALTER

## Hint System Design
The hint system is intentionally implemented as a stub.
During evaluation, relying on external LLM APIs introduces
unnecessary instability (API keys, rate limits, network issues).

In a production setup, this layer would call an LLM with
strict constraints to provide conceptual guidance only,
never full SQL solutions.

## Frontend Design Philosophy
The UI is intentionally minimal and calm.
Clarity and hierarchy are prioritized over decoration,
mirroring internal tooling design standards.

## Data Flow
See `/docs/data-flow-diagram.png` for the full request lifecycle.

## Future Improvements
- Monaco-based SQL editor with syntax highlighting
- Query history and saved attempts
- Role-based difficulty progression
- Real LLM integration with safety constraints
