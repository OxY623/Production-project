type Mods = Record<string, boolean | string>;
type Additional = string | undefined | null;

export function classNames(
  className: string = "",
  mods: Mods = {},
  additional: Array<Additional> = [],
): string {
  return [
    className,
    ...additional.filter((item): item is string => Boolean(item)),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value)) // Учитываем только truthy значения
      .map(([key]) => key),
  ]
    .filter(Boolean) // Убираем возможные пустые значения
    .join(" "); // Склеиваем строки с пробелом
}

// console.log(classNames("btn", {active: true, disabled: false}, ["extra"]));
// // Ожидается: 'btn active extra'

// console.log(classNames("btn", {}, []));
// // Ожидается: 'btn'

// console.log(classNames("btn", {active: "true", hidden: false}, ["extra"]));
// // Ожидается: 'btn active extra'
