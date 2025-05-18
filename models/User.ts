import { Model } from "objection";

export interface UserType {
  id: number;
  name: string;
  email: string;
  username: string;
  password?: string;  // Make password optional so it can be deleted
  phone_number?: string;
  created_at: Date;
  updated_at: Date;
}

export default class User extends Model implements UserType {
  id!: number;
  name!: string;
  email!: string;
  username!: string;
  password!: string;
  phone_number?: string;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return "users";
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email', 'username', 'password'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1 },
        email: { type: 'string', format: 'email' },
        username: { type: 'string', minLength: 3 },
        password: { type: 'string', minLength: 6 },
        phone_number: { type: ['string', 'null'] },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' }
      }
    };
  }

  $beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  $beforeUpdate() {
    this.updated_at = new Date();
  }
  $formatJson(json: any) {
    json = super.$formatJson(json);
    delete json.password;
    return json;
  }
}

// Type is already exported above