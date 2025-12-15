import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AvalableTrigger
 *
 */
export type AvalableTriggerModel = runtime.Types.Result.DefaultSelection<Prisma.$AvalableTriggerPayload>;
export type AggregateAvalableTrigger = {
    _count: AvalableTriggerCountAggregateOutputType | null;
    _min: AvalableTriggerMinAggregateOutputType | null;
    _max: AvalableTriggerMaxAggregateOutputType | null;
};
export type AvalableTriggerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
};
export type AvalableTriggerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
};
export type AvalableTriggerCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type AvalableTriggerMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type AvalableTriggerMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type AvalableTriggerCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type AvalableTriggerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AvalableTrigger to aggregate.
     */
    where?: Prisma.AvalableTriggerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvalableTriggers to fetch.
     */
    orderBy?: Prisma.AvalableTriggerOrderByWithRelationInput | Prisma.AvalableTriggerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AvalableTriggerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvalableTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvalableTriggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AvalableTriggers
    **/
    _count?: true | AvalableTriggerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AvalableTriggerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AvalableTriggerMaxAggregateInputType;
};
export type GetAvalableTriggerAggregateType<T extends AvalableTriggerAggregateArgs> = {
    [P in keyof T & keyof AggregateAvalableTrigger]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvalableTrigger[P]> : Prisma.GetScalarType<T[P], AggregateAvalableTrigger[P]>;
};
export type AvalableTriggerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvalableTriggerWhereInput;
    orderBy?: Prisma.AvalableTriggerOrderByWithAggregationInput | Prisma.AvalableTriggerOrderByWithAggregationInput[];
    by: Prisma.AvalableTriggerScalarFieldEnum[] | Prisma.AvalableTriggerScalarFieldEnum;
    having?: Prisma.AvalableTriggerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvalableTriggerCountAggregateInputType | true;
    _min?: AvalableTriggerMinAggregateInputType;
    _max?: AvalableTriggerMaxAggregateInputType;
};
export type AvalableTriggerGroupByOutputType = {
    id: string;
    name: string;
    _count: AvalableTriggerCountAggregateOutputType | null;
    _min: AvalableTriggerMinAggregateOutputType | null;
    _max: AvalableTriggerMaxAggregateOutputType | null;
};
type GetAvalableTriggerGroupByPayload<T extends AvalableTriggerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AvalableTriggerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AvalableTriggerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AvalableTriggerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AvalableTriggerGroupByOutputType[P]>;
}>>;
export type AvalableTriggerWhereInput = {
    AND?: Prisma.AvalableTriggerWhereInput | Prisma.AvalableTriggerWhereInput[];
    OR?: Prisma.AvalableTriggerWhereInput[];
    NOT?: Prisma.AvalableTriggerWhereInput | Prisma.AvalableTriggerWhereInput[];
    id?: Prisma.StringFilter<"AvalableTrigger"> | string;
    name?: Prisma.StringFilter<"AvalableTrigger"> | string;
    trigger?: Prisma.TriggerListRelationFilter;
};
export type AvalableTriggerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    trigger?: Prisma.TriggerOrderByRelationAggregateInput;
};
export type AvalableTriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AvalableTriggerWhereInput | Prisma.AvalableTriggerWhereInput[];
    OR?: Prisma.AvalableTriggerWhereInput[];
    NOT?: Prisma.AvalableTriggerWhereInput | Prisma.AvalableTriggerWhereInput[];
    name?: Prisma.StringFilter<"AvalableTrigger"> | string;
    trigger?: Prisma.TriggerListRelationFilter;
}, "id">;
export type AvalableTriggerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.AvalableTriggerCountOrderByAggregateInput;
    _max?: Prisma.AvalableTriggerMaxOrderByAggregateInput;
    _min?: Prisma.AvalableTriggerMinOrderByAggregateInput;
};
export type AvalableTriggerScalarWhereWithAggregatesInput = {
    AND?: Prisma.AvalableTriggerScalarWhereWithAggregatesInput | Prisma.AvalableTriggerScalarWhereWithAggregatesInput[];
    OR?: Prisma.AvalableTriggerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AvalableTriggerScalarWhereWithAggregatesInput | Prisma.AvalableTriggerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AvalableTrigger"> | string;
    name?: Prisma.StringWithAggregatesFilter<"AvalableTrigger"> | string;
};
export type AvalableTriggerCreateInput = {
    id?: string;
    name: string;
    trigger?: Prisma.TriggerCreateNestedManyWithoutTypeInput;
};
export type AvalableTriggerUncheckedCreateInput = {
    id?: string;
    name: string;
    trigger?: Prisma.TriggerUncheckedCreateNestedManyWithoutTypeInput;
};
export type AvalableTriggerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    trigger?: Prisma.TriggerUpdateManyWithoutTypeNestedInput;
};
export type AvalableTriggerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    trigger?: Prisma.TriggerUncheckedUpdateManyWithoutTypeNestedInput;
};
export type AvalableTriggerCreateManyInput = {
    id?: string;
    name: string;
};
export type AvalableTriggerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AvalableTriggerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AvalableTriggerScalarRelationFilter = {
    is?: Prisma.AvalableTriggerWhereInput;
    isNot?: Prisma.AvalableTriggerWhereInput;
};
export type AvalableTriggerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type AvalableTriggerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type AvalableTriggerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type AvalableTriggerCreateNestedOneWithoutTriggerInput = {
    create?: Prisma.XOR<Prisma.AvalableTriggerCreateWithoutTriggerInput, Prisma.AvalableTriggerUncheckedCreateWithoutTriggerInput>;
    connectOrCreate?: Prisma.AvalableTriggerCreateOrConnectWithoutTriggerInput;
    connect?: Prisma.AvalableTriggerWhereUniqueInput;
};
export type AvalableTriggerUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: Prisma.XOR<Prisma.AvalableTriggerCreateWithoutTriggerInput, Prisma.AvalableTriggerUncheckedCreateWithoutTriggerInput>;
    connectOrCreate?: Prisma.AvalableTriggerCreateOrConnectWithoutTriggerInput;
    upsert?: Prisma.AvalableTriggerUpsertWithoutTriggerInput;
    connect?: Prisma.AvalableTriggerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AvalableTriggerUpdateToOneWithWhereWithoutTriggerInput, Prisma.AvalableTriggerUpdateWithoutTriggerInput>, Prisma.AvalableTriggerUncheckedUpdateWithoutTriggerInput>;
};
export type AvalableTriggerCreateWithoutTriggerInput = {
    id?: string;
    name: string;
};
export type AvalableTriggerUncheckedCreateWithoutTriggerInput = {
    id?: string;
    name: string;
};
export type AvalableTriggerCreateOrConnectWithoutTriggerInput = {
    where: Prisma.AvalableTriggerWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvalableTriggerCreateWithoutTriggerInput, Prisma.AvalableTriggerUncheckedCreateWithoutTriggerInput>;
};
export type AvalableTriggerUpsertWithoutTriggerInput = {
    update: Prisma.XOR<Prisma.AvalableTriggerUpdateWithoutTriggerInput, Prisma.AvalableTriggerUncheckedUpdateWithoutTriggerInput>;
    create: Prisma.XOR<Prisma.AvalableTriggerCreateWithoutTriggerInput, Prisma.AvalableTriggerUncheckedCreateWithoutTriggerInput>;
    where?: Prisma.AvalableTriggerWhereInput;
};
export type AvalableTriggerUpdateToOneWithWhereWithoutTriggerInput = {
    where?: Prisma.AvalableTriggerWhereInput;
    data: Prisma.XOR<Prisma.AvalableTriggerUpdateWithoutTriggerInput, Prisma.AvalableTriggerUncheckedUpdateWithoutTriggerInput>;
};
export type AvalableTriggerUpdateWithoutTriggerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AvalableTriggerUncheckedUpdateWithoutTriggerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type AvalableTriggerCountOutputType
 */
export type AvalableTriggerCountOutputType = {
    trigger: number;
};
export type AvalableTriggerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trigger?: boolean | AvalableTriggerCountOutputTypeCountTriggerArgs;
};
/**
 * AvalableTriggerCountOutputType without action
 */
export type AvalableTriggerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTriggerCountOutputType
     */
    select?: Prisma.AvalableTriggerCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AvalableTriggerCountOutputType without action
 */
export type AvalableTriggerCountOutputTypeCountTriggerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TriggerWhereInput;
};
export type AvalableTriggerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    trigger?: boolean | Prisma.AvalableTrigger$triggerArgs<ExtArgs>;
    _count?: boolean | Prisma.AvalableTriggerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["avalableTrigger"]>;
export type AvalableTriggerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["avalableTrigger"]>;
export type AvalableTriggerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["avalableTrigger"]>;
export type AvalableTriggerSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type AvalableTriggerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["avalableTrigger"]>;
export type AvalableTriggerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trigger?: boolean | Prisma.AvalableTrigger$triggerArgs<ExtArgs>;
    _count?: boolean | Prisma.AvalableTriggerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AvalableTriggerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AvalableTriggerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AvalableTriggerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AvalableTrigger";
    objects: {
        trigger: Prisma.$TriggerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
    }, ExtArgs["result"]["avalableTrigger"]>;
    composites: {};
};
export type AvalableTriggerGetPayload<S extends boolean | null | undefined | AvalableTriggerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload, S>;
export type AvalableTriggerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AvalableTriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AvalableTriggerCountAggregateInputType | true;
};
export interface AvalableTriggerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AvalableTrigger'];
        meta: {
            name: 'AvalableTrigger';
        };
    };
    /**
     * Find zero or one AvalableTrigger that matches the filter.
     * @param {AvalableTriggerFindUniqueArgs} args - Arguments to find a AvalableTrigger
     * @example
     * // Get one AvalableTrigger
     * const avalableTrigger = await prisma.avalableTrigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvalableTriggerFindUniqueArgs>(args: Prisma.SelectSubset<T, AvalableTriggerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AvalableTriggerClient<runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AvalableTrigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvalableTriggerFindUniqueOrThrowArgs} args - Arguments to find a AvalableTrigger
     * @example
     * // Get one AvalableTrigger
     * const avalableTrigger = await prisma.avalableTrigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvalableTriggerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AvalableTriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvalableTriggerClient<runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AvalableTrigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableTriggerFindFirstArgs} args - Arguments to find a AvalableTrigger
     * @example
     * // Get one AvalableTrigger
     * const avalableTrigger = await prisma.avalableTrigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvalableTriggerFindFirstArgs>(args?: Prisma.SelectSubset<T, AvalableTriggerFindFirstArgs<ExtArgs>>): Prisma.Prisma__AvalableTriggerClient<runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AvalableTrigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableTriggerFindFirstOrThrowArgs} args - Arguments to find a AvalableTrigger
     * @example
     * // Get one AvalableTrigger
     * const avalableTrigger = await prisma.avalableTrigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvalableTriggerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AvalableTriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvalableTriggerClient<runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AvalableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableTriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvalableTriggers
     * const avalableTriggers = await prisma.avalableTrigger.findMany()
     *
     * // Get first 10 AvalableTriggers
     * const avalableTriggers = await prisma.avalableTrigger.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const avalableTriggerWithIdOnly = await prisma.avalableTrigger.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AvalableTriggerFindManyArgs>(args?: Prisma.SelectSubset<T, AvalableTriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AvalableTrigger.
     * @param {AvalableTriggerCreateArgs} args - Arguments to create a AvalableTrigger.
     * @example
     * // Create one AvalableTrigger
     * const AvalableTrigger = await prisma.avalableTrigger.create({
     *   data: {
     *     // ... data to create a AvalableTrigger
     *   }
     * })
     *
     */
    create<T extends AvalableTriggerCreateArgs>(args: Prisma.SelectSubset<T, AvalableTriggerCreateArgs<ExtArgs>>): Prisma.Prisma__AvalableTriggerClient<runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AvalableTriggers.
     * @param {AvalableTriggerCreateManyArgs} args - Arguments to create many AvalableTriggers.
     * @example
     * // Create many AvalableTriggers
     * const avalableTrigger = await prisma.avalableTrigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AvalableTriggerCreateManyArgs>(args?: Prisma.SelectSubset<T, AvalableTriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AvalableTriggers and returns the data saved in the database.
     * @param {AvalableTriggerCreateManyAndReturnArgs} args - Arguments to create many AvalableTriggers.
     * @example
     * // Create many AvalableTriggers
     * const avalableTrigger = await prisma.avalableTrigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AvalableTriggers and only return the `id`
     * const avalableTriggerWithIdOnly = await prisma.avalableTrigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AvalableTriggerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AvalableTriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AvalableTrigger.
     * @param {AvalableTriggerDeleteArgs} args - Arguments to delete one AvalableTrigger.
     * @example
     * // Delete one AvalableTrigger
     * const AvalableTrigger = await prisma.avalableTrigger.delete({
     *   where: {
     *     // ... filter to delete one AvalableTrigger
     *   }
     * })
     *
     */
    delete<T extends AvalableTriggerDeleteArgs>(args: Prisma.SelectSubset<T, AvalableTriggerDeleteArgs<ExtArgs>>): Prisma.Prisma__AvalableTriggerClient<runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AvalableTrigger.
     * @param {AvalableTriggerUpdateArgs} args - Arguments to update one AvalableTrigger.
     * @example
     * // Update one AvalableTrigger
     * const avalableTrigger = await prisma.avalableTrigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AvalableTriggerUpdateArgs>(args: Prisma.SelectSubset<T, AvalableTriggerUpdateArgs<ExtArgs>>): Prisma.Prisma__AvalableTriggerClient<runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AvalableTriggers.
     * @param {AvalableTriggerDeleteManyArgs} args - Arguments to filter AvalableTriggers to delete.
     * @example
     * // Delete a few AvalableTriggers
     * const { count } = await prisma.avalableTrigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AvalableTriggerDeleteManyArgs>(args?: Prisma.SelectSubset<T, AvalableTriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AvalableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableTriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvalableTriggers
     * const avalableTrigger = await prisma.avalableTrigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AvalableTriggerUpdateManyArgs>(args: Prisma.SelectSubset<T, AvalableTriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AvalableTriggers and returns the data updated in the database.
     * @param {AvalableTriggerUpdateManyAndReturnArgs} args - Arguments to update many AvalableTriggers.
     * @example
     * // Update many AvalableTriggers
     * const avalableTrigger = await prisma.avalableTrigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AvalableTriggers and only return the `id`
     * const avalableTriggerWithIdOnly = await prisma.avalableTrigger.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvalableTriggerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AvalableTriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AvalableTrigger.
     * @param {AvalableTriggerUpsertArgs} args - Arguments to update or create a AvalableTrigger.
     * @example
     * // Update or create a AvalableTrigger
     * const avalableTrigger = await prisma.avalableTrigger.upsert({
     *   create: {
     *     // ... data to create a AvalableTrigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvalableTrigger we want to update
     *   }
     * })
     */
    upsert<T extends AvalableTriggerUpsertArgs>(args: Prisma.SelectSubset<T, AvalableTriggerUpsertArgs<ExtArgs>>): Prisma.Prisma__AvalableTriggerClient<runtime.Types.Result.GetResult<Prisma.$AvalableTriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AvalableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableTriggerCountArgs} args - Arguments to filter AvalableTriggers to count.
     * @example
     * // Count the number of AvalableTriggers
     * const count = await prisma.avalableTrigger.count({
     *   where: {
     *     // ... the filter for the AvalableTriggers we want to count
     *   }
     * })
    **/
    count<T extends AvalableTriggerCountArgs>(args?: Prisma.Subset<T, AvalableTriggerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AvalableTriggerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AvalableTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableTriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvalableTriggerAggregateArgs>(args: Prisma.Subset<T, AvalableTriggerAggregateArgs>): Prisma.PrismaPromise<GetAvalableTriggerAggregateType<T>>;
    /**
     * Group by AvalableTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvalableTriggerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AvalableTriggerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AvalableTriggerGroupByArgs['orderBy'];
    } : {
        orderBy?: AvalableTriggerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AvalableTriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvalableTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AvalableTrigger model
     */
    readonly fields: AvalableTriggerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AvalableTrigger.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AvalableTriggerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    trigger<T extends Prisma.AvalableTrigger$triggerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AvalableTrigger$triggerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the AvalableTrigger model
 */
export interface AvalableTriggerFieldRefs {
    readonly id: Prisma.FieldRef<"AvalableTrigger", 'String'>;
    readonly name: Prisma.FieldRef<"AvalableTrigger", 'String'>;
}
/**
 * AvalableTrigger findUnique
 */
export type AvalableTriggerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableTriggerInclude<ExtArgs> | null;
    /**
     * Filter, which AvalableTrigger to fetch.
     */
    where: Prisma.AvalableTriggerWhereUniqueInput;
};
/**
 * AvalableTrigger findUniqueOrThrow
 */
export type AvalableTriggerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableTriggerInclude<ExtArgs> | null;
    /**
     * Filter, which AvalableTrigger to fetch.
     */
    where: Prisma.AvalableTriggerWhereUniqueInput;
};
/**
 * AvalableTrigger findFirst
 */
export type AvalableTriggerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableTriggerInclude<ExtArgs> | null;
    /**
     * Filter, which AvalableTrigger to fetch.
     */
    where?: Prisma.AvalableTriggerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvalableTriggers to fetch.
     */
    orderBy?: Prisma.AvalableTriggerOrderByWithRelationInput | Prisma.AvalableTriggerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvalableTriggers.
     */
    cursor?: Prisma.AvalableTriggerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvalableTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvalableTriggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvalableTriggers.
     */
    distinct?: Prisma.AvalableTriggerScalarFieldEnum | Prisma.AvalableTriggerScalarFieldEnum[];
};
/**
 * AvalableTrigger findFirstOrThrow
 */
export type AvalableTriggerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableTriggerInclude<ExtArgs> | null;
    /**
     * Filter, which AvalableTrigger to fetch.
     */
    where?: Prisma.AvalableTriggerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvalableTriggers to fetch.
     */
    orderBy?: Prisma.AvalableTriggerOrderByWithRelationInput | Prisma.AvalableTriggerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AvalableTriggers.
     */
    cursor?: Prisma.AvalableTriggerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvalableTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvalableTriggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AvalableTriggers.
     */
    distinct?: Prisma.AvalableTriggerScalarFieldEnum | Prisma.AvalableTriggerScalarFieldEnum[];
};
/**
 * AvalableTrigger findMany
 */
export type AvalableTriggerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableTriggerInclude<ExtArgs> | null;
    /**
     * Filter, which AvalableTriggers to fetch.
     */
    where?: Prisma.AvalableTriggerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AvalableTriggers to fetch.
     */
    orderBy?: Prisma.AvalableTriggerOrderByWithRelationInput | Prisma.AvalableTriggerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AvalableTriggers.
     */
    cursor?: Prisma.AvalableTriggerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AvalableTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AvalableTriggers.
     */
    skip?: number;
    distinct?: Prisma.AvalableTriggerScalarFieldEnum | Prisma.AvalableTriggerScalarFieldEnum[];
};
/**
 * AvalableTrigger create
 */
export type AvalableTriggerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableTriggerInclude<ExtArgs> | null;
    /**
     * The data needed to create a AvalableTrigger.
     */
    data: Prisma.XOR<Prisma.AvalableTriggerCreateInput, Prisma.AvalableTriggerUncheckedCreateInput>;
};
/**
 * AvalableTrigger createMany
 */
export type AvalableTriggerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvalableTriggers.
     */
    data: Prisma.AvalableTriggerCreateManyInput | Prisma.AvalableTriggerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AvalableTrigger createManyAndReturn
 */
export type AvalableTriggerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * The data used to create many AvalableTriggers.
     */
    data: Prisma.AvalableTriggerCreateManyInput | Prisma.AvalableTriggerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AvalableTrigger update
 */
export type AvalableTriggerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableTriggerInclude<ExtArgs> | null;
    /**
     * The data needed to update a AvalableTrigger.
     */
    data: Prisma.XOR<Prisma.AvalableTriggerUpdateInput, Prisma.AvalableTriggerUncheckedUpdateInput>;
    /**
     * Choose, which AvalableTrigger to update.
     */
    where: Prisma.AvalableTriggerWhereUniqueInput;
};
/**
 * AvalableTrigger updateMany
 */
export type AvalableTriggerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AvalableTriggers.
     */
    data: Prisma.XOR<Prisma.AvalableTriggerUpdateManyMutationInput, Prisma.AvalableTriggerUncheckedUpdateManyInput>;
    /**
     * Filter which AvalableTriggers to update
     */
    where?: Prisma.AvalableTriggerWhereInput;
    /**
     * Limit how many AvalableTriggers to update.
     */
    limit?: number;
};
/**
 * AvalableTrigger updateManyAndReturn
 */
export type AvalableTriggerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * The data used to update AvalableTriggers.
     */
    data: Prisma.XOR<Prisma.AvalableTriggerUpdateManyMutationInput, Prisma.AvalableTriggerUncheckedUpdateManyInput>;
    /**
     * Filter which AvalableTriggers to update
     */
    where?: Prisma.AvalableTriggerWhereInput;
    /**
     * Limit how many AvalableTriggers to update.
     */
    limit?: number;
};
/**
 * AvalableTrigger upsert
 */
export type AvalableTriggerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableTriggerInclude<ExtArgs> | null;
    /**
     * The filter to search for the AvalableTrigger to update in case it exists.
     */
    where: Prisma.AvalableTriggerWhereUniqueInput;
    /**
     * In case the AvalableTrigger found by the `where` argument doesn't exist, create a new AvalableTrigger with this data.
     */
    create: Prisma.XOR<Prisma.AvalableTriggerCreateInput, Prisma.AvalableTriggerUncheckedCreateInput>;
    /**
     * In case the AvalableTrigger was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AvalableTriggerUpdateInput, Prisma.AvalableTriggerUncheckedUpdateInput>;
};
/**
 * AvalableTrigger delete
 */
export type AvalableTriggerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableTriggerInclude<ExtArgs> | null;
    /**
     * Filter which AvalableTrigger to delete.
     */
    where: Prisma.AvalableTriggerWhereUniqueInput;
};
/**
 * AvalableTrigger deleteMany
 */
export type AvalableTriggerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AvalableTriggers to delete
     */
    where?: Prisma.AvalableTriggerWhereInput;
    /**
     * Limit how many AvalableTriggers to delete.
     */
    limit?: number;
};
/**
 * AvalableTrigger.trigger
 */
export type AvalableTrigger$triggerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.TriggerOrderByWithRelationInput | Prisma.TriggerOrderByWithRelationInput[];
    cursor?: Prisma.TriggerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TriggerScalarFieldEnum | Prisma.TriggerScalarFieldEnum[];
};
/**
 * AvalableTrigger without action
 */
export type AvalableTriggerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvalableTrigger
     */
    select?: Prisma.AvalableTriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AvalableTrigger
     */
    omit?: Prisma.AvalableTriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AvalableTriggerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AvalableTrigger.d.ts.map