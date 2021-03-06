export class OWL {
    // Namespace description
    public static readonly baseUri: string = "http://www.w3.org/2002/07/owl#";
    public static readonly prefixLabel: string = "owl";
    public static readonly version: string = "2012-12-11";

    // Names
    public static readonly AllDifferent: string = OWL.baseUri.concat("AllDifferent");
    public static readonly AllDisjointClasses: string = OWL.baseUri.concat("AllDisjointClasses");
    public static readonly AllDisjointProperties: string = OWL.baseUri.concat("AllDisjointProperties");
    public static readonly Annotation: string = OWL.baseUri.concat("Annotation");
    public static readonly AnnotationProperty: string = OWL.baseUri.concat("AnnotationProperty");
    public static readonly AsymmetricProperty: string = OWL.baseUri.concat("AsymmetricProperty");
    public static readonly Axiom: string = OWL.baseUri.concat("Axiom");
    public static readonly Class: string = OWL.baseUri.concat("Class");
    public static readonly DataRange: string = OWL.baseUri.concat("DataRange");
    public static readonly DatatypeProperty: string = OWL.baseUri.concat("DatatypeProperty");
    public static readonly DeprecatedClass: string = OWL.baseUri.concat("DeprecatedClass");
    public static readonly DeprecatedProperty: string = OWL.baseUri.concat("DeprecatedProperty");
    public static readonly FunctionalProperty: string = OWL.baseUri.concat("FunctionalProperty");
    public static readonly InverseFunctionalProperty: string = OWL.baseUri.concat("InverseFunctionalProperty");
    public static readonly IrreflexiveProperty: string = OWL.baseUri.concat("IrreflexiveProperty");
    public static readonly NamedIndividual: string = OWL.baseUri.concat("NamedIndividual");
    public static readonly NegativePropertyAssertion: string = OWL.baseUri.concat("NegativePropertyAssertion");
    public static readonly Nothing: string = OWL.baseUri.concat("Nothing");
    public static readonly ObjectProperty: string = OWL.baseUri.concat("ObjectProperty");
    public static readonly Ontology: string = OWL.baseUri.concat("Ontology");
    public static readonly OntologyProperty: string = OWL.baseUri.concat("OntologyProperty");
    public static readonly ReflexiveProperty: string = OWL.baseUri.concat("ReflexiveProperty");
    public static readonly Restriction: string = OWL.baseUri.concat("Restriction");
    public static readonly SymmetricProperty: string = OWL.baseUri.concat("SymmetricProperty");
    public static readonly Thing: string = OWL.baseUri.concat("Thing");
    public static readonly TransitiveProperty: string = OWL.baseUri.concat("TransitiveProperty");
    public static readonly allValuesFrom: string = OWL.baseUri.concat("allValuesFrom");
    public static readonly annotatedProperty: string = OWL.baseUri.concat("annotatedProperty");
    public static readonly annotatedSource: string = OWL.baseUri.concat("annotatedSource");
    public static readonly annotatedTarget: string = OWL.baseUri.concat("annotatedTarget");
    public static readonly assertionProperty: string = OWL.baseUri.concat("assertionProperty");
    public static readonly backwardCompatibleWith: string = OWL.baseUri.concat("backwardCompatibleWith");
    public static readonly bottomDataProperty: string = OWL.baseUri.concat("bottomDataProperty");
    public static readonly bottomObjectProperty: string = OWL.baseUri.concat("bottomObjectProperty");
    public static readonly cardinality: string = OWL.baseUri.concat("cardinality");
    public static readonly complementOf: string = OWL.baseUri.concat("complementOf");
    public static readonly datatypeComplementOf: string = OWL.baseUri.concat("datatypeComplementOf");
    public static readonly deprecated: string = OWL.baseUri.concat("deprecated");
    public static readonly differentFrom: string = OWL.baseUri.concat("differentFrom");
    public static readonly disjointUnionOf: string = OWL.baseUri.concat("disjointUnionOf");
    public static readonly disjointWith: string = OWL.baseUri.concat("disjointWith");
    public static readonly distinctMembers: string = OWL.baseUri.concat("distinctMembers");
    public static readonly equivalentClass: string = OWL.baseUri.concat("equivalentClass");
    public static readonly equivalentProperty: string = OWL.baseUri.concat("equivalentProperty");
    public static readonly hasKey: string = OWL.baseUri.concat("hasKey");
    public static readonly hasSelf: string = OWL.baseUri.concat("hasSelf");
    public static readonly hasValue: string = OWL.baseUri.concat("hasValue");
    public static readonly imports: string = OWL.baseUri.concat("imports");
    public static readonly incompatibleWith: string = OWL.baseUri.concat("incompatibleWith");
    public static readonly intersectionOf: string = OWL.baseUri.concat("intersectionOf");
    public static readonly inverseOf: string = OWL.baseUri.concat("inverseOf");
    public static readonly maxCardinality: string = OWL.baseUri.concat("maxCardinality");
    public static readonly maxQualifiedCardinality: string = OWL.baseUri.concat("maxQualifiedCardinality");
    public static readonly members: string = OWL.baseUri.concat("members");
    public static readonly minCardinality: string = OWL.baseUri.concat("minCardinality");
    public static readonly minQualifiedCardinality: string = OWL.baseUri.concat("minQualifiedCardinality");
    public static readonly onClass: string = OWL.baseUri.concat("onClass");
    public static readonly onDataRange: string = OWL.baseUri.concat("onDataRange");
    public static readonly onDatatype: string = OWL.baseUri.concat("onDatatype");
    public static readonly onProperties: string = OWL.baseUri.concat("onProperties");
    public static readonly onProperty: string = OWL.baseUri.concat("onProperty");
    public static readonly oneOf: string = OWL.baseUri.concat("oneOf");
    public static readonly priorVersion: string = OWL.baseUri.concat("priorVersion");
    public static readonly propertyChainAxiom: string = OWL.baseUri.concat("propertyChainAxiom");
    public static readonly propertyDisjointWith: string = OWL.baseUri.concat("propertyDisjointWith");
    public static readonly qualifiedCardinality: string = OWL.baseUri.concat("qualifiedCardinality");
    public static readonly sameAs: string = OWL.baseUri.concat("sameAs");
    public static readonly someValuesFrom: string = OWL.baseUri.concat("someValuesFrom");
    public static readonly sourceIndividual: string = OWL.baseUri.concat("sourceIndividual");
    public static readonly targetIndividual: string = OWL.baseUri.concat("targetIndividual");
    public static readonly targetValue: string = OWL.baseUri.concat("targetValue");
    public static readonly topDataProperty: string = OWL.baseUri.concat("topDataProperty");
    public static readonly topObjectProperty: string = OWL.baseUri.concat("topObjectProperty");
    public static readonly unionOf: string = OWL.baseUri.concat("unionOf");
    public static readonly versionIRI: string = OWL.baseUri.concat("versionIRI");
    public static readonly versionInfo: string = OWL.baseUri.concat("versionInfo");
    public static readonly withRestrictions: string = OWL.baseUri.concat("withRestrictions");
}
