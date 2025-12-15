import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly nexflo: "nexflo";
    readonly Trigger: "Trigger";
    readonly action: "action";
    readonly AvalableAction: "AvalableAction";
    readonly AvalableTrigger: "AvalableTrigger";
    readonly nexflorun: "nexflorun";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const NexfloScalarFieldEnum: {
    readonly id: "id";
    readonly triggerId: "triggerId";
};
export type NexfloScalarFieldEnum = (typeof NexfloScalarFieldEnum)[keyof typeof NexfloScalarFieldEnum];
export declare const TriggerScalarFieldEnum: {
    readonly id: "id";
    readonly nexfloId: "nexfloId";
    readonly triggerId: "triggerId";
};
export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum];
export declare const ActionScalarFieldEnum: {
    readonly id: "id";
    readonly nexfloId: "nexfloId";
    readonly actionId: "actionId";
};
export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum];
export declare const AvalableActionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type AvalableActionScalarFieldEnum = (typeof AvalableActionScalarFieldEnum)[keyof typeof AvalableActionScalarFieldEnum];
export declare const AvalableTriggerScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type AvalableTriggerScalarFieldEnum = (typeof AvalableTriggerScalarFieldEnum)[keyof typeof AvalableTriggerScalarFieldEnum];
export declare const NexflorunScalarFieldEnum: {
    readonly id: "id";
    readonly nexflowId: "nexflowId";
};
export type NexflorunScalarFieldEnum = (typeof NexflorunScalarFieldEnum)[keyof typeof NexflorunScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map