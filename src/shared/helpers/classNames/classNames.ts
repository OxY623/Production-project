type Mods = Record<string, boolean | string>;

export function classNames(
  className: string = "", // Указали значение по умолчанию
  mods: Mods = {}, // Пустой объект по умолчанию
  additional: (string | undefined | null)[] = [], // Указали расширенный тип
): string {
  return [
    className,
    ...additional.filter((item): item is string => Boolean(item)), // Фильтруем undefined/null
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value)) // Учитываем только truthy значения
      .map(([key]) => key),
  ]
    .filter(Boolean) // Убираем возможные пустые значения
    .join(" "); // Склеиваем строки с пробелом
}

console.log(classNames("btn", {active: true, disabled: false}, ["extra"]));
// Ожидается: 'btn active extra'

console.log(classNames("btn", {}, []));
// Ожидается: 'btn'

console.log(classNames("btn", {active: "true", hidden: false}, ["extra"]));
// Ожидается: 'btn active extra'
