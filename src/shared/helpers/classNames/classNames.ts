type Mods = Record<string, boolean | string>;
export function classNames(
  className: string,
  mods: Mods = {}, // по умолчанию пустой объект
  additional: string[] = [], // по умолчанию пустой массив
): string {
  return [
    className,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key]) => key),
  ].join(' ');
}

console.log(classNames('btn', { active: true, disabled: false }, ['extra']));
// Ожидается: 'btn active extra'

console.log(classNames('btn', {}, []));
// Ожидается: 'btn'

console.log(classNames('btn', { active: 'true', hidden: false }, ['extra']));
// Ожидается: 'btn active extra'
