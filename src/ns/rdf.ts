export class RDF {
    // Namespace description
    public static readonly baseUri: string = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
    public static readonly prefixLabel: string = "rdf";
    public static readonly version: string = "2014-02-25";

    // Names
    public static readonly Alt: string = RDF.baseUri.concat("Alt");
    public static readonly Bag: string = RDF.baseUri.concat("Bag");
    public static readonly HTML: string = RDF.baseUri.concat("HTML");
    public static readonly List: string = RDF.baseUri.concat("List");
    public static readonly PlainLiteral: string = RDF.baseUri.concat("PlainLiteral");
    public static readonly Property: string = RDF.baseUri.concat("Property");
    public static readonly Seq: string = RDF.baseUri.concat("Seq");
    public static readonly Statement: string = RDF.baseUri.concat("Statement");
    public static readonly XMLLiteral: string = RDF.baseUri.concat("XMLLiteral");
    public static readonly first: string = RDF.baseUri.concat("first");
    public static readonly langString: string = RDF.baseUri.concat("langString");
    public static readonly nil: string = RDF.baseUri.concat("nil");
    public static readonly object: string = RDF.baseUri.concat("object");
    public static readonly predicate: string = RDF.baseUri.concat("predicate");
    public static readonly rest: string = RDF.baseUri.concat("rest");
    public static readonly subject: string = RDF.baseUri.concat("subject");
    public static readonly type: string = RDF.baseUri.concat("type");
    public static readonly value: string = RDF.baseUri.concat("value");
}
