import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/channels", async (_req, res) => {
    const channels = await storage.getChannels();
    res.json(channels);
  });

  app.get("/api/movies", async (_req, res) => {
    const movies = await storage.getMovies();
    res.json(movies);
  });

  app.get("/api/plans", async (_req, res) => {
    const plans = await storage.getPlans();
    res.json(plans);
  });

  app.get("/api/faqs", async (_req, res) => {
    const faqs = await storage.getFaqs();
    res.json(faqs);
  });

  app.get("/api/testimonials", async (_req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  app.post("/api/contact", async (req, res) => {
    const parsed = insertContactMessageSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }
    const message = await storage.createContactMessage(parsed.data);
    res.status(201).json(message);
  });

  return httpServer;
}
