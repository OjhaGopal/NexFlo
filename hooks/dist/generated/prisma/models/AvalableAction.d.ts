import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AvalableAction
 *
 */
export type AvalableActionModel = runtime.Types.Result.DefaultSelection<Prisma.$AvalableActionPayload>;
export type AggregateAvalableAction = {
    _count: AvalableActionCountAggregateOutputType | null;
    _min: AvalableActionMinAggregateOutputType | null;
    _max: AvalableActionMaxAggregateOutputType | null;
};
export type AvalableActionMinAggregateOutputType = {
    id: string | null;
    name: string | null;
};
export type AvalableActionMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
};
export type AvalableActionCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type AvalableActionMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type AvalableActionMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type AvalableActionCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type AvalableActionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AvalableAction to aggregate.
     */
    where?: Prisma.AvalableActionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvalableActions to fetch.
     */
    orderBy?: Prisma.AvalableActionOrderByWithRelationInput | Prisma.AvalableActionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AvalableActionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvalableActions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvalableActions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AvalableActions
    **/
    _count?: true | AvalableActionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AvalableActionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AvalableActionMaxAggregateInputType;
};
export type GetAvalableActionAggregateType<T extends AvalableActionAggregateArgs> = {
    [P in keyof T & keyof AggregateAvalableAction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvalableAction[P]> : Prisma.GetScalarType<T[P], AggregateAvalableAction[P]>;
};
export type AvalableActionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvalableActionWhereInput;
    orderBy?: Prisma.AvalableActionOrderByWithAggregationInput | Prisma.AvalableActionOrderByWithAggregationInput[];
    by: Prisma.AvalableActionScalarFieldEnum[] | Prisma.AvalableActionScalarFieldEnum;
    having?: Prisma.AvalableActionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvalableActionCountAggregateInputType | true;
    _min?: AvalableActionMinAggregateInputType;
    _max?: AvalableActionMaxAggregateInputType;
};
export type AvalableActionGroupByOutputType = {
    id: string;
    name: string;
    _count: AvalableActionCountAggregateOutputType | null;
    _min: AvalableActionMinAggregateOutputType | null;
    _max: AvalableActionMaxAggregateOutputType | null;
};
type GetAvalableActionGroupByPayload<T extends AvalableActionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AvalableActionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AvalableActionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AvalableActionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AvalableActionGroupByOutputType[P]>;
}>>;
export type AvalableActionWhereInput = {
    AND?: Prisma.AvalableActionWhereInput | Prisma.AvalableActionWhereInput[];
    OR?: Prisma.AvalableActionWhereInput[];
    NOT?: Prisma.AvalableActionWhereInput | Prisma.AvalableActionWhereInput[];
    id?: Prisma.StringFilter<"AvalableAction"> | string;
    name?: Prisma.StringFilter<"AvalableAction"> | string;
    actions?: Prisma.ActionListRelationFilter;
};
export type AvalableActionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    actions?: Prisma.actionOrderByRelationAggregateInput;
};
export type AvalableActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AvalableActionWhereInput | Prisma.AvalableActionWhereInput[];
    OR?: Prisma.AvalableActionWhereInput[];
    NOT?: Prisma.AvalableActionWhereInput | Prisma.AvalableActionWhereInput[];
    name?: Prisma.StringFilter<"AvalableAction"> | string;
    actions?: Prisma.ActionListRelationFilter;
}, "id">;
export type AvalableActionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.AvalableActionCountOrderByAggregateInput;
    _max?: Prisma.AvalableActionMaxOrderByAggregateInput;
    _min?: Prisma.AvalableActionMinOrderByAggregateInput;
};
export type AvalableActionScalarWhereWithAggregatesInput = {
    AND?: Prisma.AvalableActionScalarWhereWithAggregatesInput | Prisma.AvalableActionScalarWhereWithAggregatesInput[];
    OR?: Prisma.AvalableActionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AvalableActionScalarWhereWithAggregatesInput | Prisma.AvalableActionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AvalableAction"> | string;
    name?: Prisma.StringWithAggregatesFilter<"AvalableAction"> | string;
};
export type AvalableActionCreateInput = {
    id?: string;
    name: string;
    actions?: Prisma.actionCreateNestedManyWithoutTypeInput;
};
export type AvalableActionUncheckedCreateInput = {
    id?: string;
    name: string;
    actions?: Prisma.actionUncheckedCreateNestedManyWithoutTypeInput;
};
export type AvalableActionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    actions?: Prisma.actionUpdateManyWithoutTypeNestedInput;
};
export type AvalableActionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    actions?: Prisma.actionUncheckedUpdateManyWithoutTypeNestedInput;
};
export type AvalableActionCreateManyInput = {
    id?: string;
    name: string;
};
export type AvalableActionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AvalableActionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AvalableActionScalarRelationFilter = {
    is?: Prisma.AvalableActionWhereInput;
    isNot?: Prisma.AvalableActionWhereInput;
};
export type AvalableActionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type AvalableActionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type AvalableActionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type AvalableActionCreateNestedOneWithoutActionsInput = {
    create?: Prisma.XOR<Prisma.AvalableActionCreateWithoutActionsInput, Prisma.AvalableActionUncheckedCreateWithoutActionsInput>;
    connectOrCreate?: Prisma.AvalableActionCreateOrConnectWithoutActionsInput;
    connect?: Prisma.AvalableActionWhereUniqueInput;
};
export type AvalableActionUpdateOneRequiredWithoutActionsNestedInput = {
    create?: Prisma.XOR<Prisma.AvalableActionCreateWithoutActionsInput, Prisma.AvalableActionUncheckedCreateWithoutActionsInput>;
    connectOrCreate?: Prisma.AvalableActionCreateOrConnectWithoutActionsInput;
    upsert?: Prisma.AvalableActionUpsertWithoutActionsInput;
    connect?: Prisma.AvalableActionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AvalableActionUpdateToOneWithWhereWithoutActionsInput, Prisma.AvalableActionUpdateWithoutActionsInput>, Prisma.AvalableActionUncheckedUpdateWithoutActionsInput>;
};
export type AvalableActionCreateWithoutActionsInput = {
    id?: string;
    name: string;
};
export type AvalableActionUncheckedCreateWithoutActionsInput = {
    id?: string;
    name: string;
};
export type AvalableActionCreateOrConnectWithoutActionsInput = {
    where: Prisma.AvalableActionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvalableActionCreateWithoutActionsInput, Prisma.AvalableActionUncheckedCreateWithoutActionsInput>;
};
export type AvalableActionUpsertWithoutActionsInput = {
    update: Prisma.XOR<Prisma.AvalableActionUpdateWithoutActionsInput, Prisma.AvalableActionUncheckedUpdateWithoutActionsInput>;
    create: Prisma.XOR<Prisma.AvalableActionCreateWithoutActionsInput, Prisma.AvalableActionUncheckedCreateWithoutActionsInput>;
    where?: Prisma.AvalableActionWhereInput;
};
export type AvalableActionUpdateToOneWithWhereWithoutActionsInput = {
    where?: Prisma.AvalableActionWhereInput;
    data: Prisma.XOR<Prisma.AvalableActionUpdateWithoutActionsInput, Prisma.AvalableActionUncheckedUpdateWithoutActionsInput>;
};
export type AvalableActionUpdateWithoutActionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AvalableActionUncheckedUpdateWithoutActionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type AvalableActionCountOutputType
 */
export type AvalableActionCountOutputType = {
    actions: number;
};
export type AvalableActionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actions?: boolean | AvalableActionCountOutputTypeCountActionsArgs;
};
/**
 * AvalableActionCountOutputType without action
 */
export type AvalableActionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableActionCountOutputType
     */
    select?: Prisma.AvalableActionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AvalableActionCountOutputType without action
 */
export type AvalableActionCountOutputTypeCountActionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actionWhereInput;
};
export type AvalableActionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    actions?: boolean | Prisma.AvalableAction$actionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AvalableActionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avalableAction"]>;
export type AvalableActionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["avalableAction"]>;
export type AvalableActionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["avalableAction"]>;
export type AvalableActionSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type AvalableActionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["avalableAction"]>;
export type AvalableActionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actions?: boolean | Prisma.AvalableAction$actionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AvalableActionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AvalableActionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AvalableActionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AvalableActionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AvalableAction";
    objects: {
        actions: Prisma.$actionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
    }, ExtArgs["result"]["avalableAction"]>;
    composites: {};
};
export type AvalableActionGetPayload<S extends boolean | null | undefined | AvalableActionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload, S>;
export type AvalableActionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AvalableActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AvalableActionCountAggregateInputType | true;
};
export interface AvalableActionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AvalableAction'];
        meta: {
            name: 'AvalableAction';
        };
    };
    /**
     * Find zero or one AvalableAction that matches the filter.
     * @param {AvalableActionFindUniqueArgs} args - Arguments to find a AvalableAction
     * @example
     * // Get one AvalableAction
     * const avalableAction = await prisma.avalableAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvalableActionFindUniqueArgs>(args: Prisma.SelectSubset<T, AvalableActionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AvalableActionClient<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AvalableAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvalableActionFindUniqueOrThrowArgs} args - Arguments to find a AvalableAction
     * @example
     * // Get one AvalableAction
     * const avalableAction = await prisma.avalableAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvalableActionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AvalableActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvalableActionClient<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AvalableAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableActionFindFirstArgs} args - Arguments to find a AvalableAction
     * @example
     * // Get one AvalableAction
     * const avalableAction = await prisma.avalableAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvalableActionFindFirstArgs>(args?: Prisma.SelectSubset<T, AvalableActionFindFirstArgs<ExtArgs>>): Prisma.Prisma__AvalableActionClient<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AvalableAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableActionFindFirstOrThrowArgs} args - Arguments to find a AvalableAction
     * @example
     * // Get one AvalableAction
     * const avalableAction = await prisma.avalableAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvalableActionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AvalableActionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvalableActionClient<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AvalableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvalableActions
     * const avalableActions = await prisma.avalableAction.findMany()
     *
     * // Get first 10 AvalableActions
     * const avalableActions = await prisma.avalableAction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const avalableActionWithIdOnly = await prisma.avalableAction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AvalableActionFindManyArgs>(args?: Prisma.SelectSubset<T, AvalableActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AvalableAction.
     * @param {AvalableActionCreateArgs} args - Arguments to create a AvalableAction.
     * @example
     * // Create one AvalableAction
     * const AvalableAction = await prisma.avalableAction.create({
     *   data: {
     *     // ... data to create a AvalableAction
     *   }
     * })
     *
     */
    create<T extends AvalableActionCreateArgs>(args: Prisma.SelectSubset<T, AvalableActionCreateArgs<ExtArgs>>): Prisma.Prisma__AvalableActionClient<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AvalableActions.
     * @param {AvalableActionCreateManyArgs} args - Arguments to create many AvalableActions.
     * @example
     * // Create many AvalableActions
     * const avalableAction = await prisma.avalableAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AvalableActionCreateManyArgs>(args?: Prisma.SelectSubset<T, AvalableActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AvalableActions and returns the data saved in the database.
     * @param {AvalableActionCreateManyAndReturnArgs} args - Arguments to create many AvalableActions.
     * @example
     * // Create many AvalableActions
     * const avalableAction = await prisma.avalableAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AvalableActions and only return the `id`
     * const avalableActionWithIdOnly = await prisma.avalableAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AvalableActionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AvalableActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AvalableAction.
     * @param {AvalableActionDeleteArgs} args - Arguments to delete one AvalableAction.
     * @example
     * // Delete one AvalableAction
     * const AvalableAction = await prisma.avalableAction.delete({
     *   where: {
     *     // ... filter to delete one AvalableAction
     *   }
     * })
     *
     */
    delete<T extends AvalableActionDeleteArgs>(args: Prisma.SelectSubset<T, AvalableActionDeleteArgs<ExtArgs>>): Prisma.Prisma__AvalableActionClient<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AvalableAction.
     * @param {AvalableActionUpdateArgs} args - Arguments to update one AvalableAction.
     * @example
     * // Update one AvalableAction
     * const avalableAction = await prisma.avalableAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AvalableActionUpdateArgs>(args: Prisma.SelectSubset<T, AvalableActionUpdateArgs<ExtArgs>>): Prisma.Prisma__AvalableActionClient<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AvalableActions.
     * @param {AvalableActionDeleteManyArgs} args - Arguments to filter AvalableActions to delete.
     * @example
     * // Delete a few AvalableActions
     * const { count } = await prisma.avalableAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AvalableActionDeleteManyArgs>(args?: Prisma.SelectSubset<T, AvalableActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AvalableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvalableActions
     * const avalableAction = await prisma.avalableAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AvalableActionUpdateManyArgs>(args: Prisma.SelectSubset<T, AvalableActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AvalableActions and returns the data updated in the database.
     * @param {AvalableActionUpdateManyAndReturnArgs} args - Arguments to update many AvalableActions.
     * @example
     * // Update many AvalableActions
     * const avalableAction = await prisma.avalableAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AvalableActions and only return the `id`
     * const avalableActionWithIdOnly = await prisma.avalableAction.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvalableActionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AvalableActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AvalableAction.
     * @param {AvalableActionUpsertArgs} args - Arguments to update or create a AvalableAction.
     * @example
     * // Update or create a AvalableAction
     * const avalableAction = await prisma.avalableAction.upsert({
     *   create: {
     *     // ... data to create a AvalableAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvalableAction we want to update
     *   }
     * })
     */
    upsert<T extends AvalableActionUpsertArgs>(args: Prisma.SelectSubset<T, AvalableActionUpsertArgs<ExtArgs>>): Prisma.Prisma__AvalableActionClient<runtime.Types.Result.GetResult<Prisma.$AvalableActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AvalableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableActionCountArgs} args - Arguments to filter AvalableActions to count.
     * @example
     * // Count the number of AvalableActions
     * const count = await prisma.avalableAction.count({
     *   where: {
     *     // ... the filter for the AvalableActions we want to count
     *   }
     * })
    **/
    count<T extends AvalableActionCountArgs>(args?: Prisma.Subset<T, AvalableActionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AvalableActionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AvalableAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvalableActionAggregateArgs>(args: Prisma.Subset<T, AvalableActionAggregateArgs>): Prisma.PrismaPromise<GetAvalableActionAggregateType<T>>;
    /**
     * Group by AvalableAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableActionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AvalableActionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AvalableActionGroupByArgs['orderBy'];
    } : {
        orderBy?: AvalableActionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AvalableActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvalableActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AvalableAction model
     */
    readonly fields: AvalableActionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AvalableAction.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AvalableActionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actions<T extends Prisma.AvalableAction$actionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AvalableAction$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the AvalableAction model
 */
export interface AvalableActionFieldRefs {
    readonly id: Prisma.FieldRef<"AvalableAction", 'String'>;
    readonly name: Prisma.FieldRef<"AvalableAction", 'String'>;
}
/**
 * AvalableAction findUnique
 */
export type AvalableActionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableActionInclude<ExtArgs> | null;
    /**
     * Filter, which AvalableAction to fetch.
     */
    where: Prisma.AvalableActionWhereUniqueInput;
};
/**
 * AvalableAction findUniqueOrThrow
 */
export type AvalableActionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableActionInclude<ExtArgs> | null;
    /**
     * Filter, which AvalableAction to fetch.
     */
    where: Prisma.AvalableActionWhereUniqueInput;
};
/**
 * AvalableAction findFirst
 */
export type AvalableActionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableActionInclude<ExtArgs> | null;
    /**
     * Filter, which AvalableAction to fetch.
     */
    where?: Prisma.AvalableActionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvalableActions to fetch.
     */
    orderBy?: Prisma.AvalableActionOrderByWithRelationInput | Prisma.AvalableActionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvalableActions.
     */
    cursor?: Prisma.AvalableActionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvalableActions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvalableActions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvalableActions.
     */
    distinct?: Prisma.AvalableActionScalarFieldEnum | Prisma.AvalableActionScalarFieldEnum[];
};
/**
 * AvalableAction findFirstOrThrow
 */
export type AvalableActionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableActionInclude<ExtArgs> | null;
    /**
     * Filter, which AvalableAction to fetch.
     */
    where?: Prisma.AvalableActionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvalableActions to fetch.
     */
    orderBy?: Prisma.AvalableActionOrderByWithRelationInput | Prisma.AvalableActionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvalableActions.
     */
    cursor?: Prisma.AvalableActionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvalableActions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvalableActions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvalableActions.
     */
    distinct?: Prisma.AvalableActionScalarFieldEnum | Prisma.AvalableActionScalarFieldEnum[];
};
/**
 * AvalableAction findMany
 */
export type AvalableActionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableActionInclude<ExtArgs> | null;
    /**
     * Filter, which AvalableActions to fetch.
     */
    where?: Prisma.AvalableActionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvalableActions to fetch.
     */
    orderBy?: Prisma.AvalableActionOrderByWithRelationInput | Prisma.AvalableActionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AvalableActions.
     */
    cursor?: Prisma.AvalableActionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvalableActions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvalableActions.
     */
    skip?: number;
    distinct?: Prisma.AvalableActionScalarFieldEnum | Prisma.AvalableActionScalarFieldEnum[];
};
/**
 * AvalableAction create
 */
export type AvalableActionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableActionInclude<ExtArgs> | null;
    /**
     * The data needed to create a AvalableAction.
     */
    data: Prisma.XOR<Prisma.AvalableActionCreateInput, Prisma.AvalableActionUncheckedCreateInput>;
};
/**
 * AvalableAction createMany
 */
export type AvalableActionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvalableActions.
     */
    data: Prisma.AvalableActionCreateManyInput | Prisma.AvalableActionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AvalableAction createManyAndReturn
 */
export type AvalableActionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * The data used to create many AvalableActions.
     */
    data: Prisma.AvalableActionCreateManyInput | Prisma.AvalableActionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AvalableAction update
 */
export type AvalableActionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableActionInclude<ExtArgs> | null;
    /**
     * The data needed to update a AvalableAction.
     */
    data: Prisma.XOR<Prisma.AvalableActionUpdateInput, Prisma.AvalableActionUncheckedUpdateInput>;
    /**
     * Choose, which AvalableAction to update.
     */
    where: Prisma.AvalableActionWhereUniqueInput;
};
/**
 * AvalableAction updateMany
 */
export type AvalableActionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AvalableActions.
     */
    data: Prisma.XOR<Prisma.AvalableActionUpdateManyMutationInput, Prisma.AvalableActionUncheckedUpdateManyInput>;
    /**
     * Filter which AvalableActions to update
     */
    where?: Prisma.AvalableActionWhereInput;
    /**
     * Limit how many AvalableActions to update.
     */
    limit?: number;
};
/**
 * AvalableAction updateManyAndReturn
 */
export type AvalableActionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * The data used to update AvalableActions.
     */
    data: Prisma.XOR<Prisma.AvalableActionUpdateManyMutationInput, Prisma.AvalableActionUncheckedUpdateManyInput>;
    /**
     * Filter which AvalableActions to update
     */
    where?: Prisma.AvalableActionWhereInput;
    /**
     * Limit how many AvalableActions to update.
     */
    limit?: number;
};
/**
 * AvalableAction upsert
 */
export type AvalableActionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableActionInclude<ExtArgs> | null;
    /**
     * The filter to search for the AvalableAction to update in case it exists.
     */
    where: Prisma.AvalableActionWhereUniqueInput;
    /**
     * In case the AvalableAction found by the `where` argument doesn't exist, create a new AvalableAction with this data.
     */
    create: Prisma.XOR<Prisma.AvalableActionCreateInput, Prisma.AvalableActionUncheckedCreateInput>;
    /**
     * In case the AvalableAction was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AvalableActionUpdateInput, Prisma.AvalableActionUncheckedUpdateInput>;
};
/**
 * AvalableAction delete
 */
export type AvalableActionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableActionInclude<ExtArgs> | null;
    /**
     * Filter which AvalableAction to delete.
     */
    where: Prisma.AvalableActionWhereUniqueInput;
};
/**
 * AvalableAction deleteMany
 */
export type AvalableActionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AvalableActions to delete
     */
    where?: Prisma.AvalableActionWhereInput;
    /**
     * Limit how many AvalableActions to delete.
     */
    limit?: number;
};
/**
 * AvalableAction.actions
 */
export type AvalableAction$actionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * AvalableAction without action
 */
export type AvalableActionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableAction
     */
    select?: Prisma.AvalableActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableAction
     */
    omit?: Prisma.AvalableActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableActionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AvalableAction.d.ts.map