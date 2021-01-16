import type * as DataModel from '../types/data_model.ts';

/**
 * A term that represents a variable.
 */
export class Variable implements DataModel.Variable {
  public static readonly termType = 'Variable';
  public readonly termType = Variable.termType;
  public readonly value: string;

  public constructor(value: string) {
    this.value = value;
  }

  public equals(other?: DataModel.Term | null): boolean {
    return !!other && other.termType === Variable.termType && other.value === this.value;
  }
}
