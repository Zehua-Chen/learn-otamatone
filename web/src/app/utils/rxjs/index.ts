import { Observable, OperatorFunction, map } from 'rxjs';

export type Equals<T> = (a: T, b: T) => boolean;

function identityEquals<T>(a: T, b: T): boolean {
  return a === b;
}

export type IsSameWithIndexOperator<T> = OperatorFunction<
  [T | null, T[]],
  [T | null, boolean]
>;

/**
 * Check if an element is the same as another element at a specific index in
 * an array
 * @param index given an array of elements, get the index used for comparison
 * @returns
 */
function isSameWithIndex<T>(
  index: (elements: T[]) => number,
  equals: Equals<T>
): IsSameWithIndexOperator<T> {
  return (
    source: Observable<[T | null, T[]]>
  ): Observable<[T | null, boolean]> => {
    return source.pipe(
      map(([element, elements]) => {
        if (!element) {
          return [null, false];
        }

        const indexValue = index(elements);

        if (indexValue >= elements.length || indexValue < 0) {
          return [element, false];
        }

        if (equals(element, elements[indexValue])) {
          return [element, true];
        }

        return [element, false];
      })
    );
  };
}

/**
 * If the element is the first in array
 * @param source
 * @returns
 */
export function isLast<T>(
  equals: Equals<T> = identityEquals
): IsSameWithIndexOperator<T> {
  return (source) =>
    source.pipe(isSameWithIndex<T>((elements) => elements.length - 1, equals));
}

/**
 * If the element is the last in array
 * @param source
 * @returns
 */
export function isFirst<T>(
  equals: Equals<T> = identityEquals
): IsSameWithIndexOperator<T> {
  return (source) => source.pipe(isSameWithIndex<T>(() => 0, equals));
}
