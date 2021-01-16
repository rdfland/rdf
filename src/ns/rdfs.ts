export class RDFS {
    // Namespace description
    public static readonly baseUri: string = "http://www.w3.org/2000/01/rdf-schema#";
    public static readonly prefixLabel: string = "rdfs";
    public static readonly version: string = "2014-02-25";

    // Names
    public static readonly Class: string = RDFS.baseUri.concat("Class");
    public static readonly Container: string = RDFS.baseUri.concat("Container");
    public static readonly ContainerMembershipProperty: string = RDFS.baseUri.concat("ContainerMembershipProperty");
    public static readonly Datatype: string = RDFS.baseUri.concat("Datatype");
    public static readonly Literal: string = RDFS.baseUri.concat("Literal");
    public static readonly Resource: string = RDFS.baseUri.concat("Resource");
    public static readonly comment: string = RDFS.baseUri.concat("comment");
    public static readonly domain: string = RDFS.baseUri.concat("domain");
    public static readonly isDefinedBy: string = RDFS.baseUri.concat("isDefinedBy");
    public static readonly label: string = RDFS.baseUri.concat("label");
    public static readonly member: string = RDFS.baseUri.concat("member");
    public static readonly range: string = RDFS.baseUri.concat("range");
    public static readonly seeAlso: string = RDFS.baseUri.concat("seeAlso");
    public static readonly subClassOf: string = RDFS.baseUri.concat("subClassOf");
    public static readonly subPropertyOf: string = RDFS.baseUri.concat("subPropertyOf");
}
