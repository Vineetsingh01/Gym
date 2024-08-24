import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        A top workout session typically includes a balance of exercises that target different muscle groups, blending strength training, cardio, and flexibility. Here's a well-rounded session you can try
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        A bootcamp workout is an intense, full-body session that combines strength training, cardio, and high-intensity interval training (HIIT) to maximize calorie burn and improve overall fitness. Here's a feature bootcamp workout:
        </p>
        <div className="bootcamps">
          <div>
            <h4>Warm-Up (5-10 minutes).</h4>
            <p>
            Jump Rope: 2 minutes ,
            High Knees: 1 minute ,
            Butt Kicks: 1 minute 
            </p>
          </div>
          <div>
            <h4>Main Workout (30-40 minutes).</h4>
            <p>1. Strength & Cardio Circuit (Repeat 3 times),
              Burpees: 15 reps,
              Squat Jumps: 20 reps,
              Push-Ups: 15 reps,
              Mountain Climbers: 30 seconds,
              Dumbbell or Kettlebell Swings: 15 reps,
              Walking Lunges: 12 reps per leg,
              High Plank to Low Plank: 10 reps
            </p>
          </div>
          <div>
            <h4>2. Partner Drills or Team Challenges (Optional).</h4>
            <p>
            Tug-of-War: 2-3 minutes
            Medicine Ball Passes: 15-20 passes
            Relay Sprints: 3 rounds
            </p>
          </div>
          <div>
            <h4>Cool Down (5-10 minutes).</h4>
            <p>
            Static Stretching: Focus on all major muscle groups (hold each stretch for 20-30 seconds) , 
            Deep Breathing: To relax and lower your heart rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;