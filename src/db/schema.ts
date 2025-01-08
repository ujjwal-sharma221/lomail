import {
  boolean,
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

const createdAt = timestamp("created_at").notNull().defaultNow();
const updatedAt = timestamp("updated_at")
  .notNull()
  .defaultNow()
  .$onUpdate(() => new Date());

export const EventsTable = pgTable(
  "events",
  {
    id: uuid().primaryKey().defaultRandom(),
    name: text("name").notNull(),
    durationInMinutes: integer("duration_in_minutes").notNull(),
    description: text("description").notNull(),
    clerkUserId: text("clerk_user_id").notNull(),
    isActive: boolean("is_active").notNull().default(true),
    createdAt,
    updatedAt,
  },
  (table) => [index("clerk_user_id_index").on(table.clerkUserId)],
);

export const ScheduledEventsTable = pgTable("scheduled_events", {
  id: uuid().primaryKey().defaultRandom(),
  timeZone: text("timezone").notNull(),
  clerkUserId: text("clerk_user_id").notNull().unique(),
  createdAt,
  updatedAt,
});
