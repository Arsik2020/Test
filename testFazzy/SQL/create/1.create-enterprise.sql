CREATE TABLE data.enterprises(
    E_ID VARCHAR(37) PRIMARY KEY default gen_random_uuid(),
    E_NAME VARCHAR(64),
    E_DELETE_DATE TIMESTAMP WITHOUT TIME ZONE
);