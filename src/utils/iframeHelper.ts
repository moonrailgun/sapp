export function stringToFunc(funcStr: string) {
  let func = new Function(`return ${funcStr}`);
  return func();
}
