import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

// Define the types for the query options and return value
type FilterOption<T> = {
  column: keyof T;
  operator: string;
  value: any;
};

type OrderOption<T> = {
  column: keyof T;
  ascending: boolean;
};

type QueryOptions<T> = {
  filter?: FilterOption<T>[];
  order?: OrderOption<T>[];
  limit?: number;
};

type UseSupabaseQueryResult<T> = {
  data: T[];
  loading: boolean;
  error: string | null;
};

// Define the useSupabaseQuery hook
function useSupabaseQuery<T>(
  table: string,
  queryOptions: QueryOptions<T> = {}
): UseSupabaseQueryResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        //@ts-ignore
        let query = supabase.from<T>(table).select<T, T[]>("*");

        // Apply filters from queryOptions
        if (queryOptions.filter) {
          queryOptions.filter.forEach(({ column, operator, value }) => {
            query = query.filter(column as string, operator, value);
          });
        }

        // Apply order
        if (queryOptions.order) {
          queryOptions.order.forEach(({ column, ascending }) => {
            query = query.order(column as string, { ascending });
          });
        }

        // Limit results
        if (queryOptions.limit) {
          query = query.limit(queryOptions.limit);
        }

        const { data, error } = await query;

        if (error) throw error;

        setData(data as T[]);
      } catch (error) {
        setError((error as PostgrestError).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [table, queryOptions]);

  return { data, loading, error };
}

export default useSupabaseQuery;
