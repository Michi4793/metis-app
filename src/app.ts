import express from 'express';
import bodyParser from 'body-parser';
import habitRoutes from './routes/habits';
import authRoutes from './routes/auth';
import profileRoutes from './routes/profile';
import friendsRoutes from './routes/friends';
import clubsRoutes from './routes/clubs';
import goalsRoutes from './routes/goals';
import journalRoutes from './routes/journal';
import questsRoutes from './routes/quests';
import aiRoutes from './routes/ai';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/habits', habitRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/friends', friendsRoutes);
app.use('/api/clubs', clubsRoutes);
app.use('/api/goals', goalsRoutes);
app.use('/api/journal', journalRoutes);
app.use('/api/quests', questsRoutes);
app.use('/api/ai', aiRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});