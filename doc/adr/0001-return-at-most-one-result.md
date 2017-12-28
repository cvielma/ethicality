# 1. Return at most one result

Date: 2017-12-27

## Status

Accepted

## Context

When looking for a company profile in the App, we should return at most one result.

The idea behind this is to:
1. Simplify UI development
2. Simplify the experience for the user
3. Maybe prove a "revolutionary" technique?

## Decision

When looking for a company profile in the App, we should return at most one result.

## Consequences

This simplifies the user experience and the perception of speed of the app
(imagine you are in a supermarket and before buying just scan the product), although potentially
could be confusing (people are used to go through search results) or inaccurate (maybe the showed option is not correct).

The thing is that even if it proves wrong, this decision can be easily undone later, while saving development time during prototype phase.
