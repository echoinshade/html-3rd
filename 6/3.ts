function zip<T, U>(first: T[], second: U[]): Array<[T, U]> {
    const minLength = Math.min(first.length, second.length);
    const result: Array<[T, U]> = [];
    for (let i = 0; i < minLength; i++) {
      result.push([first[i], second[i]])
    }
    return result
  }
  
  const q1: Array<[number, string]> = zip([1, 2, 3, 4, 5, 6], ["1", "2", "3"]);
  const q2: Array<[boolean, boolean]> = zip([true], [false, false]);
  console.log(q1, q2);
  
  function groupBy<T, K, V>(source: T[], keySelector: (item: T, index: number) => K, valueSelector: (item: T, index: number) => V): Map<K, V[]> {
    const result = new Map<K, V[]>();
    for (let i = 0; i < source.length; i++) {
      const item = source[i];
      const key = keySelector(item, i);
      const value = valueSelector(item, i);
      if (!result.has(key)) {
        result.set(key, []);
      }
      result.get(key)!.push(value); // Non-null assertion operator (!)
    }
    return result;
  }
  
  const q3: Map<number, number[]> = groupBy([1, 2, 3, 4], x => x % 2, x => x + 1);
  const q4: Map<boolean, {x: string, i: number}[]>  = groupBy(["aaa", "bbb", "cc", "q", "lalaka"], (_, i) => i%2 === 0, (x, i) => ({i, x}));
  console.log(q3, q4);
  