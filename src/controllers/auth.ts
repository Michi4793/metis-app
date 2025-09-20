import { Request, Response } from 'express';
import { Auth0Service } from '../services/auth0';

export class AuthController {
    private auth0Service: Auth0Service;

    constructor() {
        this.auth0Service = new Auth0Service();
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.auth0Service.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const token = await this.auth0Service.login(req.body);
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }

    public async logout(req: Request, res: Response): Promise<void> {
        try {
            await this.auth0Service.logout(req.body);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}