
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
 * Model Investment
 * 
 */
export type Investment = $Result.DefaultSelection<Prisma.$InvestmentPayload>
/**
 * Model InvestmentHistory
 * 
 */
export type InvestmentHistory = $Result.DefaultSelection<Prisma.$InvestmentHistoryPayload>
/**
 * Model Debt
 * 
 */
export type Debt = $Result.DefaultSelection<Prisma.$DebtPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model GoalContribution
 * 
 */
export type GoalContribution = $Result.DefaultSelection<Prisma.$GoalContributionPayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model LinkedAccount
 * 
 */
export type LinkedAccount = $Result.DefaultSelection<Prisma.$LinkedAccountPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Fund
 * 
 */
export type Fund = $Result.DefaultSelection<Prisma.$FundPayload>

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
   * `prisma.investment`: Exposes CRUD operations for the **Investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investment.findMany()
    * ```
    */
  get investment(): Prisma.InvestmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investmentHistory`: Exposes CRUD operations for the **InvestmentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvestmentHistories
    * const investmentHistories = await prisma.investmentHistory.findMany()
    * ```
    */
  get investmentHistory(): Prisma.InvestmentHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.debt`: Exposes CRUD operations for the **Debt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Debts
    * const debts = await prisma.debt.findMany()
    * ```
    */
  get debt(): Prisma.DebtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goalContribution`: Exposes CRUD operations for the **GoalContribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoalContributions
    * const goalContributions = await prisma.goalContribution.findMany()
    * ```
    */
  get goalContribution(): Prisma.GoalContributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkedAccount`: Exposes CRUD operations for the **LinkedAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedAccounts
    * const linkedAccounts = await prisma.linkedAccount.findMany()
    * ```
    */
  get linkedAccount(): Prisma.LinkedAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fund`: Exposes CRUD operations for the **Fund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funds
    * const funds = await prisma.fund.findMany()
    * ```
    */
  get fund(): Prisma.FundDelegate<ExtArgs, ClientOptions>;
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
    Investment: 'Investment',
    InvestmentHistory: 'InvestmentHistory',
    Debt: 'Debt',
    Goal: 'Goal',
    GoalContribution: 'GoalContribution',
    Budget: 'Budget',
    Transaction: 'Transaction',
    LinkedAccount: 'LinkedAccount',
    ChatMessage: 'ChatMessage',
    Fund: 'Fund'
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
      modelProps: "user" | "investment" | "investmentHistory" | "debt" | "goal" | "goalContribution" | "budget" | "transaction" | "linkedAccount" | "chatMessage" | "fund"
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
      Investment: {
        payload: Prisma.$InvestmentPayload<ExtArgs>
        fields: Prisma.InvestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findFirst: {
            args: Prisma.InvestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findMany: {
            args: Prisma.InvestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          create: {
            args: Prisma.InvestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          createMany: {
            args: Prisma.InvestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          delete: {
            args: Prisma.InvestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          update: {
            args: Prisma.InvestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment>
          }
          groupBy: {
            args: Prisma.InvestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentCountAggregateOutputType> | number
          }
        }
      }
      InvestmentHistory: {
        payload: Prisma.$InvestmentHistoryPayload<ExtArgs>
        fields: Prisma.InvestmentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentHistoryPayload>
          }
          findFirst: {
            args: Prisma.InvestmentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentHistoryPayload>
          }
          findMany: {
            args: Prisma.InvestmentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentHistoryPayload>[]
          }
          create: {
            args: Prisma.InvestmentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentHistoryPayload>
          }
          createMany: {
            args: Prisma.InvestmentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentHistoryPayload>[]
          }
          delete: {
            args: Prisma.InvestmentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentHistoryPayload>
          }
          update: {
            args: Prisma.InvestmentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentHistoryPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentHistoryPayload>
          }
          aggregate: {
            args: Prisma.InvestmentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestmentHistory>
          }
          groupBy: {
            args: Prisma.InvestmentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentHistoryCountAggregateOutputType> | number
          }
        }
      }
      Debt: {
        payload: Prisma.$DebtPayload<ExtArgs>
        fields: Prisma.DebtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          findFirst: {
            args: Prisma.DebtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          findMany: {
            args: Prisma.DebtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>[]
          }
          create: {
            args: Prisma.DebtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          createMany: {
            args: Prisma.DebtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DebtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>[]
          }
          delete: {
            args: Prisma.DebtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          update: {
            args: Prisma.DebtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          deleteMany: {
            args: Prisma.DebtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DebtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DebtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>[]
          }
          upsert: {
            args: Prisma.DebtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          aggregate: {
            args: Prisma.DebtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDebt>
          }
          groupBy: {
            args: Prisma.DebtGroupByArgs<ExtArgs>
            result: $Utils.Optional<DebtGroupByOutputType>[]
          }
          count: {
            args: Prisma.DebtCountArgs<ExtArgs>
            result: $Utils.Optional<DebtCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      GoalContribution: {
        payload: Prisma.$GoalContributionPayload<ExtArgs>
        fields: Prisma.GoalContributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalContributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalContributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalContributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalContributionPayload>
          }
          findFirst: {
            args: Prisma.GoalContributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalContributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalContributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalContributionPayload>
          }
          findMany: {
            args: Prisma.GoalContributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalContributionPayload>[]
          }
          create: {
            args: Prisma.GoalContributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalContributionPayload>
          }
          createMany: {
            args: Prisma.GoalContributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalContributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalContributionPayload>[]
          }
          delete: {
            args: Prisma.GoalContributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalContributionPayload>
          }
          update: {
            args: Prisma.GoalContributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalContributionPayload>
          }
          deleteMany: {
            args: Prisma.GoalContributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalContributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalContributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalContributionPayload>[]
          }
          upsert: {
            args: Prisma.GoalContributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalContributionPayload>
          }
          aggregate: {
            args: Prisma.GoalContributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoalContribution>
          }
          groupBy: {
            args: Prisma.GoalContributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalContributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalContributionCountArgs<ExtArgs>
            result: $Utils.Optional<GoalContributionCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BudgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      LinkedAccount: {
        payload: Prisma.$LinkedAccountPayload<ExtArgs>
        fields: Prisma.LinkedAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          findFirst: {
            args: Prisma.LinkedAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          findMany: {
            args: Prisma.LinkedAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>[]
          }
          create: {
            args: Prisma.LinkedAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          createMany: {
            args: Prisma.LinkedAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkedAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>[]
          }
          delete: {
            args: Prisma.LinkedAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          update: {
            args: Prisma.LinkedAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          deleteMany: {
            args: Prisma.LinkedAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkedAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>[]
          }
          upsert: {
            args: Prisma.LinkedAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          aggregate: {
            args: Prisma.LinkedAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkedAccount>
          }
          groupBy: {
            args: Prisma.LinkedAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkedAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedAccountCountArgs<ExtArgs>
            result: $Utils.Optional<LinkedAccountCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Fund: {
        payload: Prisma.$FundPayload<ExtArgs>
        fields: Prisma.FundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          findFirst: {
            args: Prisma.FundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          findMany: {
            args: Prisma.FundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>[]
          }
          create: {
            args: Prisma.FundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          createMany: {
            args: Prisma.FundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>[]
          }
          delete: {
            args: Prisma.FundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          update: {
            args: Prisma.FundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          deleteMany: {
            args: Prisma.FundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>[]
          }
          upsert: {
            args: Prisma.FundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          aggregate: {
            args: Prisma.FundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFund>
          }
          groupBy: {
            args: Prisma.FundGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundCountArgs<ExtArgs>
            result: $Utils.Optional<FundCountAggregateOutputType> | number
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
    investment?: InvestmentOmit
    investmentHistory?: InvestmentHistoryOmit
    debt?: DebtOmit
    goal?: GoalOmit
    goalContribution?: GoalContributionOmit
    budget?: BudgetOmit
    transaction?: TransactionOmit
    linkedAccount?: LinkedAccountOmit
    chatMessage?: ChatMessageOmit
    fund?: FundOmit
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
    investments: number
    investmentHistory: number
    debts: number
    goals: number
    goalContributions: number
    budgets: number
    transactions: number
    linkedAccounts: number
    chatMessages: number
    funds: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | UserCountOutputTypeCountInvestmentsArgs
    investmentHistory?: boolean | UserCountOutputTypeCountInvestmentHistoryArgs
    debts?: boolean | UserCountOutputTypeCountDebtsArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    goalContributions?: boolean | UserCountOutputTypeCountGoalContributionsArgs
    budgets?: boolean | UserCountOutputTypeCountBudgetsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    linkedAccounts?: boolean | UserCountOutputTypeCountLinkedAccountsArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
    funds?: boolean | UserCountOutputTypeCountFundsArgs
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
  export type UserCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvestmentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDebtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalContributionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinkedAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundWhereInput
  }


  /**
   * Count Type InvestmentCountOutputType
   */

  export type InvestmentCountOutputType = {
    history: number
  }

  export type InvestmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | InvestmentCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * InvestmentCountOutputType without action
   */
  export type InvestmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentCountOutputType
     */
    select?: InvestmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestmentCountOutputType without action
   */
  export type InvestmentCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentHistoryWhereInput
  }


  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    contributions: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributions?: boolean | GoalCountOutputTypeCountContributionsArgs
  }

  // Custom InputTypes
  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalContributionWhereInput
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
    email: string | null
    password: string | null
    name: string | null
    timezone: string | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    timezone: string | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    timezone: number
    currency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    timezone?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    timezone?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    timezone?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    password: string
    name: string | null
    timezone: string
    currency: string
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    password?: boolean
    name?: boolean
    timezone?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    investments?: boolean | User$investmentsArgs<ExtArgs>
    investmentHistory?: boolean | User$investmentHistoryArgs<ExtArgs>
    debts?: boolean | User$debtsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    goalContributions?: boolean | User$goalContributionsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    linkedAccounts?: boolean | User$linkedAccountsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    funds?: boolean | User$fundsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    timezone?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    timezone?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    timezone?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "timezone" | "currency" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | User$investmentsArgs<ExtArgs>
    investmentHistory?: boolean | User$investmentHistoryArgs<ExtArgs>
    debts?: boolean | User$debtsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    goalContributions?: boolean | User$goalContributionsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    linkedAccounts?: boolean | User$linkedAccountsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    funds?: boolean | User$fundsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
      investmentHistory: Prisma.$InvestmentHistoryPayload<ExtArgs>[]
      debts: Prisma.$DebtPayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      goalContributions: Prisma.$GoalContributionPayload<ExtArgs>[]
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      linkedAccounts: Prisma.$LinkedAccountPayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      funds: Prisma.$FundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      timezone: string
      currency: string
      createdAt: Date
      updatedAt: Date
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
    investments<T extends User$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    investmentHistory<T extends User$investmentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$investmentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    debts<T extends User$debtsArgs<ExtArgs> = {}>(args?: Subset<T, User$debtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goalContributions<T extends User$goalContributionsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalContributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    budgets<T extends User$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, User$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkedAccounts<T extends User$linkedAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$linkedAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    funds<T extends User$fundsArgs<ExtArgs> = {}>(args?: Subset<T, User$fundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly timezone: FieldRef<"User", 'String'>
    readonly currency: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.investments
   */
  export type User$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * User.investmentHistory
   */
  export type User$investmentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
    where?: InvestmentHistoryWhereInput
    orderBy?: InvestmentHistoryOrderByWithRelationInput | InvestmentHistoryOrderByWithRelationInput[]
    cursor?: InvestmentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentHistoryScalarFieldEnum | InvestmentHistoryScalarFieldEnum[]
  }

  /**
   * User.debts
   */
  export type User$debtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    where?: DebtWhereInput
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    cursor?: DebtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.goalContributions
   */
  export type User$goalContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
    where?: GoalContributionWhereInput
    orderBy?: GoalContributionOrderByWithRelationInput | GoalContributionOrderByWithRelationInput[]
    cursor?: GoalContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalContributionScalarFieldEnum | GoalContributionScalarFieldEnum[]
  }

  /**
   * User.budgets
   */
  export type User$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.linkedAccounts
   */
  export type User$linkedAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    where?: LinkedAccountWhereInput
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    cursor?: LinkedAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkedAccountScalarFieldEnum | LinkedAccountScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.funds
   */
  export type User$fundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    where?: FundWhereInput
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    cursor?: FundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
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
   * Model Investment
   */

  export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  export type InvestmentAvgAggregateOutputType = {
    value: number | null
    shares: number | null
    price: number | null
    costBasis: number | null
    return: number | null
    returnPercentage: number | null
  }

  export type InvestmentSumAggregateOutputType = {
    value: number | null
    shares: number | null
    price: number | null
    costBasis: number | null
    return: number | null
    returnPercentage: number | null
  }

  export type InvestmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    symbol: string | null
    type: string | null
    value: number | null
    shares: number | null
    price: number | null
    costBasis: number | null
    return: number | null
    returnPercentage: number | null
    lastUpdated: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    symbol: string | null
    type: string | null
    value: number | null
    shares: number | null
    price: number | null
    costBasis: number | null
    return: number | null
    returnPercentage: number | null
    lastUpdated: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    symbol: number
    type: number
    value: number
    shares: number
    price: number
    costBasis: number
    return: number
    returnPercentage: number
    lastUpdated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvestmentAvgAggregateInputType = {
    value?: true
    shares?: true
    price?: true
    costBasis?: true
    return?: true
    returnPercentage?: true
  }

  export type InvestmentSumAggregateInputType = {
    value?: true
    shares?: true
    price?: true
    costBasis?: true
    return?: true
    returnPercentage?: true
  }

  export type InvestmentMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    symbol?: true
    type?: true
    value?: true
    shares?: true
    price?: true
    costBasis?: true
    return?: true
    returnPercentage?: true
    lastUpdated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    symbol?: true
    type?: true
    value?: true
    shares?: true
    price?: true
    costBasis?: true
    return?: true
    returnPercentage?: true
    lastUpdated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    symbol?: true
    type?: true
    value?: true
    shares?: true
    price?: true
    costBasis?: true
    return?: true
    returnPercentage?: true
    lastUpdated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment to aggregate.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentMaxAggregateInputType
  }

  export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment[P]>
      : GetScalarType<T[P], AggregateInvestment[P]>
  }




  export type InvestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithAggregationInput | InvestmentOrderByWithAggregationInput[]
    by: InvestmentScalarFieldEnum[] | InvestmentScalarFieldEnum
    having?: InvestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentCountAggregateInputType | true
    _avg?: InvestmentAvgAggregateInputType
    _sum?: InvestmentSumAggregateInputType
    _min?: InvestmentMinAggregateInputType
    _max?: InvestmentMaxAggregateInputType
  }

  export type InvestmentGroupByOutputType = {
    id: string
    userId: string
    name: string
    symbol: string | null
    type: string
    value: number
    shares: number
    price: number
    costBasis: number
    return: number
    returnPercentage: number
    lastUpdated: Date
    createdAt: Date
    updatedAt: Date
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    symbol?: boolean
    type?: boolean
    value?: boolean
    shares?: boolean
    price?: boolean
    costBasis?: boolean
    return?: boolean
    returnPercentage?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    history?: boolean | Investment$historyArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | InvestmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    symbol?: boolean
    type?: boolean
    value?: boolean
    shares?: boolean
    price?: boolean
    costBasis?: boolean
    return?: boolean
    returnPercentage?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    symbol?: boolean
    type?: boolean
    value?: boolean
    shares?: boolean
    price?: boolean
    costBasis?: boolean
    return?: boolean
    returnPercentage?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    symbol?: boolean
    type?: boolean
    value?: boolean
    shares?: boolean
    price?: boolean
    costBasis?: boolean
    return?: boolean
    returnPercentage?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvestmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "symbol" | "type" | "value" | "shares" | "price" | "costBasis" | "return" | "returnPercentage" | "lastUpdated" | "createdAt" | "updatedAt", ExtArgs["result"]["investment"]>
  export type InvestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | Investment$historyArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | InvestmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment"
    objects: {
      history: Prisma.$InvestmentHistoryPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      symbol: string | null
      type: string
      value: number
      shares: number
      price: number
      costBasis: number
      return: number
      returnPercentage: number
      lastUpdated: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["investment"]>
    composites: {}
  }

  type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPayload, S>

  type InvestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentCountAggregateInputType | true
    }

  export interface InvestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment'], meta: { name: 'Investment' } }
    /**
     * Find zero or one Investment that matches the filter.
     * @param {InvestmentFindUniqueArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentFindUniqueArgs>(args: SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentFindUniqueOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentFindFirstArgs>(args?: SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investment.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWithIdOnly = await prisma.investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentFindManyArgs>(args?: SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investment.
     * @param {InvestmentCreateArgs} args - Arguments to create a Investment.
     * @example
     * // Create one Investment
     * const Investment = await prisma.investment.create({
     *   data: {
     *     // ... data to create a Investment
     *   }
     * })
     * 
     */
    create<T extends InvestmentCreateArgs>(args: SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investments.
     * @param {InvestmentCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentCreateManyArgs>(args?: SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investment.
     * @param {InvestmentDeleteArgs} args - Arguments to delete one Investment.
     * @example
     * // Delete one Investment
     * const Investment = await prisma.investment.delete({
     *   where: {
     *     // ... filter to delete one Investment
     *   }
     * })
     * 
     */
    delete<T extends InvestmentDeleteArgs>(args: SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investment.
     * @param {InvestmentUpdateArgs} args - Arguments to update one Investment.
     * @example
     * // Update one Investment
     * const investment = await prisma.investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentUpdateArgs>(args: SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentUpdateManyArgs>(args: SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {InvestmentUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvestmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investment.
     * @param {InvestmentUpsertArgs} args - Arguments to update or create a Investment.
     * @example
     * // Update or create a Investment
     * const investment = await prisma.investment.upsert({
     *   create: {
     *     // ... data to create a Investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentUpsertArgs>(args: SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investment.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentCountArgs>(
      args?: Subset<T, InvestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvestmentAggregateArgs>(args: Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>

    /**
     * Group by Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupByArgs} args - Group by arguments.
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
      T extends InvestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment model
   */
  readonly fields: InvestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends Investment$historyArgs<ExtArgs> = {}>(args?: Subset<T, Investment$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Investment model
   */
  interface InvestmentFieldRefs {
    readonly id: FieldRef<"Investment", 'String'>
    readonly userId: FieldRef<"Investment", 'String'>
    readonly name: FieldRef<"Investment", 'String'>
    readonly symbol: FieldRef<"Investment", 'String'>
    readonly type: FieldRef<"Investment", 'String'>
    readonly value: FieldRef<"Investment", 'Float'>
    readonly shares: FieldRef<"Investment", 'Float'>
    readonly price: FieldRef<"Investment", 'Float'>
    readonly costBasis: FieldRef<"Investment", 'Float'>
    readonly return: FieldRef<"Investment", 'Float'>
    readonly returnPercentage: FieldRef<"Investment", 'Float'>
    readonly lastUpdated: FieldRef<"Investment", 'DateTime'>
    readonly createdAt: FieldRef<"Investment", 'DateTime'>
    readonly updatedAt: FieldRef<"Investment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investment findUnique
   */
  export type InvestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findUniqueOrThrow
   */
  export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findFirst
   */
  export type InvestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findFirstOrThrow
   */
  export type InvestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findMany
   */
  export type InvestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment create
   */
  export type InvestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Investment.
     */
    data: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
  }

  /**
   * Investment createMany
   */
  export type InvestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investment createManyAndReturn
   */
  export type InvestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment update
   */
  export type InvestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Investment.
     */
    data: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
    /**
     * Choose, which Investment to update.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment updateMany
   */
  export type InvestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
  }

  /**
   * Investment updateManyAndReturn
   */
  export type InvestmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment upsert
   */
  export type InvestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Investment to update in case it exists.
     */
    where: InvestmentWhereUniqueInput
    /**
     * In case the Investment found by the `where` argument doesn't exist, create a new Investment with this data.
     */
    create: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
    /**
     * In case the Investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
  }

  /**
   * Investment delete
   */
  export type InvestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter which Investment to delete.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment deleteMany
   */
  export type InvestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to delete.
     */
    limit?: number
  }

  /**
   * Investment.history
   */
  export type Investment$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
    where?: InvestmentHistoryWhereInput
    orderBy?: InvestmentHistoryOrderByWithRelationInput | InvestmentHistoryOrderByWithRelationInput[]
    cursor?: InvestmentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentHistoryScalarFieldEnum | InvestmentHistoryScalarFieldEnum[]
  }

  /**
   * Investment without action
   */
  export type InvestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
  }


  /**
   * Model InvestmentHistory
   */

  export type AggregateInvestmentHistory = {
    _count: InvestmentHistoryCountAggregateOutputType | null
    _avg: InvestmentHistoryAvgAggregateOutputType | null
    _sum: InvestmentHistorySumAggregateOutputType | null
    _min: InvestmentHistoryMinAggregateOutputType | null
    _max: InvestmentHistoryMaxAggregateOutputType | null
  }

  export type InvestmentHistoryAvgAggregateOutputType = {
    value: number | null
  }

  export type InvestmentHistorySumAggregateOutputType = {
    value: number | null
  }

  export type InvestmentHistoryMinAggregateOutputType = {
    id: string | null
    investmentId: string | null
    userId: string | null
    date: Date | null
    value: number | null
  }

  export type InvestmentHistoryMaxAggregateOutputType = {
    id: string | null
    investmentId: string | null
    userId: string | null
    date: Date | null
    value: number | null
  }

  export type InvestmentHistoryCountAggregateOutputType = {
    id: number
    investmentId: number
    userId: number
    date: number
    value: number
    _all: number
  }


  export type InvestmentHistoryAvgAggregateInputType = {
    value?: true
  }

  export type InvestmentHistorySumAggregateInputType = {
    value?: true
  }

  export type InvestmentHistoryMinAggregateInputType = {
    id?: true
    investmentId?: true
    userId?: true
    date?: true
    value?: true
  }

  export type InvestmentHistoryMaxAggregateInputType = {
    id?: true
    investmentId?: true
    userId?: true
    date?: true
    value?: true
  }

  export type InvestmentHistoryCountAggregateInputType = {
    id?: true
    investmentId?: true
    userId?: true
    date?: true
    value?: true
    _all?: true
  }

  export type InvestmentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentHistory to aggregate.
     */
    where?: InvestmentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentHistories to fetch.
     */
    orderBy?: InvestmentHistoryOrderByWithRelationInput | InvestmentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvestmentHistories
    **/
    _count?: true | InvestmentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentHistoryMaxAggregateInputType
  }

  export type GetInvestmentHistoryAggregateType<T extends InvestmentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestmentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestmentHistory[P]>
      : GetScalarType<T[P], AggregateInvestmentHistory[P]>
  }




  export type InvestmentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentHistoryWhereInput
    orderBy?: InvestmentHistoryOrderByWithAggregationInput | InvestmentHistoryOrderByWithAggregationInput[]
    by: InvestmentHistoryScalarFieldEnum[] | InvestmentHistoryScalarFieldEnum
    having?: InvestmentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentHistoryCountAggregateInputType | true
    _avg?: InvestmentHistoryAvgAggregateInputType
    _sum?: InvestmentHistorySumAggregateInputType
    _min?: InvestmentHistoryMinAggregateInputType
    _max?: InvestmentHistoryMaxAggregateInputType
  }

  export type InvestmentHistoryGroupByOutputType = {
    id: string
    investmentId: string
    userId: string
    date: Date
    value: number
    _count: InvestmentHistoryCountAggregateOutputType | null
    _avg: InvestmentHistoryAvgAggregateOutputType | null
    _sum: InvestmentHistorySumAggregateOutputType | null
    _min: InvestmentHistoryMinAggregateOutputType | null
    _max: InvestmentHistoryMaxAggregateOutputType | null
  }

  type GetInvestmentHistoryGroupByPayload<T extends InvestmentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investmentId?: boolean
    userId?: boolean
    date?: boolean
    value?: boolean
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentHistory"]>

  export type InvestmentHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investmentId?: boolean
    userId?: boolean
    date?: boolean
    value?: boolean
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentHistory"]>

  export type InvestmentHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investmentId?: boolean
    userId?: boolean
    date?: boolean
    value?: boolean
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentHistory"]>

  export type InvestmentHistorySelectScalar = {
    id?: boolean
    investmentId?: boolean
    userId?: boolean
    date?: boolean
    value?: boolean
  }

  export type InvestmentHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "investmentId" | "userId" | "date" | "value", ExtArgs["result"]["investmentHistory"]>
  export type InvestmentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestmentHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestmentHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvestmentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvestmentHistory"
    objects: {
      investment: Prisma.$InvestmentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      investmentId: string
      userId: string
      date: Date
      value: number
    }, ExtArgs["result"]["investmentHistory"]>
    composites: {}
  }

  type InvestmentHistoryGetPayload<S extends boolean | null | undefined | InvestmentHistoryDefaultArgs> = $Result.GetResult<Prisma.$InvestmentHistoryPayload, S>

  type InvestmentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentHistoryCountAggregateInputType | true
    }

  export interface InvestmentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvestmentHistory'], meta: { name: 'InvestmentHistory' } }
    /**
     * Find zero or one InvestmentHistory that matches the filter.
     * @param {InvestmentHistoryFindUniqueArgs} args - Arguments to find a InvestmentHistory
     * @example
     * // Get one InvestmentHistory
     * const investmentHistory = await prisma.investmentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentHistoryFindUniqueArgs>(args: SelectSubset<T, InvestmentHistoryFindUniqueArgs<ExtArgs>>): Prisma__InvestmentHistoryClient<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvestmentHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentHistoryFindUniqueOrThrowArgs} args - Arguments to find a InvestmentHistory
     * @example
     * // Get one InvestmentHistory
     * const investmentHistory = await prisma.investmentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentHistoryClient<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvestmentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentHistoryFindFirstArgs} args - Arguments to find a InvestmentHistory
     * @example
     * // Get one InvestmentHistory
     * const investmentHistory = await prisma.investmentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentHistoryFindFirstArgs>(args?: SelectSubset<T, InvestmentHistoryFindFirstArgs<ExtArgs>>): Prisma__InvestmentHistoryClient<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvestmentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentHistoryFindFirstOrThrowArgs} args - Arguments to find a InvestmentHistory
     * @example
     * // Get one InvestmentHistory
     * const investmentHistory = await prisma.investmentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentHistoryClient<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvestmentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvestmentHistories
     * const investmentHistories = await prisma.investmentHistory.findMany()
     * 
     * // Get first 10 InvestmentHistories
     * const investmentHistories = await prisma.investmentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentHistoryWithIdOnly = await prisma.investmentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentHistoryFindManyArgs>(args?: SelectSubset<T, InvestmentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvestmentHistory.
     * @param {InvestmentHistoryCreateArgs} args - Arguments to create a InvestmentHistory.
     * @example
     * // Create one InvestmentHistory
     * const InvestmentHistory = await prisma.investmentHistory.create({
     *   data: {
     *     // ... data to create a InvestmentHistory
     *   }
     * })
     * 
     */
    create<T extends InvestmentHistoryCreateArgs>(args: SelectSubset<T, InvestmentHistoryCreateArgs<ExtArgs>>): Prisma__InvestmentHistoryClient<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvestmentHistories.
     * @param {InvestmentHistoryCreateManyArgs} args - Arguments to create many InvestmentHistories.
     * @example
     * // Create many InvestmentHistories
     * const investmentHistory = await prisma.investmentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentHistoryCreateManyArgs>(args?: SelectSubset<T, InvestmentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvestmentHistories and returns the data saved in the database.
     * @param {InvestmentHistoryCreateManyAndReturnArgs} args - Arguments to create many InvestmentHistories.
     * @example
     * // Create many InvestmentHistories
     * const investmentHistory = await prisma.investmentHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvestmentHistories and only return the `id`
     * const investmentHistoryWithIdOnly = await prisma.investmentHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvestmentHistory.
     * @param {InvestmentHistoryDeleteArgs} args - Arguments to delete one InvestmentHistory.
     * @example
     * // Delete one InvestmentHistory
     * const InvestmentHistory = await prisma.investmentHistory.delete({
     *   where: {
     *     // ... filter to delete one InvestmentHistory
     *   }
     * })
     * 
     */
    delete<T extends InvestmentHistoryDeleteArgs>(args: SelectSubset<T, InvestmentHistoryDeleteArgs<ExtArgs>>): Prisma__InvestmentHistoryClient<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvestmentHistory.
     * @param {InvestmentHistoryUpdateArgs} args - Arguments to update one InvestmentHistory.
     * @example
     * // Update one InvestmentHistory
     * const investmentHistory = await prisma.investmentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentHistoryUpdateArgs>(args: SelectSubset<T, InvestmentHistoryUpdateArgs<ExtArgs>>): Prisma__InvestmentHistoryClient<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvestmentHistories.
     * @param {InvestmentHistoryDeleteManyArgs} args - Arguments to filter InvestmentHistories to delete.
     * @example
     * // Delete a few InvestmentHistories
     * const { count } = await prisma.investmentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentHistoryDeleteManyArgs>(args?: SelectSubset<T, InvestmentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvestmentHistories
     * const investmentHistory = await prisma.investmentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentHistoryUpdateManyArgs>(args: SelectSubset<T, InvestmentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentHistories and returns the data updated in the database.
     * @param {InvestmentHistoryUpdateManyAndReturnArgs} args - Arguments to update many InvestmentHistories.
     * @example
     * // Update many InvestmentHistories
     * const investmentHistory = await prisma.investmentHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvestmentHistories and only return the `id`
     * const investmentHistoryWithIdOnly = await prisma.investmentHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvestmentHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvestmentHistory.
     * @param {InvestmentHistoryUpsertArgs} args - Arguments to update or create a InvestmentHistory.
     * @example
     * // Update or create a InvestmentHistory
     * const investmentHistory = await prisma.investmentHistory.upsert({
     *   create: {
     *     // ... data to create a InvestmentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvestmentHistory we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentHistoryUpsertArgs>(args: SelectSubset<T, InvestmentHistoryUpsertArgs<ExtArgs>>): Prisma__InvestmentHistoryClient<$Result.GetResult<Prisma.$InvestmentHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvestmentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentHistoryCountArgs} args - Arguments to filter InvestmentHistories to count.
     * @example
     * // Count the number of InvestmentHistories
     * const count = await prisma.investmentHistory.count({
     *   where: {
     *     // ... the filter for the InvestmentHistories we want to count
     *   }
     * })
    **/
    count<T extends InvestmentHistoryCountArgs>(
      args?: Subset<T, InvestmentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvestmentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvestmentHistoryAggregateArgs>(args: Subset<T, InvestmentHistoryAggregateArgs>): Prisma.PrismaPromise<GetInvestmentHistoryAggregateType<T>>

    /**
     * Group by InvestmentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentHistoryGroupByArgs} args - Group by arguments.
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
      T extends InvestmentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvestmentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvestmentHistory model
   */
  readonly fields: InvestmentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvestmentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    investment<T extends InvestmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentDefaultArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InvestmentHistory model
   */
  interface InvestmentHistoryFieldRefs {
    readonly id: FieldRef<"InvestmentHistory", 'String'>
    readonly investmentId: FieldRef<"InvestmentHistory", 'String'>
    readonly userId: FieldRef<"InvestmentHistory", 'String'>
    readonly date: FieldRef<"InvestmentHistory", 'DateTime'>
    readonly value: FieldRef<"InvestmentHistory", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * InvestmentHistory findUnique
   */
  export type InvestmentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentHistory to fetch.
     */
    where: InvestmentHistoryWhereUniqueInput
  }

  /**
   * InvestmentHistory findUniqueOrThrow
   */
  export type InvestmentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentHistory to fetch.
     */
    where: InvestmentHistoryWhereUniqueInput
  }

  /**
   * InvestmentHistory findFirst
   */
  export type InvestmentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentHistory to fetch.
     */
    where?: InvestmentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentHistories to fetch.
     */
    orderBy?: InvestmentHistoryOrderByWithRelationInput | InvestmentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentHistories.
     */
    cursor?: InvestmentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentHistories.
     */
    distinct?: InvestmentHistoryScalarFieldEnum | InvestmentHistoryScalarFieldEnum[]
  }

  /**
   * InvestmentHistory findFirstOrThrow
   */
  export type InvestmentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentHistory to fetch.
     */
    where?: InvestmentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentHistories to fetch.
     */
    orderBy?: InvestmentHistoryOrderByWithRelationInput | InvestmentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentHistories.
     */
    cursor?: InvestmentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentHistories.
     */
    distinct?: InvestmentHistoryScalarFieldEnum | InvestmentHistoryScalarFieldEnum[]
  }

  /**
   * InvestmentHistory findMany
   */
  export type InvestmentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentHistories to fetch.
     */
    where?: InvestmentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentHistories to fetch.
     */
    orderBy?: InvestmentHistoryOrderByWithRelationInput | InvestmentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvestmentHistories.
     */
    cursor?: InvestmentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentHistories.
     */
    skip?: number
    distinct?: InvestmentHistoryScalarFieldEnum | InvestmentHistoryScalarFieldEnum[]
  }

  /**
   * InvestmentHistory create
   */
  export type InvestmentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a InvestmentHistory.
     */
    data: XOR<InvestmentHistoryCreateInput, InvestmentHistoryUncheckedCreateInput>
  }

  /**
   * InvestmentHistory createMany
   */
  export type InvestmentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvestmentHistories.
     */
    data: InvestmentHistoryCreateManyInput | InvestmentHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvestmentHistory createManyAndReturn
   */
  export type InvestmentHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many InvestmentHistories.
     */
    data: InvestmentHistoryCreateManyInput | InvestmentHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvestmentHistory update
   */
  export type InvestmentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a InvestmentHistory.
     */
    data: XOR<InvestmentHistoryUpdateInput, InvestmentHistoryUncheckedUpdateInput>
    /**
     * Choose, which InvestmentHistory to update.
     */
    where: InvestmentHistoryWhereUniqueInput
  }

  /**
   * InvestmentHistory updateMany
   */
  export type InvestmentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvestmentHistories.
     */
    data: XOR<InvestmentHistoryUpdateManyMutationInput, InvestmentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentHistories to update
     */
    where?: InvestmentHistoryWhereInput
    /**
     * Limit how many InvestmentHistories to update.
     */
    limit?: number
  }

  /**
   * InvestmentHistory updateManyAndReturn
   */
  export type InvestmentHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * The data used to update InvestmentHistories.
     */
    data: XOR<InvestmentHistoryUpdateManyMutationInput, InvestmentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentHistories to update
     */
    where?: InvestmentHistoryWhereInput
    /**
     * Limit how many InvestmentHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvestmentHistory upsert
   */
  export type InvestmentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the InvestmentHistory to update in case it exists.
     */
    where: InvestmentHistoryWhereUniqueInput
    /**
     * In case the InvestmentHistory found by the `where` argument doesn't exist, create a new InvestmentHistory with this data.
     */
    create: XOR<InvestmentHistoryCreateInput, InvestmentHistoryUncheckedCreateInput>
    /**
     * In case the InvestmentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentHistoryUpdateInput, InvestmentHistoryUncheckedUpdateInput>
  }

  /**
   * InvestmentHistory delete
   */
  export type InvestmentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
    /**
     * Filter which InvestmentHistory to delete.
     */
    where: InvestmentHistoryWhereUniqueInput
  }

  /**
   * InvestmentHistory deleteMany
   */
  export type InvestmentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentHistories to delete
     */
    where?: InvestmentHistoryWhereInput
    /**
     * Limit how many InvestmentHistories to delete.
     */
    limit?: number
  }

  /**
   * InvestmentHistory without action
   */
  export type InvestmentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentHistory
     */
    select?: InvestmentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentHistory
     */
    omit?: InvestmentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Debt
   */

  export type AggregateDebt = {
    _count: DebtCountAggregateOutputType | null
    _avg: DebtAvgAggregateOutputType | null
    _sum: DebtSumAggregateOutputType | null
    _min: DebtMinAggregateOutputType | null
    _max: DebtMaxAggregateOutputType | null
  }

  export type DebtAvgAggregateOutputType = {
    amount: number | null
    remainingBalance: number | null
    interestRate: number | null
    monthlyPayment: number | null
    payoffProgress: number | null
  }

  export type DebtSumAggregateOutputType = {
    amount: number | null
    remainingBalance: number | null
    interestRate: number | null
    monthlyPayment: number | null
    payoffProgress: number | null
  }

  export type DebtMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: string | null
    amount: number | null
    remainingBalance: number | null
    interestRate: number | null
    monthlyPayment: number | null
    dueDate: string | null
    nextPaymentDate: Date | null
    startDate: Date | null
    endDate: Date | null
    payoffProgress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebtMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: string | null
    amount: number | null
    remainingBalance: number | null
    interestRate: number | null
    monthlyPayment: number | null
    dueDate: string | null
    nextPaymentDate: Date | null
    startDate: Date | null
    endDate: Date | null
    payoffProgress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebtCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    type: number
    amount: number
    remainingBalance: number
    interestRate: number
    monthlyPayment: number
    dueDate: number
    nextPaymentDate: number
    startDate: number
    endDate: number
    payoffProgress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DebtAvgAggregateInputType = {
    amount?: true
    remainingBalance?: true
    interestRate?: true
    monthlyPayment?: true
    payoffProgress?: true
  }

  export type DebtSumAggregateInputType = {
    amount?: true
    remainingBalance?: true
    interestRate?: true
    monthlyPayment?: true
    payoffProgress?: true
  }

  export type DebtMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    amount?: true
    remainingBalance?: true
    interestRate?: true
    monthlyPayment?: true
    dueDate?: true
    nextPaymentDate?: true
    startDate?: true
    endDate?: true
    payoffProgress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebtMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    amount?: true
    remainingBalance?: true
    interestRate?: true
    monthlyPayment?: true
    dueDate?: true
    nextPaymentDate?: true
    startDate?: true
    endDate?: true
    payoffProgress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebtCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    amount?: true
    remainingBalance?: true
    interestRate?: true
    monthlyPayment?: true
    dueDate?: true
    nextPaymentDate?: true
    startDate?: true
    endDate?: true
    payoffProgress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DebtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Debt to aggregate.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Debts
    **/
    _count?: true | DebtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DebtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DebtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebtMaxAggregateInputType
  }

  export type GetDebtAggregateType<T extends DebtAggregateArgs> = {
        [P in keyof T & keyof AggregateDebt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebt[P]>
      : GetScalarType<T[P], AggregateDebt[P]>
  }




  export type DebtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtWhereInput
    orderBy?: DebtOrderByWithAggregationInput | DebtOrderByWithAggregationInput[]
    by: DebtScalarFieldEnum[] | DebtScalarFieldEnum
    having?: DebtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebtCountAggregateInputType | true
    _avg?: DebtAvgAggregateInputType
    _sum?: DebtSumAggregateInputType
    _min?: DebtMinAggregateInputType
    _max?: DebtMaxAggregateInputType
  }

  export type DebtGroupByOutputType = {
    id: string
    userId: string
    name: string
    type: string
    amount: number
    remainingBalance: number
    interestRate: number
    monthlyPayment: number
    dueDate: string
    nextPaymentDate: Date
    startDate: Date
    endDate: Date
    payoffProgress: number
    createdAt: Date
    updatedAt: Date
    _count: DebtCountAggregateOutputType | null
    _avg: DebtAvgAggregateOutputType | null
    _sum: DebtSumAggregateOutputType | null
    _min: DebtMinAggregateOutputType | null
    _max: DebtMaxAggregateOutputType | null
  }

  type GetDebtGroupByPayload<T extends DebtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebtGroupByOutputType[P]>
            : GetScalarType<T[P], DebtGroupByOutputType[P]>
        }
      >
    >


  export type DebtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    remainingBalance?: boolean
    interestRate?: boolean
    monthlyPayment?: boolean
    dueDate?: boolean
    nextPaymentDate?: boolean
    startDate?: boolean
    endDate?: boolean
    payoffProgress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debt"]>

  export type DebtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    remainingBalance?: boolean
    interestRate?: boolean
    monthlyPayment?: boolean
    dueDate?: boolean
    nextPaymentDate?: boolean
    startDate?: boolean
    endDate?: boolean
    payoffProgress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debt"]>

  export type DebtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    remainingBalance?: boolean
    interestRate?: boolean
    monthlyPayment?: boolean
    dueDate?: boolean
    nextPaymentDate?: boolean
    startDate?: boolean
    endDate?: boolean
    payoffProgress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debt"]>

  export type DebtSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    remainingBalance?: boolean
    interestRate?: boolean
    monthlyPayment?: boolean
    dueDate?: boolean
    nextPaymentDate?: boolean
    startDate?: boolean
    endDate?: boolean
    payoffProgress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DebtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "type" | "amount" | "remainingBalance" | "interestRate" | "monthlyPayment" | "dueDate" | "nextPaymentDate" | "startDate" | "endDate" | "payoffProgress" | "createdAt" | "updatedAt", ExtArgs["result"]["debt"]>
  export type DebtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DebtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DebtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DebtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Debt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      type: string
      amount: number
      remainingBalance: number
      interestRate: number
      monthlyPayment: number
      dueDate: string
      nextPaymentDate: Date
      startDate: Date
      endDate: Date
      payoffProgress: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["debt"]>
    composites: {}
  }

  type DebtGetPayload<S extends boolean | null | undefined | DebtDefaultArgs> = $Result.GetResult<Prisma.$DebtPayload, S>

  type DebtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DebtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DebtCountAggregateInputType | true
    }

  export interface DebtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Debt'], meta: { name: 'Debt' } }
    /**
     * Find zero or one Debt that matches the filter.
     * @param {DebtFindUniqueArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DebtFindUniqueArgs>(args: SelectSubset<T, DebtFindUniqueArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Debt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DebtFindUniqueOrThrowArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DebtFindUniqueOrThrowArgs>(args: SelectSubset<T, DebtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Debt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtFindFirstArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DebtFindFirstArgs>(args?: SelectSubset<T, DebtFindFirstArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Debt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtFindFirstOrThrowArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DebtFindFirstOrThrowArgs>(args?: SelectSubset<T, DebtFindFirstOrThrowArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Debts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Debts
     * const debts = await prisma.debt.findMany()
     * 
     * // Get first 10 Debts
     * const debts = await prisma.debt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debtWithIdOnly = await prisma.debt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DebtFindManyArgs>(args?: SelectSubset<T, DebtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Debt.
     * @param {DebtCreateArgs} args - Arguments to create a Debt.
     * @example
     * // Create one Debt
     * const Debt = await prisma.debt.create({
     *   data: {
     *     // ... data to create a Debt
     *   }
     * })
     * 
     */
    create<T extends DebtCreateArgs>(args: SelectSubset<T, DebtCreateArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Debts.
     * @param {DebtCreateManyArgs} args - Arguments to create many Debts.
     * @example
     * // Create many Debts
     * const debt = await prisma.debt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DebtCreateManyArgs>(args?: SelectSubset<T, DebtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Debts and returns the data saved in the database.
     * @param {DebtCreateManyAndReturnArgs} args - Arguments to create many Debts.
     * @example
     * // Create many Debts
     * const debt = await prisma.debt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Debts and only return the `id`
     * const debtWithIdOnly = await prisma.debt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DebtCreateManyAndReturnArgs>(args?: SelectSubset<T, DebtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Debt.
     * @param {DebtDeleteArgs} args - Arguments to delete one Debt.
     * @example
     * // Delete one Debt
     * const Debt = await prisma.debt.delete({
     *   where: {
     *     // ... filter to delete one Debt
     *   }
     * })
     * 
     */
    delete<T extends DebtDeleteArgs>(args: SelectSubset<T, DebtDeleteArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Debt.
     * @param {DebtUpdateArgs} args - Arguments to update one Debt.
     * @example
     * // Update one Debt
     * const debt = await prisma.debt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DebtUpdateArgs>(args: SelectSubset<T, DebtUpdateArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Debts.
     * @param {DebtDeleteManyArgs} args - Arguments to filter Debts to delete.
     * @example
     * // Delete a few Debts
     * const { count } = await prisma.debt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DebtDeleteManyArgs>(args?: SelectSubset<T, DebtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Debts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Debts
     * const debt = await prisma.debt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DebtUpdateManyArgs>(args: SelectSubset<T, DebtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Debts and returns the data updated in the database.
     * @param {DebtUpdateManyAndReturnArgs} args - Arguments to update many Debts.
     * @example
     * // Update many Debts
     * const debt = await prisma.debt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Debts and only return the `id`
     * const debtWithIdOnly = await prisma.debt.updateManyAndReturn({
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
    updateManyAndReturn<T extends DebtUpdateManyAndReturnArgs>(args: SelectSubset<T, DebtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Debt.
     * @param {DebtUpsertArgs} args - Arguments to update or create a Debt.
     * @example
     * // Update or create a Debt
     * const debt = await prisma.debt.upsert({
     *   create: {
     *     // ... data to create a Debt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Debt we want to update
     *   }
     * })
     */
    upsert<T extends DebtUpsertArgs>(args: SelectSubset<T, DebtUpsertArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Debts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtCountArgs} args - Arguments to filter Debts to count.
     * @example
     * // Count the number of Debts
     * const count = await prisma.debt.count({
     *   where: {
     *     // ... the filter for the Debts we want to count
     *   }
     * })
    **/
    count<T extends DebtCountArgs>(
      args?: Subset<T, DebtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Debt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DebtAggregateArgs>(args: Subset<T, DebtAggregateArgs>): Prisma.PrismaPromise<GetDebtAggregateType<T>>

    /**
     * Group by Debt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtGroupByArgs} args - Group by arguments.
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
      T extends DebtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebtGroupByArgs['orderBy'] }
        : { orderBy?: DebtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DebtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Debt model
   */
  readonly fields: DebtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Debt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Debt model
   */
  interface DebtFieldRefs {
    readonly id: FieldRef<"Debt", 'String'>
    readonly userId: FieldRef<"Debt", 'String'>
    readonly name: FieldRef<"Debt", 'String'>
    readonly type: FieldRef<"Debt", 'String'>
    readonly amount: FieldRef<"Debt", 'Float'>
    readonly remainingBalance: FieldRef<"Debt", 'Float'>
    readonly interestRate: FieldRef<"Debt", 'Float'>
    readonly monthlyPayment: FieldRef<"Debt", 'Float'>
    readonly dueDate: FieldRef<"Debt", 'String'>
    readonly nextPaymentDate: FieldRef<"Debt", 'DateTime'>
    readonly startDate: FieldRef<"Debt", 'DateTime'>
    readonly endDate: FieldRef<"Debt", 'DateTime'>
    readonly payoffProgress: FieldRef<"Debt", 'Float'>
    readonly createdAt: FieldRef<"Debt", 'DateTime'>
    readonly updatedAt: FieldRef<"Debt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Debt findUnique
   */
  export type DebtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt findUniqueOrThrow
   */
  export type DebtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt findFirst
   */
  export type DebtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Debts.
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Debts.
     */
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * Debt findFirstOrThrow
   */
  export type DebtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Debts.
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Debts.
     */
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * Debt findMany
   */
  export type DebtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debts to fetch.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Debts.
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * Debt create
   */
  export type DebtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * The data needed to create a Debt.
     */
    data: XOR<DebtCreateInput, DebtUncheckedCreateInput>
  }

  /**
   * Debt createMany
   */
  export type DebtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Debts.
     */
    data: DebtCreateManyInput | DebtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Debt createManyAndReturn
   */
  export type DebtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * The data used to create many Debts.
     */
    data: DebtCreateManyInput | DebtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Debt update
   */
  export type DebtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * The data needed to update a Debt.
     */
    data: XOR<DebtUpdateInput, DebtUncheckedUpdateInput>
    /**
     * Choose, which Debt to update.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt updateMany
   */
  export type DebtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Debts.
     */
    data: XOR<DebtUpdateManyMutationInput, DebtUncheckedUpdateManyInput>
    /**
     * Filter which Debts to update
     */
    where?: DebtWhereInput
    /**
     * Limit how many Debts to update.
     */
    limit?: number
  }

  /**
   * Debt updateManyAndReturn
   */
  export type DebtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * The data used to update Debts.
     */
    data: XOR<DebtUpdateManyMutationInput, DebtUncheckedUpdateManyInput>
    /**
     * Filter which Debts to update
     */
    where?: DebtWhereInput
    /**
     * Limit how many Debts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Debt upsert
   */
  export type DebtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * The filter to search for the Debt to update in case it exists.
     */
    where: DebtWhereUniqueInput
    /**
     * In case the Debt found by the `where` argument doesn't exist, create a new Debt with this data.
     */
    create: XOR<DebtCreateInput, DebtUncheckedCreateInput>
    /**
     * In case the Debt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebtUpdateInput, DebtUncheckedUpdateInput>
  }

  /**
   * Debt delete
   */
  export type DebtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter which Debt to delete.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt deleteMany
   */
  export type DebtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Debts to delete
     */
    where?: DebtWhereInput
    /**
     * Limit how many Debts to delete.
     */
    limit?: number
  }

  /**
   * Debt without action
   */
  export type DebtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    targetAmount: number | null
    currentAmount: number | null
  }

  export type GoalSumAggregateOutputType = {
    targetAmount: number | null
    currentAmount: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    targetAmount: number | null
    currentAmount: number | null
    targetDate: Date | null
    category: string | null
    priority: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    targetAmount: number | null
    currentAmount: number | null
    targetDate: Date | null
    category: string | null
    priority: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    name: number
    description: number
    targetAmount: number
    currentAmount: number
    targetDate: number
    category: number
    priority: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    targetAmount?: true
    currentAmount?: true
  }

  export type GoalSumAggregateInputType = {
    targetAmount?: true
    currentAmount?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    targetAmount?: true
    currentAmount?: true
    targetDate?: true
    category?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    targetAmount?: true
    currentAmount?: true
    targetDate?: true
    category?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    targetAmount?: true
    currentAmount?: true
    targetDate?: true
    category?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    name: string
    description: string
    targetAmount: number
    currentAmount: number
    targetDate: Date
    category: string | null
    priority: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    targetDate?: boolean
    category?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contributions?: boolean | Goal$contributionsArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    targetDate?: boolean
    category?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    targetDate?: boolean
    category?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    targetDate?: boolean
    category?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "targetAmount" | "currentAmount" | "targetDate" | "category" | "priority" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contributions?: boolean | Goal$contributionsArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contributions: Prisma.$GoalContributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      targetAmount: number
      currentAmount: number
      targetDate: Date
      category: string | null
      priority: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contributions<T extends Goal$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, Goal$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly name: FieldRef<"Goal", 'String'>
    readonly description: FieldRef<"Goal", 'String'>
    readonly targetAmount: FieldRef<"Goal", 'Float'>
    readonly currentAmount: FieldRef<"Goal", 'Float'>
    readonly targetDate: FieldRef<"Goal", 'DateTime'>
    readonly category: FieldRef<"Goal", 'String'>
    readonly priority: FieldRef<"Goal", 'String'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
    readonly userId: FieldRef<"Goal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal.contributions
   */
  export type Goal$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
    where?: GoalContributionWhereInput
    orderBy?: GoalContributionOrderByWithRelationInput | GoalContributionOrderByWithRelationInput[]
    cursor?: GoalContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalContributionScalarFieldEnum | GoalContributionScalarFieldEnum[]
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model GoalContribution
   */

  export type AggregateGoalContribution = {
    _count: GoalContributionCountAggregateOutputType | null
    _avg: GoalContributionAvgAggregateOutputType | null
    _sum: GoalContributionSumAggregateOutputType | null
    _min: GoalContributionMinAggregateOutputType | null
    _max: GoalContributionMaxAggregateOutputType | null
  }

  export type GoalContributionAvgAggregateOutputType = {
    amount: number | null
  }

  export type GoalContributionSumAggregateOutputType = {
    amount: number | null
  }

  export type GoalContributionMinAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    goalId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalContributionMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    goalId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalContributionCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    goalId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalContributionAvgAggregateInputType = {
    amount?: true
  }

  export type GoalContributionSumAggregateInputType = {
    amount?: true
  }

  export type GoalContributionMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    goalId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalContributionMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    goalId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalContributionCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    goalId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalContributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoalContribution to aggregate.
     */
    where?: GoalContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalContributions to fetch.
     */
    orderBy?: GoalContributionOrderByWithRelationInput | GoalContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalContributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalContributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoalContributions
    **/
    _count?: true | GoalContributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalContributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalContributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalContributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalContributionMaxAggregateInputType
  }

  export type GetGoalContributionAggregateType<T extends GoalContributionAggregateArgs> = {
        [P in keyof T & keyof AggregateGoalContribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoalContribution[P]>
      : GetScalarType<T[P], AggregateGoalContribution[P]>
  }




  export type GoalContributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalContributionWhereInput
    orderBy?: GoalContributionOrderByWithAggregationInput | GoalContributionOrderByWithAggregationInput[]
    by: GoalContributionScalarFieldEnum[] | GoalContributionScalarFieldEnum
    having?: GoalContributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalContributionCountAggregateInputType | true
    _avg?: GoalContributionAvgAggregateInputType
    _sum?: GoalContributionSumAggregateInputType
    _min?: GoalContributionMinAggregateInputType
    _max?: GoalContributionMaxAggregateInputType
  }

  export type GoalContributionGroupByOutputType = {
    id: string
    amount: number
    date: Date
    goalId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: GoalContributionCountAggregateOutputType | null
    _avg: GoalContributionAvgAggregateOutputType | null
    _sum: GoalContributionSumAggregateOutputType | null
    _min: GoalContributionMinAggregateOutputType | null
    _max: GoalContributionMaxAggregateOutputType | null
  }

  type GetGoalContributionGroupByPayload<T extends GoalContributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalContributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalContributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalContributionGroupByOutputType[P]>
            : GetScalarType<T[P], GoalContributionGroupByOutputType[P]>
        }
      >
    >


  export type GoalContributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    goalId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goalContribution"]>

  export type GoalContributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    goalId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goalContribution"]>

  export type GoalContributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    goalId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goalContribution"]>

  export type GoalContributionSelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    goalId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoalContributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "date" | "goalId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["goalContribution"]>
  export type GoalContributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalContributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalContributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalContributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoalContribution"
    objects: {
      goal: Prisma.$GoalPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      date: Date
      goalId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goalContribution"]>
    composites: {}
  }

  type GoalContributionGetPayload<S extends boolean | null | undefined | GoalContributionDefaultArgs> = $Result.GetResult<Prisma.$GoalContributionPayload, S>

  type GoalContributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalContributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalContributionCountAggregateInputType | true
    }

  export interface GoalContributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoalContribution'], meta: { name: 'GoalContribution' } }
    /**
     * Find zero or one GoalContribution that matches the filter.
     * @param {GoalContributionFindUniqueArgs} args - Arguments to find a GoalContribution
     * @example
     * // Get one GoalContribution
     * const goalContribution = await prisma.goalContribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalContributionFindUniqueArgs>(args: SelectSubset<T, GoalContributionFindUniqueArgs<ExtArgs>>): Prisma__GoalContributionClient<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoalContribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalContributionFindUniqueOrThrowArgs} args - Arguments to find a GoalContribution
     * @example
     * // Get one GoalContribution
     * const goalContribution = await prisma.goalContribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalContributionFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalContributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalContributionClient<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoalContribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalContributionFindFirstArgs} args - Arguments to find a GoalContribution
     * @example
     * // Get one GoalContribution
     * const goalContribution = await prisma.goalContribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalContributionFindFirstArgs>(args?: SelectSubset<T, GoalContributionFindFirstArgs<ExtArgs>>): Prisma__GoalContributionClient<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoalContribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalContributionFindFirstOrThrowArgs} args - Arguments to find a GoalContribution
     * @example
     * // Get one GoalContribution
     * const goalContribution = await prisma.goalContribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalContributionFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalContributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalContributionClient<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoalContributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalContributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoalContributions
     * const goalContributions = await prisma.goalContribution.findMany()
     * 
     * // Get first 10 GoalContributions
     * const goalContributions = await prisma.goalContribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalContributionWithIdOnly = await prisma.goalContribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalContributionFindManyArgs>(args?: SelectSubset<T, GoalContributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoalContribution.
     * @param {GoalContributionCreateArgs} args - Arguments to create a GoalContribution.
     * @example
     * // Create one GoalContribution
     * const GoalContribution = await prisma.goalContribution.create({
     *   data: {
     *     // ... data to create a GoalContribution
     *   }
     * })
     * 
     */
    create<T extends GoalContributionCreateArgs>(args: SelectSubset<T, GoalContributionCreateArgs<ExtArgs>>): Prisma__GoalContributionClient<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoalContributions.
     * @param {GoalContributionCreateManyArgs} args - Arguments to create many GoalContributions.
     * @example
     * // Create many GoalContributions
     * const goalContribution = await prisma.goalContribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalContributionCreateManyArgs>(args?: SelectSubset<T, GoalContributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoalContributions and returns the data saved in the database.
     * @param {GoalContributionCreateManyAndReturnArgs} args - Arguments to create many GoalContributions.
     * @example
     * // Create many GoalContributions
     * const goalContribution = await prisma.goalContribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoalContributions and only return the `id`
     * const goalContributionWithIdOnly = await prisma.goalContribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalContributionCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalContributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoalContribution.
     * @param {GoalContributionDeleteArgs} args - Arguments to delete one GoalContribution.
     * @example
     * // Delete one GoalContribution
     * const GoalContribution = await prisma.goalContribution.delete({
     *   where: {
     *     // ... filter to delete one GoalContribution
     *   }
     * })
     * 
     */
    delete<T extends GoalContributionDeleteArgs>(args: SelectSubset<T, GoalContributionDeleteArgs<ExtArgs>>): Prisma__GoalContributionClient<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoalContribution.
     * @param {GoalContributionUpdateArgs} args - Arguments to update one GoalContribution.
     * @example
     * // Update one GoalContribution
     * const goalContribution = await prisma.goalContribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalContributionUpdateArgs>(args: SelectSubset<T, GoalContributionUpdateArgs<ExtArgs>>): Prisma__GoalContributionClient<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoalContributions.
     * @param {GoalContributionDeleteManyArgs} args - Arguments to filter GoalContributions to delete.
     * @example
     * // Delete a few GoalContributions
     * const { count } = await prisma.goalContribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalContributionDeleteManyArgs>(args?: SelectSubset<T, GoalContributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoalContributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalContributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoalContributions
     * const goalContribution = await prisma.goalContribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalContributionUpdateManyArgs>(args: SelectSubset<T, GoalContributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoalContributions and returns the data updated in the database.
     * @param {GoalContributionUpdateManyAndReturnArgs} args - Arguments to update many GoalContributions.
     * @example
     * // Update many GoalContributions
     * const goalContribution = await prisma.goalContribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoalContributions and only return the `id`
     * const goalContributionWithIdOnly = await prisma.goalContribution.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoalContributionUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalContributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoalContribution.
     * @param {GoalContributionUpsertArgs} args - Arguments to update or create a GoalContribution.
     * @example
     * // Update or create a GoalContribution
     * const goalContribution = await prisma.goalContribution.upsert({
     *   create: {
     *     // ... data to create a GoalContribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoalContribution we want to update
     *   }
     * })
     */
    upsert<T extends GoalContributionUpsertArgs>(args: SelectSubset<T, GoalContributionUpsertArgs<ExtArgs>>): Prisma__GoalContributionClient<$Result.GetResult<Prisma.$GoalContributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoalContributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalContributionCountArgs} args - Arguments to filter GoalContributions to count.
     * @example
     * // Count the number of GoalContributions
     * const count = await prisma.goalContribution.count({
     *   where: {
     *     // ... the filter for the GoalContributions we want to count
     *   }
     * })
    **/
    count<T extends GoalContributionCountArgs>(
      args?: Subset<T, GoalContributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalContributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoalContribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalContributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalContributionAggregateArgs>(args: Subset<T, GoalContributionAggregateArgs>): Prisma.PrismaPromise<GetGoalContributionAggregateType<T>>

    /**
     * Group by GoalContribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalContributionGroupByArgs} args - Group by arguments.
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
      T extends GoalContributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalContributionGroupByArgs['orderBy'] }
        : { orderBy?: GoalContributionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalContributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalContributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoalContribution model
   */
  readonly fields: GoalContributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoalContribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalContributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goal<T extends GoalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GoalDefaultArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GoalContribution model
   */
  interface GoalContributionFieldRefs {
    readonly id: FieldRef<"GoalContribution", 'String'>
    readonly amount: FieldRef<"GoalContribution", 'Float'>
    readonly date: FieldRef<"GoalContribution", 'DateTime'>
    readonly goalId: FieldRef<"GoalContribution", 'String'>
    readonly userId: FieldRef<"GoalContribution", 'String'>
    readonly createdAt: FieldRef<"GoalContribution", 'DateTime'>
    readonly updatedAt: FieldRef<"GoalContribution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoalContribution findUnique
   */
  export type GoalContributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
    /**
     * Filter, which GoalContribution to fetch.
     */
    where: GoalContributionWhereUniqueInput
  }

  /**
   * GoalContribution findUniqueOrThrow
   */
  export type GoalContributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
    /**
     * Filter, which GoalContribution to fetch.
     */
    where: GoalContributionWhereUniqueInput
  }

  /**
   * GoalContribution findFirst
   */
  export type GoalContributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
    /**
     * Filter, which GoalContribution to fetch.
     */
    where?: GoalContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalContributions to fetch.
     */
    orderBy?: GoalContributionOrderByWithRelationInput | GoalContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoalContributions.
     */
    cursor?: GoalContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalContributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalContributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoalContributions.
     */
    distinct?: GoalContributionScalarFieldEnum | GoalContributionScalarFieldEnum[]
  }

  /**
   * GoalContribution findFirstOrThrow
   */
  export type GoalContributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
    /**
     * Filter, which GoalContribution to fetch.
     */
    where?: GoalContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalContributions to fetch.
     */
    orderBy?: GoalContributionOrderByWithRelationInput | GoalContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoalContributions.
     */
    cursor?: GoalContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalContributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalContributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoalContributions.
     */
    distinct?: GoalContributionScalarFieldEnum | GoalContributionScalarFieldEnum[]
  }

  /**
   * GoalContribution findMany
   */
  export type GoalContributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
    /**
     * Filter, which GoalContributions to fetch.
     */
    where?: GoalContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalContributions to fetch.
     */
    orderBy?: GoalContributionOrderByWithRelationInput | GoalContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoalContributions.
     */
    cursor?: GoalContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalContributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalContributions.
     */
    skip?: number
    distinct?: GoalContributionScalarFieldEnum | GoalContributionScalarFieldEnum[]
  }

  /**
   * GoalContribution create
   */
  export type GoalContributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
    /**
     * The data needed to create a GoalContribution.
     */
    data: XOR<GoalContributionCreateInput, GoalContributionUncheckedCreateInput>
  }

  /**
   * GoalContribution createMany
   */
  export type GoalContributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoalContributions.
     */
    data: GoalContributionCreateManyInput | GoalContributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoalContribution createManyAndReturn
   */
  export type GoalContributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * The data used to create many GoalContributions.
     */
    data: GoalContributionCreateManyInput | GoalContributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoalContribution update
   */
  export type GoalContributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
    /**
     * The data needed to update a GoalContribution.
     */
    data: XOR<GoalContributionUpdateInput, GoalContributionUncheckedUpdateInput>
    /**
     * Choose, which GoalContribution to update.
     */
    where: GoalContributionWhereUniqueInput
  }

  /**
   * GoalContribution updateMany
   */
  export type GoalContributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoalContributions.
     */
    data: XOR<GoalContributionUpdateManyMutationInput, GoalContributionUncheckedUpdateManyInput>
    /**
     * Filter which GoalContributions to update
     */
    where?: GoalContributionWhereInput
    /**
     * Limit how many GoalContributions to update.
     */
    limit?: number
  }

  /**
   * GoalContribution updateManyAndReturn
   */
  export type GoalContributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * The data used to update GoalContributions.
     */
    data: XOR<GoalContributionUpdateManyMutationInput, GoalContributionUncheckedUpdateManyInput>
    /**
     * Filter which GoalContributions to update
     */
    where?: GoalContributionWhereInput
    /**
     * Limit how many GoalContributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoalContribution upsert
   */
  export type GoalContributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
    /**
     * The filter to search for the GoalContribution to update in case it exists.
     */
    where: GoalContributionWhereUniqueInput
    /**
     * In case the GoalContribution found by the `where` argument doesn't exist, create a new GoalContribution with this data.
     */
    create: XOR<GoalContributionCreateInput, GoalContributionUncheckedCreateInput>
    /**
     * In case the GoalContribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalContributionUpdateInput, GoalContributionUncheckedUpdateInput>
  }

  /**
   * GoalContribution delete
   */
  export type GoalContributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
    /**
     * Filter which GoalContribution to delete.
     */
    where: GoalContributionWhereUniqueInput
  }

  /**
   * GoalContribution deleteMany
   */
  export type GoalContributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoalContributions to delete
     */
    where?: GoalContributionWhereInput
    /**
     * Limit how many GoalContributions to delete.
     */
    limit?: number
  }

  /**
   * GoalContribution without action
   */
  export type GoalContributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalContribution
     */
    select?: GoalContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalContribution
     */
    omit?: GoalContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalContributionInclude<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    amount: number | null
  }

  export type BudgetSumAggregateOutputType = {
    amount: number | null
  }

  export type BudgetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    amount: number | null
    isIncome: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    amount: number | null
    isIncome: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    amount: number
    isIncome: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    amount?: true
  }

  export type BudgetSumAggregateInputType = {
    amount?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    amount?: true
    isIncome?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    amount?: true
    isIncome?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    amount?: true
    isIncome?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: string
    userId: string
    category: string
    amount: number
    isIncome: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    amount?: boolean
    isIncome?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    amount?: boolean
    isIncome?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    amount?: boolean
    isIncome?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    amount?: boolean
    isIncome?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "category" | "amount" | "isIncome" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["budget"]>
  export type BudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BudgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BudgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      category: string
      amount: number
      isIncome: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetFindUniqueArgs>(args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetFindFirstArgs>(args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetFindManyArgs>(args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends BudgetCreateArgs>(args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCreateManyArgs>(args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {BudgetCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends BudgetDeleteArgs>(args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetUpdateArgs>(args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetDeleteManyArgs>(args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetUpdateManyArgs>(args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets and returns the data updated in the database.
     * @param {BudgetUpdateManyAndReturnArgs} args - Arguments to update many Budgets.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.updateManyAndReturn({
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
    updateManyAndReturn<T extends BudgetUpdateManyAndReturnArgs>(args: SelectSubset<T, BudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends BudgetUpsertArgs>(args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
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
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Budget model
   */
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'String'>
    readonly userId: FieldRef<"Budget", 'String'>
    readonly category: FieldRef<"Budget", 'String'>
    readonly amount: FieldRef<"Budget", 'Float'>
    readonly isIncome: FieldRef<"Budget", 'Boolean'>
    readonly isActive: FieldRef<"Budget", 'Boolean'>
    readonly createdAt: FieldRef<"Budget", 'DateTime'>
    readonly updatedAt: FieldRef<"Budget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget createManyAndReturn
   */
  export type BudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
  }

  /**
   * Budget updateManyAndReturn
   */
  export type BudgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to delete.
     */
    limit?: number
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    description: string | null
    category: string | null
    date: Date | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    description: string | null
    category: string | null
    date: Date | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    description: number
    category: number
    date: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    description?: true
    category?: true
    date?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    description?: true
    category?: true
    date?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    description?: true
    category?: true
    date?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    amount: number
    description: string
    category: string
    date: Date
    type: string
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    date?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    date?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    date?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    date?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "description" | "category" | "date" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      description: string
      category: string
      date: Date
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly category: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model LinkedAccount
   */

  export type AggregateLinkedAccount = {
    _count: LinkedAccountCountAggregateOutputType | null
    _min: LinkedAccountMinAggregateOutputType | null
    _max: LinkedAccountMaxAggregateOutputType | null
  }

  export type LinkedAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: string | null
    status: string | null
    lastSync: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkedAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: string | null
    status: string | null
    lastSync: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkedAccountCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    type: number
    status: number
    lastSync: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LinkedAccountMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    status?: true
    lastSync?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkedAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    status?: true
    lastSync?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkedAccountCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    status?: true
    lastSync?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LinkedAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedAccount to aggregate.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedAccounts
    **/
    _count?: true | LinkedAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedAccountMaxAggregateInputType
  }

  export type GetLinkedAccountAggregateType<T extends LinkedAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedAccount[P]>
      : GetScalarType<T[P], AggregateLinkedAccount[P]>
  }




  export type LinkedAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedAccountWhereInput
    orderBy?: LinkedAccountOrderByWithAggregationInput | LinkedAccountOrderByWithAggregationInput[]
    by: LinkedAccountScalarFieldEnum[] | LinkedAccountScalarFieldEnum
    having?: LinkedAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedAccountCountAggregateInputType | true
    _min?: LinkedAccountMinAggregateInputType
    _max?: LinkedAccountMaxAggregateInputType
  }

  export type LinkedAccountGroupByOutputType = {
    id: string
    userId: string
    name: string
    type: string
    status: string
    lastSync: Date
    createdAt: Date
    updatedAt: Date
    _count: LinkedAccountCountAggregateOutputType | null
    _min: LinkedAccountMinAggregateOutputType | null
    _max: LinkedAccountMaxAggregateOutputType | null
  }

  type GetLinkedAccountGroupByPayload<T extends LinkedAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedAccountGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedAccountGroupByOutputType[P]>
        }
      >
    >


  export type LinkedAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    lastSync?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedAccount"]>

  export type LinkedAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    lastSync?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedAccount"]>

  export type LinkedAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    lastSync?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedAccount"]>

  export type LinkedAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    lastSync?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LinkedAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "type" | "status" | "lastSync" | "createdAt" | "updatedAt", ExtArgs["result"]["linkedAccount"]>
  export type LinkedAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkedAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkedAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LinkedAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      type: string
      status: string
      lastSync: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["linkedAccount"]>
    composites: {}
  }

  type LinkedAccountGetPayload<S extends boolean | null | undefined | LinkedAccountDefaultArgs> = $Result.GetResult<Prisma.$LinkedAccountPayload, S>

  type LinkedAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkedAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkedAccountCountAggregateInputType | true
    }

  export interface LinkedAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedAccount'], meta: { name: 'LinkedAccount' } }
    /**
     * Find zero or one LinkedAccount that matches the filter.
     * @param {LinkedAccountFindUniqueArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkedAccountFindUniqueArgs>(args: SelectSubset<T, LinkedAccountFindUniqueArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkedAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkedAccountFindUniqueOrThrowArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkedAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkedAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountFindFirstArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkedAccountFindFirstArgs>(args?: SelectSubset<T, LinkedAccountFindFirstArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountFindFirstOrThrowArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkedAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkedAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkedAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccount.findMany()
     * 
     * // Get first 10 LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkedAccountWithIdOnly = await prisma.linkedAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkedAccountFindManyArgs>(args?: SelectSubset<T, LinkedAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkedAccount.
     * @param {LinkedAccountCreateArgs} args - Arguments to create a LinkedAccount.
     * @example
     * // Create one LinkedAccount
     * const LinkedAccount = await prisma.linkedAccount.create({
     *   data: {
     *     // ... data to create a LinkedAccount
     *   }
     * })
     * 
     */
    create<T extends LinkedAccountCreateArgs>(args: SelectSubset<T, LinkedAccountCreateArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkedAccounts.
     * @param {LinkedAccountCreateManyArgs} args - Arguments to create many LinkedAccounts.
     * @example
     * // Create many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkedAccountCreateManyArgs>(args?: SelectSubset<T, LinkedAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkedAccounts and returns the data saved in the database.
     * @param {LinkedAccountCreateManyAndReturnArgs} args - Arguments to create many LinkedAccounts.
     * @example
     * // Create many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkedAccounts and only return the `id`
     * const linkedAccountWithIdOnly = await prisma.linkedAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkedAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkedAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkedAccount.
     * @param {LinkedAccountDeleteArgs} args - Arguments to delete one LinkedAccount.
     * @example
     * // Delete one LinkedAccount
     * const LinkedAccount = await prisma.linkedAccount.delete({
     *   where: {
     *     // ... filter to delete one LinkedAccount
     *   }
     * })
     * 
     */
    delete<T extends LinkedAccountDeleteArgs>(args: SelectSubset<T, LinkedAccountDeleteArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkedAccount.
     * @param {LinkedAccountUpdateArgs} args - Arguments to update one LinkedAccount.
     * @example
     * // Update one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkedAccountUpdateArgs>(args: SelectSubset<T, LinkedAccountUpdateArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkedAccounts.
     * @param {LinkedAccountDeleteManyArgs} args - Arguments to filter LinkedAccounts to delete.
     * @example
     * // Delete a few LinkedAccounts
     * const { count } = await prisma.linkedAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkedAccountDeleteManyArgs>(args?: SelectSubset<T, LinkedAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkedAccountUpdateManyArgs>(args: SelectSubset<T, LinkedAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedAccounts and returns the data updated in the database.
     * @param {LinkedAccountUpdateManyAndReturnArgs} args - Arguments to update many LinkedAccounts.
     * @example
     * // Update many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkedAccounts and only return the `id`
     * const linkedAccountWithIdOnly = await prisma.linkedAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends LinkedAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkedAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkedAccount.
     * @param {LinkedAccountUpsertArgs} args - Arguments to update or create a LinkedAccount.
     * @example
     * // Update or create a LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.upsert({
     *   create: {
     *     // ... data to create a LinkedAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedAccount we want to update
     *   }
     * })
     */
    upsert<T extends LinkedAccountUpsertArgs>(args: SelectSubset<T, LinkedAccountUpsertArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountCountArgs} args - Arguments to filter LinkedAccounts to count.
     * @example
     * // Count the number of LinkedAccounts
     * const count = await prisma.linkedAccount.count({
     *   where: {
     *     // ... the filter for the LinkedAccounts we want to count
     *   }
     * })
    **/
    count<T extends LinkedAccountCountArgs>(
      args?: Subset<T, LinkedAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkedAccountAggregateArgs>(args: Subset<T, LinkedAccountAggregateArgs>): Prisma.PrismaPromise<GetLinkedAccountAggregateType<T>>

    /**
     * Group by LinkedAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountGroupByArgs} args - Group by arguments.
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
      T extends LinkedAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedAccountGroupByArgs['orderBy'] }
        : { orderBy?: LinkedAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkedAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedAccount model
   */
  readonly fields: LinkedAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LinkedAccount model
   */
  interface LinkedAccountFieldRefs {
    readonly id: FieldRef<"LinkedAccount", 'String'>
    readonly userId: FieldRef<"LinkedAccount", 'String'>
    readonly name: FieldRef<"LinkedAccount", 'String'>
    readonly type: FieldRef<"LinkedAccount", 'String'>
    readonly status: FieldRef<"LinkedAccount", 'String'>
    readonly lastSync: FieldRef<"LinkedAccount", 'DateTime'>
    readonly createdAt: FieldRef<"LinkedAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"LinkedAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LinkedAccount findUnique
   */
  export type LinkedAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount findUniqueOrThrow
   */
  export type LinkedAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount findFirst
   */
  export type LinkedAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedAccounts.
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedAccounts.
     */
    distinct?: LinkedAccountScalarFieldEnum | LinkedAccountScalarFieldEnum[]
  }

  /**
   * LinkedAccount findFirstOrThrow
   */
  export type LinkedAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedAccounts.
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedAccounts.
     */
    distinct?: LinkedAccountScalarFieldEnum | LinkedAccountScalarFieldEnum[]
  }

  /**
   * LinkedAccount findMany
   */
  export type LinkedAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedAccounts.
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    distinct?: LinkedAccountScalarFieldEnum | LinkedAccountScalarFieldEnum[]
  }

  /**
   * LinkedAccount create
   */
  export type LinkedAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkedAccount.
     */
    data: XOR<LinkedAccountCreateInput, LinkedAccountUncheckedCreateInput>
  }

  /**
   * LinkedAccount createMany
   */
  export type LinkedAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedAccounts.
     */
    data: LinkedAccountCreateManyInput | LinkedAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkedAccount createManyAndReturn
   */
  export type LinkedAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * The data used to create many LinkedAccounts.
     */
    data: LinkedAccountCreateManyInput | LinkedAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedAccount update
   */
  export type LinkedAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkedAccount.
     */
    data: XOR<LinkedAccountUpdateInput, LinkedAccountUncheckedUpdateInput>
    /**
     * Choose, which LinkedAccount to update.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount updateMany
   */
  export type LinkedAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedAccounts.
     */
    data: XOR<LinkedAccountUpdateManyMutationInput, LinkedAccountUncheckedUpdateManyInput>
    /**
     * Filter which LinkedAccounts to update
     */
    where?: LinkedAccountWhereInput
    /**
     * Limit how many LinkedAccounts to update.
     */
    limit?: number
  }

  /**
   * LinkedAccount updateManyAndReturn
   */
  export type LinkedAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * The data used to update LinkedAccounts.
     */
    data: XOR<LinkedAccountUpdateManyMutationInput, LinkedAccountUncheckedUpdateManyInput>
    /**
     * Filter which LinkedAccounts to update
     */
    where?: LinkedAccountWhereInput
    /**
     * Limit how many LinkedAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedAccount upsert
   */
  export type LinkedAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkedAccount to update in case it exists.
     */
    where: LinkedAccountWhereUniqueInput
    /**
     * In case the LinkedAccount found by the `where` argument doesn't exist, create a new LinkedAccount with this data.
     */
    create: XOR<LinkedAccountCreateInput, LinkedAccountUncheckedCreateInput>
    /**
     * In case the LinkedAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedAccountUpdateInput, LinkedAccountUncheckedUpdateInput>
  }

  /**
   * LinkedAccount delete
   */
  export type LinkedAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter which LinkedAccount to delete.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount deleteMany
   */
  export type LinkedAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedAccounts to delete
     */
    where?: LinkedAccountWhereInput
    /**
     * Limit how many LinkedAccounts to delete.
     */
    limit?: number
  }

  /**
   * LinkedAccount without action
   */
  export type LinkedAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    content: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    userId: string
    role: string
    content: string
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "role" | "content" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      role: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Fund
   */

  export type AggregateFund = {
    _count: FundCountAggregateOutputType | null
    _avg: FundAvgAggregateOutputType | null
    _sum: FundSumAggregateOutputType | null
    _min: FundMinAggregateOutputType | null
    _max: FundMaxAggregateOutputType | null
  }

  export type FundAvgAggregateOutputType = {
    amount: number | null
  }

  export type FundSumAggregateOutputType = {
    amount: number | null
  }

  export type FundMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    amount: number | null
    category: string | null
    startDate: Date | null
    linkedAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type FundMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    amount: number | null
    category: string | null
    startDate: Date | null
    linkedAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type FundCountAggregateOutputType = {
    id: number
    name: number
    description: number
    amount: number
    category: number
    startDate: number
    linkedAccountId: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type FundAvgAggregateInputType = {
    amount?: true
  }

  export type FundSumAggregateInputType = {
    amount?: true
  }

  export type FundMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    category?: true
    startDate?: true
    linkedAccountId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type FundMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    category?: true
    startDate?: true
    linkedAccountId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type FundCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    category?: true
    startDate?: true
    linkedAccountId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type FundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fund to aggregate.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funds
    **/
    _count?: true | FundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundMaxAggregateInputType
  }

  export type GetFundAggregateType<T extends FundAggregateArgs> = {
        [P in keyof T & keyof AggregateFund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFund[P]>
      : GetScalarType<T[P], AggregateFund[P]>
  }




  export type FundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundWhereInput
    orderBy?: FundOrderByWithAggregationInput | FundOrderByWithAggregationInput[]
    by: FundScalarFieldEnum[] | FundScalarFieldEnum
    having?: FundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundCountAggregateInputType | true
    _avg?: FundAvgAggregateInputType
    _sum?: FundSumAggregateInputType
    _min?: FundMinAggregateInputType
    _max?: FundMaxAggregateInputType
  }

  export type FundGroupByOutputType = {
    id: string
    name: string
    description: string
    amount: number
    category: string | null
    startDate: Date | null
    linkedAccountId: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: FundCountAggregateOutputType | null
    _avg: FundAvgAggregateOutputType | null
    _sum: FundSumAggregateOutputType | null
    _min: FundMinAggregateOutputType | null
    _max: FundMaxAggregateOutputType | null
  }

  type GetFundGroupByPayload<T extends FundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundGroupByOutputType[P]>
            : GetScalarType<T[P], FundGroupByOutputType[P]>
        }
      >
    >


  export type FundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    startDate?: boolean
    linkedAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fund"]>

  export type FundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    startDate?: boolean
    linkedAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fund"]>

  export type FundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    startDate?: boolean
    linkedAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fund"]>

  export type FundSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    startDate?: boolean
    linkedAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type FundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "amount" | "category" | "startDate" | "linkedAccountId" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["fund"]>
  export type FundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fund"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      amount: number
      category: string | null
      startDate: Date | null
      linkedAccountId: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["fund"]>
    composites: {}
  }

  type FundGetPayload<S extends boolean | null | undefined | FundDefaultArgs> = $Result.GetResult<Prisma.$FundPayload, S>

  type FundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundCountAggregateInputType | true
    }

  export interface FundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fund'], meta: { name: 'Fund' } }
    /**
     * Find zero or one Fund that matches the filter.
     * @param {FundFindUniqueArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundFindUniqueArgs>(args: SelectSubset<T, FundFindUniqueArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundFindUniqueOrThrowArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundFindUniqueOrThrowArgs>(args: SelectSubset<T, FundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindFirstArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundFindFirstArgs>(args?: SelectSubset<T, FundFindFirstArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindFirstOrThrowArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundFindFirstOrThrowArgs>(args?: SelectSubset<T, FundFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funds
     * const funds = await prisma.fund.findMany()
     * 
     * // Get first 10 Funds
     * const funds = await prisma.fund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundWithIdOnly = await prisma.fund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundFindManyArgs>(args?: SelectSubset<T, FundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fund.
     * @param {FundCreateArgs} args - Arguments to create a Fund.
     * @example
     * // Create one Fund
     * const Fund = await prisma.fund.create({
     *   data: {
     *     // ... data to create a Fund
     *   }
     * })
     * 
     */
    create<T extends FundCreateArgs>(args: SelectSubset<T, FundCreateArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funds.
     * @param {FundCreateManyArgs} args - Arguments to create many Funds.
     * @example
     * // Create many Funds
     * const fund = await prisma.fund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundCreateManyArgs>(args?: SelectSubset<T, FundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funds and returns the data saved in the database.
     * @param {FundCreateManyAndReturnArgs} args - Arguments to create many Funds.
     * @example
     * // Create many Funds
     * const fund = await prisma.fund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funds and only return the `id`
     * const fundWithIdOnly = await prisma.fund.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FundCreateManyAndReturnArgs>(args?: SelectSubset<T, FundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fund.
     * @param {FundDeleteArgs} args - Arguments to delete one Fund.
     * @example
     * // Delete one Fund
     * const Fund = await prisma.fund.delete({
     *   where: {
     *     // ... filter to delete one Fund
     *   }
     * })
     * 
     */
    delete<T extends FundDeleteArgs>(args: SelectSubset<T, FundDeleteArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fund.
     * @param {FundUpdateArgs} args - Arguments to update one Fund.
     * @example
     * // Update one Fund
     * const fund = await prisma.fund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundUpdateArgs>(args: SelectSubset<T, FundUpdateArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funds.
     * @param {FundDeleteManyArgs} args - Arguments to filter Funds to delete.
     * @example
     * // Delete a few Funds
     * const { count } = await prisma.fund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundDeleteManyArgs>(args?: SelectSubset<T, FundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funds
     * const fund = await prisma.fund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundUpdateManyArgs>(args: SelectSubset<T, FundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funds and returns the data updated in the database.
     * @param {FundUpdateManyAndReturnArgs} args - Arguments to update many Funds.
     * @example
     * // Update many Funds
     * const fund = await prisma.fund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funds and only return the `id`
     * const fundWithIdOnly = await prisma.fund.updateManyAndReturn({
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
    updateManyAndReturn<T extends FundUpdateManyAndReturnArgs>(args: SelectSubset<T, FundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fund.
     * @param {FundUpsertArgs} args - Arguments to update or create a Fund.
     * @example
     * // Update or create a Fund
     * const fund = await prisma.fund.upsert({
     *   create: {
     *     // ... data to create a Fund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fund we want to update
     *   }
     * })
     */
    upsert<T extends FundUpsertArgs>(args: SelectSubset<T, FundUpsertArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCountArgs} args - Arguments to filter Funds to count.
     * @example
     * // Count the number of Funds
     * const count = await prisma.fund.count({
     *   where: {
     *     // ... the filter for the Funds we want to count
     *   }
     * })
    **/
    count<T extends FundCountArgs>(
      args?: Subset<T, FundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FundAggregateArgs>(args: Subset<T, FundAggregateArgs>): Prisma.PrismaPromise<GetFundAggregateType<T>>

    /**
     * Group by Fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundGroupByArgs} args - Group by arguments.
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
      T extends FundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundGroupByArgs['orderBy'] }
        : { orderBy?: FundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fund model
   */
  readonly fields: FundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Fund model
   */
  interface FundFieldRefs {
    readonly id: FieldRef<"Fund", 'String'>
    readonly name: FieldRef<"Fund", 'String'>
    readonly description: FieldRef<"Fund", 'String'>
    readonly amount: FieldRef<"Fund", 'Float'>
    readonly category: FieldRef<"Fund", 'String'>
    readonly startDate: FieldRef<"Fund", 'DateTime'>
    readonly linkedAccountId: FieldRef<"Fund", 'String'>
    readonly createdAt: FieldRef<"Fund", 'DateTime'>
    readonly updatedAt: FieldRef<"Fund", 'DateTime'>
    readonly userId: FieldRef<"Fund", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fund findUnique
   */
  export type FundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund findUniqueOrThrow
   */
  export type FundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund findFirst
   */
  export type FundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funds.
     */
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund findFirstOrThrow
   */
  export type FundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funds.
     */
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund findMany
   */
  export type FundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter, which Funds to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund create
   */
  export type FundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * The data needed to create a Fund.
     */
    data: XOR<FundCreateInput, FundUncheckedCreateInput>
  }

  /**
   * Fund createMany
   */
  export type FundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funds.
     */
    data: FundCreateManyInput | FundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fund createManyAndReturn
   */
  export type FundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * The data used to create many Funds.
     */
    data: FundCreateManyInput | FundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fund update
   */
  export type FundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * The data needed to update a Fund.
     */
    data: XOR<FundUpdateInput, FundUncheckedUpdateInput>
    /**
     * Choose, which Fund to update.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund updateMany
   */
  export type FundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funds.
     */
    data: XOR<FundUpdateManyMutationInput, FundUncheckedUpdateManyInput>
    /**
     * Filter which Funds to update
     */
    where?: FundWhereInput
    /**
     * Limit how many Funds to update.
     */
    limit?: number
  }

  /**
   * Fund updateManyAndReturn
   */
  export type FundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * The data used to update Funds.
     */
    data: XOR<FundUpdateManyMutationInput, FundUncheckedUpdateManyInput>
    /**
     * Filter which Funds to update
     */
    where?: FundWhereInput
    /**
     * Limit how many Funds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fund upsert
   */
  export type FundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * The filter to search for the Fund to update in case it exists.
     */
    where: FundWhereUniqueInput
    /**
     * In case the Fund found by the `where` argument doesn't exist, create a new Fund with this data.
     */
    create: XOR<FundCreateInput, FundUncheckedCreateInput>
    /**
     * In case the Fund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundUpdateInput, FundUncheckedUpdateInput>
  }

  /**
   * Fund delete
   */
  export type FundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter which Fund to delete.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund deleteMany
   */
  export type FundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funds to delete
     */
    where?: FundWhereInput
    /**
     * Limit how many Funds to delete.
     */
    limit?: number
  }

  /**
   * Fund without action
   */
  export type FundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    timezone: 'timezone',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InvestmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    symbol: 'symbol',
    type: 'type',
    value: 'value',
    shares: 'shares',
    price: 'price',
    costBasis: 'costBasis',
    return: 'return',
    returnPercentage: 'returnPercentage',
    lastUpdated: 'lastUpdated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum]


  export const InvestmentHistoryScalarFieldEnum: {
    id: 'id',
    investmentId: 'investmentId',
    userId: 'userId',
    date: 'date',
    value: 'value'
  };

  export type InvestmentHistoryScalarFieldEnum = (typeof InvestmentHistoryScalarFieldEnum)[keyof typeof InvestmentHistoryScalarFieldEnum]


  export const DebtScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    type: 'type',
    amount: 'amount',
    remainingBalance: 'remainingBalance',
    interestRate: 'interestRate',
    monthlyPayment: 'monthlyPayment',
    dueDate: 'dueDate',
    nextPaymentDate: 'nextPaymentDate',
    startDate: 'startDate',
    endDate: 'endDate',
    payoffProgress: 'payoffProgress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DebtScalarFieldEnum = (typeof DebtScalarFieldEnum)[keyof typeof DebtScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    targetAmount: 'targetAmount',
    currentAmount: 'currentAmount',
    targetDate: 'targetDate',
    category: 'category',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const GoalContributionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    goalId: 'goalId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoalContributionScalarFieldEnum = (typeof GoalContributionScalarFieldEnum)[keyof typeof GoalContributionScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    amount: 'amount',
    isIncome: 'isIncome',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    description: 'description',
    category: 'category',
    date: 'date',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const LinkedAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    type: 'type',
    status: 'status',
    lastSync: 'lastSync',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LinkedAccountScalarFieldEnum = (typeof LinkedAccountScalarFieldEnum)[keyof typeof LinkedAccountScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const FundScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    amount: 'amount',
    category: 'category',
    startDate: 'startDate',
    linkedAccountId: 'linkedAccountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type FundScalarFieldEnum = (typeof FundScalarFieldEnum)[keyof typeof FundScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    timezone?: StringFilter<"User"> | string
    currency?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    investments?: InvestmentListRelationFilter
    investmentHistory?: InvestmentHistoryListRelationFilter
    debts?: DebtListRelationFilter
    goals?: GoalListRelationFilter
    goalContributions?: GoalContributionListRelationFilter
    budgets?: BudgetListRelationFilter
    transactions?: TransactionListRelationFilter
    linkedAccounts?: LinkedAccountListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    funds?: FundListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    investments?: InvestmentOrderByRelationAggregateInput
    investmentHistory?: InvestmentHistoryOrderByRelationAggregateInput
    debts?: DebtOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    goalContributions?: GoalContributionOrderByRelationAggregateInput
    budgets?: BudgetOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    linkedAccounts?: LinkedAccountOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    funds?: FundOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    timezone?: StringFilter<"User"> | string
    currency?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    investments?: InvestmentListRelationFilter
    investmentHistory?: InvestmentHistoryListRelationFilter
    debts?: DebtListRelationFilter
    goals?: GoalListRelationFilter
    goalContributions?: GoalContributionListRelationFilter
    budgets?: BudgetListRelationFilter
    transactions?: TransactionListRelationFilter
    linkedAccounts?: LinkedAccountListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    funds?: FundListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    timezone?: StringWithAggregatesFilter<"User"> | string
    currency?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InvestmentWhereInput = {
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    id?: StringFilter<"Investment"> | string
    userId?: StringFilter<"Investment"> | string
    name?: StringFilter<"Investment"> | string
    symbol?: StringNullableFilter<"Investment"> | string | null
    type?: StringFilter<"Investment"> | string
    value?: FloatFilter<"Investment"> | number
    shares?: FloatFilter<"Investment"> | number
    price?: FloatFilter<"Investment"> | number
    costBasis?: FloatFilter<"Investment"> | number
    return?: FloatFilter<"Investment"> | number
    returnPercentage?: FloatFilter<"Investment"> | number
    lastUpdated?: DateTimeFilter<"Investment"> | Date | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
    history?: InvestmentHistoryListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InvestmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    symbol?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    shares?: SortOrder
    price?: SortOrder
    costBasis?: SortOrder
    return?: SortOrder
    returnPercentage?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    history?: InvestmentHistoryOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    userId?: StringFilter<"Investment"> | string
    name?: StringFilter<"Investment"> | string
    symbol?: StringNullableFilter<"Investment"> | string | null
    type?: StringFilter<"Investment"> | string
    value?: FloatFilter<"Investment"> | number
    shares?: FloatFilter<"Investment"> | number
    price?: FloatFilter<"Investment"> | number
    costBasis?: FloatFilter<"Investment"> | number
    return?: FloatFilter<"Investment"> | number
    returnPercentage?: FloatFilter<"Investment"> | number
    lastUpdated?: DateTimeFilter<"Investment"> | Date | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
    history?: InvestmentHistoryListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InvestmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    symbol?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    shares?: SortOrder
    price?: SortOrder
    costBasis?: SortOrder
    return?: SortOrder
    returnPercentage?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvestmentCountOrderByAggregateInput
    _avg?: InvestmentAvgOrderByAggregateInput
    _max?: InvestmentMaxOrderByAggregateInput
    _min?: InvestmentMinOrderByAggregateInput
    _sum?: InvestmentSumOrderByAggregateInput
  }

  export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    OR?: InvestmentScalarWhereWithAggregatesInput[]
    NOT?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment"> | string
    userId?: StringWithAggregatesFilter<"Investment"> | string
    name?: StringWithAggregatesFilter<"Investment"> | string
    symbol?: StringNullableWithAggregatesFilter<"Investment"> | string | null
    type?: StringWithAggregatesFilter<"Investment"> | string
    value?: FloatWithAggregatesFilter<"Investment"> | number
    shares?: FloatWithAggregatesFilter<"Investment"> | number
    price?: FloatWithAggregatesFilter<"Investment"> | number
    costBasis?: FloatWithAggregatesFilter<"Investment"> | number
    return?: FloatWithAggregatesFilter<"Investment"> | number
    returnPercentage?: FloatWithAggregatesFilter<"Investment"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
  }

  export type InvestmentHistoryWhereInput = {
    AND?: InvestmentHistoryWhereInput | InvestmentHistoryWhereInput[]
    OR?: InvestmentHistoryWhereInput[]
    NOT?: InvestmentHistoryWhereInput | InvestmentHistoryWhereInput[]
    id?: StringFilter<"InvestmentHistory"> | string
    investmentId?: StringFilter<"InvestmentHistory"> | string
    userId?: StringFilter<"InvestmentHistory"> | string
    date?: DateTimeFilter<"InvestmentHistory"> | Date | string
    value?: FloatFilter<"InvestmentHistory"> | number
    investment?: XOR<InvestmentScalarRelationFilter, InvestmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InvestmentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    investmentId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    value?: SortOrder
    investment?: InvestmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type InvestmentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentHistoryWhereInput | InvestmentHistoryWhereInput[]
    OR?: InvestmentHistoryWhereInput[]
    NOT?: InvestmentHistoryWhereInput | InvestmentHistoryWhereInput[]
    investmentId?: StringFilter<"InvestmentHistory"> | string
    userId?: StringFilter<"InvestmentHistory"> | string
    date?: DateTimeFilter<"InvestmentHistory"> | Date | string
    value?: FloatFilter<"InvestmentHistory"> | number
    investment?: XOR<InvestmentScalarRelationFilter, InvestmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InvestmentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    investmentId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    value?: SortOrder
    _count?: InvestmentHistoryCountOrderByAggregateInput
    _avg?: InvestmentHistoryAvgOrderByAggregateInput
    _max?: InvestmentHistoryMaxOrderByAggregateInput
    _min?: InvestmentHistoryMinOrderByAggregateInput
    _sum?: InvestmentHistorySumOrderByAggregateInput
  }

  export type InvestmentHistoryScalarWhereWithAggregatesInput = {
    AND?: InvestmentHistoryScalarWhereWithAggregatesInput | InvestmentHistoryScalarWhereWithAggregatesInput[]
    OR?: InvestmentHistoryScalarWhereWithAggregatesInput[]
    NOT?: InvestmentHistoryScalarWhereWithAggregatesInput | InvestmentHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvestmentHistory"> | string
    investmentId?: StringWithAggregatesFilter<"InvestmentHistory"> | string
    userId?: StringWithAggregatesFilter<"InvestmentHistory"> | string
    date?: DateTimeWithAggregatesFilter<"InvestmentHistory"> | Date | string
    value?: FloatWithAggregatesFilter<"InvestmentHistory"> | number
  }

  export type DebtWhereInput = {
    AND?: DebtWhereInput | DebtWhereInput[]
    OR?: DebtWhereInput[]
    NOT?: DebtWhereInput | DebtWhereInput[]
    id?: StringFilter<"Debt"> | string
    userId?: StringFilter<"Debt"> | string
    name?: StringFilter<"Debt"> | string
    type?: StringFilter<"Debt"> | string
    amount?: FloatFilter<"Debt"> | number
    remainingBalance?: FloatFilter<"Debt"> | number
    interestRate?: FloatFilter<"Debt"> | number
    monthlyPayment?: FloatFilter<"Debt"> | number
    dueDate?: StringFilter<"Debt"> | string
    nextPaymentDate?: DateTimeFilter<"Debt"> | Date | string
    startDate?: DateTimeFilter<"Debt"> | Date | string
    endDate?: DateTimeFilter<"Debt"> | Date | string
    payoffProgress?: FloatFilter<"Debt"> | number
    createdAt?: DateTimeFilter<"Debt"> | Date | string
    updatedAt?: DateTimeFilter<"Debt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DebtOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    remainingBalance?: SortOrder
    interestRate?: SortOrder
    monthlyPayment?: SortOrder
    dueDate?: SortOrder
    nextPaymentDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    payoffProgress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DebtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DebtWhereInput | DebtWhereInput[]
    OR?: DebtWhereInput[]
    NOT?: DebtWhereInput | DebtWhereInput[]
    userId?: StringFilter<"Debt"> | string
    name?: StringFilter<"Debt"> | string
    type?: StringFilter<"Debt"> | string
    amount?: FloatFilter<"Debt"> | number
    remainingBalance?: FloatFilter<"Debt"> | number
    interestRate?: FloatFilter<"Debt"> | number
    monthlyPayment?: FloatFilter<"Debt"> | number
    dueDate?: StringFilter<"Debt"> | string
    nextPaymentDate?: DateTimeFilter<"Debt"> | Date | string
    startDate?: DateTimeFilter<"Debt"> | Date | string
    endDate?: DateTimeFilter<"Debt"> | Date | string
    payoffProgress?: FloatFilter<"Debt"> | number
    createdAt?: DateTimeFilter<"Debt"> | Date | string
    updatedAt?: DateTimeFilter<"Debt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DebtOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    remainingBalance?: SortOrder
    interestRate?: SortOrder
    monthlyPayment?: SortOrder
    dueDate?: SortOrder
    nextPaymentDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    payoffProgress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DebtCountOrderByAggregateInput
    _avg?: DebtAvgOrderByAggregateInput
    _max?: DebtMaxOrderByAggregateInput
    _min?: DebtMinOrderByAggregateInput
    _sum?: DebtSumOrderByAggregateInput
  }

  export type DebtScalarWhereWithAggregatesInput = {
    AND?: DebtScalarWhereWithAggregatesInput | DebtScalarWhereWithAggregatesInput[]
    OR?: DebtScalarWhereWithAggregatesInput[]
    NOT?: DebtScalarWhereWithAggregatesInput | DebtScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Debt"> | string
    userId?: StringWithAggregatesFilter<"Debt"> | string
    name?: StringWithAggregatesFilter<"Debt"> | string
    type?: StringWithAggregatesFilter<"Debt"> | string
    amount?: FloatWithAggregatesFilter<"Debt"> | number
    remainingBalance?: FloatWithAggregatesFilter<"Debt"> | number
    interestRate?: FloatWithAggregatesFilter<"Debt"> | number
    monthlyPayment?: FloatWithAggregatesFilter<"Debt"> | number
    dueDate?: StringWithAggregatesFilter<"Debt"> | string
    nextPaymentDate?: DateTimeWithAggregatesFilter<"Debt"> | Date | string
    startDate?: DateTimeWithAggregatesFilter<"Debt"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Debt"> | Date | string
    payoffProgress?: FloatWithAggregatesFilter<"Debt"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Debt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Debt"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    name?: StringFilter<"Goal"> | string
    description?: StringFilter<"Goal"> | string
    targetAmount?: FloatFilter<"Goal"> | number
    currentAmount?: FloatFilter<"Goal"> | number
    targetDate?: DateTimeFilter<"Goal"> | Date | string
    category?: StringNullableFilter<"Goal"> | string | null
    priority?: StringNullableFilter<"Goal"> | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    userId?: StringFilter<"Goal"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contributions?: GoalContributionListRelationFilter
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    targetDate?: SortOrder
    category?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    contributions?: GoalContributionOrderByRelationAggregateInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    name?: StringFilter<"Goal"> | string
    description?: StringFilter<"Goal"> | string
    targetAmount?: FloatFilter<"Goal"> | number
    currentAmount?: FloatFilter<"Goal"> | number
    targetDate?: DateTimeFilter<"Goal"> | Date | string
    category?: StringNullableFilter<"Goal"> | string | null
    priority?: StringNullableFilter<"Goal"> | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    userId?: StringFilter<"Goal"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contributions?: GoalContributionListRelationFilter
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    targetDate?: SortOrder
    category?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    name?: StringWithAggregatesFilter<"Goal"> | string
    description?: StringWithAggregatesFilter<"Goal"> | string
    targetAmount?: FloatWithAggregatesFilter<"Goal"> | number
    currentAmount?: FloatWithAggregatesFilter<"Goal"> | number
    targetDate?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    category?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    priority?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    userId?: StringWithAggregatesFilter<"Goal"> | string
  }

  export type GoalContributionWhereInput = {
    AND?: GoalContributionWhereInput | GoalContributionWhereInput[]
    OR?: GoalContributionWhereInput[]
    NOT?: GoalContributionWhereInput | GoalContributionWhereInput[]
    id?: StringFilter<"GoalContribution"> | string
    amount?: FloatFilter<"GoalContribution"> | number
    date?: DateTimeFilter<"GoalContribution"> | Date | string
    goalId?: StringFilter<"GoalContribution"> | string
    userId?: StringFilter<"GoalContribution"> | string
    createdAt?: DateTimeFilter<"GoalContribution"> | Date | string
    updatedAt?: DateTimeFilter<"GoalContribution"> | Date | string
    goal?: XOR<GoalScalarRelationFilter, GoalWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GoalContributionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    goalId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goal?: GoalOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GoalContributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalContributionWhereInput | GoalContributionWhereInput[]
    OR?: GoalContributionWhereInput[]
    NOT?: GoalContributionWhereInput | GoalContributionWhereInput[]
    amount?: FloatFilter<"GoalContribution"> | number
    date?: DateTimeFilter<"GoalContribution"> | Date | string
    goalId?: StringFilter<"GoalContribution"> | string
    userId?: StringFilter<"GoalContribution"> | string
    createdAt?: DateTimeFilter<"GoalContribution"> | Date | string
    updatedAt?: DateTimeFilter<"GoalContribution"> | Date | string
    goal?: XOR<GoalScalarRelationFilter, GoalWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GoalContributionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    goalId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalContributionCountOrderByAggregateInput
    _avg?: GoalContributionAvgOrderByAggregateInput
    _max?: GoalContributionMaxOrderByAggregateInput
    _min?: GoalContributionMinOrderByAggregateInput
    _sum?: GoalContributionSumOrderByAggregateInput
  }

  export type GoalContributionScalarWhereWithAggregatesInput = {
    AND?: GoalContributionScalarWhereWithAggregatesInput | GoalContributionScalarWhereWithAggregatesInput[]
    OR?: GoalContributionScalarWhereWithAggregatesInput[]
    NOT?: GoalContributionScalarWhereWithAggregatesInput | GoalContributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GoalContribution"> | string
    amount?: FloatWithAggregatesFilter<"GoalContribution"> | number
    date?: DateTimeWithAggregatesFilter<"GoalContribution"> | Date | string
    goalId?: StringWithAggregatesFilter<"GoalContribution"> | string
    userId?: StringWithAggregatesFilter<"GoalContribution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GoalContribution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GoalContribution"> | Date | string
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: StringFilter<"Budget"> | string
    userId?: StringFilter<"Budget"> | string
    category?: StringFilter<"Budget"> | string
    amount?: FloatFilter<"Budget"> | number
    isIncome?: BoolFilter<"Budget"> | boolean
    isActive?: BoolFilter<"Budget"> | boolean
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeFilter<"Budget"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BudgetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    isIncome?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    userId?: StringFilter<"Budget"> | string
    category?: StringFilter<"Budget"> | string
    amount?: FloatFilter<"Budget"> | number
    isIncome?: BoolFilter<"Budget"> | boolean
    isActive?: BoolFilter<"Budget"> | boolean
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeFilter<"Budget"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    isIncome?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Budget"> | string
    userId?: StringWithAggregatesFilter<"Budget"> | string
    category?: StringWithAggregatesFilter<"Budget"> | string
    amount?: FloatWithAggregatesFilter<"Budget"> | number
    isIncome?: BoolWithAggregatesFilter<"Budget"> | boolean
    isActive?: BoolWithAggregatesFilter<"Budget"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    description?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    description?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    description?: StringWithAggregatesFilter<"Transaction"> | string
    category?: StringWithAggregatesFilter<"Transaction"> | string
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    type?: StringWithAggregatesFilter<"Transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type LinkedAccountWhereInput = {
    AND?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    OR?: LinkedAccountWhereInput[]
    NOT?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    id?: StringFilter<"LinkedAccount"> | string
    userId?: StringFilter<"LinkedAccount"> | string
    name?: StringFilter<"LinkedAccount"> | string
    type?: StringFilter<"LinkedAccount"> | string
    status?: StringFilter<"LinkedAccount"> | string
    lastSync?: DateTimeFilter<"LinkedAccount"> | Date | string
    createdAt?: DateTimeFilter<"LinkedAccount"> | Date | string
    updatedAt?: DateTimeFilter<"LinkedAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LinkedAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    lastSync?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LinkedAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    OR?: LinkedAccountWhereInput[]
    NOT?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    userId?: StringFilter<"LinkedAccount"> | string
    name?: StringFilter<"LinkedAccount"> | string
    type?: StringFilter<"LinkedAccount"> | string
    status?: StringFilter<"LinkedAccount"> | string
    lastSync?: DateTimeFilter<"LinkedAccount"> | Date | string
    createdAt?: DateTimeFilter<"LinkedAccount"> | Date | string
    updatedAt?: DateTimeFilter<"LinkedAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LinkedAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    lastSync?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LinkedAccountCountOrderByAggregateInput
    _max?: LinkedAccountMaxOrderByAggregateInput
    _min?: LinkedAccountMinOrderByAggregateInput
  }

  export type LinkedAccountScalarWhereWithAggregatesInput = {
    AND?: LinkedAccountScalarWhereWithAggregatesInput | LinkedAccountScalarWhereWithAggregatesInput[]
    OR?: LinkedAccountScalarWhereWithAggregatesInput[]
    NOT?: LinkedAccountScalarWhereWithAggregatesInput | LinkedAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkedAccount"> | string
    userId?: StringWithAggregatesFilter<"LinkedAccount"> | string
    name?: StringWithAggregatesFilter<"LinkedAccount"> | string
    type?: StringWithAggregatesFilter<"LinkedAccount"> | string
    status?: StringWithAggregatesFilter<"LinkedAccount"> | string
    lastSync?: DateTimeWithAggregatesFilter<"LinkedAccount"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LinkedAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LinkedAccount"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    userId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    userId?: StringWithAggregatesFilter<"ChatMessage"> | string
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type FundWhereInput = {
    AND?: FundWhereInput | FundWhereInput[]
    OR?: FundWhereInput[]
    NOT?: FundWhereInput | FundWhereInput[]
    id?: StringFilter<"Fund"> | string
    name?: StringFilter<"Fund"> | string
    description?: StringFilter<"Fund"> | string
    amount?: FloatFilter<"Fund"> | number
    category?: StringNullableFilter<"Fund"> | string | null
    startDate?: DateTimeNullableFilter<"Fund"> | Date | string | null
    linkedAccountId?: StringNullableFilter<"Fund"> | string | null
    createdAt?: DateTimeFilter<"Fund"> | Date | string
    updatedAt?: DateTimeFilter<"Fund"> | Date | string
    userId?: StringFilter<"Fund"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FundOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    linkedAccountId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FundWhereInput | FundWhereInput[]
    OR?: FundWhereInput[]
    NOT?: FundWhereInput | FundWhereInput[]
    name?: StringFilter<"Fund"> | string
    description?: StringFilter<"Fund"> | string
    amount?: FloatFilter<"Fund"> | number
    category?: StringNullableFilter<"Fund"> | string | null
    startDate?: DateTimeNullableFilter<"Fund"> | Date | string | null
    linkedAccountId?: StringNullableFilter<"Fund"> | string | null
    createdAt?: DateTimeFilter<"Fund"> | Date | string
    updatedAt?: DateTimeFilter<"Fund"> | Date | string
    userId?: StringFilter<"Fund"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FundOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    linkedAccountId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: FundCountOrderByAggregateInput
    _avg?: FundAvgOrderByAggregateInput
    _max?: FundMaxOrderByAggregateInput
    _min?: FundMinOrderByAggregateInput
    _sum?: FundSumOrderByAggregateInput
  }

  export type FundScalarWhereWithAggregatesInput = {
    AND?: FundScalarWhereWithAggregatesInput | FundScalarWhereWithAggregatesInput[]
    OR?: FundScalarWhereWithAggregatesInput[]
    NOT?: FundScalarWhereWithAggregatesInput | FundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fund"> | string
    name?: StringWithAggregatesFilter<"Fund"> | string
    description?: StringWithAggregatesFilter<"Fund"> | string
    amount?: FloatWithAggregatesFilter<"Fund"> | number
    category?: StringNullableWithAggregatesFilter<"Fund"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Fund"> | Date | string | null
    linkedAccountId?: StringNullableWithAggregatesFilter<"Fund"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Fund"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fund"> | Date | string
    userId?: StringWithAggregatesFilter<"Fund"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    funds?: FundCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    funds?: FundUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    funds?: FundUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    funds?: FundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateInput = {
    id?: string
    name: string
    symbol?: string | null
    type: string
    value: number
    shares: number
    price: number
    costBasis: number
    return: number
    returnPercentage: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: InvestmentHistoryCreateNestedManyWithoutInvestmentInput
    user: UserCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    symbol?: string | null
    type: string
    value: number
    shares: number
    price: number
    costBasis: number
    return: number
    returnPercentage: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: InvestmentHistoryUncheckedCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    shares?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costBasis?: FloatFieldUpdateOperationsInput | number
    return?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: InvestmentHistoryUpdateManyWithoutInvestmentNestedInput
    user?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    shares?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costBasis?: FloatFieldUpdateOperationsInput | number
    return?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: InvestmentHistoryUncheckedUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentCreateManyInput = {
    id?: string
    userId: string
    name: string
    symbol?: string | null
    type: string
    value: number
    shares: number
    price: number
    costBasis: number
    return: number
    returnPercentage: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    shares?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costBasis?: FloatFieldUpdateOperationsInput | number
    return?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    shares?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costBasis?: FloatFieldUpdateOperationsInput | number
    return?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentHistoryCreateInput = {
    id?: string
    date: Date | string
    value: number
    investment: InvestmentCreateNestedOneWithoutHistoryInput
    user: UserCreateNestedOneWithoutInvestmentHistoryInput
  }

  export type InvestmentHistoryUncheckedCreateInput = {
    id?: string
    investmentId: string
    userId: string
    date: Date | string
    value: number
  }

  export type InvestmentHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    investment?: InvestmentUpdateOneRequiredWithoutHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutInvestmentHistoryNestedInput
  }

  export type InvestmentHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type InvestmentHistoryCreateManyInput = {
    id?: string
    investmentId: string
    userId: string
    date: Date | string
    value: number
  }

  export type InvestmentHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type InvestmentHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DebtCreateInput = {
    id?: string
    name: string
    type: string
    amount: number
    remainingBalance: number
    interestRate: number
    monthlyPayment: number
    dueDate: string
    nextPaymentDate: Date | string
    startDate: Date | string
    endDate: Date | string
    payoffProgress: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDebtsInput
  }

  export type DebtUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    type: string
    amount: number
    remainingBalance: number
    interestRate: number
    monthlyPayment: number
    dueDate: string
    nextPaymentDate: Date | string
    startDate: Date | string
    endDate: Date | string
    payoffProgress: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    monthlyPayment?: FloatFieldUpdateOperationsInput | number
    dueDate?: StringFieldUpdateOperationsInput | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payoffProgress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDebtsNestedInput
  }

  export type DebtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    monthlyPayment?: FloatFieldUpdateOperationsInput | number
    dueDate?: StringFieldUpdateOperationsInput | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payoffProgress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtCreateManyInput = {
    id?: string
    userId: string
    name: string
    type: string
    amount: number
    remainingBalance: number
    interestRate: number
    monthlyPayment: number
    dueDate: string
    nextPaymentDate: Date | string
    startDate: Date | string
    endDate: Date | string
    payoffProgress: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    monthlyPayment?: FloatFieldUpdateOperationsInput | number
    dueDate?: StringFieldUpdateOperationsInput | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payoffProgress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    monthlyPayment?: FloatFieldUpdateOperationsInput | number
    dueDate?: StringFieldUpdateOperationsInput | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payoffProgress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    name: string
    description: string
    targetAmount: number
    currentAmount: number
    targetDate: Date | string
    category?: string | null
    priority?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    contributions?: GoalContributionCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    targetAmount: number
    currentAmount: number
    targetDate: Date | string
    category?: string | null
    priority?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    contributions?: GoalContributionUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    contributions?: GoalContributionUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    contributions?: GoalContributionUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCreateManyInput = {
    id?: string
    name: string
    description: string
    targetAmount: number
    currentAmount: number
    targetDate: Date | string
    category?: string | null
    priority?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GoalContributionCreateInput = {
    id?: string
    amount: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    goal: GoalCreateNestedOneWithoutContributionsInput
    user: UserCreateNestedOneWithoutGoalContributionsInput
  }

  export type GoalContributionUncheckedCreateInput = {
    id?: string
    amount: number
    date?: Date | string
    goalId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalContributionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneRequiredWithoutContributionsNestedInput
    user?: UserUpdateOneRequiredWithoutGoalContributionsNestedInput
  }

  export type GoalContributionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    goalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalContributionCreateManyInput = {
    id?: string
    amount: number
    date?: Date | string
    goalId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalContributionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalContributionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    goalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetCreateInput = {
    id?: string
    category: string
    amount: number
    isIncome?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateInput = {
    id?: string
    userId: string
    category: string
    amount: number
    isIncome?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetCreateManyInput = {
    id?: string
    userId: string
    category: string
    amount: number
    isIncome?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    amount: number
    description: string
    category: string
    date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    description: string
    category: string
    date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    amount: number
    description: string
    category: string
    date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountCreateInput = {
    id?: string
    name: string
    type: string
    status?: string
    lastSync: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLinkedAccountsInput
  }

  export type LinkedAccountUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    type: string
    status?: string
    lastSync: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkedAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSync?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLinkedAccountsNestedInput
  }

  export type LinkedAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSync?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountCreateManyInput = {
    id?: string
    userId: string
    name: string
    type: string
    status?: string
    lastSync: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkedAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSync?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSync?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    userId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    userId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundCreateInput = {
    id?: string
    name: string
    description: string
    amount: number
    category?: string | null
    startDate?: Date | string | null
    linkedAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFundsInput
  }

  export type FundUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    amount: number
    category?: string | null
    startDate?: Date | string | null
    linkedAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type FundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFundsNestedInput
  }

  export type FundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FundCreateManyInput = {
    id?: string
    name: string
    description: string
    amount: number
    category?: string | null
    startDate?: Date | string | null
    linkedAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type FundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type InvestmentListRelationFilter = {
    every?: InvestmentWhereInput
    some?: InvestmentWhereInput
    none?: InvestmentWhereInput
  }

  export type InvestmentHistoryListRelationFilter = {
    every?: InvestmentHistoryWhereInput
    some?: InvestmentHistoryWhereInput
    none?: InvestmentHistoryWhereInput
  }

  export type DebtListRelationFilter = {
    every?: DebtWhereInput
    some?: DebtWhereInput
    none?: DebtWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type GoalContributionListRelationFilter = {
    every?: GoalContributionWhereInput
    some?: GoalContributionWhereInput
    none?: GoalContributionWhereInput
  }

  export type BudgetListRelationFilter = {
    every?: BudgetWhereInput
    some?: BudgetWhereInput
    none?: BudgetWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type LinkedAccountListRelationFilter = {
    every?: LinkedAccountWhereInput
    some?: LinkedAccountWhereInput
    none?: LinkedAccountWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type FundListRelationFilter = {
    every?: FundWhereInput
    some?: FundWhereInput
    none?: FundWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InvestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestmentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DebtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalContributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkedAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InvestmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    value?: SortOrder
    shares?: SortOrder
    price?: SortOrder
    costBasis?: SortOrder
    return?: SortOrder
    returnPercentage?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentAvgOrderByAggregateInput = {
    value?: SortOrder
    shares?: SortOrder
    price?: SortOrder
    costBasis?: SortOrder
    return?: SortOrder
    returnPercentage?: SortOrder
  }

  export type InvestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    value?: SortOrder
    shares?: SortOrder
    price?: SortOrder
    costBasis?: SortOrder
    return?: SortOrder
    returnPercentage?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    type?: SortOrder
    value?: SortOrder
    shares?: SortOrder
    price?: SortOrder
    costBasis?: SortOrder
    return?: SortOrder
    returnPercentage?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentSumOrderByAggregateInput = {
    value?: SortOrder
    shares?: SortOrder
    price?: SortOrder
    costBasis?: SortOrder
    return?: SortOrder
    returnPercentage?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type InvestmentScalarRelationFilter = {
    is?: InvestmentWhereInput
    isNot?: InvestmentWhereInput
  }

  export type InvestmentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    investmentId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type InvestmentHistoryAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type InvestmentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    investmentId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type InvestmentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    investmentId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type InvestmentHistorySumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type DebtCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    remainingBalance?: SortOrder
    interestRate?: SortOrder
    monthlyPayment?: SortOrder
    dueDate?: SortOrder
    nextPaymentDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    payoffProgress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebtAvgOrderByAggregateInput = {
    amount?: SortOrder
    remainingBalance?: SortOrder
    interestRate?: SortOrder
    monthlyPayment?: SortOrder
    payoffProgress?: SortOrder
  }

  export type DebtMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    remainingBalance?: SortOrder
    interestRate?: SortOrder
    monthlyPayment?: SortOrder
    dueDate?: SortOrder
    nextPaymentDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    payoffProgress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebtMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    remainingBalance?: SortOrder
    interestRate?: SortOrder
    monthlyPayment?: SortOrder
    dueDate?: SortOrder
    nextPaymentDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    payoffProgress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebtSumOrderByAggregateInput = {
    amount?: SortOrder
    remainingBalance?: SortOrder
    interestRate?: SortOrder
    monthlyPayment?: SortOrder
    payoffProgress?: SortOrder
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    targetDate?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    targetAmount?: SortOrder
    currentAmount?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    targetDate?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    targetDate?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    targetAmount?: SortOrder
    currentAmount?: SortOrder
  }

  export type GoalScalarRelationFilter = {
    is?: GoalWhereInput
    isNot?: GoalWhereInput
  }

  export type GoalContributionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    goalId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalContributionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type GoalContributionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    goalId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalContributionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    goalId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalContributionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    isIncome?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    isIncome?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    isIncome?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    date?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type LinkedAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    lastSync?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkedAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    lastSync?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkedAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    lastSync?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FundCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    linkedAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FundAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FundMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    linkedAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FundMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    linkedAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FundSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type InvestmentCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type InvestmentHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentHistoryCreateWithoutUserInput, InvestmentHistoryUncheckedCreateWithoutUserInput> | InvestmentHistoryCreateWithoutUserInput[] | InvestmentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentHistoryCreateOrConnectWithoutUserInput | InvestmentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentHistoryCreateManyUserInputEnvelope
    connect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
  }

  export type DebtCreateNestedManyWithoutUserInput = {
    create?: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput> | DebtCreateWithoutUserInput[] | DebtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutUserInput | DebtCreateOrConnectWithoutUserInput[]
    createMany?: DebtCreateManyUserInputEnvelope
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type GoalContributionCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalContributionCreateWithoutUserInput, GoalContributionUncheckedCreateWithoutUserInput> | GoalContributionCreateWithoutUserInput[] | GoalContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalContributionCreateOrConnectWithoutUserInput | GoalContributionCreateOrConnectWithoutUserInput[]
    createMany?: GoalContributionCreateManyUserInputEnvelope
    connect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
  }

  export type BudgetCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type LinkedAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput> | LinkedAccountCreateWithoutUserInput[] | LinkedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedAccountCreateOrConnectWithoutUserInput | LinkedAccountCreateOrConnectWithoutUserInput[]
    createMany?: LinkedAccountCreateManyUserInputEnvelope
    connect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type FundCreateNestedManyWithoutUserInput = {
    create?: XOR<FundCreateWithoutUserInput, FundUncheckedCreateWithoutUserInput> | FundCreateWithoutUserInput[] | FundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundCreateOrConnectWithoutUserInput | FundCreateOrConnectWithoutUserInput[]
    createMany?: FundCreateManyUserInputEnvelope
    connect?: FundWhereUniqueInput | FundWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type InvestmentHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentHistoryCreateWithoutUserInput, InvestmentHistoryUncheckedCreateWithoutUserInput> | InvestmentHistoryCreateWithoutUserInput[] | InvestmentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentHistoryCreateOrConnectWithoutUserInput | InvestmentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentHistoryCreateManyUserInputEnvelope
    connect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
  }

  export type DebtUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput> | DebtCreateWithoutUserInput[] | DebtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutUserInput | DebtCreateOrConnectWithoutUserInput[]
    createMany?: DebtCreateManyUserInputEnvelope
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type GoalContributionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalContributionCreateWithoutUserInput, GoalContributionUncheckedCreateWithoutUserInput> | GoalContributionCreateWithoutUserInput[] | GoalContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalContributionCreateOrConnectWithoutUserInput | GoalContributionCreateOrConnectWithoutUserInput[]
    createMany?: GoalContributionCreateManyUserInputEnvelope
    connect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type LinkedAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput> | LinkedAccountCreateWithoutUserInput[] | LinkedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedAccountCreateOrConnectWithoutUserInput | LinkedAccountCreateOrConnectWithoutUserInput[]
    createMany?: LinkedAccountCreateManyUserInputEnvelope
    connect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type FundUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FundCreateWithoutUserInput, FundUncheckedCreateWithoutUserInput> | FundCreateWithoutUserInput[] | FundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundCreateOrConnectWithoutUserInput | FundCreateOrConnectWithoutUserInput[]
    createMany?: FundCreateManyUserInputEnvelope
    connect?: FundWhereUniqueInput | FundWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InvestmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutUserInput | InvestmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutUserInput | InvestmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutUserInput | InvestmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentHistoryCreateWithoutUserInput, InvestmentHistoryUncheckedCreateWithoutUserInput> | InvestmentHistoryCreateWithoutUserInput[] | InvestmentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentHistoryCreateOrConnectWithoutUserInput | InvestmentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentHistoryUpsertWithWhereUniqueWithoutUserInput | InvestmentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentHistoryCreateManyUserInputEnvelope
    set?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    disconnect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    delete?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    connect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    update?: InvestmentHistoryUpdateWithWhereUniqueWithoutUserInput | InvestmentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentHistoryUpdateManyWithWhereWithoutUserInput | InvestmentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentHistoryScalarWhereInput | InvestmentHistoryScalarWhereInput[]
  }

  export type DebtUpdateManyWithoutUserNestedInput = {
    create?: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput> | DebtCreateWithoutUserInput[] | DebtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutUserInput | DebtCreateOrConnectWithoutUserInput[]
    upsert?: DebtUpsertWithWhereUniqueWithoutUserInput | DebtUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DebtCreateManyUserInputEnvelope
    set?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    disconnect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    delete?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    update?: DebtUpdateWithWhereUniqueWithoutUserInput | DebtUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DebtUpdateManyWithWhereWithoutUserInput | DebtUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DebtScalarWhereInput | DebtScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type GoalContributionUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalContributionCreateWithoutUserInput, GoalContributionUncheckedCreateWithoutUserInput> | GoalContributionCreateWithoutUserInput[] | GoalContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalContributionCreateOrConnectWithoutUserInput | GoalContributionCreateOrConnectWithoutUserInput[]
    upsert?: GoalContributionUpsertWithWhereUniqueWithoutUserInput | GoalContributionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalContributionCreateManyUserInputEnvelope
    set?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    disconnect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    delete?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    connect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    update?: GoalContributionUpdateWithWhereUniqueWithoutUserInput | GoalContributionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalContributionUpdateManyWithWhereWithoutUserInput | GoalContributionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalContributionScalarWhereInput | GoalContributionScalarWhereInput[]
  }

  export type BudgetUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type LinkedAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput> | LinkedAccountCreateWithoutUserInput[] | LinkedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedAccountCreateOrConnectWithoutUserInput | LinkedAccountCreateOrConnectWithoutUserInput[]
    upsert?: LinkedAccountUpsertWithWhereUniqueWithoutUserInput | LinkedAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkedAccountCreateManyUserInputEnvelope
    set?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    disconnect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    delete?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    connect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    update?: LinkedAccountUpdateWithWhereUniqueWithoutUserInput | LinkedAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkedAccountUpdateManyWithWhereWithoutUserInput | LinkedAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkedAccountScalarWhereInput | LinkedAccountScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type FundUpdateManyWithoutUserNestedInput = {
    create?: XOR<FundCreateWithoutUserInput, FundUncheckedCreateWithoutUserInput> | FundCreateWithoutUserInput[] | FundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundCreateOrConnectWithoutUserInput | FundCreateOrConnectWithoutUserInput[]
    upsert?: FundUpsertWithWhereUniqueWithoutUserInput | FundUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FundCreateManyUserInputEnvelope
    set?: FundWhereUniqueInput | FundWhereUniqueInput[]
    disconnect?: FundWhereUniqueInput | FundWhereUniqueInput[]
    delete?: FundWhereUniqueInput | FundWhereUniqueInput[]
    connect?: FundWhereUniqueInput | FundWhereUniqueInput[]
    update?: FundUpdateWithWhereUniqueWithoutUserInput | FundUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FundUpdateManyWithWhereWithoutUserInput | FundUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FundScalarWhereInput | FundScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutUserInput | InvestmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutUserInput | InvestmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutUserInput | InvestmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentHistoryCreateWithoutUserInput, InvestmentHistoryUncheckedCreateWithoutUserInput> | InvestmentHistoryCreateWithoutUserInput[] | InvestmentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentHistoryCreateOrConnectWithoutUserInput | InvestmentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentHistoryUpsertWithWhereUniqueWithoutUserInput | InvestmentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentHistoryCreateManyUserInputEnvelope
    set?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    disconnect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    delete?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    connect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    update?: InvestmentHistoryUpdateWithWhereUniqueWithoutUserInput | InvestmentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentHistoryUpdateManyWithWhereWithoutUserInput | InvestmentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentHistoryScalarWhereInput | InvestmentHistoryScalarWhereInput[]
  }

  export type DebtUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput> | DebtCreateWithoutUserInput[] | DebtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutUserInput | DebtCreateOrConnectWithoutUserInput[]
    upsert?: DebtUpsertWithWhereUniqueWithoutUserInput | DebtUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DebtCreateManyUserInputEnvelope
    set?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    disconnect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    delete?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    update?: DebtUpdateWithWhereUniqueWithoutUserInput | DebtUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DebtUpdateManyWithWhereWithoutUserInput | DebtUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DebtScalarWhereInput | DebtScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type GoalContributionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalContributionCreateWithoutUserInput, GoalContributionUncheckedCreateWithoutUserInput> | GoalContributionCreateWithoutUserInput[] | GoalContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalContributionCreateOrConnectWithoutUserInput | GoalContributionCreateOrConnectWithoutUserInput[]
    upsert?: GoalContributionUpsertWithWhereUniqueWithoutUserInput | GoalContributionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalContributionCreateManyUserInputEnvelope
    set?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    disconnect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    delete?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    connect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    update?: GoalContributionUpdateWithWhereUniqueWithoutUserInput | GoalContributionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalContributionUpdateManyWithWhereWithoutUserInput | GoalContributionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalContributionScalarWhereInput | GoalContributionScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type LinkedAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput> | LinkedAccountCreateWithoutUserInput[] | LinkedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedAccountCreateOrConnectWithoutUserInput | LinkedAccountCreateOrConnectWithoutUserInput[]
    upsert?: LinkedAccountUpsertWithWhereUniqueWithoutUserInput | LinkedAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkedAccountCreateManyUserInputEnvelope
    set?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    disconnect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    delete?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    connect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    update?: LinkedAccountUpdateWithWhereUniqueWithoutUserInput | LinkedAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkedAccountUpdateManyWithWhereWithoutUserInput | LinkedAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkedAccountScalarWhereInput | LinkedAccountScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type FundUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FundCreateWithoutUserInput, FundUncheckedCreateWithoutUserInput> | FundCreateWithoutUserInput[] | FundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundCreateOrConnectWithoutUserInput | FundCreateOrConnectWithoutUserInput[]
    upsert?: FundUpsertWithWhereUniqueWithoutUserInput | FundUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FundCreateManyUserInputEnvelope
    set?: FundWhereUniqueInput | FundWhereUniqueInput[]
    disconnect?: FundWhereUniqueInput | FundWhereUniqueInput[]
    delete?: FundWhereUniqueInput | FundWhereUniqueInput[]
    connect?: FundWhereUniqueInput | FundWhereUniqueInput[]
    update?: FundUpdateWithWhereUniqueWithoutUserInput | FundUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FundUpdateManyWithWhereWithoutUserInput | FundUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FundScalarWhereInput | FundScalarWhereInput[]
  }

  export type InvestmentHistoryCreateNestedManyWithoutInvestmentInput = {
    create?: XOR<InvestmentHistoryCreateWithoutInvestmentInput, InvestmentHistoryUncheckedCreateWithoutInvestmentInput> | InvestmentHistoryCreateWithoutInvestmentInput[] | InvestmentHistoryUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: InvestmentHistoryCreateOrConnectWithoutInvestmentInput | InvestmentHistoryCreateOrConnectWithoutInvestmentInput[]
    createMany?: InvestmentHistoryCreateManyInvestmentInputEnvelope
    connect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
  }

  export type InvestmentHistoryUncheckedCreateNestedManyWithoutInvestmentInput = {
    create?: XOR<InvestmentHistoryCreateWithoutInvestmentInput, InvestmentHistoryUncheckedCreateWithoutInvestmentInput> | InvestmentHistoryCreateWithoutInvestmentInput[] | InvestmentHistoryUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: InvestmentHistoryCreateOrConnectWithoutInvestmentInput | InvestmentHistoryCreateOrConnectWithoutInvestmentInput[]
    createMany?: InvestmentHistoryCreateManyInvestmentInputEnvelope
    connect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvestmentHistoryUpdateManyWithoutInvestmentNestedInput = {
    create?: XOR<InvestmentHistoryCreateWithoutInvestmentInput, InvestmentHistoryUncheckedCreateWithoutInvestmentInput> | InvestmentHistoryCreateWithoutInvestmentInput[] | InvestmentHistoryUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: InvestmentHistoryCreateOrConnectWithoutInvestmentInput | InvestmentHistoryCreateOrConnectWithoutInvestmentInput[]
    upsert?: InvestmentHistoryUpsertWithWhereUniqueWithoutInvestmentInput | InvestmentHistoryUpsertWithWhereUniqueWithoutInvestmentInput[]
    createMany?: InvestmentHistoryCreateManyInvestmentInputEnvelope
    set?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    disconnect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    delete?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    connect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    update?: InvestmentHistoryUpdateWithWhereUniqueWithoutInvestmentInput | InvestmentHistoryUpdateWithWhereUniqueWithoutInvestmentInput[]
    updateMany?: InvestmentHistoryUpdateManyWithWhereWithoutInvestmentInput | InvestmentHistoryUpdateManyWithWhereWithoutInvestmentInput[]
    deleteMany?: InvestmentHistoryScalarWhereInput | InvestmentHistoryScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    upsert?: UserUpsertWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvestmentsInput, UserUpdateWithoutInvestmentsInput>, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type InvestmentHistoryUncheckedUpdateManyWithoutInvestmentNestedInput = {
    create?: XOR<InvestmentHistoryCreateWithoutInvestmentInput, InvestmentHistoryUncheckedCreateWithoutInvestmentInput> | InvestmentHistoryCreateWithoutInvestmentInput[] | InvestmentHistoryUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: InvestmentHistoryCreateOrConnectWithoutInvestmentInput | InvestmentHistoryCreateOrConnectWithoutInvestmentInput[]
    upsert?: InvestmentHistoryUpsertWithWhereUniqueWithoutInvestmentInput | InvestmentHistoryUpsertWithWhereUniqueWithoutInvestmentInput[]
    createMany?: InvestmentHistoryCreateManyInvestmentInputEnvelope
    set?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    disconnect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    delete?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    connect?: InvestmentHistoryWhereUniqueInput | InvestmentHistoryWhereUniqueInput[]
    update?: InvestmentHistoryUpdateWithWhereUniqueWithoutInvestmentInput | InvestmentHistoryUpdateWithWhereUniqueWithoutInvestmentInput[]
    updateMany?: InvestmentHistoryUpdateManyWithWhereWithoutInvestmentInput | InvestmentHistoryUpdateManyWithWhereWithoutInvestmentInput[]
    deleteMany?: InvestmentHistoryScalarWhereInput | InvestmentHistoryScalarWhereInput[]
  }

  export type InvestmentCreateNestedOneWithoutHistoryInput = {
    create?: XOR<InvestmentCreateWithoutHistoryInput, InvestmentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: InvestmentCreateOrConnectWithoutHistoryInput
    connect?: InvestmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvestmentHistoryInput = {
    create?: XOR<UserCreateWithoutInvestmentHistoryInput, UserUncheckedCreateWithoutInvestmentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type InvestmentUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<InvestmentCreateWithoutHistoryInput, InvestmentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: InvestmentCreateOrConnectWithoutHistoryInput
    upsert?: InvestmentUpsertWithoutHistoryInput
    connect?: InvestmentWhereUniqueInput
    update?: XOR<XOR<InvestmentUpdateToOneWithWhereWithoutHistoryInput, InvestmentUpdateWithoutHistoryInput>, InvestmentUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutInvestmentHistoryNestedInput = {
    create?: XOR<UserCreateWithoutInvestmentHistoryInput, UserUncheckedCreateWithoutInvestmentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentHistoryInput
    upsert?: UserUpsertWithoutInvestmentHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvestmentHistoryInput, UserUpdateWithoutInvestmentHistoryInput>, UserUncheckedUpdateWithoutInvestmentHistoryInput>
  }

  export type UserCreateNestedOneWithoutDebtsInput = {
    create?: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDebtsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDebtsNestedInput = {
    create?: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDebtsInput
    upsert?: UserUpsertWithoutDebtsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDebtsInput, UserUpdateWithoutDebtsInput>, UserUncheckedUpdateWithoutDebtsInput>
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type GoalContributionCreateNestedManyWithoutGoalInput = {
    create?: XOR<GoalContributionCreateWithoutGoalInput, GoalContributionUncheckedCreateWithoutGoalInput> | GoalContributionCreateWithoutGoalInput[] | GoalContributionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: GoalContributionCreateOrConnectWithoutGoalInput | GoalContributionCreateOrConnectWithoutGoalInput[]
    createMany?: GoalContributionCreateManyGoalInputEnvelope
    connect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
  }

  export type GoalContributionUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<GoalContributionCreateWithoutGoalInput, GoalContributionUncheckedCreateWithoutGoalInput> | GoalContributionCreateWithoutGoalInput[] | GoalContributionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: GoalContributionCreateOrConnectWithoutGoalInput | GoalContributionCreateOrConnectWithoutGoalInput[]
    createMany?: GoalContributionCreateManyGoalInputEnvelope
    connect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type GoalContributionUpdateManyWithoutGoalNestedInput = {
    create?: XOR<GoalContributionCreateWithoutGoalInput, GoalContributionUncheckedCreateWithoutGoalInput> | GoalContributionCreateWithoutGoalInput[] | GoalContributionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: GoalContributionCreateOrConnectWithoutGoalInput | GoalContributionCreateOrConnectWithoutGoalInput[]
    upsert?: GoalContributionUpsertWithWhereUniqueWithoutGoalInput | GoalContributionUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: GoalContributionCreateManyGoalInputEnvelope
    set?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    disconnect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    delete?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    connect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    update?: GoalContributionUpdateWithWhereUniqueWithoutGoalInput | GoalContributionUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: GoalContributionUpdateManyWithWhereWithoutGoalInput | GoalContributionUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: GoalContributionScalarWhereInput | GoalContributionScalarWhereInput[]
  }

  export type GoalContributionUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<GoalContributionCreateWithoutGoalInput, GoalContributionUncheckedCreateWithoutGoalInput> | GoalContributionCreateWithoutGoalInput[] | GoalContributionUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: GoalContributionCreateOrConnectWithoutGoalInput | GoalContributionCreateOrConnectWithoutGoalInput[]
    upsert?: GoalContributionUpsertWithWhereUniqueWithoutGoalInput | GoalContributionUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: GoalContributionCreateManyGoalInputEnvelope
    set?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    disconnect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    delete?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    connect?: GoalContributionWhereUniqueInput | GoalContributionWhereUniqueInput[]
    update?: GoalContributionUpdateWithWhereUniqueWithoutGoalInput | GoalContributionUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: GoalContributionUpdateManyWithWhereWithoutGoalInput | GoalContributionUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: GoalContributionScalarWhereInput | GoalContributionScalarWhereInput[]
  }

  export type GoalCreateNestedOneWithoutContributionsInput = {
    create?: XOR<GoalCreateWithoutContributionsInput, GoalUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutContributionsInput
    connect?: GoalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGoalContributionsInput = {
    create?: XOR<UserCreateWithoutGoalContributionsInput, UserUncheckedCreateWithoutGoalContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalContributionsInput
    connect?: UserWhereUniqueInput
  }

  export type GoalUpdateOneRequiredWithoutContributionsNestedInput = {
    create?: XOR<GoalCreateWithoutContributionsInput, GoalUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutContributionsInput
    upsert?: GoalUpsertWithoutContributionsInput
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutContributionsInput, GoalUpdateWithoutContributionsInput>, GoalUncheckedUpdateWithoutContributionsInput>
  }

  export type UserUpdateOneRequiredWithoutGoalContributionsNestedInput = {
    create?: XOR<UserCreateWithoutGoalContributionsInput, UserUncheckedCreateWithoutGoalContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalContributionsInput
    upsert?: UserUpsertWithoutGoalContributionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalContributionsInput, UserUpdateWithoutGoalContributionsInput>, UserUncheckedUpdateWithoutGoalContributionsInput>
  }

  export type UserCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    upsert?: UserUpsertWithoutBudgetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBudgetsInput, UserUpdateWithoutBudgetsInput>, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutLinkedAccountsInput = {
    create?: XOR<UserCreateWithoutLinkedAccountsInput, UserUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLinkedAccountsNestedInput = {
    create?: XOR<UserCreateWithoutLinkedAccountsInput, UserUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedAccountsInput
    upsert?: UserUpsertWithoutLinkedAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinkedAccountsInput, UserUpdateWithoutLinkedAccountsInput>, UserUncheckedUpdateWithoutLinkedAccountsInput>
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserCreateNestedOneWithoutFundsInput = {
    create?: XOR<UserCreateWithoutFundsInput, UserUncheckedCreateWithoutFundsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFundsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutFundsNestedInput = {
    create?: XOR<UserCreateWithoutFundsInput, UserUncheckedCreateWithoutFundsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFundsInput
    upsert?: UserUpsertWithoutFundsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFundsInput, UserUpdateWithoutFundsInput>, UserUncheckedUpdateWithoutFundsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type InvestmentCreateWithoutUserInput = {
    id?: string
    name: string
    symbol?: string | null
    type: string
    value: number
    shares: number
    price: number
    costBasis: number
    return: number
    returnPercentage: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: InvestmentHistoryCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    symbol?: string | null
    type: string
    value: number
    shares: number
    price: number
    costBasis: number
    return: number
    returnPercentage: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: InvestmentHistoryUncheckedCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentCreateOrConnectWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput>
  }

  export type InvestmentCreateManyUserInputEnvelope = {
    data: InvestmentCreateManyUserInput | InvestmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentHistoryCreateWithoutUserInput = {
    id?: string
    date: Date | string
    value: number
    investment: InvestmentCreateNestedOneWithoutHistoryInput
  }

  export type InvestmentHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    investmentId: string
    date: Date | string
    value: number
  }

  export type InvestmentHistoryCreateOrConnectWithoutUserInput = {
    where: InvestmentHistoryWhereUniqueInput
    create: XOR<InvestmentHistoryCreateWithoutUserInput, InvestmentHistoryUncheckedCreateWithoutUserInput>
  }

  export type InvestmentHistoryCreateManyUserInputEnvelope = {
    data: InvestmentHistoryCreateManyUserInput | InvestmentHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DebtCreateWithoutUserInput = {
    id?: string
    name: string
    type: string
    amount: number
    remainingBalance: number
    interestRate: number
    monthlyPayment: number
    dueDate: string
    nextPaymentDate: Date | string
    startDate: Date | string
    endDate: Date | string
    payoffProgress: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: string
    amount: number
    remainingBalance: number
    interestRate: number
    monthlyPayment: number
    dueDate: string
    nextPaymentDate: Date | string
    startDate: Date | string
    endDate: Date | string
    payoffProgress: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtCreateOrConnectWithoutUserInput = {
    where: DebtWhereUniqueInput
    create: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput>
  }

  export type DebtCreateManyUserInputEnvelope = {
    data: DebtCreateManyUserInput | DebtCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    targetAmount: number
    currentAmount: number
    targetDate: Date | string
    category?: string | null
    priority?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: GoalContributionCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    targetAmount: number
    currentAmount: number
    targetDate: Date | string
    category?: string | null
    priority?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: GoalContributionUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalContributionCreateWithoutUserInput = {
    id?: string
    amount: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    goal: GoalCreateNestedOneWithoutContributionsInput
  }

  export type GoalContributionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    date?: Date | string
    goalId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalContributionCreateOrConnectWithoutUserInput = {
    where: GoalContributionWhereUniqueInput
    create: XOR<GoalContributionCreateWithoutUserInput, GoalContributionUncheckedCreateWithoutUserInput>
  }

  export type GoalContributionCreateManyUserInputEnvelope = {
    data: GoalContributionCreateManyUserInput | GoalContributionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BudgetCreateWithoutUserInput = {
    id?: string
    category: string
    amount: number
    isIncome?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetUncheckedCreateWithoutUserInput = {
    id?: string
    category: string
    amount: number
    isIncome?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetCreateOrConnectWithoutUserInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetCreateManyUserInputEnvelope = {
    data: BudgetCreateManyUserInput | BudgetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    amount: number
    description: string
    category: string
    date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    description: string
    category: string
    date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LinkedAccountCreateWithoutUserInput = {
    id?: string
    name: string
    type: string
    status?: string
    lastSync: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkedAccountUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: string
    status?: string
    lastSync: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkedAccountCreateOrConnectWithoutUserInput = {
    where: LinkedAccountWhereUniqueInput
    create: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput>
  }

  export type LinkedAccountCreateManyUserInputEnvelope = {
    data: LinkedAccountCreateManyUserInput | LinkedAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutUserInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FundCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    amount: number
    category?: string | null
    startDate?: Date | string | null
    linkedAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    amount: number
    category?: string | null
    startDate?: Date | string | null
    linkedAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundCreateOrConnectWithoutUserInput = {
    where: FundWhereUniqueInput
    create: XOR<FundCreateWithoutUserInput, FundUncheckedCreateWithoutUserInput>
  }

  export type FundCreateManyUserInputEnvelope = {
    data: FundCreateManyUserInput | FundCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentUpsertWithWhereUniqueWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutUserInput, InvestmentUncheckedUpdateWithoutUserInput>
    create: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutUserInput, InvestmentUncheckedUpdateWithoutUserInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutUserInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutUserInput>
  }

  export type InvestmentScalarWhereInput = {
    AND?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    OR?: InvestmentScalarWhereInput[]
    NOT?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    id?: StringFilter<"Investment"> | string
    userId?: StringFilter<"Investment"> | string
    name?: StringFilter<"Investment"> | string
    symbol?: StringNullableFilter<"Investment"> | string | null
    type?: StringFilter<"Investment"> | string
    value?: FloatFilter<"Investment"> | number
    shares?: FloatFilter<"Investment"> | number
    price?: FloatFilter<"Investment"> | number
    costBasis?: FloatFilter<"Investment"> | number
    return?: FloatFilter<"Investment"> | number
    returnPercentage?: FloatFilter<"Investment"> | number
    lastUpdated?: DateTimeFilter<"Investment"> | Date | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
  }

  export type InvestmentHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: InvestmentHistoryWhereUniqueInput
    update: XOR<InvestmentHistoryUpdateWithoutUserInput, InvestmentHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<InvestmentHistoryCreateWithoutUserInput, InvestmentHistoryUncheckedCreateWithoutUserInput>
  }

  export type InvestmentHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: InvestmentHistoryWhereUniqueInput
    data: XOR<InvestmentHistoryUpdateWithoutUserInput, InvestmentHistoryUncheckedUpdateWithoutUserInput>
  }

  export type InvestmentHistoryUpdateManyWithWhereWithoutUserInput = {
    where: InvestmentHistoryScalarWhereInput
    data: XOR<InvestmentHistoryUpdateManyMutationInput, InvestmentHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type InvestmentHistoryScalarWhereInput = {
    AND?: InvestmentHistoryScalarWhereInput | InvestmentHistoryScalarWhereInput[]
    OR?: InvestmentHistoryScalarWhereInput[]
    NOT?: InvestmentHistoryScalarWhereInput | InvestmentHistoryScalarWhereInput[]
    id?: StringFilter<"InvestmentHistory"> | string
    investmentId?: StringFilter<"InvestmentHistory"> | string
    userId?: StringFilter<"InvestmentHistory"> | string
    date?: DateTimeFilter<"InvestmentHistory"> | Date | string
    value?: FloatFilter<"InvestmentHistory"> | number
  }

  export type DebtUpsertWithWhereUniqueWithoutUserInput = {
    where: DebtWhereUniqueInput
    update: XOR<DebtUpdateWithoutUserInput, DebtUncheckedUpdateWithoutUserInput>
    create: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput>
  }

  export type DebtUpdateWithWhereUniqueWithoutUserInput = {
    where: DebtWhereUniqueInput
    data: XOR<DebtUpdateWithoutUserInput, DebtUncheckedUpdateWithoutUserInput>
  }

  export type DebtUpdateManyWithWhereWithoutUserInput = {
    where: DebtScalarWhereInput
    data: XOR<DebtUpdateManyMutationInput, DebtUncheckedUpdateManyWithoutUserInput>
  }

  export type DebtScalarWhereInput = {
    AND?: DebtScalarWhereInput | DebtScalarWhereInput[]
    OR?: DebtScalarWhereInput[]
    NOT?: DebtScalarWhereInput | DebtScalarWhereInput[]
    id?: StringFilter<"Debt"> | string
    userId?: StringFilter<"Debt"> | string
    name?: StringFilter<"Debt"> | string
    type?: StringFilter<"Debt"> | string
    amount?: FloatFilter<"Debt"> | number
    remainingBalance?: FloatFilter<"Debt"> | number
    interestRate?: FloatFilter<"Debt"> | number
    monthlyPayment?: FloatFilter<"Debt"> | number
    dueDate?: StringFilter<"Debt"> | string
    nextPaymentDate?: DateTimeFilter<"Debt"> | Date | string
    startDate?: DateTimeFilter<"Debt"> | Date | string
    endDate?: DateTimeFilter<"Debt"> | Date | string
    payoffProgress?: FloatFilter<"Debt"> | number
    createdAt?: DateTimeFilter<"Debt"> | Date | string
    updatedAt?: DateTimeFilter<"Debt"> | Date | string
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    name?: StringFilter<"Goal"> | string
    description?: StringFilter<"Goal"> | string
    targetAmount?: FloatFilter<"Goal"> | number
    currentAmount?: FloatFilter<"Goal"> | number
    targetDate?: DateTimeFilter<"Goal"> | Date | string
    category?: StringNullableFilter<"Goal"> | string | null
    priority?: StringNullableFilter<"Goal"> | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    userId?: StringFilter<"Goal"> | string
  }

  export type GoalContributionUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalContributionWhereUniqueInput
    update: XOR<GoalContributionUpdateWithoutUserInput, GoalContributionUncheckedUpdateWithoutUserInput>
    create: XOR<GoalContributionCreateWithoutUserInput, GoalContributionUncheckedCreateWithoutUserInput>
  }

  export type GoalContributionUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalContributionWhereUniqueInput
    data: XOR<GoalContributionUpdateWithoutUserInput, GoalContributionUncheckedUpdateWithoutUserInput>
  }

  export type GoalContributionUpdateManyWithWhereWithoutUserInput = {
    where: GoalContributionScalarWhereInput
    data: XOR<GoalContributionUpdateManyMutationInput, GoalContributionUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalContributionScalarWhereInput = {
    AND?: GoalContributionScalarWhereInput | GoalContributionScalarWhereInput[]
    OR?: GoalContributionScalarWhereInput[]
    NOT?: GoalContributionScalarWhereInput | GoalContributionScalarWhereInput[]
    id?: StringFilter<"GoalContribution"> | string
    amount?: FloatFilter<"GoalContribution"> | number
    date?: DateTimeFilter<"GoalContribution"> | Date | string
    goalId?: StringFilter<"GoalContribution"> | string
    userId?: StringFilter<"GoalContribution"> | string
    createdAt?: DateTimeFilter<"GoalContribution"> | Date | string
    updatedAt?: DateTimeFilter<"GoalContribution"> | Date | string
  }

  export type BudgetUpsertWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
  }

  export type BudgetUpdateManyWithWhereWithoutUserInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutUserInput>
  }

  export type BudgetScalarWhereInput = {
    AND?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    OR?: BudgetScalarWhereInput[]
    NOT?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    id?: StringFilter<"Budget"> | string
    userId?: StringFilter<"Budget"> | string
    category?: StringFilter<"Budget"> | string
    amount?: FloatFilter<"Budget"> | number
    isIncome?: BoolFilter<"Budget"> | boolean
    isActive?: BoolFilter<"Budget"> | boolean
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeFilter<"Budget"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    description?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type LinkedAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: LinkedAccountWhereUniqueInput
    update: XOR<LinkedAccountUpdateWithoutUserInput, LinkedAccountUncheckedUpdateWithoutUserInput>
    create: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput>
  }

  export type LinkedAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: LinkedAccountWhereUniqueInput
    data: XOR<LinkedAccountUpdateWithoutUserInput, LinkedAccountUncheckedUpdateWithoutUserInput>
  }

  export type LinkedAccountUpdateManyWithWhereWithoutUserInput = {
    where: LinkedAccountScalarWhereInput
    data: XOR<LinkedAccountUpdateManyMutationInput, LinkedAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type LinkedAccountScalarWhereInput = {
    AND?: LinkedAccountScalarWhereInput | LinkedAccountScalarWhereInput[]
    OR?: LinkedAccountScalarWhereInput[]
    NOT?: LinkedAccountScalarWhereInput | LinkedAccountScalarWhereInput[]
    id?: StringFilter<"LinkedAccount"> | string
    userId?: StringFilter<"LinkedAccount"> | string
    name?: StringFilter<"LinkedAccount"> | string
    type?: StringFilter<"LinkedAccount"> | string
    status?: StringFilter<"LinkedAccount"> | string
    lastSync?: DateTimeFilter<"LinkedAccount"> | Date | string
    createdAt?: DateTimeFilter<"LinkedAccount"> | Date | string
    updatedAt?: DateTimeFilter<"LinkedAccount"> | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type FundUpsertWithWhereUniqueWithoutUserInput = {
    where: FundWhereUniqueInput
    update: XOR<FundUpdateWithoutUserInput, FundUncheckedUpdateWithoutUserInput>
    create: XOR<FundCreateWithoutUserInput, FundUncheckedCreateWithoutUserInput>
  }

  export type FundUpdateWithWhereUniqueWithoutUserInput = {
    where: FundWhereUniqueInput
    data: XOR<FundUpdateWithoutUserInput, FundUncheckedUpdateWithoutUserInput>
  }

  export type FundUpdateManyWithWhereWithoutUserInput = {
    where: FundScalarWhereInput
    data: XOR<FundUpdateManyMutationInput, FundUncheckedUpdateManyWithoutUserInput>
  }

  export type FundScalarWhereInput = {
    AND?: FundScalarWhereInput | FundScalarWhereInput[]
    OR?: FundScalarWhereInput[]
    NOT?: FundScalarWhereInput | FundScalarWhereInput[]
    id?: StringFilter<"Fund"> | string
    name?: StringFilter<"Fund"> | string
    description?: StringFilter<"Fund"> | string
    amount?: FloatFilter<"Fund"> | number
    category?: StringNullableFilter<"Fund"> | string | null
    startDate?: DateTimeNullableFilter<"Fund"> | Date | string | null
    linkedAccountId?: StringNullableFilter<"Fund"> | string | null
    createdAt?: DateTimeFilter<"Fund"> | Date | string
    updatedAt?: DateTimeFilter<"Fund"> | Date | string
    userId?: StringFilter<"Fund"> | string
  }

  export type InvestmentHistoryCreateWithoutInvestmentInput = {
    id?: string
    date: Date | string
    value: number
    user: UserCreateNestedOneWithoutInvestmentHistoryInput
  }

  export type InvestmentHistoryUncheckedCreateWithoutInvestmentInput = {
    id?: string
    userId: string
    date: Date | string
    value: number
  }

  export type InvestmentHistoryCreateOrConnectWithoutInvestmentInput = {
    where: InvestmentHistoryWhereUniqueInput
    create: XOR<InvestmentHistoryCreateWithoutInvestmentInput, InvestmentHistoryUncheckedCreateWithoutInvestmentInput>
  }

  export type InvestmentHistoryCreateManyInvestmentInputEnvelope = {
    data: InvestmentHistoryCreateManyInvestmentInput | InvestmentHistoryCreateManyInvestmentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutInvestmentsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investmentHistory?: InvestmentHistoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    funds?: FundCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investmentHistory?: InvestmentHistoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    funds?: FundUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvestmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
  }

  export type InvestmentHistoryUpsertWithWhereUniqueWithoutInvestmentInput = {
    where: InvestmentHistoryWhereUniqueInput
    update: XOR<InvestmentHistoryUpdateWithoutInvestmentInput, InvestmentHistoryUncheckedUpdateWithoutInvestmentInput>
    create: XOR<InvestmentHistoryCreateWithoutInvestmentInput, InvestmentHistoryUncheckedCreateWithoutInvestmentInput>
  }

  export type InvestmentHistoryUpdateWithWhereUniqueWithoutInvestmentInput = {
    where: InvestmentHistoryWhereUniqueInput
    data: XOR<InvestmentHistoryUpdateWithoutInvestmentInput, InvestmentHistoryUncheckedUpdateWithoutInvestmentInput>
  }

  export type InvestmentHistoryUpdateManyWithWhereWithoutInvestmentInput = {
    where: InvestmentHistoryScalarWhereInput
    data: XOR<InvestmentHistoryUpdateManyMutationInput, InvestmentHistoryUncheckedUpdateManyWithoutInvestmentInput>
  }

  export type UserUpsertWithoutInvestmentsInput = {
    update: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type UserUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investmentHistory?: InvestmentHistoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    funds?: FundUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investmentHistory?: InvestmentHistoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    funds?: FundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvestmentCreateWithoutHistoryInput = {
    id?: string
    name: string
    symbol?: string | null
    type: string
    value: number
    shares: number
    price: number
    costBasis: number
    return: number
    returnPercentage: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateWithoutHistoryInput = {
    id?: string
    userId: string
    name: string
    symbol?: string | null
    type: string
    value: number
    shares: number
    price: number
    costBasis: number
    return: number
    returnPercentage: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentCreateOrConnectWithoutHistoryInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutHistoryInput, InvestmentUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutInvestmentHistoryInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    funds?: FundCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvestmentHistoryInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    funds?: FundUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvestmentHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvestmentHistoryInput, UserUncheckedCreateWithoutInvestmentHistoryInput>
  }

  export type InvestmentUpsertWithoutHistoryInput = {
    update: XOR<InvestmentUpdateWithoutHistoryInput, InvestmentUncheckedUpdateWithoutHistoryInput>
    create: XOR<InvestmentCreateWithoutHistoryInput, InvestmentUncheckedCreateWithoutHistoryInput>
    where?: InvestmentWhereInput
  }

  export type InvestmentUpdateToOneWithWhereWithoutHistoryInput = {
    where?: InvestmentWhereInput
    data: XOR<InvestmentUpdateWithoutHistoryInput, InvestmentUncheckedUpdateWithoutHistoryInput>
  }

  export type InvestmentUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    shares?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costBasis?: FloatFieldUpdateOperationsInput | number
    return?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    shares?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costBasis?: FloatFieldUpdateOperationsInput | number
    return?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutInvestmentHistoryInput = {
    update: XOR<UserUpdateWithoutInvestmentHistoryInput, UserUncheckedUpdateWithoutInvestmentHistoryInput>
    create: XOR<UserCreateWithoutInvestmentHistoryInput, UserUncheckedCreateWithoutInvestmentHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvestmentHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvestmentHistoryInput, UserUncheckedUpdateWithoutInvestmentHistoryInput>
  }

  export type UserUpdateWithoutInvestmentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    funds?: FundUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvestmentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    funds?: FundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDebtsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    funds?: FundCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDebtsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    funds?: FundUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDebtsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
  }

  export type UserUpsertWithoutDebtsInput = {
    update: XOR<UserUpdateWithoutDebtsInput, UserUncheckedUpdateWithoutDebtsInput>
    create: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDebtsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDebtsInput, UserUncheckedUpdateWithoutDebtsInput>
  }

  export type UserUpdateWithoutDebtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    funds?: FundUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDebtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    funds?: FundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    funds?: FundCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    funds?: FundUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type GoalContributionCreateWithoutGoalInput = {
    id?: string
    amount: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalContributionsInput
  }

  export type GoalContributionUncheckedCreateWithoutGoalInput = {
    id?: string
    amount: number
    date?: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalContributionCreateOrConnectWithoutGoalInput = {
    where: GoalContributionWhereUniqueInput
    create: XOR<GoalContributionCreateWithoutGoalInput, GoalContributionUncheckedCreateWithoutGoalInput>
  }

  export type GoalContributionCreateManyGoalInputEnvelope = {
    data: GoalContributionCreateManyGoalInput | GoalContributionCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    funds?: FundUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    funds?: FundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GoalContributionUpsertWithWhereUniqueWithoutGoalInput = {
    where: GoalContributionWhereUniqueInput
    update: XOR<GoalContributionUpdateWithoutGoalInput, GoalContributionUncheckedUpdateWithoutGoalInput>
    create: XOR<GoalContributionCreateWithoutGoalInput, GoalContributionUncheckedCreateWithoutGoalInput>
  }

  export type GoalContributionUpdateWithWhereUniqueWithoutGoalInput = {
    where: GoalContributionWhereUniqueInput
    data: XOR<GoalContributionUpdateWithoutGoalInput, GoalContributionUncheckedUpdateWithoutGoalInput>
  }

  export type GoalContributionUpdateManyWithWhereWithoutGoalInput = {
    where: GoalContributionScalarWhereInput
    data: XOR<GoalContributionUpdateManyMutationInput, GoalContributionUncheckedUpdateManyWithoutGoalInput>
  }

  export type GoalCreateWithoutContributionsInput = {
    id?: string
    name: string
    description: string
    targetAmount: number
    currentAmount: number
    targetDate: Date | string
    category?: string | null
    priority?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateWithoutContributionsInput = {
    id?: string
    name: string
    description: string
    targetAmount: number
    currentAmount: number
    targetDate: Date | string
    category?: string | null
    priority?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GoalCreateOrConnectWithoutContributionsInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutContributionsInput, GoalUncheckedCreateWithoutContributionsInput>
  }

  export type UserCreateWithoutGoalContributionsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    funds?: FundCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalContributionsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    funds?: FundUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalContributionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalContributionsInput, UserUncheckedCreateWithoutGoalContributionsInput>
  }

  export type GoalUpsertWithoutContributionsInput = {
    update: XOR<GoalUpdateWithoutContributionsInput, GoalUncheckedUpdateWithoutContributionsInput>
    create: XOR<GoalCreateWithoutContributionsInput, GoalUncheckedCreateWithoutContributionsInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutContributionsInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutContributionsInput, GoalUncheckedUpdateWithoutContributionsInput>
  }

  export type GoalUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutGoalContributionsInput = {
    update: XOR<UserUpdateWithoutGoalContributionsInput, UserUncheckedUpdateWithoutGoalContributionsInput>
    create: XOR<UserCreateWithoutGoalContributionsInput, UserUncheckedCreateWithoutGoalContributionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalContributionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalContributionsInput, UserUncheckedUpdateWithoutGoalContributionsInput>
  }

  export type UserUpdateWithoutGoalContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    funds?: FundUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    funds?: FundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBudgetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    funds?: FundCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBudgetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    funds?: FundUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBudgetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
  }

  export type UserUpsertWithoutBudgetsInput = {
    update: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    funds?: FundUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    funds?: FundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    funds?: FundCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    funds?: FundUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    funds?: FundUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    funds?: FundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLinkedAccountsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    funds?: FundCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinkedAccountsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    funds?: FundUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinkedAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinkedAccountsInput, UserUncheckedCreateWithoutLinkedAccountsInput>
  }

  export type UserUpsertWithoutLinkedAccountsInput = {
    update: XOR<UserUpdateWithoutLinkedAccountsInput, UserUncheckedUpdateWithoutLinkedAccountsInput>
    create: XOR<UserCreateWithoutLinkedAccountsInput, UserUncheckedCreateWithoutLinkedAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinkedAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinkedAccountsInput, UserUncheckedUpdateWithoutLinkedAccountsInput>
  }

  export type UserUpdateWithoutLinkedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    funds?: FundUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinkedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    funds?: FundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChatMessagesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    funds?: FundCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    funds?: FundUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    funds?: FundUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    funds?: FundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFundsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFundsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    investmentHistory?: InvestmentHistoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    goalContributions?: GoalContributionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFundsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFundsInput, UserUncheckedCreateWithoutFundsInput>
  }

  export type UserUpsertWithoutFundsInput = {
    update: XOR<UserUpdateWithoutFundsInput, UserUncheckedUpdateWithoutFundsInput>
    create: XOR<UserCreateWithoutFundsInput, UserUncheckedCreateWithoutFundsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFundsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFundsInput, UserUncheckedUpdateWithoutFundsInput>
  }

  export type UserUpdateWithoutFundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    investmentHistory?: InvestmentHistoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    goalContributions?: GoalContributionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvestmentCreateManyUserInput = {
    id?: string
    name: string
    symbol?: string | null
    type: string
    value: number
    shares: number
    price: number
    costBasis: number
    return: number
    returnPercentage: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentHistoryCreateManyUserInput = {
    id?: string
    investmentId: string
    date: Date | string
    value: number
  }

  export type DebtCreateManyUserInput = {
    id?: string
    name: string
    type: string
    amount: number
    remainingBalance: number
    interestRate: number
    monthlyPayment: number
    dueDate: string
    nextPaymentDate: Date | string
    startDate: Date | string
    endDate: Date | string
    payoffProgress: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateManyUserInput = {
    id?: string
    name: string
    description: string
    targetAmount: number
    currentAmount: number
    targetDate: Date | string
    category?: string | null
    priority?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalContributionCreateManyUserInput = {
    id?: string
    amount: number
    date?: Date | string
    goalId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetCreateManyUserInput = {
    id?: string
    category: string
    amount: number
    isIncome?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    amount: number
    description: string
    category: string
    date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkedAccountCreateManyUserInput = {
    id?: string
    name: string
    type: string
    status?: string
    lastSync: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type FundCreateManyUserInput = {
    id?: string
    name: string
    description: string
    amount: number
    category?: string | null
    startDate?: Date | string | null
    linkedAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    shares?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costBasis?: FloatFieldUpdateOperationsInput | number
    return?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: InvestmentHistoryUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    shares?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costBasis?: FloatFieldUpdateOperationsInput | number
    return?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: InvestmentHistoryUncheckedUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    shares?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    costBasis?: FloatFieldUpdateOperationsInput | number
    return?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    investment?: InvestmentUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type InvestmentHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type InvestmentHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DebtUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    monthlyPayment?: FloatFieldUpdateOperationsInput | number
    dueDate?: StringFieldUpdateOperationsInput | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payoffProgress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    monthlyPayment?: FloatFieldUpdateOperationsInput | number
    dueDate?: StringFieldUpdateOperationsInput | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payoffProgress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    monthlyPayment?: FloatFieldUpdateOperationsInput | number
    dueDate?: StringFieldUpdateOperationsInput | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payoffProgress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: GoalContributionUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: GoalContributionUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalContributionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type GoalContributionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    goalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalContributionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    goalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    isIncome?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSync?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSync?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastSync?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentHistoryCreateManyInvestmentInput = {
    id?: string
    userId: string
    date: Date | string
    value: number
  }

  export type InvestmentHistoryUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutInvestmentHistoryNestedInput
  }

  export type InvestmentHistoryUncheckedUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type InvestmentHistoryUncheckedUpdateManyWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type GoalContributionCreateManyGoalInput = {
    id?: string
    amount: number
    date?: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalContributionUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalContributionsNestedInput
  }

  export type GoalContributionUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalContributionUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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