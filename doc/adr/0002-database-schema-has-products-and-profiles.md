# 2. Database Schema has Products and Profiles

Date: 2017-12-27

## Status

Accepted

## Context

We need to define a way to organize the information. It will require many iterations and will probably become the core
of the application at one point, but for prototype/MVP we need to specify a working schema that makes sense and is simple.

There are different ways to do it, but generally a company would have multiple products. Each product will have different attributes that could
be searchable: name, company, barcode, among others. From the company we just care about the name, logo and possible description, but the most
important thing is a lot of data regarding it's ethical record, which we can call Profile.

In the future, as we gain more knowledge on the data we can refine.

## Decision

To organize the information, the database will initially have 2 collections: Products and Profiles.

**Products** is straightforward: lists all the products for a company.
**Profiles** lists all the companies, together with the Ethical information we have. It could have been split in 2 (companies and profiles),
but for simplicity and efficiency, they will be one (their relationship would have been 1:1 anyways).

Each product is associated to one profile. Profiles could be associated to other profiles (related companies, merges, etc).

## Consequences

- We can have the API endpoint *profiles* to search in both collections.
- We may have Profiles collection a bit cluttered.
