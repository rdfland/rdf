import type * as DataModel from '../types/data_model.ts';
import { NamedNode } from './named_node.ts';
import { RDF } from '../ns/rdf.ts';
import { XSD } from '../ns/xsd.ts';

/**
 * A term that represents an RDF literal, containing a string with an optional language tag or datatype.
 */
export class Literal implements DataModel.Literal {
  public static readonly termType = 'Literal';
  public readonly termType = Literal.termType;
  public readonly value: string;
  public readonly language: string;
  public readonly datatype: DataModel.NamedNode;

  public constructor(value: string, languageOrDatatype?: string | DataModel.NamedNode) {
    this.value = value;
    if (typeof languageOrDatatype === 'string') {
      this.language = languageOrDatatype;
      this.datatype = new NamedNode(RDF.langString);
    } else if (languageOrDatatype) {
      this.language = '';
      this.datatype = languageOrDatatype;
    } else {
      this.language = '';
      this.datatype = new NamedNode(XSD.string);
    }
  }

  public equals(other?: DataModel.Term | null): boolean {
    return !!other && other.termType === Literal.termType && other.value === this.value &&
      other.language === this.language && other.datatype.equals(this.datatype);
  }
}
