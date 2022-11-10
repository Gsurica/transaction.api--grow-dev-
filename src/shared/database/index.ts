import { Pool } from "pg";

const dbConnection = "postgres://suricagod:oFdofB8FflGPEjop5sEgKT2gYViWeXl7@dpg-cdcrhfun6mpsbhf4ku3g-a.oregon-postgres.render.com/database_v24l"

const pool = new Pool({
  connectionString: dbConnection,
  ssl: true
})

export { pool }