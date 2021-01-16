import type * as DataModel from '../types/data_model.ts';

/**
 * A term that represents an RDF blank node with a label.
 */
export class BlankNode implements DataModel.BlankNode {
  public static readonly termType = 'BlankNode';
  public readonly termType = BlankNode.termType;
  public readonly value: string;

  public constructor(value: string) {
    this.value = value;
  }

  public equals(other?: DataModel.Term | null): boolean {
    return !!other && other.termType === BlankNode.termType && other.value === this.value;
  }
}
