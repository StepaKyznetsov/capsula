export type Category =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14;

type EventType = "haircut" | "coloring" | "none";

export interface Event {
  start: Date;
  end: Date;
  title: string;
  id: number | null;
  type: EventType;
}
