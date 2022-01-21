import { Table, Column, Model, Index, PrimaryKey } from "sequelize-typescript";

@Table
class Test extends Model {
  @Index
  @PrimaryKey
  @Column
  id: number;
}

export default Test;
