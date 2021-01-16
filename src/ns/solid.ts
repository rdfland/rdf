export class SOLID {
    // Namespace description
    public static readonly baseUri: string = "http://www.w3.org/ns/solid/terms#";
    public static readonly prefixLabel: string = "solid";
    public static readonly version: string = "2020-12-18";

    // Names
    public static readonly Account: string = SOLID.baseUri.concat("Account");
    public static readonly Inbox: string = SOLID.baseUri.concat("Inbox");
    public static readonly ListedDocument: string = SOLID.baseUri.concat("ListedDocument");
    public static readonly Notification: string = SOLID.baseUri.concat("Notification");
    public static readonly Patch: string = SOLID.baseUri.concat("Patch");
    public static readonly Timeline: string = SOLID.baseUri.concat("Timeline");
    public static readonly TypeIndex: string = SOLID.baseUri.concat("TypeIndex");
    public static readonly TypeRegistration: string = SOLID.baseUri.concat("TypeRegistration");
    public static readonly UnlistedDocument: string = SOLID.baseUri.concat("UnlistedDocument");
    public static readonly account: string = SOLID.baseUri.concat("account");
    public static readonly deletes: string = SOLID.baseUri.concat("deletes");
    public static readonly forClass: string = SOLID.baseUri.concat("forClass");
    public static readonly identityProvider: string = SOLID.baseUri.concat("identityProvider");
    public static readonly inbox: string = SOLID.baseUri.concat("inbox");
    public static readonly inserts: string = SOLID.baseUri.concat("inserts");
    public static readonly instance: string = SOLID.baseUri.concat("instance");
    public static readonly instanceContainer: string = SOLID.baseUri.concat("instanceContainer");
    public static readonly loginEndpoint: string = SOLID.baseUri.concat("loginEndpoint");
    public static readonly logoutEndpoint: string = SOLID.baseUri.concat("logoutEndpoint");
    public static readonly notification: string = SOLID.baseUri.concat("notification");
    public static readonly oidcIssuer: string = SOLID.baseUri.concat("oidcIssuer");
    public static readonly oidcRegistration: string = SOLID.baseUri.concat("oidcRegistration");
    public static readonly patches: string = SOLID.baseUri.concat("patches");
    public static readonly privateTypeIndex: string = SOLID.baseUri.concat("privateTypeIndex");
    public static readonly publicTypeIndex: string = SOLID.baseUri.concat("publicTypeIndex");
    public static readonly read: string = SOLID.baseUri.concat("read");
    public static readonly storageQuota: string = SOLID.baseUri.concat("storageQuota");
    public static readonly storageUsage: string = SOLID.baseUri.concat("storageUsage");
    public static readonly timeline: string = SOLID.baseUri.concat("timeline");
    public static readonly typeIndex: string = SOLID.baseUri.concat("typeIndex");
    public static readonly where: string = SOLID.baseUri.concat("where");
}
