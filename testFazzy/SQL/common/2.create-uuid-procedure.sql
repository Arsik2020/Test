CREATE PROCEDURE data.gen_random_uuid()
LANGUAGE 'sql'
AS $BODY$
SELECT uuid_in(md5(random()::text || random()::text)::cstring)
$BODY$;
ALTER PROCEDURE data.gen_random_uuid()
    OWNER TO postgres;