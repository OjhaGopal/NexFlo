import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model nexflo
 *
 */
export type nexfloModel = runtime.Types.Result.DefaultSelection<Prisma.$nexfloPayload>;
export type AggregateNexflo = {
    _count: NexfloCountAggregateOutputType | null;
    _min: NexfloMinAggregateOutputType | null;
    _max: NexfloMaxAggregateOutputType | null;
};
export type NexfloMinAggregateOutputType = {
    id: string | null;
    triggerId: string | null;
};
export type NexfloMaxAggregateOutputType = {
    id: string | null;
    triggerId: string | null;
};
export type NexfloCountAggregateOutputType = {
    id: number;
    triggerId: number;
    _all: number;
};
export type NexfloMinAggregateInputType = {
    id?: true;
    triggerId?: true;
};
export type NexfloMaxAggregateInputType = {
    id?: true;
    triggerId?: true;
};
export type NexfloCountAggregateInputType = {
    id?: true;
    triggerId?: true;
    _all?: true;
};
export type NexfloAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which nexflo to aggregate.
     */
    where?: Prisma.nexfloWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nexflos to fetch.
     */
    orderBy?: Prisma.nexfloOrderByWithRelationInput | Prisma.nexfloOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.nexfloWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nexflos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nexflos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned nexflos
    **/
    _count?: true | NexfloCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: NexfloMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: NexfloMaxAggregateInputType;
};
export type GetNexfloAggregateType<T extends NexfloAggregateArgs> = {
    [P in keyof T & keyof AggregateNexflo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNexflo[P]> : Prisma.GetScalarType<T[P], AggregateNexflo[P]>;
};
export type nexfloGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.nexfloWhereInput;
    orderBy?: Prisma.nexfloOrderByWithAggregationInput | Prisma.nexfloOrderByWithAggregationInput[];
    by: Prisma.NexfloScalarFieldEnum[] | Prisma.NexfloScalarFieldEnum;
    having?: Prisma.nexfloScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NexfloCountAggregateInputType | true;
    _min?: NexfloMinAggregateInputType;
    _max?: NexfloMaxAggregateInputType;
};
export type NexfloGroupByOutputType = {
    id: string;
    triggerId: string;
    _count: NexfloCountAggregateOutputType | null;
    _min: NexfloMinAggregateOutputType | null;
    _max: NexfloMaxAggregateOutputType | null;
};
type GetNexfloGroupByPayload<T extends nexfloGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NexfloGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NexfloGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NexfloGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NexfloGroupByOutputType[P]>;
}>>;
export type nexfloWhereInput = {
    AND?: Prisma.nexfloWhereInput | Prisma.nexfloWhereInput[];
    OR?: Prisma.nexfloWhereInput[];
    NOT?: Prisma.nexfloWhereInput | Prisma.nexfloWhereInput[];
    id?: Prisma.StringFilter<"nexflo"> | string;
    triggerId?: Prisma.StringFilter<"nexflo"> | string;
    trigger?: Prisma.XOR<Prisma.TriggerNullableScalarRelationFilter, Prisma.TriggerWhereInput> | null;
    actions?: Prisma.ActionListRelationFilter;
    nexflorun?: Prisma.NexflorunListRelationFilter;
};
export type nexfloOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    triggerId?: Prisma.SortOrder;
    trigger?: Prisma.TriggerOrderByWithRelationInput;
    actions?: Prisma.actionOrderByRelationAggregateInput;
    nexflorun?: Prisma.nexflorunOrderByRelationAggregateInput;
};
export type nexfloWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.nexfloWhereInput | Prisma.nexfloWhereInput[];
    OR?: Prisma.nexfloWhereInput[];
    NOT?: Prisma.nexfloWhereInput | Prisma.nexfloWhereInput[];
    triggerId?: Prisma.StringFilter<"nexflo"> | string;
    trigger?: Prisma.XOR<Prisma.TriggerNullableScalarRelationFilter, Prisma.TriggerWhereInput> | null;
    actions?: Prisma.ActionListRelationFilter;
    nexflorun?: Prisma.NexflorunListRelationFilter;
}, "id">;
export type nexfloOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    triggerId?: Prisma.SortOrder;
    _count?: Prisma.nexfloCountOrderByAggregateInput;
    _max?: Prisma.nexfloMaxOrderByAggregateInput;
    _min?: Prisma.nexfloMinOrderByAggregateInput;
};
export type nexfloScalarWhereWithAggregatesInput = {
    AND?: Prisma.nexfloScalarWhereWithAggregatesInput | Prisma.nexfloScalarWhereWithAggregatesInput[];
    OR?: Prisma.nexfloScalarWhereWithAggregatesInput[];
    NOT?: Prisma.nexfloScalarWhereWithAggregatesInput | Prisma.nexfloScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"nexflo"> | string;
    triggerId?: Prisma.StringWithAggregatesFilter<"nexflo"> | string;
};
export type nexfloCreateInput = {
    id?: string;
    triggerId: string;
    trigger?: Prisma.TriggerCreateNestedOneWithoutNexfloInput;
    actions?: Prisma.actionCreateNestedManyWithoutNexfloInput;
    nexflorun?: Prisma.nexflorunCreateNestedManyWithoutNexfloInput;
};
export type nexfloUncheckedCreateInput = {
    id?: string;
    triggerId: string;
    trigger?: Prisma.TriggerUncheckedCreateNestedOneWithoutNexfloInput;
    actions?: Prisma.actionUncheckedCreateNestedManyWithoutNexfloInput;
    nexflorun?: Prisma.nexflorunUncheckedCreateNestedManyWithoutNexfloInput;
};
export type nexfloUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerId?: Prisma.StringFieldUpdateOperationsInput | string;
    trigger?: Prisma.TriggerUpdateOneWithoutNexfloNestedInput;
    actions?: Prisma.actionUpdateManyWithoutNexfloNestedInput;
    nexflorun?: Prisma.nexflorunUpdateManyWithoutNexfloNestedInput;
};
export type nexfloUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerId?: Prisma.StringFieldUpdateOperationsInput | string;
    trigger?: Prisma.TriggerUncheckedUpdateOneWithoutNexfloNestedInput;
    actions?: Prisma.actionUncheckedUpdateManyWithoutNexfloNestedInput;
    nexflorun?: Prisma.nexflorunUncheckedUpdateManyWithoutNexfloNestedInput;
};
export type nexfloCreateManyInput = {
    id?: string;
    triggerId: string;
};
export type nexfloUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type nexfloUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type nexfloCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    triggerId?: Prisma.SortOrder;
};
export type nexfloMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    triggerId?: Prisma.SortOrder;
};
export type nexfloMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    triggerId?: Prisma.SortOrder;
};
export type NexfloScalarRelationFilter = {
    is?: Prisma.nexfloWhereInput;
    isNot?: Prisma.nexfloWhereInput;
};
export type nexfloCreateNestedOneWithoutTriggerInput = {
    create?: Prisma.XOR<Prisma.nexfloCreateWithoutTriggerInput, Prisma.nexfloUncheckedCreateWithoutTriggerInput>;
    connectOrCreate?: Prisma.nexfloCreateOrConnectWithoutTriggerInput;
    connect?: Prisma.nexfloWhereUniqueInput;
};
export type nexfloUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: Prisma.XOR<Prisma.nexfloCreateWithoutTriggerInput, Prisma.nexfloUncheckedCreateWithoutTriggerInput>;
    connectOrCreate?: Prisma.nexfloCreateOrConnectWithoutTriggerInput;
    upsert?: Prisma.nexfloUpsertWithoutTriggerInput;
    connect?: Prisma.nexfloWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.nexfloUpdateToOneWithWhereWithoutTriggerInput, Prisma.nexfloUpdateWithoutTriggerInput>, Prisma.nexfloUncheckedUpdateWithoutTriggerInput>;
};
export type nexfloCreateNestedOneWithoutActionsInput = {
    create?: Prisma.XOR<Prisma.nexfloCreateWithoutActionsInput, Prisma.nexfloUncheckedCreateWithoutActionsInput>;
    connectOrCreate?: Prisma.nexfloCreateOrConnectWithoutActionsInput;
    connect?: Prisma.nexfloWhereUniqueInput;
};
export type nexfloUpdateOneRequiredWithoutActionsNestedInput = {
    create?: Prisma.XOR<Prisma.nexfloCreateWithoutActionsInput, Prisma.nexfloUncheckedCreateWithoutActionsInput>;
    connectOrCreate?: Prisma.nexfloCreateOrConnectWithoutActionsInput;
    upsert?: Prisma.nexfloUpsertWithoutActionsInput;
    connect?: Prisma.nexfloWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.nexfloUpdateToOneWithWhereWithoutActionsInput, Prisma.nexfloUpdateWithoutActionsInput>, Prisma.nexfloUncheckedUpdateWithoutActionsInput>;
};
export type nexfloCreateNestedOneWithoutNexflorunInput = {
    create?: Prisma.XOR<Prisma.nexfloCreateWithoutNexflorunInput, Prisma.nexfloUncheckedCreateWithoutNexflorunInput>;
    connectOrCreate?: Prisma.nexfloCreateOrConnectWithoutNexflorunInput;
    connect?: Prisma.nexfloWhereUniqueInput;
};
export type nexfloUpdateOneRequiredWithoutNexflorunNestedInput = {
    create?: Prisma.XOR<Prisma.nexfloCreateWithoutNexflorunInput, Prisma.nexfloUncheckedCreateWithoutNexflorunInput>;
    connectOrCreate?: Prisma.nexfloCreateOrConnectWithoutNexflorunInput;
    upsert?: Prisma.nexfloUpsertWithoutNexflorunInput;
    connect?: Prisma.nexfloWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.nexfloUpdateToOneWithWhereWithoutNexflorunInput, Prisma.nexfloUpdateWithoutNexflorunInput>, Prisma.nexfloUncheckedUpdateWithoutNexflorunInput>;
};
export type nexfloCreateWithoutTriggerInput = {
    id?: string;
    triggerId: string;
    actions?: Prisma.actionCreateNestedManyWithoutNexfloInput;
    nexflorun?: Prisma.nexflorunCreateNestedManyWithoutNexfloInput;
};
export type nexfloUncheckedCreateWithoutTriggerInput = {
    id?: string;
    triggerId: string;
    actions?: Prisma.actionUncheckedCreateNestedManyWithoutNexfloInput;
    nexflorun?: Prisma.nexflorunUncheckedCreateNestedManyWithoutNexfloInput;
};
export type nexfloCreateOrConnectWithoutTriggerInput = {
    where: Prisma.nexfloWhereUniqueInput;
    create: Prisma.XOR<Prisma.nexfloCreateWithoutTriggerInput, Prisma.nexfloUncheckedCreateWithoutTriggerInput>;
};
export type nexfloUpsertWithoutTriggerInput = {
    update: Prisma.XOR<Prisma.nexfloUpdateWithoutTriggerInput, Prisma.nexfloUncheckedUpdateWithoutTriggerInput>;
    create: Prisma.XOR<Prisma.nexfloCreateWithoutTriggerInput, Prisma.nexfloUncheckedCreateWithoutTriggerInput>;
    where?: Prisma.nexfloWhereInput;
};
export type nexfloUpdateToOneWithWhereWithoutTriggerInput = {
    where?: Prisma.nexfloWhereInput;
    data: Prisma.XOR<Prisma.nexfloUpdateWithoutTriggerInput, Prisma.nexfloUncheckedUpdateWithoutTriggerInput>;
};
export type nexfloUpdateWithoutTriggerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerId?: Prisma.StringFieldUpdateOperationsInput | string;
    actions?: Prisma.actionUpdateManyWithoutNexfloNestedInput;
    nexflorun?: Prisma.nexflorunUpdateManyWithoutNexfloNestedInput;
};
export type nexfloUncheckedUpdateWithoutTriggerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerId?: Prisma.StringFieldUpdateOperationsInput | string;
    actions?: Prisma.actionUncheckedUpdateManyWithoutNexfloNestedInput;
    nexflorun?: Prisma.nexflorunUncheckedUpdateManyWithoutNexfloNestedInput;
};
export type nexfloCreateWithoutActionsInput = {
    id?: string;
    triggerId: string;
    trigger?: Prisma.TriggerCreateNestedOneWithoutNexfloInput;
    nexflorun?: Prisma.nexflorunCreateNestedManyWithoutNexfloInput;
};
export type nexfloUncheckedCreateWithoutActionsInput = {
    id?: string;
    triggerId: string;
    trigger?: Prisma.TriggerUncheckedCreateNestedOneWithoutNexfloInput;
    nexflorun?: Prisma.nexflorunUncheckedCreateNestedManyWithoutNexfloInput;
};
export type nexfloCreateOrConnectWithoutActionsInput = {
    where: Prisma.nexfloWhereUniqueInput;
    create: Prisma.XOR<Prisma.nexfloCreateWithoutActionsInput, Prisma.nexfloUncheckedCreateWithoutActionsInput>;
};
export type nexfloUpsertWithoutActionsInput = {
    update: Prisma.XOR<Prisma.nexfloUpdateWithoutActionsInput, Prisma.nexfloUncheckedUpdateWithoutActionsInput>;
    create: Prisma.XOR<Prisma.nexfloCreateWithoutActionsInput, Prisma.nexfloUncheckedCreateWithoutActionsInput>;
    where?: Prisma.nexfloWhereInput;
};
export type nexfloUpdateToOneWithWhereWithoutActionsInput = {
    where?: Prisma.nexfloWhereInput;
    data: Prisma.XOR<Prisma.nexfloUpdateWithoutActionsInput, Prisma.nexfloUncheckedUpdateWithoutActionsInput>;
};
export type nexfloUpdateWithoutActionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerId?: Prisma.StringFieldUpdateOperationsInput | string;
    trigger?: Prisma.TriggerUpdateOneWithoutNexfloNestedInput;
    nexflorun?: Prisma.nexflorunUpdateManyWithoutNexfloNestedInput;
};
export type nexfloUncheckedUpdateWithoutActionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerId?: Prisma.StringFieldUpdateOperationsInput | string;
    trigger?: Prisma.TriggerUncheckedUpdateOneWithoutNexfloNestedInput;
    nexflorun?: Prisma.nexflorunUncheckedUpdateManyWithoutNexfloNestedInput;
};
export type nexfloCreateWithoutNexflorunInput = {
    id?: string;
    triggerId: string;
    trigger?: Prisma.TriggerCreateNestedOneWithoutNexfloInput;
    actions?: Prisma.actionCreateNestedManyWithoutNexfloInput;
};
export type nexfloUncheckedCreateWithoutNexflorunInput = {
    id?: string;
    triggerId: string;
    trigger?: Prisma.TriggerUncheckedCreateNestedOneWithoutNexfloInput;
    actions?: Prisma.actionUncheckedCreateNestedManyWithoutNexfloInput;
};
export type nexfloCreateOrConnectWithoutNexflorunInput = {
    where: Prisma.nexfloWhereUniqueInput;
    create: Prisma.XOR<Prisma.nexfloCreateWithoutNexflorunInput, Prisma.nexfloUncheckedCreateWithoutNexflorunInput>;
};
export type nexfloUpsertWithoutNexflorunInput = {
    update: Prisma.XOR<Prisma.nexfloUpdateWithoutNexflorunInput, Prisma.nexfloUncheckedUpdateWithoutNexflorunInput>;
    create: Prisma.XOR<Prisma.nexfloCreateWithoutNexflorunInput, Prisma.nexfloUncheckedCreateWithoutNexflorunInput>;
    where?: Prisma.nexfloWhereInput;
};
export type nexfloUpdateToOneWithWhereWithoutNexflorunInput = {
    where?: Prisma.nexfloWhereInput;
    data: Prisma.XOR<Prisma.nexfloUpdateWithoutNexflorunInput, Prisma.nexfloUncheckedUpdateWithoutNexflorunInput>;
};
export type nexfloUpdateWithoutNexflorunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerId?: Prisma.StringFieldUpdateOperationsInput | string;
    trigger?: Prisma.TriggerUpdateOneWithoutNexfloNestedInput;
    actions?: Prisma.actionUpdateManyWithoutNexfloNestedInput;
};
export type nexfloUncheckedUpdateWithoutNexflorunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerId?: Prisma.StringFieldUpdateOperationsInput | string;
    trigger?: Prisma.TriggerUncheckedUpdateOneWithoutNexfloNestedInput;
    actions?: Prisma.actionUncheckedUpdateManyWithoutNexfloNestedInput;
};
/**
 * Count Type NexfloCountOutputType
 */
export type NexfloCountOutputType = {
    actions: number;
    nexflorun: number;
};
export type NexfloCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actions?: boolean | NexfloCountOutputTypeCountActionsArgs;
    nexflorun?: boolean | NexfloCountOutputTypeCountNexflorunArgs;
};
/**
 * NexfloCountOutputType without action
 */
export type NexfloCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NexfloCountOutputType
     */
    select?: Prisma.NexfloCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * NexfloCountOutputType without action
 */
export type NexfloCountOutputTypeCountActionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actionWhereInput;
};
/**
 * NexfloCountOutputType without action
 */
export type NexfloCountOutputTypeCountNexflorunArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.nexflorunWhereInput;
};
export type nexfloSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    triggerId?: boolean;
    trigger?: boolean | Prisma.nexflo$triggerArgs<ExtArgs>;
    actions?: boolean | Prisma.nexflo$actionsArgs<ExtArgs>;
    nexflorun?: boolean | Prisma.nexflo$nexflorunArgs<ExtArgs>;
    _count?: boolean | Prisma.NexfloCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["nexflo"]>;
export type nexfloSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    triggerId?: boolean;
}, ExtArgs["result"]["nexflo"]>;
export type nexfloSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    triggerId?: boolean;
}, ExtArgs["result"]["nexflo"]>;
export type nexfloSelectScalar = {
    id?: boolean;
    triggerId?: boolean;
};
export type nexfloOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "triggerId", ExtArgs["result"]["nexflo"]>;
export type nexfloInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trigger?: boolean | Prisma.nexflo$triggerArgs<ExtArgs>;
    actions?: boolean | Prisma.nexflo$actionsArgs<ExtArgs>;
    nexflorun?: boolean | Prisma.nexflo$nexflorunArgs<ExtArgs>;
    _count?: boolean | Prisma.NexfloCountOutputTypeDefaultArgs<ExtArgs>;
};
export type nexfloIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type nexfloIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $nexfloPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "nexflo";
    objects: {
        trigger: Prisma.$TriggerPayload<ExtArgs> | null;
        actions: Prisma.$actionPayload<ExtArgs>[];
        nexflorun: Prisma.$nexflorunPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        triggerId: string;
    }, ExtArgs["result"]["nexflo"]>;
    composites: {};
};
export type nexfloGetPayload<S extends boolean | null | undefined | nexfloDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$nexfloPayload, S>;
export type nexfloCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<nexfloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NexfloCountAggregateInputType | true;
};
export interface nexfloDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['nexflo'];
        meta: {
            name: 'nexflo';
        };
    };
    /**
     * Find zero or one Nexflo that matches the filter.
     * @param {nexfloFindUniqueArgs} args - Arguments to find a Nexflo
     * @example
     * // Get one Nexflo
     * const nexflo = await prisma.nexflo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nexfloFindUniqueArgs>(args: Prisma.SelectSubset<T, nexfloFindUniqueArgs<ExtArgs>>): Prisma.Prisma__nexfloClient<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Nexflo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nexfloFindUniqueOrThrowArgs} args - Arguments to find a Nexflo
     * @example
     * // Get one Nexflo
     * const nexflo = await prisma.nexflo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nexfloFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, nexfloFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__nexfloClient<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Nexflo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexfloFindFirstArgs} args - Arguments to find a Nexflo
     * @example
     * // Get one Nexflo
     * const nexflo = await prisma.nexflo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nexfloFindFirstArgs>(args?: Prisma.SelectSubset<T, nexfloFindFirstArgs<ExtArgs>>): Prisma.Prisma__nexfloClient<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Nexflo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexfloFindFirstOrThrowArgs} args - Arguments to find a Nexflo
     * @example
     * // Get one Nexflo
     * const nexflo = await prisma.nexflo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nexfloFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, nexfloFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__nexfloClient<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Nexflos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexfloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nexflos
     * const nexflos = await prisma.nexflo.findMany()
     *
     * // Get first 10 Nexflos
     * const nexflos = await prisma.nexflo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const nexfloWithIdOnly = await prisma.nexflo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends nexfloFindManyArgs>(args?: Prisma.SelectSubset<T, nexfloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Nexflo.
     * @param {nexfloCreateArgs} args - Arguments to create a Nexflo.
     * @example
     * // Create one Nexflo
     * const Nexflo = await prisma.nexflo.create({
     *   data: {
     *     // ... data to create a Nexflo
     *   }
     * })
     *
     */
    create<T extends nexfloCreateArgs>(args: Prisma.SelectSubset<T, nexfloCreateArgs<ExtArgs>>): Prisma.Prisma__nexfloClient<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Nexflos.
     * @param {nexfloCreateManyArgs} args - Arguments to create many Nexflos.
     * @example
     * // Create many Nexflos
     * const nexflo = await prisma.nexflo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends nexfloCreateManyArgs>(args?: Prisma.SelectSubset<T, nexfloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Nexflos and returns the data saved in the database.
     * @param {nexfloCreateManyAndReturnArgs} args - Arguments to create many Nexflos.
     * @example
     * // Create many Nexflos
     * const nexflo = await prisma.nexflo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Nexflos and only return the `id`
     * const nexfloWithIdOnly = await prisma.nexflo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends nexfloCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, nexfloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Nexflo.
     * @param {nexfloDeleteArgs} args - Arguments to delete one Nexflo.
     * @example
     * // Delete one Nexflo
     * const Nexflo = await prisma.nexflo.delete({
     *   where: {
     *     // ... filter to delete one Nexflo
     *   }
     * })
     *
     */
    delete<T extends nexfloDeleteArgs>(args: Prisma.SelectSubset<T, nexfloDeleteArgs<ExtArgs>>): Prisma.Prisma__nexfloClient<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Nexflo.
     * @param {nexfloUpdateArgs} args - Arguments to update one Nexflo.
     * @example
     * // Update one Nexflo
     * const nexflo = await prisma.nexflo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends nexfloUpdateArgs>(args: Prisma.SelectSubset<T, nexfloUpdateArgs<ExtArgs>>): Prisma.Prisma__nexfloClient<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Nexflos.
     * @param {nexfloDeleteManyArgs} args - Arguments to filter Nexflos to delete.
     * @example
     * // Delete a few Nexflos
     * const { count } = await prisma.nexflo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends nexfloDeleteManyArgs>(args?: Prisma.SelectSubset<T, nexfloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Nexflos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexfloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nexflos
     * const nexflo = await prisma.nexflo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends nexfloUpdateManyArgs>(args: Prisma.SelectSubset<T, nexfloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Nexflos and returns the data updated in the database.
     * @param {nexfloUpdateManyAndReturnArgs} args - Arguments to update many Nexflos.
     * @example
     * // Update many Nexflos
     * const nexflo = await prisma.nexflo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Nexflos and only return the `id`
     * const nexfloWithIdOnly = await prisma.nexflo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends nexfloUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, nexfloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Nexflo.
     * @param {nexfloUpsertArgs} args - Arguments to update or create a Nexflo.
     * @example
     * // Update or create a Nexflo
     * const nexflo = await prisma.nexflo.upsert({
     *   create: {
     *     // ... data to create a Nexflo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nexflo we want to update
     *   }
     * })
     */
    upsert<T extends nexfloUpsertArgs>(args: Prisma.SelectSubset<T, nexfloUpsertArgs<ExtArgs>>): Prisma.Prisma__nexfloClient<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Nexflos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexfloCountArgs} args - Arguments to filter Nexflos to count.
     * @example
     * // Count the number of Nexflos
     * const count = await prisma.nexflo.count({
     *   where: {
     *     // ... the filter for the Nexflos we want to count
     *   }
     * })
    **/
    count<T extends nexfloCountArgs>(args?: Prisma.Subset<T, nexfloCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NexfloCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Nexflo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NexfloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NexfloAggregateArgs>(args: Prisma.Subset<T, NexfloAggregateArgs>): Prisma.PrismaPromise<GetNexfloAggregateType<T>>;
    /**
     * Group by Nexflo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexfloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends nexfloGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: nexfloGroupByArgs['orderBy'];
    } : {
        orderBy?: nexfloGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, nexfloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNexfloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the nexflo model
     */
    readonly fields: nexfloFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for nexflo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__nexfloClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    trigger<T extends Prisma.nexflo$triggerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.nexflo$triggerArgs<ExtArgs>>): Prisma.Prisma__TriggerClient<runtime.Types.Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    actions<T extends Prisma.nexflo$actionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.nexflo$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    nexflorun<T extends Prisma.nexflo$nexflorunArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.nexflo$nexflorunArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the nexflo model
 */
export interface nexfloFieldRefs {
    readonly id: Prisma.FieldRef<"nexflo", 'String'>;
    readonly triggerId: Prisma.FieldRef<"nexflo", 'String'>;
}
/**
 * nexflo findUnique
 */
export type nexfloFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexfloInclude<ExtArgs> | null;
    /**
     * Filter, which nexflo to fetch.
     */
    where: Prisma.nexfloWhereUniqueInput;
};
/**
 * nexflo findUniqueOrThrow
 */
export type nexfloFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexfloInclude<ExtArgs> | null;
    /**
     * Filter, which nexflo to fetch.
     */
    where: Prisma.nexfloWhereUniqueInput;
};
/**
 * nexflo findFirst
 */
export type nexfloFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexfloInclude<ExtArgs> | null;
    /**
     * Filter, which nexflo to fetch.
     */
    where?: Prisma.nexfloWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nexflos to fetch.
     */
    orderBy?: Prisma.nexfloOrderByWithRelationInput | Prisma.nexfloOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for nexflos.
     */
    cursor?: Prisma.nexfloWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nexflos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nexflos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of nexflos.
     */
    distinct?: Prisma.NexfloScalarFieldEnum | Prisma.NexfloScalarFieldEnum[];
};
/**
 * nexflo findFirstOrThrow
 */
export type nexfloFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexfloInclude<ExtArgs> | null;
    /**
     * Filter, which nexflo to fetch.
     */
    where?: Prisma.nexfloWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nexflos to fetch.
     */
    orderBy?: Prisma.nexfloOrderByWithRelationInput | Prisma.nexfloOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for nexflos.
     */
    cursor?: Prisma.nexfloWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nexflos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nexflos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of nexflos.
     */
    distinct?: Prisma.NexfloScalarFieldEnum | Prisma.NexfloScalarFieldEnum[];
};
/**
 * nexflo findMany
 */
export type nexfloFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexfloInclude<ExtArgs> | null;
    /**
     * Filter, which nexflos to fetch.
     */
    where?: Prisma.nexfloWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nexflos to fetch.
     */
    orderBy?: Prisma.nexfloOrderByWithRelationInput | Prisma.nexfloOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing nexflos.
     */
    cursor?: Prisma.nexfloWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nexflos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nexflos.
     */
    skip?: number;
    distinct?: Prisma.NexfloScalarFieldEnum | Prisma.NexfloScalarFieldEnum[];
};
/**
 * nexflo create
 */
export type nexfloCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexfloInclude<ExtArgs> | null;
    /**
     * The data needed to create a nexflo.
     */
    data: Prisma.XOR<Prisma.nexfloCreateInput, Prisma.nexfloUncheckedCreateInput>;
};
/**
 * nexflo createMany
 */
export type nexfloCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many nexflos.
     */
    data: Prisma.nexfloCreateManyInput | Prisma.nexfloCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * nexflo createManyAndReturn
 */
export type nexfloCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * The data used to create many nexflos.
     */
    data: Prisma.nexfloCreateManyInput | Prisma.nexfloCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * nexflo update
 */
export type nexfloUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexfloInclude<ExtArgs> | null;
    /**
     * The data needed to update a nexflo.
     */
    data: Prisma.XOR<Prisma.nexfloUpdateInput, Prisma.nexfloUncheckedUpdateInput>;
    /**
     * Choose, which nexflo to update.
     */
    where: Prisma.nexfloWhereUniqueInput;
};
/**
 * nexflo updateMany
 */
export type nexfloUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update nexflos.
     */
    data: Prisma.XOR<Prisma.nexfloUpdateManyMutationInput, Prisma.nexfloUncheckedUpdateManyInput>;
    /**
     * Filter which nexflos to update
     */
    where?: Prisma.nexfloWhereInput;
    /**
     * Limit how many nexflos to update.
     */
    limit?: number;
};
/**
 * nexflo updateManyAndReturn
 */
export type nexfloUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * The data used to update nexflos.
     */
    data: Prisma.XOR<Prisma.nexfloUpdateManyMutationInput, Prisma.nexfloUncheckedUpdateManyInput>;
    /**
     * Filter which nexflos to update
     */
    where?: Prisma.nexfloWhereInput;
    /**
     * Limit how many nexflos to update.
     */
    limit?: number;
};
/**
 * nexflo upsert
 */
export type nexfloUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexfloInclude<ExtArgs> | null;
    /**
     * The filter to search for the nexflo to update in case it exists.
     */
    where: Prisma.nexfloWhereUniqueInput;
    /**
     * In case the nexflo found by the `where` argument doesn't exist, create a new nexflo with this data.
     */
    create: Prisma.XOR<Prisma.nexfloCreateInput, Prisma.nexfloUncheckedCreateInput>;
    /**
     * In case the nexflo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.nexfloUpdateInput, Prisma.nexfloUncheckedUpdateInput>;
};
/**
 * nexflo delete
 */
export type nexfloDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexfloInclude<ExtArgs> | null;
    /**
     * Filter which nexflo to delete.
     */
    where: Prisma.nexfloWhereUniqueInput;
};
/**
 * nexflo deleteMany
 */
export type nexfloDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which nexflos to delete
     */
    where?: Prisma.nexfloWhereInput;
    /**
     * Limit how many nexflos to delete.
     */
    limit?: number;
};
/**
 * nexflo.trigger
 */
export type nexflo$triggerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: Prisma.TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: Prisma.TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TriggerInclude<ExtArgs> | null;
    where?: Prisma.TriggerWhereInput;
};
/**
 * nexflo.actions
 */
export type nexflo$actionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the action
     */
    select?: Prisma.actionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the action
     */
    omit?: Prisma.actionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.actionInclude<ExtArgs> | null;
    where?: Prisma.actionWhereInput;
    orderBy?: Prisma.actionOrderByWithRelationInput | Prisma.actionOrderByWithRelationInput[];
    cursor?: Prisma.actionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActionScalarFieldEnum | Prisma.ActionScalarFieldEnum[];
};
/**
 * nexflo.nexflorun
 */
export type nexflo$nexflorunArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflorun
     */
    select?: Prisma.nexflorunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflorun
     */
    omit?: Prisma.nexflorunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexflorunInclude<ExtArgs> | null;
    where?: Prisma.nexflorunWhereInput;
    orderBy?: Prisma.nexflorunOrderByWithRelationInput | Prisma.nexflorunOrderByWithRelationInput[];
    cursor?: Prisma.nexflorunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NexflorunScalarFieldEnum | Prisma.NexflorunScalarFieldEnum[];
};
/**
 * nexflo without action
 */
export type nexfloDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflo
     */
    select?: Prisma.nexfloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflo
     */
    omit?: Prisma.nexfloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexfloInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=nexflo.d.ts.map