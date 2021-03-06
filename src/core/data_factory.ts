import type * as DataModel from '../types/data_model.ts';
import { BlankNode } from './blank_node.ts';
import { DefaultGraph } from './default_graph.ts';
import { Literal } from './literal.ts';
import { NamedNode } from './named_node.ts';
import { Quad } from './quad.ts';
import { Variable } from './variable.ts';
import { XSD } from "../ns/xsd.ts";

let dataFactoryCounter = 0;
const defaultGraph = new DefaultGraph();

export interface DataFactoryOptions {
  blankNodePrefix?: string;
}

/**
 * A factory for instantiating RDF terms and quads.
 */
export class DataFactory<Q extends DataModel.BaseQuad = DataModel.Quad> implements DataModel.DataFactory<Q> {
  private readonly blankNodePrefix: string;
  private blankNodeCounter = 0;

  public constructor(options?: DataFactoryOptions) {
    options = options || {};
    this.blankNodePrefix = options.blankNodePrefix || `df_${dataFactoryCounter++}_`;
  }

  /**
   * @param value The IRI for the named node.
   * @return A new instance of NamedNode.
   * @see NamedNode
   */
  public static namedNode<Iri extends string = string>(value: Iri): NamedNode<Iri> {
    return new NamedNode(value);
  }
  public namedNode = DataFactory.namedNode;

  /**
   * @param value The optional blank node identifier.
   * @return A new instance of BlankNode.
   *         If the `value` parameter is undefined a new identifier
   *         for the blank node is generated for each call.
   * @see BlankNode
   */
  public blankNode(value?: string): BlankNode {
    return new BlankNode(value || `${this.blankNodePrefix}${this.blankNodeCounter++}`);
  }

  /**
   * @param value              The literal value.
   * @param languageOrDatatype The optional language or datatype.
   *                           If `languageOrDatatype` is a NamedNode,
   *                           then it is used for the value of `NamedNode.datatype`.
   *                           Otherwise `languageOrDatatype` is used for the value
   *                           of `NamedNode.language`.
   * @return A new instance of Literal.
   * @see Literal
   */
  public static literal(value: string, languageOrDatatype?: string | DataModel.NamedNode): Literal {
    return new Literal(value, languageOrDatatype);
  }
  public literal = DataFactory.literal;

  /**
   * This method is optional.
   * @param value The variable name
   * @return A new instance of Variable.
   * @see Variable
   */
  public static variable(value: string): Variable {
    return new Variable(value);
  }
  public variable = DataFactory.variable;

  /**
   * @return An instance of DefaultGraph.
   */
  public static defaultGraph(): DefaultGraph {
    return defaultGraph;
  }
  public defaultGraph = DataFactory.defaultGraph;

  /**
   * @param subject   The quad subject term.
   * @param predicate The quad predicate term.
   * @param object    The quad object term.
   * @param graph     The quad graph term.
   * @return A new instance of Quad.
   * @see Quad
   */
  public quad(
    subject: Q['subject'],
    predicate: Q['predicate'],
    object: Q['object'],
    graph?: Q['graph'],
  ): Q & Quad {
    return <Q> new Quad(subject, predicate, object, graph || DataFactory.defaultGraph());
  }
  public static quad(
    subject: DataModel.Quad_Subject,
    predicate: DataModel.Quad_Predicate,
    object: DataModel.Quad_Object,
    graph?: DataModel.Quad_Graph,
  ): Quad {
    return new Quad(subject, predicate, object, graph || DataFactory.defaultGraph());
  }

  /**
   * Create a deep copy of the given term using this data factory.
   * @param original An RDF term.
   * @return A deep copy of the given term.
   */
  public fromTerm<T extends DataModel.Term>(original: T):
  (T extends DataModel.NamedNode ? NamedNode
    : (T extends DataModel.BlankNode ? BlankNode
      : (T extends DataModel.Literal ? Literal
        : (T extends DataModel.Variable ? Variable
          : (T extends DataModel.DefaultGraph ? DefaultGraph
            : (T extends Q ? Q : unknown)))))) {
    // TODO: remove nasty any casts when this TS bug has been fixed:
    //  https://github.com/microsoft/TypeScript/issues/26933
    switch (original.termType) {
      case 'NamedNode':
        return <any> this.namedNode(original.value);
      case 'BlankNode':
        return <any> this.blankNode(original.value);
      case 'Literal':
        if ((<DataModel.Literal> original).language) {
          return <any> this.literal(original.value, (<DataModel.Literal>original).language);
        }
        if (!(<DataModel.Literal> original).datatype.equals(new NamedNode(XSD.string))) {
          return <any> this.literal(original.value, this.fromTerm((<DataModel.Literal> original).datatype));
        }
        return <any> this.literal(original.value);
      case 'Variable':
        return <any> this.variable(original.value);
      case 'DefaultGraph':
        return <any> this.defaultGraph();
      case 'Quad':
        return <any> this.quad(
          <Q['subject']> this.fromTerm((<Q> <unknown> original).subject),
          <Q['predicate']> this.fromTerm((<Q> <unknown> original).predicate),
          <Q['object']> this.fromTerm((<Q> <unknown> original).object),
          <Q['graph']> this.fromTerm((<Q> <unknown> original).graph),
        );
    }
  }

  /**
   * Create a deep copy of the given quad using this data factory.
   * @param original An RDF quad.
   * @return A deep copy of the given quad.
   */
  public fromQuad(original: Q): Q {
    return <Q> this.fromTerm(original);
  }

  /**
   * Reset the internal blank node counter.
   */
  public resetBlankNodeCounter(): void {
    this.blankNodeCounter = 0;
  }
}
