import { Equal, Expect } from "../helper";

interface Values {
    email: string;
    firstName: string;
    lastName: string;
}

type ValuesAsUnionOfTuples = unknown

type tests = [
    Expect<
        Equal<
            ValuesAsUnionOfTuples,
            ["email", string] | ["firstName", string] | ["lastName", string]
        >
    >
];
