import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model nexflorun
 *
 */
export type nexflorunModel = runtime.Types.Result.DefaultSelection<Prisma.$nexflorunPayload>;
export type AggregateNexflorun = {
    _count: NexflorunCountAggregateOutputType | null;
    _min: NexflorunMinAggregateOutputType | null;
    _max: NexflorunMaxAggregateOutputType | null;
};
export type NexflorunMinAggregateOutputType = {
    id: string | null;
    nexflowId: string | null;
};
export type NexflorunMaxAggregateOutputType = {
    id: string | null;
    nexflowId: string | null;
};
export type NexflorunCountAggregateOutputType = {
    id: number;
    nexflowId: number;
    _all: number;
};
export type NexflorunMinAggregateInputType = {
    id?: true;
    nexflowId?: true;
};
export type NexflorunMaxAggregateInputType = {
    id?: true;
    nexflowId?: true;
};
export type NexflorunCountAggregateInputType = {
    id?: true;
    nexflowId?: true;
    _all?: true;
};
export type NexflorunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which nexflorun to aggregate.
     */
    where?: Prisma.nexflorunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nexfloruns to fetch.
     */
    orderBy?: Prisma.nexflorunOrderByWithRelationInput | Prisma.nexflorunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.nexflorunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nexfloruns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nexfloruns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned nexfloruns
    **/
    _count?: true | NexflorunCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: NexflorunMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: NexflorunMaxAggregateInputType;
};
export type GetNexflorunAggregateType<T extends NexflorunAggregateArgs> = {
    [P in keyof T & keyof AggregateNexflorun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNexflorun[P]> : Prisma.GetScalarType<T[P], AggregateNexflorun[P]>;
};
export type nexflorunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.nexflorunWhereInput;
    orderBy?: Prisma.nexflorunOrderByWithAggregationInput | Prisma.nexflorunOrderByWithAggregationInput[];
    by: Prisma.NexflorunScalarFieldEnum[] | Prisma.NexflorunScalarFieldEnum;
    having?: Prisma.nexflorunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NexflorunCountAggregateInputType | true;
    _min?: NexflorunMinAggregateInputType;
    _max?: NexflorunMaxAggregateInputType;
};
export type NexflorunGroupByOutputType = {
    id: string;
    nexflowId: string;
    _count: NexflorunCountAggregateOutputType | null;
    _min: NexflorunMinAggregateOutputType | null;
    _max: NexflorunMaxAggregateOutputType | null;
};
type GetNexflorunGroupByPayload<T extends nexflorunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NexflorunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NexflorunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NexflorunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NexflorunGroupByOutputType[P]>;
}>>;
export type nexflorunWhereInput = {
    AND?: Prisma.nexflorunWhereInput | Prisma.nexflorunWhereInput[];
    OR?: Prisma.nexflorunWhereInput[];
    NOT?: Prisma.nexflorunWhereInput | Prisma.nexflorunWhereInput[];
    id?: Prisma.StringFilter<"nexflorun"> | string;
    nexflowId?: Prisma.StringFilter<"nexflorun"> | string;
    nexflo?: Prisma.XOR<Prisma.NexfloScalarRelationFilter, Prisma.nexfloWhereInput>;
};
export type nexflorunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nexflowId?: Prisma.SortOrder;
    nexflo?: Prisma.nexfloOrderByWithRelationInput;
};
export type nexflorunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.nexflorunWhereInput | Prisma.nexflorunWhereInput[];
    OR?: Prisma.nexflorunWhereInput[];
    NOT?: Prisma.nexflorunWhereInput | Prisma.nexflorunWhereInput[];
    nexflowId?: Prisma.StringFilter<"nexflorun"> | string;
    nexflo?: Prisma.XOR<Prisma.NexfloScalarRelationFilter, Prisma.nexfloWhereInput>;
}, "id">;
export type nexflorunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nexflowId?: Prisma.SortOrder;
    _count?: Prisma.nexflorunCountOrderByAggregateInput;
    _max?: Prisma.nexflorunMaxOrderByAggregateInput;
    _min?: Prisma.nexflorunMinOrderByAggregateInput;
};
export type nexflorunScalarWhereWithAggregatesInput = {
    AND?: Prisma.nexflorunScalarWhereWithAggregatesInput | Prisma.nexflorunScalarWhereWithAggregatesInput[];
    OR?: Prisma.nexflorunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.nexflorunScalarWhereWithAggregatesInput | Prisma.nexflorunScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"nexflorun"> | string;
    nexflowId?: Prisma.StringWithAggregatesFilter<"nexflorun"> | string;
};
export type nexflorunCreateInput = {
    id?: string;
    nexflo: Prisma.nexfloCreateNestedOneWithoutNexflorunInput;
};
export type nexflorunUncheckedCreateInput = {
    id?: string;
    nexflowId: string;
};
export type nexflorunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nexflo?: Prisma.nexfloUpdateOneRequiredWithoutNexflorunNestedInput;
};
export type nexflorunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nexflowId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type nexflorunCreateManyInput = {
    id?: string;
    nexflowId: string;
};
export type nexflorunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type nexflorunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nexflowId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NexflorunListRelationFilter = {
    every?: Prisma.nexflorunWhereInput;
    some?: Prisma.nexflorunWhereInput;
    none?: Prisma.nexflorunWhereInput;
};
export type nexflorunOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type nexflorunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nexflowId?: Prisma.SortOrder;
};
export type nexflorunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nexflowId?: Prisma.SortOrder;
};
export type nexflorunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nexflowId?: Prisma.SortOrder;
};
export type nexflorunCreateNestedManyWithoutNexfloInput = {
    create?: Prisma.XOR<Prisma.nexflorunCreateWithoutNexfloInput, Prisma.nexflorunUncheckedCreateWithoutNexfloInput> | Prisma.nexflorunCreateWithoutNexfloInput[] | Prisma.nexflorunUncheckedCreateWithoutNexfloInput[];
    connectOrCreate?: Prisma.nexflorunCreateOrConnectWithoutNexfloInput | Prisma.nexflorunCreateOrConnectWithoutNexfloInput[];
    createMany?: Prisma.nexflorunCreateManyNexfloInputEnvelope;
    connect?: Prisma.nexflorunWhereUniqueInput | Prisma.nexflorunWhereUniqueInput[];
};
export type nexflorunUncheckedCreateNestedManyWithoutNexfloInput = {
    create?: Prisma.XOR<Prisma.nexflorunCreateWithoutNexfloInput, Prisma.nexflorunUncheckedCreateWithoutNexfloInput> | Prisma.nexflorunCreateWithoutNexfloInput[] | Prisma.nexflorunUncheckedCreateWithoutNexfloInput[];
    connectOrCreate?: Prisma.nexflorunCreateOrConnectWithoutNexfloInput | Prisma.nexflorunCreateOrConnectWithoutNexfloInput[];
    createMany?: Prisma.nexflorunCreateManyNexfloInputEnvelope;
    connect?: Prisma.nexflorunWhereUniqueInput | Prisma.nexflorunWhereUniqueInput[];
};
export type nexflorunUpdateManyWithoutNexfloNestedInput = {
    create?: Prisma.XOR<Prisma.nexflorunCreateWithoutNexfloInput, Prisma.nexflorunUncheckedCreateWithoutNexfloInput> | Prisma.nexflorunCreateWithoutNexfloInput[] | Prisma.nexflorunUncheckedCreateWithoutNexfloInput[];
    connectOrCreate?: Prisma.nexflorunCreateOrConnectWithoutNexfloInput | Prisma.nexflorunCreateOrConnectWithoutNexfloInput[];
    upsert?: Prisma.nexflorunUpsertWithWhereUniqueWithoutNexfloInput | Prisma.nexflorunUpsertWithWhereUniqueWithoutNexfloInput[];
    createMany?: Prisma.nexflorunCreateManyNexfloInputEnvelope;
    set?: Prisma.nexflorunWhereUniqueInput | Prisma.nexflorunWhereUniqueInput[];
    disconnect?: Prisma.nexflorunWhereUniqueInput | Prisma.nexflorunWhereUniqueInput[];
    delete?: Prisma.nexflorunWhereUniqueInput | Prisma.nexflorunWhereUniqueInput[];
    connect?: Prisma.nexflorunWhereUniqueInput | Prisma.nexflorunWhereUniqueInput[];
    update?: Prisma.nexflorunUpdateWithWhereUniqueWithoutNexfloInput | Prisma.nexflorunUpdateWithWhereUniqueWithoutNexfloInput[];
    updateMany?: Prisma.nexflorunUpdateManyWithWhereWithoutNexfloInput | Prisma.nexflorunUpdateManyWithWhereWithoutNexfloInput[];
    deleteMany?: Prisma.nexflorunScalarWhereInput | Prisma.nexflorunScalarWhereInput[];
};
export type nexflorunUncheckedUpdateManyWithoutNexfloNestedInput = {
    create?: Prisma.XOR<Prisma.nexflorunCreateWithoutNexfloInput, Prisma.nexflorunUncheckedCreateWithoutNexfloInput> | Prisma.nexflorunCreateWithoutNexfloInput[] | Prisma.nexflorunUncheckedCreateWithoutNexfloInput[];
    connectOrCreate?: Prisma.nexflorunCreateOrConnectWithoutNexfloInput | Prisma.nexflorunCreateOrConnectWithoutNexfloInput[];
    upsert?: Prisma.nexflorunUpsertWithWhereUniqueWithoutNexfloInput | Prisma.nexflorunUpsertWithWhereUniqueWithoutNexfloInput[];
    createMany?: Prisma.nexflorunCreateManyNexfloInputEnvelope;
    set?: Prisma.nexflorunWhereUniqueInput | Prisma.nexflorunWhereUniqueInput[];
    disconnect?: Prisma.nexflorunWhereUniqueInput | Prisma.nexflorunWhereUniqueInput[];
    delete?: Prisma.nexflorunWhereUniqueInput | Prisma.nexflorunWhereUniqueInput[];
    connect?: Prisma.nexflorunWhereUniqueInput | Prisma.nexflorunWhereUniqueInput[];
    update?: Prisma.nexflorunUpdateWithWhereUniqueWithoutNexfloInput | Prisma.nexflorunUpdateWithWhereUniqueWithoutNexfloInput[];
    updateMany?: Prisma.nexflorunUpdateManyWithWhereWithoutNexfloInput | Prisma.nexflorunUpdateManyWithWhereWithoutNexfloInput[];
    deleteMany?: Prisma.nexflorunScalarWhereInput | Prisma.nexflorunScalarWhereInput[];
};
export type nexflorunCreateWithoutNexfloInput = {
    id?: string;
};
export type nexflorunUncheckedCreateWithoutNexfloInput = {
    id?: string;
};
export type nexflorunCreateOrConnectWithoutNexfloInput = {
    where: Prisma.nexflorunWhereUniqueInput;
    create: Prisma.XOR<Prisma.nexflorunCreateWithoutNexfloInput, Prisma.nexflorunUncheckedCreateWithoutNexfloInput>;
};
export type nexflorunCreateManyNexfloInputEnvelope = {
    data: Prisma.nexflorunCreateManyNexfloInput | Prisma.nexflorunCreateManyNexfloInput[];
    skipDuplicates?: boolean;
};
export type nexflorunUpsertWithWhereUniqueWithoutNexfloInput = {
    where: Prisma.nexflorunWhereUniqueInput;
    update: Prisma.XOR<Prisma.nexflorunUpdateWithoutNexfloInput, Prisma.nexflorunUncheckedUpdateWithoutNexfloInput>;
    create: Prisma.XOR<Prisma.nexflorunCreateWithoutNexfloInput, Prisma.nexflorunUncheckedCreateWithoutNexfloInput>;
};
export type nexflorunUpdateWithWhereUniqueWithoutNexfloInput = {
    where: Prisma.nexflorunWhereUniqueInput;
    data: Prisma.XOR<Prisma.nexflorunUpdateWithoutNexfloInput, Prisma.nexflorunUncheckedUpdateWithoutNexfloInput>;
};
export type nexflorunUpdateManyWithWhereWithoutNexfloInput = {
    where: Prisma.nexflorunScalarWhereInput;
    data: Prisma.XOR<Prisma.nexflorunUpdateManyMutationInput, Prisma.nexflorunUncheckedUpdateManyWithoutNexfloInput>;
};
export type nexflorunScalarWhereInput = {
    AND?: Prisma.nexflorunScalarWhereInput | Prisma.nexflorunScalarWhereInput[];
    OR?: Prisma.nexflorunScalarWhereInput[];
    NOT?: Prisma.nexflorunScalarWhereInput | Prisma.nexflorunScalarWhereInput[];
    id?: Prisma.StringFilter<"nexflorun"> | string;
    nexflowId?: Prisma.StringFilter<"nexflorun"> | string;
};
export type nexflorunCreateManyNexfloInput = {
    id?: string;
};
export type nexflorunUpdateWithoutNexfloInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type nexflorunUncheckedUpdateWithoutNexfloInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type nexflorunUncheckedUpdateManyWithoutNexfloInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type nexflorunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nexflowId?: boolean;
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["nexflorun"]>;
export type nexflorunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nexflowId?: boolean;
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["nexflorun"]>;
export type nexflorunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nexflowId?: boolean;
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["nexflorun"]>;
export type nexflorunSelectScalar = {
    id?: boolean;
    nexflowId?: boolean;
};
export type nexflorunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nexflowId", ExtArgs["result"]["nexflorun"]>;
export type nexflorunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
};
export type nexflorunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
};
export type nexflorunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    nexflo?: boolean | Prisma.nexfloDefaultArgs<ExtArgs>;
};
export type $nexflorunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "nexflorun";
    objects: {
        nexflo: Prisma.$nexfloPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nexflowId: string;
    }, ExtArgs["result"]["nexflorun"]>;
    composites: {};
};
export type nexflorunGetPayload<S extends boolean | null | undefined | nexflorunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$nexflorunPayload, S>;
export type nexflorunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<nexflorunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NexflorunCountAggregateInputType | true;
};
export interface nexflorunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['nexflorun'];
        meta: {
            name: 'nexflorun';
        };
    };
    /**
     * Find zero or one Nexflorun that matches the filter.
     * @param {nexflorunFindUniqueArgs} args - Arguments to find a Nexflorun
     * @example
     * // Get one Nexflorun
     * const nexflorun = await prisma.nexflorun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nexflorunFindUniqueArgs>(args: Prisma.SelectSubset<T, nexflorunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__nexflorunClient<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Nexflorun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nexflorunFindUniqueOrThrowArgs} args - Arguments to find a Nexflorun
     * @example
     * // Get one Nexflorun
     * const nexflorun = await prisma.nexflorun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nexflorunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, nexflorunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__nexflorunClient<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Nexflorun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexflorunFindFirstArgs} args - Arguments to find a Nexflorun
     * @example
     * // Get one Nexflorun
     * const nexflorun = await prisma.nexflorun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nexflorunFindFirstArgs>(args?: Prisma.SelectSubset<T, nexflorunFindFirstArgs<ExtArgs>>): Prisma.Prisma__nexflorunClient<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Nexflorun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexflorunFindFirstOrThrowArgs} args - Arguments to find a Nexflorun
     * @example
     * // Get one Nexflorun
     * const nexflorun = await prisma.nexflorun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nexflorunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, nexflorunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__nexflorunClient<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Nexfloruns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexflorunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nexfloruns
     * const nexfloruns = await prisma.nexflorun.findMany()
     *
     * // Get first 10 Nexfloruns
     * const nexfloruns = await prisma.nexflorun.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const nexflorunWithIdOnly = await prisma.nexflorun.findMany({ select: { id: true } })
     *
     */
    findMany<T extends nexflorunFindManyArgs>(args?: Prisma.SelectSubset<T, nexflorunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Nexflorun.
     * @param {nexflorunCreateArgs} args - Arguments to create a Nexflorun.
     * @example
     * // Create one Nexflorun
     * const Nexflorun = await prisma.nexflorun.create({
     *   data: {
     *     // ... data to create a Nexflorun
     *   }
     * })
     *
     */
    create<T extends nexflorunCreateArgs>(args: Prisma.SelectSubset<T, nexflorunCreateArgs<ExtArgs>>): Prisma.Prisma__nexflorunClient<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Nexfloruns.
     * @param {nexflorunCreateManyArgs} args - Arguments to create many Nexfloruns.
     * @example
     * // Create many Nexfloruns
     * const nexflorun = await prisma.nexflorun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends nexflorunCreateManyArgs>(args?: Prisma.SelectSubset<T, nexflorunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Nexfloruns and returns the data saved in the database.
     * @param {nexflorunCreateManyAndReturnArgs} args - Arguments to create many Nexfloruns.
     * @example
     * // Create many Nexfloruns
     * const nexflorun = await prisma.nexflorun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Nexfloruns and only return the `id`
     * const nexflorunWithIdOnly = await prisma.nexflorun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends nexflorunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, nexflorunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Nexflorun.
     * @param {nexflorunDeleteArgs} args - Arguments to delete one Nexflorun.
     * @example
     * // Delete one Nexflorun
     * const Nexflorun = await prisma.nexflorun.delete({
     *   where: {
     *     // ... filter to delete one Nexflorun
     *   }
     * })
     *
     */
    delete<T extends nexflorunDeleteArgs>(args: Prisma.SelectSubset<T, nexflorunDeleteArgs<ExtArgs>>): Prisma.Prisma__nexflorunClient<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Nexflorun.
     * @param {nexflorunUpdateArgs} args - Arguments to update one Nexflorun.
     * @example
     * // Update one Nexflorun
     * const nexflorun = await prisma.nexflorun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends nexflorunUpdateArgs>(args: Prisma.SelectSubset<T, nexflorunUpdateArgs<ExtArgs>>): Prisma.Prisma__nexflorunClient<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Nexfloruns.
     * @param {nexflorunDeleteManyArgs} args - Arguments to filter Nexfloruns to delete.
     * @example
     * // Delete a few Nexfloruns
     * const { count } = await prisma.nexflorun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends nexflorunDeleteManyArgs>(args?: Prisma.SelectSubset<T, nexflorunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Nexfloruns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexflorunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nexfloruns
     * const nexflorun = await prisma.nexflorun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends nexflorunUpdateManyArgs>(args: Prisma.SelectSubset<T, nexflorunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Nexfloruns and returns the data updated in the database.
     * @param {nexflorunUpdateManyAndReturnArgs} args - Arguments to update many Nexfloruns.
     * @example
     * // Update many Nexfloruns
     * const nexflorun = await prisma.nexflorun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Nexfloruns and only return the `id`
     * const nexflorunWithIdOnly = await prisma.nexflorun.updateManyAndReturn({
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
    updateManyAndReturn<T extends nexflorunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, nexflorunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Nexflorun.
     * @param {nexflorunUpsertArgs} args - Arguments to update or create a Nexflorun.
     * @example
     * // Update or create a Nexflorun
     * const nexflorun = await prisma.nexflorun.upsert({
     *   create: {
     *     // ... data to create a Nexflorun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nexflorun we want to update
     *   }
     * })
     */
    upsert<T extends nexflorunUpsertArgs>(args: Prisma.SelectSubset<T, nexflorunUpsertArgs<ExtArgs>>): Prisma.Prisma__nexflorunClient<runtime.Types.Result.GetResult<Prisma.$nexflorunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Nexfloruns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexflorunCountArgs} args - Arguments to filter Nexfloruns to count.
     * @example
     * // Count the number of Nexfloruns
     * const count = await prisma.nexflorun.count({
     *   where: {
     *     // ... the filter for the Nexfloruns we want to count
     *   }
     * })
    **/
    count<T extends nexflorunCountArgs>(args?: Prisma.Subset<T, nexflorunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NexflorunCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Nexflorun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NexflorunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NexflorunAggregateArgs>(args: Prisma.Subset<T, NexflorunAggregateArgs>): Prisma.PrismaPromise<GetNexflorunAggregateType<T>>;
    /**
     * Group by Nexflorun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexflorunGroupByArgs} args - Group by arguments.
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
    groupBy<T extends nexflorunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: nexflorunGroupByArgs['orderBy'];
    } : {
        orderBy?: nexflorunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, nexflorunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNexflorunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the nexflorun model
     */
    readonly fields: nexflorunFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for nexflorun.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__nexflorunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    nexflo<T extends Prisma.nexfloDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.nexfloDefaultArgs<ExtArgs>>): Prisma.Prisma__nexfloClient<runtime.Types.Result.GetResult<Prisma.$nexfloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the nexflorun model
 */
export interface nexflorunFieldRefs {
    readonly id: Prisma.FieldRef<"nexflorun", 'String'>;
    readonly nexflowId: Prisma.FieldRef<"nexflorun", 'String'>;
}
/**
 * nexflorun findUnique
 */
export type nexflorunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which nexflorun to fetch.
     */
    where: Prisma.nexflorunWhereUniqueInput;
};
/**
 * nexflorun findUniqueOrThrow
 */
export type nexflorunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which nexflorun to fetch.
     */
    where: Prisma.nexflorunWhereUniqueInput;
};
/**
 * nexflorun findFirst
 */
export type nexflorunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which nexflorun to fetch.
     */
    where?: Prisma.nexflorunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nexfloruns to fetch.
     */
    orderBy?: Prisma.nexflorunOrderByWithRelationInput | Prisma.nexflorunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for nexfloruns.
     */
    cursor?: Prisma.nexflorunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nexfloruns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nexfloruns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of nexfloruns.
     */
    distinct?: Prisma.NexflorunScalarFieldEnum | Prisma.NexflorunScalarFieldEnum[];
};
/**
 * nexflorun findFirstOrThrow
 */
export type nexflorunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which nexflorun to fetch.
     */
    where?: Prisma.nexflorunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nexfloruns to fetch.
     */
    orderBy?: Prisma.nexflorunOrderByWithRelationInput | Prisma.nexflorunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for nexfloruns.
     */
    cursor?: Prisma.nexflorunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nexfloruns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nexfloruns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of nexfloruns.
     */
    distinct?: Prisma.NexflorunScalarFieldEnum | Prisma.NexflorunScalarFieldEnum[];
};
/**
 * nexflorun findMany
 */
export type nexflorunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which nexfloruns to fetch.
     */
    where?: Prisma.nexflorunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nexfloruns to fetch.
     */
    orderBy?: Prisma.nexflorunOrderByWithRelationInput | Prisma.nexflorunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing nexfloruns.
     */
    cursor?: Prisma.nexflorunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nexfloruns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nexfloruns.
     */
    skip?: number;
    distinct?: Prisma.NexflorunScalarFieldEnum | Prisma.NexflorunScalarFieldEnum[];
};
/**
 * nexflorun create
 */
export type nexflorunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a nexflorun.
     */
    data: Prisma.XOR<Prisma.nexflorunCreateInput, Prisma.nexflorunUncheckedCreateInput>;
};
/**
 * nexflorun createMany
 */
export type nexflorunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many nexfloruns.
     */
    data: Prisma.nexflorunCreateManyInput | Prisma.nexflorunCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * nexflorun createManyAndReturn
 */
export type nexflorunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflorun
     */
    select?: Prisma.nexflorunSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflorun
     */
    omit?: Prisma.nexflorunOmit<ExtArgs> | null;
    /**
     * The data used to create many nexfloruns.
     */
    data: Prisma.nexflorunCreateManyInput | Prisma.nexflorunCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexflorunIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * nexflorun update
 */
export type nexflorunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a nexflorun.
     */
    data: Prisma.XOR<Prisma.nexflorunUpdateInput, Prisma.nexflorunUncheckedUpdateInput>;
    /**
     * Choose, which nexflorun to update.
     */
    where: Prisma.nexflorunWhereUniqueInput;
};
/**
 * nexflorun updateMany
 */
export type nexflorunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update nexfloruns.
     */
    data: Prisma.XOR<Prisma.nexflorunUpdateManyMutationInput, Prisma.nexflorunUncheckedUpdateManyInput>;
    /**
     * Filter which nexfloruns to update
     */
    where?: Prisma.nexflorunWhereInput;
    /**
     * Limit how many nexfloruns to update.
     */
    limit?: number;
};
/**
 * nexflorun updateManyAndReturn
 */
export type nexflorunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexflorun
     */
    select?: Prisma.nexflorunSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the nexflorun
     */
    omit?: Prisma.nexflorunOmit<ExtArgs> | null;
    /**
     * The data used to update nexfloruns.
     */
    data: Prisma.XOR<Prisma.nexflorunUpdateManyMutationInput, Prisma.nexflorunUncheckedUpdateManyInput>;
    /**
     * Filter which nexfloruns to update
     */
    where?: Prisma.nexflorunWhereInput;
    /**
     * Limit how many nexfloruns to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nexflorunIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * nexflorun upsert
 */
export type nexflorunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the nexflorun to update in case it exists.
     */
    where: Prisma.nexflorunWhereUniqueInput;
    /**
     * In case the nexflorun found by the `where` argument doesn't exist, create a new nexflorun with this data.
     */
    create: Prisma.XOR<Prisma.nexflorunCreateInput, Prisma.nexflorunUncheckedCreateInput>;
    /**
     * In case the nexflorun was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.nexflorunUpdateInput, Prisma.nexflorunUncheckedUpdateInput>;
};
/**
 * nexflorun delete
 */
export type nexflorunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which nexflorun to delete.
     */
    where: Prisma.nexflorunWhereUniqueInput;
};
/**
 * nexflorun deleteMany
 */
export type nexflorunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which nexfloruns to delete
     */
    where?: Prisma.nexflorunWhereInput;
    /**
     * Limit how many nexfloruns to delete.
     */
    limit?: number;
};
/**
 * nexflorun without action
 */
export type nexflorunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=nexflorun.d.ts.map