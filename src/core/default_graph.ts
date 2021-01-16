import type * as DataModel from '../types/data_model.ts';

/**
 * A singleton term instance that represents the default graph.
 * It's only allowed to assign a DefaultGraph to the .graph property of a Quad.
 */
export class DefaultGraph implements DataModel.DefaultGraph {
  public static INSTANCE = new DefaultGraph();

  public static readonly termType = 'DefaultGraph';
  public readonly termType = DefaultGraph.termType;
  public readonly value = '';

  private constructor() {
    // Private constructor
  }

  public equals(other?: DataModel.Term | null): boolean {
    return !!other && other.termType === DefaultGraph.termType;
  }
}
