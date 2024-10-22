/**  @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://ai-vid-gen_owner:jg8ebI7aikWQ@ep-long-dream-a1wfc9ji.ap-southeast-1.aws.neon.tech/ai-vid-gen?sslmode=require',
    }
}