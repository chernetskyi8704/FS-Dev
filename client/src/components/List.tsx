import { ReactNode } from "react";

interface ListProps<T> {
  items: T[] | undefined;
  renderItem: (item: T) => ReactNode;
}

export const List = <T,>({ items, renderItem }: ListProps<T>) => {
  return <ul>{items?.map(renderItem)}</ul>;
};
