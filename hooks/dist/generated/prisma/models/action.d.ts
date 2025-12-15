import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model action
 *
 */
export type actionModel = runtime.Types.Result.DefaultSelection<Prisma.$actionPayload>;
export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null;
    _min: ActionMinAggregateOutputType | null;
    _max: ActionMaxAggregateOutputType | null;
};
export type ActionMinAggregateOutputType = {
    id: string | null;
    nexfloId: string | null;
    actionId: string | null;
};
export type ActionMaxAggregateOutputType = {
    id: string | null;
    nexfloId: string | null;
    actionId: string | null;
};
export type ActionCountAggregateOutputType = {
    id: number;
    nexfloId: number;
    actionId: number;
    _all: number;
};
export type ActionMinAggregateInputType = {
    id?: true;
    nexfloId?: true;
    actionId?: true;
};
export type ActionMaxAggregateInputType = {
    id?: true;
    nexfloId?: true;
    actionId?: true;
};
export type ActionCountAggregateInputType = {
    id?: true;
    nexfloId?: true;
    actionId?: true;
    _all?: true;
};
export type ActionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which action to aggregate.
     */
    where?: Prisma.actionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actions to fetch.
     */
    orderBy?: Prisma.actionOrderByWithRelationInput | Prisma.actionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.actionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned actions
    **/
    _count?: true | ActionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType;
};
export type GetActionAggregateType<T extends ActionAggregateArgs> = {
    [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAction[P]> : Prisma.GetScalarType<T[P], AggregateAction[P]>;
};
export type actionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actionWhereInput;
    orderBy?: Prisma.actionOrderByWithAggregationInput | Prisma.actionOrderByWithAggregationInput[];
    by: Prisma.ActionScalarFieldEnum[] | Prisma.ActionScalarFieldEnum;
    having?: Prisma.actionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActionCountAggregateInputType | true;
    _min?: ActionMinAggregateInputType;
    _max?: ActionMaxAggregateInputType;
};
export type ActionGroupByOutputType = {
    id: string;
    nexfloId: string;
    actionId: string;
    _count: ActionCountAggregateOutputType | null;
    _min: ActionMinAggregateOutputType | null;
    _max: ActionMaxAggregateOutputType | null;
};
type GetActionGroupByPayload<T extends actionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActionGroupByOutputType[P]>;
}>>;
export type actionWhereInput = {
    AND?: Prisma.actionWhereInput | Prisma.actionWhereInput[];
    OR?: Prisma.actionWhereInput[];
    NOT?: Prisma.actionWhereInput | Prisma.actionWhereInput[];
    id?: Prisma.StringFilter<"action"> | string;
    nexfloId?: Prisma.StringFilter<"action"> | string;
    actionId?: Prisma.StringFilter<"action"> | string;
    nexflo?: Prisma.XOR<Prisma.NexfloScalarRelationFilter, Prisma.nexfloWhereInput>;
    type?: Prisma.XOR<Prisma.AvalableActionScalarRelationFilter, Prisma.AvalableActionWhereInput>;
};
export type actionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nexfloId?: Prisma.SortOrder;
    actionId?: Prisma.SortOrder;
    nexflo?: Prisma.nexfloOrderByWithRelationInput;
    type?: Prisma.AvalableActionOrderByWithRelationInput;
};
export type actionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.actionWhereInput | Prisma.actionWhereInput[];
    OR?: Prisma.actionWhereInput[];
    NOT?: Prisma.actionWhereInput | Prisma.actionWhereInput[];
    nexfloId?: Prisma.StringFilter<"action"> | string;
    actionId?: Prisma.StringFilter<"action"> | string;
    nexflo?: Prisma.XOR<Prisma.NexfloScalarRelationFilter, Prisma.nexfloWhereInput>;
    type?: Prisma.XOR<Prisma.AvalableActionScalarRelationFilter, Prisma.AvalableActionWhereInput>;
}, "id">;
export type actionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nexfloId?: Prisma.SortOrder;
    actionId?: Prisma.SortOrder;
    _count?: Prisma.actionCountOrderByAggregateInput;
    _max?: Prisma.actionMaxOrderByAggregateInput;
    _min?: Prisma.actionMinOrderByAggregateInput;
};
export type actionScalarWhereWithAggregatesInput = {
    AND?: Prisma.actionScalarWhereWithAggregatesInput | Prisma.actionScalarWhereWithAggregatesInput[];
    OR?: Prisma.actionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.actionScalarWhereWithAggregatesInput | Prisma.actionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"action"> | string;
    nexfloId?: Prisma.StringWithAggregatesFilter<"action"> | string;
    actionId?: Prisma.StringWithAggregatesFilter<"action"> | string;
};
export type actionCreateInput = {
    id?: string;
    nexflo: Prisma.nexfloCreateNestedOneWithoutActionsInput;
    type: Prisma.AvalableActionCreateNestedOneWithoutActionsInput;
};
export type actionUncheckedCreateInput = {
    id?: string;
    nexfloId: string;
    actionId: string;
};
export type actionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nexflo?: Prisma.nexfloUpdateOneRequiredWithoutActionsNestedInput;
    type?: Prisma.AvalableActionUpdateOneRequiredWithoutActionsNestedInput;
};
export type actionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nexfloId?: Prisma.StringFieldUpdateOperationsInput | string;
    actionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type actionCreateManyInput = {
    id?: string;
    nexfloId: string;
    actionId: string;
};
export type actionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type actionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nexfloId?: Prisma.StringFieldUpdateOperationsInput | string;
    actionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ActionListRelationFilter = {
    every?: Prisma.actionWhereInput;
    some?: Prisma.actionWhereInput;
    none?: Prisma.actionWhereInput;
};
export type actionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type actionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nexfloId?: Prisma.SortOrder;
    actionId?: Prisma.SortOrder;
};
export type actionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nexfloId?: Prisma.SortOrder;
    actionId?: Prisma.SortOrder;
};
export type actionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nexfloId?: Prisma.SortOrder;
    actionId?: Prisma.SortOrder;
};
export type actionCreateNestedManyWithoutNexfloInput = {
    create?: Prisma.XOR<Prisma.actionCreateWithoutNexfloInput, Prisma.actionUncheckedCreateWithoutNexfloInput> | Prisma.actionCreateWithoutNexfloInput[] | Prisma.actionUncheckedCreateWithoutNexfloInput[];
    connectOrCreate?: Prisma.actionCreateOrConnectWithoutNexfloInput | Prisma.actionCreateOrConnectWithoutNexfloInput[];
    createMany?: Prisma.actionCreateManyNexfloInputEnvelope;
    connect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
};
export type actionUncheckedCreateNestedManyWithoutNexfloInput = {
    create?: Prisma.XOR<Prisma.actionCreateWithoutNexfloInput, Prisma.actionUncheckedCreateWithoutNexfloInput> | Prisma.actionCreateWithoutNexfloInput[] | Prisma.actionUncheckedCreateWithoutNexfloInput[];
    connectOrCreate?: Prisma.actionCreateOrConnectWithoutNexfloInput | Prisma.actionCreateOrConnectWithoutNexfloInput[];
    createMany?: Prisma.actionCreateManyNexfloInputEnvelope;
    connect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
};
export type actionUpdateManyWithoutNexfloNestedInput = {
    create?: Prisma.XOR<Prisma.actionCreateWithoutNexfloInput, Prisma.actionUncheckedCreateWithoutNexfloInput> | Prisma.actionCreateWithoutNexfloInput[] | Prisma.actionUncheckedCreateWithoutNexfloInput[];
    connectOrCreate?: Prisma.actionCreateOrConnectWithoutNexfloInput | Prisma.actionCreateOrConnectWithoutNexfloInput[];
    upsert?: Prisma.actionUpsertWithWhereUniqueWithoutNexfloInput | Prisma.actionUpsertWithWhereUniqueWithoutNexfloInput[];
    createMany?: Prisma.actionCreateManyNexfloInputEnvelope;
    set?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    disconnect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    delete?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    connect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    update?: Prisma.actionUpdateWithWhereUniqueWithoutNexfloInput | Prisma.actionUpdateWithWhereUniqueWithoutNexfloInput[];
    updateMany?: Prisma.actionUpdateManyWithWhereWithoutNexfloInput | Prisma.actionUpdateManyWithWhereWithoutNexfloInput[];
    deleteMany?: Prisma.actionScalarWhereInput | Prisma.actionScalarWhereInput[];
};
export type actionUncheckedUpdateManyWithoutNexfloNestedInput = {
    create?: Prisma.XOR<Prisma.actionCreateWithoutNexfloInput, Prisma.actionUncheckedCreateWithoutNexfloInput> | Prisma.actionCreateWithoutNexfloInput[] | Prisma.actionUncheckedCreateWithoutNexfloInput[];
    connectOrCreate?: Prisma.actionCreateOrConnectWithoutNexfloInput | Prisma.actionCreateOrConnectWithoutNexfloInput[];
    upsert?: Prisma.actionUpsertWithWhereUniqueWithoutNexfloInput | Prisma.actionUpsertWithWhereUniqueWithoutNexfloInput[];
    createMany?: Prisma.actionCreateManyNexfloInputEnvelope;
    set?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    disconnect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    delete?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    connect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    update?: Prisma.actionUpdateWithWhereUniqueWithoutNexfloInput | Prisma.actionUpdateWithWhereUniqueWithoutNexfloInput[];
    updateMany?: Prisma.actionUpdateManyWithWhereWithoutNexfloInput | Prisma.actionUpdateManyWithWhereWithoutNexfloInput[];
    deleteMany?: Prisma.actionScalarWhereInput | Prisma.actionScalarWhereInput[];
};
export type actionCreateNestedManyWithoutTypeInput = {
    create?: Prisma.XOR<Prisma.actionCreateWithoutTypeInput, Prisma.actionUncheckedCreateWithoutTypeInput> | Prisma.actionCreateWithoutTypeInput[] | Prisma.actionUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.actionCreateOrConnectWithoutTypeInput | Prisma.actionCreateOrConnectWithoutTypeInput[];
    createMany?: Prisma.actionCreateManyTypeInputEnvelope;
    connect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
};
export type actionUncheckedCreateNestedManyWithoutTypeInput = {
    create?: Prisma.XOR<Prisma.actionCreateWithoutTypeInput, Prisma.actionUncheckedCreateWithoutTypeInput> | Prisma.actionCreateWithoutTypeInput[] | Prisma.actionUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.actionCreateOrConnectWithoutTypeInput | Prisma.actionCreateOrConnectWithoutTypeInput[];
    createMany?: Prisma.actionCreateManyTypeInputEnvelope;
    connect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
};
export type actionUpdateManyWithoutTypeNestedInput = {
    create?: Prisma.XOR<Prisma.actionCreateWithoutTypeInput, Prisma.actionUncheckedCreateWithoutTypeInput> | Prisma.actionCreateWithoutTypeInput[] | Prisma.actionUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.actionCreateOrConnectWithoutTypeInput | Prisma.actionCreateOrConnectWithoutTypeInput[];
    upsert?: Prisma.actionUpsertWithWhereUniqueWithoutTypeInput | Prisma.actionUpsertWithWhereUniqueWithoutTypeInput[];
    createMany?: Prisma.actionCreateManyTypeInputEnvelope;
    set?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    disconnect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    delete?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    connect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    update?: Prisma.actionUpdateWithWhereUniqueWithoutTypeInput | Prisma.actionUpdateWithWhereUniqueWithoutTypeInput[];
    updateMany?: Prisma.actionUpdateManyWithWhereWithoutTypeInput | Prisma.actionUpdateManyWithWhereWithoutTypeInput[];
    deleteMany?: Prisma.actionScalarWhereInput | Prisma.actionScalarWhereInput[];
};
export type actionUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: Prisma.XOR<Prisma.actionCreateWithoutTypeInput, Prisma.actionUncheckedCreateWithoutTypeInput> | Prisma.actionCreateWithoutTypeInput[] | Prisma.actionUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.actionCreateOrConnectWithoutTypeInput | Prisma.actionCreateOrConnectWithoutTypeInput[];
    upsert?: Prisma.actionUpsertWithWhereUniqueWithoutTypeInput | Prisma.actionUpsertWithWhereUniqueWithoutTypeInput[];
    createMany?: Prisma.actionCreateManyTypeInputEnvelope;
    set?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    disconnect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    delete?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    connect?: Prisma.actionWhereUniqueInput | Prisma.actionWhereUniqueInput[];
    update?: Prisma.actionUpdateWithWhereUniqueWithoutTypeInput | Prisma.actionUpdateWithWhereUniqueWithoutTypeInput[];
    updateMany?: Prisma.actionUpdateManyWithWhereWithoutTypeInput | Prisma.actionUpdateManyWithWhereWithoutTypeInput[];
    deleteMany?: Prisma.actionScalarWhereInput | Prisma.actionScalarWhereInput[];
};
export type actionCreateWithoutNexfloInput = {
    id?: string;
    type: Prisma.AvalableActionCreateNestedOneWithoutActionsInput;
};
export type actionUncheckedCreateWithoutNexfloInput = {
    id?: string;
    actionId: string;
};
export type actionCreateOrConnectWithoutNexfloInput = {
    where: Prisma.actionWhereUniqueInput;
    create: Prisma.XOR<Prisma.actionCreateWithoutNexfloInput, Prisma.actionUncheckedCreateWithoutNexfloInput>;
};
export type actionCreateManyNexfloInputEnvelope = {
    data: Prisma.actionCreateManyNexfloInput | Prisma.actionCreateManyNexfloInput[];
    skipDuplicates?: boolean;
};
export type actionUpsertWithWhereUniqueWithoutNexfloInput = {
    where: Prisma.actionWhereUniqueInput;
    update: Prisma.XOR<Prisma.actionUpdateWithoutNexfloInput, Prisma.actionUncheckedUpdateWithoutNexfloInput>;
    create: Prisma.XOR<Prisma.actionCreateWithoutNexfloInput, Prisma.actionUncheckedCreateWithoutNexfloInput>;
};
export type actionUpdateWithWhereUniqueWithoutNexfloInput = {
    where: Prisma.actionWhereUniqueInput;
    data: Prisma.XOR<Prisma.actionUpdateWithoutNexfloInput, Prisma.actionUncheckedUpdateWithoutNexfloInput>;
};
export type actionUpdateManyWithWhereWithoutNexfloInput = {
    where: Prisma.actionScalarWhereInput;
    data: Prisma.XOR<Prisma.actionUpdateManyMutationInput, Prisma.actionUncheckedUpdateManyWithoutNexfloInput>;
};
export type actionScalarWhereInput = {
    AND?: Prisma.actionScalarWhereInput | Prisma.actionScalarWhereInput[];
    OR?: Prisma.actionScalarWhereInput[];
    NOT?: Prisma.actionScalarWhereInput | Prisma.actionScalarWhereInput[];
    id?: Prisma.StringFilter<"action"> | string;
    nexfloId?: Prisma.StringFilter<"action"> | string;
    actionId?: Prisma.StringFilter<"action"> | string;
};
export type actionCreateWithoutTypeInput = {
    id?: string;
    nexflo: Prisma.nexfloCreateNestedOneWithoutActionsInput;
};
export type actionUncheckedCreateWithoutTypeInput = {
    id?: string;
    nexfloId: string;
};
export type actionCreateOrConnectWithoutTypeInput = {
    where: Prisma.actionWhereUniqueInput;
    create: Prisma.XOR<Prisma.actionCreateWithoutTypeInput, Prisma.actionUncheckedCreateWithoutTypeInput>;
};
export type actionCreateManyTypeInputEnvelope = {
    data: Prisma.actionCreateManyTypeInput | Prisma.actionCreateManyTypeInput[];
    skipDuplicates?: boolean;
};
export type actionUpsertWithWhereUniqueWithoutTypeInput = {
    where: Prisma.actionWhereUniqueInput;
    update: Prisma.XOR<Prisma.actionUpdateWithoutTypeInput, Prisma.actionUncheckedUpdateWithoutTypeInput>;
    create: Prisma.XOR<Prisma.actionCreateWithoutTypeInput, Prisma.actionUncheckedCreateWithoutTypeInput>;
};
export type actionUpdateWithWhereUniqueWithoutTypeInput = {
    where: Prisma.actionWhereUniqueInput;
    data: Prisma.XOR<Prisma.actionUpdateWithoutTypeInput, Prisma.actionUncheckedUpdateWithoutTypeInput>;
};
export type actionUpdateManyWithWhereWithoutTypeInput = {
    where: Prisma.actionScalarWhereInput;
    data: Prisma.XOR<Prisma.actionUpdateManyMutationInput, Prisma.actionUncheckedUpdateManyWithoutTypeInput>;
};
export type actionCreateManyNexfloInput = {
    id?: string;
    actionId: string;
};
export type actionUpdateWithoutNexfloInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.AvalableActionUpdateOneRequiredWithoutActionsNestedInput;
};
export type actionUncheckedUpdateWithoutNexfloInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type actionUncheckedUpdateManyWithoutNexfloInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type actionCreateManyTypeInput = {
    id?: string;
    nexfloId: string;
};
export type actionUpdateWithoutTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nexflo?: Prisma.nexfloUpdateOneRequiredWithoutActionsNestedInput;
};
export type actionUncheckedUpdateWithoutTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nexfloId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type actionUncheckedUpdateManyWithoutTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nexfloId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type actionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nexfloId?: boolean;
    actionId?: boolean;
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.AvalableActionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["action"]>;
export type actionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nexfloId?: boolean;
    actionId?: boolean;
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.AvalableActionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["action"]>;
export type actionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nexfloId?: boolean;
    actionId?: boolean;
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.AvalableActionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["action"]>;
export type actionSelectScalar = {
    id?: boolean;
    nexfloId?: boolean;
    actionId?: boolean;
};
export type actionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nexfloId" | "actionId", ExtArgs["result"]["action"]>;
export type actionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.AvalableActionDefaultArgs<ExtArgs>;
};
export type actionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.AvalableActionDefaultArgs<ExtArgs>;
};
export type actionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.AvalableActionDefaultArgs<ExtArgs>;
};
export type $actionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "action";
    objects: {
        nexflo: Prisma.$nexfloPayload<ExtArgs>;
        type: Prisma.$AvalableActionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nexfloId: string;
        actionId: string;
    }, ExtArgs["result"]["action"]>;
    composites: {};
};
export type actionGetPayload<S extends boolean | null | undefined | actionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$actionPayload, S>;
export type actionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<actionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActionCountAggregateInputType | true;
};
export interface actionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['action'];
        meta: {
            name: 'action';
        };
    };
    /**
     * Find zero or one Action that matches the filter.
     * @param {actionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends actionFindUniqueArgs>(args: Prisma.SelectSubset<T, actionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__actionClient<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {actionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends actionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, actionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__actionClient<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends actionFindFirstArgs>(args?: Prisma.SelectSubset<T, actionFindFirstArgs<ExtArgs>>): Prisma.Prisma__actionClient<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends actionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, actionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__actionClient<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     *
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     *
     */
    findMany<T extends actionFindManyArgs>(args?: Prisma.SelectSubset<T, actionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Action.
     * @param {actionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     *
     */
    create<T extends actionCreateArgs>(args: Prisma.SelectSubset<T, actionCreateArgs<ExtArgs>>): Prisma.Prisma__actionClient<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Actions.
     * @param {actionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends actionCreateManyArgs>(args?: Prisma.SelectSubset<T, actionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Actions and returns the data saved in the database.
     * @param {actionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends actionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, actionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Action.
     * @param {actionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     *
     */
    delete<T extends actionDeleteArgs>(args: Prisma.SelectSubset<T, actionDeleteArgs<ExtArgs>>): Prisma.Prisma__actionClient<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Action.
     * @param {actionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends actionUpdateArgs>(args: Prisma.SelectSubset<T, actionUpdateArgs<ExtArgs>>): Prisma.Prisma__actionClient<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Actions.
     * @param {actionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends actionDeleteManyArgs>(args?: Prisma.SelectSubset<T, actionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends actionUpdateManyArgs>(args: Prisma.SelectSubset<T, actionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {actionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
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
    updateManyAndReturn<T extends actionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, actionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Action.
     * @param {actionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends actionUpsertArgs>(args: Prisma.SelectSubset<T, actionUpsertArgs<ExtArgs>>): Prisma.Prisma__actionClient<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends actionCountArgs>(args?: Prisma.Subset<T, actionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionAggregateArgs>(args: Prisma.Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>;
    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends actionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: actionGroupByArgs['orderBy'];
    } : {
        orderBy?: actionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, actionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the action model
     */
    readonly fields: actionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for action.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__actionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    nexflo<T extends Prisma.nexfloDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.nexfloDefaultArgs<ExtArgs>>): Prisma.Prisma__nexfloClient<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    type<T extends Prisma.AvalableActionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AvalableActionDefaultArgs<ExtArgs>>): Prisma.Prisma__AvalableActionClient<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the action model
 */
export interface actionFieldRefs {
    readonly id: Prisma.FieldRef<"action", 'String'>;
    readonly nexfloId: Prisma.FieldRef<"action", 'String'>;
    readonly actionId: Prisma.FieldRef<"action", 'String'>;
}
/**
 * action findUnique
 */
export type actionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which action to fetch.
     */
    where: Prisma.actionWhereUniqueInput;
};
/**
 * action findUniqueOrThrow
 */
export type actionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which action to fetch.
     */
    where: Prisma.actionWhereUniqueInput;
};
/**
 * action findFirst
 */
export type actionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which action to fetch.
     */
    where?: Prisma.actionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actions to fetch.
     */
    orderBy?: Prisma.actionOrderByWithRelationInput | Prisma.actionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for actions.
     */
    cursor?: Prisma.actionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of actions.
     */
    distinct?: Prisma.ActionScalarFieldEnum | Prisma.ActionScalarFieldEnum[];
};
/**
 * action findFirstOrThrow
 */
export type actionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which action to fetch.
     */
    where?: Prisma.actionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actions to fetch.
     */
    orderBy?: Prisma.actionOrderByWithRelationInput | Prisma.actionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for actions.
     */
    cursor?: Prisma.actionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of actions.
     */
    distinct?: Prisma.ActionScalarFieldEnum | Prisma.ActionScalarFieldEnum[];
};
/**
 * action findMany
 */
export type actionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which actions to fetch.
     */
    where?: Prisma.actionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actions to fetch.
     */
    orderBy?: Prisma.actionOrderByWithRelationInput | Prisma.actionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing actions.
     */
    cursor?: Prisma.actionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actions.
     */
    skip?: number;
    distinct?: Prisma.ActionScalarFieldEnum | Prisma.ActionScalarFieldEnum[];
};
/**
 * action create
 */
export type actionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a action.
     */
    data: Prisma.XOR<Prisma.actionCreateInput, Prisma.actionUncheckedCreateInput>;
};
/**
 * action createMany
 */
export type actionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many actions.
     */
    data: Prisma.actionCreateManyInput | Prisma.actionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * action createManyAndReturn
 */
export type actionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the action
     */
    select?: Prisma.actionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the action
     */
    omit?: Prisma.actionOmit<ExtArgs> | null;
    /**
     * The data used to create many actions.
     */
    data: Prisma.actionCreateManyInput | Prisma.actionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.actionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * action update
 */
export type actionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a action.
     */
    data: Prisma.XOR<Prisma.actionUpdateInput, Prisma.actionUncheckedUpdateInput>;
    /**
     * Choose, which action to update.
     */
    where: Prisma.actionWhereUniqueInput;
};
/**
 * action updateMany
 */
export type actionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update actions.
     */
    data: Prisma.XOR<Prisma.actionUpdateManyMutationInput, Prisma.actionUncheckedUpdateManyInput>;
    /**
     * Filter which actions to update
     */
    where?: Prisma.actionWhereInput;
    /**
     * Limit how many actions to update.
     */
    limit?: number;
};
/**
 * action updateManyAndReturn
 */
export type actionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the action
     */
    select?: Prisma.actionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the action
     */
    omit?: Prisma.actionOmit<ExtArgs> | null;
    /**
     * The data used to update actions.
     */
    data: Prisma.XOR<Prisma.actionUpdateManyMutationInput, Prisma.actionUncheckedUpdateManyInput>;
    /**
     * Filter which actions to update
     */
    where?: Prisma.actionWhereInput;
    /**
     * Limit how many actions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.actionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * action upsert
 */
export type actionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the action to update in case it exists.
     */
    where: Prisma.actionWhereUniqueInput;
    /**
     * In case the action found by the `where` argument doesn't exist, create a new action with this data.
     */
    create: Prisma.XOR<Prisma.actionCreateInput, Prisma.actionUncheckedCreateInput>;
    /**
     * In case the action was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.actionUpdateInput, Prisma.actionUncheckedUpdateInput>;
};
/**
 * action delete
 */
export type actionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which action to delete.
     */
    where: Prisma.actionWhereUniqueInput;
};
/**
 * action deleteMany
 */
export type actionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which actions to delete
     */
    where?: Prisma.actionWhereInput;
    /**
     * Limit how many actions to delete.
     */
    limit?: number;
};
/**
 * action without action
 */
export type actionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=action.d.ts.map