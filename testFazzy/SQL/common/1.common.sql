CREATE DATABASE Enterprises;

CREATE USER data WITH ENCRYPTED PASSWORD 'data';
CREATE SCHEMA IF NOT EXISTS data AUTHORIZATION data;

GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA data to data;