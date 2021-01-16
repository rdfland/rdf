import type * as DataModel from '../types/data_model.ts';

/**
 * An instance of DefaultGraph represents the default graph.
 * It's only allowed to assign a DefaultGraph to the .graph property of a Quad.
 */
export class Quad implements DataModel.BaseQuad {
  public static readonly termType = 'Quad';
  public static readonly value = '';
  public readonly termType = Quad.termType;
  public readonly value = Quad.value;
  public readonly subject: DataModel.Term;
  public readonly predicate: DataModel.Term;
  public readonly object: DataModel.Term;
  public readonly graph: DataModel.Term;

  public constructor(
    subject: DataModel.Term,
    predicate: DataModel.Term,
    object: DataModel.Term,
    graph: DataModel.Term,
  ) {
    this.subject = subject;
    this.predicate = predicate;
    this.object = object;
    this.graph = graph;
  }

  public equals(other?: DataModel.Term | null): boolean {
    // `|| !other.termType` is for backwards-compatibility with old factories without RDF* support.
    return !!other && (other.termType === Quad.termType || !other.termType) &&
      this.subject.equals(other.subject) &&
      this.predicate.equals(other.predicate) &&
      this.object.equals(other.object) &&
      this.graph.equals(other.graph);
  }
}
