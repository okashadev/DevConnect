import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Prevent bundling these server-side only DB drivers into client bundle
      config.externals = config.externals || [];
      config.externals.push({
        oracledb: 'commonjs oracledb',
        better_sqlite3: 'commonjs better_sqlite3',
        mysql: 'commonjs mysql',
        mysql2: 'commonjs mysql2',
        sqlite3: 'commonjs sqlite3',
        tedious: 'commonjs tedious',
        'pg-query-stream': 'commonjs pg-query-stream',
        dotenv: 'commonjs dotenv',
      });
    }
    return config;
  },
};

export default withFlowbiteReact(nextConfig);
