import {
  type User, type InsertUser,
  type Channel, type InsertChannel,
  type Movie, type InsertMovie,
  type Plan, type InsertPlan,
  type Faq, type InsertFaq,
  type ContactMessage, type InsertContactMessage,
  type Testimonial, type InsertTestimonial,
  users, channels, movies, plans, faqs, contactMessages, testimonials,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getChannels(): Promise<Channel[]>;
  createChannel(channel: InsertChannel): Promise<Channel>;
  getMovies(): Promise<Movie[]>;
  createMovie(movie: InsertMovie): Promise<Movie>;
  getPlans(): Promise<Plan[]>;
  createPlan(plan: InsertPlan): Promise<Plan>;
  getFaqs(): Promise<Faq[]>;
  createFaq(faq: InsertFaq): Promise<Faq>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getChannels(): Promise<Channel[]> {
    return db.select().from(channels);
  }

  async createChannel(channel: InsertChannel): Promise<Channel> {
    const [result] = await db.insert(channels).values(channel).returning();
    return result;
  }

  async getMovies(): Promise<Movie[]> {
    return db.select().from(movies).orderBy(desc(movies.id));
  }

  async createMovie(movie: InsertMovie): Promise<Movie> {
    const [result] = await db.insert(movies).values(movie).returning();
    return result;
  }

  async getPlans(): Promise<Plan[]> {
    return db.select().from(plans).orderBy(plans.sortOrder);
  }

  async createPlan(plan: InsertPlan): Promise<Plan> {
    const [result] = await db.insert(plans).values(plan).returning();
    return result;
  }

  async getFaqs(): Promise<Faq[]> {
    return db.select().from(faqs).orderBy(faqs.sortOrder);
  }

  async createFaq(faq: InsertFaq): Promise<Faq> {
    const [result] = await db.insert(faqs).values(faq).returning();
    return result;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [result] = await db.insert(contactMessages).values(message).returning();
    return result;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return db.select().from(testimonials);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [result] = await db.insert(testimonials).values(testimonial).returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
