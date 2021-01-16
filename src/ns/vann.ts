export class VANN {
    // Namespace description
    public static readonly baseUri: string = "http://purl.org/vocab/vann/";
    public static readonly prefixLabel: string = "vann";
    public static readonly version: string = "2005-04-01";

    // Names
    public static readonly changes: string = VANN.baseUri.concat("changes");
    public static readonly example: string = VANN.baseUri.concat("example");
    public static readonly preferredNamespacePrefix: string = VANN.baseUri.concat("preferredNamespacePrefix");
    public static readonly preferredNamespaceUri: string = VANN.baseUri.concat("preferredNamespaceUri");
    public static readonly termGroup: string = VANN.baseUri.concat("termGroup");
    public static readonly usageNote: string = VANN.baseUri.concat("usageNote");
}
