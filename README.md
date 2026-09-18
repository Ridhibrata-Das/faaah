# Balaram AI — Standalone Web App

A standalone Next.js web application for the **Balaram AI** feature — an AI-powered agricultural assistant with voice, camera, and chatbot capabilities.

## Setup

1. **Clone/upload this folder to GitHub**

2. **Set the environment variable in Vercel:**
   - `NEXT_PUBLIC_GEMINI_API_KEY` = your Gemini API key

3. **Deploy on Vercel** — just import the repo, Vercel will auto-detect Next.js.

## Project Structure

```
app/
  layout.tsx          ← Minimal root layout (no sidebars, no popups)
  page.tsx            ← Balaram AI main page (tabs: Voice/Camera, Chatbot, Gemma)
  components/         ← CameraPreview, Chatbot, ChartDisplay, GemmaInterface
  services/           ← Gemini WebSocket, transcription, chat services
  utils/              ← Audio processing utilities
components/           ← Shared shadcn/ui components
lib/                  ← Utility functions
public/               ← Static assets (worklets, icons etc.)
```

## Features
- **Voice/Camera AI tab**: Live camera + microphone connected to Gemini Live API
- **Chatbot tab**: Text-based conversation with Gemini
- **Gemma Model tab**: Gemma 3 multimodal interface

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GEMINI_API_KEY` | Google Gemini API key (required) |
