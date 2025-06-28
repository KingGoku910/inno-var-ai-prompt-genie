import { Database } from '../types';

export const databases: Database[] = [
  // SQL Databases
  { id: 'postgresql', name: 'PostgreSQL', type: 'sql' },
  { id: 'mysql', name: 'MySQL', type: 'sql' },
  { id: 'mariadb', name: 'MariaDB', type: 'sql' },
  { id: 'sqlite', name: 'SQLite', type: 'sql' },
  { id: 'mssql', name: 'Microsoft SQL Server', type: 'sql' },
  
  // NoSQL Databases
  { id: 'mongodb', name: 'MongoDB', type: 'nosql' },
  { id: 'redis', name: 'Redis', type: 'nosql' },
  { id: 'cassandra', name: 'Cassandra', type: 'nosql' },
  { id: 'firestore', name: 'Firebase Firestore', type: 'nosql' },
  { id: 'supabase', name: 'Supabase', type: 'nosql' },
  { id: 'prisma', name: 'Prisma', type: 'sql' },
  { id: 'dynamodb', name: 'Amazon DynamoDB', type: 'nosql' },
  { id: 'couchbase', name: 'Couchbase', type: 'nosql' }
];