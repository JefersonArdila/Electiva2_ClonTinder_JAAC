
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Swipe
 * 
 */
export type Swipe = $Result.DefaultSelection<Prisma.$SwipePayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SwipeAction: {
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE'
};

export type SwipeAction = (typeof SwipeAction)[keyof typeof SwipeAction]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SwipeAction = $Enums.SwipeAction

export const SwipeAction: typeof $Enums.SwipeAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.swipe`: Exposes CRUD operations for the **Swipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Swipes
    * const swipes = await prisma.swipe.findMany()
    * ```
    */
  get swipe(): Prisma.SwipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Swipe: 'Swipe',
    Match: 'Match'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "swipe" | "match"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Swipe: {
        payload: Prisma.$SwipePayload<ExtArgs>
        fields: Prisma.SwipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          findFirst: {
            args: Prisma.SwipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          findMany: {
            args: Prisma.SwipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>[]
          }
          create: {
            args: Prisma.SwipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          createMany: {
            args: Prisma.SwipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SwipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>[]
          }
          delete: {
            args: Prisma.SwipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          update: {
            args: Prisma.SwipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          deleteMany: {
            args: Prisma.SwipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SwipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>[]
          }
          upsert: {
            args: Prisma.SwipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          aggregate: {
            args: Prisma.SwipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSwipe>
          }
          groupBy: {
            args: Prisma.SwipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SwipeCountArgs<ExtArgs>
            result: $Utils.Optional<SwipeCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    swipe?: SwipeOmit
    match?: MatchOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    swipesFrom: number
    swipesTo: number
    matchesA: number
    matchesB: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    swipesFrom?: boolean | UserCountOutputTypeCountSwipesFromArgs
    swipesTo?: boolean | UserCountOutputTypeCountSwipesToArgs
    matchesA?: boolean | UserCountOutputTypeCountMatchesAArgs
    matchesB?: boolean | UserCountOutputTypeCountMatchesBArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSwipesFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSwipesToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesBArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    gender: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    gender: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    gender: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    gender?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    gender?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    gender?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    gender?: boolean
    role?: boolean
    swipesFrom?: boolean | User$swipesFromArgs<ExtArgs>
    swipesTo?: boolean | User$swipesToArgs<ExtArgs>
    matchesA?: boolean | User$matchesAArgs<ExtArgs>
    matchesB?: boolean | User$matchesBArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    gender?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    gender?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    gender?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "gender" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    swipesFrom?: boolean | User$swipesFromArgs<ExtArgs>
    swipesTo?: boolean | User$swipesToArgs<ExtArgs>
    matchesA?: boolean | User$matchesAArgs<ExtArgs>
    matchesB?: boolean | User$matchesBArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      swipesFrom: Prisma.$SwipePayload<ExtArgs>[]
      swipesTo: Prisma.$SwipePayload<ExtArgs>[]
      matchesA: Prisma.$MatchPayload<ExtArgs>[]
      matchesB: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      gender: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    swipesFrom<T extends User$swipesFromArgs<ExtArgs> = {}>(args?: Subset<T, User$swipesFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swipesTo<T extends User$swipesToArgs<ExtArgs> = {}>(args?: Subset<T, User$swipesToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesA<T extends User$matchesAArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesB<T extends User$matchesBArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesBArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.swipesFrom
   */
  export type User$swipesFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    where?: SwipeWhereInput
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    cursor?: SwipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwipeScalarFieldEnum | SwipeScalarFieldEnum[]
  }

  /**
   * User.swipesTo
   */
  export type User$swipesToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    where?: SwipeWhereInput
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    cursor?: SwipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwipeScalarFieldEnum | SwipeScalarFieldEnum[]
  }

  /**
   * User.matchesA
   */
  export type User$matchesAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchesB
   */
  export type User$matchesBArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Swipe
   */

  export type AggregateSwipe = {
    _count: SwipeCountAggregateOutputType | null
    _min: SwipeMinAggregateOutputType | null
    _max: SwipeMaxAggregateOutputType | null
  }

  export type SwipeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    targetUserId: string | null
    action: $Enums.SwipeAction | null
    createdAt: Date | null
  }

  export type SwipeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    targetUserId: string | null
    action: $Enums.SwipeAction | null
    createdAt: Date | null
  }

  export type SwipeCountAggregateOutputType = {
    id: number
    userId: number
    targetUserId: number
    action: number
    createdAt: number
    _all: number
  }


  export type SwipeMinAggregateInputType = {
    id?: true
    userId?: true
    targetUserId?: true
    action?: true
    createdAt?: true
  }

  export type SwipeMaxAggregateInputType = {
    id?: true
    userId?: true
    targetUserId?: true
    action?: true
    createdAt?: true
  }

  export type SwipeCountAggregateInputType = {
    id?: true
    userId?: true
    targetUserId?: true
    action?: true
    createdAt?: true
    _all?: true
  }

  export type SwipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Swipe to aggregate.
     */
    where?: SwipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Swipes
    **/
    _count?: true | SwipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwipeMaxAggregateInputType
  }

  export type GetSwipeAggregateType<T extends SwipeAggregateArgs> = {
        [P in keyof T & keyof AggregateSwipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSwipe[P]>
      : GetScalarType<T[P], AggregateSwipe[P]>
  }




  export type SwipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeWhereInput
    orderBy?: SwipeOrderByWithAggregationInput | SwipeOrderByWithAggregationInput[]
    by: SwipeScalarFieldEnum[] | SwipeScalarFieldEnum
    having?: SwipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwipeCountAggregateInputType | true
    _min?: SwipeMinAggregateInputType
    _max?: SwipeMaxAggregateInputType
  }

  export type SwipeGroupByOutputType = {
    id: string
    userId: string
    targetUserId: string
    action: $Enums.SwipeAction
    createdAt: Date
    _count: SwipeCountAggregateOutputType | null
    _min: SwipeMinAggregateOutputType | null
    _max: SwipeMaxAggregateOutputType | null
  }

  type GetSwipeGroupByPayload<T extends SwipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwipeGroupByOutputType[P]>
            : GetScalarType<T[P], SwipeGroupByOutputType[P]>
        }
      >
    >


  export type SwipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetUserId?: boolean
    action?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipe"]>

  export type SwipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetUserId?: boolean
    action?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipe"]>

  export type SwipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetUserId?: boolean
    action?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipe"]>

  export type SwipeSelectScalar = {
    id?: boolean
    userId?: boolean
    targetUserId?: boolean
    action?: boolean
    createdAt?: boolean
  }

  export type SwipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "targetUserId" | "action" | "createdAt", ExtArgs["result"]["swipe"]>
  export type SwipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SwipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SwipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SwipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Swipe"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      targetUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      targetUserId: string
      action: $Enums.SwipeAction
      createdAt: Date
    }, ExtArgs["result"]["swipe"]>
    composites: {}
  }

  type SwipeGetPayload<S extends boolean | null | undefined | SwipeDefaultArgs> = $Result.GetResult<Prisma.$SwipePayload, S>

  type SwipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SwipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SwipeCountAggregateInputType | true
    }

  export interface SwipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Swipe'], meta: { name: 'Swipe' } }
    /**
     * Find zero or one Swipe that matches the filter.
     * @param {SwipeFindUniqueArgs} args - Arguments to find a Swipe
     * @example
     * // Get one Swipe
     * const swipe = await prisma.swipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwipeFindUniqueArgs>(args: SelectSubset<T, SwipeFindUniqueArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Swipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SwipeFindUniqueOrThrowArgs} args - Arguments to find a Swipe
     * @example
     * // Get one Swipe
     * const swipe = await prisma.swipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwipeFindUniqueOrThrowArgs>(args: SelectSubset<T, SwipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Swipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeFindFirstArgs} args - Arguments to find a Swipe
     * @example
     * // Get one Swipe
     * const swipe = await prisma.swipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwipeFindFirstArgs>(args?: SelectSubset<T, SwipeFindFirstArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Swipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeFindFirstOrThrowArgs} args - Arguments to find a Swipe
     * @example
     * // Get one Swipe
     * const swipe = await prisma.swipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwipeFindFirstOrThrowArgs>(args?: SelectSubset<T, SwipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Swipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Swipes
     * const swipes = await prisma.swipe.findMany()
     * 
     * // Get first 10 Swipes
     * const swipes = await prisma.swipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const swipeWithIdOnly = await prisma.swipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SwipeFindManyArgs>(args?: SelectSubset<T, SwipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Swipe.
     * @param {SwipeCreateArgs} args - Arguments to create a Swipe.
     * @example
     * // Create one Swipe
     * const Swipe = await prisma.swipe.create({
     *   data: {
     *     // ... data to create a Swipe
     *   }
     * })
     * 
     */
    create<T extends SwipeCreateArgs>(args: SelectSubset<T, SwipeCreateArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Swipes.
     * @param {SwipeCreateManyArgs} args - Arguments to create many Swipes.
     * @example
     * // Create many Swipes
     * const swipe = await prisma.swipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwipeCreateManyArgs>(args?: SelectSubset<T, SwipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Swipes and returns the data saved in the database.
     * @param {SwipeCreateManyAndReturnArgs} args - Arguments to create many Swipes.
     * @example
     * // Create many Swipes
     * const swipe = await prisma.swipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Swipes and only return the `id`
     * const swipeWithIdOnly = await prisma.swipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SwipeCreateManyAndReturnArgs>(args?: SelectSubset<T, SwipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Swipe.
     * @param {SwipeDeleteArgs} args - Arguments to delete one Swipe.
     * @example
     * // Delete one Swipe
     * const Swipe = await prisma.swipe.delete({
     *   where: {
     *     // ... filter to delete one Swipe
     *   }
     * })
     * 
     */
    delete<T extends SwipeDeleteArgs>(args: SelectSubset<T, SwipeDeleteArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Swipe.
     * @param {SwipeUpdateArgs} args - Arguments to update one Swipe.
     * @example
     * // Update one Swipe
     * const swipe = await prisma.swipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwipeUpdateArgs>(args: SelectSubset<T, SwipeUpdateArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Swipes.
     * @param {SwipeDeleteManyArgs} args - Arguments to filter Swipes to delete.
     * @example
     * // Delete a few Swipes
     * const { count } = await prisma.swipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwipeDeleteManyArgs>(args?: SelectSubset<T, SwipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Swipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Swipes
     * const swipe = await prisma.swipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwipeUpdateManyArgs>(args: SelectSubset<T, SwipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Swipes and returns the data updated in the database.
     * @param {SwipeUpdateManyAndReturnArgs} args - Arguments to update many Swipes.
     * @example
     * // Update many Swipes
     * const swipe = await prisma.swipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Swipes and only return the `id`
     * const swipeWithIdOnly = await prisma.swipe.updateManyAndReturn({
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
    updateManyAndReturn<T extends SwipeUpdateManyAndReturnArgs>(args: SelectSubset<T, SwipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Swipe.
     * @param {SwipeUpsertArgs} args - Arguments to update or create a Swipe.
     * @example
     * // Update or create a Swipe
     * const swipe = await prisma.swipe.upsert({
     *   create: {
     *     // ... data to create a Swipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Swipe we want to update
     *   }
     * })
     */
    upsert<T extends SwipeUpsertArgs>(args: SelectSubset<T, SwipeUpsertArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Swipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeCountArgs} args - Arguments to filter Swipes to count.
     * @example
     * // Count the number of Swipes
     * const count = await prisma.swipe.count({
     *   where: {
     *     // ... the filter for the Swipes we want to count
     *   }
     * })
    **/
    count<T extends SwipeCountArgs>(
      args?: Subset<T, SwipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Swipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SwipeAggregateArgs>(args: Subset<T, SwipeAggregateArgs>): Prisma.PrismaPromise<GetSwipeAggregateType<T>>

    /**
     * Group by Swipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends SwipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwipeGroupByArgs['orderBy'] }
        : { orderBy?: SwipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SwipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Swipe model
   */
  readonly fields: SwipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Swipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Swipe model
   */
  interface SwipeFieldRefs {
    readonly id: FieldRef<"Swipe", 'String'>
    readonly userId: FieldRef<"Swipe", 'String'>
    readonly targetUserId: FieldRef<"Swipe", 'String'>
    readonly action: FieldRef<"Swipe", 'SwipeAction'>
    readonly createdAt: FieldRef<"Swipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Swipe findUnique
   */
  export type SwipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter, which Swipe to fetch.
     */
    where: SwipeWhereUniqueInput
  }

  /**
   * Swipe findUniqueOrThrow
   */
  export type SwipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter, which Swipe to fetch.
     */
    where: SwipeWhereUniqueInput
  }

  /**
   * Swipe findFirst
   */
  export type SwipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter, which Swipe to fetch.
     */
    where?: SwipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Swipes.
     */
    cursor?: SwipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Swipes.
     */
    distinct?: SwipeScalarFieldEnum | SwipeScalarFieldEnum[]
  }

  /**
   * Swipe findFirstOrThrow
   */
  export type SwipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter, which Swipe to fetch.
     */
    where?: SwipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Swipes.
     */
    cursor?: SwipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Swipes.
     */
    distinct?: SwipeScalarFieldEnum | SwipeScalarFieldEnum[]
  }

  /**
   * Swipe findMany
   */
  export type SwipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter, which Swipes to fetch.
     */
    where?: SwipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Swipes.
     */
    cursor?: SwipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    distinct?: SwipeScalarFieldEnum | SwipeScalarFieldEnum[]
  }

  /**
   * Swipe create
   */
  export type SwipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Swipe.
     */
    data: XOR<SwipeCreateInput, SwipeUncheckedCreateInput>
  }

  /**
   * Swipe createMany
   */
  export type SwipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Swipes.
     */
    data: SwipeCreateManyInput | SwipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Swipe createManyAndReturn
   */
  export type SwipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * The data used to create many Swipes.
     */
    data: SwipeCreateManyInput | SwipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Swipe update
   */
  export type SwipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Swipe.
     */
    data: XOR<SwipeUpdateInput, SwipeUncheckedUpdateInput>
    /**
     * Choose, which Swipe to update.
     */
    where: SwipeWhereUniqueInput
  }

  /**
   * Swipe updateMany
   */
  export type SwipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Swipes.
     */
    data: XOR<SwipeUpdateManyMutationInput, SwipeUncheckedUpdateManyInput>
    /**
     * Filter which Swipes to update
     */
    where?: SwipeWhereInput
    /**
     * Limit how many Swipes to update.
     */
    limit?: number
  }

  /**
   * Swipe updateManyAndReturn
   */
  export type SwipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * The data used to update Swipes.
     */
    data: XOR<SwipeUpdateManyMutationInput, SwipeUncheckedUpdateManyInput>
    /**
     * Filter which Swipes to update
     */
    where?: SwipeWhereInput
    /**
     * Limit how many Swipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Swipe upsert
   */
  export type SwipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Swipe to update in case it exists.
     */
    where: SwipeWhereUniqueInput
    /**
     * In case the Swipe found by the `where` argument doesn't exist, create a new Swipe with this data.
     */
    create: XOR<SwipeCreateInput, SwipeUncheckedCreateInput>
    /**
     * In case the Swipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwipeUpdateInput, SwipeUncheckedUpdateInput>
  }

  /**
   * Swipe delete
   */
  export type SwipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter which Swipe to delete.
     */
    where: SwipeWhereUniqueInput
  }

  /**
   * Swipe deleteMany
   */
  export type SwipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Swipes to delete
     */
    where?: SwipeWhereInput
    /**
     * Limit how many Swipes to delete.
     */
    limit?: number
  }

  /**
   * Swipe without action
   */
  export type SwipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    createdAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    createdAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    userAId: number
    userBId: number
    createdAt: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    createdAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    createdAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    createdAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    userAId: string
    userBId: string
    createdAt: Date
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    createdAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    createdAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    createdAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    createdAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userAId" | "userBId" | "createdAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      userA: Prisma.$UserPayload<ExtArgs>
      userB: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAId: string
      userBId: string
      createdAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userA<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userB<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly userAId: FieldRef<"Match", 'String'>
    readonly userBId: FieldRef<"Match", 'String'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    gender: 'gender',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SwipeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    targetUserId: 'targetUserId',
    action: 'action',
    createdAt: 'createdAt'
  };

  export type SwipeScalarFieldEnum = (typeof SwipeScalarFieldEnum)[keyof typeof SwipeScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    userAId: 'userAId',
    userBId: 'userBId',
    createdAt: 'createdAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'SwipeAction'
   */
  export type EnumSwipeActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeAction'>
    


  /**
   * Reference to a field of type 'SwipeAction[]'
   */
  export type ListEnumSwipeActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeAction[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    swipesFrom?: SwipeListRelationFilter
    swipesTo?: SwipeListRelationFilter
    matchesA?: MatchListRelationFilter
    matchesB?: MatchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    swipesFrom?: SwipeOrderByRelationAggregateInput
    swipesTo?: SwipeOrderByRelationAggregateInput
    matchesA?: MatchOrderByRelationAggregateInput
    matchesB?: MatchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    swipesFrom?: SwipeListRelationFilter
    swipesTo?: SwipeListRelationFilter
    matchesA?: MatchListRelationFilter
    matchesB?: MatchListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type SwipeWhereInput = {
    AND?: SwipeWhereInput | SwipeWhereInput[]
    OR?: SwipeWhereInput[]
    NOT?: SwipeWhereInput | SwipeWhereInput[]
    id?: StringFilter<"Swipe"> | string
    userId?: StringFilter<"Swipe"> | string
    targetUserId?: StringFilter<"Swipe"> | string
    action?: EnumSwipeActionFilter<"Swipe"> | $Enums.SwipeAction
    createdAt?: DateTimeFilter<"Swipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SwipeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    targetUser?: UserOrderByWithRelationInput
  }

  export type SwipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SwipeWhereInput | SwipeWhereInput[]
    OR?: SwipeWhereInput[]
    NOT?: SwipeWhereInput | SwipeWhereInput[]
    userId?: StringFilter<"Swipe"> | string
    targetUserId?: StringFilter<"Swipe"> | string
    action?: EnumSwipeActionFilter<"Swipe"> | $Enums.SwipeAction
    createdAt?: DateTimeFilter<"Swipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SwipeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    _count?: SwipeCountOrderByAggregateInput
    _max?: SwipeMaxOrderByAggregateInput
    _min?: SwipeMinOrderByAggregateInput
  }

  export type SwipeScalarWhereWithAggregatesInput = {
    AND?: SwipeScalarWhereWithAggregatesInput | SwipeScalarWhereWithAggregatesInput[]
    OR?: SwipeScalarWhereWithAggregatesInput[]
    NOT?: SwipeScalarWhereWithAggregatesInput | SwipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Swipe"> | string
    userId?: StringWithAggregatesFilter<"Swipe"> | string
    targetUserId?: StringWithAggregatesFilter<"Swipe"> | string
    action?: EnumSwipeActionWithAggregatesFilter<"Swipe"> | $Enums.SwipeAction
    createdAt?: DateTimeWithAggregatesFilter<"Swipe"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    userAId?: StringFilter<"Match"> | string
    userBId?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    userA?: XOR<UserScalarRelationFilter, UserWhereInput>
    userB?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
    userA?: UserOrderByWithRelationInput
    userB?: UserOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    userAId?: StringFilter<"Match"> | string
    userBId?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    userA?: XOR<UserScalarRelationFilter, UserWhereInput>
    userB?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    userAId?: StringWithAggregatesFilter<"Match"> | string
    userBId?: StringWithAggregatesFilter<"Match"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role?: $Enums.Role
    swipesFrom?: SwipeCreateNestedManyWithoutUserInput
    swipesTo?: SwipeCreateNestedManyWithoutTargetUserInput
    matchesA?: MatchCreateNestedManyWithoutUserAInput
    matchesB?: MatchCreateNestedManyWithoutUserBInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role?: $Enums.Role
    swipesFrom?: SwipeUncheckedCreateNestedManyWithoutUserInput
    swipesTo?: SwipeUncheckedCreateNestedManyWithoutTargetUserInput
    matchesA?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesB?: MatchUncheckedCreateNestedManyWithoutUserBInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    swipesFrom?: SwipeUpdateManyWithoutUserNestedInput
    swipesTo?: SwipeUpdateManyWithoutTargetUserNestedInput
    matchesA?: MatchUpdateManyWithoutUserANestedInput
    matchesB?: MatchUpdateManyWithoutUserBNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    swipesFrom?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    swipesTo?: SwipeUncheckedUpdateManyWithoutTargetUserNestedInput
    matchesA?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesB?: MatchUncheckedUpdateManyWithoutUserBNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SwipeCreateInput = {
    id?: string
    action: $Enums.SwipeAction
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSwipesFromInput
    targetUser: UserCreateNestedOneWithoutSwipesToInput
  }

  export type SwipeUncheckedCreateInput = {
    id?: string
    userId: string
    targetUserId: string
    action: $Enums.SwipeAction
    createdAt?: Date | string
  }

  export type SwipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwipesFromNestedInput
    targetUser?: UserUpdateOneRequiredWithoutSwipesToNestedInput
  }

  export type SwipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeCreateManyInput = {
    id?: string
    userId: string
    targetUserId: string
    action: $Enums.SwipeAction
    createdAt?: Date | string
  }

  export type SwipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    createdAt?: Date | string
    userA: UserCreateNestedOneWithoutMatchesAInput
    userB: UserCreateNestedOneWithoutMatchesBInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    userAId: string
    userBId: string
    createdAt?: Date | string
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userA?: UserUpdateOneRequiredWithoutMatchesANestedInput
    userB?: UserUpdateOneRequiredWithoutMatchesBNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyInput = {
    id?: string
    userAId: string
    userBId: string
    createdAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SwipeListRelationFilter = {
    every?: SwipeWhereInput
    some?: SwipeWhereInput
    none?: SwipeWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type SwipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumSwipeActionFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | EnumSwipeActionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeAction[] | ListEnumSwipeActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeAction[] | ListEnumSwipeActionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeActionFilter<$PrismaModel> | $Enums.SwipeAction
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SwipeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type SwipeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type SwipeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSwipeActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | EnumSwipeActionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeAction[] | ListEnumSwipeActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeAction[] | ListEnumSwipeActionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeActionWithAggregatesFilter<$PrismaModel> | $Enums.SwipeAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwipeActionFilter<$PrismaModel>
    _max?: NestedEnumSwipeActionFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
  }

  export type SwipeCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput> | SwipeCreateWithoutUserInput[] | SwipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutUserInput | SwipeCreateOrConnectWithoutUserInput[]
    createMany?: SwipeCreateManyUserInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type SwipeCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<SwipeCreateWithoutTargetUserInput, SwipeUncheckedCreateWithoutTargetUserInput> | SwipeCreateWithoutTargetUserInput[] | SwipeUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutTargetUserInput | SwipeCreateOrConnectWithoutTargetUserInput[]
    createMany?: SwipeCreateManyTargetUserInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutUserAInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutUserBInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type SwipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput> | SwipeCreateWithoutUserInput[] | SwipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutUserInput | SwipeCreateOrConnectWithoutUserInput[]
    createMany?: SwipeCreateManyUserInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type SwipeUncheckedCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<SwipeCreateWithoutTargetUserInput, SwipeUncheckedCreateWithoutTargetUserInput> | SwipeCreateWithoutTargetUserInput[] | SwipeUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutTargetUserInput | SwipeCreateOrConnectWithoutTargetUserInput[]
    createMany?: SwipeCreateManyTargetUserInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUserAInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUserBInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type SwipeUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput> | SwipeCreateWithoutUserInput[] | SwipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutUserInput | SwipeCreateOrConnectWithoutUserInput[]
    upsert?: SwipeUpsertWithWhereUniqueWithoutUserInput | SwipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwipeCreateManyUserInputEnvelope
    set?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    disconnect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    delete?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    update?: SwipeUpdateWithWhereUniqueWithoutUserInput | SwipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwipeUpdateManyWithWhereWithoutUserInput | SwipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
  }

  export type SwipeUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<SwipeCreateWithoutTargetUserInput, SwipeUncheckedCreateWithoutTargetUserInput> | SwipeCreateWithoutTargetUserInput[] | SwipeUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutTargetUserInput | SwipeCreateOrConnectWithoutTargetUserInput[]
    upsert?: SwipeUpsertWithWhereUniqueWithoutTargetUserInput | SwipeUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: SwipeCreateManyTargetUserInputEnvelope
    set?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    disconnect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    delete?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    update?: SwipeUpdateWithWhereUniqueWithoutTargetUserInput | SwipeUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: SwipeUpdateManyWithWhereWithoutTargetUserInput | SwipeUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutUserANestedInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserAInput | MatchUpsertWithWhereUniqueWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserAInput | MatchUpdateWithWhereUniqueWithoutUserAInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserAInput | MatchUpdateManyWithWhereWithoutUserAInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutUserBNestedInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserBInput | MatchUpsertWithWhereUniqueWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserBInput | MatchUpdateWithWhereUniqueWithoutUserBInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserBInput | MatchUpdateManyWithWhereWithoutUserBInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type SwipeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput> | SwipeCreateWithoutUserInput[] | SwipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutUserInput | SwipeCreateOrConnectWithoutUserInput[]
    upsert?: SwipeUpsertWithWhereUniqueWithoutUserInput | SwipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwipeCreateManyUserInputEnvelope
    set?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    disconnect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    delete?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    update?: SwipeUpdateWithWhereUniqueWithoutUserInput | SwipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwipeUpdateManyWithWhereWithoutUserInput | SwipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
  }

  export type SwipeUncheckedUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<SwipeCreateWithoutTargetUserInput, SwipeUncheckedCreateWithoutTargetUserInput> | SwipeCreateWithoutTargetUserInput[] | SwipeUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutTargetUserInput | SwipeCreateOrConnectWithoutTargetUserInput[]
    upsert?: SwipeUpsertWithWhereUniqueWithoutTargetUserInput | SwipeUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: SwipeCreateManyTargetUserInputEnvelope
    set?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    disconnect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    delete?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    update?: SwipeUpdateWithWhereUniqueWithoutTargetUserInput | SwipeUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: SwipeUpdateManyWithWhereWithoutTargetUserInput | SwipeUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUserANestedInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserAInput | MatchUpsertWithWhereUniqueWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserAInput | MatchUpdateWithWhereUniqueWithoutUserAInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserAInput | MatchUpdateManyWithWhereWithoutUserAInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUserBNestedInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserBInput | MatchUpsertWithWhereUniqueWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserBInput | MatchUpdateWithWhereUniqueWithoutUserBInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserBInput | MatchUpdateManyWithWhereWithoutUserBInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSwipesFromInput = {
    create?: XOR<UserCreateWithoutSwipesFromInput, UserUncheckedCreateWithoutSwipesFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesFromInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSwipesToInput = {
    create?: XOR<UserCreateWithoutSwipesToInput, UserUncheckedCreateWithoutSwipesToInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesToInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSwipeActionFieldUpdateOperationsInput = {
    set?: $Enums.SwipeAction
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSwipesFromNestedInput = {
    create?: XOR<UserCreateWithoutSwipesFromInput, UserUncheckedCreateWithoutSwipesFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesFromInput
    upsert?: UserUpsertWithoutSwipesFromInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSwipesFromInput, UserUpdateWithoutSwipesFromInput>, UserUncheckedUpdateWithoutSwipesFromInput>
  }

  export type UserUpdateOneRequiredWithoutSwipesToNestedInput = {
    create?: XOR<UserCreateWithoutSwipesToInput, UserUncheckedCreateWithoutSwipesToInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesToInput
    upsert?: UserUpsertWithoutSwipesToInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSwipesToInput, UserUpdateWithoutSwipesToInput>, UserUncheckedUpdateWithoutSwipesToInput>
  }

  export type UserCreateNestedOneWithoutMatchesAInput = {
    create?: XOR<UserCreateWithoutMatchesAInput, UserUncheckedCreateWithoutMatchesAInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesBInput = {
    create?: XOR<UserCreateWithoutMatchesBInput, UserUncheckedCreateWithoutMatchesBInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesBInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMatchesANestedInput = {
    create?: XOR<UserCreateWithoutMatchesAInput, UserUncheckedCreateWithoutMatchesAInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAInput
    upsert?: UserUpsertWithoutMatchesAInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAInput, UserUpdateWithoutMatchesAInput>, UserUncheckedUpdateWithoutMatchesAInput>
  }

  export type UserUpdateOneRequiredWithoutMatchesBNestedInput = {
    create?: XOR<UserCreateWithoutMatchesBInput, UserUncheckedCreateWithoutMatchesBInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesBInput
    upsert?: UserUpsertWithoutMatchesBInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesBInput, UserUpdateWithoutMatchesBInput>, UserUncheckedUpdateWithoutMatchesBInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumSwipeActionFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | EnumSwipeActionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeAction[] | ListEnumSwipeActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeAction[] | ListEnumSwipeActionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeActionFilter<$PrismaModel> | $Enums.SwipeAction
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumSwipeActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | EnumSwipeActionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeAction[] | ListEnumSwipeActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeAction[] | ListEnumSwipeActionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeActionWithAggregatesFilter<$PrismaModel> | $Enums.SwipeAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwipeActionFilter<$PrismaModel>
    _max?: NestedEnumSwipeActionFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SwipeCreateWithoutUserInput = {
    id?: string
    action: $Enums.SwipeAction
    createdAt?: Date | string
    targetUser: UserCreateNestedOneWithoutSwipesToInput
  }

  export type SwipeUncheckedCreateWithoutUserInput = {
    id?: string
    targetUserId: string
    action: $Enums.SwipeAction
    createdAt?: Date | string
  }

  export type SwipeCreateOrConnectWithoutUserInput = {
    where: SwipeWhereUniqueInput
    create: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput>
  }

  export type SwipeCreateManyUserInputEnvelope = {
    data: SwipeCreateManyUserInput | SwipeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SwipeCreateWithoutTargetUserInput = {
    id?: string
    action: $Enums.SwipeAction
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSwipesFromInput
  }

  export type SwipeUncheckedCreateWithoutTargetUserInput = {
    id?: string
    userId: string
    action: $Enums.SwipeAction
    createdAt?: Date | string
  }

  export type SwipeCreateOrConnectWithoutTargetUserInput = {
    where: SwipeWhereUniqueInput
    create: XOR<SwipeCreateWithoutTargetUserInput, SwipeUncheckedCreateWithoutTargetUserInput>
  }

  export type SwipeCreateManyTargetUserInputEnvelope = {
    data: SwipeCreateManyTargetUserInput | SwipeCreateManyTargetUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutUserAInput = {
    id?: string
    createdAt?: Date | string
    userB: UserCreateNestedOneWithoutMatchesBInput
  }

  export type MatchUncheckedCreateWithoutUserAInput = {
    id?: string
    userBId: string
    createdAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutUserAInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput>
  }

  export type MatchCreateManyUserAInputEnvelope = {
    data: MatchCreateManyUserAInput | MatchCreateManyUserAInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutUserBInput = {
    id?: string
    createdAt?: Date | string
    userA: UserCreateNestedOneWithoutMatchesAInput
  }

  export type MatchUncheckedCreateWithoutUserBInput = {
    id?: string
    userAId: string
    createdAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutUserBInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput>
  }

  export type MatchCreateManyUserBInputEnvelope = {
    data: MatchCreateManyUserBInput | MatchCreateManyUserBInput[]
    skipDuplicates?: boolean
  }

  export type SwipeUpsertWithWhereUniqueWithoutUserInput = {
    where: SwipeWhereUniqueInput
    update: XOR<SwipeUpdateWithoutUserInput, SwipeUncheckedUpdateWithoutUserInput>
    create: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput>
  }

  export type SwipeUpdateWithWhereUniqueWithoutUserInput = {
    where: SwipeWhereUniqueInput
    data: XOR<SwipeUpdateWithoutUserInput, SwipeUncheckedUpdateWithoutUserInput>
  }

  export type SwipeUpdateManyWithWhereWithoutUserInput = {
    where: SwipeScalarWhereInput
    data: XOR<SwipeUpdateManyMutationInput, SwipeUncheckedUpdateManyWithoutUserInput>
  }

  export type SwipeScalarWhereInput = {
    AND?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
    OR?: SwipeScalarWhereInput[]
    NOT?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
    id?: StringFilter<"Swipe"> | string
    userId?: StringFilter<"Swipe"> | string
    targetUserId?: StringFilter<"Swipe"> | string
    action?: EnumSwipeActionFilter<"Swipe"> | $Enums.SwipeAction
    createdAt?: DateTimeFilter<"Swipe"> | Date | string
  }

  export type SwipeUpsertWithWhereUniqueWithoutTargetUserInput = {
    where: SwipeWhereUniqueInput
    update: XOR<SwipeUpdateWithoutTargetUserInput, SwipeUncheckedUpdateWithoutTargetUserInput>
    create: XOR<SwipeCreateWithoutTargetUserInput, SwipeUncheckedCreateWithoutTargetUserInput>
  }

  export type SwipeUpdateWithWhereUniqueWithoutTargetUserInput = {
    where: SwipeWhereUniqueInput
    data: XOR<SwipeUpdateWithoutTargetUserInput, SwipeUncheckedUpdateWithoutTargetUserInput>
  }

  export type SwipeUpdateManyWithWhereWithoutTargetUserInput = {
    where: SwipeScalarWhereInput
    data: XOR<SwipeUpdateManyMutationInput, SwipeUncheckedUpdateManyWithoutTargetUserInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutUserAInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUserAInput, MatchUncheckedUpdateWithoutUserAInput>
    create: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutUserAInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUserAInput, MatchUncheckedUpdateWithoutUserAInput>
  }

  export type MatchUpdateManyWithWhereWithoutUserAInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUserAInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    userAId?: StringFilter<"Match"> | string
    userBId?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutUserBInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUserBInput, MatchUncheckedUpdateWithoutUserBInput>
    create: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutUserBInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUserBInput, MatchUncheckedUpdateWithoutUserBInput>
  }

  export type MatchUpdateManyWithWhereWithoutUserBInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUserBInput>
  }

  export type UserCreateWithoutSwipesFromInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role?: $Enums.Role
    swipesTo?: SwipeCreateNestedManyWithoutTargetUserInput
    matchesA?: MatchCreateNestedManyWithoutUserAInput
    matchesB?: MatchCreateNestedManyWithoutUserBInput
  }

  export type UserUncheckedCreateWithoutSwipesFromInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role?: $Enums.Role
    swipesTo?: SwipeUncheckedCreateNestedManyWithoutTargetUserInput
    matchesA?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesB?: MatchUncheckedCreateNestedManyWithoutUserBInput
  }

  export type UserCreateOrConnectWithoutSwipesFromInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSwipesFromInput, UserUncheckedCreateWithoutSwipesFromInput>
  }

  export type UserCreateWithoutSwipesToInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role?: $Enums.Role
    swipesFrom?: SwipeCreateNestedManyWithoutUserInput
    matchesA?: MatchCreateNestedManyWithoutUserAInput
    matchesB?: MatchCreateNestedManyWithoutUserBInput
  }

  export type UserUncheckedCreateWithoutSwipesToInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role?: $Enums.Role
    swipesFrom?: SwipeUncheckedCreateNestedManyWithoutUserInput
    matchesA?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesB?: MatchUncheckedCreateNestedManyWithoutUserBInput
  }

  export type UserCreateOrConnectWithoutSwipesToInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSwipesToInput, UserUncheckedCreateWithoutSwipesToInput>
  }

  export type UserUpsertWithoutSwipesFromInput = {
    update: XOR<UserUpdateWithoutSwipesFromInput, UserUncheckedUpdateWithoutSwipesFromInput>
    create: XOR<UserCreateWithoutSwipesFromInput, UserUncheckedCreateWithoutSwipesFromInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSwipesFromInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSwipesFromInput, UserUncheckedUpdateWithoutSwipesFromInput>
  }

  export type UserUpdateWithoutSwipesFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    swipesTo?: SwipeUpdateManyWithoutTargetUserNestedInput
    matchesA?: MatchUpdateManyWithoutUserANestedInput
    matchesB?: MatchUpdateManyWithoutUserBNestedInput
  }

  export type UserUncheckedUpdateWithoutSwipesFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    swipesTo?: SwipeUncheckedUpdateManyWithoutTargetUserNestedInput
    matchesA?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesB?: MatchUncheckedUpdateManyWithoutUserBNestedInput
  }

  export type UserUpsertWithoutSwipesToInput = {
    update: XOR<UserUpdateWithoutSwipesToInput, UserUncheckedUpdateWithoutSwipesToInput>
    create: XOR<UserCreateWithoutSwipesToInput, UserUncheckedCreateWithoutSwipesToInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSwipesToInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSwipesToInput, UserUncheckedUpdateWithoutSwipesToInput>
  }

  export type UserUpdateWithoutSwipesToInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    swipesFrom?: SwipeUpdateManyWithoutUserNestedInput
    matchesA?: MatchUpdateManyWithoutUserANestedInput
    matchesB?: MatchUpdateManyWithoutUserBNestedInput
  }

  export type UserUncheckedUpdateWithoutSwipesToInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    swipesFrom?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    matchesA?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesB?: MatchUncheckedUpdateManyWithoutUserBNestedInput
  }

  export type UserCreateWithoutMatchesAInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role?: $Enums.Role
    swipesFrom?: SwipeCreateNestedManyWithoutUserInput
    swipesTo?: SwipeCreateNestedManyWithoutTargetUserInput
    matchesB?: MatchCreateNestedManyWithoutUserBInput
  }

  export type UserUncheckedCreateWithoutMatchesAInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role?: $Enums.Role
    swipesFrom?: SwipeUncheckedCreateNestedManyWithoutUserInput
    swipesTo?: SwipeUncheckedCreateNestedManyWithoutTargetUserInput
    matchesB?: MatchUncheckedCreateNestedManyWithoutUserBInput
  }

  export type UserCreateOrConnectWithoutMatchesAInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAInput, UserUncheckedCreateWithoutMatchesAInput>
  }

  export type UserCreateWithoutMatchesBInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role?: $Enums.Role
    swipesFrom?: SwipeCreateNestedManyWithoutUserInput
    swipesTo?: SwipeCreateNestedManyWithoutTargetUserInput
    matchesA?: MatchCreateNestedManyWithoutUserAInput
  }

  export type UserUncheckedCreateWithoutMatchesBInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    role?: $Enums.Role
    swipesFrom?: SwipeUncheckedCreateNestedManyWithoutUserInput
    swipesTo?: SwipeUncheckedCreateNestedManyWithoutTargetUserInput
    matchesA?: MatchUncheckedCreateNestedManyWithoutUserAInput
  }

  export type UserCreateOrConnectWithoutMatchesBInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesBInput, UserUncheckedCreateWithoutMatchesBInput>
  }

  export type UserUpsertWithoutMatchesAInput = {
    update: XOR<UserUpdateWithoutMatchesAInput, UserUncheckedUpdateWithoutMatchesAInput>
    create: XOR<UserCreateWithoutMatchesAInput, UserUncheckedCreateWithoutMatchesAInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAInput, UserUncheckedUpdateWithoutMatchesAInput>
  }

  export type UserUpdateWithoutMatchesAInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    swipesFrom?: SwipeUpdateManyWithoutUserNestedInput
    swipesTo?: SwipeUpdateManyWithoutTargetUserNestedInput
    matchesB?: MatchUpdateManyWithoutUserBNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    swipesFrom?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    swipesTo?: SwipeUncheckedUpdateManyWithoutTargetUserNestedInput
    matchesB?: MatchUncheckedUpdateManyWithoutUserBNestedInput
  }

  export type UserUpsertWithoutMatchesBInput = {
    update: XOR<UserUpdateWithoutMatchesBInput, UserUncheckedUpdateWithoutMatchesBInput>
    create: XOR<UserCreateWithoutMatchesBInput, UserUncheckedCreateWithoutMatchesBInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesBInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesBInput, UserUncheckedUpdateWithoutMatchesBInput>
  }

  export type UserUpdateWithoutMatchesBInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    swipesFrom?: SwipeUpdateManyWithoutUserNestedInput
    swipesTo?: SwipeUpdateManyWithoutTargetUserNestedInput
    matchesA?: MatchUpdateManyWithoutUserANestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesBInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    swipesFrom?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    swipesTo?: SwipeUncheckedUpdateManyWithoutTargetUserNestedInput
    matchesA?: MatchUncheckedUpdateManyWithoutUserANestedInput
  }

  export type SwipeCreateManyUserInput = {
    id?: string
    targetUserId: string
    action: $Enums.SwipeAction
    createdAt?: Date | string
  }

  export type SwipeCreateManyTargetUserInput = {
    id?: string
    userId: string
    action: $Enums.SwipeAction
    createdAt?: Date | string
  }

  export type MatchCreateManyUserAInput = {
    id?: string
    userBId: string
    createdAt?: Date | string
  }

  export type MatchCreateManyUserBInput = {
    id?: string
    userAId: string
    createdAt?: Date | string
  }

  export type SwipeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetUser?: UserUpdateOneRequiredWithoutSwipesToNestedInput
  }

  export type SwipeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwipesFromNestedInput
  }

  export type SwipeUncheckedUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeUncheckedUpdateManyWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userB?: UserUpdateOneRequiredWithoutMatchesBNestedInput
  }

  export type MatchUncheckedUpdateWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userA?: UserUpdateOneRequiredWithoutMatchesANestedInput
  }

  export type MatchUncheckedUpdateWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}