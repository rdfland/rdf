import type * as DataModel from '../types/data_model.ts';

/**
 * A term that contains an IRI.
 */
export class NamedNode<Iri extends string = string> implements DataModel.NamedNode<Iri> {
  public static readonly termType = 'NamedNode';
  public readonly termType = NamedNode.termType;
  public readonly value: Iri;

  public constructor(value: Iri) {
    this.value = value;
  }

  public equals(other?: DataModel.Term | null): boolean {
    return !!other && other.termType === NamedNode.termType && other.value === this.value;
  }
}
