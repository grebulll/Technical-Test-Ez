export interface RotationSlot {
    time: string;
    assignments: { table: string; presenter: string }[];
  }
  
  const SHIFT_TIMES = ["07:00", "15:00", "23:00"];
  const SLOT_DURATION = 20;
  const TOTAL_SLOTS = (8 * 60) / SLOT_DURATION;
  
  export const computeRotationSchedule = (presenters: string[], tables: string[]): RotationSlot[] => {
    let schedule: RotationSlot[] = [];
  
    SHIFT_TIMES.forEach((startTime) => {
      let availablePresenters = [...presenters];
      let currentTime = new Date();
      let [hours, minutes] = startTime.split(":").map(Number);
      currentTime.setHours(hours, minutes, 0, 0);
  
      while (availablePresenters.length < tables.length + 1) {
        availablePresenters.push(`Break`);
      }
  
      for (let i = 0; i < TOTAL_SLOTS; i++) {
        let timeSlot = currentTime.toTimeString().substring(0, 5);
        let assignments = tables.map((table, index) => ({
          table,
          presenter: availablePresenters[index] || "Break",
        }));
  
        assignments.push({ table: "Break Slot", presenter: availablePresenters[tables.length] });
        schedule.push({ time: timeSlot, assignments });
  
        const firstPresenter = availablePresenters.shift();
        if (firstPresenter) {
          availablePresenters.push(firstPresenter);
        }
  
        currentTime.setMinutes(currentTime.getMinutes() + SLOT_DURATION);
      }
    });
  
    return schedule;
  };
  