# zenScape
---
We're developing a mobile application called Zenscape using React Native, Expo, TypeScript and NativeWind that plays therapeutic audio frequencies based on a user's mood selection. The application needs to provide users with an intuitive way to select moods and listen to corresponding frequency-based audio to improve their mental well-being. A key component of this system is the FrequencyGenerator, which must map user mood selections to appropriate frequency audio.
---

## Options Considered
## Option 1: Direct API Integration

Directly fetch frequencies from the API when needed
No caching mechanism
Simple implementation

## Option 2: Local Audio Library

Bundle all frequency audio files with the application
No network dependency
Large app size

## Option 3: Hybrid Approach with Caching (Selected)

Fetch frequencies from online sources
Cache previously accessed frequencies
Controller layer to orchestrate between online and cached 

# Implementation Notes
- Receive mood selection from MoodSelector component
- Check FrequencyCache for cached frequency
- If cached, use immediately; if not, request from FrequencyService
- Return frequency data to AudioPlayer component
- Store newly fetched frequencies in cache