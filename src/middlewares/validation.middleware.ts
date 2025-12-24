import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError, ZodIssue } from "zod";

export const validate =
    (schema: ZodSchema, property: "body" | "params" = "body") =>
    (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[property]);

    if (!result.success) {
        const zodError: ZodError = result.error;
        const errors = zodError.issues.map((err: ZodIssue) => ({
        field: err.path.join("."),
        message: err.message
        }));

        return res.status(400).json({ errors });
    }

    req[property] = result.data;
    next();
};
